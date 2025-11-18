import { Jogo } from "../../domain/entities/Jogo";
import { JogoRecord } from "../repositories/JogoRepository";

export class ListJogos {
  constructor(private readonly jogoRepository: JogoRecord) {}

  async execute(): Promise<Jogo[]> {
    return await this.jogoRepository.findAll();
  }
}