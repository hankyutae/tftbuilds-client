import React from 'react';

export const TftContext = React.createContext({
  error: null,
  arrayOfPrices:[1,2,3,4,5],
  arrayOfStars:['bronze','silver','gold'],
  expandedTraits:{},
  numOfBasicItems:9,
  loginState:0,
  toggleLoginState :  ()=>{ },
  setError: () => { },
  clearError: () => { },
  setChampions: () => { },
  setItems: () => { },
  setTraits: () => { },
  newCurrentBuild: () => { },
  addChampToCurrentBuild: () => { },
  removeChampFromCurrentBuild: ()=>{},
  changeStarsOnChamp:() =>{},
  lowerStarsOnChamp:() =>{},
  raiseStarsOnChamp: () =>{},
  addItemToChamp:() =>{},
  removeItemFromChamp:() =>{},
  switchItemOnChamp:() =>{},
  toggleExpandedOnCurrentBuild:()=>{},
  toggleStatsOnCurrentBuild:()=>{},
  toggleAddItemOnCurrentBuild:()=>{},
  toggleUltOnCurrentBuild:()=>{},
  toggleTraitDesc:()=>{},
  champions: {},
  items: {},
  traits: {},
  currentBuild: []
});

export default TftContext;

export class TftProvider extends React.Component {
  state = {
    arrayOfPrices:[1,2,3,4,5,7],
    arrayOfStars:['bronze','silver','gold'],
    numOfBasicItems:9,
    champions: this.props.champions||{},
    items: this.props.items||{},
    traits: this.props.traits||{},
    currentBuild:this.props.currentBuild||[],
    expandedTraits:this.props.expandedTraits ||{},
    loginState:0,
    toggleLoginState:()=>{
      console.log('even made it here');
      this.setstate({
        loginState:(this.state.loginState+1)
      })
    },
    toggleTraitDesc:(trait)=>{
      let newTraitList={...this.state.expandedTraits};
      newTraitList[trait]=!newTraitList[trait];
      this.setState({
        expandedTraits:newTraitList
      })
    },
    toggleExpandedOnCurrentBuild:(index)=>{
      let newBuild=[...this.state.currentBuild];
      newBuild[index]={...newBuild[index], isExpanded:!(newBuild[index].isExpanded)};
      this.setState({
        currentBuild: newBuild
      })
    },
    toggleStatsOnCurrentBuild:(index)=>{
      let newBuild=[...this.state.currentBuild];
      newBuild[index]={...newBuild[index], isStatsExpanded:!(newBuild[index].isStatsExpanded)};
      this.setState({
        currentBuild: newBuild
      })
    },
    toggleAddItemOnCurrentBuild:(index)=>{
      let newBuild=[...this.state.currentBuild];
      newBuild[index]={...newBuild[index], isAddItemExpanded:!(newBuild[index].isAddItemExpanded)};
      this.setState({
        currentBuild: newBuild
      })
    },
    toggleUltOnCurrentBuild:(index)=>{
      let newBuild=[...this.state.currentBuild];
      newBuild[index]={...newBuild[index], isUltExpanded:!(newBuild[index].isUltExpanded)};
      this.setState({
        currentBuild: newBuild
      })
    },

    changeStarsOnChamp:(index, stars)=>{
      let newBuild=[...this.state.currentBuild];
      newBuild[index]={...newBuild[index], stars:stars};
      this.setState({
        currentBuild: newBuild
      })
    },
    lowerStarsOnChamp:(index)=>{
      let newBuild=[...this.state.currentBuild];
      newBuild[index]={...newBuild[index], stars:newBuild[index].stars<=1? 1: newBuild[index].stars-1};
      this.setState({
        currentBuild: newBuild
      })
    },
    raiseStarsOnChamp:(index)=>{
      let newBuild=[...this.state.currentBuild];
      newBuild[index]={...newBuild[index], stars:newBuild[index].stars>=this.state.arrayOfStars.length? this.state.arrayOfStars.length: newBuild[index].stars+1};
      this.setState({
        currentBuild: newBuild
      })
    },

    addItemToChamp:(index,item) =>{
      let newBuild=[...this.state.currentBuild];
      let items=[...(newBuild[index].items)];
      items.push(item);
      newBuild[index]={...newBuild[index], items:items};
      this.setState({
        currentBuild: newBuild
      })
    },

    removeItemFromChamp:(index,indexOfItem) =>{
      let newBuild=[...this.state.currentBuild];
      let items=[...(newBuild[index].items)];
      items.splice(indexOfItem,1);
      newBuild[index]={...newBuild[index], items:items};
      this.setState({
        currentBuild: newBuild
      })
    },

    switchItemOnChamp:(index,item,itemIndex)=>{
      let newBuild=[...this.state.currentBuild];
      let items=[...(newBuild[index].items)];
      items.splice(itemIndex,1,item);
      newBuild[index]={...newBuild[index], items:items};
      this.setState({
        currentBuild: newBuild
      })
    },

    removeChampFromCurrentBuild:(index)=>{
      let newBuild=[...this.state.currentBuild];
      newBuild.splice(index,1);
      this.setState({
        currentBuild: newBuild
      })
    },

    addChampToCurrentBuild:(champ)=>{
      let curtChamp={
        id:champ.id,
        stars:champ.stars? champ.stars: 1,
        items:champ.items? champ.items: [],
      };/* 
      curtChamp.stars=1;
      curtChamp.items=[]; */
      this.setState({
        currentBuild: [...this.state.currentBuild,curtChamp]
      })
    },

    setCurrentBuild: (newBuild) => {
      this.setState({ currentBuild: newBuild })
    },

    setChampions: champions => {
      this.setState({ champions })
    },

    setItems: items => {
      this.setState({ items })
    },

    setTraits: traits => {
      this.setState({ traits })
    },

    setError: error => {
      console.error(error)
      this.setState({ error })
    },

    clearError: () => {
      this.setState({ error: null })
    },

  };

  render() {
    /* const value = {
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTraits: this.setTraits,
      setItems: this.setItems,
      setChampions: this.setChampions,
      items: this.items,
      traits: this.traits,
      champions: this.champions
    } */
    return (
      <TftContext.Provider value={this.state}>
        {this.props.children}
      </TftContext.Provider>
    )
  }
}