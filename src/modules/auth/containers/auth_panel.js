import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignIn from '../components/sign_in';
import * as actions from '../actions';
import { isAuthenticated, getErrorMessage } from '../selectors';

class AuthPanel extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(form) {
        this.props.signinUser(form);
    }
    render() {
        return (
            <div className="messages-panel">
                <SignIn handleSubmit={this.submit} error={this.props.errorMessage}></SignIn>
            </div>
        );
    }
};

AuthPanel.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    signinUser: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired,
  };

const mapStateToProps = (state) => {
    return { 
        isAuthenticated: isAuthenticated(state),
        errorMessage: getErrorMessage(state)   
    }
}
export default connect(mapStateToProps, actions)(AuthPanel);;