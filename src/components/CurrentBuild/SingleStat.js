import React from 'react';
import './SingleStat.css';
import {getBaseStat,getFinalStat,roundToNDecimalPlaces} from '../../services/stat-calc-helpers';
class SingleStat extends React.Component {
  state={
    isExpanded:false
  }
  handleExpand=()=>{
    this.setState({
      isExpanded:!this.state.isExpanded
    })
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

  render(){
    const stars=this.props.champ.stars;
    const statType=this.props.statType;
    const baseStat=getBaseStat(this.props.champInfo,this.props.statMod,statType,stars);
    const statModifiers=this.props.statMod[statType];
    const finalStat=getFinalStat(this.props.champInfo,this.props.statMod,statType,stars)

    //initialMana stuff we can delete once we find out how to get it
    //Remmeber to also handle ROBOT in calculate-final-stats
    if(statType==="initalMana"){
      if(this.props.champInfo.traits.includes("Robot")){
        return (
          <td className={statType}>{this.props.champInfo["stats"]["mana"]}</td> 
        );
      }
    }
    
    //Wanna display appropriate info
    const didChangeAdd=(statModifiers.add!==0);
    const didChangeMult=(statModifiers.mult!==1);
    let calculationDisplayArray=[`${roundToNDecimalPlaces(baseStat,2)}`];
    if(didChangeAdd){
      calculationDisplayArray.unshift('(');
      calculationDisplayArray.push(` + ${roundToNDecimalPlaces(statModifiers.add,2)})`);
    }
    if(didChangeMult){
      calculationDisplayArray.push(` 
      * ${roundToNDecimalPlaces(statModifiers.mult,2)}`)
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