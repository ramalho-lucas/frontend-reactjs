import styles from "./styles.module.css"

function Card2(props){
    const { usuario } = props;


    return (
        <li className={ usuario.ativo ? styles.rowGreen : styles.rowRed}>
        <h3>{usuario.name}</h3>
        <h3>{usuario.turma}</h3>
      </li>
    );
}

export default Card2;