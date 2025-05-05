'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CountdownTimer() {
  const initialDuration = 2 * 24 * 60 + 8 * 60 + 48; // total minutes = 3208

  const [remainingMinutes, setRemainingMinutes] = useState(initialDuration);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingMinutes(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Update every 60 seconds

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(remainingMinutes / (60 * 24));
  const hours = Math.floor((remainingMinutes % (60 * 24)) / 60);
  const minutes = remainingMinutes % 60;

  const timeLeft = { days, hours, minutes };

  return (
    <div className="relative bg-no-repeat bg-cover bg-center w-full bg-[linear-gradient(90deg,rgba(47,35,82,0.2)_0%,rgba(143,108,250,0.2)_100%)] mx-auto px-4 py-9 shaded-padding sm:py-6 z-10 opacity-100 sm:opacity-40">
      {/* Gradient Behind */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          top: '0px',
          left: '0px',
          width: '100%',
          height: '90px',
          
        }}
      >
        <style jsx>{`
          @media (min-width: 640px) {
            div {
              height: 124px !important;
            }
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4 flex flex-wrap items-center justify-center gap-5 sm:gap-10">
        <div className="flex items-center gap-3 min-w-max z-10">
          <Image src="/Live.png" alt="Get Ready Icon" width={40} height={40} />
          <h5 className="text-[32px] sm:text-[36px] font-semibold text-white sm:text-inherit whitespace-nowrap">
            Get Ready...
          </h5>
        </div>

        <div className="w-full sm:w-auto z-10 transform ">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-[rgba(144,53,171,0.20)] text-white p-4 rounded-md text-center"
                style={{
                  width: '95px',
                  height: '70px',
                  paddingRight: unit === 'minutes' ? '16px' : '8px',
                  paddingLeft: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',

                }}
              >
                <div className="text-2xl sm:text-3xl font-bold leading-8" style={{ fontSize: '24px' }}>
                  {value}
                </div>
                <div className="text-xs sm:text-base font-normal sm:text-[#B7B7B7] text-[#B7B7B7] text-opacity-40 leading-6" style={{ fontSize: '16px' }}>
                  {unit.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


