import Socials from "./componentes/Socials";
import Foto from "./componentes/foto";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div>
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="text-[48px] xl:text-[80px] leading-tight font-semibold mb-6 ">
                Ola, eu sou <br /> <span className="text-purple-400">Rafael Vinicius</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Eu crio experiências digitais elegantes e sou proficiente em diversas linguagens de programação e tecnologias.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <div className="mb-8 xl:mb-0">
                  <Socials/>
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Foto/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
