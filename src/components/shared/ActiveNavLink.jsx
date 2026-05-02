'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavLink = ({ children, href }) => {

    const pathName = usePathname();
    const isActivePath = pathName === href;
    return (
        <div>
            <Link href={href} className={`${isActivePath ? 'font-extrabold border-b' : ''}`}>{children}</Link>
        </div>
    );
};

export default ActiveNavLink;