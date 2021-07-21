import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

class App extends Component {
  state = {
    loggedInStatus: 'Not_Logged_In',
    user: {}
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "Logged_In",
      user: data
    })
  }



  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <Switch>
          <Route exact path={'/'} render={props => (
            <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
          )} />
          <Route exact path={'/dashboard'} render={props => (
            <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
          )} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App