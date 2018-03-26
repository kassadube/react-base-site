import React from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types';

class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
      this.handleSubmit = props.handleSubmit;
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submit = this.submit.bind(this);
    }
   

    handleInputChange (event) {
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

    }
    
    submit(event){
        event.preventDefault();
        this.handleSubmit(this.state);
    }
      
    render (){
        let error = '';
        if(this.props.error )
        {
            error = <div style={{color:'red'}}>{this.props.error}</div>;
        }
        return (
                <div>
                    <form onSubmit={this.submit}>
                        <div><span>User</span><span><input type="text" name="username" onChange={this.handleInputChange}/> </span></div>
                        <div><span>Password</span><span><input type="password" name="password" onChange={this.handleInputChange}/> </span></div>
                        {error}
                        <div><button type="submit">Send</button></div>
                    </form>    
                </div>
            );
        }
};

SignIn.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
export default SignIn