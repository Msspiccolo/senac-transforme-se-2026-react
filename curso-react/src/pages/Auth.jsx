import { Link } from "react-router";


function Auth() {
    return (
        <>
            <nav class="flex items-center py-2 px-2 shadow-lg fixed absolute top-0 bg-white w-full">
                <Link className="mr-2 px-2  bg-primary hover:shadow-inner text-white" to="/">Sobre</Link>
                <Link className="mr-2 px-2  bg-primary hover:shadow-inner text-white" to="/"> Preços</Link>
                <Link className="mr-2 px-2 bg-primary hover:shadow-inner text-white" to=" /">Benefícios</Link>
                <Link className="mr-5 px-2 bg-primary hover:shadow-inner text-white rounded ml-auto shadow left-0 " to="/" >Menu</Link>
            </nav>

            <div class="h-full flex bg-feature">

                <div class="max-w-sm items-center max-w-sm mx-auto my-auto p-6 bg-black rounded-lg shadow-md flex column text-white ">

                    <form class="flex flex-col">


                        Email: <input id="iEmaillogin" type="email" placeholder="Digite o seu  email cadastrado: " />



                        Senha: <input id="iPassLogin" type="password" placeholder="Digite sua senha:" />


                        <Link id="btLogin"
                            class=" mt-5 bg-primary text-white text-center rounded-md py-2"
                            to="painel">Entrar</Link>

                    </form>
                </div>
            </div>
           

</>

    )
}

export default Auth;