import styles from '../styles/nav_menu.module.css';
import Link from 'next/link';

function NavMenu() {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				<li>
					<Link href='/about-me'>About Me</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavMenu;
