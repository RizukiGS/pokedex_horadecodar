import Image from "next/image";

import styles from '../styles/About.module.css'

export default function about(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio architecto deleniti quas laudantium veniam explicabo aut tempora eius, quaerat id beatae vero autem voluptatum aliquid cum, mollitia perferendis recusandae!</p>
            <Image src="/images/charizard.png" width={300}
            height={300}
            alt = "Charizard" />
        </div>
    )
}