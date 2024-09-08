import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Logo from '../assets/logo';
import Button from '../components/shared/Btn';

import './logIn.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/signup', { email, password });
            // Handle successful sign up (e.g., redirect)
            navigate('/dialecto/home');
        } catch (err) {
            console.error(err);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className='wrapper-signIn'>
            <div className='logo-bg'>
                <Logo />
                <h1>DIALECTO</h1>
            </div>
            <form onSubmit={handleSignUp}>
                <h2>Create your account</h2>
                <div className='input-box'>  
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='input-box'>  
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className='signUp-btn'>
                    <Button label="SIGN UP" type="submit" />
                </div>

                <h4>
                    <Link to='/dialecto/forgot-pass' className='forgot-pass-link'>Forgot Password</Link>
                </h4>

                <h5>
                    Already have an account?{' '} 
                    <span>
                        <Link to='/dialecto/sign-in' className='signUp-link'>Sign In</Link>
                    </span>
                </h5>
            </form>
        </div>
    );
};

export default SignUp;
