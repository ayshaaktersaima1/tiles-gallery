import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    return (
        <div className='w-[90%] mx-auto my-10 md:my-20'>
            <h1 className='text-3xl text-center mb-5'>Welcome back,</h1>
            <p className='text-center'>Manage your personal information and account settings</p>



            <div className="card lg:card-side bg-base-100 flex flex-col  md:flex-row justify-center items-center gap-10">
                <figure className='h-20 w-20 rounded-full relative aspect-square overflow-hidden'>
                    <Image src={'/assets/banner.jpg'} height={300} width={200} alt='tile image' className='object-cover'></Image>
                </figure>
                <div className="card-body w-full md:w-1/2">

                    <div className='space-y-2 text-base my-4 md:text-lg'>
                        <p><span className='font-semibold'>Name:</span>Saima</p>
                        <p><span className='font-semibold'>Name:</span>Saima</p>
                        <p><span className='font-semibold'>Name:</span>Saima</p>

                    </div>


                    <div className="card-actions justify-center">
                        <button className="btn bg-black text-white rounded-5xl w-[50%]">Update your profile</button>
                    </div>
                </div>
            </div>







        </div>







    );
};

export default ProfilePage;