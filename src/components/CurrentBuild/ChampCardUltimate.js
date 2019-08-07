import React from 'react';
import './ChampCardUltimate.css';
class ChampCardUltimate extends React.Component {
  stringFixer=(string)=>{
    const arr=[];
    let stack=[];
    for(let i=0;i<string.length;i++){
      if(string[i]==='@'){
        arr.push(string[i]);
        if(stack.length===0){
          stack.push(0);
        }
        else{
          stack.pop();
        }
      }
      else{
        if(stack.length===0){
          arr.push(string[i])
        }
        else{
          arr.push(string[i].toLowerCase())
        }
      }
    }
    return arr.join('');
  }
  parseDesc=(stars=1)=>{
    let namesArr=[];
    let valuesArr=[];
    this.props.champ.ability.variables.forEach(variable=>{
      namesArr.push(variable.key)
      valuesArr.push(variable.values[stars])
    })
    let desc=this.stringFixer(this.props.champ.ability.desc);

    console.log(desc);
    console.log(namesArr);
    console.log(valuesArr);
    namesArr.forEach((name,index)=>{
      desc=desc.split(`@${name.toLowerCase()}@`).join(valuesArr[index]);
    })
    return desc;

    /* let arr=this.props.champ.ability.desc.split('@');
    let sourceArr=this.props.champ.ability.variables;
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
  roundToTwoDecimalPlaces=(num)=>{
    const scale=Math.pow(10,2);
    return Math.round(num*scale)/scale;
  }
  handleUltStat=(prop,apmult,mod,stars)=>{
    if(mod.includes(prop.key)){
      return `${prop.values[stars]} * ${this.roundToTwoDecimalPlaces(apmult)} = ${this.roundToTwoDecimalPlaces(prop.values[stars]*apmult)}`;
    }
    else{
      return prop.values[stars];
    }
  }
  render() {
    const stars=this.props.champ.stars;
    const apmult=this.props.statMod.ap.mult;
    const mod=this.props.statMod.ultDescAffectedByAp;
    return (
      <div className="build-stats-ultimate">
        <p>
          {this.parseDesc(stars)}
        </p>
        <ul className='ult-prop-list'>
          {this.props.champ.ability.variables.map(prop=>{
            return (
              <li key={prop.key}> {prop.key+': '+this.handleUltStat(prop,apmult,mod,stars)} </li>
            )
          })}
        </ul>
      </div>
    )
  }


}

export default ChampCardUltimate;