'use client';
import dynamic from "next/dynamic";
import React from 'react';
import DynamicLayout from '@/components/DynamicLayout';
import UpperFooterImage from '@/components/UpperFooterImage'
import SearchLeaderBoard from '@/components/SearchLeaderBoard'
// import { Particles } from "@/components/magicui/particles";

const Particles = dynamic(() => import("@/components/magicui/particles").then((mod) => mod.Particles), { ssr: false });

const Page = () => {
  return (
    <div className="w-full">
      {/* Banner section with background image */}
      <div
      // min-h-[700px]
        className="w-full bg-cover sm:bg-center bg-no-repeat bg-left bg-onside-lb  min-h-[700px] flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/hero-bgcrop.png')" ,backgroundColor: "#010001B2",backgroundBlendMode: "overlay" }}
      >
        {/* Insert Particles JUST inside Banner */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles 
            quantity={40} 
            staticity={40} 
            ease={40} 
            size={1} 
            color="#ffffff"
          />
        </div>
        <DynamicLayout 
          title="RHINO LEADERBOARD"
          subtitle={
            <>
              <div className="w-[834px] shaded-width-786poolandlboard lb-sm">
                Current Giveaway Pool Total:
                <br className="sm:hidden block" />
                <strong className="font-bold">$3,458</strong>
              </div>
            </>
          }
          titleClassName=" hello-test-lb hello-test-lb-lg" // ✅ Add custom title spacing here
          subtitleClassName="" // ✅ Add custom subtitle spacing here
        />
      </div>
      {/* Iframe Section */}
      <div className="w-full px-4 pt-[0px] flex justify-center mt-[-260px]">
        <div className="w-full max-w-[834px] pb-[90px]">
          {/* <iframe
            src="http://bitselexion.com/"
            title="CoinMarketCap"
            className="w-full h-full rounded-md border-2 border-white"
          ></iframe> */}
          <SearchLeaderBoard/>
        </div>
      </div>
      <UpperFooterImage/>
    </div>
  );
};

export default Page;
