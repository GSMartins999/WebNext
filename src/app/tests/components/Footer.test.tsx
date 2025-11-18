import { render, screen } from '@testing-library/react';
import {Footer}  from '../../components/Footer/index';

describe('Footer', () => {
  it('deve renderizar o texto e a logo', () => {
    render(<Footer />);

    expect(screen.getByText(/© Game Catalog/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Logo Game Catalog/i)).toBeInTheDocument();
  });
});
