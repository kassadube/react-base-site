import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const AppHeader = () => (
    <header>
      <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
          <li class="pure-menu-item pure-menu-selected">
            <Link to="/" class="pure-menu-link">Home</Link>
          </li>
          <li class="pure-menu-item pure-menu-selected">
            <Link to="/about-us" class="pure-menu-link">About</Link>
          </li>
          <li class="pure-menu-item pure-menu-selected">
            <Link to="/resource" class="pure-menu-link">Resource</Link>
          </li>
          <li class="pure-menu-item pure-menu-selected">
            <Link to="/login" class="pure-menu-link">Sign out</Link>
          </li>
        </ul>
      </div>
    </header>
);

AppHeader.propTypes = {
    
};

export default AppHeader;