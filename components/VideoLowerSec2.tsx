export default function RhinoFeesCard() {
  return (
    <div className="sm:w-[738px] w-[335px] mx-auto rounded-lg shadow-lg border border-[#8F74E1] overflow-hidden">
      {/* Header */}
      <div className="flex h-[70px] bg-gradient-to-r from-[#4F6EFF] to-[#8F6CFA]">
        {/* Left Section */}
        <div className="w-[100%]  flex items-center gap-4 px-4">
          <img src="/sidebar-logo.png" alt="Rhino Logo" className="w-[47.54px] h-[46px]" />
          <div>
            <h2 className="text-base font-semibold text-white uppercase">RHINO Statistics</h2>
          </div>
        </div>

        {/* Right Section */}
       
      </div>

      {/* Content */}
      <div className="bg-[#1b1349] text-white ">
        {/* p-6 space-y-6 removed */}
        {/* Reward Allocations */}
        <div>
          <h3 className="text-xs font-bold uppercase mb-2 border-b border-white/20  bg-[black]  px-4 py-3">Reward Allocations</h3>
          <div className="flex justify-between items-center text-sm mb-1  ">
            <div className="px-4 py-3 w-[80%]">
              PLS Rewards Distributed
            </div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">1,254,215,251</div>
          </div>
          <div className="flex justify-between items-center  text-sm">
            <div className="px-4 py-3 w-[80%]">
              RHINO Bought & Burned            
            </div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">251,654,544</div>
          </div>
          <div className="flex justify-between items-center  text-sm">
            <div className="px-4 py-3 w-[80%]">
              SolidX Bought & Burned           
            </div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">2,514</div>
          </div>
          <div className="flex justify-between items-center  text-sm">
            <div className="px-4 py-3 w-[80%]">
              Gelato Bought & Burned          
            </div>
            <div className="px-4 py-3 w-[20%] border-l-[2px] border-l-[#494949]">175,564,488</div>
          </div>
        </div>

     
      </div>
    </div>
  );
}
