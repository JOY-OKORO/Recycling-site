// components/Accreditation.js
import Image from 'next/image';
import React from 'react';

const Accreditation = () => {
	return (
		<div
			className='bg-gray-100 py-12'
			id='accreditation'>
			<div className='container mx-auto px-4'>
				<h2 className='text-2xl font-bold text-center mb-8'>
					Our Accreditations
				</h2>
				<div className='flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-6'>
					<p className='font-medium text-xl'>
						In addition to developing state of the art facilities, we also
						ensure that our products are certified by the European Food Safety
						Authority (EFSA), U.S. food and drug administration (FDA), Standard
						Organization of Nigeria (SON), and the Halal Certification
						Authority.
					</p>
					<div className='w-1/2 md:w-1/4 p-4'>
						<img
							src='/accreditation1.webp'
							alt='Accreditation 1'
							className='mx-auto'
						/>
					</div>
					<div className='w-1/2 md:w-1/4 p-4'>
						<img
							src='/accreditation2.webp'
							alt='Accreditation 2'
							className='mx-auto'
						/>
					</div>
					<div className='w-1/2 md:w-1/4 p-4'>
						<img
							src='/accreditation3.webp'
							alt='Accreditation 3'
							className='mx-auto'
						/>
					</div>
					<div className='w-1/2 md:w-1/4 p-4'>
						<img
							src='/accreditation4.webp'
							alt='Accreditation 4'
							className='mx-auto'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accreditation;
