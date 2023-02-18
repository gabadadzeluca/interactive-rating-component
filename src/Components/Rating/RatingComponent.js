import Circle from '../CircleComponent/Circle';
import styles from './rating.module.css';

export default function RatingComponent(props){
    let numArray = [1,2,3,4,5];
    return(
        <div>
            <div className={styles["rating-div"]}>
                {
                    numArray.map(num=>{
                        return <Circle num={num} isActive={props.activeComponent === num} onClick={()=> props.onComponentClick(num)}/>
                    })
                }
            </div>
            <button className={styles.btn} onClick={props.onSubmit}>SUBMIT</button>
        </div>
    );
}


