import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    return (
        <div className='w-[90%] mx-auto my-10 md:my-20'>
            <h1 className='text-3xl text-center mb-5'>Welcome back,</h1>
            <p className='text-center mb-5'>Manage your personal information and account settings</p>



            <div className='bg-base-300 rounded-lg shadow-sm p-10 flex flex-col gap-5'>


                <div className='flex justify-center items-center'>
                    <Image src={'/assets/banner.jpg'} alt='Profile Picture' height={300} width={300} className='h-60 w-60 rounded-full object-cover'></Image>
                </div>

                <div className='flex justify-center text-left'>
                    <div className='space-y-2 text-base my-4 md:text-lg '>
                        <p><span className='font-semibold'>Name:</span>Saima</p>
                        <p><span className='font-semibold'>Email:</span>Saima</p>
                        <button className='btn rounded-3xl px-10 bg-black text-white mt-3'>Update Your Profile</button>

                    </div>
                </div>

            </div>


        </div>


    );
};

export default ProfilePage;