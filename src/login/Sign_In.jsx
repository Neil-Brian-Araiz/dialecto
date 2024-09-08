import React from 'react';
import {Link} from 'react-router-dom';
import { FaFacebook,  } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

import Logo from '../assets/logo'
import Button from '../components/shared/Btn';

import './logIn.css';
 
const SignIn = () => {
    return (
        <div className='wrapper-signIn'>
            <div className='logo-bg'>
                <Logo />
                <h1>DIALECTO</h1>
            </div>
            <form action="">
                <h2>Sign in to your account</h2>
                <div className='input-box'>  
                    <input type='text' placeholder='Username' required />
                </div>
                <div className='input-box'>  
                    <input type='email' placeholder='Email' required />
                </div>
                <div className='input-box'>  
                    <input type='password' placeholder='Password' required />
                </div>

                <div className='signUp-btn'>
                    <Link to='/dialecto/home'> <Button label="SIGN IN"/> </Link>
                </div>

                <h4>
                    <Link to='/dialecto/forgot-pass' className='forgot-pass-link'>Forgot Password</Link>
                </h4>

                <h5>
                    Don't have an account?{' '} 
                    <span>
                        <Link to='/dialecto/sign-up' className='signUp-link'>Sign Up</Link>
                    </span>
                </h5>

                <div className='acct-btn-container'>
                    <button> <FaFacebook className='fb-icon' /> Facebook</button>
                    <button> <FcGoogle /> Google</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;