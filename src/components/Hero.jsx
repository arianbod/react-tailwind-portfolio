import React from 'react';
import HeroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
	return (
		<div className='bg-emerald-100 py-24'>
			<div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-7xl font-bold tracking-wider text-gray-700'>
						I'm Arian
					</h1>
					<p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
						{' '}
						Front-End Developer
					</p>
					<p className='mt-2 text-lg text-slate-700'></p>
				</article>
			</div>
			<div className='image-container '>
				<img
					src={HeroImg}
					alt='HeroImage'
				/>
			</div>
		</div>
	);
};

export default Hero;
