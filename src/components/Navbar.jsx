import React from 'react';
import { links } from '../data';
const Navbar = () => {
	return (
		<nav className='bg-emerald-100'>
			<div className='align-sections py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
				<h2 className='text-3xl font-bold'>
					Web<span className='text-emerald-600'>Dev</span>
				</h2>
				<ul className='flex gap-x-3'>
					{links.map((menuItem) => {
						const { id, href, text } = menuItem;
						return (
							<li
								key={id}
								className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>
								<a href={href}>{text}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
