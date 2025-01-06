import Link from 'next/link'
import styles from './nav.module.css'
import { useEffect, useState } from 'react'

export default function Nav(props){
    const [theme, setTheme] = useState('')
    const [browserTheme, setBrowserTheme] = useState('light')

    function setHTMLAttrib(value,t){
        if(value == 'auto'){
            document.documentElement.setAttribute("theme", t ?? browserTheme)
        }else{
            document.documentElement.setAttribute("theme", value)
        }   
    }
    useEffect(()=>{
        const t = localStorage.getItem('theme')
        setTheme(t ? t : 'auto')
        setHTMLAttrib(t ? t : 'auto')
        let listener = window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",  (e) => {
            setBrowserTheme(e.matches ? 'dark':'light')
            setHTMLAttrib(theme, e.matches ? 'dark':'light')
        })
        return window.removeEventListener('change',listener)
    })
    return (
        <div className={styles.container}>
            <A url="/">Home</A>
            <A url="/timeline">Timeline</A>
            <A url="/resumes/Mason_Choi_Resume.pdf">Resume</A>
            {/* <div className="spacer"></div> */}
            <div className="linkRight">
                <select value={theme} onChange={(e)=>{
                    setTheme(e.target.value)
                    localStorage.setItem('theme',e.target.value)
                    setHTMLAttrib(e.target.value)
                }} style={{display: `${theme ? "" : "none"}`}}>
                    <option value="auto">Auto</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </div>
    )

}


function A(props){

    const [isCurrent,setIsCurrent] = useState(false)

    useEffect(()=>{
        setIsCurrent(window.location.pathname == props.url)
    })
    
    if(props.url == "/resumes/Mason_Choi_Resume.pdf"){
        return (
            <Link href={props.url}><a className={isCurrent ? "" : styles.faded} target="_blank" rel="noreferrer">{props.children}</a></Link>
        )
    } else {
        return (
            <Link href={props.url}><a className={isCurrent ? "" : styles.faded}>{props.children}</a></Link>
        )
    }
}