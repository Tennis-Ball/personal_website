import Head from 'next/head'
import Nav from '/components/nav'
import Card from '/components/card'


export default function LexiaPP(){
    return (
        <>
            <Head>
                <title>Lexia | Mason Choi</title>
            </Head>
            <Nav />
            
            <h1><a href="https://github.com/Tennis-Ball/lexia" target="_blank" rel="noreferrer">Lexia</a>'s Privacy Policy</h1>
            
            <h3></h3>
            <Card>
				<h3>Personal Data</h3>
				<p>Lexia has never and will never collect any personal data. Period.</p>
			</Card>
            <Card>
				<h3>How Lexia Works</h3>
				<p>
					Lexia looks at the underlying HTML code of the web page you
					are currently viewing and injects bold tags around the first
					crucial letters of each word. Therefore, by nature, Lexia reads
					what you read in Chrome, but for the sole purpose of
					identifying key syllables to be emphasized.
				</p>
			</Card>
			<Card>
				<h3>Updates</h3>
				<p>
					While unlikely, Lexia's Privacy Policy may change in the future.
					Thus, it is recommended to check this page from time to time.
				</p>
				<p>Last updated: 10 March 2023</p>
			</Card>

            <div className={`line`}></div>
			<p style={{textAlign: "center"}}>Website built using <a href="https://github.com/Tennis-Ball/personal_website" target="_blank" rel="noreferrer">Next.js</a></p>
        </>
    )
}