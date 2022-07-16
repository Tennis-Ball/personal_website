import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
		<Head>
		<title>Mason Choi</title>
		<meta name="description" content="[Insert Description Here]" />
		<link rel="icon" href="/favicon.ico" />
		</Head>
		
		<main>
			<h1>Mason Choi</h1>
			<p> <a href="https://example.com">link</a> Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<div className={styles.media}>
				<button><p>github</p></button>
				<button><p>email</p></button>
				<button><p>stuff</p></button>
			</div>
			<h2>Projects</h2>
		</main>
		
		<footer>
		
		</footer>
		</div>
		)
	}
	