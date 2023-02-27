import styles from '@/styles/blog.module.css';
import PostListing from '@/components/blog_entry';


function Blog() {
	const blogPosts: any = []

	return (
		<ul className={styles.blog}>
			{blogPosts &&
				blogPosts.map((post: any, index: number) => (
					<PostListing
						title={post.title}
						post_date={post.date_posted.split('T')[0]}
						content={post.content}
						post_id={post.post_id}
						key={index}
					/>
				))}
		</ul>
	);
}

export default Blog;
