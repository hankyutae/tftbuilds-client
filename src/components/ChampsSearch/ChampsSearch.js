import React from 'react';
import ChampsSearchFilter from './ChampsSearchFilter';
import ChampsSearchResults from './ChampsSearchResults';

import TftContext from '../../contexts/TftContext';

class ChampsSearch extends React.Component {
  state={
    filterOrigin:"Any",
    filterClass:"Any",
    filterPrice:"0",
    filterName:"",
    changeOrigin: (filterOrigin)=>{this.setState({filterOrigin})},
    changeClass: (filterClass)=>{this.setState({filterClass})},
    changePrice: (filterPrice)=>{this.setState({filterPrice})},
    changeName: (filterName)=>{this.setState({filterName:filterName.toLowerCase()})},

  }
  static contextType=TftContext
  filteredChampionList=()=>{
    let oneLvlDeepCopy={...this.context.champions}
    for(let [key,value] of Object.entries(oneLvlDeepCopy)){
      if(this.state.filterOrigin!=="Any"){
        if(!value.origins.includes(this.state.filterOrigin)){
          delete oneLvlDeepCopy[key];
          continue;
        }
        
      }
      if(this.state.filterClass!=="Any"){
        if(!value.classes.includes(this.state.filterClass)){
          delete oneLvlDeepCopy[key];
          continue;
        }
      }
      if(this.state.filterPrice!=="0"){
        if(value.cost!==Number(this.state.filterPrice)){
          delete oneLvlDeepCopy[key];
          continue;
        }
      }
      if(this.state.filterName!==""){
        if(!(value.name).toLowerCase().includes(this.state.filterName)){
          delete oneLvlDeepCopy[key];
          continue;
        }
      }

    }


    return oneLvlDeepCopy;
  }
  render() {
    return (
      <div className="champs-search">
        {
          Object.keys(this.context.traits).length !== 0 &&
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
          <ChampsSearchResults champs={this.filteredChampionList()} handleAdd={this.context.addChampToCurrentBuild} locale={this.props.locale}/>
        </>
        }
      </div >
    );
  }

}

export default ChampsSearch;
