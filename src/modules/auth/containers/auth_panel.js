import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import SignIn from '../components/sign_in';
import * as actions from '../actions';
import { isAuthenticated, getErrorMessage } from '../selectors';

class AuthPanel extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.props.signoutUser();
    }

    submit(form) {
        this.props.signinUser(form);
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger
        if(nextProps.isAuthenticated)
        {
            this.props.changePage();
            return false;
        }
        return true;
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signinUser: actions.signinUser,
      signoutUser: actions.signoutUser,
      changePage: () => push('/')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AuthPanel);;