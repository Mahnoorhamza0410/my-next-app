'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function IframeEmbed() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 py-10 bg-[url('/upper-home.png')] bg-lightgray bg-cover bg-no-repeat bg-blend-multiply pt-[85px] sm:pt-[75px] pb-[150px] sm:pb-[130px]">
      {/* Heading */}
      <h2 className="text-white font-['Kumbh_Sans'] text-[28px] sm:text-[44px] font-bold leading-[28px] sm:leading-[48px] text-center">
        Buy RhinoFi (RHINO)
      </h2>

      {/* Bridge Banner */}
      <div className="bg-[url('/bg-home-bottom.png')] bg-cover bg-center w-full sm:h-[99px] h-[100px] flex justify-center items-center">
        <div className="text-white text-[15px] mt-[0px] sm:mt-[12px] font-light underline sm:w-[550px] w-[350px] px-6 py-2 bg-[#2D063E] text-center rounded-lg">
          Click to BRIDGE to Pulsechain
        </div>
      </div>

      {/* BUY INSTRUCTIONS Button */}
      <div className="flex justify-center w-full sm:mt-[-40px] mt-[-35px] ">
        <button
          onClick={() => setShowPopup(true)}
          className="inline-flex items-center cursor-pointer uppercase sm:h-auto h-[50px] sm:w-auto w-[340px] justify-center mb-[20px] px-[32px] sm:px-[47px] py-[9px] sm:py-[7px] font-medium text-[18px] sm:text-[20px] rounded-[500px] bg-gradient-to-r from-[#BB57BF] via-[#2E4B94] to-[#2CC8D8] text-white leading-[48px]"
        >
          BUY INSTRUCTIONS
          <img src="/icons/tilted-arrow.svg" alt="tilted-arrow" className="w-[20.5px] h-[17.39px] ml-2" />
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative p-4 max-w-[90%] sm:max-w-[600px]">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-5 right-5 z-10"
            >
              <Image
                src="/icons/close-icon.svg"
                alt="Close Icon"
                width={24}
                height={24}
              />
            </button>

            {/* Modal Image */}
            <Image
              src="/popup-desk.png"
              alt="Popup"
              width={500}
              height={250}
              className=""
            />
          </div>
        </div>
      )}

      {/* Iframe Embed */}
      <div className="flex justify-center w-full mx-4">
        <div className="px-4 py-4 mt-[10px] sm:mt-0 bg-white/10 text-center rounded-lg">
          <div className="rounded-lg h-auto w-full sm:h-[500px] sm:w-[370px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
            <iframe
              src="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?inputCurrency=0x616cb6a245Ed4c11216Ec58D10B6A2E87271845d&amp;outputCurrency=PLS"
              className="w-[365px] h-[490px] only-320p sm:w-full sm:h-[600px] border-none justiphoneSE"
              allowFullScreen
              title="Pulsex DApp"
            />
          </div>
        </div>
      </div>

      {/* View Chart Button */}
      <div className="flex items-center justify-center mt-4 sm:mt-0 gap-4">
        <img src="/icons/view-chart.svg" alt="viewchart" className="w-[34px] h-[34px]" />
        <button className="text-white font-bold text-[22px] leading-[48px]">
          VIEW CHART
        </button>
        <img src="/icons/tilted-arrow.svg" alt="tilted-arrow" className="w-[20.5px] h-[17.39px]" />
      </div>
    </div>
  );
}
