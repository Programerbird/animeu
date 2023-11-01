import React from 'react'
import './Home.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import pfp from '../Pictures/pfp.jpg'

const Home = () => {
  return (
    <div className='main_wrapper' >
      <div className='main_text' >
        <h1>ANIMEU</h1>
          <a style={{color:'yellow'}} href='link'>CHAT</a>
          <a style={{color:'yellow'}} href='link'>ANIME</a>
          <a style={{color:'yellow'}} href='link'>MANGA</a>
          <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={pfp} />
           </Stack>
          <div>
          <Box
            component="form"
             sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
            }}
             noValidate
             autoComplete="off"
            >
            <TextField id="outlined-basic" label="Search..." variant="outlined" />
          </Box>
           
          </div>
      </div>
       
    
     
    </div>
  )
}

export default Home