// components/Accreditation.jsx
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
				<div className='flex flex-col items-center max-w-4xl mx-auto'>
					<p className='font-medium text-xl text-center mb-8'>
						We are fully registered with the Corporate Affairs Commission (CAC)
						of Nigeria and possess a valid Tax Identification Number (TIN),
						ensuring our commitment to legal compliance and business
						transparency.
					</p>
					<div className='flex flex-wrap justify-center gap-8'>
						<div className='w-full md:w-1/3 p-4'>
							<img
								src='/images/CAC-Logo.png'
								alt='Corporate Affairs Commission'
								className='mx-auto h-32 object-contain'
							/>
							<p className='text-center mt-2 font-medium'>
								Corporate Affairs Commission
							</p>
						</div>
						<div className='w-full md:w-1/3 p-4'>
							<img
								src='/images/TIN.jpg'
								alt='Tax Identification Number'
								className='mx-auto h-32 object-contain'
							/>
							<p className='text-center mt-2 font-medium'>
								Tax Identification Number
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accreditation;
