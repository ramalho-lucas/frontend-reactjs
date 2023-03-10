import styles from "./styles.module.css"


function Card(props){
    const { title = "Usuario não passou"} = props;


    return (
        <div className={styles.container}>
            <h1>{title}</h1>
        </div>
    );
}

export default Card;