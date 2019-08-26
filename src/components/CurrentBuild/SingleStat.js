import React from 'react';
import './SingleStat.css';
class SingleStat extends React.Component {
  state={
    isExpanded:false
  }
  handleExpand=()=>{
    this.setState({
      isExpanded:!this.state.isExpanded
    })
  }
  getBaseStat=(statType,stars)=>{
    if(statType==='ap'){
      return;
    }
    let baseStat=this.props.champInfo["stats"][statType];
    if(statType==="hp" || statType==="damage"){
      baseStat*=this.props.statMod["damageHealthScale"][stars-1];
    }
    if(statType==="initalMana"){
      baseStat=0;
    }
    return baseStat;
  }
  getDisplayStatType=(statType)=>{
    let table={
      hp:"HP",
      mana:"Mana",
      damage:'Damage',
      initalMana:"Init. Mana",
      magicResist:"MR",
      critChance:"Crit. Chance",
      critMultiplier:"Crit. Mult.",
      attackSpeed:"AS",
      range:"Range",
      armor:'Armor',
    }
    return table[statType];
  }
  roundToNDecimalPlaces=(num,n)=>{
    const scale=Math.pow(10,n);
    return Math.round(num*scale)/scale;
  }

  render(){
    const stars=this.props.champ.stars;
    const statType=this.props.statType;
    const baseStat=this.getBaseStat(statType,stars);
    const statModifiers=this.props.statMod[statType];
    let finalStat=(baseStat+statModifiers.add)*statModifiers.mult;
    finalStat=this.roundToNDecimalPlaces(finalStat,2);

    //initialMana stuff we can delete once we find out how to get it
    //Remmeber to also handle ROBOT in calculate-final-stats
    if(statType==="initalMana"){
      if(this.props.champInfo.traits.includes("Robot")){
        return (
          <td className={statType}>{this.props.champInfo["stats"]["mana"]}</td> 
        );
      }
      return (
          <td className={statType}>{`Unknown + ${statModifiers.add}`}</td> 
        );
    }
    
    //Wanna display appropriate info
    const didChangeAdd=(statModifiers.add!==0);
    const didChangeMult=(statModifiers.mult!==1);
    let calculationDisplayArray=[`${this.roundToNDecimalPlaces(baseStat,2)}`];
    if(didChangeAdd){
      calculationDisplayArray.unshift('(');
      calculationDisplayArray.push(` + ${this.roundToNDecimalPlaces(statModifiers.add,2)})`);
    }
    if(didChangeMult){
      calculationDisplayArray.push(` 
      * ${this.roundToNDecimalPlaces(statModifiers.mult,2)}`)
    }
    calculationDisplayArray.push(' = ');

    return (
      
      <>
        {this.state.isExpanded? 
          <td className={(didChangeAdd||didChangeMult) ? `button-cursor button-hover-darken ${statType}`: statType} onClick={this.handleExpand}>
            { (didChangeAdd||didChangeMult) &&
              calculationDisplayArray
            }
            <strong>
              {finalStat}
            </strong>
          </td> : 
          <td className={(didChangeAdd||didChangeMult) ? `button-cursor button-hover-darken ${statType}`: statType} onClick={this.handleExpand}>
            <strong>
              {finalStat}
            </strong>
          </td> 
        }
      </>
    )
  }

}

export default SingleStat;