
import Link from "next/link";
import ActiveNavLink from "./ActiveNavLink";
import Image from "next/image";



const Navbar = () => {



    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
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
                    <Link href={'/login'}><button className="btn rounded-none bg-black text-white">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;