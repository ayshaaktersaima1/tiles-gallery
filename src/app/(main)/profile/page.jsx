"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';

const ProfilePage = () => {

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }



    const userData = authClient.useSession();
    console.log('user data', userData)
    const user = userData?.data?.user;
    const isValid = isValidUrl(user?.image);


    return (
        <div className='w-[90%] mx-auto my-10 md:my-20'>
            <h1 className='text-3xl md:text-5xl font-bold text-center mb-1 md:mb-5'>Welcome to Tiles Gallery</h1>
            <p className='text-center mb-5'>Manage your personal information and account settings</p>



            <div className='bg-base-300 rounded-lg shadow-sm p-10 flex flex-col gap-5'>


                <div className='flex justify-center items-center'>

                    {

                        isValid &&
                            user?.image ? <><Image src={user?.image} alt='Profile Picture' height={300} width={300} className='h-60 w-60 rounded-full object-cover'></Image></> :
                            <><div className='border-2 border-gray-600  rounded-full h-40 w-40 flex justify-center items-center shrink-0'>
                                <FaUserAlt size={100} />
                            </div></>
                    }

                </div>

                <div className='flex justify-center text-left'>
                    <div className='space-y-2 text-base my-4 md:text-lg '>
                        <p><span className='font-semibold'>Name: </span>{user?.name}</p>
                        <p><span className='font-semibold'>Email: </span>{user?.email}</p>
                        {/* <button className='btn rounded-3xl px-10 bg-black text-white mt-3'>Update Your Profile</button> */}
                        <Link href={'/profile/edit'}>
                            <div className='flex justify-center'>
                                <button className='btn rounded-3xl px-5 md:px-20 bg-black text-white mt-3'>Update Your Profile</button></div></Link>

                    </div>
                </div>

            </div>


        </div>


    );
};

export default ProfilePage;