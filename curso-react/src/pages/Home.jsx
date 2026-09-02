import { Link } from 'react-router'

function Home() {
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
                    to="auth"
                >
                    Acessar
                </Link>

            </nav>


            <main className="text-black">

                <div className="bg-blue-100 pt-22 pb-5"> </div>

                <div
                    id="about"
                    className="bg-gradient-to-r from-[#010620] via-[#17264A] to-[#12345C] py-10 scroll-mt-24" >

                    <div className="mx-auto max-w-5xl px-6 text-center">

                        <h2 className="text-2xl font-bold text-white mb-5 ">
                            Sobre nós
                        </h2>

                        <article className="text-blue-300">

                            <p className="mb-5">
                                Nossa empresa é uma empresa do tipo fintech,
                                chamada <b>Prótese Pay</b>, voltada para a venda de
                                <b> próteses, moldes 3D</b> e como uma
                                <b> auxiliadora de crédito.</b>
                            </p>

                            <p className="mb-5">
                                Nós disponibilizamos crédito para que o paciente tenha
                                a possibilidade de adquirir uma prótese e que possa
                                pagar parcelado.
                            </p>

                            <p className="mb-5">
                                Nossa empresa também faz parceria com outras empresas
                                que fornecem próteses para que o cliente possa ter
                                outra forma de adquirir o produto.
                            </p>

                            <p>
                                Fornecemos modelos 3D para que o paciente tenha uma
                                prótese personalizada e que facilite o uso, sem causar
                                tanto desconforto.
                            </p>

                        </article>

                    </div>

                </div>

                <div
                    id="prices"
                    className="bg-gradient-to-r from-[#010620] via-[#3A2A0A] to-[#12345C] py-10 scroll-mt-24"
                >

                    <div className="mx-auto max-w-5xl px-6 text-center text-[#F1F5FF]">

                        <h2 className="text-2xl font-bold text-[#F1F5FF] mb-5 ">
                            Preços
                        </h2>

                        <p className="mb-5">
                            Possuímos vários tipos de produtos, sendo eles peças,
                            moldes 3D e a prótese pronta da nossa marca e de marcas
                            parceiras.
                        </p>

                        <p className="mb-5">
                            Os modelos 3D podem ter preços variados de
                            <b> R$ 2.000,00 a R$ 5.000,00</b>,
                            podendo sofrer alterações.
                        </p>

                        <p>
                            As próteses já prontas podem ter preços variados por conta
                            das parcerias. Contudo, os valores podem ser a partir de
                            <b> R$ 10.000,00.</b>
                        </p>

                    </div>

                </div>

                <div
                    id="features"
                    className="bg-gradient-to-r from-[#010620] via-[#344B73] to-[#12345C] py-10 scroll-mt-24"
                >

                    <div className="mx-auto max-w-5xl px-6 text-center text-blue-300">

                        <h2 className="text-2xl font-bold text-white mb-5">
                            Benefícios
                        </h2>

                        <p className="mb-5">
                            Nossa empresa, por ser do ramo <b>fintech</b>,
                            proporciona ao cliente créditos para que ele consiga
                            adquirir a prótese.
                        </p>

                        <p>
                            Quando o cliente adquire o nosso crédito, possibilitamos
                            <b> outras formas de pagamento</b>, para que ele consiga
                            adquirir o produto sem tantos desafios financeiros.
                        </p>

                    </div>

                </div>

            </main>


            <footer>
            </footer>

        </>
    )
}

export default Home;