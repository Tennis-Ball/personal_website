// import '../styles/globals.css'
import styles from '../styles/globals.css'
import {useEffect, useState} from 'react'
import Head from 'next/head'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from "../public/particles/particles.json"


function MyApp({ Component, pageProps }) {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particleOptions = options;
  // particleOptions.background = {color: "--background-color-2"};

  return (
    <>
    <Head>
    <link rel="icon" href="/favicon.png" />
    </Head>
    <html style={{background: "var(--background-color-1)", zIndex: -2}}></html>
    <Component {...pageProps} />
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions} />
    </>
    )
  }
  
  export default MyApp
  