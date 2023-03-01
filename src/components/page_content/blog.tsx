import styles from '../../styles/blog.module.css'
import PostListing from '@/components/blog_entry';




export default function Blog( {data}: any ) {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.blog}>
				{data &&
					data.map((post: any, index: number) => (
						<PostListing
							title={post.title}
							post_date={post.date_posted.split('T')[0]}
							content={post.content}
							post_id={post.post_id}
							key={index}
						/>
					))}
			</ul>
		</div>
	);
}



