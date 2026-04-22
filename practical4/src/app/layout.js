import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from '@/components/layout/MainLayout';
import { AuthProvider } from '@/contexts/authContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "TikTok Clone",
  description: 'A TikTok clone built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <MainLayout>
            {children}
          </MainLayout>
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}