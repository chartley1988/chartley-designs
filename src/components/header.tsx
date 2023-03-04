import SocialBar from './social_bar';
import styles from '../styles/header.module.css';
import NavMenu from './nav_menu';
import Image from 'next/image';

function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<Image src="icons/chart_logo.svg" width={48} height={48} />
				<h1>Chartley Designs</h1>
				<div className={styles.social}>
					<SocialBar />
				</div>
			</div>
			<NavMenu />
		</div>
	);
}

export default Header;
