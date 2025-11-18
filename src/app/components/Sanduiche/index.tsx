'use client';

import { useState } from 'react';
import { Hamburger, MenuDropdown, MenuOverlay } from './styled';
import { useAuth } from '@/context/AuthContext';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      <Hamburger
        $open={open}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      >
        <span />
        <span />
        <span />
      </Hamburger>

      <MenuDropdown $open={open}>
        <ul>
          <li>
            <button className="logout" onClick={logout}>Logout</button>
          </li>
        </ul>
      </MenuDropdown>

      <MenuOverlay $open={open} onClick={() => setOpen(false)} />
    </>
  );
}
