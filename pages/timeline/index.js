import Head from 'next/head'
import { Component } from 'react'
import Nav from '/components/nav'
import styles from '/styles/Timeline.module.css'

export default function Timeline(){
    let events = [
        {content: <Box><h3>Hello 1</h3></Box>, date:"1/1/2020" },
        {content: <Box><h3>Hello 2</h3></Box>, date:"1/1/2020" },
        {content: <Box><h3>Hello 3</h3></Box>, date:"1/1/2020" },
        {content: <Box><h3>Hello 4</h3></Box>, date:"1/1/2021" },
        {content: <Box><h3>Hello 5</h3></Box>, date:"1/1/2022" },
        {content: <Box><h3>Hello 6</h3></Box>, date:"1/20/2022" }

    ]
    return (
        <div>
            <Head>
                <title>Timeline | Mason Choi</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Nav />
            <h1>Timeline</h1>
            {(()=>{
                let formatted = events.map(e => {return {content: e.content, date: new Date(e.date)}}).sort((a,b)=> a.date.getTime() < b.date.getTime())
                let dateDiffs = []
                for(let i = 0; i<formatted.length;i++){
                    let date1 = formatted[i]?.date
                    let date2 = formatted[i+1]?.date ?? date1
                    let diff = date1 - date2
                    console.log(diff)
                    dateDiffs.push({content:formatted[i].content,diff:diff})
                }

                let components = []
                // components.push(<Segment key="0" height={2} text={formatted[0]}/>)
                components.push(<Segment key={`0`} height={0} text={formatted[0]?.date.toLocaleDateString('default',{month:"short", year:'numeric'}) ?? ""}  top={true}/>)
                for (let i =0; i<dateDiffs.length;i++){
                    components.push(<div key={`${i} - 1`}>{dateDiffs[i].content}</div>)
                    if(dateDiffs[i].diff > (1000 * 60 * 60 * 24 * 30)){
                        components.push(<Segment key={`${i} - 2`} height={Math.sqrt(dateDiffs[i].diff / (1000 * 60 * 60 * 24)) / 2} text={formatted[i+1]?.date.toLocaleDateString('default',{month:"short", year:'numeric'}) ?? ""} />)
                    }
                }
                return components
            })()}
        </div>
    )
}

function Box(props){
    return(
        <div className={`neutral ${styles.box}`}>{props.children}</div>
    )
}


function Segment(props){
    return (
        <div className={styles.segment} style={{height: (Math.max(props.height, 3)) + 'em'}}>
            <span style={{transform: `translateY(${props.top ? -1: 0}em)`}}>{props.text}</span>
        </div>
    )
}