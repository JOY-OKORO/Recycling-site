import React from 'react';
import SEO from './SEO';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import WhatWeDo from '@/components/WhatWeDo';
import Products from '@/components/Products';
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
			<WhatWeDo />
			<Products />
			<Accreditation />
			<Contact />
		</div>
	);
};

export default Home;
