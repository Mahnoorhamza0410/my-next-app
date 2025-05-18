'use client';

import { useState } from 'react';
import useMediaQuery from '../components/hooks/useMediaQuery';
import Chargecyle from '@/components/SupplyTabs/Chargecyle';
import FeeSystem from '@/components/SupplyTabs/FeeSystem';
import TokenSupply from '@/components/SupplyTabs/TokenSupply';
import RhinoStats from '@/components//SupplyTabs/RhinoStats'

const SupplyTab = () => {
  const isDesktop = useMediaQuery('(min-width: 850px)');
  const tabs = ['RHINO Charging Cycle', 'Fee System', 'Token Supply', 'RHINO Stats'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const renderTabContent = (tabName: string = activeTab) => {
    switch (tabName) {
      case 'RHINO Charging Cycle':
        return <Chargecyle />;
      case 'Fee System':
        return <FeeSystem />;
      case 'Token Supply':
        return <RhinoStats/>
      case 'RHINO Stats':
        return <TokenSupply />;
      default:
        return null;
    }
  };

  return (
    <div className="sm:w-[950px] w-[370px] for-supply-tab-new mt-10 bg-black text-white rounded-xl shadow-lg">
      <h2 className="text-[24px] font-['Kumbh_Sans'] sm:text-[44px] font-kumbh font-bold text-white text-center pb-[30px]">
        RhinoFi Tokenomics
      </h2>

      {isDesktop ? (
        <>
          {/* Desktop Tabs */}
          <div className="flex gap-[5px] sm:gap-[5px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center sm:py-1 sm:px-3 px-3 py-2 h-[60px] bg-[#2B2B2B] cursor-pointer
                  text-[14px] text-white font-bold leading-[100%] w-[195px]
                  ${
                    activeTab === tab
                      ? 'border-t-4 border-[#AD1CEB] bg-[#21234D]'
                      : 'border-t-4 border-transparent'
                  }
                  rounded-t-[10px] rounded-b-[0px] transition-all duration-200 flex items-center justify-center gap-2
                  focus:outline-none focus:ring-0 active:outline-none active:ring-0`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-4">{renderTabContent()}</div>
        </>
      ) : (
        <>
          {/* Mobile Accordion */}
          <div className="space-y-4">
            {tabs.map((tab, index) => {
              const isOpen = openAccordion === index;
              return (
                <div
                  key={tab}
                  className={`overflow-hidden rounded-t-[10px] ${
                    isOpen
                      ? 'border-t-4 border-[#AD1CEB] bg-[#21234D]'
                      : 'border-t-4 border-transparent bg-[#2B2B2B]'
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(isOpen ? null : index)
                    }
                    className="w-full px-4 py-4 flex items-center justify-between text-white text-[14px] font-bold leading-[100%]
                      focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                  >
                    <span className="flex items-center gap-2">{tab}</span>
                    <img
                      src={isOpen ? '/icons/arrow-up-acc.svg' : '/icons/arrow-down-acc.svg'}
                      alt="arrow"
                      className="w-[16px] h-[16px]"
                    />
                  </button>

                  {isOpen && (
                    <div className="sm:px-4 px-0 sm:pb-4 pb-0 bg-tab-sm juxttab">{renderTabContent(tab)}</div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default SupplyTab;
