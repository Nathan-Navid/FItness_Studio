import React from 'react'
import Registration from './Registration'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const HomeLogin = () => {

    return (
        <div>
            <Link to={"/"} className='btn btn-success offset-11'>Login</Link>
            <div className="d-flex flex-column align-items-center">
                <Registration />
            </div>
            <Footer />

        </div>
    )
}

export default HomeLogin