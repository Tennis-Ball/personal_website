import Head from 'next/head'
import Nav from '/components/nav'
import Dropdown from '/components/dropdown'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '/components/card'

export default function Home() {
	return (
		<div>
		<Head>
		<title>Mason Choi</title>
		<meta name="description" content="[Insert Description Here]" />
		<link rel="icon" href="/favicon.ico" />
		</Head>
			<Nav/>
			<h1>Mason Choi</h1>
			{/* <p> <a href="https://example.com">link</a></p> */}
			<p>Hi, my name is Mason and this is my personal website. This right now is some dummy text that is a placeholder for what I will actually write later. This is where I will put my bio, a short blurb about myself, my aspirations, and my skills. Thanks a ton Tony for helping me out creating the website!!</p>
			<div className={styles.media}>
				<button><a href="https://github.com" target="_blank"><Image src="/home/images/GitHub-Mark-120px-plus.png" layout="responsive" width={120} height={120}/></a></button>
				<button><a href="mailto:example@example.com" target="_blank"><Image src="/home/images/mail_FILL1_wght700_GRAD0_opsz48-2.png" layout="responsive" width={48} height={48}/></a></button>
				<button><a href="https://linkedin.com" target="_blank"><Image src="/home/images/LI-In-Bug.png" layout="responsive" width={540} height={540}/></a></button>
			</div>

			<Dropdown title="Projects">
				<p>These are some of the projects I have developed over the years, ranging from the most recent to the oldest. I have been creating projects on my Github since 2018.</p>
				<Card>
					<h3><a href="https://github.com">Tunabl</a></h3>
					<p>July 2022 - Present</p>
					<p>This is Tunabl, a mobile application built on the React Native framework for discovering new music. More details about Tunabl coming later. I think that there should be a better way to display the title, date, and link, maybe make the title a link and have a cool text under that with the dates.</p>
				</Card>
				<Card>
					<h3><a href="https://github.com">Filess</a></h3>
					<p>March 2022 - July 2022</p>
					<p>Another project</p>
				</Card>
				<Card>
					<h3>Raytracer: time frame</h3>
					<p>More description here, I think the text is a tiny bit bland. Could there be a way to add an image better?</p>
					<Image src="/home/images/g.PNG" width={300} height={200}/>
				</Card>
				<Card>
					<h3>Neural Network</h3>
					<p>Built out a neural network from scratch by implementing statistical classification methods in Python with Numpy.</p>
				</Card>
				<Card>
					<h3>Another Project: timeframe</h3>
					<p><a href="randomlink.com">Needs to be a better way to link projects</a></p>
					<p>I think it would be nice if there was an animation on the "+" to spin to an "x" or spin into a "-".</p>
				</Card>
			</Dropdown>
			<Dropdown title="Work">
				<Card>
					<h3>Work experience 2: dates</h3>
					<p>Hmm, this dropdown doesn't look quite right, part of the card is visible when collapsed</p>
				</Card>
				<Card>
					<h3>Work experience 1: dates</h3>
					<p>More description here, maybe I we can link links to the title (h3 tag) and have a separate atom component (or just html) for  the dates.</p>
				</Card>
			</Dropdown>
			<Dropdown title="School">
				<Card>
					<h3>Still undecided for what to put in here, idk if I want to stick with the cards or not. Same with the following 2 dropdowns, let's think about it.</h3>
					<p>:)) Aloha!, might put this, Volunteering, and Extracurriculars in another page, idk yet</p>
				</Card>
			</Dropdown>
			<Dropdown title="Volunteering"></Dropdown>
			<Dropdown title="Extracurriculars"></Dropdown>
			<div className={`neutral ${styles.github}`}>
				<img src="https://ghchart.rshah.org/b58e31/Tennis-Ball" width={650} height={100} layout="responsive"/>
			</div>
		</div>
		)
	}
	