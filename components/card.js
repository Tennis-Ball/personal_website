import styles from './card.module.css'
export default function Card(props){
    return (
        <div className={`neutral ${styles.card}`}>{props.children}</div>
    )
}