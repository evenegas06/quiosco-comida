import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Quiosco de comida',
	description: 'Quiosco de comida',
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={`${inter.className} bg-gray-100`}>{children}</body>
		</html>
	);
}
