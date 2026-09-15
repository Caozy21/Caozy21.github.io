import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import LoadingAnimation from '@/components/common/LoadingAnimation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Zhuoya Cao | PhD Student at University of Toronto',
	description: 'Personal website of Zhuoya Cao, a PhD student at the University of Toronto, showcasing academic achievements, astronomy research projects, and study notes.',
	keywords: 'Zhuoya Cao, Astronomy, Researcher, University of Toronto, UofT, PhD Student, Astronomical Research, Student Portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="shortcut icon" href="/flask.png" type="image/x-icon" />
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<LoadingAnimation />
					<Navbar />
					<main className="min-h-screen">
						{children}
					</main>
					<Footer />
					<ThemeToggle />
					<Toaster position="bottom-right" />
				</ThemeProvider>
			</body>
		</html>
	);
}
