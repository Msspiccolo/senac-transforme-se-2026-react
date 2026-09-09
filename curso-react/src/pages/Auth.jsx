import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

function Auth() {
    /*const [variavel, funcaoAlteraVariavel]= useState('valor inicial');*/
    const [email, setEmail] = useState("")
    const [pass, setPassword] = useState("")
    const [msg, setMsg ] = useState("")
    const nav = useNavigate();
    function handleLogin(){
        const users = JSON.parse(localStorage.getItem("users"));
    
        let user = users.find(u => {
            return u.email== email
        
        })

        if (!user){
            // Os estudantes iram fazer uma useState de mensagem
            // eslint-disable-next-line no-const-assign
            setMsg("Usuário não encontrado");

            return;
        }

        if (user.password == pass){
            //mando para tela do painel
         localStorage.setItem("loggeded", JSON.stringify(user));
            setMsg("Seja bem vindo!");
              nav('/painel');

        }else{
            //outra mensagem usando a mesma UseState de mensagem
              setMsg("Usuário não encontrado")

        }


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

            <div className="bg-gradient-to-r from-[#24132F] via-[#17234A] to-[#102A52] flex min-h-screen 
            items-center justify-center px-4 pt-20">

                <div className="w-full max-w-sm rounded-2xl bg-[#080F24] p-6 text-white shadow-2xl">

                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold">
                            <span className="text-white">Prótese</span>
                            <span className="text-orange-500">Pay</span>
                        </h1>

                        <p className="mt-2 text-sm text-gray-400">
                            Entre na sua conta para continuar
                        </p>
                    </div>

                    <form className="flex flex-col gap-5">
                        <span>{msg}</span>
                        <span className="text-left">Email: </span>
                        <input
                            type="email"
                            value={email}
                            className="w-full rounded-lg border border-[#263B63] !bg-[#0A1730] px-4 py-3 text-white outline-none 
                            transition placeholder:text-[#8FA4C7] focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                            placeholder="Digite o seu email cadastrado:"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {email}
                        <span className="text-left">Senha:</span>

                        <input
                            type="password"
                            value={pass}
                            className="w-full rounded-lg border border-[#263B63] !bg-[#0A1730] px-4 py-3 text-white outline-none 
                            transition placeholder:text-[#8FA4C7] focus:border-[#5278B5] focus:ring-2 focus:ring-[#5278B5]/30"
                            placeholder="Digite sua senha:"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <a onClick={handleLogin} className="mr-auto px-2  rounded ml-auto bg-orange-500 py-2  font-bold text-white hover:bg-orange-600"
                            to="/painel"
                        >
                            Entrar
                     </a>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Auth;