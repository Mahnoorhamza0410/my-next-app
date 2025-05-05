'use client';

import { Particles } from '@/components/magicui/particles'; // Importing your custom particles component
import Image from 'next/image';

export default function BannerWithCountdown() {
  return (
    <section className="relative w-full">
      {/* Particles Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Particles /> {/* This is your custom particles component */}
      </div>

      {/* Banner Section with Custom Background */}
      <div
        className="bg-center bg-cover min-h-[90vh] flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ADADAD] font-extrabold text-[36px] sm:text-[60px] capitalize leading-[130%]"
          style={{ textShadow: '0px 5px 12px rgba(0, 0, 0, 0.20)' }}
        >
          THE FIRST EVER
        </h1>
        <p className="text-white font-light text-[18px] sm:text-[42px] mt-4 leading-[125%]">
          Hyper Deflationary, Dynamically Taxed, <br /> Multi-Rewards Machine
        </p>
        <button
          className="inline-flex items-center cursor-pointer uppercase sm:h-[auto] h-[59px] sm:w-[auto] w-[340px] justify-center px-[32px] sm:px-[51px] py-[18px] font-bold text-[18px] sm:text-[22px] rounded-[500px] bg-gradient-to-r from-[#BB57BF] via-[#2E4B94] to-[#2CC8D8] text-white leading-[48px] transition"
        >
          Join The Stampede
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            className="ml-2"
          >
            <rect x="0.5" y="1" width="35" height="35" rx="17.5" stroke="white" />
            <path
              d="M17.9998 34.0833C26.6063 34.0833 33.5832 27.1064 33.5832 18.5C33.5832 9.89355 26.6063 2.91666 17.9998 2.91666C9.3934 2.91666 2.4165 9.89355 2.4165 18.5C2.4165 27.1064 9.3934 34.0833 17.9998 34.0833Z"
              fill="url(#paint0_linear_3941_1324)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.47041 18.3355C14.0133 16.3562 17.0425 15.0514 18.5583 14.421C22.8859 12.6209 23.7852 12.3083 24.3713 12.2979C24.5002 12.2957 24.7884 12.3276 24.9751 12.4791C25.1328 12.607 25.1762 12.7798 25.1969 12.9011C25.2177 13.0224 25.2435 13.2987 25.223 13.5146C24.9885 15.9787 23.9737 21.9584 23.4575 24.7182C23.239 25.886 22.8089 26.2775 22.3925 26.3159C21.4875 26.3991 20.8004 25.7178 19.9239 25.1432C18.5523 24.2442 17.7775 23.6845 16.4462 22.8072C14.9076 21.7933 15.905 21.2361 16.7818 20.3254C17.0113 20.087 20.9985 16.4603 21.0757 16.1313C21.0854 16.0902 21.0943 15.9368 21.0032 15.8558C20.9121 15.7748 20.7776 15.8025 20.6806 15.8246C20.543 15.8558 18.352 17.304 14.1074 20.1691C13.4855 20.5962 12.9222 20.8043 12.4175 20.7934C11.8611 20.7814 10.7908 20.4788 9.9951 20.2201C9.0192 19.9029 8.24356 19.7352 8.3111 19.1964C8.34628 18.9158 8.73272 18.6288 9.47041 18.3355Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3941_1324"
                x1="17.9998"
                y1="2.91666"
                x2="17.9998"
                y2="33.8522"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2AABEE" />
                <stop offset="1" stopColor="#229ED9" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>

      {/* Bottom Countdown Section */}
      <div className="relative bg-no-repeat bg-cover bg-center w-full opacity-40 bg-[linear-gradient(90deg,rgba(47,35,82,0.2)_0%,rgba(143,108,250,0.2)_100%)] mx-auto px-4 py-10 sm:py-12 z-10">
        <h2 className="text-center text-white text-2xl font-semibold mb-8">
          Get Ready
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
          {/* Countdown Cards */}
          {['Days', 'Hours', 'Seconds'].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-lg p-6 text-center text-white w-full sm:w-1/3"
            >
              <p className="text-xl font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
