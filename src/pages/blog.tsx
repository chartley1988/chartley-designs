import Head from 'next/head';
import styles from '../styles/home.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Blog from '../components/page_content/blog';
import getBlogData from '@/components/data/getBlogData';
import { InferGetStaticPropsType } from 'next';

interface blogData {
	content: string;
	date_posted: string;
	post_id: string;
	title: string;
	createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export default function BlogPage({
	data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Chartley Designs - Blog</title>
				<meta
					name='description'
					content='Chartley Designs - Blog. Musings of Carson Hartley, a Web Developer from Alberta, Canada.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.container}>
				<Header />
				<Blog data={data} />
				<Footer />
			</main>
		</>
	);
}

export async function getStaticProps() {
	const data: blogData[] = await getBlogData();

	return {
		props: {
			data,
		},
	};
}
