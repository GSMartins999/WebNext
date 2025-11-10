"use client";

import styled from "styled-components";
import fundo from '../assets/fundoLogin.png'

export const ContainerBody = styled.body`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  background-image: url(${fundo.src});
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
  }

  form input {
      background-color: white;
      border-radius: 10px;
      border: 1px solid #ccc;
      padding: 10px;
      color: black;
      width: 100%;
      font-size: 1rem;
  }

  form p {
      margin: 0;
      font-size: 1rem;
      text-align: left;
  }

  form p a {
      color: black;
      text-decoration: none;
      transition: 0.2s;
  }

  form p a:hover {
      color: #FF9E48;
  }

  button {
      background-color: #FF9E48;
      border: solid black 2px;
      padding: 10px;
      width: 60%;
      max-width: 250px;
      border-radius: 10px;
      color: #FFFFFF;
      font-size: 1.1rem;
      cursor: pointer;
      margin: 10px auto 0;
      transition: 0.3s;
  }

  button:hover {
      background-color: #ff7f00;
  }

  button a {
      text-decoration: none;
      color: white;
      font-size: 1.1rem;
  }

  button a:hover {
      color: red;
  }
`;
