export default function FeeSystem() {
  return (
    // upper div
 <div
  className="w-auto h-auto sm:w-[900px] sm:h-[680px] pt-[60px] flex flex-col items-center justify-between rounded-[10px] mx-auto box-border
             sm:bg-[linear-gradient(90deg,_rgba(79,110,255,0.2)_0%,_rgba(136,76,200,0.2)_100%)]
             sm:border sm:border-[rgba(143,108,250,0.31)]
             bg-transparent border-none sm:pb-[0px] hidebgtab pb-[30px] sm:px-4 px-0"
>
      {/* lower div */}
      <div className="sm:w-[738px] w-[335px] mx-auto rounded-lg shadow-lg border border-[#8F74E1] overflow-hidden bg-transparent">
        {/* Header */}
        <div className="flex h-[70px] bg-gradient-to-r from-[#4f6eff7a] to-[#8f6cfa66] border-b-[1px] border-b-[#8F74E1]">
          {/* Left Section */}
          <div className="w-[80%] flex items-center gap-4 px-4">
            <img src="/sidebar-logo.png" alt="Rhino Logo" className="sm:w-[47.54px] sm:h-[46px] w-[40px] h-[40px]" />
            <div>
              <h2 className="sm:text-[16px] text-[13px] font-semibold text-white">RHINO TRANSACTION FEES</h2>
              <p className="text-[12px] text-white">*Buys /Sells /Transfers</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-[20%] bg-[#8F6CFA] flex flex-col items-start sm:pl-[15px] pl-[5px] justify-center text-white ">
            <p className="sm:text-[12px] text-[10px] font-light uppercase">Total Fees</p>
            <p className="text-2xl font-bold text-purple-100">6%</p>
          </div>
        </div>

        {/* Content */}
        <div className="text-white bg-transparent">
          {/* Reward Allocations */}
          <div>
            <h3 className="text-xs font-bold uppercase border-b-[1px] border-b-[#8F74E1] px-4 py-3 bg-[black]">Reward Allocations</h3>
            <div className="flex justify-between items-center text-sm border-b-[1px] border-b-[#8F74E1]">
              <div className="px-4 py-3 w-[80%]">
                Token Holders
                <span className="block text-xs text-gray-300">*PLS Auto Distributions</span>
              </div>
              <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">2%</div>
            </div>
            <div className="flex justify-between items-center text-sm border-b-[1px] border-b-[#8F74E1]">
              <div className="px-4 py-3 w-[80%] ">
                Liquidity Providers
                <span className="block text-xs text-gray-300">*PLS Claimed Via dApp</span>
              </div>
              <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">1%</div>
            </div>
          </div>

          {/* Buy & Burn Deflation */}
          <div>
            <h3 className="text-xs font-bold uppercase border-b border-white/20 px-4 py-3 bg-[black] border-b-[1px] border-b-[#8F74E1]">Buy & Burn Deflation</h3>
            {[
              { label: 'RHINO', value: '1.2%' },
              { label: 'SolidX', value: '.45%' },
              { label: 'Gelato', value: '.45%' },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm  border-b-[1px] border-b-[#8F74E1] py-2">
                <div className="px-4 py-3 w-[80%]">{item.label}</div>
                <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Liquidity Auto Add */}
          <div>
            <h3 className="text-xs font-bold uppercase border-b border-white/20 px-4 py-3 bg-[black] border-b-[1px] border-b-[#8F74E1]">Liquidity Auto Add</h3>
            <div className="flex justify-between items-center text-sm py-2">
              <div className="px-4 py-3 w-[80%]">PLS /RHINO</div>
              <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949] ">.90%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
