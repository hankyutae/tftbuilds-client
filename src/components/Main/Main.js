import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BuildingPage from '../BuildingPage/BuildingPage'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/create-build' component={BuildingPage} />
        </Switch>
      </main>
    );
  }
}

export default Main;
