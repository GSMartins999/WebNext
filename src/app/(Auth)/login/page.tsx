'use client'

import Image from 'next/image'
import logo from "../assets/logo.png"
import { ContainerBody, ContainerMain } from "./style";
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { useRouter } from "next/navigation"


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()
    const router = useRouter()
    
    const handleLogin = async () => {
            try {
            const success = await login(email, password)
            if (success) {
                console.log("Login realizado!")
                router.push("/")
            } else {
                console.log("Credenciais inválidas. Tente novamente.")
            }
            } catch (error) {
            console.log(String(error))
            }
        }
    
    return (
          <ContainerBody>
                    <ContainerMain>
                        <Image src={logo} alt="logo"/>
                        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                            <p>Email:</p>
                            <input  id="email"
                                type="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                            <p>Senha:</p>
                            <input id="password"
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            <p onClick={() => router.push("/Cadastro")}>Não possui conta? Cadastre AQUI!</p>
                            <button type="submit" style={{textDecoration: 'none'}} onClick={handleLogin}>Entrar</button>
                        </form>
                </ContainerMain>
            </ContainerBody>
    );
}