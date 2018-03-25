import React, { Component } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import SignIn from '../components/sign_in';


class AuthPanel extends Component {
   
    render() {
        return (
            <div className="messages-panel">
                <SignIn></SignIn>
            </div>
        );
    }
};

AuthPanel.propTypes = {
    
  };
export default AuthPanel;