"use client";

import styled from "styled-components";
import rodape from "../../assets/rodape.png";


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
