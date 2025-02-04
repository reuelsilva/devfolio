"use client";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from "./Navigation";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className="fixed top-0 left-0 w-full bg-color-02 p-6 flex justify-end items-center sm:justify-center sm:z-10">
           <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen?<CloseIcon style={{ fontSize: '32px' }} className="text-white"/>:<MenuIcon style={{ fontSize: '32px' }} className="text-white"/>}</button>
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen}/> 
        </header>
    )
}