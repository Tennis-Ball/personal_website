import '../styles/globals.css'
import {useEffect} from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  useEffect(()=>{
    
  })
  return (
    <>
    <Head>
    <link rel="icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
    </>
    )
  }
  
  export default MyApp
  