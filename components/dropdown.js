import styles from "./dropdown.module.css"
import {useState, useEffect, useRef} from "react"

export default function Dropdown(props){
    const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const content = useRef()
    useEffect(()=>{
        setContentHeight(content.current.offsetHeight + 16)
        setIsLoaded(true)
    },[])
    return (
        <div className={`${isOpen ? 'accent' : 'neutral'} ${styles.container}`}>
            <div className={styles.bar}>
                <h2>{props.title}</h2>
                <button className={`neutral ${isOpen ? styles.rotate : ""}`} onClick={()=>{setIsOpen(!isOpen)}}> + </button>
            </div>
            <div className={styles.content} ref={content} style={{height: `${isOpen ? (contentHeight + "px") : (isLoaded ? "0" :"unset")}`}}>
                {props.children}
            </div>
        </div>
    )
}