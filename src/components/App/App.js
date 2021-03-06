import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import TftContext from '../../contexts/TftContext';
import TftBuildsApiService from '../../services/tftbuilds-api-service';

class App extends React.Component {
  state = {
    hasError: false,
    forceNavRender: 0,
    toggleForceNavRender: () => {
      this.setState({ forceNavRender: (this.state.forceNavRender + 1) })
    }
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    console.log('getderived')
    return { hasError: true }
  }
  static contextType = TftContext
  componentDidMount() {
    this.context.clearError();
    TftBuildsApiService.getChampions()
      .then(this.context.setChampions)
      /* .then(()=>{
        Object.keys(this.context.champions).forEach(key=>{
          this.context.addChampToCurrentBuild({...this.context.champions[key],stars:Math.ceil(Math.random()*3),items:[1,2,3]});
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
        <Route
          path='/'
          render={routeProps => (
            <Nav {...routeProps} renderNav={this.state.forceNavRender} />
          )}
        />
        {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
        <Main renderNav={this.state.toggleForceNavRender} />
        <div className='footer-border'></div>
        <footer /* role="content-info" */>
          <div>
            <div className='thank-you-mr-rito'>
              tftBuilds isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
            </div>
          </div>
          
        </footer>
      </div>
    );
  }
}

export default App;


