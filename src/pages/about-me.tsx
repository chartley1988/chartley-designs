import Head from 'next/head';
import styles from '@/styles/home.module.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutMe from '@/components/page_content/about_me';
import Link from 'next/link';


export default function Home() {
	return (
		<>
			<Head>
				<title>Chartley Designs - About Me</title>
				<meta
					name='description'
					content='Chartley Designs - About Me. Homepage of Carson Hartley, a Web Developer from Alberta, Canada.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.container}>
				<Header />
				<AboutMe />
				<Footer />
			</main>
		</>
	);
}
