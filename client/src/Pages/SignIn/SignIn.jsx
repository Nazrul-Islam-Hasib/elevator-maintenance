import React from 'react';
import SignInButton from './SignInButton/SignInButton';

const SignIn = () => {
    return (
        <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Sign In to get latest data</p>
            <SignInButton></SignInButton>
        </div>
    );
};

export default SignIn;