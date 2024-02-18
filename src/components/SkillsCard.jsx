import React from 'react';

const SkillsCard = ({ id, title, icon, text }) => {
	return (
		<article>
			<span>{icon}</span>
			<h4 className='font-bold mt-6'>{title}</h4>
			<p className='mt-2 text-slate-500'>{text}</p>
		</article>
	);
};

export default SkillsCard;
