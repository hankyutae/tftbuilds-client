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
    this.props.champInfo.ability.variables.forEach(variable=>{
      namesArr.push(variable.key)
      if(variable.values==null)
        valuesArr.push('NULL')
      else
        valuesArr.push(variable.values[stars])
    })
    let desc=this.stringFixer(this.props.champInfo.ability.desc);
    namesArr.forEach((name,index)=>{
      desc=desc.split(`@${name.toLowerCase()}@`).join(valuesArr[index]);
      desc=desc.split(`@${name.toLowerCase()}*100@`).join(valuesArr[index]*100);
    })
    return desc;

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
  roundToTwoDecimalPlaces=(num)=>{
    const scale=Math.pow(10,2);
    return Math.round(num*scale)/scale;
  }
  handleUltStat=(prop,apmult,mod,stars)=>{
    if(mod.includes(prop.key) &&apmult!==1){
      return <div className='adding-final'>
       {`${prop.values[stars]} * ${this.roundToTwoDecimalPlaces(apmult)} = `}
       <span className='adjusted-final'> 
        {this.roundToTwoDecimalPlaces(prop.values[stars]*apmult)}  
       </span>
      </div>;
    }
    else{
      return <div className='adding-final'>
          {prop.values[stars]}
        </div>;
    }
  }
  handleDumbCaseToSentenceCase=(str)=>{
    const arr=[];
    for(let i=0;i<str.length;i++){
      if( str[i]<='z' && str[i]>='a'){
        arr.push(str[i]);
      }
      else if(str[i]<='Z' && str[i]>='A'){
        arr.push(' ');
        arr.push(str[i]);
      }
    }
    return arr.join('');
    
  }
  render() {
    const stars=this.props.champ.stars;
    const apmult=this.props.statMod.ap.mult;
    const mod=this.props.statMod.ultDescAffectedByAp;
    return (
      <div className="build-stats-ultimate">
        <div className='build-ult-desc'>
          {this.parseDesc(stars)}
        </div>
        <div className='ult-prop-list'>
          {this.props.champInfo.ability.variables.map(prop=>{
            return (
              <div className='ult-prop' key={prop.key}> {this.handleDumbCaseToSentenceCase(prop.key)+': '} {this.handleUltStat(prop,apmult,mod,stars)} </div>
            )
          })}
        </div>
      </div>
    )
  }


}

export default ChampCardUltimate;