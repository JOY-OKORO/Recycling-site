import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'BAOBA COMPANY LIMITED',
	description:
		"At BAOBA COMPANY LIMITED, we're committed to transforming plastic waste into sustainable resources. Join us in creating a cleaner, greener future by reducing environmental impact through innovative recycling solutions.",
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'http://baobacompanylimited.com',
		site_name: 'BAOBA COMPANY LIMITED',
		images: [
			{
				url: 'http://baobacompanylimited.com/',
				width: 1200,
				height: 630,
				alt: 'BAOBA COMPANY LIMITED',
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
