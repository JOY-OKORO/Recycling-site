import React from 'react';
import SEO from './SEO';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Accreditation from '@/components/Accreditation';

const Home = () => {
	return (
		<div>
			<SEO
				title='Recycling Website'
				description='Learn about recycling and its benefits'
			/>

			<Hero />
			<About />
			<Accreditation />
			<Contact />
		</div>
	);
};

export default Home;
