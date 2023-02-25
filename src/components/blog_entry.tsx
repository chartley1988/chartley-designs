import styles from '../styles/post.module.css'
import Link from 'next/link'

interface BlogPostType {
    title: string,
    post_date: string,
    content: string,
    post_id: string,
}

function PostListing ({title, post_date, post_id}: BlogPostType) {
    return <li className={`${styles.container} main-container`}>
        <Link href={`/blog/[entry]`}>
            {title}
        </Link>
            <p>{post_date}</p>
    </li>
}

export default PostListing