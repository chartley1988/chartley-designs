
import ReactMarkdown from 'react-markdown';
import getPostData from '@/components/data/getPostData';


function BlogPost( {post}: any) {
	console.log(post[0].date_posted);
	const data = post[0];


	return ( 
		<div className='main-container blog-post'>
			<div>
				<h2>{data.title}</h2>
				<p>{data.date_posted.split('T')[0]}</p>
			</div>
			<ReactMarkdown>{data.content}</ReactMarkdown>
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: [{params: {post_title: 'the-site-is-live'}}],
		fallback: false
	}
}

export async function getStaticProps(context: any) {
	const { params } = context;
    const post = await getPostData(params.post_title)
	//console.log(post)

	return {
		props: {
			post
		}
	}
}

export default BlogPost;