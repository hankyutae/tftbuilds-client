import React from 'react';
import './DashboardABuildDisplay.css'
import ImgLink from '../../services/create-img-link-service';
import { Link } from 'react-router-dom';
import TftContext from '../../contexts/TftContext';
import TftBuildsApiService from '../../services/tftbuilds-api-service';

export default class DashboardABuildDisplay extends React.Component {
  state = {
    isExpanded: false,
    isRevealed: false,
    copySuccess: '',
    isDeleting:false,
  }
  static contextType = TftContext
  handleLoadBuildClick = (e) => {
    e.stopPropagation();
    this.context.setCurrentBuild(this.props.build['build_data']);
  }
  componentDidUpdate(prevProps){
    /* this.setState({
      isExpanded: false,
      isRevealed: false,
      copySuccess: '',
      isDeleting:false,
    }) */
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
        this.setState({
          isExpanded: false,
          isRevealed: false,
          copySuccess: '',
          isDeleting:false,
        },()=>{
          this.props.handleRemove(this.props.index);
        })
      })
  }
  toggleDeleting = (e)=>{
    this.setState({
      isDeleting:!this.state.isDeleting
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
          },this.props.handleMakePublic(this.props.index))
        })
    }
  }
  copyLink =(e)=>{
    this.textArea.select();
    document.execCommand('copy');
    this.setState({copySuccess:'Copied!'})
  }
  render() {
    return (
      <div className='build-display-in-dashboard-box'>
        {Object.keys(this.context.champions).length !== 0 && Object.keys(this.context.items).length !== 0 &&
          <>
            <div className='dashboard-build-top'>
              <div className='load-and-share'>
                <div className='load-build-button button-hover-lighten'>
                  <Link className='nav-link' to='/create-build' onClick={this.handleLoadBuildClick}> Load Build</Link>
                </div>
                <div className='share-build-button button-hover-lighten' onClick={this.handleMakePublicClick}>
                  Share
                </div>
              </div>
              <div className='dash-delete-build'>
                {
                  this.state.isDeleting? 
                  <div className='delete-yes-or-no-container'>
                    <div className='yes-delete-build-button deleting-yes-or-no-button button-hover-lighten'onClick={this.handleDeleteClick}>
                      Delete
                    </div>
                    <div className='no-delete-build-button deleting-yes-or-no-button button-hover-lighten' onClick={this.toggleDeleting}>
                      No
                    </div>
                  </div>
                  :
                  <div className='red delete-build-button button-hover-lighten' onClick={this.toggleDeleting}>Delete </div>
                }
                
              </div>

            </div>
            <div className='dashboard-build-bottom'>

            
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
                <div className='build-link-container'>
                  <textarea 
                    className='build-share-link' 
                    ref={(textarea) => this.textArea = textarea} 
                    value={`${window.location.origin}/build/${this.props.build.id}`}
                    readOnly
                  />
                  {
                    document.queryCommandSupported('copy') &&
                    <div className='copy-link-button' onClick={this.copyLink}>
                      Copy
                    </div>
                  }
                  {
                    this.state.copySuccess &&
                    <span className='copy-success'>
                      {this.state.copySuccess}
                    </span>
                  }

                </div>
              }
            </div>
          </>
        }
      </div>
    )
  }
}