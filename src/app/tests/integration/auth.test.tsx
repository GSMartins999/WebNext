import { renderHook, act } from '@testing-library/react';
import { JogoProvider, useJogos } from '@/context/AuthJogo';
import { makeJogoUseCase } from '@/core/factories/makeJogo';

jest.mock('@/core/factories/makeJogo');

describe('AuthJogo Context', () => {
  it('deve listar jogos corretamente', async () => {
    const mockListJogos = {
      execute: jest.fn().mockResolvedValue([
        {
          IDJogo: 1,
          NomeDoJogo: { value: 'Cyberpunk 2077' },
          Descricao: { value: 'RPG futurista em mundo aberto' },
          URL: { value: 'https://image.api.playstation.com/cyberpunk.jpg' },
          DataLancamento: { value: '2021-01-01T00:00:00.000Z' },
        },
      ]),
    };

    (makeJogoUseCase as jest.Mock).mockReturnValue({
      registerJogo: { execute: jest.fn() },
      editJogo: { execute: jest.fn() },
      removeJogo: { execute: jest.fn() },
      listJogos: mockListJogos,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <JogoProvider>{children}</JogoProvider>
    );

    const { result } = renderHook(() => useJogos(), { wrapper });

    await act(async () => {
      await result.current.listJogos();
    });

    expect(result.current.jogos[0].NomeDoJogo.value).toBe('Cyberpunk 2077');
  });

  it('deve registrar um jogo corretamente', async () => {
    const mockRegister = { execute: jest.fn().mockResolvedValue(true) };
    const mockListJogos = { execute: jest.fn().mockResolvedValue([]) };

    (makeJogoUseCase as jest.Mock).mockReturnValue({
      registerJogo: mockRegister,
      editJogo: { execute: jest.fn() },
      removeJogo: { execute: jest.fn() },
      listJogos: mockListJogos,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <JogoProvider>{children}</JogoProvider>
    );

    const { result } = renderHook(() => useJogos(), { wrapper });

    let sucesso = false;
    await act(async () => {
      sucesso = await result.current.registerJogo({
        NomeDoJogo: 'Cyberpunk 2077',
        Descricao: 'RPG futurista',
        URL: 'https://image.api.playstation.com/cyberpunk.jpg',
        DataLancamento: new Date('2021-01-01'),
      });
    });

    expect(sucesso).toBe(true);
    expect(mockRegister.execute).toHaveBeenCalled();
  });

  it('deve editar um jogo corretamente', async () => {
    const mockEdit = { execute: jest.fn().mockResolvedValue(true) };
    const mockListJogos = { execute: jest.fn().mockResolvedValue([]) };

    (makeJogoUseCase as jest.Mock).mockReturnValue({
      registerJogo: { execute: jest.fn() },
      editJogo: mockEdit,
      removeJogo: { execute: jest.fn() },
      listJogos: mockListJogos,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <JogoProvider>{children}</JogoProvider>
    );

    const { result } = renderHook(() => useJogos(), { wrapper });

    let sucesso = false;
    await act(async () => {
      sucesso = await result.current.editJogo({
        IDJogo: 1,
        NomeDoJogo: 'Cyberpunk 2077 Editado',
      });
    });

    expect(sucesso).toBe(true);
    expect(mockEdit.execute).toHaveBeenCalledWith({
      IDJogo: 1,
      NomeDoJogo: 'Cyberpunk 2077 Editado',
    });
  });

  it('deve remover um jogo corretamente', async () => {
    const mockRemove = { execute: jest.fn().mockResolvedValue(true) };
    const mockListJogos = { execute: jest.fn().mockResolvedValue([]) };

    (makeJogoUseCase as jest.Mock).mockReturnValue({
      registerJogo: { execute: jest.fn() },
      editJogo: { execute: jest.fn() },
      removeJogo: mockRemove,
      listJogos: mockListJogos,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <JogoProvider>{children}</JogoProvider>
    );

    const { result } = renderHook(() => useJogos(), { wrapper });

    let sucesso = false;
    await act(async () => {
      sucesso = await result.current.removeJogo(1);
    });

    expect(sucesso).toBe(true);
    expect(mockRemove.execute).toHaveBeenCalledWith(1);
  });
});
