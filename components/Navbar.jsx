'use client';
import { MdClose, MdMenu } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const [contact, setContact] = useState(false);
	const menuRef = useRef(null);
	return (
		<header className=' px-32 z-50 w-screen h-20 drop-shadow-xl'>
			{/* Desktop */}
			<div className='hidden md:flex w-full h-full items-center justify-between shadow-white'>
				<p className=''>Recycle</p>
				<div className='flex items-center gap-8'>
					<ul className='flex item-center gap-8 ml-auto'>
						<li
							className={`cursor-pointer  hover:text-gray-700 duration-100 transition-all ease-in-out text-xl font-semibold`}>
							Home
						</li>
						<li
							className={`cursor-pointer  hover:text-gray-700  duration-100 transition-all ease-in-out text-xl font-semibold`}>
							About
						</li>
						<li
							className={`cursor-pointer hover:text-gray-700 duration-100 transition-all ease-in-out text-xl font-semibold`}>
							Service
						</li>
						<li
							className={`cursor-pointer hover:text-gray-700  duration-100 transition-all ease-in-out text-xl font-semibold `}>
							Potfolio
						</li>
					</ul>
				</div>
			</div>
			{/* Mobile */}
			<div className='flex items-center justify-between md:hidden w-full h-full'>
				<p className='logo'>Daniel Agbeni</p>
				<div
					className='relative'
					onClick={() => setIsMenu(!isMenu)}>
					{isMenu ? (
						<MdClose className='text-3xl font-extrabold text-red-600 duration-500' />
					) : (
						<MdMenu className='text-3xl font-bold text-gray-400 duration-500' />
					)}

					{isMenu && (
						<div
							ref={menuRef}
							className='w-64 bg-gray-800 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 py-3 px-3 z-50'>
							<ul className='flex flex-col gap-1'>
								<li
									className='cursor-pointer font-extrabold hover:bg-gray-600 text-white duration-500 rounded-lg transition-all ease-in-out px-4 py-2'
									onClick={() => setIsMenu(false)}>
									Home
								</li>
								<li
									className='cursor-pointer font-extrabold hover:bg-gray-600 text-white duration-500 rounded-lg transition-all ease-in-out px-4 py-2'
									onClick={() => setIsMenu(false)}>
									About
								</li>
								<li
									className='cursor-pointer font-extrabold hover:bg-gray-600 text-white duration-500 rounded-lg transition-all ease-in-out px-4 py-2'
									onClick={() => setIsMenu(false)}>
									Service
								</li>
								<li
									className='cursor-pointer font-extrabold hover:bg-gray-600 text-white duration-500 rounded-lg transition-all ease-in-out px-4 py-2'
									onClick={() => setIsMenu(false)}>
									Potfolio
								</li>
								<li
									className='cursor-pointer font-extrabold hover:bg-gray-600 text-white duration-500 rounded-lg transition-all ease-in-out px-4 py-2'
									onClick={() => {
										setIsMenu(false);
										setContact(!contact);
									}}>
									Contact
								</li>
							</ul>
						</div>
					)}
				</div>
				{contact ? <Contact click={setContact} /> : ''}
			</div>
		</header>
	);
};

export default Navbar;
