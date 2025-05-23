'use client';
import Image from 'next/image';
import useIs786Device from '@/components/hooks/useIs786Device';

export default function TwoSectionLayout() {
  const is786 = useIs786Device();

  const cards = [
    {
      title: (
        <>
          <span className="text-white">LP </span>
          <span className="text-[#8F6CFA]">x</span>
          <span className="text-white">AMPLIFIER</span>
        </>
      ),
      icon: '/icons/LA-AMP.svg',
      desc: (
        <>
          <span className="underline">LP Double Dipping.</span>{' '}
          Deposit into LP AND Continue to earn fees
        </>
      ),
    },
    {
      title: (
        <>
          <span className="text-white">GIVEAWAY POOL</span>
        </>
      ),
      icon: '/icons/Giveaway.svg',
      desc: (
        <>
          Air Dropped monthly to 3 random
          <br />
          <span className="underline"> Top 100 RHINO Holders.</span>
        </>
      ),
    },
    {
      title: (
        <>
          <span className="text-white">EARN </span>
          <span className="text-[#8F6CFA]">FEES</span>
        </>
      ),
      icon: '/icons/Earn-fees.svg',
      desc: (
        <>
          Earn % of trading fees PLS Tokens <br />
          <span className="underline"> Auto Deposited.</span>
        </>
      ),
    },
    {
      title: (
        <>
          <span className="text-white">VIP TOOLS</span>
        </>
      ),
      icon: '/icons/VIP.svg',
      desc: (
        <>
          Access <span className="underline"> Holder only</span>{' '}
          Wealth Building Tools & Courses on
          <span className="text-[#8F6CFA]"> Solidity.win</span>
        </>
      ),
    },
  ];

  return (
    <>
      {/* ✅ 786 Layout (unchanged) */}
      {is786 && (
        <div className="ptop pbottom flex flex-col items-center gap-6 px-4 py-6">
          <img
            src="/30.png"
            alt="Vertical"
            className="w-[550px] h-[200px] object-cover"
          />
          <h2 className="text-[24px] font-kumbh font-bold text-white text-center">
            Holder Benefits{' '}
            <span className="font-normal italic text-[24px] font-kumbh">
              Let’s Eat
            </span>
          </h2>
          <div className="flex flex-row gap-4 items-center pt-[20px] pb-[10px]">
            <img src="/BQ.png" className="w-[35px] h-[25px]" />
            <p className="text-gray-300 text-left font-['Open_Sans']">
              ...RhinoFi has positioned itself for long term growth & stability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#89898926] hover:bg-[#8F6CFA3D] transition-colors duration-300 text-white w-full py-6 px-4 rounded-[10px] shadow flex flex-col items-center text-center"
              >
                <img src={card.icon} alt="icon" className="w-[50px] h-[50px]" />
                <h3 className="text-[14px] font-semibold mt-4 mb-2">
                  {card.title}
                </h3>
                <p className="text-[12px] text-white-300 capitalize">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Default Layout (with original paddings on cards) */}
      <div className="hide786 flex flex-col md:flex-row gap-6 max-w-[1180px] mx-auto pb-[90px] sm:pb-[146px] sm:pt-[120px] pt-[90px] px-4 sm:px-6">
        <div className="w-full md:w-2/3 flex flex-col gap-6 order-1 md:order-2">
          <div className="bg-[linear-gradient(90deg,rgba(47,35,82,0.01)_0%,rgba(143,108,250,0.20)_100%)] md:bg-none">
            <h2 className="hbmargintopminus text-[24px] sm:text-[44px] font-kumbh font-bold text-white text-center md:text-left">
              Holder Benefits{' '}
              <span className="font-normal italic text-[24px] sm:text-[44px]">
                Let’s Eat
              </span>
            </h2>
          </div>

          <div className="block sm:hidden flex justify-center">
            <img
              src="/mobile-rhino-benifits.png"
              alt="Vertical"
              className="w-[360px] h-[321px] object-cover"
            />
          </div>

          <div className="flex flex-row gap-4 items-center pt-[20px] pb-[10px]">
            <img src="/BQ.png" className="w-[35px] h-[25px]" />
            <p className="text-gray-300 text-left font-['Open_Sans']">
              ...RhinoFi has positioned itself for long term growth & stability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`bg-[#89898926] hover:bg-[#8F6CFA3D] transition-colors duration-300 text-white w-full py-6 pr-[120px] pl-[120px] rounded-[10px] shadow flex flex-col items-center text-center leading-[24px] sm:pr-[71px] sm:pl-[71px]`}
              >
                <img
                  src={card.icon}
                  alt="icon"
                  className="w-[50px] h-[50px]"
                />
                <h3 className="text-[14px] sm:text-[20px] font-semibold mt-4 mb-2">
                  {card.title}
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-white-300 capitalize">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:block max-w-full order-2 sm:order-1">
          <img
            src="/Holder-Benifits.png"
            alt="Vertical"
            className="max-w-full h-[570px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
