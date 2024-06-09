"use client"
import Image from "next/image"

export default function Foto() {
    return (
        <div className="w-full h-full relative">
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] ">
                <Image 
                    src="/fotoPerfil.png"
                    priority
                    quality={100}
                    fill
                    alt="Profile picture"
                    className="object-contain rounded-full" 
                />
            </div>
        </div>
    )
}
