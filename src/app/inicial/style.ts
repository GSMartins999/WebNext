'use client'

import styled from "styled-components"

export const ContainerBody = styled.body`
    font-family: Arial, sans-serif;
    padding: 0;
    margin: 0;
    background-color: #fff;
`

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

    section p>a {
        text-decoration: none;
        color: black;
        font-size: 1rem;
        font-weight: 500;
    }

    section p>a:hover {
        color: #FF9E48;
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

`

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const ContainerFooter = styled.footer`
    background-image: url("./../img/rodape.png");
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
`