import styles from "./styles.module.css"

export default function Cabecalho(){

    return(
        <header>

            <h1 className={styles.titulo}>App de transporte</h1>
            <img src="/milharal.png"
                 alt="Um milharal" />
        
        </header>
    )
}