import React, { useState} from 'react'
import './Signin.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Singnin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(email);
    console.log(password);
    navigate('/Home');
  }
  return (
    <div className='App'>
      <h1 className='textmain' >Animeu</h1>
        <div className='boxes' >
            <Box 
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField  style={{background:'yellow'}} type='email' id="filled-basic" label="Email" variant="filled" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
          <TextField style={{ background: 'yellow' }} type='password' id="filled-basic" label="Password" variant="filled"
            value={password}
            onChange={e => setPassword(e.target.value)}
              />
            </Box>
            <div>
              <Button   variant="contained" color="success"
                onClick={()=> handleClick()}
              >
                Login
              </Button>
            </div>
            <div className='password' >
              <a  type='password' style={{color:"red"}} href='Password' >Forgot Password</a>
            </div>
            <div className='signupnow' >
              <h2 className='textsignup' >Don't Have an Account </h2>
              <a  style={{color:"red"}} className='signlink' href='signup' >SignUp</a>
            </div>
          </div>
    </div>
  )
}

export default Singnin