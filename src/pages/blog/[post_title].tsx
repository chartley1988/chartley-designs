import { GetStaticProps, InferGetStaticPropsType } from 'next';
import getPostData from '@/components/data/getPostData';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '../../styles/home.module.css';
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

function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(post[0].date_posted);
	const data: blogData = post[0];

	return (
		<>
			<Head>
				<title>Chartley Designs - Blog</title>
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
				<div className='main-container blog-post'>
					<div>
						<h2>{data.title}</h2>
						<p>{data.date_posted.split('T')[0]}</p>
					</div>
					<ReactMarkdown>{data.content}</ReactMarkdown>
				</div>
				<Footer />
			</main>
		</>
	);
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { post_title: 'the-site-is-live' } },
			{ params: { post_title: 'test_43' } },
		],
		fallback: false,
	};
}

export async function getStaticProps(context: GetStaticProps) {
	const { params }: any = context;
	const post: blogData[] = await getPostData(params.post_title);

	return {
		props: {
			post,
		},
	};
}

export default BlogPost;
