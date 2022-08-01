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
					<h3 className="cardTitle"><a href="https://github.com/Tennis-Ball/MP-Predictor">Melting Point Estimator</a></h3>
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
					<p>Custom raytracer built from scratch in javascript. Collaboration with <a href="https://github.com/Tony1324">Tony Zhang</a></p>
					<Image src="/home/images/RayTracer.png" width={150} height={150}></Image>
				</Card>
				<Card>
					<h3><a href="https://filess.org">Filess</a></h3>
					<p>March 2022 - July 2022</p>
					<p>Filess is a static asset hosting service with the intent of seamless sharing made unique. Quickly upload images, videos, etc. and create your own custom URL link that can be shared. The website was built on top of the Flask framework with AWS S3 file hosting.</p>
					<Image src="/home/images/filessDashboard.png" width={350} height={350}></Image>
				</Card>
				<Card>
					<h3><a href="https://tennis-ball.github.io/Character-Classification/">Neural Network</a></h3>
					<p>April 2022 - May 2022</p>
					<p>Built a neural network from scratch by implementing statistical classification methods in Python with Numpy. Ranks 6th best performing on the EMNIST Balanced benchmark dataset with over 96% accuracy.</p>
				</Card>
				<Card>
					<h3><a href="https://github.com/Tennis-Ball/Image-Analyzation-App">Image Analyzation App</a></h3>
					<p>August 2021 - September 2021</p>
					<p>React Native mobile application built with Expo, providing various tools centered around images. Contained Google&apos;s &quot;Mobile Net&quot; CNN model for classification on 1,000 classes.</p>
				</Card>
				<Dropdown title="My Machine Learning Start">
					<p>March 2021 - February 2022</p>
					<Card>
						<p><a href="https://github.com/Tennis-Ball/Anchor-ai">Anchor</a> was a website providing multiple regression model predictions on over 2,500 stock symbols. Tensorflow model was run daily in AWS EC2, assets stored in AWS S3, and website built with Django.</p>
					</Card>
					<Card>
						<p>Simple <a href="https://github.com/Tennis-Ball/Fencing-Video-Tool">fencing analysis tool</a> that spliced fencing video footage for fencing frames only with a CNN, reducing watch time by over 40%.</p>
					</Card>
					<Card>
						<p>Both my <a href="https://github.com/Tennis-Ball/AI-Singer">AI composer</a> and <a href="https://github.com/Tennis-Ball/AI-Singer">AI singer</a> fashioned LSTM models to generate their own, original musical pieces. This required webscraping, data cleaning, and, of course, ML.</p>
					</Card>
				</Dropdown>
				<p>You can view more of my projects on my Github</p>
			</Dropdown>
			<Dropdown title="Work">
				<Card>
					<h3>Solve Advisors Inc.</h3>
					<p>March 2022 - Present</p>
					<li>Worked with the AI/ML team to build a BDC investment parser, which disrupted the industry and saved the company an estimated 848 hours annually.</li>
					<li>Automated manual bond and loan data pricing with Selenium and Google’s Oauth API in an AWS EC2 instance</li>
					<li>Built a tool to aggregate global treasury yeild data and organize it</li>
				</Card>
				<Card>
					<h3>Advantage Data Inc. + Best Credit Management Inc.</h3>
					<p>September 2022 - March 2022</p>
					<li>Developed Python scripts to scrape data from SEC, parse and transform the data, and load it into the company database (ETL process), replacing hundreds of hours of manual work</li>
					<li>Collaborated with team to deploy data pipelines directing source data into our system with Python and SQL</li>
				</Card>
			</Dropdown>
			<Dropdown title="Education">
				<p>I currently attend Boston Latin School as a rising sophomore. I have found my high school cirriculum to be slightly limiting both in terms of pace and content, which is why I have enrolled in several college courses. I earned an unweighted GPA of 4.33 in 9th grade.</p>
				<Dropdown title="College Courses">
					<Card>
						<h3>College Calculus I</h3>
						<p>University of Pittsburgh | Final grade: 99%, A</p>
					</Card>
					<Card>
						<h3>Computer Science 121</h3>
						<p>University of Massachussettes Amherst | Final grade:</p>
					</Card>
					<Card>
						<h3>Statistics 111</h3>
						<p>University of Massachussettes Amherst | Final grade:</p>
					</Card>
				</Dropdown>
				<Dropdown title="Awards and Recognition">
					<Card>
						<h3>National Latin Exam Gold</h3>
						<p>Summa Cum Laude 2020, 2021, and 2022</p>
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
						<li>Latin Prose - Honors</li>
					</Card>
				</Dropdown>
			</Dropdown>
			<Dropdown title="Extracurriculars">
				<Card>
					<h3>Fencing</h3>
					<p>2017 - Present</p>
					<p>Nationally ranked fencer</p>
				</Card>
				<Card>
					<h3>Homeless Outreach Ministry</h3>
					<p>February 2022 - Present</p>
					<p>See my entire community service <a href="">here</a></p>
				</Card>
			</Dropdown>
			<Dropdown title="Hobbies">
				<Card>
					<h3>Finance</h3>
				</Card>
				<Card>
					<h3>3d designing and printing</h3>
				</Card>
				<Card>
					<h3>Travelling</h3>
				</Card>
				<Card>
					<h3>Electrical and Mechanical Engineering</h3>
				</Card>
				<Card>
					<h3>Being the best brother :)</h3>
				</Card>
			</Dropdown>
			<div className={`neutral ${styles.github}`}>
				<img src="https://ghchart.rshah.org/b58e31/Tennis-Ball" width={650} height={100} layout="responsive"/>
			</div>

			<div className={`line`}></div>
			<p style={{textAlign: "center"}}>A special thank you to <a href="https://github.com/Tony1324">Tony</a> for helping me build this with next.js</p>
		</>
		)
	}
	