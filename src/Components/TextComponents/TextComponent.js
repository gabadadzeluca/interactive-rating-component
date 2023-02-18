import star from '../../images/icon-star.svg';
import styles from './text.module.css'
export default function TextComponent(props){
    return(
        <div className={styles['question-div']}>
            <img src={star} alt="start" />
            <h3>{props.question}</h3>
            <p>{props.paragraph}</p>
        </div>
    );
}