import React from 'react'
import Logout from './Logout'
import Registration from './Registration'
import Login from './Login'


const Home = () => {

    return (
        <div>
            <Logout />
            <div className="row">
                <Registration />
                <Login />
            </div>

        </div>
    )
}

export default Home