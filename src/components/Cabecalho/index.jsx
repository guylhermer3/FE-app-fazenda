import styles from "./styles.module.css";

export default function Cabecalho() {

    return(
        <header>
                <div className={styles.container}>
                <img className={styles.imagem} src="/milharal.png" alt="Um milharal" />
                <h1 className={styles.titulo}>Fazenda Orgânica</h1>
                </div>
        </header>
    );
}