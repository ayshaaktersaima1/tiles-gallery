import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateProfile = () => {



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleUpdateBtn = async (data) => {
        const name = data.name;
        const image = data.photoUrl;

        if (name !== '' || image !== '') {
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
        <div>

            <button className="btn rounded-3xl px-20 bg-black text-white mt-3" onClick={() => document.getElementById('my_modal_2').showModal()}>Update Your Profile</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex justify-center items-center py-10">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleUpdateBtn)}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type='text' {...register("name")} className="input" placeholder="Name" />
                                    <label className="label">Photo-url</label>
                                    <input {...register("photoUrl")} type="text" className="input" placeholder="photoUrl" />


                                    <button className="btn btn-neutral mt-4">Update</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </div>


    );
};

export default UpdateProfile;



