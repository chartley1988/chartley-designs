import styles from '../styles/post.module.css';
import Link from 'next/link';

interface BlogPostType {
	title: string;
	post_date: string;
	content: string;
	post_id: string;
}

function PostListing({ title, post_date, post_id }: BlogPostType) {
	return (
		<li className={styles['blog-post']}>
			<Link
				href={`/blog/${post_id}`}
				className={`${styles.container} ${styles['blog-post']} main-container`}
			>
				{title}
			<p className={styles['blog-post']}><em>{post_date}</em></p>
			</Link>
		</li>
	);
}

export default PostListing;
