import Foto from "../componentes/foto";
export default function Sobre() {

    return (
        <section className="h-full ">
            <div className="container mx-auto h-full">
                <div>
                    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                        <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
                            <Foto />
                        </div>
                        <div className="text-center xl:text-left order-2 xl:order-none">
                            <h1 ><span className="text-[48px] text-purple-400 font-semibold">Sobre mim</span></h1>

                            <p className="max-w-[500px] mb-9 text-white/80">
                                Eu crio experiências digitais elegantes e sou proficiente em diversas linguagens de programação e tecnologias.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}