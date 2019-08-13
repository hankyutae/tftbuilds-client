import React from 'react';
import ASynergy from './ASynergy';
import './BuildSynergies.css';

class BuildSynergies extends React.Component {
  state={
    isExpanded:false
  }
  handleClick = ()=>{
    this.setState({
      isExpanded:!this.state.isExpanded
    })
  }
  render() {
    return (
      <div className="build-display-synergies">
        <div className="expand-collapse" onClick={()=>this.handleClick()}>
          {this.state.isExpanded? 'Collapse' : 'Expand'}
        </div>
        <h3 className="synergy-header">
          Synergies
        </h3>
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
      </div >
    );
  }

}

export default BuildSynergies;