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
			<p>Hi! My name is Mason Choi. I currently work as a Data Engineer at <a href="https://solveadvisors.com/" target="_blank" rel="noreferrer">Solve Advisors Inc.</a> My expertise ranges from machine learning and data engineering to building out web and mobile applications. I am a competitive fencer at the national level, and am an avid stock+etf investor, 3d printer, and fisherman 🎣.</p>
			
			<Contacts/>
			<Dropdown title="Projects">
				<p>These are some of the projects I have developed over the years, starting from the most recent to the oldest. I have been creating projects with code since 2018.</p>
				<Card>
					<h3>Albert</h3>
					<p>January 2022 - Present</p>
					<p>Albert is an experimental research project exploring the possibilities of using a transformer model such as GPT-3 to help train a custom transformer model, Albert.</p>
				</Card>		
				<Card>
					<h3><a href="https://text2notes.com/" target="_blank" rel="noreferrer">OpenAI Text to Notes Converter</a></h3>
					<p>December 2022 - January 2022</p>
					<p>A simple website hosting custom technology made possible by OpenAI&apos;s GPT-3 API. The technology can convert any textbook text into note form broken down by topic, effectively streamlining the notetaking process.</p>
				</Card>
				<Card>
					<h3><a href="https://github.com/Fantasy-Fencing" target="_blank" rel="noreferrer">Fantasy Fencing</a> X <a href="https://github.com/Tennis-Ball/The-Fencing-Project" target="_blank" rel="noreferrer">The Fencing Project</a></h3>
					<p>September 2022 - Present</p>
					<p>A small dev team founded by fencing celebrity Cyrus of Chaos to deliver a Fantasy Football inspired fencing platform. Incorporates elements from my project &quot;The Fencing Project&quot; which scrapes and manipulates all available fencing data. I mainly head backend development and systems design, occasionally touching our beautiful frontend UI.</p>
				</Card>
				<Card>
					<h3 className="cardTitle"><a href="https://github.com/Tennis-Ball/MP-Predictor" target="_blank" rel="noreferrer">Melting Point Estimator</a></h3>
					<p>July 2022 - Paused</p>
					<p>A deep learning neural network built using Tensorflow in Python which predicts the melting points of molecules given their molecular structures in the standard SMILE notation and average mass.</p>
				</Card>
				<Card>
					<h3><a href="https://github.com/Tunabl" target="_blank" rel="noreferrer">Tunabl</a></h3>
					<p>July 2022 - Paused</p>
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
					<h3>Solve Advisors Inc.</h3>
					<p>March 2022 - Present</p>
					<li>Worked with the AI/ML team to build a Business Development Company (BDC) financial statement parser, which disrupted the industry and saved the company an estimated 848 hours annually</li>
					<li>Automated manual bond and loan data pricing with Selenium and Google’s Oauth API in an AWS EC2 instance</li>
					<li>Built tools to aggregate global treasury yeild data and organize it</li>
				</Card>
				<Card>
					<h3>Advantage Data Inc. + Best Credit Management Inc.</h3>
					<p>September 2022 - March 2022</p>
					<li>Developed Python scripts to scrape data from the SEC, parse and transform the data, and load it into the company database (ETL process), replacing hundreds of hours of manual work</li>
					<li>Collaborated with dev team to deploy data pipelines directing source data into our system with Python and SQL</li>
				</Card>
				<Dropdown title="Honorable Mentions">
					<Card>
						<p>First job offer as a <b>front end software engineer intern</b> at trucking logistics company <a href="https://relaymile.com/" target="_blank" rel="norefferer">Relaymile</a> in August of 2021</p>
					</Card>
					<Card>
						<p>Making the 3rd stage technical interview with <b>Uber</b> for their <u>Software Engineer 2 - Data - Rider Verticals</u> position. This was one of the most intense interview processes I had experienced, 1 full day of onsite interviews away from a full time position at the transportation giant.</p>
					</Card>
				</Dropdown>
			</Dropdown>
			<Dropdown title="Education">
				<p>I currently attend the Boston Latin School (BLS) as a sophomore. In order to accelerate my learning in computer science and related feilds, I have enrolled in several college and online courses. I earned an unweighted GPA of 4.3/4.3 in 9th grade.</p>
				<Dropdown title="College Courses">
					<Card>
						<h3>Database Systems (CSCI E-66)</h3>
						<p>Harvard Extension School | Final grade: --% | Credits: 4</p>
					</Card>
					<Card>
						<h3>Business I</h3>
						<p>University of Pittsburgh | Final grade: --% | Credits: 3</p>
					</Card>
					<Card>
						<h3>Economics I</h3>
						<p>University of Pittsburgh | Final grade: --% | Credits: 3</p>
					</Card>
					<Card>
						<h3>Principles of Big Data Processing (CSCI E-80, graduate)</h3>
						<p>Harvard Extension School | Final grade: 100.00% | Credits: 4</p>
					</Card>
					<Card>
						<h3>Elementary Statistics (STAT 111)</h3>
						<p>University of Massachusetts Amherst | Final grade: 98.80% | Credits: 4</p>
					</Card>
					<Card>
						<h3>Principles of Computer Science (COMPSCI 121)</h3>
						<p>University of Massachusetts Amherst | Final grade: 100.00% | Credits: 4</p>
					</Card>
					<Card>
						<h3>Calculus I</h3>
						<p>University of Pittsburgh | Final grade: 99.00% | Credits: 3</p>
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
						<h3>National Latin Exam Gold</h3>
						<p>Summa Cum Laude 2020, 2021, and 2022</p>
					</Card>
					<Card>
						<h3>Computer Languages</h3>
						<li>Python - Expert</li>
						<li>HTML/CSS - Proficient</li>
						<li>Java, C++, Javascript - Proficient</li>
						<li>SQL - Proficient</li>
						<br></br>
						<a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noreferrer">
							<img align="left" width="185" height="185" src="https://github-readme-stats-api-clone.vercel.app/api/top-langs/?username=Tennis-Ball&layout=compact&hide_border=true&card_width=400" />
						</a>

					</Card>
					<Card>
						<h3>Tech Stack</h3>
						<li>Frameworks: React, Flask, Django, React Native</li>
						<li>Tools: AWS, MS/G suites, Git, Github</li>
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
				<Dropdown title="Courseload">
					<Card>
						<h3>2022 - 2023 (BLS 10th grade)</h3>
						<li>English 10 - Honors</li>
						<li>AP World History</li>
						<li>Chinese 3 - Honors</li>
						<li>Advanced Precalculus - Honors</li>
						<li>Physics 1 - Honors</li>
						<li>Latin Prose (advanced 4) - Honors</li>
					</Card>
					<Card>
						<h3>Approbation with Distinction</h3>
						<p>Earned every term (grade 7-present), for an excellent performance average of A- or above in each course</p>
					</Card>
				</Dropdown>
			</Dropdown>
			<Dropdown title="Extracurriculars">
				<Card>
					<h3>Fencing - Individual</h3>
					<p>2016 - Present</p>
					<p>I currently rank 30th in the nation and 1st regionally for the Cadet age group (U17), 5th regionally for the Junior age group (U20). I am working towards a spot (top 20) on the USA Cadet Men&apos;s Epee world team.</p>
				</Card>
				<Card>
					<h3>Fencing - Varsity</h3>
					<p>2019 - Present</p>
					<p>Part of the Boston Latin School varsity fencing team since 7th grade, bringing the team to the state finals every year fenced. I exchange A and B positions (first and second) at competitions.</p>
				</Card>
				<Dropdown title="Community Service">
					<Card>
						<p>Awarded the 2021-22 ZERO HERO Award for my work on eliminating hunger in the greator Boston area, and the 2021-22 National Community Service Merit Award for hours served. See my entire community service <a href="https://innerview.org/masonchoi" target="_blank" rel="noreferrer">here</a>.</p>
					</Card>
					<Card>
						<h3>Homeless Outreach Ministry & Engagement (HOME)</h3>
						<p>January 2022 - Present</p>
						<p>Every week I volunteer with HOME to cook meals, prepare food/drink, distribute clothing, and lend an ear to my homeless neighbors of Boston.</p>
					</Card>
				</Dropdown>
				<Card>
					<h3>Computer Science/ Business</h3>
					<p>My passion for computer technologies and entrepreneurship has most likely already made itself clear; my past+current projects and businesses can be found above along with my professional work experience.</p>
				</Card>
			</Dropdown>
			<Dropdown title="Hobbies">
				<Card>
					<h3>Finance</h3>
					<p>I enjoy researching the way politics, economics, and current events shape the various financial markets, using this knowledge to make profitable stock and ETF trades. I plan on getting into the bond/loan markets as I work closely with them at my company.</p>
				</Card>
				<Card>
					<h3>3d designing and printing</h3>
					<p></p>
					<Image src="/images/3dPrint.jpg" width={250} height={160}></Image>
					<p>A 3d printed robotic prosthetic hand with an experimental printed fabric.</p>
				</Card>
				<Card>
					<h3>World Travelling</h3>
					<p>I have been to over 30 countries and 4 continents, experiencing both similar and different cultures, languages, and environments.</p>
				</Card>
				<Card>
					<h3>Fishing</h3>
					<p>I love fishing with friends and family at 4AM, especially when we don&apos;t catch anything and realize one of our wading boots has a hole in it... Jokes aside, freshwater fishing for bass and carp is always fun.</p>
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
	
