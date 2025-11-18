"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { makeJogoUseCase } from "@/core/factories/makeJogo";
import { Jogo } from "@/core/domain/entities/Jogo";

interface JogoContextType {
  jogos: Jogo[];
  registerJogo: (data: {
    NomeDoJogo: string;
    Descricao: string;
    URL: string;
    DataLancamento: Date;
  }) => Promise<boolean>;
  editJogo: (data: {
    IDJogo: number;
    NomeDoJogo?: string;
    Descricao?: string;
    URL?: string;
    DataLancamento?: Date;
  }) => Promise<boolean>;
  removeJogo: (IDJogo: number) => Promise<boolean>;
  listJogos: () => Promise<void>;
}

const JogoContext = createContext<JogoContextType | undefined>(undefined);

export function JogoProvider({ children }: { children: ReactNode }) {
  const [jogos, setJogos] = useState<Jogo[]>([]);

  const { registerJogo, editJogo, removeJogo, listJogos: listJogosUC } = makeJogoUseCase();

  useEffect(() => {
    listJogos();
  }, []);

  async function listJogos() {
    const lista = await listJogosUC.execute();
    setJogos(lista);
  }

  async function handleRegister(data: {
    NomeDoJogo: string;
    Descricao: string;
    URL: string;
    DataLancamento: Date;
  }) {
    try {
      await registerJogo.execute(data);
      await listJogos();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async function handleEdit(data: {
    IDJogo: number;
    NomeDoJogo?: string;
    Descricao?: string;
    URL?: string;
    DataLancamento?: Date;
  }) {
    try {
      await editJogo.execute(data);
      await listJogos();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async function handleRemove(IDJogo: number) {
    try {
      await removeJogo.execute(IDJogo);
      await listJogos();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  return (
    <JogoContext.Provider
      value={{
        jogos,
        registerJogo: handleRegister,
        editJogo: handleEdit,
        removeJogo: handleRemove,
        listJogos,
      }}
    >
      {children}
    </JogoContext.Provider>
  );
}

export function useJogos() {
  const context = useContext(JogoContext);

  if (!context) {
    throw new Error("useJogos deve ser usado dentro de <JogoProvider>");
  }

  return context;
}
