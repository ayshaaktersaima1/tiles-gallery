'use client'
import ContinueWithGoogle from '@/components/ContinueWithGoogle';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const HandleRegFunc = async (data) => {
        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: data.photoUrl,

        });

        if (error) {
            toast.error(error.message);

        }
        else {
            await authClient.signOut();
            toast.success('Account created successfully!')
            router.push('/login');

        }
    }

    return (
        <div className='flex justify-center my-10 md:my-20'>
            <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-sm">
                <div className='pt-10 pb-0 text-center space-y-2'>
                    <h1 className='text-3xl font-semibold'>Create Your Account</h1>
                    <p>Join us to explore premium tile collections</p>
                </div>
                <div className="card-body">
                    <form onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()} onSubmit={handleSubmit(HandleRegFunc)}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input {...register("name", { required: true })} type="text" className="input" placeholder="Name" />

                            <label className="label">Email</label>
                            <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />

                            <label className="label">Photo-url</label>
                            <input {...register("photoUrl")} type="text" className="input" placeholder="Photo-url" />

                            <label className="label">Password</label>
                            <input {...register("password", { required: true })} type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4 rounded-none">Register</button>
                        </fieldset>
                    </form>

                    <ContinueWithGoogle></ContinueWithGoogle>

                    <p className='text-center mt-2'>Already have an account?<span className='text-red-600'><Link href={'/login'}> Login</Link></span></p>


                </div>
            </div>
        </div>
    );
};

export default RegisterPage;