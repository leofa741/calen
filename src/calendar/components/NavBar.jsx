import * as React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthStore } from "../../hooks/useAuthStore"

export const Navbar = () => {

  const { startLogout, user} = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            My Calendar :  { user.name }
        </span>

      



        <Button variant="outlined"
           onClick={ startLogout }        
        ><LogoutIcon/></Button>
    </div>
  )
}
