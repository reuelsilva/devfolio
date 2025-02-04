import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type NavItemProps = {
    children: string
    href: string,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function NavItem({children, href, isOpen, setIsOpen}: NavItemProps){
    return(
        <li>
            <Link onClick={() => setIsOpen(!isOpen)} href={href} className="text-white font-medium hover:text-color-03">{children}</Link>
        </li>
    )
}