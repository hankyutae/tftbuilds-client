import React from 'react';
import TftContext from '../../contexts/TftContext';
import calcStats from '../../services/calculate-final-stats-service';
import ImgLink from '../../services/create-img-link-service';
import './ChampCard.css';
import handleAddItem from '../../services/handle-add-item-service';
import ValidationError from '../ValidationError/ValidationError';
import SingleStat from './SingleStat';
import ChampCardUltimate from './ChampCardUltimate';
import CompleteItemInfoBox from './CompleteItemInfoBox';

class ChampCard extends React.Component {
  state = {/* 
    isEditting: false, */
    selectedItem: 1
  }
  /* handleEditClick = () => {
    this.setState({
      isEditting: !this.state.isEditting
    })
  } */

  static contextType = TftContext
  
  handleStarsChange = (e) => {
    this.context.changeStarsOnChamp(this.props.index, Number(e.target.value));
  }
  handleItemSelectionChange = (e) =>{
    this.setState({
      selectedItem:Number(e.target.value),
    })
  }
  handleAddItemSubmit = (e) =>{
    e.preventDefault();
    let res=handleAddItem(this.context.items,this.context.currentBuild[this.props.index].items,this.state.selectedItem);
    if(res==='Too many items'){
      return;
    }
    else if(res[0]==='switch'){
      this.context.switchItemOnChamp(this.props.index,res[1]);
    }
    else if(res[0]==='add'){
      this.context.addItemToChamp(this.props.index,res[1]);
    }

  }
  handleRemoveItem =(itemIndex)=>{
    this.context.removeItemFromChamp(this.props.index,Number(itemIndex));
  }
  generateStars =() =>{
    let starGen = [];
    let starColor;
    const stars = this.context.currentBuild[this.props.index].stars;
    for (let i = 0; i < stars; i++) {
      starGen.push(i);
    }
    if (stars === 3) {
      starColor = 'gold';
    }
    else if (stars === 2) {
      starColor = 'silver';
    }
    else {
      starColor = 'bronze';
    }
    return {starGen,starColor}
  }
  validateAddItem = () =>{
    if(handleAddItem(this.context.items,this.context.currentBuild[this.props.index].items,1)==='Too many items'){
      return 'Too many items, remove an item by clicking on the item icons above'
    }
  }
  createItemSelection =() =>{
    let array=[];
    for(let i=0;i<this.context.numOfBasicItems;i++){
      array.push(<option key={i} value={`${i+1}`}> {this.context.items[i+1].name}</option>);
    }
    return array;
  }

  createStatTags=()=>{
    return [
      "hp",
      "mana",
      "initalMana",
      "damage",
      "attackSpeed",
      "range",
      "critMultiplier",
      "critChance",
      "armor",
      "magicResist"
    ]
  }

  handleRemoveChamp =()=>{
    this.context.removeChampFromCurrentBuild(this.props.index);
  }

  render() {
    let {starGen,starColor} = this.generateStars();
    const currentChamp=this.context.currentBuild[this.props.index];
    let statMod=calcStats(currentChamp,this.props.syn,this.context.items);
    console.log(statMod);

    return (
      <div className='build-display-champion-card'>
        <div className="edit-notice" onClick={() => this.context.toggleExpandedOnCurrentBuild(this.props.index)}>
          <strong>{currentChamp.isExpanded ? 'Collapse' : 'Edit'}</strong>
        </div>
        <div className='champion-simple-flex' onClick={() => this.context.toggleExpandedOnCurrentBuild(this.props.index)}>
          <div className='b1'>
            <img className='build-champ-icon' src={ImgLink.createLink(this.props.champ.splash)} alt={this.props.champ.name + ' icon'} />
            <p>
              {this.props.champ.name}
            </p>
          </div>
          <div className='b2'>
            {this.props.champ.traits.map((trait, index) =>
              <p key={index}>{trait}</p>
            )}
          </div>
          <div className='b3'>
            <div className="champ-stars">
              {starGen.map(index =>
                <span key={index} className={`fa fa-star ${starColor}`} ></span>
              )}
            </div>
          </div>
          <div className='b4'>
            {
              currentChamp.items.map((item, index) => (
                <div key={index} className='item-img-div' >
                  <img className='build-item-icon' src={ImgLink.createLink(this.context.items[item].icon)} alt={`${this.context.items[item].name} icon`} onClick={(e)=>{e.stopPropagation(); this.handleRemoveItem(index);}}/>
                </div>
              )
              )
            }

          </div>
        </div>
        {currentChamp.isExpanded &&
          <div className="build-display-card-expansion">
            {/* <div className="edit-notice" onClick={() => this.handleEditClick()}>
              {this.state.isEditting ? 'Close' : ''}
            </div> */}
            <button className='remove-champ-button edit-notice' onClick={()=>{this.context.removeChampFromCurrentBuild(this.props.index);}}>REMOVE CHAMP</button>
            <section className="build-display-stats">
              <table className="build-stats-table">
                <tbody>
                  {
                    this.createStatTags().map((statType)=>{
                      return <SingleStat key={statType} champ={currentChamp}statMod={statMod} statType={statType} />
                    })
                  }
                </tbody>
              </table>
              <ChampCardUltimate champ={currentChamp} statMod={statMod}/>
            </section>
            <section className='build-display-change-stars'>
              <form className="star-select-form" onSubmit={e=>{e.preventDefault()}}>
                <label htmlFor="star-select-id">Choose star: </label>
                <select id="star-select-id" name='star-select' value={currentChamp.stars} onChange={this.handleStarsChange}>
                  <option value='1'> 1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </form>
            </section>
            <section className='build-display-add-items'>
                <form className="add-item-form" onSubmit={this.handleAddItemSubmit}>
                  <label htmlFor="add-item-select-id">Add Item: </label>
                  <select id="add-item-select-id" name='add-item' value={this.state.selectedItem} onChange={this.handleItemSelectionChange}>
                    {this.createItemSelection()}
                  </select>
                  <button>Submit</button>
                  <ValidationError message={this.validateAddItem()}/>
                </form>
            </section>
            {currentChamp.items.length!==0 &&
              <section className='build-display-expanded-show-items'>
                {currentChamp.items.map((item,index)=>{
                  return <CompleteItemInfoBox key={index} items={this.context.items} item={item} isExpanded={false}/>
                })}
              </section>
            }
            <section className='build-display-remove-champ'>
              <button className='remove-champ-button' onClick={()=>this.handleRemoveChamp()}>REMOVE CHAMP</button>
            </section>
          </div>
        }


      </div>
    );
  }

}

export default ChampCard;