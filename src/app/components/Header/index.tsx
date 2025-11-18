import {ContainerHeader} from "./styled";
import Image from "next/image";
import Link from "next/link";
import Logo from "./../../assets/logo.png"
import HamburgerMenu from "../Sanduiche";

export function Header() {
    return (
        <ContainerHeader>
        <section>
          <p>
            <Link href="/inicial">Principal</Link>
          </p>
          <p>
            <Link href="/Registro">Jogos</Link>
          </p>
        </section>

        <section>
          <Image src={Logo} alt="Logo" width={150} height={80} />
        </section>

        <section>
          <section>
            <HamburgerMenu />
          </section>
        </section>
      </ContainerHeader>
    )
}