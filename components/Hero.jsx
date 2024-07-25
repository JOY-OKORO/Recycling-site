'use client';

const Hero = () => {
	const backgroundStyle = {
		backgroundImage: `url(/plastic.jpeg)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	};

	return (
		<div
			style={backgroundStyle}
			className='w-full h-[75vh] flex items-center justify-center text-white'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl backdrop-blur-sm bg-opacity-10 bg-white rounded-xl p-4'>
					<h1 className='font-bold text-4xl md:text-5xl mb-4'>
						BAOBA COMPANY LIMITED
					</h1>
					<p className='text-xl md:text-2xl font-semibold'>
						At BAOBA COMPANY LIMITED, we're dedicated to transforming the way we
						handle plastic waste. Our mission is to reduce environmental impact
						by providing efficient, innovative recycling solutions. Join us in
						our commitment to creating a cleaner, greener future. Together, we
						can turn plastic waste into sustainable resources and protect our
						planet for generations to come.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
