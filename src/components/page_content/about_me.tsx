import styles from '../../styles/about_me.module.css'
import Image from 'next/image';
import ContactForm from '../contact_form';
import Link from 'next/link';

function AboutMe() {
	return (
		<>
			<div className={`${styles.container} main`}>
				<h2>About Me</h2>
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
						to use and look the part. Check out the main page for some examples of stuff I&apos;ve been working on!
					</p>
				</section>

				<section className='main-container'>
				<h3>Contact Me</h3>
				<p>Feel free to email me at <a href="chartley1988@gmail.com">chartley1988@gmail.com</a> or shoot me a message on the form below.</p>

				<br />

				<h3>Resume</h3>
				<Link href={`/resume`} target="_blank">Web Version</Link>
				<br />
				<Link href={`/documents/text_resume.pdf`} target="_blank">PDF Version</Link>
				<br /><br />

				</section>

				<ContactForm />

				<Image
					className='main-container'
					src='/images/about_me_photo.jpg'
					alt='Photo of Me'
					width={800}
					height={600}
				></Image>
			</div>
		</>
	);
}

export default AboutMe;
