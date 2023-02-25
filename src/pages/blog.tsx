import Head from 'next/head';
import styles from '../styles/home.module.css';
import NavMenu from '../components/nav_menu';
import Header from '../components/header';
import Footer from '../components/footer';
import Blog from '../components/page_content/blog';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.container}>
				<Header />
				<NavMenu />
				<Blog />
				<Footer />
			</main>
		</>
	);
}
