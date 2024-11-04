import Head from 'next/head'
import Nav from '/components/nav'


export default function Timeline(){
    return (
        <>
            <Head>
                <title>Resumes | Mason Choi</title>
            </Head>
            <Nav />
            
            <h1>Resumes</h1>
            
            <h3></h3>
            <div className={`neutral`}><a href="/resumes/Mason_Choi_Resume.pdf">Resume</a></div>

            <div className={`line`}></div>
			<p style={{textAlign: "center"}}>Website built using <a href="https://github.com/Tennis-Ball/personal_website" target="_blank" rel="noreferrer">Next.js</a></p>
        </>
    )
}
