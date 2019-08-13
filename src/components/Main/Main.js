import React from 'react';
import './Main.css';
import { Route, Switch } from 'react-router-dom';
import BuildingPage from '../BuildingPage/BuildingPage';
import FrontPage from '../FrontPage/FrontPage';
import LoginPage from '../AccountPages/LoginPage';
import SignupPage from '../AccountPages/SignupPage';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import BuildIdRoute from '../Utils/BuildIdRoute';
import Dashboard from '../Dashboard/Dashboard';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/create-build' component={BuildingPage} />
          <PublicOnlyRoute exact path='/login' propForComponent={this.props.renderNav} component={LoginPage}/>
          <PublicOnlyRoute exact path='/signup' component={SignupPage}/>
          <PrivateRoute exact path='/dash' component={Dashboard}/>
          <BuildIdRoute exact path='/build/:id' component={BuildingPage} />
          <Route path='/' component={FrontPage} />
          
        </Switch>
      </main>
    );
  }
}

export default Main;
