'use client'
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ProfileEdit = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleUpdateBtn = async (data) => {
        const name = data.name;
        const image = data.photoUrl;

        if (name.trim() !== '' || image.trim() !== '') {
            await authClient.updateUser({
                image: image,
                name: name,
            })
            toast.success('Update Successful');
        }
        else {
            toast.error('Please Enter Name or Photo url to update');
        }


    }

    return (
        <div className='w-[90%] mx-auto my-10 md:my-20 flex items-center justify-center'>
            <form onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()} className='card-body bg-base-200 w-full max-w-sm shrink-0 shadow-sm' onSubmit={handleSubmit(handleUpdateBtn)}>
                <div className='text-center space-y-1 mb-3'>
                    <h1 className='text-2xl font-semibold'>Update Profile</h1>
                    <p className='text-sm'>Edit your name and profile picture</p>
                </div>
                <fieldset className="fieldset">
                    <label className="label font-semibold text-black text-base">Name</label>
                    <input type='text' {...register("name")} className="input" placeholder="Name" />
                    <label className="label font-semibold text-black text-base">Photo-url</label>
                    <input {...register("photoUrl")} type="text" className="input" placeholder="photoUrl" />
                    <button className="btn btn-neutral mt-4">Save Changes</button>
                </fieldset>
            </form>

        </div>
    );
};

export default ProfileEdit;