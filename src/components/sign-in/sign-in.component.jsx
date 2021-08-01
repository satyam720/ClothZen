import './sign-in.styles.scss';
import {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';


import {signInWithGoogle,auth} from '../../firebase/firebase.utils.js';


class SignIn extends Component{
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit =async (event) => {
        event.preventDefault();
        const {email ,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:''});
        } catch (error){
            console.log(error);
        };
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
                <FormInput 
                name="email" 
                type="email" 
                value={this.state.email} 
                required
                handleChange={this.handleChange}
                label="Email"></FormInput>
                
                <FormInput label="password" handleChange={this.handleChange} name="password" type="password" value={this.state.password} required></FormInput>
                <div className="buttons">
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle}
                isGoogleSignIn >Sign in With Google</CustomButton>


                </div>
                
            </form>
            </div>)
    }
};

export default SignIn;