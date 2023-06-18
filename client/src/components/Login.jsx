import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    // Login's State, ChangeHandler and submitHandler

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })

    const logChangeHandler = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", loginInfo, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                navigate("/dashboard");
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            {/* //login form */}
            <form className="col-3 offset-3" onSubmit={loginHandler}>
                <h1>Login</h1>
                <div className="form-group mt-3">
                    <label htmlFor="email" >Email Address</label>
                    <input type="email" name="email" id="email" className='form-control' onChange={logChangeHandler} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className='form-control' onChange={logChangeHandler} />
                </div>
                <Button type="submit" className='mt-3' variant="contained" color="info">Login</Button>
            </form>
        </>
    )
}

export default Login