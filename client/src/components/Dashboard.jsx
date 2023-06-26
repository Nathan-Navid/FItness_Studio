import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StudentClasses from './StudentClasses';
import Navigate from './Navigate';
import Classes from './Classes';
import Footer from './Footer';
import Container from '@mui/material/Container';


const Dashboard = ({ firstName }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: ""
  })
  // const changeHandler = (e) =>{
  //   setUser({...user, [e.target.name]: e.target.value})
  // }
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/${id}`)
      .then(res => {
        setUserInfo(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log(err))
  }, [id]);


  return (
    <>
      <Navigate />
      <Container maxWidth="md" style={{ paddingBottom: 80 }}>
        <h2 className="text-start mt-4 ms-3">Welcome {userInfo.firstName ? userInfo.firstName : 'Loading...'}</h2>
        <div>
          <p className="text-start mt-5 ms-4">Today classes</p>
        </div>
        <StudentClasses />
        <div>
          <p className="text-start mt-5 ms-4">Upcoming classes</p>
        </div>
        <Classes />
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;