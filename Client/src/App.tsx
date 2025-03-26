import { List, ListItemText, Typography } from '@mui/material';
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
      <Typography variant='h3' className="App-title" style={{color:"#007bff"}}>Reactivities</Typography>
     
        <List>
          {activities.map(activity => (
            <ListItemText key={activity.id}>
              <Typography variant='h5'>{activity.title}</Typography>
              <p>{activity.description}</p>
            </ListItemText>
          ))}
        </List>
    </>
  )
}

export default App
