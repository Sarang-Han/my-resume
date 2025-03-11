import Head from 'next/head';
import Header from './Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sarang Han의 이력서</title>
        <meta name="description" content="한사랑의 이력서입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center py-6 text-gray-500">
          © {new Date().getFullYear()} Sarang Han. All rights reserved.
        </footer>
      </div>
    </>
  );
}