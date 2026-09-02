import { Link } from 'react-router'

function Painel() {
    return (
        <>
        <nav className="flex items-center py-2 px-2 shadow-lg fixed top-0 bg-[#010620] w-full z-50">
                <h2 className="mr-2 px-2 font-bold">
                    <span className="text-white">Prótese</span>
                    <span className="text-orange-500">Pay</span>
                </h2>

                <a
                    className="mr-2 px-2 bg-primary hover:shadow-inner text-white"
                    href="/#about"
                >
                    Sobre
                </a>

                <a
                    className="mr-2 px-2 bg-primary hover:shadow-inner text-white"
                    href="/#prices"
                >
                    Preços
                </a>

                <a
                    className="mr-2 px-2 bg-primary hover:shadow-inner text-white"
                    href="/#features"
                >
                    Benefícios
                </a>

                <Link
                    className="mr-5 px-2 bg-primary hover:shadow-inner text-white rounded ml-auto shadow"
                    to="/"
                >
                   Menu
                </Link>

            </nav>
        </>

    )
}
export default Painel;