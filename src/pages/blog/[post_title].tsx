import { GetStaticProps, InferGetStaticPropsType } from 'next';
import getPostData from '@/components/data/getPostData';
import getPostIDList from '@/components/data/getPostIDList';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '../../styles/home.module.css';
import blog_styles from '../../styles/post_page.module.css';
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
					content={`Chartley Designs - Blog. ${data.title}`}
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.container}>
				<Header />
				<div className={blog_styles.wrapper}>
					<div className={`${blog_styles.container} main-container`}>
						<div>
							<h2>{data.title}</h2>
							<p>{data.date_posted.split('T')[0]}</p>
						</div>
						<ReactMarkdown>{data.content}</ReactMarkdown>
						<em>Chartley</em>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}

export async function getStaticPaths() {
	const data = await getPostIDList();
	console.log(data);

	const paths = data.map((post: { post_id: string }) => {
		return { params: { post_title: `${post.post_id}` } };
	});

	return {
		paths,
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
