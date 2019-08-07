import React from 'react';
import ImgLink from '../../services/create-img-link-service';
import './ASynergy.css';

function ASynergy(props) {
  if (props.trait.effectNum !== -1) {
    let traitBreakpoints = [];
    /* props.trait.effects.forEach((effect,index)=>{
      if(index!==props.trait.effectNum){
        traitBreakpoints.push(<div className="opaque">{effect.minUnits}</div>)
      }
      else
        traitBreakpoints.push(<div className="applied-effect">{effect.minUnits}</div>)
      if(index!==(props.trait.effects.length-1)){
        traitBreakpoints.push(<div className="opaque">{' < '}</div>)
      }
    }); */
    props.trait.effects.forEach((effect, index) =>
      traitBreakpoints.push(effect.minUnits))
    let first = traitBreakpoints.slice(0, props.trait.effectNum).join(' < ');
    let last = traitBreakpoints.slice(props.trait.effectNum + 1).join(' < ');
    if (first)
      first += ' < ';
    if (last)
      last = ' < ' + last;


    let traitTier;
    if(props.trait.effectNum===(props.trait.effects.length-1)){
      traitTier='gold-trait'
    }
    else if(props.trait.effectNum===0){
      traitTier='bronze-trait'
    }
    else{
      traitTier='silver-trait'
    }


    return (
      <div className='build-display-synergy'>
        <div className={`build-traits-icon-box ${traitTier}`} >
          <img className='build-traits-icon' src={ImgLink.createLink(props.trait.icon)} alt={props.trait.name + ' icon'} />
        </div>
        <div className='build-trait-count'>
          {props.trait.count}
        </div>
        <div className='build-trait-effect'>
          <div>
            {props.trait.name}
          </div>
          <div className='trait-progression'>
            <span className='opaque'>{first}</span>
            <span className='applied-effect'> {props.trait.effects[props.trait.effectNum].minUnits} </span>
            <span className='opaque'>{last}</span>
          </div>
        </div>
      </div>
    );


  }
  else{


    return (
      <div className='build-display-synergy'>
        <div className='build-traits-icon-box no-trait'>
          <img className='build-traits-icon' src={ImgLink.createLink(props.trait.icon)} alt={props.trait.name + ' icon'} />
        </div>
        <div className='build-trait-effect'>
          <div>
            {props.trait.name}
          </div>
          <div className='trait-progression'>
            <span className=''> {props.trait.count+' / '+props.trait.effects[0].minUnits} </span>
          </div>
        </div>
      </div>
    );
  }

}

export default ASynergy;