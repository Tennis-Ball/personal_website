import Head from 'next/head'
import Nav from '/components/nav'
import Dropdown from '/components/dropdown'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '/components/card'
import Contacts from '/components/contacts'
export default function Home() {
	return (
		<>
		<Head>
		<title>Mason Choi</title>
		<link rel="icon" href="/favicon.png" />
		</Head>
			<Nav/>
			<h1>Mason Choi</h1>
			<p>Ahoy!! My name is Mason Choi. I currently work as a developer/analyst at <a href="https://solveadvisors.com/">Solve Advisors Inc.</a> My expertise ranges from machine learning and data engineering/analysis to building out web and mobile applications. I am a competitive fencer at the national, individual level, and am an avid stock+etf trader, 3d printer, and roboticist.</p>
			
			<Contacts/>
			<Dropdown title="Projects">
				<p>These are some of the projects I have developed over the years, starting from the most recent to the oldest. I have been creating projects with code since 2018.</p>
				<Card>
					<h3><a href="https://github.com/Tennis-Ball/MP-Predictor">Melting Point Estimator</a></h3>
					<p>July 2022 - Present</p>
					<p>A deep learning neural network built using Tensorflow in Python, predicting the melting points of molecules given their molecular structures in the standard SMILE notation and average mass.</p>
				</Card>
				<Card>
					<h3><a href="https://github.com/Tunabl">Tunabl</a></h3>
					<p>July 2022 - Present</p>
					<p>This is Tunabl, a mobile application built on the React Native framework for discovering new music. Tunabl is still in early development with no estimated date of release.</p>
				</Card>
				<Card>
					<h3><a href="https://tony1324.github.io/raytracer/">Raytracer</a></h3>
					<p>June 2022 - July 2022</p>
					<p>Custom raytracer built from scratch in javascript. In collaboration with <a href="https://github.com/Tony1324">Tony Zhang</a></p>
					<Image src="/home/images/RayTracer.png" width={150} height={150}></Image>
				</Card>
				<Card>
					<h3><a href="https://filess.org">Filess</a></h3>
					<p>March 2022 - July 2022</p>
					<p>Filess is a static asset hosting service with the intent of seamless sharing made unique. Quickly upload images, videos, etc. and create your own custom URL link that can be shared. The website was built on top of the Flask framework with AWS S3 file hosting.</p>
					<Image src="/home/images/filessDashboard.png" width={350} height={350}></Image>
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
			
		</>
		)
	}
	