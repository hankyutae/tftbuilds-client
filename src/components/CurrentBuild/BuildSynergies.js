import React from 'react';
import ASynergy from './ASynergy';
import './BuildSynergies.css';

class BuildSynergies extends React.Component {
  state={
    isExpanded:true
  }
  handleClick = ()=>{
    this.setState({
      isExpanded:!this.state.isExpanded
    })
  }
  render() {
    return (
      <div className="build-display-synergies">
        <div className="synergies-expand-collapse button-cursor" onClick={()=>this.handleClick()}>
          {this.state.isExpanded? 'Collapse' : 'Expand'}
        </div>
        <h3 className="synergy-header">
          Synergies
        </h3>
        <div className='synergies-box'>
        {
          Object.keys(this.props.syn).filter(trait=>this.props.syn[trait].effectNum!==-1).map((trait,index)=>{
            return (
              <ASynergy key={index} trait={this.props.syn[trait]}/>
            )
          })
        }
        {
          this.state.isExpanded &&
          Object.keys(this.props.syn).filter(trait=>this.props.syn[trait].effectNum===-1).map((trait,index)=>{
            return (
              <ASynergy key={index} trait={this.props.syn[trait]}/>
            )
          })
        }
        </div>
      </div >
    );
  }

}

export default BuildSynergies;