import { Header } from '@/components/header/Header';
import { cn } from '@/lib/utils';
import { LayoutStoreProvider } from '@/providers/LayoutStoreProvider';
import { ThemeProvider } from '@/providers/theme';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'CSS Layout Playground',
  description: 'Your CSS playground for layouting',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute='class'
          defaultTheme='system'
        >
          <LayoutStoreProvider>
            <Header />
            {children}
          </LayoutStoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
