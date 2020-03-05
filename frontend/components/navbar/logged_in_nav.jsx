import React from 'react';
import { NavLink } from "react-router-dom";


const LoggedInNav = ({ currentUser, logout }) => (
  <ul>
    <li><NavLink to='/'><img src="assets/uwuwoll_logo.png" alt=""/>Uwuwoll</NavLink></li>
    <li key='anime'><NavLink to='/anime'>Anime</NavLink></li>
    <li><NavLink to='/queue'>{ currentUser.username }</NavLink></li>
    <li><button onClick={ () => logout() }>Logout</button></li>
  </ul>
);


export default LoggedInNav;
