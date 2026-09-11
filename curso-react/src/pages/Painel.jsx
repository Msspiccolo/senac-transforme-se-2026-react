import { Link } from 'react-router'
import { useState, useEffect } from 'react';

function Painel() {
    const [modal, setModal] = useState(false)//bollean
    const [users, setUsers] = useState([])//vetor
    const [user, setUser] = useState({})//objeto
    const [loggeded, setLoggeded] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        (async () => {
            const loggeded = await JSON.parse(localStorage.getItem('loggeded'))
            setLoggeded(loggeded)


        })()
    },

        []
    );


    useEffect(() => {
        (async () => {
            const usersTemp = JSON.parse(localStorage.getItem('users'))
            if (usersTemp) setUsers(usersTemp)

        })()
    },

        []

    );


    function deleteUser(index) {
        const newUsers= users.filter((u,i)=> {
        return i != index

        })
        setUsers(newUsers)
        localStorage.getItem('users', JSON.stringify(newUsers))
        
    
        

       }


    function updateUser(indice) {
        setModal(true)
        setUser(users[indice])
        setIndex(indice)
    }

    function handleRegister() {
        let newUsers

        if (index != -1) {
            newUsers = [...users]
            newUsers[index] = user

        } else {

            newUsers = [...users, user]

        }

        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))

        setUser({})
        setModal(false)
        setIndex(-1)
        setIsEdit(false)

    }





    return (

        <>

            <h3 className="flex items-center text-center justify-center m-20  px-2 text-black font-bold py-4  ">Bem vindo, {loggeded?.nome} </h3>


            <nav className="fixed top-0 flex items-center py-2 px-2 shadow-lg  bg-[#010620] w-full z-50">
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



            {modal && (

                (<div className="fixed flex top-0 right-0 bottom-0 
                left-0  items-center  justify-center bg-black/50 z-50 ">

                    <div className="relative max-w-md w-full p-5 bg-about rounded-lg 
                    shadow-md flex flex-col bg-gradient-to-r from-[#24132F] via-[#17234A] to-[#102A52]">

                        <a onClick={() => {
                            setModal(false)
                            setIsEdit(false)
                            setUser({})
                            setIndex(-1)

                        }}
                            className="bg-prices absolute top-0 right-0  px-2 
                         rounded-full cursor-pointer ">
                            X
                        </a>

                        <h2 className="text-white font-bold">Cadastre um novo usuário!</h2>
                        <p className="text-white font-bold">Preencha as informações abaixo: </p>

                        {isEdit ? (


                            <form className="flex flex-col">

                                <label className="text-sm font-semibold text-white">Nome: </label>

                                <input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })}
                                    className="text-black w-full rounded-lg border-2 outline-none border-purple-900 !bg-purple-100 px-4 py-3
                                placeholder:text-grey-100 focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                                    type="text" placeholder="Digite seu nome completo"
                                />

                                <label className="text-sm font-semibold text-white">Email: </label>

                                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    className="text-black w-full rounded-lg border-2 outline-none border-purple-900 !bg-purple-100 px-4 py-3
                                placeholder:text-grey-100 focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                                    type="email" placeholder="Digite o seu melhor email"
                                />


                                <label className="text-sm font-semibold text-white"> Senha: </label>

                                <input onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    className="text-black w-full rounded-lg border-2 outline-none border-purple-900 !bg-purple-100 px-4 py-3
                                placeholder:text-grey-100 focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                                    type="password" placeholder="Letra maiúscula e números"
                                />

                                <label className="text-sm font-semibold text-white">Data Nascimento: </label>

                                <input value={user.dataNascimento} onChange={(e) => setUser({ ...user, dataNascimento: e.target.value })}
                                    className="text-black  w-full rounded-lg border-2 outline-none border-purple-900 !bg-purple-100 px-4 py-3 p-3
                                placeholder:text-grey-100 focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                                    type="date"
                                />

                                {index != -1 && (
                                    <a onClick={() => setIsEdit(false)}
                                        className=" cursor-pointer p-4 mr-auto px-2  mt-2 rounded ml-auto bg-red-500 py-2  font-bold text-white hover:bg-red-200">
                                        Cancelar
                                    </a>
                                )
                                }


                                <a onClick={handleRegister} className=" cursor-pointer p-4 mr-auto px-2  mt-2 rounded ml-auto bg-orange-500 py-2  font-bold text-white hover:bg-orange-300">
                                    Salvar
                                </a>

                            </form>) : //else 
                            (
                                <>
                                    <p>Nome:  {user.nome}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Data de Nascimento:  {user.dataNascimento}</p>
                                    <a onClick={() => setIsEdit(true)}
                                        className=" cursor-pointer p-4 mr-auto px-2  mt-2 rounded ml-auto bg-orange-500 py-2  font-bold text-white hover:bg-white-600">
                                        Alterar
                                    </a>



                                </>
                            )

                        }

                    </div>


                </div>)

            )}
          
                <table className =" bg-indigo-100 flex-col text-center text-black  min-w-max  shadow-md bg-clip-border 
                 items-center mb-2 mt-1 pl-2 border-slate-500">
                    <thead>
                        <tr>
                            <th>Nome</th>

                            <th>Email</th>

                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody className="font-secondary">
                        {users.map((u, i) => (
                            <tr>
                                <td>{u.nome}</td>
                                <td>{u.email}</td>
                                <td>
                                    <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-green-500"
                                        onClick={() => updateUser(i)}
                                    >V</a>

                                    <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-red-500"
                                        onClick={() => deleteUser(i)}
                                    >X</a>
                                </td>
                            </tr>


                        ))}
                    </tbody>

                </table>
          
            <a onClick={() => {
                setModal(true)
                setIsEdit(true)
            }}
                className="rounded-full bg-primary text-white px-4 py-3  fixed bottom-0 right-0">
                +
            </a>





        </>


    )


}
export default Painel;