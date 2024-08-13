import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ReactQueryProvider } from './react-query-provider';

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
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} flex flex-col min-h-lvh bg-secondary`}>
				<ReactQueryProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>

					<Toaster />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
