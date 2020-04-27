import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        < >
            <NavLink className='home-link' to='/'>Home</NavLink>
            <NavLink className='login-link' to='/login'>Login</NavLink>
            <NavLink className='signup-link' to='/signup'>Signup</NavLink>
            <NavLink className='dash-link' to='/dashboard'>Dashboard</NavLink>
        </>
    );
};

export default Navbar;