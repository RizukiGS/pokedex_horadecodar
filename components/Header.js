import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Header.module.css"

export default function Header() {

    return(
        <header>
            <nav className = {styles.header}>
                <div className={styles.logo}>
                    <Image src = "/images/pokeball.png" width="30" height="30" alt="pokeeball"/>
                    <h1>PokeNext</h1>
                </div>
                <ul className={styles.link_items}>
                   <li>
                        <Link href= "/" >
                            Home
                        </Link>
                    </li> 
                    <li>
                        <Link href= "/about" >
                            Sobre
                        </Link>
                    </li> 
                </ul>
            </nav>
        </header>
    )
}