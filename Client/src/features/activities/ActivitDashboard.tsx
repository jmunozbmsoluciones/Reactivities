import { Grid2, List, ListItemText, Typography } from '@mui/material'

type Props = {
    activities: Activity[]
};


export default function ActivitDashboard(props: Props) {
  
  return (
    <Grid2 container>
      <Grid2 size={9} >
      <List>
          {props.activities.map(activity => (
            <ListItemText key={activity.id}>
              <Typography variant='h5'>{activity.title}</Typography>
              <p>{activity.description}</p>
            </ListItemText>
          ))}
        </List>
      </Grid2>
    </Grid2>
  )
}
