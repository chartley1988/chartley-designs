import SocialBar from './social_bar';
import styles from '../styles/header.module.css';

function Header() {
	return (
		<div className={styles.container}>
			<h1>Chartley Designs</h1>
			<SocialBar />
		</div>
	);
}

export default Header;
