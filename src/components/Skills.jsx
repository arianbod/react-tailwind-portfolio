import React from 'react';
import SkillsCard from './SkillsCard';
import SectionTitle from './SectionTitle';
import { skills } from '../data';
const Skills = () => {
	return (
		<section
			className='py-20 align-element'
			id='skills'>
			<SectionTitle />
			{skills.map((skillItem) => {
				return (
					<SkillsCard
						key={skillItem.id}
						{...skillItem}
					/>
				);
			})}
		</section>
	);
};

export default Skills;
