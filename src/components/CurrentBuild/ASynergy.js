/* eslint-disable no-loop-func */
import React from 'react';
import ImgLink from '../../services/create-img-link-service';
import './ASynergy.css';

class ASynergy extends React.Component {
  state = {
    isExpanded: false
  }
  handleExpand = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  };
  stringFixer = (string) => {
    const arr = [];
    let stack = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '@') {
        arr.push(string[i]);
        if (stack.length === 0) {
          stack.push(0);
        }
        else {
          stack.pop();
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
  parseDesc = (trait) => {
    let effects = trait.effects;
    let desc = this.stringFixer(trait.desc);
    //Currently row and expandedrow never appears in the same desc together.
    let expandrow = desc.split('<row>');  
    let expandRow = desc.split('<expandRow>');
    let parsedRows = [];

    //If no rows at all
    if(expandRow.length < 2 && expandrow.length < 2){
      effects.forEach((effect, effindex) => {
        let namesArr = [];
        let valuesArr = [];
        effect.vars.forEach(varseffect => {
          namesArr.push(varseffect.name);
          valuesArr.push(varseffect.value);
        })
        namesArr.push("MinUnits");
        valuesArr.push(effect.minUnits);
        namesArr.push("MaxUnits");
        valuesArr.push(effect.maxUnits);


        namesArr.forEach((name, index) => {
          //If main description randomly depends on synergy strength
          //really shouldn't though
          //if(effindex===trait.effectNum || (trait.effectNum===-1))
          desc = desc.split(`@${name.toLowerCase()}@`).join(valuesArr[index]);
        })
      })
    }

    if (expandRow.length >= 2) {
      desc = expandRow[0];
      //get rid of <br><br> with exceptions
      /* if(!expandedRowExceptionsToBrBr.includes(trait.name)){
        desc=desc.substring(0,expandRow[0].length-8);
      } */
      //Currently <br><br> is there all the time, and if going to expandRow, should always be.
      /* desc = desc.substring(0, desc.length - 8); */
      /* 
      desc = desc.split("<br>").join("\n"); */

      //Get rid of </expandRow> only take the first element.
      let row = expandRow[1].split('</expandRow>')[0];

      //For each index of effect, need a row of description
      effects.forEach((effect, effindex) => {
        let namesArr = [];
        let valuesArr = [];
        effect.vars.forEach(varseffect => {
          namesArr.push(varseffect.name);
          valuesArr.push(varseffect.value);
        })
        namesArr.push("MinUnits");
        valuesArr.push(effect.minUnits);
        namesArr.push("MaxUnits");
        valuesArr.push(effect.maxUnits);

        let parsedRow = row;
        //Modify row to get rid of @stat@
        namesArr.forEach((name, index) => {
          parsedRow = (parsedRow.split(`@${name.toLowerCase()}@`).join(valuesArr[index]));
          //If main description randomly depends on synergy strength
          //really shouldn't though
          //if(effindex===trait.effectNum || (trait.effectNum===-1))
          desc = desc.split(`@${name.toLowerCase()}@`).join(valuesArr[index]);
        })
        parsedRows.push(parsedRow);
      })
    }

    
    if (expandrow.length >= 2) {
      desc = expandrow.shift();
      //get rid of <br><br>
      /* if(!rowExceptionsToBrBr.includes(traitInfo.name)){
        desc=desc.substring(0,expandrow[0].length-8);
      } */
      //Currently it is always <br><br><(first)row> or desc
      //just starts with <row>, either case following code works.
      /* desc = desc.substring(0, desc.length - 8);
       */
      /* desc = desc.split("<br>").join("\n"); */

      let effIndex = 0;
      while (expandrow.length > 0 && effIndex<trait.effects.length) {
        //Get rid of </row> only take the first element.
        let row =expandrow[0].split('</row>')[0];
        let namesArr = [];
        let valuesArr = [];
        trait.effects[effIndex].vars.forEach(varseffect => {
          namesArr.push(varseffect.name);
          valuesArr.push(varseffect.value);
        })
        namesArr.push("MinUnits");
        valuesArr.push(trait.effects[effIndex].minUnits);
        namesArr.push("MaxUnits");
        valuesArr.push(trait.effects[effIndex].maxUnits);

        let parsedRow = row;
        //Modify row to get rid of @stat@
        namesArr.forEach((name, index) => {
          parsedRow = (parsedRow.split(`@${name.toLowerCase()}@`).join(valuesArr[index]));
          //If main description randomly depends on synergy strength
          //really shouldn't though
          //if(effindex===trait.effectNum || (trait.effectNum===-1))
          desc = desc.split(`@${name.toLowerCase()}@`).join(valuesArr[index]);
        })
        parsedRows.push(parsedRow);

        effIndex++;
        expandrow.shift();
      }
    }

    if(trait.name.toLowerCase()==='imperial'){
      desc=desc+'<br><br>Note: Not calculated into stats, but most tests show that Imperial buff appears to simply double the damage after everything else (AP/AD) is applied';
    }
    return (
      <div className='build-display-synergy-expand'>
        <div>
          {desc &&
            
            desc.split('<br>').map( (line,index)=>{
              return (
              <div key={index}>
              <span key={index}> {line}</span>
              </div>
              );
            })
          }
        </div>
        <br></br>
        {parsedRows.map((row, index) => {
          let className = index === trait.effectNum ? 'syn-desc-num-row' : 'syn-desc-num-row syn-desc-opaque'
          return (
            <div key={index} className={className} >
              {row}
            </div>
          )
        })}
      </div>
    )

  }
  render() {
    let expandPortion = this.parseDesc(this.props.trait);


    if (this.props.trait.effectNum !== -1) {
      let traitBreakpoints = [];
      /* this.props.trait.effects.forEach((effect,index)=>{
        if(index!==this.props.trait.effectNum){
          traitBreakpoints.push(<div className="opaque">{effect.minUnits}</div>)
        }
        else
          traitBreakpoints.push(<div className="applied-effect">{effect.minUnits}</div>)
        if(index!==(this.props.trait.effects.length-1)){
          traitBreakpoints.push(<div className="opaque">{' < '}</div>)
        }
      }); */
      this.props.trait.effects.forEach((effect, index) =>
        traitBreakpoints.push(effect.minUnits))
      let first = traitBreakpoints.slice(0, this.props.trait.effectNum).join(' < ');
      let last = traitBreakpoints.slice(this.props.trait.effectNum + 1).join(' < ');
      if (first)
        first += ' < ';
      if (last)
        last = ' < ' + last;


      let traitTier;
      if (this.props.trait.effectNum === (this.props.trait.effects.length - 1)) {
        traitTier = 'gold-trait'
      }
      else if (this.props.trait.effectNum === 0) {
        traitTier = 'bronze-trait'
      }
      else {
        traitTier = 'silver-trait'
      }


      return (
        <div className='build-display-synergy' onClick={this.handleExpand}>
          <div className={`build-traits-icon-box ${traitTier}`} >
            <img className='build-traits-icon' src={ImgLink.createLink(this.props.trait.icon)} alt={this.props.trait.name + ' icon'} />
          </div>
          <div className='build-trait-count'>
            {this.props.trait.count}
          </div>
          <div className='build-trait-effect'>
            <div>
              {this.props.trait.name}
            </div>
            <div className='trait-progression'>
              <span className='opaque'>{first}</span>
              <span className='applied-effect'> {this.props.trait.effects[this.props.trait.effectNum].minUnits} </span>
              <span className='opaque'>{last}</span>
            </div>
          </div>
          {this.state.isExpanded && expandPortion}
        </div>
      );


    }
    else {


      return (
        <div className='build-display-synergy' onClick={this.handleExpand}>
          <div className='build-traits-icon-box no-trait'>
            <img className='build-traits-icon' src={ImgLink.createLink(this.props.trait.icon)} alt={this.props.trait.name + ' icon'} />
          </div>
          <div className='build-trait-effect'>
            <div>
              {this.props.trait.name}
            </div>
            <div className='trait-progression'>
              <span className=''> {this.props.trait.count + ' / ' + this.props.trait.effects[0].minUnits} </span>
            </div>
          </div>
          {this.state.isExpanded && expandPortion}
        </div>
      );
    }


  }

}

export default ASynergy;