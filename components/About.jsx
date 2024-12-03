import React from 'react';

const About = () => {
	return (
		<div
			className='bg-gradient-to-b from-white to-gray-50'
			id='about'>
			<div className='container mx-auto px-4 py-16'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-4xl font-bold text-center mb-8 text-green-800'>
						About BAOBA COMPANY LIMITED
					</h2>

					<div className='space-y-8'>
						<div className='bg-white p-6 rounded-lg shadow-md'>
							<h3 className='text-2xl font-semibold text-green-700 mb-4'>
								Our Mission
							</h3>
							<p className='text-lg leading-relaxed text-gray-700'>
								BAOBA COMPANY LIMITED is at the forefront of revolutionizing
								plastic recycling. We are driven by our commitment to minimize
								environmental impact through innovative solutions that transform
								plastic waste into valuable resources. Using cutting-edge
								technology and sustainable processes, we're building a cleaner
								future for our planet.
							</p>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-md'>
							<h3 className='text-2xl font-semibold text-green-700 mb-4'>
								Our Approach
							</h3>
							<p className='text-lg leading-relaxed text-gray-700'>
								At BAOBA, we firmly believe in the potential of every piece of
								plastic to be given new life. Through strategic partnerships
								with businesses, communities, and governments, we implement
								comprehensive recycling programs that make a real difference.
								Our collaborative approach ensures maximum impact and
								sustainable outcomes.
							</p>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-md'>
							<h3 className='text-2xl font-semibold text-green-700 mb-4'>
								Our Vision
							</h3>
							<p className='text-lg leading-relaxed text-gray-700'>
								We envision a world where plastic waste is transformed into
								opportunity. Through education, innovation, and partnership,
								we're creating pathways to a more sustainable future. Join us in
								our mission to protect our environment and create lasting
								positive change for generations to come.
							</p>
						</div>

						<div className='text-center mt-8'>
							{/* <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300'>
								Join Our Mission
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
