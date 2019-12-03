import React from 'react';
import "./CurrentBuild.css";
//import { Link } from 'react-router-dom';
import BuildSynergies from './BuildSynergies';
import BuildChampions from './BuildChampions';
import TftContext from '../../contexts/TftContext';
import CalcService from '../../services/calculate-synergy-service';
import TftBuildsApiService from '../../services/tftbuilds-api-service';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/core';
//import TokenService from '../../services/token-service';

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
    const override = css`
    display: block;
    padding: 10px 0px;
    margin: 40px auto;
    border-color: white;
    `;
    return (
      <div className="current-build-display">
        {/* <h2 className='current-build-title'>
          Your Current Build
          <br />
          <div className='new-or-save-box'>
            <button className='current-build-page-new-build button-cursor' onClick={this.newBuild}>
              New Build
            </button>
            {TokenService.hasAuthToken() ?
              <button className='current-build-page-save-build button-cursor' onClick={this.saveBuild}>Save Build</button>
              :
              <button className='current-build-page-save-build button-cursor'>
                <Link className='nav-link' to='/login'>
                  Log in To Save!
                </Link>
              </button>
            }
          </div>
        </h2> */}
        <h2 className='current-build-title'>
          Your Current Build
        </h2>

        {
          (Object.keys(this.context.traits).length !== 0 &&
          Object.keys(this.context.champions).length !== 0 &&
          Object.keys(this.context.items).length !== 0) ?
          (<div>
            <BuildSynergies syn={calcSyn} />
            <BuildChampions champs={this.context.currentBuild} allChamps={this.context.champions} syn={calcSyn} saveBuild={this.saveBuild} newBuild={this.newBuild} />
            
          </div>)
          :
          <div className='sweet-loading'>
            <CircleLoader
              css={override}
              sizeUnit={"px"}
              size={50}
              color={'#ffffff'}
              loading={true}
            />
          </div> 
        }
      </div >
    );
  }

}

export default CurrentBuild;
