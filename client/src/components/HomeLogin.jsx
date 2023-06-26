import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import Login from './Login'
import Footer from './Footer'


const HomeLogin = () => {

    return (
        <div>
            <Logout />
            <div className="d-flex flex-column align-items-center">
                <Login />
            </div>
            <div>
                <Link to={"/reg"} >Don't have an account? Sign Up</Link>
            </div>
            <Footer />

        </div>
    )
}

export default HomeLogin