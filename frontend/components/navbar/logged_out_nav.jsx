import React from 'react';
import { NavLink } from "react-router-dom";


const LoggedOutNav = ({ location }) => {
  const signedOUtLinks = [];
  if (!['/signup', '/login'].includes(location.pathname)) {
    signedOUtLinks.push(<li key='anime'><NavLink to='/anime'>Anime</NavLink></li>,
                        <li key='login'><NavLink to='/login'>Login</NavLink></li>,
                        <li key='signup'><NavLink to='/signup'>Signup</NavLink></li> );
  }
  return (
    <ul>
      <li><NavLink to='/'><img src="assets/uwuwoll_logo.png" alt=""/>Uwuwoll</NavLink></li>
      { signedOUtLinks }
    </ul>
  )
};

export default LoggedOutNav;
