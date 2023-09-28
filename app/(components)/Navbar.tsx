import Link from "next/link";
import { HashIcon, MenuIcon } from "./Icons";

function Navbar() {
    return (
        <nav className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-x-2">
                <div className="w-6 h-6 bg-white rounded-md"></div>
                <p className="text-white font-[700]">Mustapha</p>
            </div>
            <div className="sm:hidden">
                <MenuIcon />
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

const navList : { name: string, url: string}[] = [
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