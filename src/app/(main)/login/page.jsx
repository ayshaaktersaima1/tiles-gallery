import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='flex justify-center my-10 md:my-20'>
            <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-sm">
                <div className='pt-10 pb-0 text-center space-y-2'>
                    <h1 className='text-3xl font-semibold'>WELCOME BACK</h1>
                    <p>Please enter your details</p>
                </div>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4 rounded-none">Login</button>
                    </fieldset>

                    <p className='text-center mt-2'>Dont have an account? <span className='text-red-600'><Link href={'/register'}>Register Now</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;