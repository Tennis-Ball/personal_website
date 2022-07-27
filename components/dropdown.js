import styles from "./dropdown.module.css"
import {useState, useEffect, useRef} from "react"

export default function Dropdown(props){
    const [isOpen, setIsOpen] = useState(props.forceOpen)
    const [contentHeight, setContentHeight] = useState(0)
    const content = useRef()
    useEffect(()=>{
        setContentHeight(content.current.offsetHeight)
        let listener = window.addEventListener('resize',()=>{
            setContentHeight(content.current.offsetHeight)
        })
        return ()=>{window.removeEventListener('resize',listener)}
    })
    return (
        <div className={`${isOpen ? `accent ${styles.expanded}` : 'neutral'} ${styles.container}`} onClick={(e)=>{setIsOpen(!isOpen)}}>
            <div className={styles.bar}>
                <h2>{props.title}</h2>
                {!props.forceOpen &&
                    <button className={`neutral ${isOpen ? styles.rotate : ""}`} onClick={()=>{setIsOpen(!isOpen)}}> <p>＋</p>
                    </button>
                }
            </div>
            <div className={styles.content} style={{height: `${isOpen ? (contentHeight + "px") : "0"}`}}>
                <div ref={content}>
                    {props.children}
                </div>
            </div>

        </div>
    )
}