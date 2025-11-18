'use client'

import Image from 'next/image'
import logo from "../../assets/logo.png"
import { ContainerBody, ContainerMain } from "./style";
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { useRouter } from "next/navigation"

export default function Cadastro() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register } = useAuth()
  const router = useRouter()

  const handleRegister = async () => {
    if (!email || !password) {
      console.log("All fields are required.")
      return
    }
    try {
      const success = await register(email, password)
      if (success) {
        console.log("Registration complete!")
        router.push("/login")
      } else {
        console.log("This email address is already in use.")
      }
    } catch (error) {
      console.log(error)
      console.log(String(error))
    }
  }


  return (
    <ContainerBody>
      <ContainerMain>
        <Image src={logo} alt="logo" />
        <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
          <p>Email:</p>
          <input id="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Senha:</p>
          <input id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p onClick={() => router.push("/login")}>Já possui conta? Entre AQUI!</p>
          <button >Entrar</button>
        </form>
      </ContainerMain>
    </ContainerBody>
  );
}