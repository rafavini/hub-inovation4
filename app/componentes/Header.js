import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./mobileNav";

export default function Header() {
    return (
        <header className="py-8 px-4 xl:py-12 xl:px-0 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        Rafavini <span className="text-purple-400">.</span>
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="hidden xl:flex  items-center gap-8">
                    <Nav />
                    <Link href={"/"}>
                        <button className="bg-purple-400 rounded-s-3xl px-3 text-black capitalize font-semibold">Contato</button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}