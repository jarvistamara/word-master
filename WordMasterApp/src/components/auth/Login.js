import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    state = {
        email: '',
        password: '',
        loginErrors: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        axios.post("http://localhost:4000/sessions", {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }, {withCredentials: true}) // tells the API that it is okay to set cookie in client
        .then(response => {
            console.log('res from login', response)
            // if (response.data.status === 'created') {

            //     this.props.handleSuccessfulAuth(response.data)
            // }
        }).catch(error => {
            console.log('login error', error)
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name = 'email' placeholder = 'Email' value={this.state.email} onChange={this.handleChange} required />
                    <input type='password' name = 'password' placeholder = 'Password' value={this.state.password} onChange={this.handleChange} required />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
export default Login