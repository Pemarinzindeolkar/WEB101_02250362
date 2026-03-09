import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from '@/components/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Tiktok Clone",
  description: 'A TikTok clone built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className">      
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
