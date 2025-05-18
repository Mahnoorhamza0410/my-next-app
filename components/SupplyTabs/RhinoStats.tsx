export default function RhinoStats() {
  return (
   <div className="w-auto h-auto sm:w-[900px] sm:h-[470px] pt-[60px] flex flex-col items-center justify-start rounded-[10px] mx-auto box-border
             sm:bg-[linear-gradient(90deg,_rgba(79,110,255,0.2)_0%,_rgba(136,76,200,0.2)_100%)]
             sm:border sm:border-[rgba(143,108,250,0.31)]
             bg-transparent border-none sm:pb-[0px] pb-[30px] hidebgtab">
     <div className="sm:w-[738px] w-[auto] mx-auto rounded-lg shadow-lg border border-[#8F74E1] overflow-hidden">
      {/* Header */}
      <div className="flex h-[70px] bg-gradient-to-r from-[#4f6eff7a] to-[#8f6cfa66] border-b border-[#8F74E1]">
        {/* Left Section */}
        <div className="sm:w-[75%] w-[65%]   flex items-center gap-4 px-4">
          <img src="/sidebar-logo.png" alt="Rhino Logo" className="w-[47.54px] h-[46px]" />
          <div>
            <h2 className="sm:text-[16px] text-[13px] font-semibold">Token Supply</h2>

          </div>
        </div>

        {/* Right Section */}
        <div className="sm:w-[25%] w-[35%] bg-[#8F6CFA] flex flex-col items-start sm:pl-[15px] pl-[5px] justify-center text-white">
          <p className="sm:text-[20px] text-[14px] font-bold uppercase ">1,000,000,000</p>
          <p className="text-[14px] font-light text-purple-100">Token Allocations</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#1b1349] text-white ">
        <div className="flex justify-between items-center text-sm border-b border-[#8F74E1]">
            <div className="bg-[black]  px-4 py-3 upeprcase w-[75%] flex items-center justify-between ">
              Party Wallet
              <span>*50%</span>
              </div>
            <div className="px-4 py-3  sm:w-[25%] w-[30%] bg-[#393257]">500,000,000</div>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-[#8F74E1]">
            <div className="  px-4 py-3 upeprcase w-[75%] flex items-center justify-between ">
              Liquidity Wallet (PLSX v2)
              <span>30%</span>
              </div>
            <div className="px-4 py-3 sm:w-[25%] w-[30%] bg-[#393257]">300,000,000</div>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-[#8F74E1]">
            <div className="  px-4 py-3 upeprcase w-[75%] flex items-center justify-between ">
              Marketing Wallet
              <span>4%</span>
              </div>
            <div className="px-4 py-3  sm:w-[25%] w-[30%] bg-[#393257]">40,000,000</div>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-[#8F74E1]">
            <div className="  px-4 py-3 upeprcase w-[75%] flex items-center justify-between ">
              Giveaway Wallet
              <span>1%</span>
              </div>
            <div className="px-4 py-3  sm:w-[25%] w-[30%] bg-[#393257]">10,000,000</div>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-[#8F74E1]">
            <div className="  px-4 py-3 upeprcase w-[75%] flex items-center justify-between ">
              Team Wallet
              <span>*15%</span>
              </div>
            <div className="px-4 py-3  sm:w-[25%] w-[30%] bg-[#393257]">150,000,000</div>
          </div>

      </div>
    </div>
    <div className="text-left w-auto h-auto sm:w-[738px] mt-[30px]">
       <p className="font-['Kumbh_Sans'] sm:text-[14px] text-[12px] font-medium font-kumbh">*Team Wallet - <span className="font-light">5% wide range v3</span></p>
       <p className="font-['Kumbh_Sans'] sm:text-[14px] text-[12px] font-medium font-kumbh">*Party Wallet - <span className="font-light">will be used to power the RHINO charging cycle</span></p>
    </div>
   </div>
  );
}
