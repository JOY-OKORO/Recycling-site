'use client';
import { MdClose, MdMenu } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const [contact, setContact] = useState(false);
	const [scroll, setScroll] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			setScroll(scrollTop > 150);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`${
				scroll ? 'fixed' : 'relative'
			} w-full h-20 drop-shadow-sm z-50 bg-white transition-all duration-700 transition-delay-500`}>
			<div className='container mx-auto px-4 h-full'>
				<div className='flex items-center justify-between h-full'>
					<p className='text-xl font-semibold'>BAOBA COMPANY LIMITED</p>

					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<ul className='flex items-center space-x-8'>
							{['Home', 'About', 'Products', 'Accreditation', 'Contact'].map(
								(item) => (
									<li key={item}>
										<a
											href='#'
											className='text-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white rounded'>
											{item}
										</a>
									</li>
								),
							)}
						</ul>
					</nav>

					{/* Mobile Navigation */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMenu(!isMenu)}
							className='p-2'>
							{isMenu ? (
								<MdClose className='text-3xl text-red-600' />
							) : (
								<MdMenu className='text-3xl text-gray-400' />
							)}
						</button>

						{isMenu && (
							<div
								ref={menuRef}
								className='absolute top-full right-0 w-64 bg-gray-800 shadow-xl rounded-lg mt-2 py-3 px-4'>
								<ul className='space-y-2'>
									{[
										'Home',
										'About',
										'Products',
										'Accreditation',
										'Contact',
									].map((item) => (
										<li key={item}>
											<a
												href='#'
												className='block py-2 px-4 text-white font-semibold hover:bg-gray-700 rounded-lg transition-colors duration-300'
												onClick={() => setIsMenu(false)}>
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
