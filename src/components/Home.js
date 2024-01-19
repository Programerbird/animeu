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
          <div className='links' >
          <a style={{textDecoration: "none"}} href='link'>CHAT</a>
          <a style={{textDecoration: "none"}}  href='link'>ANIME</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          <a style={{textDecoration: "none"}}  href='link'>MANGA</a>
          </div>
          <Stack  direction="row" spacing={2}>
              <Avatar sx={{ width: 54, height: 54 }} alt="Remy Sharp" src={pfp} />
          </Stack>
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