import styles from '../styles/projects.module.css'
import projects_data from './data/projects_data';
import Image from 'next/image';

const iterate = (obj: any) => {
	const objectArray: Object[] = [];
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			objectArray.push(obj[key]);
		}
	});
	return objectArray;
};

const projectArray = iterate(projects_data);

const listProjects = projectArray.map((project: any) => (
	<li className='project main-container' key={project.key_value}>
		<div className='project-header'>
			<h3>{project.title}</h3>
			<div>
				<a href={project.github_url}>
					<Image
						src='/icons/github-mark-white.svg'
						alt='GitHub Logo'
						width={32}
						height={32}
					/>
				</a>
			</div>
		</div>
		<div className='content-wrapper'>
			<p>{project.description}</p>
			<Image
				src={project.image_src}
				alt='Project Screenshot'
				width={1440}
				height={900}
				style={{
					width: '100%',
					height: 'auto',
				}}
			/>
		</div>
		<a href={project.live_url}>Check it out!</a>
	</li>
));

function Projects() {
	return (
		<div className={styles.projects}>
			<h2>Projects</h2>
			<ul>{listProjects}</ul>
		</div>
	);
}

export default Projects;
