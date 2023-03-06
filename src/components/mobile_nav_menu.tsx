import styles from '../styles/mobile_nav_menu.module.css';
import Link from 'next/link';
import { useState } from 'react';

function MobileNavMenu( {mobileNavOpen}: any ) {
	

	return (
		<div className={ mobileNavOpen ? `${styles.container} ${styles.show}` : `${styles.container}` }>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				<li>
					<Link href='/about_me'>About Me</Link>
				</li>
			</ul>
		</div>
	);
}

export default MobileNavMenu;
