'use client'

import styled from "styled-components"
import rodape from "./../assets/rodape.png"

export const ContainerBody = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  font-family: Arial, sans-serif;
  background-color: #fff;
  color: black;
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

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 100%;
      border-radius: 10px;
    }

    article {
      width: 60%;
      margin: 100px 0;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 30px;

      p {
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: left;
        width: 80%;
      }

      aside {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        img {
          width: 280px;
          height: auto;
        }
      }
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 100%;
    max-width: 1200px;

    section {
      background-color: #333030;
      border-radius: 20px;
      padding: 15px;
      width: 300px;
      transition: 0.3s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 15px;
        border: solid black 1px;
      }

      article {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
      }

      article p,
      > p {
        color: white;
        font-size: 1rem;
        margin-top: 8px;
      }
    }
  }

  article {
    margin-top: 60px;
    text-align: center;

    p {
      max-width: 600px;
      margin: 0 auto;
      font-size: 0.95rem;
      line-height: 1.4;
    }

    section img {
      width: 120px;
      margin-bottom: 15px;
      margin: 0 auto;
    }

    section section {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 15px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .cards {
      gap: 20px;

      section {
        width: 45%;
      }
    }

    .container article {
      flex-direction: column;
      width: 90%;
    }

    .container article p {
      width: 100%;
      text-align: justify;
    }

    .container article aside {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .cards section {
      width: 80%;
    }

    article p {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    .cards section {
      width: 95%;
    }
  }
`;

export const ContainerFooter = styled.footer`
  background-image: url(${rodape.src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  color: white;
  position: relative;
  margin-top: 50px;

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 14px;
    text-align: center;
  }

  img {
    height: 40px;
    width: auto;
  }

  @media (max-width: 350px) {
    img {
      display: none;
    }
  }
`;