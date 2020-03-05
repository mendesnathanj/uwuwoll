import React from 'react';
import LoggedOutNav from './logged_out_nav';
import LoggedInNav from './logged_in_nav';

const Navbar = props => {
  if (['/', '/signup', '/login'].includes(props.location.pathname)) return null;

  return (
    <nav>
      { props.currentUser ? <LoggedInNav currentUser={ props.currentUser } logout={ props.logout } /> : <LoggedOutNav location={ props.location} /> }
    </nav>
  )
};


export default Navbar;
