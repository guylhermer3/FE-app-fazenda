import styles from "./styles.module.css";
import Card from "../Card";

export default function CardList() {

    return(
        <div className={styles.cardList}>
            <Card
                imagem="/uva.png"
                titulo="Uva"
                texto="Lorem ipsum"
                produto="uva" />
            <Card
                imagem="/vaca.png"
                titulo="Vaca"
                texto="Lorem ipsum"
                produto="vaca" />
            <Card
                imagem="/laranja.png"
                titulo="Laranja"
                texto="Lorem ipsum"
                produto="laranja" />
            <Card
                imagem="/ovelha.png"
                titulo="Ovelha"
                texto="Lorem ipsum"
                produto="ovelha" />
            <Card
                imagem="/galinha.png"
                titulo="Galinha"
                texto="Lorem ipsum"
                produto="galinha" />
            <Card
                imagem="/tomate.png"
                titulo="Tomate"
                texto="Lorem ipsum"
                produto="tomate" />                     
            <Card
                imagem="/hortifruti.png"
                titulo="Hortifruti"
                texto="Lorem ipsum"
                produto="hortifruti" />                              
        </div>
    )
}