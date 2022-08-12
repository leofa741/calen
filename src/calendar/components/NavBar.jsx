import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout'



export const NavBar = () => {
  return (

    <div className="navbar navbar-dark bg-primary"  >
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt" aria-hidden="true"></i>
        &nbsp;My Calendar
        </span>

{/* <button className="btn btn-primary" onClick={() => {}}>

    <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
    &nbsp;Logout

    </button> */}


<Button variant="contained" endIcon={<LogoutIcon />}>
 Logout
</Button>
   

    </div>




    
  )
}
