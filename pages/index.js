import Head from 'next/head'
import Nav from '/components/nav'
import Dropdown from '/components/dropdown'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
	return (
		<div>
		<Head>
		<title>Mason Choi</title>
		<meta name="description" content="[Insert Description Here]" />
		<link rel="icon" href="/favicon.ico" />
		</Head>
		
		<main>
			<Nav/>
			<h1>Mason Choi</h1>
			<p> <a href="https://example.com">link</a> Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<div className={styles.media}>
				<button><a href="https://github.com" target="_blank"><Image src="/home/images/GitHub-Mark-120px-plus.png" layout="responsive" width={120} height={120}/></a></button>
				<button><a href="mailto:example@example.com" target="_blank"><Image src="/home/images/mail_FILL1_wght700_GRAD0_opsz48-2.png" layout="responsive" width={48} height={48}/></a></button>
				<button><a href="https://linkedin.com" target="_blank"><Image src="/home/images/LI-In-Bug.png" layout="responsive" width={540} height={540}/></a></button>
			</div>

			<Dropdown title="Test"><p>dropdown content</p></Dropdown>
			<Dropdown title="Test"></Dropdown>
			<Dropdown title="Test"></Dropdown>
			<Dropdown title="Test"></Dropdown>
		</main>
		
		<footer>
		
		</footer>
		</div>
		)
	}
	