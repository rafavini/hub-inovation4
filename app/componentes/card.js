import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const Card = ({ numero, titulo, descricao, href }) => {
    return (
        <div className="bg-gray-400/10 shadow-lg rounded-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-between items-center mb-4">
                <div className="text-3xl font-bold">{numero}</div>
                <Link href={href} lassName="rounded-full bg-gray-200 p-3">
                    <BsArrowDownRight className="text-xl" />
                </Link>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-purple-400">{titulo}</h2>
            <p>{descricao}</p>
        </div>
    );
};

export default Card;
