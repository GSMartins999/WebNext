import { ContainerBody, ContainerMain, ContainerHeader, ContainerFooter } from "./style";
import Image from "next/image";
import Link from "next/link";

export default function inicial() {
    return (

        <ContainerBody>
            <ContainerHeader>
                <section>
                    <p>
                        <Link href="./inicial.html">
                            Principal
                        </Link>
                    </p>
                    <p>
                        <Link href="./Registro.html">
                            Jogos
                        </Link>
                    </p>
                </section>
                <section>
                    <Image src={"./Image/logo.png"} alt="logo" />
                </section>
                <section>
                    <section>
                        <span></span>
                        <span></span>
                        <span></span>
                    </section>
                </section>
            </ContainerHeader>
            <ContainerMain>
                <section className="container">
                    <Image src="./Image/fundomain.png" alt="fundomain" />
                    <article>
                        <section>
                            <p>🎮 Bem-vindo ao Game Catalog! 🚀
                                Aqui você encontra um espaço dedicado para explorar, descobrir e organizar seus jogos favoritos.
                                Nosso catálogo foi criado para quem ama o universo gamer e quer ter tudo em um só lugar:
                                informações, referências e muito mais.
                            </p>
                            <p>
                                Prepare-se para navegar por diferentes títulos, conhecer novos mundos e revisitar clássicos que
                                marcaram gerações. Seja você um jogador casual ou um apaixonado por maratonas de games, o Game
                                Catalog é o seu ponto de encontro.
                            </p>
                            <p>
                                👉 Explore, descubra e divirta-se!
                            </p>
                        </section>
                        <aside>
                            <Image src="./Image/logo.png" alt="logo" />
                        </aside>
                    </article>

                </section>


                <section className="cards">
                    <section>
                        <Image src="./Image/rdr.png" alt="rdr" />
                        <article>
                            <p><b>Red Dead Redemption 2</b></p>
                            <p>9 de outubro de 2018</p>
                        </article>
                        <p>Red Dead Redemption 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Rockstar
                            Games.</p>
                    </section>

                    <section>
                        <Image src="./Image/godofwar.jpg" alt="godofwar" />
                        <article>
                            <p><b>God Of War</b></p>
                            <p>9 de novembro de 2022</p>
                        </article>
                        <p>God of War Ragnarök é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e
                            publicado pela Sony.</p>
                    </section>

                    <section>
                        <Image src="./Image/fifa.png" alt="fifa" />
                        <article>
                            <p><b>FC25</b></p>
                            <p>27 de setembro de 2024</p>
                        </article>
                        <p>EA Sports FC 25 é um videojogo de futebol desenvolvido pela EA Canadá e EA Roménia, e publicado pela
                            EA.</p>
                    </section>

                    <section>
                        <Image src="./Image/tlou.png" alt="tlou" />
                        <article>
                            <p><b>The Last of Us</b></p>
                            <p>14 de junho de 2013</p>
                        </article>
                        <p>The Last of Us é um jogo eletrônico de ação-aventura e sobrevivência desenvolvido pela Naughty Dog e
                            publicado pela Sony Computer.</p>
                    </section>

                </section>


                <article>
                    <section>
                        <Image src="./Image/logo.png" alt="logo" />
                    </section>
                    <section>
                        <p>Siga o Game Catalog nas redes sociais Acompanhe nossas páginas para ficar por dentro das novidades
                            do mundo dos jogos, atualizações do catálogo, eventos, promoções exclusivas e muito mais</p>
                    </section>
                    <section>
                        <section>
                            <Image src="./Image/instagram.png" alt="instagram" />
                            <Image src="./Image/twitter.png" alt="x" />
                            <Image src="./Image/facebook.png" alt="facebook" />
                        </section>
                    </section>
                </article>
            </ContainerMain>

            <ContainerFooter>
                <span></span>
                <p>© Game Catalog</p>
                <Image src="./Image/logobranca.png" alt="Logo Game Catalog" />
            </ContainerFooter>

        </ContainerBody>

    )
}