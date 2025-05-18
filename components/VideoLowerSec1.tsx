export default function RhinoFeesCard() {
  return (
    <div className="sm:w-[738px] w-[335px] mx-auto rounded-lg shadow-lg border border-[#8F74E1] overflow-hidden">
      {/* Header */}
      <div className="flex h-[70px] bg-gradient-to-r from-[#4F6EFF] to-[#8F6CFA]">
        {/* Left Section */}
        <div className="w-[80%]  flex items-center gap-4 px-4">
          <img src="/sidebar-logo.png" alt="Rhino Logo" className="w-[47.54px] h-[46px]" />
          <div>
            <h2 className="text-base font-semibold text-white">RHINO TRANSACTION FEES</h2>
            <p className="text-xs text-white">*Buys /Sells /Transfers</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[20%] bg-[#8F6CFA] flex flex-col items-start pl-[15px] justify-center text-white">
          <p className="text-sm uppercase">Total Fees</p>
          <p className="text-2xl font-bold text-purple-100">6%</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#1b1349] text-white ">
        {/* p-6 space-y-6 removed */}
        {/* Reward Allocations */}
        <div>
          <h3 className="text-xs font-bold uppercase mb-2 border-b border-white/20  bg-[black]  px-4 py-3">Reward Allocations</h3>
          <div className="flex justify-between items-center text-sm mb-1  ">
            <div className="px-4 py-3 w-[80%]">
              Token Holders
              <span className="block text-xs text-gray-300">*PLS Auto Distributions</span>
            </div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">2%</div>
          </div>
          <div className="flex justify-between items-center  text-sm">
            <div className="px-4 py-3 w-[80%]">
              Liquidity Providers
              <span className="block text-xs text-gray-300">*PLS Claimed Via dApp</span>
            </div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">1%</div>
          </div>
        </div>

        {/* Buy & Burn Deflation */}
        <div>
          <h3 className="text-xs font-bold uppercase mb-2 border-b border-white/20  bg-[black]  px-4 py-3">Buy & Burn Deflation</h3>
          <div className="flex justify-between items-center  text-sm mt-[8px] mb-[8px]">
            <div className="px-4 py-3 w-[80%] mt-[8px] mb-[8px]">RHINO</div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">1.2%</div>
          </div>
          <div className="flex justify-between items-center text-sm mt-[8px] mb-[8px]">
            <div className="px-4 py-3 w-[80%] mt-[8px] mb-[8px]">SolidX</div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">.45%</div>
          </div>
          <div className="flex justify-between items-center  text-sm mt-[8px] mb-[8px]">
            <div className="px-4 py-3 w-[80%] mt-[8px] mb-[8px]">Gelato</div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">.45%</div>
          </div>
        </div>

        {/* Liquidity Auto Add */}
        <div>
          <h3 className="text-xs font-bold uppercase mb-2 border-b border-white/20 p-4 bg-[black] ">Liquidity Auto Add</h3>
          <div className="flex justify-between items-center  text-sm">
            <div className="px-4 py-3 w-[80%] mt-[8px] mb-[8px]">PLS /RHINO</div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949] mt-[8px] mb-[8px]">.90%</div>
          </div>
        </div>

      </div>
    </div>
  );
}
