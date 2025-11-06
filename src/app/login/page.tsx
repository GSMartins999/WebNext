'use-client'

import Image from 'next/image'
import logo from "../assets/logo.png"
import { ContainerBody, ContainerMain } from "./style";
import Link from 'next/link';

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
                            <p><Link href="/Cadastro">Não possui conta? Cadastre AQUI!</Link></p>
                            <button type="submit"><Link href="/inicial"  style={{textDecoration: 'none'}}>Entrar</Link></button>
                        </form>
                </ContainerMain>
            </ContainerBody>
    );
}