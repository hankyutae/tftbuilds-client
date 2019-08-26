import React from 'react';
import './ChampCardUltimate.css';
import ReactHtmlParser from 'react-html-parser';

class ChampCardUltimate extends React.Component {
  stringFixer = (string) => {
    const arr = [];
    let stack = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '@') {
        if (stack.length === 0) {

          arr.push('<strong>@');
          stack.push(0);
        }
        else {
          stack.pop();
          arr.push('@</strong>');
        }
      }
      else {
        if (stack.length === 0) {
          arr.push(string[i])
        }
        else {
          arr.push(string[i].toLowerCase())
        }
      }
    }
    return arr.join('');
  }
  parseDesc = (stars = 1, apmult, statMod) => {
    let nameToVal = {};
    this.props.champInfo.ability.variables.forEach(variable => {
      nameToVal[variable.key.toLowerCase()] = variable.values[stars];
    })
    let desc = this.stringFixer(this.props.champInfo.ability.desc);
    Object.keys(nameToVal).forEach((name) => {
      desc = desc.split(`@${name.toLowerCase()}@`).join(nameToVal[name]);
      desc = desc.split(`@${name.toLowerCase()}percent@`).join(this.roundToTwoDecimalPlaces(nameToVal[name] * 100) + '%');
      desc = desc.split(`@modified${name.toLowerCase()}@`).join(this.roundToTwoDecimalPlaces(nameToVal[name] * apmult))
    })


    let splitByAt = desc.split('@')
    //specialcases
    if (splitByAt.length > 1) {
      //cases where modifiedDamage/modifiedheal is needed and they have exactly one stat with string Damage/Heal in it
      let oneDamageNameCases = ['twisted fate', 'warwick', 'miss fortune', 'evelyn', 'nidalee', 'poppy', 'shyvana', 'lucian', 'rek\'sai', 'anivia', 'vayne'];
      let oneHealNameCases=['nidalee']

      //one modifiedDamage for many damage names
      let multipleDamageNameCases ={
        'swain':'totaldamage',
        'katarina':'totaldamage',
        'tristana':'chargebasedamage'
      }

      let multipleHealNameCases ={
        'swain':'totalheal',
        'rek\'sai':'healamount',
      }

      //One modifieddamage is the result of two stat multiplications
      let oneToTwoDamageNameCases={
        'garen':['damagepertick','etotalticks'],
      };
      let stats=this.props.champInfo.stats;
      let name=this.props.champInfo.name.toLowerCase();
      let rounding=this.roundToTwoDecimalPlaces;
      function quickCalc(statType){
        let base=stats[statType];
        if(statType==='damage'||statType==='hp'){
          base*=statMod.damageHealthScale[stars-1]
        }
        return rounding((base+statMod[statType].add)*statMod[statType].mult)
      }
      let oneToOneNameTimesOneStatCases={
        'akali':['critdamage','damage',quickCalc('critMultiplier')*apmult],
        'graves':['bonusdamage','damagemultiplier',quickCalc('damage')],
        'volibear':['chaindamage','chainadmult',quickCalc('damage')],
        'rengar':['leapdamage','admult',quickCalc('damage')],
        'draven':['bonusaddamage','admult',quickCalc('damage')],

      };

      for (let i = 1; i < splitByAt.length - 1; i++) {
        if(Object.keys(oneToOneNameTimesOneStatCases).includes(name)){
          if(oneToOneNameTimesOneStatCases[name][0]===splitByAt[i]){
            splitByAt[i]=this.roundToTwoDecimalPlaces(nameToVal[oneToOneNameTimesOneStatCases[name][1]]*oneToOneNameTimesOneStatCases[name][2] )
          }
        }
        if (splitByAt[i] === 'modifiedheal') {
          if (oneHealNameCases.includes(this.props.champInfo.name.toLowerCase())) {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal[Object.keys(nameToVal).find(name => name.toLowerCase().includes('heal'))] * apmult);
          }
          if(Object.keys(multipleHealNameCases).includes(this.props.champInfo.name.toLowerCase())) {
            splitByAt[i]=this.roundToTwoDecimalPlaces(nameToVal[multipleHealNameCases[this.props.champInfo.name.toLowerCase()]]*apmult);
          }

        }
        if (splitByAt[i] === 'modifieddamage') {
          if (oneDamageNameCases.includes(this.props.champInfo.name.toLowerCase())) {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal[Object.keys(nameToVal).find(name => name.toLowerCase().includes('damage'))] * apmult);
          }
          if(Object.keys(multipleDamageNameCases).includes(this.props.champInfo.name.toLowerCase())) {
            splitByAt[i]=this.roundToTwoDecimalPlaces(nameToVal[multipleDamageNameCases[this.props.champInfo.name.toLowerCase()]]*apmult);
          }
          if(Object.keys(oneToTwoDamageNameCases).includes(this.props.champInfo.name.toLowerCase())){
            let arr=oneToTwoDamageNameCases[this.props.champInfo.name.toLowerCase()];
            splitByAt[i]=this.roundToTwoDecimalPlaces(nameToVal[arr[0]]*nameToVal[arr[1]]*apmult);
          }
        }
        if (splitByAt[i] === 'modifiedshield') {
          if (this.props.champInfo.name.toLowerCase() === "kassadin") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['manasteal'] * apmult)
          }
        }
        if(splitByAt[i]==='targets'){
          if (this.props.champInfo.name.toLowerCase() === "kayle") {
            if(nameToVal['extratargets']!==undefined)
            splitByAt[i] = nameToVal['extratargets']+1; 
          }
        }
        if(splitByAt[i]==='executethreshholdpercent'){
          if (this.props.champInfo.name.toLowerCase() === "evelynn") {
            if(nameToVal['critthreshold']!==undefined)
              splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['critthreshold']*100)+'%'; 
          }
        }
        if(splitByAt[i]==='modifiedmaxdamage'){
          if (this.props.champInfo.name.toLowerCase() === "tristana") {
            if(nameToVal['maxchargedamage']!==undefined)
              splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['maxchargedamage']*apmult); 
          }
        }
        if(splitByAt[i]==='percentdamageincrease'){
          if (this.props.champInfo.name.toLowerCase() === "tristana") {
            if(nameToVal['percentdamageincreaseperstack']!==undefined)
              splitByAt[i] = nameToVal['percentdamageincreaseperstack']*100+'%'; 
          }
        }
        if(splitByAt[i]==='modifiedcritdamage'){
          if (this.props.champInfo.name.toLowerCase() === "evelynn") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['damage']*nameToVal['critmultiplier']); 
          }
        }
        if(splitByAt[i]==='critchance'){
          if (this.props.champInfo.name.toLowerCase() === "akali") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(quickCalc('critChance')*100)+'%'; 
          }
        }


      }
    }


    //final removing br
    return <div>{ReactHtmlParser(splitByAt.join(''))}</div>;

    /* let arr=this.props.champInfo.ability.desc.split('@');
    let sourceArr=this.props.champInfo.ability.variables;
    arr.forEach((string,index,arr)=>{
      for(let i=0;i<sourceArr.length;i++){
        if(sourceArr[i].key===string){
          arr[index]=`<strong>${sourceArr[i].values[stars]}</strong>`;
        }
        break;
      }
    });
    return arr.join(' '); */

  }
  roundToTwoDecimalPlaces = (num) => {
    const scale = Math.pow(10, 2);
    return Math.round(num * scale) / scale;
  }
  handleUltStat = (prop, apmult, mod, stars) => {
    if (mod.includes(prop.key) && apmult !== 1) {
      return <div className='adding-final'>
        {`${prop.values[stars]} * ${this.roundToTwoDecimalPlaces(apmult)} = `}
        <span className='adjusted-final'>
          {this.roundToTwoDecimalPlaces(prop.values[stars] * apmult)}
        </span>
      </div>;
    }
    else {
      return <div className='adding-final'>
        {prop.values[stars]}
      </div>;
    }
  }
  handleDumbCaseToSentenceCase = (str) => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] <= 'z' && str[i] >= 'a') {
        arr.push(str[i]);
      }
      else if (str[i] <= 'Z' && str[i] >= 'A') {
        arr.push(' ');
        arr.push(str[i]);
      }
    }
    return arr.join('');

  }
  render() {
    const stars = this.props.champ.stars;
    const apmult = this.props.statMod.ap.mult;
    const mod = this.props.statMod.ultDescAffectedByAp;
    return (
      <div className="build-stats-ultimate">
        <div className='build-ult-desc'>
          {this.parseDesc(stars, apmult, this.props.statMod)}
        </div>
        <div className='ult-prop-list'>
          {this.props.champInfo.ability.variables.map(prop => {
            return (
              <div className='ult-prop' key={prop.key}> {this.handleDumbCaseToSentenceCase(prop.key) + ': '} {this.handleUltStat(prop, apmult, mod, stars)} </div>
            )
          })}
        </div>
      </div>
    )
  }


}

export default ChampCardUltimate;