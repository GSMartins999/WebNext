'use-client'

import Image from 'next/image'
import logo from "../assets/logo.png"
import { ContainerBody, ContainerMain } from "./style";


export default function Login() {
    return (
          <ContainerBody>
                    <ContainerMain>
                        <Image src={logo} alt="logo"/>
                        <form action="">
                            <p>Email:</p>
                            <input type="email" placeholder="example@email.com"/>
                            <p>Senha:</p>
                            <input type="password" placeholder="password"/>
                            <p><a href="./Cadastro.html">Não possui conta? Cadastre AQUI!</a></p>
                            <button type="submit"><a href="./inicial.html"  style={{textDecoration: 'none'}}>Entrar</a></button>
                        </form>
                </ContainerMain>
            </ContainerBody>
    );
}