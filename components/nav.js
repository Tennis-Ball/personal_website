import Link from 'next/link'
import styles from './nav.module.css'
import { useEffect, useState } from 'react'

export default function Nav(props){
    return (
        <div className={styles.container}>
            <A url="/">Home</A>
            <A url="/timeline">Timeline</A>
        </div>
    )
}


function A(props){

    let [isCurrent,setIsCurrent] = useState(false)

    useEffect(()=>{
        setIsCurrent(window.location.pathname == props.url)
    })
    

    return (
        <Link href={props.url}><a  className={isCurrent ? "" : styles.faded}>{props.children}</a></Link>
    )
}