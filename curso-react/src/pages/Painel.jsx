import { Link} from 'react-router'
import { useState } from 'react';

function Painel() {
    const [modal, setModal] = useState(false)//bollean
    const [users, setUsers] = useState([])//vetor
    const [user, setUser] = useState({})//objeto

    function handleRegister() {
        const newUsers = [...users, user]
        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))
        setUser({})
        setModal(false)
    }


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
        shadow-md flex flex-col bg-gradient-to-r from-[#24132F] via-[#17234A] to-[#102A52]">

                        <a onClick={() => setModal(false)} id="btClose" className="bg-prices absolute top-0 right-0  px-2 
             rounded-full cursor-pointer ">
                            X
                        </a>

                        <h2 className="text-white font-bold">Cadastre um novo usuário!</h2>
                        <p className="text-white font-bold">Preencha as informações abaixo: </p>


                        <form className="flex flex-col">

                            <span className="p-3 text-center text-white font-bold ">Name: </span>
                            <input onChange={(e) => setUser({ ...user, nome: e.target.value })} className="text-black w-full rounded-lg border-2 outline-none border-purple-900 !bg-purple-100 px-4 py-3
                            placeholder:text-grey-100 focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                                type="text" placeholder="Digite seu nome completo" />

                            <span className="p-3 text-center text-white font-bold ">Email: </span>
                            <input onChange={(e) => setUser({ ...user, email: e.target.value })} className="text-black w-full rounded-lg border-2 outline-none border-purple-900 !bg-purple-100 px-4 py-3
                             placeholder:text-grey-100 focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                                type="email" placeholder="Digite o seu melhor email" />


                            <span className="p-3 text-center text-white font-bold ">Senha: </span>
                            <input onChange={(e) => setUser({ ...user, password: e.target.value })} className="text-black w-full rounded-lg border-2 outline-none border-purple-900 !bg-purple-100 px-4 py-3
                             placeholder:text-grey-100 focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                                type="password" placeholder="Letra maiúscula e números" />

                            <span className="p-3 text-center text-white font-bold ">Data Nascimento: </span>
                            <input onChange={(e) => setUser({ ...user, dataNascimento: e.target.value })} className="text-black  w-full rounded-lg border-2 outline-none border-purple-900 
                             !bg-purple-100 px-4 py-3 p-3placeholder:text-grey-100 focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30" type="date" />


                            <a onClick={handleRegister} className=" p-4 mr-auto px-2  mt-2 rounded ml-auto bg-orange-500 py-2  font-bold text-white hover:bg-orange-600">
                                Salvar
                            </a>

                        </form>

                    </div>

                </div>)

            )}

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>

                        <th>Email</th>

                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody className="font-secundary">

                </tbody>

            </table>

            <a onClick={() => setModal(true)} id="addUser" className="rounded-full bg-primary text-white px-4 py-3  fixed bottom-0 right-0"> + </a>





        </>


    )


}
export default Painel;