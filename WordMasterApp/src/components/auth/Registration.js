import React, { Component } from 'react'
import axios from 'axios'

class Registration extends Component {
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
            user: { // send a user object to backend
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        }, {
            withCredentials: true // tells the api that is okay to set the user
        })
        .then(response => {
            console.log('registration res', response)
        })
        .catch(error => {
            console.log('registration error', error)
        })
        e.preventDefault()
    }
    


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} required />
                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
                    <input type='password' name='password_confirmation' placeholder='Password Confirmation' value={this.state.password_confirmation} onChange={this.handleChange} required />
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}
export default Registration