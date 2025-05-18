'use client';

import { useState } from 'react';

interface WalletEntry {
  wallet: string;
  rhino: number;
}

const walletData: WalletEntry[] = [
  { wallet: '0x456548A9B56eFBbD89Ca0309edd17a9E20b04018', rhino: 34000 },
  { wallet: '0x456548A9B56eFBbD89Ca0309edd17a9E20b04018', rhino: 34000 },
  { wallet: '0x456548A9B56eFBbD89Ca0309edd17a9E20b04018', rhino: 34000 },
  { wallet: '0x456548A9B56eFBbD89Ca0309edd17a9E20b04018', rhino: 34000 },
  { wallet: '0x456548A9B56eFBbD89Ca0309edd17a9E20b04018', rhino: 34000 },
  ...Array(15).fill({
    wallet: '0x456548A9B56eFBbD89Ca0309edd17a9E20b04018',
    rhino: 34000
  })
];

export default function SearchLeaderBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Updated to show 20 per page

  const filteredWallets = walletData.filter((entry) =>
    entry.wallet.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredWallets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedWallets = filteredWallets.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (page: number) => setCurrentPage(page);
  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="relative flex flex-col items-center bg-[#8f6cfa25] rounded-[10px] border border-[#3C2A74] p-4 pb-16">
      {/* Search Bar */}
      <div className="relative w-full max-w-[485px] h-[50px] mb-6 px-4 md:px-0">
        <input
          type="text"
          placeholder="Search wallet address"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full h-full pl-[15px] pr-[45px] pt-[13px] pb-[13px] text-[#777777] text-[14px] font-[400] leading-[24px] rounded-[100px] bg-white outline-none"
        />
        {/* Icon */}
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
            {paginatedWallets.map((item, index) => (
              <tr key={index} className="border-b border-[#2A1F49]">
                <td colSpan={2} className="px-6 py-4 font-mono text-white font-light max-w-[300px]">
                  <div className="flex flex-wrap gap-1 items-center break-all">
                    <span className="text-white font-light">{startIndex + index + 1}.</span>
                    <span className="break-all">{item.wallet}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-white font-light">
                  {item.rhino.toLocaleString()}
                </td>
              </tr>
            ))}
            {paginatedWallets.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-white font-light text-center border-b border-[#2A1F49]">
                  No matching wallets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="absolute bottom-[30px] w-full flex justify-center md:justify-end px-4 md:px-6">
          <div className="flex gap-1 text-sm items-center">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-[#7A61FC] text-white hover:bg-[#7A61FC] disabled:bg-[#53545C] disabled:text-white"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page === 1 ||
                page === totalPages ||
                Math.abs(currentPage - page) <= 1
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? 'bg-[#7A61FC] text-white'
                        : 'bg-[#E0E0E0] text-[#53545C] hover:bg-[#D0D0D0]'
                    }`}
                  >
                    {page}
                  </button>
                );
              }

              if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page} className="px-2 text-[#53545C]">...</span>;
              }

              return null;
            })}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-[#7A61FC] text-white hover:bg-[#7A61FC] disabled:bg-[#53545C] disabled:text-white"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
