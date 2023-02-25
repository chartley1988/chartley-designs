import  styles from '../styles/footer.module.css';
import SocialBar from './social_bar';

function Footer() {
	return (
		<div className={styles.container}>
			<SocialBar />
			<p>Carson Hartley © 2023</p>
		</div>
	);
}

export default Footer;
