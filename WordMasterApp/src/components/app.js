import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Home from './Home';
import Dashboard from './Dashboard';

class App extends Component {
  state = {
    loggedInStatus: 'Not_Logged_In',
    user: {}
  }

  checkLoginStatus = () => {
    axios.get("http://localhost:4000/logged_in", { withCredentials: true })
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === 'Not_Logged_In') {
        this.setState({
          loggedInStatus: 'Logged_In',
          user: response.data.user
          
        })
      } else if (!response.data.logged_in & this.state.loggedInStatus === 'Logged_In') {
        this.setState({
          loggedInStatus: 'Not_Logged_In',
          user: {}
        })
      }
    })
    .catch(error => {
      console.log('check login error', error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "Logged_In",
      user: data.user
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