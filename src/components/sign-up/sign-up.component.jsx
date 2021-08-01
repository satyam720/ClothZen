import {Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js';

class Signup extends Component {
    constructor(){
        super();

        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    };


    handleSubmit = async event => {
        event.preventDefault();

        const {displayName,email, password, confirmPassword} = this.state;

        if(password !== confirmPassword ) {
            alert("password don't match");
            return;

        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user , {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        } catch (error) {
            console.error(error);

        }

    };

    handleChange= event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render() {
        const {displayName,email, password, confirmPassword} = this.state;
        return (
        <div className='sign-up'>
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                type="text"
                value={displayName}
                name="displayName"
                onChange={this.handleChange}
                label="displayName"
                required
                />

                <FormInput 
                type="email"
                value={email}
                name="email"
                onChange={this.handleChange}
                label="Email"
                required
                />

                <FormInput 
                type="password"
                value={password}
                name="password"
                onChange={this.handleChange}
                label="Password"
                required
                />

                <FormInput 
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={this.handleChange}
                label="confirm Password"
                required
                />
                <CustomButton type='submit' >Sign Up</CustomButton>
            </form>
        </div>
        )
    }
};

export default Signup;