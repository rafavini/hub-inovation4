import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const socials = [
    { icon: <FaGithub  size={30} />, caminho: "https://github.com/rafavini" },
    { icon: <FaLinkedinIn size={30}/>, caminho: "https://www.linkedin.com/in/rafael-vinicius-954698281/" },
]

export default function Socials() {
    return (
        <div className="flex gap-6">
            {socials.map((item, index) => {
                return <Link key={index} href={item.caminho}>{item.icon}</Link>
            })}
        </div>
    )
}