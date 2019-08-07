import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import TftContext from '../../contexts/TftContext';
import TftBuildsApiService from '../../services/tftbuilds-api-service';

class App extends React.Component {
  static contextType=TftContext
  componentDidMount(){
    this.context.clearError();
    TftBuildsApiService.getChampions()
      .then(this.context.setChampions)
      /* .then(()=>{
        Object.keys(this.context.champions).forEach(key=>{
          this.context.addChampToCurrentBuild({...this.context.champions[key],stars:Math.ceil(Math.random()*3),items:[36,37,38]});
        })
        
      }) */
      .catch(this.context.setError)
    TftBuildsApiService.getItems()
      .then(this.context.setItems)
      .catch(this.context.setError)
    TftBuildsApiService.getTraits()
      .then(this.context.setTraits)
      .catch(this.context.setError)
    
  }

  render() {
    
    return (
      <div className="App">
        <Nav />
        <Main />
        <footer></footer>
      </div>
    );
  }
}

export default App;


