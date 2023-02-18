import img from '../../images/illustration-thank-you.svg';
import styles from './finalComponent.module.css';
export default function FinalComponent(props){
    const activeComponent = props.activeComponent;
    if(activeComponent !== null && props.submited){
        return(
            <div className={styles["final-screen"]}>
                <img src={img} alt=""/>
                <p className={styles["final-score"]}>You selected {props.activeComponent} out of 5</p>
                <div>
                    <h3 className={styles.heading}>Thank you!</h3>
                    <p className={styles.paragraph}>We appreciate you taking the time to give a rating.
                        If you ever need more support, don't hesitate to get in touch!</p>
                </div>
            </div>
        )
    }
}
