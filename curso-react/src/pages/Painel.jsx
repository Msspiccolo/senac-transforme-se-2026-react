import { Link } from 'react-router'
import { useState } from 'react';
function Painel() {
    const [modal, setModal] = useState(false)




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
            <h2 id="welcome"></h2>
            <h3 id="usuarios"></h3>

            {modal && (

                (<div className="fixed flex top-0 right-0 bottom-0 
        left-0  items-center  justify-center bg-black/50 z-50 ">

                    <div className="relative max-w-md w-full p-5 bg-about rounded-lg 
        shadow-md flex flex-col bg-white">

                        <a onClick={() => setModal(false)} id="btClose" className="bg-prices absolute top-0 right-0  px-2 
             rounded-full cursor-pointer ">
                            X
                        </a>

                        <h2>Cadastre um novo usuário!</h2>
                        <p>Preencha as informações abaixo:</p>

                        <form className="flex flex-col">

                            <span className="text-center text-black ">Name: </span>
                            <input id="iName" className="text-black w-full rounded-lg border outline-none border-[#263B63] !bg-blue-100 px-4 py-3
                            placeholder:text-[#8FA4C7] focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                                type="text" placeholder="Digite seu nome completo" />

                            <span className="text-center text-black ">Email: </span>
                            <input id="iEmail" className="text-black w-full rounded-lg border outline-none border-[#263B63] !bg-blue-100 px-4 py-3" type="email" placeholder="Digite o seu melhor email" />


                            <span className="text-center text-black ">Senha: </span>
                            <input id="iPass" className="text-black w-full rounded-lg border outline-none border-[#263B63] !bg-blue-100 px-4 py-3" type="password" placeholder="Letra maiúscula e números" />

                            <span className="text-center text-black ">Data Nascimento: </span>
                            <input id="iBirth" className="text-black w-full rounded-lg border outline-none border-[#263B63] !bg-blue-100 px-4 py-3" type="date" />



                            <a id="formRegister" className="mt-5 bg-primary text-white 
                        text-center font-bold rounded-md py-2"> Salvar
                            </a>

                        </form>

                    </div>

                </div>)

            )}

            <table className="mt-15">
                <thead>
                    <th>Nome</th>

                    <th>Email</th>

                    <th>Ações</th>

                </thead>

                <tbody className="font-secundary">

                </tbody>

            </table>

            <a onClick={() => setModal(true)} id="addUser" className="rounded-full bg-primary text-white px-4 py-3  fixed bottom-0 right-0"> + </a>





        </>


    )


}
export default Painel;