import React from 'react';
import './ChampCardUltimate.css';
import ReactHtmlParser from 'react-html-parser';
import {getBaseStat,getFinalStat,roundToNDecimalPlaces} from '../../services/stat-calc-helpers';

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
  parseDesc = (stars = 1, apmult, statMod, modNames = []) => {
    let nameToVal = {};
    this.props.champInfo.ability.variables.forEach(variable => {
      nameToVal[variable.name.toLowerCase()] = variable.value[stars];
    })
    let desc = this.stringFixer(this.props.champInfo.ability.desc);
    Object.keys(nameToVal).forEach((name) => {
      let temp;
      temp = desc.split(`@${name.toLowerCase()}@`)
      if(temp.length>1){
        desc=temp.join(nameToVal[name]);
      }
      temp = desc.split(`@${name.toLowerCase()}percent@`)
      if(temp.length>1){
        desc=temp.join(this.roundToTwoDecimalPlaces(nameToVal[name] * 100) + '%');
      }
      temp = desc.split(`@${name.toLowerCase()}*100@`)
      if(temp.length>1){
        desc=temp.join(this.roundToTwoDecimalPlaces(nameToVal[name] * 100));
      }
      temp = desc.split(`@modified${name.toLowerCase()}@`)
      if(temp.length>1){
        desc=temp.join(this.roundToTwoDecimalPlaces(nameToVal[name] * apmult))
        modNames.push(name)
      }
      temp = desc.split(`@modified${name.toLowerCase()}*100@`)
      if(temp.length>1){
        desc=temp.join(this.roundToTwoDecimalPlaces(nameToVal[name] * 100* apmult))
        modNames.push(name)
      }
    })


    let splitByAt = desc.split('@')
    //specialcases
    //Will be moving this portion to the database
    if (splitByAt.length > 1 && false) {
      //cases where modifiedDamage/modifiedheal is needed and they have exactly one stat with string Damage/Heal in it
      let oneDamageNameCases = ['twisted fate', 'warwick', 'miss fortune', 'evelyn', 'nidalee', 'poppy', 'shyvana', 'lucian', 'rek\'sai', 'anivia', 'vayne','pantheon','jinx'];
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
        'akali':['critdamage','damage',getFinalStat(this.props.champInfo,statMod,'critMultiplier',stars)*apmult],
        'graves':['bonusdamage','damagemultiplier',getFinalStat(this.props.champInfo,statMod,'damage',stars)],
        'volibear':['chaindamage','chainadmult',getFinalStat(this.props.champInfo,statMod,'damage',stars)],
        'rengar':['leapdamage','admult',getFinalStat(this.props.champInfo,statMod,'damage',stars)],
        'draven':['bonusaddamage','admult',getFinalStat(this.props.champInfo,statMod,'damage',stars)],

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
        else if (splitByAt[i] === 'modifieddamage') {
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
        else if (splitByAt[i] === 'modifiedshield') {
          if (this.props.champInfo.name.toLowerCase() === "kassadin") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['manasteal'] * apmult)
          }
        }
        else if(splitByAt[i]==='targets'){
          if (this.props.champInfo.name.toLowerCase() === "kayle") {
            if(nameToVal['extratargets']!==undefined)
            splitByAt[i] = nameToVal['extratargets']+1; 
          }
        }
        else if(splitByAt[i]==='executethreshholdpercent'){
          if (this.props.champInfo.name.toLowerCase() === "evelynn") {
            if(nameToVal['critthreshold']!==undefined)
              splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['critthreshold']*100)+'%'; 
          }
        }
        else if(splitByAt[i]==='modifiedmaxdamage'){
          if (this.props.champInfo.name.toLowerCase() === "tristana") {
            if(nameToVal['maxchargedamage']!==undefined)
              splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['maxchargedamage']*apmult); 
          }
        }
        else if(splitByAt[i]==='percentdamageincrease'){
          if (this.props.champInfo.name.toLowerCase() === "tristana") {
            if(nameToVal['percentdamageincreaseperstack']!==undefined)
              splitByAt[i] = nameToVal['percentdamageincreaseperstack']*100+'%'; 
          }
        }
        else if(splitByAt[i]==='modifiedcritdamage'){
          if (this.props.champInfo.name.toLowerCase() === "evelynn") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['damage']*nameToVal['critmultiplier']); 
          }
        }
        else if(splitByAt[i]==='critchance'){
          if (this.props.champInfo.name.toLowerCase() === "akali") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(quickCalc('critChance')*100)+'%'; 
          }
        }
        else if(splitByAt[i]==='selfultpercentage'){
          if (this.props.champInfo.name.toLowerCase() === "lissandra") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['selfulthealthpercent'])*100+'%'; 
          }
        }
        else if(splitByAt[i]==='selfultpercentage'){
          if (this.props.champInfo.name.toLowerCase() === "lissandra") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['selfulthealthpercent'])*100+'%'; 
          }
        }
        else if(splitByAt[i]==='percentattackspeed'){
          if (this.props.champInfo.name.toLowerCase() === "jinx") {
            splitByAt[i] = this.roundToTwoDecimalPlaces(nameToVal['attackspeedbonus'])*100+'%'; 
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
    if (mod.includes(prop.name.toLowerCase()) && apmult !== 1) {
      return <div className='adding-final'>
        {`${prop.value[stars]} * ${this.roundToTwoDecimalPlaces(apmult)} = `}
        <span className='adjusted-final'>
          {this.roundToTwoDecimalPlaces(prop.value[stars] * apmult)}
        </span>
      </div>;
    }
    else {
      return <div className='adding-final'>
        {prop.value[stars]}
      </div>;
    }
  }
  handleDumbCaseToSentenceCase = (str) => {
    const arr = [ str[0] ];
    for (let i = 1; i < str.length; i++) {
      if (str[i] <= 'z' && str[i] >= 'a') {
        arr.push(str[i]);
      }
      else if (str[i] <= 'Z' && str[i] >= 'A') {
        if(str[i-1] <= 'Z' && str[i-1] >= 'A'){
        }
        else{
          arr.push(' ');
        }
        arr.push(str[i]);
      }
    }
    return arr.join('');

  }
  render() {
    const stars = this.props.champ.stars;
    const apmult = this.props.statMod.ap.mult;
    //const mod = this.props.statMod.ultDescAffectedByAp;
    const modifiedStats =[];
    return (
      <div className="build-stats-ultimate">
        <div className='build-ult-desc'>
          {this.parseDesc(stars, apmult, this.props.statMod, modifiedStats)}
        </div>
        <div className='ult-prop-list'>
          {this.props.champInfo.ability.variables.map(prop => {
            return (
              <div className='ult-prop' key={prop.name}> {this.handleDumbCaseToSentenceCase(prop.name) + ': '} {this.handleUltStat(prop, apmult, modifiedStats, stars)} </div>
            )
          })}
        </div>
      </div>
    )
  }


}

export default ChampCardUltimate;