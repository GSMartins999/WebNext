"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import tlou from "../assets/tlou.png";
import insta from "../assets/instagram.png";
import face from "../assets/facebook.png";
import x from "../assets/twitter.png";
import logobranca from "../assets/logobranca.png";
import {
  ContainerBody,
  ContainerFooter,
  ContainerHeader,
  ContainerMain,
} from "./styled";

export default function Historico() {
  return (
    <ContainerBody>
      <ContainerHeader>
        <section>
          <p>
            <Link href="/inicial">Principal</Link>
          </p>
          <p>
            <Link href="/Registro">Jogos</Link>
          </p>
        </section>

        <section>
          <Image src={Logo} alt="Logo" width={150} height={80} />
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
        <section>
          <Link href="/Registro">
            <button>Novo Registro</button>
          </Link>
          <Link href="/Historico">
            <button>Histórico</button>
          </Link>
        </section>

        <section className="container">
          <section>
            <section>
              <Image src={tlou} alt="The Last of Us" width={200} height={120} />
            </section>

            <section>
              <section>
                <section>
                  <p>
                    <b>God Of War</b>
                  </p>
                  <p>9 de novembro de 2022</p>
                </section>
                <p>
                  God of War Ragnarök é um jogo eletrônico de ação-aventura
                  desenvolvido pela Santa Monica Studio e publicado pela Sony.
                </p>
              </section>
            </section>

            <section className="botao">
              <button>Editar</button>
              <button style={{ backgroundColor: "red" }}>Excluir</button>
            </section>
          </section>
        </section>

        <article>
          <section>
            <section>
              <Image src={insta} alt="Instagram" width={40} height={40} />
              <Image src={x} alt="Twitter/X" width={40} height={40} />
              <Image src={face} alt="Facebook" width={40} height={40} />
            </section>
          </section>
        </article>
      </ContainerMain>

      <ContainerFooter>
        <p>© Game Catalog</p>
        <Image src={logobranca} alt="Logo Game Catalog" width={100} height={50} />
      </ContainerFooter>
    </ContainerBody>
  );
}
