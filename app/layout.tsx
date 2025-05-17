import './globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Abinash Kumar Singh | Account Manager & Financial Advisor',
  description: 'Professional portfolio of Abinash Kumar Singh, an Account Manager and Financial Advisor with expertise in accounting, insurance, mutual funds, and business registration services.',
  keywords: ['Account Manager', 'Financial Advisor', 'Max Life Insurance', 'Mutual Funds', 'Business Registration', 'GST Filing', 'Tax Return', 'Tally ERP'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${raleway.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}