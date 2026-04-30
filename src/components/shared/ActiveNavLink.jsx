'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavLink = ({ children, href }) => {

    const pathName = usePathname();
    const isActivePath = pathName === href;
    console.log('here is your active', pathName)
    return (
        <div>
            <Link href={href} className={`${isActivePath ? 'font-extrabold border-b' : ''}`}>{children}</Link>
        </div>
    );
};

export default ActiveNavLink;