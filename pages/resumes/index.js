import Head from 'next/head'
import Nav from '/components/nav'
import Card from '/components/card'


export default function Timeline(){
    return (
        <>
            <Head>
                <title>Resumes | Mason Choi</title>
            </Head>
            <Nav />
            
            <h1>Resumes</h1>
            
            <h3></h3>
            <Card><a href="/resumes/work_resume.pdf">Work Resume</a></Card>
            <Card><a href="/resumes/academic_resume.pdf">Academic Resume</a></Card>

            <div className={`line`}></div>
			<p style={{textAlign: "center"}}>Website built using <a href="https://github.com/Tennis-Ball/personal_website" target="_blank" rel="noreferrer">Next.js</a></p>
        </>
    )
}
