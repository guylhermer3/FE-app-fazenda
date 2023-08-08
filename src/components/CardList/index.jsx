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
            <Card
                imagem="/vaca.png"
                titulo="Vaca"
                texto="Lorem ipsum"
                produto="vaca" />
            <Card
                imagem="/.png"
                titulo=""
                texto="Lorem ipsum"
                produto="" />   
        </div>
    )
}