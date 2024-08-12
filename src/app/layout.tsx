import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const poppins = Poppins({ subsets: ['latin-ext'], weight: '400' });

export const metadata: Metadata = {
	title: {
		template: '%s - lens-i',
		default: 'lens-i'
	},
	description: 'The social media app for turks :('
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} flex flex-col min-h-lvh bg-secondary`}>
				<ThemeProvider
					attribute={'class'}
					defaultTheme="system"
					themes={['system', 'dark', 'light']}
					enableSystem={true}
					disableTransitionOnChange={true}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
