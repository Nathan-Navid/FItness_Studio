import * as React from 'react'
import StudentClasses from './StudentClasses';
import Navigate from './Navigate';
import Classes from './Classes';
import Footer from './Footer';
import Container from '@mui/material/Container';

// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';


const Dashboard = () => {

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/stores")
  //     .then(res => {
  //       const sortedStores = sort(res.data)
  //       setStores(sortedStores)
  //     })
  //     .catch((err) => console.log(err))
  // }, []);


  return (
    <>
      <Navigate />
      <Container maxWidth="md" style={{ paddingBottom: 80 }}>
        <h2 className='text-start mt-4 ms-3'>Welcome Frank</h2>
        <div>
          <p className='text-start mt-5 ms-4'>Today classes</p>
        </div>
        <StudentClasses />
        <div>
          <p className='text-start mt-5 ms-4'>Upcoming classes</p>
        </div>
        <Classes />
      </Container>
      <Footer />

    </>
  )
}
export default Dashboard

