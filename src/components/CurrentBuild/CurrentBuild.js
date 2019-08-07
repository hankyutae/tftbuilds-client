import React from 'react';
import BuildSynergies from './BuildSynergies';
import BuildChampions from './BuildChampions';
import TftContext from '../../contexts/TftContext';
import CalcService from '../../services/calculate-synergy-service';
import "./CurrentBuild.css";

class CurrentBuild extends React.Component {
  state = {

  }
  static contextType = TftContext


  render() {
    let calcSyn;
    if(Object.keys(this.context.traits).length !== 0){
      calcSyn=CalcService.calcSyn(this.context.traits,this.context.currentBuild);
    }
      
    return (
      <div className="current-build-display">
        <h2>Your Current Build</h2>
        {
          Object.keys(this.context.traits).length !== 0 &&
          (<div>
            <BuildSynergies syn={calcSyn}/>
            <BuildChampions champs={this.context.currentBuild} syn={calcSyn}/>
          </div>)
        }
      </div >
    );
  }

}

export default CurrentBuild;
