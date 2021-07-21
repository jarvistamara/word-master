import React, { Component } from 'react'
import Registration from './auth/Registration'
import axios from 'axios'

class Home extends Component {
    state = {
        email: '',
        password: '',
        password_confirmation: '',
        registrationErrors: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        axios.post("http://localhost:4000/registrations", {
            user: {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        }, {withCredentials: true}) // tells the API that it is okay to set cookie in client
        .then(response => {
            console.log('registation response', response)
        }).catch(error => {
            console.log('registration error', error)
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name = 'email' placeholder = 'Email' value={this.state.email} onChange={this.handleChange} required />
                    <input type='password' name = 'password' placeholder = 'Password' value={this.state.password} onChange={this.handleChange} required />
                    <input type='password' name = 'password_confirmation' placeholder = 'Password Confirmation' value={this.state.password_confirmation} onChange={this.handleChange} required />
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}
export default Home