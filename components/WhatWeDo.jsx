import React from 'react';

const WhatWeDo = () => {
	return (
		<div
			className='bg-gray-50 py-12'
			id='what-we-do'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-8'>What We Do</h2>
				<div className='grid md:grid-cols-3 gap-8'>
					{/* Collection */}
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-4 text-primary-500'>
							Collection
						</h3>
						<p className='text-gray-600'>
							We implement comprehensive plastic collection systems, partnering
							with communities and businesses to gather plastic waste
							efficiently. Our collection network ensures that plastic materials
							are properly sourced and prepared for recycling.
						</p>
					</div>

					{/* Sorting */}
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-4 text-primary-500'>
							Sorting & Processing
						</h3>
						<p className='text-gray-600'>
							Our advanced sorting facilities separate different types of
							plastics using state-of-the-art technology. We carefully
							categorize materials based on their composition, ensuring optimal
							recycling outcomes and maintaining high-quality standards.
						</p>
					</div>

					{/* Recycling */}
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-4 text-primary-500'>
							Recycling & Production
						</h3>
						<p className='text-gray-600'>
							Through innovative recycling processes, we transform sorted
							plastics into valuable raw materials and new products. Our
							sustainable production methods help reduce environmental impact
							while creating high-quality recycled materials for various
							industries.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeDo;
