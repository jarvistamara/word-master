import React, { Component } from 'react'
import Registration from './auth/Registration'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <Registration/>
            </div>
        )
    }
}
export default Home