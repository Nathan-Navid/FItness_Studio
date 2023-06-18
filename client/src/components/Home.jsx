import React from 'react'
import Logout from './Logout'
import Registration from './Registration'
import Login from './Login'
import Footer from './Footer'


const Home = () => {

    return (
        <div>
            <Logout />
            <div className="row">
                <Registration />
                <Login />
            </div>
            <Footer />

        </div>
    )
}

export default Home