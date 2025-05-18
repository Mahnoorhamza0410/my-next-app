'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');

  const setActive = (item: string) => {
    setActiveMenu(item);
    setMenuOpen(false);
  };

  const copyAddress = () => {
    const address = '0x456548A9B56eFBbD89Ca0309edd17a9E20b04018';
    navigator.clipboard.writeText(address).then(() => {
      console.log('Address copied!');
    }).catch((err) => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#01010194] backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header */}
      <div className={`${menuOpen ? 'backdrop-blur-md' : ''}`}>
        <header className="fixed top-0 left-0 w-full z-40 bg-gray-200/10 text-white h-[65px] sm:h-[100px] flex items-center justify-between px-6">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center w-full gap-10 relative">
            <Link href="/" className="text-[16px] px-4 font-normal">
              BUY RHINO
            </Link>

            {/* Logo + Copy Icon */}
            <div className="relative px-4 cursor-pointer select-none" onClick={(e) => e.preventDefault()}>
              <Image
                src="/Rhino-logo.png"
                alt="Rhino-logo"
                width={180}
                height={55}
                className="object-contain w-auto h-[40px] sm:h-[55px]"
              />
              <Image
                src="/icons/copy.svg"
                alt="Copy"
                width={20}
                height={24}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer forcopyicon"
                onClick={(e) => {
                  e.preventDefault();
                  copyAddress();
                }}
              />
            </div>

            <Link href="/pool" className="text-[16px] px-4 font-normal">
              LIQUIDITY POOLS
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="absolute right-[200px] z-50"
              aria-label="Toggle Menu"
            >
              <Image src="/icons/menu-icon.svg" alt="Menu Icon" width={28} height={28} />
            </button>
          </div>

          {/* Mobile Logo + Copy Icon */}
          <div className="flex justify-center items-center w-full lg:hidden px-4">
            <div className="relative cursor-pointer select-none" onClick={(e) => e.preventDefault()}>
              <Image
                src="/Rhino-logo.png"
                alt="Logo"
                width={160}
                height={50}
                className="object-contain h-[35px] sm:h-[50px]"
              />
              <Image
                src="/icons/copy.svg"
                alt="Copy"
                width={20}
                height={24}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  copyAddress();
                }}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden absolute right-6 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mobile Menu"
          >
            <Image src="/icons/menu-icon.svg" alt="Menu Icon" width={28} height={28} />
          </button>
        </header>
      </div>

      {/* Sidebar */}
      {menuOpen && (
        <div className="fixed top-[10px] bottom-[10px] right-[10px] w-[315px] z-50">
          <div
            className="w-full h-full bg-cover bg-center text-white rounded-[10px] shadow-lg"
            style={{ backgroundImage: 'url("/menu-bg-image.png")' }}
          >
            <div className="h-full overflow-y-auto custom-scrollbar-hide rounded-[10px]">
              <div className="flex flex-col pt-[20px] px-6 pb-[20px] gap-[18px] relative">

                {/* Sidebar Logo */}
                <div className="flex justify-center mb-8">
                  <Image src="/sidebar-logo.png" alt="sidebar-logo" width={100} height={100} />
                </div>

                {/* Close Button */}
                <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                  <Image src="/icons/close-icon.svg" alt="Close Icon" width={28} height={28} />
                </button>

                {/* Menu Items */}
                {[
                  { href: '/', label: 'Home', id: 'home' },
                  { href: '#', label: 'Buy (RHINO) Token', id: 'buy' },
                  { href: '/pool', label: 'Liquidity Pool', id: 'pool' },
                  { href: '/leaderboard', label: 'LeaderBoard', id: 'leaderboard' },
                  { href: '#', label: 'Rhinofi Tokenomics', id: 'tokenomics' },
                  { href: '#', label: 'Holder Benefits', id: 'benefits' },
                  { href: '/pool', label: 'Rhinofi Brand Assets', id: 'assets' },
                  { href: '/whitepaper', label: 'WhitePaper', id: 'whitepaper' },
                ].map(item => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setActive(item.id)}
                    className={`flex items-center gap-2 px-3 ${
                      activeMenu === item.id ? 'text-[#D458C0] bg-[#8F6CFA35] rounded-[5px] py-[10px]' : ''
                    }`}
                  >
                    <Image src="/icons/arrow-pointed.svg" alt="Arrow" width={16} height={16} className="object-contain" />
                    {item.label}
                  </Link>
                ))}

                {/* Divider + Social Icons */}
                <div>
                  <Image src="/divider.png" alt="Divider" width={300} height={30} className="object-contain mx-auto" />
                  <div className="flex justify-start gap-4 mt-4 mb-4">
                    <a
                      href="https://twitter.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#BD58C0] to-[#2CC8D8]"
                    >
                      <img src='/icons/X-icon.svg' alt='X-icon' className=''/>
                    </a>
                    <a
                      href="https://instagram.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#BD58C0] to-[#2CC8D8]"
                    >
                      <img src='/Vector.png' alt='Telegram-icon' className=''/>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
