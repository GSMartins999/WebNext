"use client";

import styled from "styled-components";
import fundoLogin from "../assets/fundoLogin.png";
import rodape from "../assets/rodape.png";

export const ContainerBody = styled.div`
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
        min-width: 200px;
        font-weight: 600;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  form {
    width: 90%;
    max-width: 900px;
    padding: 30px;
    border-radius: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    background-image: url(${fundoLogin.src});
    background-repeat: repeat;
    background-size: cover;
    box-sizing: border-box;
    margin-top: 50px;

    input {
        width: 100%;
        padding: 15px 10px;
        border-radius: 10px;
        font-size: 1rem;
        background-color: white;
        
    }

    button {
        grid-column: span 2;
        background-color: #FF9E48;
        color: white;
        padding: 15px 0;
        font-size: 1.2rem;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 20px;
        transition: transform 0.2s;
        text-decoration: none;
        margin: 0 auto;
        width: 50%;

      &:hover {
        background-color: #ffa85f;
        transform: translateY(-3px);
      }
    }
  }

  article section {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 25px;

    section img {
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

  @media (max-width: 1024px) {
    form {
      grid-template-columns: 1fr;
      gap: 20px;

      button {
        grid-column: 1;
        width: 60%;
      }
    }
  }

  @media (max-width: 768px) {
    > section {
      flex-direction: column;
      gap: 20px;
    }

    form {
      padding: 30px 20px;
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
