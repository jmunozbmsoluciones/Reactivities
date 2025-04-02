import { Container, CssBaseline } from '@mui/material';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/ActivitDashboard';
import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => { 
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => {
      setActivities(response.data);
    })
   }, []);

  return (
    <>
      {/* <Typography variant='h3' className="App-title" style={{color:"#007bff"}}>Reactivities</Typography> */}
      <CssBaseline />
        <NavBar/>
        <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities}/>
        </Container>
    </>
  )
}

export default App
