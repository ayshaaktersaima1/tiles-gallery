'use client'
import Link from "next/link";
import ActiveNavLink from "./ActiveNavLink";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { FaUserAlt } from "react-icons/fa";



const Navbar = () => {

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }

    const userData = authClient.useSession();

    const user = userData?.data?.user;

    const isValid = isValidUrl(user?.image);


    return (
        <div className="sticky top-0 z-9">
            <div className="navbar bg-base-100 shadow-sm py-2 md:py-5 px-2 md:px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><ActiveNavLink href={'/'}>Home</ActiveNavLink></li>
                            <li><ActiveNavLink href={'/all-tiles'}>All tiles</ActiveNavLink></li>
                            <li><ActiveNavLink href={'/profile'}>Profile</ActiveNavLink></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl font-bold">Tiles Gallery</a> */}
                    <Link href={'/'}>
                        <Image src={'/assets/logo.png'} alt="Tiles Gallery" height={70} width={100}></Image>

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><ActiveNavLink href={'/'}>Home</ActiveNavLink></li>
                        <li><ActiveNavLink href={'/all-tiles'}>All tiles</ActiveNavLink></li>
                        <li><ActiveNavLink href={'/profile'}>Profile</ActiveNavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">



                    {
                        user ? <>
                            <div className="flex items-center gap-4">

                                {
                                    isValid ? <>
                                        <Link href={'/profile'}>
                                            <div className="avatar avatar-online">
                                                <div className="w-12 rounded-full">


                                                    <Image src={user?.image} alt='Profile pic' height={60} width={60}></Image>
                                                </div>
                                            </div>
                                        </Link>
                                    </> : <>
                                        <Link href={'/profile'}>
                                            <div className='border-2 border-gray-600  rounded-full h-12 w-12 flex justify-center items-center shrink-0'>
                                                <FaUserAlt size={30} />
                                            </div></Link>
                                    </>
                                }


                                <p className="font-semibold hidden md:block">Hey, {user?.name}</p>
                                <Link href={'/login'}><button onClick={async () => await authClient.signOut()} className="btn rounded-none bg-black text-white">Logout</button></Link></div> </> :

                            <><Link href={'/login'}><button className="btn rounded-none bg-black text-white">Login</button></Link></>
                    }
                    {/* <Link href={'/login'}><button className="btn rounded-none bg-black text-white">Login</button></Link>
                    <Link href={'/login'}><button onClick={async () => await authClient.signOut()} className="btn rounded-none bg-black text-white">Logout</button></Link> */}
                </div>
            </div>
        </div >
    );
};

export default Navbar;