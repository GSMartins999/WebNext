import { JogoRecord } from "../repositories/JogoRepository";

export class RemoveJogo {
  constructor(private readonly jogoRepository: JogoRecord) {}

  async execute(IDJogo: number): Promise<void> {
    const jogo = await this.jogoRepository.findById(IDJogo);

    if (!jogo) {
      return;
    }

    await this.jogoRepository.delete(IDJogo);
  }
}