'use client';

import { useState } from 'react';

interface WalletEntry {
  wallet: string;
  rhino: number;
}

const walletData: WalletEntry[] = [
  { wallet: '0x456548A98b6EfBbD89cCa0309ed1d7Qe2D04b01B', rhino: 34000 },
  { wallet: '0xAa12A48B5e6EfBbD12cCb0309ed1d7Qe2D04a99B', rhino: 34000 },
  { wallet: '0xBee2348b98b6EfCCDDCaa0309ed1d7Qe2D04e66F', rhino: 34000 },
  { wallet: '0x1234567890abcdef1234567890abcdef12345678', rhino: 34000 },
  { wallet: '0x1234567890abcde', rhino: 37000 },
  ...Array(15).fill({
    wallet: '0xRepeatedWalletAddress1234567890abcdef',
    rhino: 42000
  })
];

export default function SearchLeaderBoard() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWallets = walletData.filter((entry) =>
    entry.wallet.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative flex flex-col items-center bg-[#8f6cfa25] rounded-[10px] border border-[#3C2A74] p-4 pb-16">
      {/* Search Bar */}
      <div className="relative w-full max-w-[485px] h-[50px] mb-6 px-4 md:px-0">
        <input
          type="text"
          placeholder="Search wallet address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-full pl-[15px] pr-[45px] pt-[13px] pb-[13px] text-[#777777] text-[14px] font-[400] leading-[24px] rounded-[100px] bg-white outline-none"
        />
        <img
          src="/icons/SearchIcon.svg"
          alt="Search Icon"
          className="absolute top-1/2 sm:right-[8px] right-[25px] transform -translate-y-1/2 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
        />
      </div>

      {/* Table */}
      <div className="w-full max-w-5xl rounded-[12px] overflow-hidden shadow-lg border-x border-[#2A1F49]">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-white/15 text-xs uppercase text-white">
            <tr>
              <th colSpan={2} className="px-6 py-3 border-b border-[#2A1F49]">Wallet</th>
              <th className="px-6 py-3 border-b border-[#2A1F49]">RHINO</th>
            </tr>
          </thead>
          <tbody>
            {filteredWallets.map((item, index) => (
              <tr key={index} className="border-b border-[#2A1F49]">
                <td colSpan={2} className="px-6 py-4 text-white font-light max-w-[300px]">
                  <div className="flex items-center gap-2 text-white font-light sm:flex-wrap flex-nowrap">
                    <span className="w-[20px] text-center shrink-0">1</span>
                    <span className="break-all">{item.wallet}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-white font-light">
                  {item.rhino.toLocaleString()}
                </td>
              </tr>
            ))}
            {filteredWallets.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-white font-light text-center border-b border-[#2A1F49]">
                  No matching wallets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Static Pagination Buttons */}
      <div className="absolute bottom-[30px] w-full flex justify-center md:justify-end px-4 md:px-6">
        <div className="flex gap-1 text-sm items-center">
          <button className="px-3 py-1 rounded bg-transparent text-[#53545C] cursor-pointer">
            &lt;
          </button>
          <button className="px-3 py-1 rounded bg-[#7A61FC] text-white cursor-pointer">
            1
          </button>
          {[2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="px-3 py-1 rounded bg-transparent text-[#53545C] cursor-pointer"
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded bg-[#7A61FC] cursor-pointer"
            style={{ color: '#FFFFFF99' }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
