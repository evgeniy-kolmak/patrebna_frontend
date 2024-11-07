import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Providers } from '@/app/providers';
import '@/app/globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Patrebna bot - бот парсер',
  description: 'Чат-бот для отслеживания новых объявлений Kufar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
