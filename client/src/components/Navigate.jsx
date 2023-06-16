import React from 'react'
import { Link } from 'react-router-dom'

const Navigate = () => {
    return (
        <div className='mb-4'>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid col-lg-8">
                    <Link to={"/"} className='navbar-brand'><h1>Fitness Studio</h1></Link>
                    <Link to={"/"} className='btn btn-outline-danger'>Logout</Link>

                </div>
            </nav>
            <nav class="navbar fixed-bottom bg-dark">
                <div class="container-fluid text-end">
                    <p class="text-light d-flex justify-content-end flex-fill ">Made by:<strong>Navid Aghajafari</strong></p>
                </div>
            </nav>
        </div>
    )
}

export default Navigate