import { Dispatch, SetStateAction } from "react";
import NavItem from "./NavItem";

type NavigationProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Navigation({isOpen, setIsOpen}: NavigationProps) {
    return (
        <nav className={`${isOpen?'translate-x-0 duration-1500':'translate-x-full duration-1500'} bg-color-02 fixed top-20 bottom-0 right-0 w-[90%] sm:static sm:translate-x-0 sm:duration-0`}>
            <ul className="flex flex-col gap-6 items-center sm:flex-row sm:justify-center">
                <NavItem href="#home" isOpen={isOpen} setIsOpen={setIsOpen}>Início</NavItem>
                <NavItem href="#projects" isOpen={isOpen} setIsOpen={setIsOpen}>Projetos</NavItem>
                <NavItem href="#skills" isOpen={isOpen} setIsOpen={setIsOpen}>Habilidades</NavItem>
                <NavItem href="#contact" isOpen={isOpen} setIsOpen={setIsOpen}>Contatos</NavItem>
            </ul>
        </nav>
    )
}