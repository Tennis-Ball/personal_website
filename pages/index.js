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
			<p>Hi! My name is Mason Choi. I am a rising senior pursuing a dual degree in computer science and mathematics (with a concentration in statistics+data science) at the University of Massachusetts Amherst. I work as the lead software engineer at a finance AI company and cofounded an AI shopping startup. My interests range from machine learning and AI safety to scalable cloud infrastructure and data processing. I am a competitive fencer at the national level, and am an avid stock+option investor, 3d printer, climber, and fisherman 🎣.</p>
			
			<Contacts/>
			<Dropdown title="Projects">
				<p>These are some of the projects I have developed over the years, starting from the most recent to the oldest. I have been creating projects with code since 2018.</p>
				<Card>
					<h3>Campus Quad</h3>
					<p>November 2023 - Present</p>
					<p>A mobile app being developed under parent company QUAD, seeking to bring college students together under one campus. The app features both a social and marketplace side hosting features ranging from chat rooms based on academic class, forum posts for news and sports, and buy, sell, and rent options for goods and services.</p>
				</Card>
				<Card>
					<h3>FoodCraft</h3>
					<p>March 2023 - Archived</p>
					<p>FoodCraft is a service accessible by mobile and web application that enables users to quickly log ingredients they possess and provides detailed recipes based on their personal preferences.</p>
				</Card>
				<Card>
					<h3><a href="https://chrome.google.com/webstore/detail/lexia/pikdcobajohdjlhcohgkenhkjedgdcpo" target="_blank" rel="noreferrer">Lexia</a></h3>
					<p>March 2023</p>
					<p>A simple Google Chrome extension written in javascript to improve the readability of online text, made specifically for a friend with dyslexia.</p>
				</Card>	
				<Card>
					<h3><a href="https://github.com/Tennis-Ball/Albert" target="_blank" rel="noreferrer">Albert</a></h3>
					<p>January 2023 - March 2023</p>
					<p>Albert is an experimental research project exploring the possibilities of using a transformer model such as GPT-3 to help train a custom transformer model, Albert.</p>
				</Card>		
				<Card>
					<h3><a href="https://text2notes.com/" target="_blank" rel="noreferrer">OpenAI Text to Notes Converter</a></h3>
					<p>December 2022 - January 2023</p>
					<p>A simple website hosting custom technology made possible by OpenAI&apos;s GPT-3 API. The technology can convert any textbook text into note form broken down by topic, effectively streamlining the notetaking process.</p>
				</Card>
				<Card>
					<h3><a href="https://github.com/Fantasy-Fencing" target="_blank" rel="noreferrer">Fantasy Fencing</a> X <a href="https://github.com/Tennis-Ball/The-Fencing-Project" target="_blank" rel="noreferrer">The Fencing Project</a></h3>
					<p>September 2022 - Archived</p>
					<p>A small dev team founded by fencing celebrity Cyrus of Chaos to deliver a Fantasy Football inspired fencing platform. Incorporates elements from my project &quot;The Fencing Project&quot; which scrapes and manipulates all available fencing data. I mainly head backend development and systems design, occasionally touching our beautiful frontend UI.</p>
				</Card>
				<Card>
					<h3 className="cardTitle"><a href="https://github.com/Tennis-Ball/MP-Predictor" target="_blank" rel="noreferrer">Melting Point Estimator</a></h3>
					<p>July 2022 - September 2022</p>
					<p>A deep learning neural network built using Tensorflow in Python which predicts the melting points of molecules given their molecular structures in the standard SMILE notation and average mass.</p>
				</Card>
				<Card>
					<h3><a href="https://github.com/Tunabl" target="_blank" rel="noreferrer">Tunabl</a></h3>
					<p>July 2022 - Archived</p>
					<p>This is Tunabl, a mobile application built on the React Native framework for discovering new music. Tunabl is still in early development with no estimated date of release.</p>
				</Card>
				<Card>
					<h3><a href="https://tony1324.github.io/raytracer/" target="_blank" rel="noreferrer">Raytracer</a></h3>
					<p>June 2022 - July 2022</p>
					<p>Custom raytracer built from scratch in javascript. In collaboration with <a href="https://github.com/Tony1324" target="_blank" rel="noreferrer">Tony Zhang</a></p>
					<Image src="/images/RayTracer.png" width={150} height={150}></Image>
				</Card>
				<Card>
					<h3><a href="https://filess.org" target="_blank" rel="noreferrer">Filess</a></h3>
					<p>March 2022 - July 2022</p>
					<p>Filess is a static asset hosting service with the intent of seamless sharing made unique. Quickly upload images, videos, etc. and create your own custom URL link that can be shared. The website was built on top of the Flask framework with AWS S3 (cloud storage) file hosting.</p>
					<Image src="/images/filessDashboard.PNG" width={350} height={350}></Image>
				</Card>
				<Card>
					<h3><a href="https://tennis-ball.github.io/Character-Classification/" target="_blank" rel="noreferrer">Neural Network</a></h3>
					<p>April 2022 - May 2022</p>
					<p>Built a neural network from scratch by implementing statistical classification methods in Python with NumPy. Ranks 6th best performing on the EMNIST Balanced benchmark dataset with over 96% accuracy.</p>
				</Card>
				<Card>
					<h3><a href="https://github.com/Tennis-Ball/Image-Analyzation-App" target="_blank" rel="noreferrer">Image Analyzation App</a></h3>
					<p>August 2021 - September 2021</p>
					<p>React Native mobile application built with Expo, providing various tools centered around images. Contained Google&apos;s &quot;Mobile Net&quot; Convolutional Neural Network (CNN) model for classification on 1,000 classes.</p>
				</Card>
				<Dropdown title="My Machine Learning Journey">
					<p>March 2021 - Present</p>
					<Card>
						I expanded on my Python neural network from scratch into a <a href="https://github.com/Tennis-Ball/Cross-Compatible-ML-Library" target="_blank" rel="noreferrer">pseudo-library</a> for machine learning in Python, Java, and C++.
					</Card>
					<Card>
						<p><a href="https://github.com/Tennis-Ball/Anchor-ai" target="_blank" rel="noreferrer">Anchor</a> was a website providing multiple regression model predictions on over 2,500 stock symbols. Its Tensorflow model was run daily in an AWS Elastic Cloud Compute (EC2) instance, assets stored in AWS S3, and website built with Django.</p>
					</Card>
					<Card>
						<p>Simple <a href="https://github.com/Tennis-Ball/Fencing-Video-Tool" target="_blank" rel="noreferrer">fencing analysis tool</a> that spliced fencing video footage for fencing frames only with a CNN, reducing average watch time by over 40%.</p>
					</Card>
					<Card>
						<p>Both my <a href="https://github.com/Tennis-Ball/AI-Singer" target="_blank" rel="noreferrer">AI composer</a> and <a href="https://github.com/Tennis-Ball/AI-Singer" target="_blank" rel="noreferrer">AI singer</a> fashioned Long Short-Term Memory (LSTM) models to generate their own, original musical pieces. This required webscraping, data cleaning, and, of course, machine learning (ML).</p>
					</Card>
				</Dropdown>
				<p>You can view more of my projects on <a href="https://github.com/Tennis-Ball" target="_blank" rel="noreferrer">my Github</a></p>
			</Dropdown>
			<Dropdown title="Work">
				<Card>
					<h3>Fintech AI Startup</h3>
					<p>April 2024 - Present</p>
					<li>Configuring company servers to handle large streams of financial data and deploying machine learning models to extract insights from them.</li>
				</Card>
				<Card>
					<h3><a href="https://www.minutemenalternativeinvestmentfund.com/">Minutemen Alternative Investment Fund</a></h3>
					<p>February 2024 - Present</p>
					<li>Co-leading a derivatives trading team part of the quant arm of MAIF as a quantitative researcher</li>
					<li>Deploying live gamma scalping scalping algorithms to generate upwards of 3% alpha against the benchmark index SPY</li>
				</Card>
				<Card>
					<h3><a href="https://www.atlanticprimeestates.com/" target="_blank" rel="noreferrer">Atlantic Prime Estates</a></h3>
					<p>July 2023 - April 2024</p>
					<li>Built advanced housing data aggregation pipelines to push exclusive API data into AWS hosted MySQL databases for later mathematical analysis</li>
					<li>Compared multiple regression and time series models to more accurately predict appreciation rates, building out the fund’s most valuable market analysis tool</li>
				</Card>
				<Card>
					<h3><a href="https://solveadvisors.com/" target="_blank" rel="noreferrer">Solve Advisors Inc.</a></h3>
					<p>March 2022 - July 2023</p>
					<li>Worked with the AI/ML team to build a Business Development Company (BDC) financial statement parser, which disrupted the industry and saved the company an estimated 848 hours annually</li>
					<li>Automated manual bond and loan data pricing with Selenium and Google’s Oauth API in an AWS EC2 instance</li>
					<li>Built tools to aggregate global treasury yeild data and organize it</li>
				</Card>
				<Card>
					<h3><a href="https://advantagedata.com/" target="_blank" rel="noreferrer">Advantage Data Inc. + Best Credit Management Inc.</a></h3>
					<p>September 2021 - March 2022</p>
					<li>Developed Python scripts to scrape data from the SEC, parse and transform the data, and load it into the company database (ETL process), replacing hundreds of hours of manual work</li>
					<li>Collaborated with dev team to deploy data pipelines directing source data into our system with Python and SQL</li>
				</Card>
			</Dropdown>
			<Dropdown title="Education">
				<p>I currently hold a 3.95 GPA at the University of Massachussetts Amherst.</p>
				<Dropdown title="Coursework">
					<Card>
						<h3>Database Systems (CSCI E-66, graduate level)</h3>
						<p>Harvard Extension School | Final grade: A</p>
					</Card>
					<Card>
						<h3>Principles of Big Data Processing (CSCI E-88)</h3>
						<p>Harvard Extension School | Final grade: A</p>
					</Card>
					<Card>
						<h3>Object-Oriented Programming (CICS 160)</h3>
						<p>University of Massachusetts Amherst | Final grade: A</p>
					</Card>
					<Card>
						<h3>Data Structures (CS 210)</h3>
						<p>University of Massachusetts Amherst | Final grade: A</p>
					</Card>
					<Card>
						<h3>Introduction to Algorithms (CS 311)</h3>
						<p>University of Massachusetts Amherst | Final grade: A</p>
					</Card>
					<Card>
						<h3>Scientific Computing (MATH 551)</h3>
						<p>University of Massachusetts Amherst | Final grade: A</p>
					</Card>
					<Card>
						<h3>Statistics II (STAT 516)</h3>
						<p>University of Massachusetts Amherst | Final grade: ~A</p>
					</Card>
					<Card>
						<h3>Applications of Linear Algebra (Math 545)</h3>
						<p>University of Massachusetts Amherst | Final grade: ~A</p>
					</Card>
				</Dropdown>
				<Dropdown title="Skills">
					<Card>
						<h3>Modern Languages</h3>
						<li>English - Native or bilingual proficiency</li>
						<li>Mandarin - Professional working proficiency</li>
						<li>Korean - Elementary proficiency</li>
					</Card>
					<Card>
						<h3>Computer Languages</h3>
						<li>Python - Expert</li>
						<li>Java, C, Javascript - Proficient</li>
						<li>SQL - Proficient</li>
						<br></br>
						<a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noreferrer">
							<img align="left" width="185" height="185" src="https://github-readme-stats-api-clone.vercel.app/api/top-langs/?username=Tennis-Ball&layout=compact&hide_border=true&card_width=400" />
						</a>

					</Card>
					<Card>
						<h3>Tech Stack</h3>
						<li>Frameworks: React, Flask, Django, React Native</li>
						<li>Tools: AWS, MS/G suites, Git</li>
						<li>Libraries: Tensorflow, Pandas, NumPy, Matplotlib</li>
					</Card>
					<Card>
						<h3>Key Skills</h3>
						<li>Communicative</li>
						<li>Hard working</li>
						<li>Leader</li>
						<li>Flexible</li>
					</Card>
				</Dropdown>
			</Dropdown>
			<Dropdown title="Extracurriculars">
				<Card>
					<h3>Fencing - Individual</h3>
					<p>2016 - 2023</p>
					<p>I peaked at 13th in the nation and 1st regionally for the Cadet age group (U17), 5th regionally for the Junior age group (U20). Had I continued training I hoped to join the USA Cadet Men&apos;s Epee world team (top 20).</p>
				</Card>
				<Card>
					<h3>Fencing - Varsity</h3>
					<p>2019 - 2023</p>
					<p>Was part of the Boston Latin School varsity fencing team since 7th grade, bringing home the state championships title in 2023. I exchange A and B positions (first and second) at competitions.</p>
				</Card>
				<Card>
					<h3>Fencing - Club</h3>
					<p>2023 - present</p>
					<p>Currently fencing on the UMass club fencing team, taking first place at the 2023 Smith individual invitational competition.</p> 
				</Card>
				<Dropdown title="Community Service">
					<Card>
						<p>Awarded the ZERO HERO Award (2021-2023) for my work on eliminating hunger in the greator Boston area, and the National Community Service Merit Award (2021-2023) for hours served. See my entire community service <a href="https://innerview.org/masonchoi" target="_blank" rel="noreferrer">here</a>.</p>
					</Card>
					<Card>
						<h3>Homeless Outreach Ministry & Engagement (HOME)</h3>
						<p>January 2022 - February 2023</p>
						<p>Every week I volunteered with HOME to cook meals, prepare food/drink, distribute clothing, and lend an ear to my homeless neighbors of Boston.</p>
					</Card>
				</Dropdown>
				<Card>
					<h3>Computer Science/Business</h3>
					<p>My passion for computer technologies and entrepreneurship has likely already made itself clear; my past+current projects and businesses endeavors can be found above along with my professional work experience.</p>
				</Card>
			</Dropdown>
			<Dropdown title="Hobbies">
				<Card>
					<h3>Finance</h3>
					<p>I enjoy researching the way politics, economics, and current events shape the various financial markets, using this knowledge to make profitable stock and ETF trades. I plan on exploring the bond/loan markets as I work closely with them at my company.</p>
				</Card>
				<Card>
					<h3>3d designing and printing</h3>
					<p><br></br></p>
					<Image src="/images/3dPrint.jpg" width={250} height={160}></Image>
					<p style={{fontSize: 14}}>A 3d printed robotic prosthetic hand with an experimental printed fabric.</p>
					<hr></hr><p></p>
					<Image src="/images/kinetic_art_pic.jpg" width={250} height={250}></Image>
					<br></br>
					<Image src="/images/kinetic_art_gif.gif" width={250} height={160}></Image>
					<p style={{fontSize: 14}}>Mechatronic kinetic art project inspired by artist <a href="https://www.artsy.net/artist/willem-van-weeghel/works-for-sale" target="_blank" rel="noreferrer">Willem van Weeghel</a></p>
				</Card>
				<Card>
					<h3>World Travelling</h3>
					<p>I have been to over 30 countries and 4 continents, experiencing both similar and different cultures, languages, and environments.</p>
				</Card>
				<Card>
					<h3>Fishing</h3>
					<p>I love fishing with friends and family at 4AM, especially when we don&apos;t catch anything and realize one of our wading boots has a hole in it... Freshwater fishing for bass and carp is always fun.</p>
				</Card>
			</Dropdown>
			<div className={`neutral ${styles.github}`}>
				<a href="https://github.com/Tennis-Ball" target="_blank" rel="noreferrer"><img src="https://ghchart.rshah.org/b58e31/Tennis-Ball" width={650} height={100} layout="responsive" alt="Github contributions graph"/></a>
				<br></br>
				<a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noreferrer">
					<img align="center" width="180" height="180" src="https://github-readme-stats-api-clone.vercel.app/api?username=Tennis-Ball&count_private=true&show_icons=true&hide_border=true&theme=gruvbox_light" alt="Tennis Ball's github stats" />
				</a>
			</div>	

			<div className={`line`}></div>
			<p style={{textAlign: "center"}}>Website built using <a href="https://github.com/Tennis-Ball/personal_website" target="_blank" rel="noreferrer">Next.js</a></p>
		</>
		)
	}
	
