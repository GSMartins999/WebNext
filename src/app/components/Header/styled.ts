

'use client'

import styled from "styled-components"

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
  }

  section p > a:hover {
    color: #ff9e48;
  }

  section img {
    height: 5rem;
    width: auto;
  }

  section section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  section section span {
    background-color: black;
    width: 25px;
    height: 3px;
    border-radius: 2px;
  }

  @media (max-width: 760px) {
    section p {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;

    section {
      justify-content: center;
      gap: 10px;
    }
  }

  @media (max-width: 480px) {
    section img {
      height: 50px;
    }
  }

  @media (max-width: 350px) {
    section img {
      display: none;
    }
  }
`;
