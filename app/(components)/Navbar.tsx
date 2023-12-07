'use client'
import Link from "next/link";
import { HashIcon, MenuIcon } from "./Icons";
import { useState } from "react";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <nav className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-x-2">
                <div className="w-6 h-6 bg-white rounded-md"></div>
                <p className="text-white font-[700]">Mustapha</p>
            </div>
            <div className="sm:hidden" onClick={toggleMenu}>
                <MenuIcon />
            </div>
            <div className={`fixed flex flex-col sm:hidden transition-all duration-1000 top-0 right-0 z-50 rounded-b-2xl gap-y-6 shadow-2xl bg-background w-[50%] p-4 ${showMenu ? 'translate-x-[0%]' : 'translate-x-[150%]'}`}>
                <span onClick={toggleMenu} className="text-right absolute top-9 right-7 text-xl text-primary">X</span>
                <div className="mt-3"></div>
                {navList.map(nav => (
                    <Link href={nav.url} className="flex items-center">
                        <HashIcon />
                        <span className="ml-2">{nav.name}</span>
                    </Link>
                ))}
            </div>
            <div onClick={toggleMenu} className={`h-[100vh] w-[100vw] fixed top-0 left-0 z-20 opacity-20 bg-black ${showMenu ? '' : 'hidden'}`}>

            </div>
            <div className="hidden sm:flex justify-between ml-auto w-[50%] gap-x-8">
                {navList.map(nav => (
                    <Link href={nav.url} className="flex items-center">
                        <HashIcon />
                        <span>{nav.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

const navList: { name: string, url: string }[] = [
    {
        name: 'home',
        url: '/'
    },
    {
        name: 'works',
        url: '/works'
    },
    {
        name: 'about-me',
        url: '/about-me'
    },
    {
        name: 'contacts',
        url: '/contacts'
    },
]