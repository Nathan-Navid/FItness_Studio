import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Navigate = () => {
    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='mb-4'>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid col-lg-8">
                    <Link to={"/"} className='navbar-brand'><h1>Home</h1></Link>
                    <Link to={"/"} className='btn'>New</Link>
                    <Link to={"/"} className='btn'>Search</Link>
                    <Link to={"/"} className='btn'>Account</Link>
                </div>
            </nav>
            <button className="btn btn-danger offset-11" onClick={logoutHandler}>Log out</button>
        </div>
    )
}

export default Navigate