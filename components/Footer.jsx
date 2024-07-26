// components/Footer.js
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-wrap justify-between'>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<h2 className='text-xl font-bold mb-4'>BAOBA COMPANY LIMITED</h2>
						<p>
							Dedicated to revolutionizing plastic recycling for a sustainable
							future.
						</p>
					</div>
					<div className='w-full md:w-1/3 mb-6 md:mb-0'>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<ul>
							<li className='mb-2'>
								<a
									href='/'
									className='hover:underline'>
									Home
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='/about'
									className='hover:underline'>
									About Us
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='/services'
									className='hover:underline'>
									Services
								</a>
							</li>
							<li className='mb-2'>
								<a
									href='/contact'
									className='hover:underline'>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div className='w-full md:w-1/3'>
						<h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='hover:text-gray-400'>
								<svg
									className='w-6 h-6 fill-current'
									viewBox='0 0 24 24'>
									<path d='M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zm-3.72 0H3.72v14.88h16.56V4.56zm-6.24 2.64h-1.92c-1.68 0-2.28.84-2.28 2.16v2.88h4.56l-.72 4.56h-3.84V24H7.68v-7.2H3.72v-4.56h3.96V8.04C7.68 3.96 9.72 2 13.32 2c1.68 0 3 .12 3.36.18v3.6z' />
								</svg>
							</a>
							<a
								href='#'
								className='hover:text-gray-400'>
								<svg
									className='w-6 h-6 fill-current'
									viewBox='0 0 24 24'>
									<path d='M22.54 6.42c-.77.34-1.6.57-2.46.67a4.27 4.27 0 0 0 1.88-2.36c-.83.5-1.74.86-2.71 1.05A4.26 4.26 0 0 0 16.8 4a4.3 4.3 0 0 0-4.28 4.28c0 .34.04.68.1 1-3.56-.18-6.7-1.88-8.8-4.46-.37.64-.58 1.38-.58 2.18 0 1.5.76 2.84 1.94 3.62-.71-.02-1.38-.22-1.96-.54v.05c0 2.08 1.48 3.82 3.45 4.22-.36.1-.75.15-1.15.15-.28 0-.55-.03-.82-.07.55 1.74 2.16 3.01 4.05 3.05a8.62 8.62 0 0 1-5.33 1.84c-.35 0-.69-.02-1.03-.06 1.9 1.21 4.16 1.91 6.58 1.91 7.9 0 12.22-6.55 12.22-12.23 0-.18 0-.36-.01-.54a8.77 8.77 0 0 0 2.14-2.25z' />
								</svg>
							</a>
							<a
								href='#'
								className='hover:text-gray-400'>
								<svg
									className='w-6 h-6 fill-current'
									viewBox='0 0 24 24'>
									<path d='M12 0C5.37 0 0 5.37 0 12c0 4.84 3.11 8.94 7.44 10.36.54.1.74-.23.74-.51 0-.25-.01-.91-.01-1.79-3.02.65-3.65-1.46-3.65-1.46-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.66.07-.66 1.08.07 1.64 1.1 1.64 1.1.96 1.63 2.52 1.16 3.14.88.1-.7.38-1.16.69-1.43-2.41-.28-4.95-1.2-4.95-5.35 0-1.18.42-2.16 1.1-2.93-.11-.28-.48-1.42.1-2.96 0 0 .9-.29 2.95 1.12a10.29 10.29 0 0 1 5.36 0C17.14 6.16 18 6.45 18 6.45c.58 1.54.22 2.68.1 2.96.69.77 1.1 1.75 1.1 2.93 0 4.16-2.55 5.06-4.98 5.33.39.34.74 1.02.74 2.06 0 1.49-.01 2.69-.01 3.05 0 .28.2.62.76.51C20.89 20.94 24 16.84 24 12c0-6.63-5.37-12-12-12z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className='text-center mt-8'>
					<p>&copy; 2024 BAOBA COMPANY LIMITED. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
