import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    // Logout's Handler


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
        <div>
            {/* //Logout button */}
            <button className="btn btn-danger offset-11" onClick={logoutHandler}>Log out</button>

        </div>
    )
}

export default Logout