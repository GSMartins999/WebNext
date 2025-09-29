export default function login(){
    return(
        <>
            <body>
                <img src="./img/logo.png" alt="logo" class="logo"/>
                <main>
                    <form action="">
                        <p>Email:</p>
                        <input type="email" placeholder="example@email.com">
                        <p>Senha:</p>
                        <input type="password" placeholder="password">
                        <p><a href="./Cadastro.html">Não possui conta? Cadastre AQUI!</a></p>
                        <button type="submit"><a href="./inicial.html" style="text-decoration: none;">Entrar</a></button>
                    </form>
                </main>
            </body>
        </>
    )
}