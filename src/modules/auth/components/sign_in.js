import React from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types';

export const SignIn = () => (
    <div>
       <form>
            <div><span>User</span><span><input type="text"/> </span></div>
            <div><span>Password</span><span><input type="password"/> </span></div>
            <div><button type="button">Send</button></div>
       </form>
    
    </div>
)

SignIn.propTypes = {
    
};
export default SignIn