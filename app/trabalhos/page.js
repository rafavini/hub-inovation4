import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"

export default function Trabalhos() {

    const trabalhos = [
        {
            numero: "01",
            titulo: "Construindo Aplicações Modernas com React e Next.js",
            descricao: "Vamos explorar o poderoso framework React para construir uma aplicação web moderna do zero, utilizando o Next.js conforme as recomendações atuais da documentação do React. O evento é ideal para desenvolvedores iniciantes e intermediários que desejam aprimorar suas habilidades em React e entender como criar projetos robustos e escaláveis. Mergulharemos em conceitos fundamentais como componentes, state e hooks, como useState e useEffect. Também abordaremos a navegação entre páginas e a integração com APIs externas para exibir dados em tempo real.",
            href: "https://senachub.ms.senac.br/hubinnovation4/inscricao.php?id_palestra=1"
        },
        {
            numero: "02",
            titulo: "Web Development",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            href: ""
        }
    ]

    return (
        <section className="min-h-[80px] flex flex-col justify-center py-12  px-4 xl:py-0 xl:px-0" >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {trabalhos.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-6 hover:text-purple-400">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold ">{item.numero}</div>
                                <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center "><BsArrowDownRight className="text-black text-3xl " /></Link>
                            </div>
                            <h1 className="text-[20px] xl:text-[22px] leading-tight font-semibold mb-6  ">
                                {item.titulo}
                            </h1>
                            <p className="max-w-[500px]  text-white/80">{item.descricao}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}