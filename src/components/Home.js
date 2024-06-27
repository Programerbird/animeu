import React from 'react'
import './Home.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import pfp from '../Pictures/pfp.jpg'
import Button from '@mui/material/Button';



const Home = () => {
  return (
    <div className='main_wrapper' >
      <div className='main_text' >
          <div className='links' >
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Manga</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Anime</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
            <Button variant="contained">Chat</Button>
          </Stack>
          
          <Stack  direction="row" spacing={2}>
              <Avatar sx={{ width: 54, height: 54 }} alt="Remy Sharp" src={pfp} />
          </Stack>
          </div>
      </div>
          <div className='search' >
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
            {/* <div className='border' >
              <a href='https://ih1.redbubble.net/cover.1457307.2400x600.jpg'  ></a>
            </div> */}
          
          </div>
    
    </div>
  )
}

export default Home