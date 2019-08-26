import React from 'react';
import './ChampsSearchFilter.css';

class ChampsSearchFilter extends React.Component {
  render() {
    return (
      <form className="champs-search-form" onSubmit={(e)=>e.preventDefault()}>
       
        <select aria-label="Champ origin filter" name="search-champ" id="search-form-champ-origin" value={this.props.filterOrigin} onChange={(e)=>this.props.handleOrigin(e.target.value)}>
          <option value="Any"> Any Origin </option>
          {Object.keys(this.props.traits).map(key=>this.props.traits[key]).filter(trait=>
            trait.isOrigin
          ).map(trait=>{
            return <option key={trait.name} value={trait.name}> {trait.name} </option>
          })}
          
        </select>

        <select aria-label="Champ class filter" name="search-champ" id="search-form-champ-class" value={this.props.filterClass} onChange={(e)=>this.props.handleClass(e.target.value)}>
          <option value="Any"> Any Class </option>
          {Object.keys(this.props.traits).map(key=>this.props.traits[key]).filter(trait=>
            !trait.isOrigin
          ).map(trait=>{
            return <option key={trait.name} value={trait.name}> {trait.name} </option>
          })}
        </select>

        <select aria-label="Champ price filter" name="search-champ" id="search-form-champ-price" value={this.props.filterPrice} onChange={(e)=>this.props.handlePrice(e.target.value)}>
          <option value="0"> Any Price </option>
          {this.props.prices.map(price=>{
            return <option key={price} value={`${price}`}> {price} </option>
          })}
        </select>

        <div className='reset-filters-box button-cursor' onClick={(e)=>{
          this.props.handlePrice('0');
          this.props.handleName('');
          this.props.handleOrigin('Any');
          this.props.handleClass('Any');
        }} >
          Reset Filters
        </div>

        <div className="search-form-champ-name-box">
        
        <input aria-label="Champ name filter" type="text" id="search-form-champ-name" name="search-champ" placeholder="Search Champ Name" value={this.props.filterName} onChange={(e)=>this.props.handleName(e.target.value)}/>
        </div>
      </form >
    );
  }

}

export default ChampsSearchFilter;
