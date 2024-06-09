"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
const links = [
    {
        nome: "home",
        caminho: "/"
    },
    {
        nome: "Trabalhos",
        caminho: "/trabalhos"
    }
]
export default function MobileNav() {
    const pathname = usePathname()
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="relative z-50">    
            <CiMenuFries onClick={toggleDropdown} className="cursor-pointer" />
            {dropdownOpen && (
                <ul className="absolute mt-2 right-0 w-48">
                    {links.map((link) => (
                        <li key={link.caminho} className="p-2 bg-zinc-950 hover:text-purple-400 capitalize">
                            <Link href={link.caminho} className={pathname === link.caminho ? "font-bold text-purple-400" : ""}>
                                {link.nome}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}