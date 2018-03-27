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
                    <form onSubmit={this.submit} class="pure-form pure-form-aligned">
                        <fieldset>
                            <div class="pure-control-group">
                                <label for="username">User</label>
                                <input type="text" name="username" onChange={this.handleInputChange}/> 
                            </div>
                            <div class="pure-control-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" onChange={this.handleInputChange}/>
                            </div>
                            <div class="pure-control-group">{error}</div>
                            <div class="pure-control">
                                <div style={{'margin-left': '170px'}}><button type="submit" class="pure-button pure-button-primary">Send</button></div>
                            </div>
                        </fieldset>
                    </form>    
                </div>
            );
        }
};

SignIn.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
export default SignIn