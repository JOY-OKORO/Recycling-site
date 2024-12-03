import React from 'react';
import Image from 'next/image';

const Products = () => {
	const products = [
		{
			title: 'PET Plastics',
			description:
				'Polyethylene Terephthalate (PET) is commonly used in beverage bottles, food containers, and synthetic fibers. We recycle PET into new packaging materials and polyester fibers.',
			image: '/images/PET.jpg',
		},
		{
			title: 'HDPE Plastics',
			description:
				'High Density Polyethylene (HDPE) is used in milk jugs, shampoo bottles, and plastic bags. Our recycling process converts HDPE into new containers, plastic lumber, and other durable products.',
			image: '/images/HDPE.jpg',
		},
		{
			title: 'PVC Plastics',
			description:
				'Polyvinyl Chloride (PVC) is used in construction materials, pipes, and medical devices. Our recycling process transforms PVC waste into new building materials and industrial products.',
			image: '/images/PVC.jpg',
		},
		// {
		// 	title: 'LDPE Plastics',
		// 	description:
		// 		'Low Density Polyethylene (LDPE) is found in squeeze bottles, plastic bags, and film packaging. We transform LDPE waste into new flexible packaging materials and construction products.',
		// 	image: '/ldpe-plastics.jpg',
		// },
		{
			title: 'PP Plastics',
			description:
				'Polypropylene (PP) is found in food containers, car parts, and packaging. We recycle PP into new consumer products, automotive parts, and industrial materials.',
			image: '/images/PP.jpg',
		},
		// {
		// 	title: 'PS Plastics',
		// 	description:
		// 		'Polystyrene (PS) is used in disposable cutlery, packaging foam, and CD cases. Our recycling solutions convert PS waste into new packaging materials and construction products.',
		// 	image: '/ps-plastics.jpg',
		// },
		// {
		// 	title: 'rPET',
		// 	description:
		// 		'Recycled Polyethylene Terephthalate (rPET) is our premium recycled product, transformed from PET waste into high-quality material for new bottles, containers, and textile fibers.',
		// 	image: '/rpet-plastics.jpg',
		// },
	];

	return (
		<div
			className='bg-gray-50 py-12'
			id='products'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-8'>Our Products</h2>
				<div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{products.map((product, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
							<div className='relative h-48 w-full'>
								<Image
									src={product.image}
									alt={product.title}
									fill
									style={{ objectFit: 'cover' }}
									className='transition-transform duration-300 hover:scale-105'
								/>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-4 text-primary-500'>
									{product.title}
								</h3>
								<p className='text-gray-600'>{product.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
