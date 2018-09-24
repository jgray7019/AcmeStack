import React from 'react';


function validateUsername(username){
    const usernameError = [];

    if(username.length <= 8 || username.length >= 24) {
        usernameError.push("Username must be between 8 and 24 characters");
     }
     return usernameError;
 }

 function validatePassword(password){
    const passwordError = [];

    if(password.length <= 8 || password.length >= 24) {
        passwordError.push("Password must be between 8 and 24 characters");
     }
     return passwordError;
 }

class FormSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
            errors: {
                usernameError: [],
                passwordError: []
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const username = this.state.username;
        const password = this.state.password;

        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password);

        if(usernameError.length > 0 || passwordError.length > 0) {
            this.setState({
                loading: false,
                errors: {
                    usernameError,
                    passwordError
                }
            }); 
        } else {
            this.setState({
                loading: true,
            }); 

            setTimeout(() => {
                this.props.onSignIn(username, password);
            }, 1000);
        }  
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { errors } = this.state;

        return( 
            <form className="form" onSubmit={this.handleSubmit.bind(this)} >
                <div className="form__container">
                    <input
                        name="username"
                        label="Username"
                        placeholder="Username"
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        className={this.state.errors.usernameError.length? "error form__input" : 'form__input'}
                    >
                    </input>
                    <input
                        name="password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className={this.state.errors.passwordError.length? "error form__input" : 'form__input'}
                    >
                    </input>
                    {(this.state.loading) ?
                        <label htmlFor="form__input--loading" className="form__label--loading">
                            <input className="form__input--loading" id="form__input--loading" type="submit" value=" " />
                        </label>
                   :
                         <input className="form__input--submit"  type="submit" value="login"  /> 
                    }
                 </div>
                <div className="form__error--container">
                    {errors.usernameError.map(error => (<p key={error} className="form__error">{error}</p>))} 
                    {errors.passwordError.map(error => (<p key={error} className="form__error">{error}</p>))} 
                </div>
            
                <div className="form__container--checkbox">
                    <input 
                        className="form__input--checkbox"
                        type="checkbox" 
                        id="rememberMe" 
                        name="rememberMe" 
                        value="Remember Me" />
                    <label htmlFor="rememberMe" className="form__label--checkbox">
                        Remember Me
                    </label>
                </div>
            </form>
        )
    }
}

export default FormSignIn;