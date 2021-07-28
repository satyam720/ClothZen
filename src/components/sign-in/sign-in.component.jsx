import './sign-in.styles.scss';
import {Component} from 'react'


class SignIn extends Component{
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit =(event) => {
        event.preventDefault();
        this.setState({email: '',password: ''})
    }

    handleChange =(event) =>{
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
            <h2>I already have an Account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <input 
                name="email" 
                type="email" 
                value={this.state.email} 
                required
                onChange={this.handleChange}></input>
                <label>Email</label>
                <input onChange={this.handleChange} name="password" type="password" value={this.state.password} required></input>
                <label>Password</label>

                <input type="submit" value="submit Form"></input>

            </form>
            </div>)
    }
};

export default SignIn;