import { render, screen, fireEvent } from '@testing-library/react';
import Registro from '@/app/Registro/page';
import { AuthProvider } from '@/context/AuthContext';
import { JogoProvider } from '@/context/AuthJogo';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

describe('Registro', () => {
  it('deve renderizar os campos e cadastrar um jogo', async () => {
    render(
      <AuthProvider>
        <JogoProvider>
          <Registro />
        </JogoProvider>
      </AuthProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Nome do Jogo/i), { target: { value: 'Cyberpunk 2077' } });
    fireEvent.change(screen.getByPlaceholderText(/Descrição/i), { target: { value: 'RPG futurista' } });
    fireEvent.change(screen.getByPlaceholderText(/URL da Imagem/i), { target: { value: 'https://image.jpg' } });
    fireEvent.change(screen.getByPlaceholderText(/Data de Lançamento/i), { target: { value: '2021-01-01' } });

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

  });
});
