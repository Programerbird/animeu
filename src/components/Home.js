import React from 'react'
import './Home.css'
import iconsvg from "../Pictures/logo.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Home = () => {
  return (
    <div className='main_wrapper' >
      <div className='header'>
        <img src={iconsvg} alt='logo'/>
          <div className='links' >
            <a href='link' >Chat</a>
            <a href='link' >Anime</a>
            <a href='link' >Manga</a>
            <a href='link' >setting</a>
              <div>
              <Box
                component="form"
                sx={{
                '& > :not(style)': { m: -2, width: '10ch' },
                }}
                noValidate
                autoComplete="off"
                >
                  <TextField id="filled-basic" label="Search" variant="filled" />
              </Box>
              </div>
          </div>
          
      </div>
    </div>
  )
}

export default Home