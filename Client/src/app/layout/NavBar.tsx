import { Group } from '@mui/icons-material'
import { AppBar, Box, Button, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function NavBar() {
  return (
    
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', backgroundImage: 'linear-gradient(135deg,rgb(14, 43, 160),rgb(27, 102, 124),rgb(32, 172, 90))' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <MenuItem sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Group fontSize='large'/>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Reactivities</Typography>
            </MenuItem>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
             Activities
            </MenuItem>
            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
             About
            </MenuItem>
            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
             Contact
            </MenuItem>
          </Box>
          <Button size='large' variant='contained' color='warning'>
            Create Activity
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    
  )
}
