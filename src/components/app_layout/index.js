import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

import AppHeader from './app_header';
import MainPanel from './main_panel';



const AppLayout = () => (
  <div>
    <AppHeader />
    <MainPanel />
  </div>
);

AppLayout.propTypes = {
    
};
export default AppLayout;