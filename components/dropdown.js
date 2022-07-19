import styles from "./dropdown.module.css"
import {useState, useEffect, useRef} from "react"

export default function Dropdown(props){
    const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const content = useRef()
    useEffect(()=>{
        setContentHeight(content.current.offsetHeight + 16)
        let listener = window.addEventListener('resize',()=>{
            setContentHeight(content.current.offsetHeight + 16)
        })
        return ()=>{window.removeEventListener('resize',listener)}
    })
    return (
        <div className={`${isOpen ? 'accent' : 'neutral'} ${styles.container}`}>
            <div className={styles.bar}>
                <h2>{props.title}</h2>
                <button className={`neutral ${isOpen ? styles.rotate : ""}`} onClick={()=>{setIsOpen(!isOpen)}}> + </button>
            </div>
            <div className={styles.content} style={{height: `${isOpen ? (contentHeight + "px") : "0"}`}}>
                <div ref={content}>
                    {props.children}
                </div>
            </div>

        </div>
    )
}