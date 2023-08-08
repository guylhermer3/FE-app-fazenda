import styles from "./styles.module.css";
import Card from "../Card";

export default function CardList() {

    return(
        <div className={styles.cardList}>
            <Card
                imagem="/tomate.png"
                titulo="Tomate"
                texto="Lorem ipsum"
                produto="tomate" />
            <Card
                imagem="/galinha.png"
                titulo="Galinha"
                texto="Lorem ipsum"
                produto="galinha" />   
        </div>
    )
}