import React from 'react';
import './DashboardABuildDisplay.css'
import ImgLink from '../../services/create-img-link-service';
import { Link } from 'react-router-dom';
import TftContext from '../../contexts/TftContext';
import TftBuildsApiService from '../../services/tftbuilds-api-service';

export default class DashboardABuildDisplay extends React.Component {
  state = {
    isExpanded: false,
    isRevealed: false
  }
  static contextType = TftContext
  handleLoadBuildClick = (e) => {
    e.stopPropagation();
    this.context.setCurrentBuild(this.props.build['build_data']);
  }
  handleBuildClick = (e) => {
    e.stopPropagation();
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  handleDeleteClick = (e) => {
    e.stopPropagation();
    TftBuildsApiService.deleteBuild(this.props.build.id)
      .then(res => {
        this.props.handleRemove(this.props.index);
      })
  }
  handleMakePublicClick = (e) => {
    e.stopPropagation();
    if (this.props.build['is_public']) {
      this.setState({
        isRevealed: true
      })
    }
    else {
      TftBuildsApiService.makeBuildPublic(this.props.build.id)
        .then(res => {
          this.setState({
            isRevealed: true
          })
        })
    }
  }
  render() {
    return (
      <div className='build-display-in-dashboard-box'>
        {Object.keys(this.context.champions).length !== 0 && Object.keys(this.context.items).length !== 0 &&
          <>
            <div className='dashboard-build-top'>
              <div className='load-and-share'>
                <button>
                  <Link className='nav-link' to='/create-build' onClick={this.handleLoadBuildClick}> Load Build</Link>
                </button>
                <button onClick={this.handleMakePublicClick}>
                  Share
                  </button>
              </div>
              <div className='dash-delete-build'>
                <button className='red' onClick={this.handleDeleteClick}>Delete </button>
              </div>

            </div>
            <div className='build-display-in-dashboard' onClick={this.handleBuildClick}>
              {




                this.props.build['build_data'].filter((champ, index) => index < 11).map((champ, index) => {
                  return (
                    <div key={index} className='dash-build-champ-details'>
                      <img key={index} className='dash-build-champ-icon' src={ImgLink.createLink(this.context.champions[champ.id].splash)} alt={this.context.champions[champ.id].name + ' icon'} />
                      <div className='dash-box-champ-items'>
                        {champ.items.map((item,index)=>{
                          return <img key={index} className='dash-build-item-icon' src={ImgLink.createLink(this.context.items[item].icon)} alt={this.context.items[item].name + ' icon'} />
                        })}
                      </div>
                    </div>
                  )
                })

              }
            </div>

            {this.state.isRevealed &&
              <Link className='build-share-link' to={`/build/${this.props.build.id}`}>
                {`${window.location.origin}/build/${this.props.build.id}`}
              </Link>
            }
          </>
        }
      </div>
    )
  }
}