import SocialBar from './social_bar';
import styles from '../styles/header.module.css';
import NavMenu from './nav_menu';
import Image from 'next/image';
import DropdownIcon from './dropdown_icon';
import MobileNavMenu from './mobile_nav_menu';
import { useState } from 'react';

function Header() {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	function showMobileNav() {
		if(mobileNavOpen) {
			setMobileNavOpen(false);
		} else {
			setMobileNavOpen(true);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<Image
					src='/icons/chart_logo.svg'
					width={48}
					height={48}
					alt='Website Logo'
				/>
				<h1>Chartley Designs</h1>
				<div className={styles.social}>
					<SocialBar />
				</div>
				<DropdownIcon
					classname={styles.mobile}
					showMobileNav={showMobileNav}
					mobileNavOpen = {mobileNavOpen}
				/>
			</div>
			<MobileNavMenu mobileNavOpen={mobileNavOpen} />
			<NavMenu />
		</div>
	);
}

export default Header;
