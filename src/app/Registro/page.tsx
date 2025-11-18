'use client';

import Image from "next/image";
import Link from "next/link";
import insta from "../assets/instagram.png";
import face from "../assets/facebook.png";
import x from "../assets/twitter.png";
import { ContainerBody, ContainerMain } from "./styled";
import { useState } from "react";
import { useJogos } from "@/context/AuthJogo";
import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Registro() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");

  const { registerJogo } = useJogos();
  const router = useRouter();

  async function handleRegistroJogo(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !description || !url || !dataLancamento) {
      console.log("Preencha todos os campos.");
      return;
    }

    const sucesso = await registerJogo({
      NomeDoJogo: name,
      Descricao: description,
      URL: url,
      DataLancamento: new Date(dataLancamento),
    });

    if (sucesso) {
      console.log("Jogo cadastrado!");
      setName("");
      setDescription("");
      setURL("");
      setDataLancamento("");

      router.push("/historico");
    } else {
      console.log("Erro ao cadastrar jogo.");
    }
  }

  return (
    <ContainerBody>
      <Header/>
      <ContainerMain>
        <section>
          <Link href="/registro">
            <button>Novo Registro</button>
          </Link>
          <Link href="/historico" style={{ color: 'white', textDecoration: 'none' }}>
            <button>Histórico</button>
          </Link>
        </section>

        <form onSubmit={handleRegistroJogo}>
          <input type="text" placeholder="Nome do Jogo" style={{ color: 'black' }} required onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Descrição" style={{ color: 'black' }} required onChange={(e) => setDescription(e.target.value)} />
          <input type="text" placeholder="URL da Imagem" style={{ color: 'black' }} required onChange={(e) => setURL(e.target.value)} />
          <input type="date" placeholder="Data de Lançamento" style={{ color: 'black' }} required onChange={(e) => setDataLancamento(e.target.value)} />
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

      <Footer/>
    </ContainerBody>
  );
}
