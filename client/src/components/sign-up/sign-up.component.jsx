import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        signUpStart({ displayName, email, password });
    };

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    label="name"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    label="email"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    label="password"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    label="confirm password"
                    handleChange={handleChange}
                    required
                />
                <CustomButton type="submit">Sign up</CustomButton>
            </form>
        </SignUpContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
