import { Jogo } from "../entities/Jogo";
import { JogoRecord } from "../repositories/JogoRepository";
import { NomeDoJogo } from "../value-objects/NomeDoJogo";
import { Descricao } from "../value-objects/Descricao";
import { URL } from "../value-objects/URL";
import { DataLancamento } from "../value-objects/DataLancamento";

export class RegisterJogo {
  constructor(private readonly jogoRepository: JogoRecord) {}

  async execute(params: {
    NomeDoJogo: string;
    Descricao: string;
    URL: string;
    DataLancamento: Date;
  }): Promise<Jogo> {
    const { NomeDoJogo: nome, Descricao: desc, URL: url, DataLancamento: data } = params;

    const jogo = Jogo.create(
      Math.floor(Math.random() * 100000),
      NomeDoJogo.create(nome),
      Descricao.create(desc),
      URL.create(url),
      DataLancamento.create(data)
    );

    await this.jogoRepository.save(jogo);

    return jogo;
  }
}
