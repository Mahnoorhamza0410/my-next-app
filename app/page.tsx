'use client';
import { useState } from 'react';
import BannerLayout from '@/components/BannerLayout';
import CountdownTimer from '@/components/CountdownTimer';
import CustomVideo from '@/components/CustomVideo';
import TwoSectionLayout from '@/components/TwoSectionLayout';
import ThumbGallerySlider from '@/components/ThumbGallerySlider';
// import TokenTabsWithIframe from '@/components/TokenTabsWithIframe';
import BuyRhino from '@/components/textbg/BuyRhino';
import RhinoFi from '@/components/textbg/RhinoFi';
import SupplyTab from '@/components/SupplyTab';
import IframeEmbed from '@/components/IframeEmbed';

export default function Page() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    const address = '0x456548A9B56eFBbD89Ca0309edd17a9E20b04018';
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch((err) => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <main>
      {/* Banner Section */}
      <div className="relative w-full">
        {/* Main Banner Content */}
        <BannerLayout>
          <div className="pb-[115px] sm:pb-[200px] sm:mt-[150px]">
            <h1
              className="text-transparent bg-clip-text font-bold text-[40px] sm:text-[60px] capitalize leading-[130%] ml-0 sm:ml-[10px]"
              style={{
                backgroundImage: 'linear-gradient(to bottom, white, #ADADAD)',
              }}
            >
              THE FIRST EVER
            </h1>
            <p className="text-white font-light text-[20px] sm:text-[38px] leading-[118%]">
              Hyper Deflationary, Dynamically Taxed,<br /> Multi-Rewards Machine
            </p>

            {/* Copy Address */}
            <div className='flex items-center justify-center sm:mt-[20px] mt-[28px] gap-2'>
              <p
                className='text-[22px] font-light leading-[100%] cursor-pointer'
                onClick={copyAddress}
                title="Click to copy address"
              >
                RHINO Token
              </p>
              <img
                src="/icons/copy.svg"
                alt="Copy Icon"
                className="w-[20px] h-[20px] cursor-pointer"
                onClick={copyAddress}
                title="Copy address"
              />
              {copied && (
                <span className="ml-2 text-sm text-green-400">Copied!</span>
              )}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center w-full sm:mt-[20px] mt-[28px]">
              <a
                href="#"
                className="inline-flex items-center uppercase sm:h-[auto] h-[50px] sm:w-[auto] w-[340px] justify-center mb-[20px] px-[32px] sm:px-[47px] py-[9px] sm:py-[7px] font-medium text-[18px] sm:text-[20px] rounded-[500px] bg-gradient-to-r from-[#BB57BF] via-[#2E4B94] to-[#2CC8D8] text-white leading-[48px]"
              >
                Join The Stampede
                <img
                src="/icons/Telegram-btn.svg"
                alt="Telegram-btn"
                className="w-[36px] h-[37px] cursor-pointer ml-2"
                
              />
              </a>
            </div>
          </div>
        </BannerLayout>

        {/* Countdown Timer pinned to the bottom of banner */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <CountdownTimer />
        </div>
      </div>
      {/* Other Sections */}
      <CustomVideo />
      <SupplyTab />
      <TwoSectionLayout />
      <RhinoFi />
      <ThumbGallerySlider />
      <BuyRhino />
      {/* <TokenTabsWithIframe /> */}
      <IframeEmbed />
    </main>
  );
}
