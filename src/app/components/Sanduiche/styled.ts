import styled from "styled-components";

export const Hamburger = styled.button<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 36px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  // spans do ícone
  span {
    width: 100%;
    height: 3px;
    background-color: black;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.2s ease, background-color 0.3s ease;
  }

  // transforma em X
  span:nth-child(1) {
    transform: ${({ $open }) => ($open ? "translateY(9px) rotate(45deg)" : "none")};
  }

  span:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  span:nth-child(3) {
    transform: ${({ $open }) => ($open ? "translateY(-9px) rotate(-45deg)" : "none")};
  }

  // ajuste de cor no hover
  &:hover span {
    background-color: #ff9e48;
  }
`;

export const MenuDropdown = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 60px;              /* ajusta conforme altura do header */
  right: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  padding: 10px;
  min-width: 180px;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-8px)")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 1000;

  ul {
    list-style: none;
    margin: 0;
    padding: 6px 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  li {
    width: 100%;
  }

  button {
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 10px 12px;
    border-radius: 8px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f7f7f7;
    }

    &.logout {
      color: #e03131;
      font-weight: 600;

      &:hover {
        background-color: #ffe9e9;
      }
    }
  }
`;

export const MenuOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.15);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.2s ease;
  z-index: 900;
`;
