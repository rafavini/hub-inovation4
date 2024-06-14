"use client"
import Image from "next/image"

export default function Foto() {
    return (
        <div className="w-full h-full relative">
            <div className="w-[400px] h-[400px] xl:w-[800px] xl:h-[800px] ">
                <Image 
                    src="/fotoPerfil.png"
                    priority
                    quality={100}
                    fill
                    alt="Profile picture"
                    className="object-contain" 
                />
            </div>
        </div>
    )
}
