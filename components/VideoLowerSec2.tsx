import React from 'react';

const Lowervideosection = () => {
  const address = '0xE7308da032326dE7A2a2b80E1131650E845Ab989';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      // No alert shown on success
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center pt-[15px] sm:pt-[25px] pb-[85px] sm:pb-[130px] w-full px-4'>
      {/* Paragraphs */}
      <p className='text-[18px] text-center sm:text-[24px] text-[#DAD9D9] font-semibold leading-[150%] sm:leading-[170%] w-[400px] sm:w-[800px] sp-width'>
        Crypto ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred velas. Terra XRP ren enjin filecoin secret terra decred compound decentraland.
      </p>

      <p className='mt-[15px] sm:mt-[20px] font-poppins text-[16px] text-center text-[#DAD9D9] font-normal leading-[150%] sm:leading-[170%] w-[400px] sm:w-[800px] sp-width'>
        Crypto ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred compound decentraland.
      </p>

      {/* Search bar with buttons */}
      <div className="mt-[40px] w-full flex justify-center">
        <div className="w-full max-w-[600px] sm:max-w-[842px]">
          <div className="flex items-center border-[2px] border-[#666666] rounded overflow-hidden w-full">
            {/* Left Button */}
            <button
              className="bg-[#444] text-white text-[14px] sm:text-[18px] px-3 py-1 sm:px-4 sm:py-2"
              onClick={() => {}}
            >
              $RHINO:
            </button>

            {/* Input with Black Background */}
            <input
  type="text"
  value={address}
  readOnly
  className="w-[160px] ip-width flex-1 px-3 py-[6px] bg-black text-white placeholder-white placeholder:text-[14px] placeholder:font-medium outline-none text-sm"
/>
            {/* Right Button */}
            <button
              onClick={handleCopy}
              className="bg-[#C336FF] text-white font-bold text-[14px] sm:text-[18px] px-3 py-1 sm:px-4 sm:py-2 cursor-pointer flex items-center gap-2"
            >
              <img src="/icons/copyicon.svg" alt="Copy Icon" className="w-4 h-4" />
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lowervideosection;
