
import ReactMarkdown from 'react-markdown';
import getPostData from '@/components/data/getPostData';


function BlogPost( {post}: any) {
	console.log(post);

	return ( 
		<div className='main-container blog-post'>
			<div>
				<h2>{post.title}</h2>
				<p>{post.date_posted.split('T')[0]}</p>
			</div>
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: [{params: {post_title: 'the-site-is-live'}}],
		fallback: false
	}
}

export async function getStaticProps(context) {
	const { params } = context;
    console.log(params)
    const post = await getPostData(params)

	return {
		props: {
			post
		}
	}
}

export default BlogPost;