import React from 'react';
import { Route } from 'react-router-dom';
// eslint-disable-next-line
import PropTypes from 'prop-types';

import Home from '../../containers/home';
import About from '../about';
import resource from '../../modules/resource';

const {ResourcePanel} = resource.containers;

const MainPanel = () => (
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/resource" component={ResourcePanel} />
    </main>
);

MainPanel.propTypes = {
    
};
export default MainPanel;