import styles from '@/styles/about_me.module.css';
import Image from 'next/image';

function AboutMe() {
	return (
		<>
			<div className={`${styles.container} main`}>
				<section className='main-container'>
					<p>
						Hello! My name is Carson Hartley. I am a web developer
						from the Calgary area in Alberta, Canada. I have a
						passion for creating things, sometimes from code,
						sometimes from wood.
					</p>

					<p>
						My current focus is learning web development,
						specifically front-end. My main area of focus is working
						with React, with an emphasis on designs that feel good
						to use and look the part.
					</p>
				</section>
				<Image
					className='main-container'
					src='/images/about_me_photo.jpg'
					alt='Photo of Me'
					width={600}
					height={600}
				></Image>
			</div>
		</>
	);
}

export default AboutMe;
