 

import { ContainerFooter } from "./styled";
import logobranca from "./../../assets/logobranca.png"
import Image from "next/image";

export function Footer() {
    return (
                 <ContainerFooter>
                <span></span>
                <p>© Game Catalog</p>
                <Image src={logobranca} alt="Logo Game Catalog" />
            </ContainerFooter>

    )
}