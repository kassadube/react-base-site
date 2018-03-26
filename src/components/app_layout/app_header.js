import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const AppHeader = () => (
    <header>
      <nav class="navbar">
        <div class="container">
          <ul class="navbar-list">
            <li class="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li class="navbar-item">
              <Link to="/about-us" className="navbar-link">About</Link>
            </li>
            <li class="navbar-item">
              <Link to="/resource" className="navbar-link">Resource</Link>
            </li>
            <li class="navbar-item" >
              <Link to="/login" className="navbar-link">Sign out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
);

AppHeader.propTypes = {
    
};

export default AppHeader;