import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const AppHeader = () => (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/resource">Resource</Link>
    </header>
);

AppHeader.propTypes = {
    
};

export default AppHeader;