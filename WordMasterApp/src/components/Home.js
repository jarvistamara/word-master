import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login'

class Home extends Component {
    state = {

    }

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push('/dashboard') // redirect the user
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        )
    }
}
export default Home