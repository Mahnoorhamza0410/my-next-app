'use client';
import React from 'react';
import DynamicLayout from '@/components/DynamicLayout';
import UpperFooterImage from '@/components/UpperFooterImage'
import { Particles } from "@/components/magicui/particles";
const Page = () => {
  return (
    <div className="w-full">
      {/* Banner section with background image */}
      <div
        className="w-full bg-cover sm:bg-center bg-left bg-onside-pools bg-no-repeat min-h-[700px] sm-dv-sc  flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/hero-bgcrop.png')" ,backgroundColor: "#010001B2",backgroundBlendMode: "overlay" }}
      >
        {/* Insert Particles JUST inside Banner */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            quantity={40}
            staticity={40}
            ease={40}
            size={1}
            color="#FFFFFF"
          />
        </div>
        <DynamicLayout
          title="LIQUIDITY POOLS"
          subtitle={
            <>
             <div className='sm:w-[928px] w-[auto]  shaded-width-786poolandlboard'>
               <strong className="font-bold">Manage </strong>
              Your DITY Liquidity Pools, Tax Free, Below.{' '}
              {/* <strong className="font-bold">$3,458</strong> */}
             </div>
            </>
          }
          // ✅ Added class support for layout adjustments
          titleClassName="hello-test-pools"
          subtitleClassName="mobile-shaded-width "
        />
      </div>
      {/* Iframe Section */}
      <div className="w-full px-4 pt-[40px] flex justify-center sm:mt-[-180px] mt-[-160px] pb-[90px]">
        <div className="w-full max-w-[730px] h-[800px] pb-[90px] rounded-md border-2 border-white">
          {/* <iframe
            src="https://www.voipbusiness.com/"
            title="CoinMarketCap"
            className="w-full h-full rounded-md border-2 border-white"
          ></iframe> */}
        </div>
      </div>
      <UpperFooterImage />
    </div>
  );
};
export default Page;
