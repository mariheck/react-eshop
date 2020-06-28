import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

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
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
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
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
