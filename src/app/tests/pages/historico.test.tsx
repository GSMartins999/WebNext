import { render, screen } from '@testing-library/react';
import Historico from '@/app/historico/page';
import { JogoProvider } from '@/context/AuthJogo';
import { AuthProvider } from '@/context/AuthContext';

describe('Historico', () => {
  it('deve renderizar os jogos corretamente', () => {
    render(
      <AuthProvider>
        <JogoProvider>
          <Historico />
        </JogoProvider>
      </AuthProvider>
    );

    expect(screen.getByText(/Histórico/i)).toBeInTheDocument();
  });
});
