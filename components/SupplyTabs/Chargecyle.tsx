import React from 'react';

const Chargecyle = () => {
  return (
   <div
  className="handle-w-chargecycle del-bg-border w-auto h-auto sm:w-[900px] sm:h-[780px] pt-[60px] flex flex-col items-center justify-between rounded-[10px] mx-auto box-border
             sm:bg-[linear-gradient(90deg,_rgba(79,110,255,0.2)_0%,_rgba(136,76,200,0.2)_100%)]
             sm:border sm:border-[rgba(143,108,250,0.31)]
            rgba(143,108,250,0.31)]
             border-none sm:px-0 px-4 hidebgtab"
>
      <div className="border-b border-b-[#51437B] w-[725px]">
        <h2 className="sm:text-[24px] text-[20px] font-['Kumbh_Sans'] sm:text-[30px] font-kumbh font-medium text-white text-center pb-[30px] leading-[48%]">
          🔋 RHINO Charging Cycle
        </h2>
        <h2 className="sm:text-[24px] text-[22px] font-['Kumbh_Sans'] sm:text-[30px] font-kumbh font-light text-white text-center pb-[30px] sm:leading-[48%] leading-[110%]">
          Earn → Buy RHINO → Burn
          <br className="block sm:hidden" />
           50% → Repeat
        </h2>
      </div>

      <p className="text-[16px] font-bold sm:leading-[27%] leading-[none]  text-white mt-[20px]">
        Initial Allocation:{" "}
        <span className="font-light">
          50% of the total supply (500 million RHINO) is sent to the Party Wallet.
        </span>
      </p>

      <div className='sm:w-[725px] w-[auto]'>
        {/* Step 1 */}
        <div
          className="flex sm:items-center items-start gap-4 p-4 rounded-[10px]  h-[80px] card-h-chargecycle mt-[25px]"
          style={{
            background: 'linear-gradient(90deg, rgba(47, 35, 82, 0.40) 0%, rgba(143, 108, 250, 0.40) 100%)',
          }}
        >
          <div className="w-[60px] h-[60px] flex sm:items-center items-start justify-center">
            <img src="/icons/num1.svg" alt="Step 1 Icon" className="w-full h-auto ico" />
          </div>
          <div className="flex flex-col justify-start">
            <h3 className="text-white sm:text-[18px] text-[14px] font-semibold">EARN <span className='font-light'>Phase:</span></h3>
            <p className="text-white text-[14px] font-light text-sm opacity-80">Collect PULSE rewards over the cycle (starts at 21 days, +adds 7 days per cycle)</p>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className="flex sm:items-center items-start gap-4 p-4 rounded-[10px]  h-[80px] card-h-chargecycle mt-[10px]"
          style={{
            background: 'linear-gradient(270deg, rgba(47, 35, 82, 0.40) 0%, rgba(143, 108, 250, 0.40) 100%)',
          }}
        >
          <div className="w-[60px] h-[60px] flex sm:items-center items-start justify-center">
            <img src="/icons/num2.svg" alt="Step 2 Icon" className="w-full h-auto ico" />
          </div>
          <div className="flex flex-col justify-start">
            <h3 className="text-white sm:text-[18px] text-[14px] font-semibold">BUY RHINO <span className='font-light'>Phase:</span></h3>
            <p className="text-white text-[14px] font-light text-sm opacity-80">Use PULSE to buy RHINO from the market (manually or auto).</p>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className="flex sm:items-center items-start gap-4 p-4 rounded-[10px]  h-[80px] card-h-chargecycle mt-[10px]"
          style={{
            background: 'linear-gradient(90deg, rgba(47, 35, 82, 0.40) 0%, rgba(143, 108, 250, 0.40) 100%)',
          }}
        >
          <div className="w-[60px] h-[60px] flex sm:items-center items-start justify-center">
            <img src="/icons/num3.svg" alt="Step 3 Icon" className="w-full h-auto ico" />
          </div>
          <div className="flex flex-col justify-start">
            <h3 className="text-white sm:text-[18px] text-[14px] font-semibold">BURN</h3>
            <p className="text-white text-[14px] font-light text-sm opacity-80">Burn 50% of purchased RHINO at the end of the cycle.<br></br>If short, burn up to 10% from the wallet (never below 250M RHINO).</p>
          </div>
        </div>

        {/* Step 4 */}
        <div
          className="flex sm:items-center items-start gap-4 p-4 rounded-[10px]  h-[80px] card-h-chargecycle mt-[10px]"
          style={{
            background: 'linear-gradient(270deg, rgba(47, 35, 82, 0.40) 0%, rgba(143, 108, 250, 0.40) 100%)',
          }}
        >
          <div className="w-[60px] h-[60px] flex sm:items-center items-start justify-center">
            <img src="/icons/num4.svg" alt="Step 4 Icon" className="w-full h-auto ico" />
          </div>
          <div className="flex flex-col justify-start">
            <h3 className="text-white sm:text-[18px] text-[14px] font-semibold">REPEAT</h3>
            <p className="text-white text-[14px] font-light text-sm opacity-80">Next cycle begins with updated targets and duration.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[rgba(255,255,255,0.05)] acc-p pt-[25px] pb-[30px] pl-[90px] pr-[90px]  mt-6">
        <div className="sm:w-[725px] w-[320px]">
          <h2 className="text-white text-[18px] font-bold mb-2">⚡ Why the RHINO Charging Cycle Matters</h2>
          <p className="text-white text-[15px] leading-relaxed">
            Every cycle earns PULSE, buys RHINO from the market, and burns half of it — permanently removing tokens from supply. If rewards fall short, we burn extra from our own stash (up to 10%). Each round shrinks supply, boosts reward share for holders, and supports price — even in a bear market.
          </p>
          <h2 className="text-white text-[20px] font-bold">It’s compounding deflation, built to survive and reward.</h2>
        </div>
      </div>
    </div>
  );
};

export default Chargecyle;
