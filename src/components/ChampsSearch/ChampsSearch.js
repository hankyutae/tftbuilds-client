import React from 'react';
import './ChampsSearch.css';
import ChampsSearchFilter from './ChampsSearchFilter';
import ChampsSearchResults from './ChampsSearchResults';
import ChampsGrid from './ChampsGrid';

import TftContext from '../../contexts/TftContext';

class ChampsSearch extends React.Component {
  state = {
    filterView: true,
    filterOrigin: "Any",
    filterClass: "Any",
    filterPrice: "0",
    filterName: "",
    changeOrigin: (filterOrigin) => { this.setState({ filterOrigin }) },
    changeClass: (filterClass) => { this.setState({ filterClass }) },
    changePrice: (filterPrice) => { this.setState({ filterPrice }) },
    changeName: (filterName) => { this.setState({ filterName: filterName.toLowerCase() }) },

  }
  static contextType = TftContext
  filteredChampionList = () => {
    let oneLvlDeepCopy = { ...this.context.champions }
    for (let [key, value] of Object.entries(oneLvlDeepCopy)) {
      if (this.state.filterOrigin !== "Any") {
        if (!value.origins.includes(this.state.filterOrigin)) {
          delete oneLvlDeepCopy[key];
          continue;
        }

      }
      if (this.state.filterClass !== "Any") {
        if (!value.classes.includes(this.state.filterClass)) {
          delete oneLvlDeepCopy[key];
          continue;
        }
      }
      if (this.state.filterPrice !== "0") {
        if (value.cost !== Number(this.state.filterPrice)) {
          delete oneLvlDeepCopy[key];
          continue;
        }
      }
      if (this.state.filterName !== "") {
        if (!(value.name).toLowerCase().includes(this.state.filterName)) {
          delete oneLvlDeepCopy[key];
          continue;
        }
      }

    }


    return oneLvlDeepCopy;
  }
  handleViewToggle = (str) => {
    if (str === 'filter') {
      this.setState({
        filterView: true
      })
    }
    if (str === 'grid') {
      this.setState({
        filterView: false
      })
    }
  }
  createOriginsAndClasses=()=>{
    let origins=[];
    let classes=[];
    Object.keys(this.context.traits).forEach(trait=>{
      if(this.context.traits[trait].isOrigin){
        origins.push(this.context.traits[trait])
      }
      else{
        classes.push(this.context.traits[trait])
      }
    })
    return{
      origins,
      classes
    }
  }
  render() {
    return (
      <div className="champs-search">

        <h2>Add a Champion </h2>
        {this.state.filterView ?
          <div className='view-type-box'>
            <div className='view-type selected' onClick={()=>this.handleViewToggle('filter')}>
              Filter View
              </div>
            <div className='view-type unselected' onClick={()=>this.handleViewToggle('grid')}>
              Grid View
              </div>
          </div>
          :
          <div className='view-type-box'>
            <div className='view-type unselected' onClick={()=>this.handleViewToggle('filter')}>
              Filter View
              </div>
            <div className='view-type selected' onClick={()=>this.handleViewToggle('grid')}>
              Grid View
              </div>
          </div>

        }


        {
          Object.keys(this.context.traits).length !== 0 &&
          this.state.filterView ?
          <>
            <ChampsSearchFilter
              traits={this.context.traits}
              prices={this.context.arrayOfPrices}

              filterOrigin={this.state.filterOrigin}
              filterClass={this.state.filterClass}
              filterPrice={this.state.filterPrice}
              filterName={this.state.filterName}
              handleOrigin={this.state.changeOrigin}
              handleClass={this.state.changeClass}
              handlePrice={this.state.changePrice}
              handleName={this.state.changeName}

            />
            <ChampsSearchResults champs={this.filteredChampionList()} handleAdd={this.context.addChampToCurrentBuild} locale={this.props.locale} />
          </>
          :
          <ChampsGrid origins={this.createOriginsAndClasses().origins} classes={this.createOriginsAndClasses().classes} champs={this.context.champions}  handleAdd={this.context.addChampToCurrentBuild}/>

        }
      </div >
    );
  }

}

export default ChampsSearch;
