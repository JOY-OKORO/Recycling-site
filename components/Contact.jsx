'use client';
import { useState } from 'react';
import PageContainer from './PageContainer';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSubmitted(false);

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				setSubmitted(true);
				setFormData({ name: '', email: '', message: '' });
			} else {
				setError('Failed to send message. Please try again.');
			}
		} catch (err) {
			setError('Something went wrong.');
		}
	};

	return (
		<>
			<PageContainer>
				<div
					className='max-w-2xl mx-auto'
					id='contact'>
					<h1 className='text-3xl font-bold text-center mb-6'>Contact Us</h1>
					<form
						onSubmit={handleSubmit}
						className='space-y-6'>
						{/* Input fields */}
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
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm'
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
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
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm'
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
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
								className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm'
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								required></textarea>
						</div>
						<div>
							<button
								type='submit'
								className='w-full px-4 py-2 bg-primary-100 text-white text-sm font-medium rounded-md'>
								Send Message
							</button>
						</div>
					</form>
					{submitted && (
						<p className='text-green-600 mt-4'>Message sent successfully!</p>
					)}
					{error && <p className='text-red-600 mt-4'>{error}</p>}
				</div>
			</PageContainer>
		</>
	);
};

export default Contact;
