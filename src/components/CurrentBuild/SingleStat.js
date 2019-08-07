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
    let baseStat=this.props.champ["stats"][statType];
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
      if(this.props.champ.traits.includes("Robot")){
        return (
        <tr className={statType}>
          <td>{this.getDisplayStatType(statType)}</td>
          <td>{this.props.champ["stats"]["mana"]}</td> 
        </tr>
        );
      }
      return (
        <tr className={statType}>
          <td>{this.getDisplayStatType(statType)}</td>
          <td>{`Unknown + ${statModifiers.add}`}</td> 
        </tr>
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
      
      <tr className={statType} onClick={this.handleExpand}>
        <td>{this.getDisplayStatType(statType)}</td>
        {this.state.isExpanded? 
          <td>
            { (didChangeAdd||didChangeMult) &&
              calculationDisplayArray
            }
            <strong>
              {finalStat}
            </strong>
          </td> : 
          <td>
            <strong>
              {finalStat}
            </strong>
          </td> 
        }
      </tr>

    )
  }

}

export default SingleStat;