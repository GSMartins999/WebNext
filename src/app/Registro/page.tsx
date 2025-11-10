'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import fundoMain from "../assets/fundomain.png";
import godofwar from "../assets/godofwar.jpg";
import rdr from "../assets/rdr.png";
import tlou from "../assets/tlou.png";
import fifa from "../assets/fifa.png";
import insta from "../assets/instagram.png";
import face from "../assets/facebook.png";
import x from "../assets/twitter.png";
import logobranca from "../assets/logobranca.png";
import { ContainerBody, ContainerFooter, ContainerHeader, ContainerMain } from "./styled";

export default function Registro() {
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
          <Link href="/Historico" style={{ color: 'white', textDecoration: 'none' }}>
            <button>Histórico</button>
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Nome do Jogo" style={{ color: 'black' }} required />
          <input type="text" placeholder="Descrição" style={{ color: 'black' }} required />
          <input type="text" placeholder="URL da Imagem" style={{ color: 'black' }} required />
          <input type="date" placeholder="Data de Lançamento" style={{ color: 'black' }} required />
          <button type="submit">Cadastrar</button>
        </form>

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
        <span></span>
        <p>© Game Catalog</p>
        <Image src={logobranca} alt="Logo Game Catalog" width={100} height={50} />
      </ContainerFooter>
    </ContainerBody>
  );
}
