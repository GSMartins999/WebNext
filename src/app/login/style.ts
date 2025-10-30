"use client";

import styled from "styled-components";
import fundo from '../assets/fundoLogin.png'

export const ContainerBody = styled.body`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

export const ContainerMain = styled.main`
  background-color: #ffffff;
  width: 50%;
  max-width: 500px;
  min-width: 280px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    input {
      background-color: white;
      border-radius: 10px;
      border: 1px solid #ccc;
      padding: 10px;
      color: black;
      width: 100%;
      font-size: 1rem;
    }
    p {
      margin: 0;
      font-size: 1rem;
      text-align: left;
    }
    a {
      color: black;
      text-decoration: none;
      transition: 0.2s;
    }
    a:hover {
      color: #ff9e48;
    }
  }
`;
