"use client";

import styled from "styled-components";
import fundoLogin from "../assets/fundoLogin.png";
import rodape from "../assets/rodape.png";

export const ContainerBody = styled.body`
  font-family: Arial, sans-serif;
  padding: 0;
  margin: 0;
  background-color: #fff;
  box-sizing: border-box;
`;

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #fff;
  border-bottom: 1px solid #ddd;

  section {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  section p > a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      color: #ff9e48;
    }
  }

  section section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    cursor: pointer;

    span {
      background-color: black;
      width: 25px;
      height: 3px;
      border-radius: 2px;
    }
  }

  section img {
    width: 150px;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;

    section p {
      display: none;
    }
  }
`;

export const ContainerMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  box-sizing: border-box;

  > section {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    a {
      text-decoration: none;
      color: white;

      button {
        background-color: #ff9e48;
        color: white;
        padding: 0.9rem 2.2rem;
        font-size: 1rem;
        border: none;
        border-radius: 40px;
        cursor: pointer;
        transition: 0.3s;
        font-weight: 600;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  .container {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > section {
      width: 100%;
      display: flex;
      flex-direction: row;
      background-color: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      padding: 20px;
      gap: 20px;
      align-items: center;
      flex-wrap: wrap;
      height: auto;

      > section {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          object-fit: cover;
        }

        > section {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;

          > section {
            display: flex;
            justify-content: space-between;
            width: 100%;
            flex-direction: row;

            p {
              font-size: 1.1rem;
              color: #333;
            }
          }

          > p {
            font-size: 1rem;
            color: #444;
            margin-top: 10px;
          }
        }
      }
    }
  }

  .botao {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

    button {
      background-color: #ff9e48;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      width: 100%;
      max-width: 200px;
      padding: 0.8rem 1rem;
      font-size: 1rem;
      border: none;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      &.excluir {
        background-color: red;
      }
    }
  }

  article section {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 25px;

    img {
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.1);
        filter: brightness(1.2);
      }
    }
  }

  @media (max-width: 1200px) {
    .container > section {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .container > section > section {
      width: 80%;
    }

    .botao {
      width: 60%;
    }
  }

  @media (max-width: 1024px) {
    .container > section > section img {
      max-width: 400px;
    }
  }

  @media (max-width: 768px) {
    > section {
      flex-direction: column;
      gap: 20px;
    }

    .container > section > section {
      width: 100%;
    }

    .botao {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    .container > section {
      padding: 15px;
      gap: 15px;
    }

    .botao button {
      width: 100%;
    }
  }

  @media (max-width: 350px) {
    .botao {
      width: 100%;
    }
  }
`;

export const ContainerFooter = styled.footer`
  position: relative;
  background-image: url(${rodape.src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  margin-top: 50px;
  box-sizing: border-box;
  color: white;

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 14px;
  }

  img {
    height: 5vw;
    width: auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: auto;
    padding: 20px;
    gap: 10px;

    img {
      display: none;
    }
  }
`;
