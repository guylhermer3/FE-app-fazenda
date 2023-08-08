import styles from "./styles.module.css";
import Link from "next/link";

export default function Card({ imagem, titulo, texto, produto }) {

    return(
        <section className={styles.card}>
            <img 
                src={imagem} 
                alt={`Imagem de ${titulo}`} 
                className={styles.image} />
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.texto}>{texto}</p>
            <Link href={`/produto/${produto}`} className={styles.botao}>
                Saiba mais
            </Link>
        </section>
    )
}