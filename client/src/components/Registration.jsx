import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

    // Registration's State, ChangeHandler and submitHandler

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthday: ""
    })

    const changeHandler = (e) => {
        console.log(e)
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", userInfo, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                navigate("/dashboard");
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            {/* //Registration form */}
            <form className="mt-4 col-3 align-self-center" onSubmit={submitHandler}>
                <h1>Registration</h1>
                <div className="form-group mt-3">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" id="firstName"
                        placeholder="First Name" onChange={changeHandler} />
                    {/* {firstName & firstName.length < 2 ? "First Name should be at least 2 character long" : ""} */}

                </div>
                <div className="form-group mt-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control mt-3" name="email" id="email" placeholder="Email Address" onChange={changeHandler} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={changeHandler} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={changeHandler} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="firstName">Birthday</label>
                    <input type="date" className="form-control" name="birthday" id="birthday" placeholder="Birth Day" onChange={changeHandler} />
                </div>
                <Button type="submit" className='mt-3' variant="contained">Register</Button>
            </form>

        </>
    )
}

export default Registration