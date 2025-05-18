export default function TokenSupply() {
  return (
    // Outer container with gradient background
     <div
  className="w-auto h-auto sm:w-[900px] sm:h-[470px] pt-[60px] flex flex-col items-center justify-between rounded-[10px] mx-auto box-border
             sm:bg-[linear-gradient(90deg,_rgba(79,110,255,0.2)_0%,_rgba(136,76,200,0.2)_100%)]
             sm:border sm:border-[rgba(143,108,250,0.31)]
             bg-transparent border-none sm:pb-[0px] pb-[30px] hidebgtab "
>
      {/* Inner transparent card */}
      <div className="sm:w-[738px] w-[335px] rounded-lg shadow-lg border border-[#8F74E1] overflow-hidden bg-transparent">
        {/* Header */}
        <div className="flex h-[70px] bg-gradient-to-r from-[#4f6eff7a] to-[#8f6cfa66] border-b border-[#8F74E1]">
          {/* Left Section */}
          <div className="w-full flex items-center gap-4 px-4">
            <img src="/sidebar-logo.png" alt="Rhino Logo" className="w-[47.54px] h-[46px]" />
            <div>
              <h2 className="text-base font-semibold text-white uppercase">RHINO Statistics</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-white bg-transparent">
          <div>
            <h3 className="text-xs font-bold uppercase   bg-transparent px-4 py-3 border-b border-[#8F74E1]">
              Reward Allocations
            </h3>

            <div className="flex justify-between items-center text-sm sm:py-2 py-0 border-b border-[#8F74E1]">
              <div className="px-4 py-3 sm:w-[80%] w-[auto] whitespace-pre-line">
                {/* Break after Rewards on small screens */}
                PLS Rewards
                <span className="block sm:hidden" /> {/* creates a line break on small screens */}
                Distributed
              </div>
              <div className="px-4 py-3 sm:w-[20%] w-[auto] border-l-[2px] border-l-[#494949]">1,254,215,251</div>
            </div>

            <div className="flex justify-between items-center text-sm sm:py-2 py-0 border-b border-[#8F74E1]">
              <div className="px-4 py-3 sm:w-[80%] w-[auto] whitespace-pre-line">
                RHINO Bought &<span className="block sm:hidden" /> Burned
              </div>
              <div className="px-4 py-3 sm:w-[20%] w-[auto] border-l-[2px] border-l-[#494949]">251,654,544</div>
            </div>

            <div className="flex justify-between items-center text-sm sm:py-2 py-0 border-b border-[#8F74E1]">
              <div className="px-4 py-3 sm:w-[80%] w-[auto] whitespace-pre-line">
                SolidX Bought &<span className="block sm:hidden" /> Burned
              </div>
              <div className="px-4 py-3 sm:w-[20%] w-[auto] border-l-[2px] border-l-[#494949]">251,654,544</div>
            </div>

            <div className="flex justify-between items-center text-sm sm:py-2 py-0">
              <div className="px-4 py-3 sm:w-[80%] w-[auto] whitespace-pre-line">
                Gelato Bought &<span className="block sm:hidden" /> Burned
              </div>
              <div className="px-4 py-3 sm:w-[20%] w-[auto] border-l-[2px] border-l-[#494949]">175,564,488</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
