"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

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
export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.caminho} key={index} className={`${link.caminho == pathname && "text-purple-400 border-b-2 border-b-purple-400"} capitalize font-medium hover:text-purple-400`}>
                    {link.nome}
                </Link>
            })}
        </nav>
    )
}