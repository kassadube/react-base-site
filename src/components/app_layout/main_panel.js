import React from 'react';
import { Route, Switch } from 'react-router-dom';
// eslint-disable-next-line
import PropTypes from 'prop-types';

import Home from '../../containers/home';
import About from '../about';
import resource from '../../modules/resource';
import auth from '../../modules/auth';
import PrivateRoute from './private_route';

const {ResourcePanel} = resource.containers;
const {AuthPanel} = auth.containers;

const MainPanel = () => (
    <main>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={AuthPanel} />
        <Route exact path="/about-us" component={About} />
        <PrivateRoute exact path="/resource" component={ResourcePanel} />
      </Switch>
    </main>
);

MainPanel.propTypes = {
    
};
export default MainPanel;