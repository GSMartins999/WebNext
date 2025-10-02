
import { ContainerBody, ContainerMain } from "./style";


export default function Login(){
    return(
        <>
            <ContainerBody>
                <ContainerMain>
                    <ContainerMain action="">
                        <ContainerMain>Email:</ContainerMain>
                        <ContainerMain type="email" placeholder="example@email.com">
                        <ContainerMain>Senha:</ContainerMain>
                        <ContainerMain type="password" placeholder="password">
                        <ContainerMain><a href="./Cadastro.html">Não possui conta? Cadastre AQUI!</a></p>
                        <ContainerMain type="submit"><a href="./inicial.html" style="text-decoration: none;">Entrar</a></button>
                    </ContainerMain>
                </ContainerMain>
            </ContainerBody>
        </>
    )
}