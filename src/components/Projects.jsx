import ProjectCard from './ProjectCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
const client = createClient({
	space: import.meta.env.VITE_SPACE_ID,
	environment: 'master',
	accessToken: import.meta.env.VITE_API_KEY,
});
const Projects = () => {
	const [projectData, setProjectData] = useState([...projects]);
	const [isLoading, setIsLoading] = useState(true);
	const FetchAPI = async () => {
		try {
			const response = await client.getEntries({ content_type: 'projects' });
			const data = response.items.map((item) => {
				const { title, url, text, image, git } = item.fields;
				const id = item.sys.id;
				const img = image?.fields?.file?.url;
				return { id, img, title, url, text, git };
			});
			setProjectData(data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		FetchAPI();
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
