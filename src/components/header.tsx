import SocialBar from './social_bar';
import styles from '../styles/header.module.css';
import NavMenu from './nav_menu';

function Header() {
	return (
		<div className={styles.container}>
			<h1>Chartley Designs</h1>
			<div className={styles.social}>
				<SocialBar />
			</div>
			<NavMenu />
		</div>
	);
}

export default Header;
