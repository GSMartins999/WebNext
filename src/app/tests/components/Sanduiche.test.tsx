import { render, screen, fireEvent } from '@testing-library/react';
import HamburgerMenu from '@/app/components/Sanduiche';
import { AuthProvider } from '@/context/AuthContext';

describe('HamburgerMenu', () => {
  it('deve chamar logout ao clicar em Logout', () => {
    render(
      <AuthProvider>
        <HamburgerMenu />
      </AuthProvider>
    );

    fireEvent.click(screen.getByLabelText(/Abrir menu/i));
    fireEvent.click(screen.getByText(/Logout/i));

  });
});
