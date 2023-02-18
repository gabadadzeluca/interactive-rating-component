import styles from './circle.module.css';

export default function Circle(props){
    const active = props.isActive ? styles.active : '';
    return(
        <div className={active} id={props.num} onClick={props.onClick}>{props.num}</div>
    )
}