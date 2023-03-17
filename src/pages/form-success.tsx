import Head from 'next/head';
import styles from '../styles/home.module.css';
import Projects from '../components/projects';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '@/components/contact_form';

export default function Home() {
	return (
		<>
			<Head>
				<title>Chartley Designs</title>
				<meta
					name='description'
					content='Chartley Designs. Homepage of Carson Hartley, a Web Developer from Alberta, Canada.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.container}>
				<Header />
				<p className={`${styles.success} main-container`}>Success! Your message has been sent.</p>
				<Footer />
			</main>
		</>
	);
}
