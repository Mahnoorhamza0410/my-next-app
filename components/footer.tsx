import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-black text-white text-center pt-20 pb-6 relative">
      {/* Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-[25px]">
       <Link href='/' passHref> 
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className='w-[163px] h-[163px] sm:w-[200px] sm:h-[200px]'
        />
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://t.me/RhinoFiWin"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#BD58C0] to-[#2CC8D8]"
        >
           <Image
          src="/icons/twitter-footer.svg"
          alt="twitter"
          width={200}
          height={200}
          className='w-[50px] h-[50px]'
        />
        </a>
        <a
          href="https://t.me/RhinoFiWin"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#BD58C0] to-[#2CC8D8]"
        >
           <Image
          src="/Vector.png"
          alt="Telegram-footer"
          width={200}
          height={200}
          className='w-[50px] h-[50px]'
        />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-sm">
        Copyright ©2025, Solidity Community.
        <br className="block sm:hidden" />
          All rights reserved.
        </p>
    </footer>
  );
}
