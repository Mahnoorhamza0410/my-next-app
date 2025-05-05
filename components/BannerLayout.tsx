'use client';
import React from 'react';
import { Particles } from '@/components/magicui/particles'; // adjust the path if needed

export default function BannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-[70vh] cc-h sm:h-[112vh] big-sc overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-bgcrop.png "
        alt="Hero Background"
        className="absolute inset-0 w-full h-[100%] object-cover z-[-2]"
        style={{ objectPosition: '5% center',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-[-2] bg-[#010001B2]"></div>

      {/* Particles only on larger screens */}
      <div className="absolute inset-0 z-[-1] pointer-events-none hidden sm:block">
        <Particles />
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
        <div className="flex flex-col items-center justify-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

