import {useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect } from 'react-redux';
import './sign-up.styles.scss';

import {signUpStart} from '../../redux/user/user.actions';

const Signup = ({signUpStart}) =>  {
   

    const [userCredentials, setCredentials] = useState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        
        
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        signUpStart({ displayName, email, password });
      };

    const  handleChange= event => {
        const {name, value} = event.target;

        setCredentials({...userCredentials , [name]: value})
    }


        return (
        <div className='sign-up'>
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                type="text"
                value={displayName}
                name="displayName"
                onChange={handleChange}
                label="displayName"
                required
                />

                <FormInput 
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                label="Email"
                required
                />

                <FormInput 
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                label="Password"
                required
                />

                <FormInput 
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                label="confirm Password"
                required
                />
                <CustomButton type='submit' >Sign Up</CustomButton>
            </form>
        </div>
        )
    };


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
export default connect(null, mapDispatchToProps)(Signup);

