'use-client'

import Image from 'next/image'
import logo from "../assets/logo.png"
import { ContainerBody, ContainerMain } from "./style";
import Link from 'next/link';

export default function Cadastro() {

    return (
          <ContainerBody>
                    <ContainerMain>
                        <Image src={logo} alt="logo"/>
                        <form action="">
                            <p>Email:</p>
                            <input type="email" placeholder="example@email.com"/>
                            <p>Senha:</p>
                            <input type="password" placeholder="password"/>
                            <p><Link href="./login">Não possui conta? Cadastre AQUI!</Link></p>
                            <button type="submit"><Link href="./inicial.html"  style={{textDecoration: 'none'}}>Entrar</Link></button>
                        </form>
                </ContainerMain>
            </ContainerBody>
    );
}