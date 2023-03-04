import styles from '../styles/social_bar.module.css';
import Image from 'next/image';

function SocialBar() {
	return (
		<div className={styles.container}>
			<a href='mailto:chartley1988@gmail.com'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6'
				>
					<title>Email Me!</title>
					<path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
					<path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
				</svg>
			</a>

			<a href='https://github.com/chartley1988'>
				<Image
					src='/icons/github-mark-white.svg'
					alt='Github Logo'
					width={32}
					height={32}
				></Image>
			</a>

			<a href='https://twitter.com/chartley1988'>
				<Image
					src='/icons/twitter_blue.svg'
					alt='Twitter Logo'
					width={32}
					height={32}
				></Image>
			</a>

			<a href='https://www.instagram.com/chartley1988/'>
				<Image
					src='/icons/instagram_gradient.svg'
					alt='Instagram Logo'
					width={32}
					height={32}
				></Image>
			</a>
		</div>
	);
}

export default SocialBar;
