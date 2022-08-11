import React from 'react'


export const NavBar = () => {
  return (

    <div className="navbar navbar-dark bg-primary"  >
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt" aria-hidden="true"></i>
        &nbsp;My Calendar
        </span>

<button className="btn btn-primary" onClick={() => {}}>

    <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
    &nbsp;Logout

    </button>

    </div>




    
  )
}
