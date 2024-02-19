import ProjectCard from './ProjectCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { useEffect, useState } from 'react';
const Projects = () => {
	const [projectData, setProjectData] = useState([...projects]);
	const FetchAPI = async () => {
        
    };

	useEffect(() => {
		FetchAPI;
	}, []);
	console.log(projectData);
	return (
		<section
			className='py-20 align-element'
			id='projects'>
			<SectionTitle text='web creations' />
			<div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
				{projectData.map((project) => {
					return (
						<ProjectCard
							key={project.id}
							{...project}
						/>
					);
				})}
			</div>
		</section>
	);
};
export default Projects;
