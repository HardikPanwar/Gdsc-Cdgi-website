import React from 'react'
import './Contactus.css'
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import ContactImg from '../Images/contactusImg/ContactImg.jpg'
function Contactus() {
  return (
    
    <div className='contaniner'>
    <div className='container2'>
    <img src={ContactImg} alt="contact Img"/>
    <div className='vl'></div>
       
      <div className='Inputfields'> 
      <h2>We'd Love to hear from you.</h2>
      <br></br>
       <Box
      component="form"
      sx={{
        width: 400,
        maxWidth: '90%',
        
      }}
      noValidate
      autoComplete="off"
    >
       <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" />
        <br></br><br></br> <br/>
       <TextField  fullWidth id="outlined-basic" label="Email" variant="outlined" />
       <br></br><br></br> <br/>
       <TextField
          id="outlined-textarea"
          label="Query Box"
          placeholder="Enter your queries"
          multiline
        />

    </Box>
   

    <button className='Conbtn'>Submit</button>
    
       </div>
      
       </div>
    </div>
  )
}

export default Contactus