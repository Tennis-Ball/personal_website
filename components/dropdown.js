import styles from "./dropdown.module.css"
import {useState, useEffect} from "react"

export default function Dropdown(props){
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`${isOpen ? 'accent' : 'neutral'} ${styles.container}`}>
            <div className={styles.bar}>
                <h2>{props.title}</h2>
                <button className={`neutral ${isOpen ? styles.rotate : ""}`} onClick={()=>{setIsOpen(!isOpen)}}> + </button>
            </div>
            
        </div>
    )
}