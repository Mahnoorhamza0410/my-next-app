import React from 'react';

const VideoLowerSec = () => {
  return (
    <div
      className="w-[900px] h-[700px] flex flex-col items-center justify-between rounded-[10px] mx-auto box-border"
      style={{
        background: 'linear-gradient(90deg, rgba(79, 110, 255, 0.20) 0%, rgba(136, 76, 200, 0.20) 100%)',
        border: '1px solid #8F6CFA50', // Border color and weight
      }}
    >
      <div className='border-b border-b-[#51437B] w-[838.82px]'>
        <h2 className="text-[24px] font-['Kumbh_Sans'] sm:text-[30px] font-kumbh font-medium text-white text-center pb-[30px] leading-[48%]">🔋 RHINO Charging Cycle</h2>
      <h2 className="text-[24px] font-['Kumbh_Sans'] sm:text-[30px] font-kumbh font-light text-white text-center pb-[30px] leading-[48%]">Earn → Buy RHINO → Burn 50% → Repeat</h2>
      </div>
      <p className='text-[16px] font-bold leading-[27%] text-white mt-[20px]'>Initial Allocation: <span className='font-light'> 50% of the total supply (500 million RHINO) is sent to the Party Wallet.</span> </p>
     <div>
       {/* number 1 div */}
      <div
      className="flex items-center gap-4 p-4 rounded-[10px] w-[750px] h-[80px] mt-[25px]"
      style={{
        background: 'linear-gradient(90deg, rgba(47, 35, 82, 0.40) 0%, rgba(143, 108, 250, 0.40) 100%)',
      }}
    >
      {/* Icon */}
      <div className="w-[60px] h-[60px] flex items-center justify-center">
        <img src="/icons/num1.svg" alt="Step Icon" className="w-full h-auto" />
      </div>

      {/* Heading and Text */}
      <div className="flex flex-col justify-start">
        <h3 className="text-white text-lg font-semibold">Step Title</h3>
        <p className="text-white text-sm opacity-80">This is a short description below the heading.</p>
      </div>
    </div>
     {/* number 2 div */}
      <div
      className="flex items-center gap-4 p-4 rounded-[10px] w-[750px] h-[80px] mt-[10px]"
      style={{
        background: 'linear-gradient(270deg, rgba(47, 35, 82, 0.40) 0%, rgba(143, 108, 250, 0.40) 100%)',
      }}
    >
      {/* Icon */}
      <div className="w-[60px] h-[60px] flex items-center justify-center">
        <img src="/icons/num2.svg" alt="Step Icon" className="w-full h-auto" />
      </div>

      {/* Heading and Text */}
      <div className="flex flex-col justify-start">
        <h3 className="text-white text-lg font-semibold">Step Title</h3>
        <p className="text-white text-sm opacity-80">This is a short description below the heading.</p>
      </div>
    </div>
     {/* number 3 div */}
      <div
      className="flex items-center gap-4 p-4 rounded-[10px] w-[750px] h-[80px] mt-[10px]"
      style={{
        background: 'linear-gradient(90deg, rgba(47, 35, 82, 0.40) 0%, rgba(143, 108, 250, 0.40) 100%)',
      }}
    >
      {/* Icon */}
      <div className="w-[60px] h-[60px] flex items-center justify-center">
        <img src="/icons/num3.svg" alt="Step Icon" className="w-full h-auto" />
      </div>

      {/* Heading and Text */}
      <div className="flex flex-col justify-start">
        <h3 className="text-white text-lg font-semibold">Step Title</h3>
        <p className="text-white text-sm opacity-80">This is a short description below the heading.</p>
      </div>
    </div>
     {/* number 4 div */}
      <div
      className="flex items-center gap-4 p-4 rounded-[10px] w-[750px] h-[80px] mt-[10px]"
      style={{
        background: 'linear-gradient(270deg, rgba(47, 35, 82, 0.40) 0%, rgba(143, 108, 250, 0.40) 100%)',
      }}
    >
      {/* Icon */}
      <div className="w-[60px] h-[60px] flex items-center justify-center">
        <img src="/icons/num4.svg" alt="Step Icon" className="w-full h-auto" />
      </div>

      {/* Heading and Text */}
      <div className="flex flex-col justify-start">
        <h3 className="text-white text-lg font-semibold">Step Title</h3>
        <p className="text-white text-sm opacity-80">This is a short description below the heading.</p>
      </div>
    </div>x
     </div>
    <div className='bg-[rgba(255,255,255,0.05)] w-[auto] px-10'>
     <div className='w-[700px]'>
       <h2>⚡ Why the RHINO Charging Cycle Matters</h2>
      <p>Every cycle earns PULSE, buys RHINO from the market, and burns half of it — permanently removing tokens from supply. If rewards fall short, we burn extra from our own stash (up to 10%). Each round shrinks supply, boosts reward share for holders, and supports price — even in a bear market.</p>
     </div>
    </div>
    </div>
  );
};

export default VideoLowerSec;
