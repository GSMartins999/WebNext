'use client';

import Link from "next/link";
import { ContainerBody, ContainerFooter, ContainerHeader, ContainerMain, ModalContent, ModalOverlay } from "./styled";
import { useJogos } from "@/context/AuthJogo";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Historico() {
  const { jogos, removeJogo, editJogo } = useJogos();
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    IDJogo: 0,
    NomeDoJogo: "",
    Descricao: "",
    URL: "",
    DataLancamento: "",
  });


  function formatDateToInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function openModal(jogo: any) {
    const dataFormatada = formatDateToInput(new Date(jogo.DataLancamento.value));

    setEditData({
      IDJogo: jogo.IDJogo,
      NomeDoJogo: jogo.NomeDoJogo.value,
      Descricao: jogo.Descricao.value,
      URL: jogo.URL.value,
      DataLancamento: dataFormatada,
    });

    setModalOpen(true);
  }


  async function handleEdit(e: React.FormEvent) {
    e.preventDefault();
    await editJogo({
      IDJogo: editData.IDJogo,
      NomeDoJogo: editData.NomeDoJogo,
      Descricao: editData.Descricao,
      URL: editData.URL,
      DataLancamento: new Date(editData.DataLancamento),
    });
    setModalOpen(false);
  }

  async function handleDelete(id: number) {
    await removeJogo(id);
  }

  return (
    <ContainerBody>
      <Header/>

      <ContainerMain>
        <section>
          <Link href="/registro"><button>Novo Registro</button></Link>
          <Link href="/historico"><button>Histórico</button></Link>
        </section>

        <section className="container">
          {jogos.map(jogo => (
            <section key={jogo.IDJogo}>
              <section>
                <img src={jogo.URL.value} alt={jogo.NomeDoJogo.value} width={200} height={120} style={{ objectFit: "cover" }} />
              </section>
              <section>
                <section>
                  <p><b>{jogo.NomeDoJogo.value}</b></p>
                  <p>{new Date(jogo.DataLancamento.value).toLocaleDateString()}</p>
                </section>
                <p>{jogo.Descricao.value}</p>
              </section>
              <section className="botao">
                <button onClick={() => openModal(jogo)}>Editar</button>
                <button style={{ backgroundColor: "red" }} onClick={() => handleDelete(jogo.IDJogo)}>Excluir</button>
              </section>
            </section>
          ))}
        </section>

        {modalOpen && (
          <ModalOverlay>
            <ModalContent>
              <img src={editData.URL} alt={editData.NomeDoJogo} />
              <form onSubmit={handleEdit}>
                <input type="text" value={editData.NomeDoJogo} onChange={(e) => setEditData({ ...editData, NomeDoJogo: e.target.value })} />
                <input type="text" value={editData.Descricao} onChange={(e) => setEditData({ ...editData, Descricao: e.target.value })} />
                <input type="text" value={editData.URL} onChange={(e) => setEditData({ ...editData, URL: e.target.value })} />
                <input type="date" value={editData.DataLancamento} onChange={(e) => setEditData({ ...editData, DataLancamento: e.target.value })} />
                <button type="submit">Salvar</button>
                <button type="button" className="cancelar" onClick={() => setModalOpen(false)}>Cancelar</button>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}
      </ContainerMain>

      <Footer/>
    </ContainerBody>
  );
}
