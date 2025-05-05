// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/header';
import Footer from '../components/footer';
// import UpperFooterImage from '../components/UpperFooterImage';
import { Poppins, Kumbh_Sans, Open_Sans } from 'next/font/google';
import { Particles } from "@/components/magicui/particles";

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kumbh-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'RhinoFi',
  description: 'App with shared layout',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${kumbhSans.variable} ${poppins.variable} ${openSans.variable}`}>
      <body className="relative bg-black text-white">
        <div className="fixed inset-0 -z-10">
          <Particles />
        </div>
        <Header />
        <main>
          {children}
        </main>
        {/* <UpperFooterImage /> */}
        <Footer />
      </body>
    </html>
  );
}
