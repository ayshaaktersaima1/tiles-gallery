import Link from 'next/link';
import React from 'react';

const RegisterPage = () => {
    return (
        <div className='flex justify-center my-10 md:my-20'>
            <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-sm">
                <div className='pt-10 pb-0 text-center space-y-2'>
                    <h1 className='text-3xl font-semibold'>Create Your Account</h1>
                    <p>Join us to explore premium tile collections</p>
                </div>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Photo-url</label>
                        <input type="text" className="input" placeholder="Photo-url" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4 rounded-none">Register</button>
                    </fieldset>
                    <p className='text-center mt-2'>Already have an account?<span className='text-red-600'><Link href={'/login'}> Login</Link></span></p>

                </div>
            </div>
        </div>
    );
};

export default RegisterPage;