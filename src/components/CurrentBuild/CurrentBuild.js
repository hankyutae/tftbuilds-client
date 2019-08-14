import React from 'react';
import "./CurrentBuild.css";
import BuildSynergies from './BuildSynergies';
import BuildChampions from './BuildChampions';
import TftContext from '../../contexts/TftContext';
import CalcService from '../../services/calculate-synergy-service';
import TftBuildsApiService from '../../services/tftbuilds-api-service';
import TokenService from '../../services/token-service';

class CurrentBuild extends React.Component {
  state = {

  }
  static contextType = TftContext

  newBuild = (e) => {
    e.stopPropagation();
    this.context.setCurrentBuild([]);
  }
  saveBuild = (e) => {
    e.stopPropagation();
    if (this.context.currentBuild.length !== 0)
      TftBuildsApiService.postBuild(this.context.currentBuild);
  }
  render() {
    let calcSyn;
    if (Object.keys(this.context.traits).length !== 0) {
      calcSyn = CalcService.calcSyn(this.context.traits, this.context.champions, this.context.currentBuild);
    }

    return (
      <div className="current-build-display">
        <h2 className='h2-nav-is-above'>
          Your Current Build
          
        </h2>

        {
          Object.keys(this.context.traits).length !== 0 &&
          (<div>
            <BuildSynergies syn={calcSyn} />
            <BuildChampions champs={this.context.currentBuild} allChamps={this.context.champions} syn={calcSyn} saveBuild={this.saveBuild} newBuild={this.newBuild}/>
          </div>)
        }
      </div >
    );
  }

}

export default CurrentBuild;
