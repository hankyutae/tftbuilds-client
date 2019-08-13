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
  /* state = {
    isEditting: false,
    selectedItem: 1
  } */
  /* handleEditClick = () => {
    this.setState({
      isEditting: !this.state.isEditting
    })
  } */

  static contextType = TftContext
  
  handleStarsChange = (stars) => {
    this.context.changeStarsOnChamp(this.props.index, stars);
  }
  handleItemSelectionChange = (e) =>{
    this.setState({
      selectedItem:Number(e.target.value),
    })
  }
  handleAddItemSubmit = (item) =>{
    let res=handleAddItem(this.context.items,this.context.currentBuild[this.props.index].items,item);
    if(res==='Too many items'){
      return;
    }
    else if(res[0]==='switch'){
      this.context.switchItemOnChamp(this.props.index,res[1],res[2]);
    }
    else if(res[0]==='add'){
      this.context.addItemToChamp(this.props.index,res[1]);
    }

  }
  handleRemoveItem =(itemIndex)=>{
    this.context.removeItemFromChamp(this.props.index,Number(itemIndex));
  }

  // returns Array of <span> with stars of the right color.
  generateStars =(stars) =>{
    let starColor=this.context.arrayOfStars[stars-1];
    let starGen=[];
    for (let i = 0; i < stars; i++) {
      starGen.push(<span key={i} className={`fa fa-star ${starColor}`} ></span>);
    }
    return starGen
  }
  validateAddItem = () =>{
    if(handleAddItem(this.context.items,this.context.currentBuild[this.props.index].items,11)==='Too many items'){
      return 'Potentially too many items, may remove items by clicking on the item icons above'
    }
  }
  createItemSelection =() =>{
    /* let array=[];
    for(let i=0;i<this.context.numOfBasicItems;i++){
      array.push(<option key={i} value={`${i+1}`}> {this.context.items[i+1].name}</option>);
    } */
    let arr=[];
    for(let i=1;i<=this.context.numOfBasicItems;i++){
      
      arr.push(<img key={i} className='build-item-icon' src={ImgLink.createLink(this.context.items[i].icon)} alt={`${this.context.items[i].name} icon`} onClick={(e)=>{e.stopPropagation(); this.handleAddItemSubmit(i);}}/>)
      
    }
    for(let i=1;i<=this.context.numOfBasicItems;i++){
      for(let j=i;j<=this.context.numOfBasicItems;j++){
        arr.push(<img key={i*10+j} className='build-item-icon' src={ImgLink.createLink(this.context.items[i*10+j].icon)} alt={`${this.context.items[i*10+j].name} icon`} onClick={(e)=>{e.stopPropagation(); this.handleAddItemSubmit(i*10+j);}}/>)
      }
      
    }
    return arr;
  }
  createStarsSelection=()=>{
    let arr=[];
    this.context.arrayOfStars.forEach( (star,index)=>{
      arr.push(
        <div key={index} className="selecting-stars" onClick={(e)=>{
          this.handleStarsChange(index+1);
        }}>
          {this.generateStars(index+1)}
        </div>
      )

    })
    return arr;
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
    const currentChamp=this.context.currentBuild[this.props.index];
    const currentChampInfo=this.context.champions[currentChamp.id]
    let statMod=calcStats({...currentChamp,...currentChampInfo},this.props.syn,this.context.items);

    return (
      <div className='build-display-champion-card'>
        <div className="edit-notice" onClick={() => this.context.toggleExpandedOnCurrentBuild(this.props.index)}>
          <strong>{currentChamp.isExpanded ? 'Collapse' : 'Edit'}</strong>
        </div>
        <button className="remove-champ-button top-right" onClick={(e) => {
          e.stopPropagation();
          this.context.removeChampFromCurrentBuild(this.props.index);
        }}>
          <strong>Remove</strong>
        </button>
        <div className='champion-simple-flex' onClick={() => this.context.toggleExpandedOnCurrentBuild(this.props.index)}>
          <div className='b1'>
            <img className='build-champ-icon' src={ImgLink.createLink(currentChampInfo.splash)} alt={currentChampInfo.name + ' icon'} />
            <p>
              {currentChampInfo.name}
            </p>
          </div>
          <div className='b2'>
            {currentChampInfo.traits.map((trait, index) =>
              <p key={index}>{trait}</p>
            )}
          </div>
          <div className='b3'>
            <div className="champ-stars">
              {this.generateStars(currentChamp.stars)}
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
            {/* <button className='remove-champ-button edit-notice' onClick={()=>{this.context.removeChampFromCurrentBuild(this.props.index);}}>REMOVE CHAMP</button> */}
            <section className="build-display-stats">
              <table className="build-stats-table">
                <tbody>
                  {
                    this.createStatTags().map((statType)=>{
                      return <SingleStat key={statType} champ={currentChamp} champInfo={currentChampInfo} statMod={statMod} statType={statType} />
                    })
                  }
                </tbody>
              </table>
              <ChampCardUltimate champ={currentChamp} champInfo={currentChampInfo} statMod={statMod}/>
            </section>
            <section className='build-display-change-stars'>
              {/* <form className="star-select-form" onSubmit={e=>{e.preventDefault()}}>
                <label htmlFor="star-select-id">Choose star: </label>
                <select id="star-select-id" name='star-select' value={currentChamp.stars} onChange={this.handleStarsChange}>
                  <option value='1'> 1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </form> */}
              <div>Choose Stars:</div>
              <div className='selecting-stars-box'>
                {this.createStarsSelection()}
              </div>
            </section>
            <section className='build-display-add-items'>
              <div>Add Item:  </div>
                {/* <form className="add-item-form" onSubmit={this.handleAddItemSubmit}>
                  <label htmlFor="add-item-select-id">Add Item: </label>
                  <select id="add-item-select-id" name='add-item' value={this.state.selectedItem} onChange={this.handleItemSelectionChange}>
                    {this.createItemSelection()}
                  </select>
                  <button>Submit</button> */}
                  {this.createItemSelection()}
                  <ValidationError message={this.validateAddItem()}/>
               {/*  </form> */}
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