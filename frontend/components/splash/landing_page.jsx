import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className='splash'>
    <img className="splash-girl" src={ window.splashGirl } />
    <div className="splash-content">
      <h1 className="splash-title">uwuwoll</h1>
      <p className="splash-tagline">The number one website for all your anime streaming needs</p>
      <div className="splash-cta">
        <Link to='/login' className="splash-link">Login</Link>
        <span className="splash-link-spacer">or</span>
        <Link to='/signup' className="splash-link">Signup</Link>
      </div>
    </div>
  </div>
);


export default LandingPage;
