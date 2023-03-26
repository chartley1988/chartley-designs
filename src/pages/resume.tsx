import Head from 'next/head';
import styles from '../styles/resume.module.css';
import Image from 'next/image';

export default function Resume() {
	return (
		<>
			<Head>
				<title>Chartley Designs - Resume</title>
				<meta name='description' content='Resume - Carson Hartley' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.container}>
				<SideBar />
				<Content />
			</main>
		</>
	);
}

function SideBar() {
	return (
		<div className={styles['side-bar']}>
			<ProfilePhoto />
			<br />
			<Badge />
			<br />
			<Contact />
		</div>
	);
}

function ProfilePhoto() {
	return (
		<Image
			className={styles.photo}
			src='/images/resume_photo.webp'
			width={100}
			height={100}
			alt='Picture of Carson'
		/>
	);
}

function Badge() {
	return (
		<div>
			<h2 className={styles.badge}>Carson Hartley</h2>
			<hr className={styles['badge']} />
			<p className={styles.badge}>Web Developer</p>
		</div>
	);
}

function Contact() {
	return (
		<div className={styles.contact}>
			<a href='mailto:chartley1988@gmail.com' className={styles.contact}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className={styles.contact}
				>
					<title>Email Me!</title>
					<path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
					<path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
				</svg>
				chartley1988@gmail.com
			</a>

			<a href='tel:15878963349' className={styles.contact}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className={styles.contact}
				>
					<path
						fillRule='evenodd'
						d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
						clipRule='evenodd'
					/>
				</svg>
				587-896-3349
			</a>
		</div>
	);
}

function Content() {
	return (
		<div className={styles[`content-wrapper`]}>
			<h1 className={styles.content}>Carson Hartley Resume</h1>
			<Section title='Summary' content={Summary()} />
			<Section title='Projects' content={Projects()} />
		</div>
	);
}

type SectionProps = {
	title: string;
	content: JSX.Element;
};

function Section({ title, content }: SectionProps) {
	return (
		<section className={styles['content-section']}>
			<div className={styles['section-header']}>
				<h2 className={styles.content}>{title}</h2>
				<div></div>
			</div>
			<div>{content}</div>
		</section>
	);
}

function Summary() {
	return (
		<div className={styles[`content-child`]}>
			<p className={styles.content}>
				A self-taught web developer with a passion for seeing bright
				ideas come to life. Extensive experience in product sales and
				forming productive relationships with clients. Completed several
				apps and websites using latest web development technology, and
				runs a personal freelancing business.
			</p>
		</div>
	);
}

function Projects() {
	return (
		<div className={styles[`content-child`]}>
			<h3 className={styles.content}>Summit Calculator</h3>
			<p className={styles.content}>
				A web-based calculator that functions much like a spread sheet.
				A user may have as many lines as they would like, and each line
				renders a result. A line can also reference the result of
				another line, making long complex chains of calculations
				possible. Made using Vite and React. The main challenge was
				writing logic to parse human written formulas into a computer
				solvable function to output a result. This was done using an
				algorithm called &quot;The Shunting Yard&quot;.
			</p>
			<br />
			<p className={styles.content}>
				<strong>Tech Used</strong>: React, Vite
			</p>

			<br />

			<h3 className={styles.content}>
				Card Games Engine, using Solitaire as an example
			</h3>
			<p className={styles.content}>
				The goal of this collaborative project was to make a strong
				foundation for rapidly creating browser-based card games. The
				foundation included functions for animating card actions such as
				flipping, and moving from one deck to another. Also included
				layout tools, and deck functions such as shuffling and dealing.
				Solitaire was made as an example. Another goal of this project
				was to construct it with as minimal technology as possible, so
				no other libraries were used except for Webpack and Babel.
			</p>
			<br />
			<p className={styles.content}>
				<strong>Tech Used</strong>: HTML, CSS, Javascript
			</p>

			<br />

			<h3 className={styles.content}>
				Personal Website
			</h3>
			<p className={styles.content}>
				A personal portfolio website. Functions as a showcase of personal projects, as well as written articles in the blog. Blog data is supplied through Sanity as a CMS. Site was constructed with Next.JS.
			</p>
			<br />
			<p className={styles.content}>
				<strong>Tech Used</strong>: React, Next.JS, Sanity CMS
			</p>
		</div>
	);
}