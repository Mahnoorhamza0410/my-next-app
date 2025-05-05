'use client';
import { useState } from 'react';
import VideoLowerSec from './VideoLowerSec';
import VideoLowerSec1 from '@/components/VideoLowerSec1';
import VideoLowerSec2 from '@/components/VideoLowerSec2'; // Adjust path as needed

const TabSection = () => {
  const tabs = ['Supply', '1.000.000.000.000', 'Tax:0/0'];
  const [activeTab, setActiveTab] = useState(tabs[0]); // Set the first tab as active by default

  const cryptoText = `Crypto ipsum bitcoin ethereum dogecoin litecoin. Solana BitTorrent vechain dash nexo terraUSD. Monero ren kava WAX klaytn solana klaytn algorand. Solana stacks decentraland amp aave terra flow decred velas. Terra XRP ren enjin filecoin secret terra decred compound decentraland.`;

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Supply':
        return <VideoLowerSec />; // Replace with the actual content of this tab
      case 'Tax':
        return <VideoLowerSec1 />; // You can modify this content later
      case 'Info':
        return <VideoLowerSec2 />; // You can modify this content later
      default:
        return <VideoLowerSec />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-black text-white font-bold rounded-xl shadow-lg">
      {/* Individual Tabs with 8px gap by default, 5px gap on mobile */}
      <div className="flex gap-[5px] sm:gap-[8px]">
        {tabs.map((tab) => (
         <button
         key={tab}
         onClick={() => setActiveTab(tab)}
         className={`flex-1 text-center sm:py-4 sm:px-10 px-3 py-2 h-[60px] bg-[#2B2B2B] cursor-pointer sup-tab-btn 
           ${
             activeTab === tab
               ? 'border-b-4 border-[#00BB00] text-white font-semibold'
               : 'border-b-4 border-[#8F6CFA] text-white'
           } 
           rounded-t-[10px] rounded-b-[0px] transition-all duration-200 flex items-center justify-center gap-2`}
       >
         {tab === 'Supply' && (
           <img src="/icons/loading.svg" alt="icon" className="h-4 w-4" />
         )}
         {tab}
       </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 space-y-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabSection;
