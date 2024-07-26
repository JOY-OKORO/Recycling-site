// pages/contact.js
import React from 'react';
import PageContainer from '../components/PageContainer';
import Footer from '../components/Footer';

const Contact = () => {
	return (
		<>
			<PageContainer>
				<div
					className='max-w-2xl mx-auto'
					id='contact'>
					<h1 className='text-3xl font-bold text-center mb-6'>Contact Us</h1>
					<form className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700'>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								rows='4'
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
								required></textarea>
						</div>
						<div>
							<button
								type='submit'
								className='w-full px-4 py-2 bg-primary-100 text-white text-sm font-medium rounded-md shadow-sm hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:scale-95'>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</PageContainer>
		</>
	);
};

export default Contact;
