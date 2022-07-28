import styles from "./dropdown.module.css"
import {useState, useEffect, useRef} from "react"

export default function Dropdown(props){
    const [isOpen, setIsOpen] = useState(props.forceOpen)
    const [isFullyOpen, setIsFullyOpen] = useState(props.forceOpen);
    const [contentHeight, setContentHeight] = useState(0)
    const content = useRef()
    useEffect(()=>{
        setContentHeight(content.current.offsetHeight)
        let listener = window.addEventListener('resize',()=>{
            setContentHeight(content?.current?.offsetHeight ?? 0)
        })
        return ()=>{window.removeEventListener('resize',listener)}
    })

    function toggle(){
        if(!isOpen){
            setIsOpen(!isOpen)
            setTimeout(()=>{setIsFullyOpen(!isOpen)},500)
        }else{
            setIsFullyOpen(!isOpen)
            requestAnimationFrame(()=>{setIsOpen(!isOpen)})
        }
    }
    return (
        <div className={`${isOpen ? `accent ${styles.expanded}` : 'neutral'} ${styles.container}`} onClick={(e)=>{toggle();e.stopPropagation()}}>
            <div className={styles.bar}>
                <h2>{props.title}</h2>
                {!props.forceOpen &&
                    <button className={`neutral ${isOpen ? styles.rotate : ""}`} onClick={toggle}> <p style={{margin: "0.5rem 0 !important"}}>＋</p>
                    </button>
                }
            </div>
            <div className={styles.content} style={{height: `${isOpen ? (isFullyOpen ? '' : contentHeight + "px") : "0"}`}}>
                <div ref={content}>
                    {props.children}
                </div>
            </div>

        </div>
    )
}