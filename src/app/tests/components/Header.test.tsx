import { render, screen } from '@testing-library/react';
import {Header} from '../../components/Header/index'
import { AuthProvider } from '@/context/AuthContext';

describe('Header', () => {
  it('deve renderizar os links e a logo', () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );

    expect(screen.getByText(/Principal/i)).toBeInTheDocument();
    expect(screen.getByText(/Jogos/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Logo/i)).toBeInTheDocument();
  });
});

