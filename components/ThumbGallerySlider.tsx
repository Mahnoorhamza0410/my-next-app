'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
const images = [
  '/hero-bg.jpg',
  '/Rhino-big.png',
  '/hero-bg.jpg',
  '/Rhino-big.png',
  '/hero-bg.jpg',
  '/Rhino-big.png',
  '/hero-bg.jpg',
  '/Rhino-big.png',
];
function ThumbGallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-full sm:h-screen h-auto overflow-hidden">
      {/* Main Image Slider */}
      <Swiper
        spaceBetween={10}
        loop
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Autoplay]}
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-contain sm:object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Thumbnails with Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-black/50 py-4">
        <div className="w-full  px-4 overflow-hidden">
        <Swiper
  onSwiper={setThumbsSwiper}
  spaceBetween={10}
  watchSlidesProgress
  loop
  modules={[Thumbs]}
  className="overflow-hidden"
  breakpoints={{
    0: {
      slidesPerView: 4, // Mobile
    },
    768: {
      slidesPerView: 6, // Tablet
    },
    1024: {
      slidesPerView: 8, // Desktop
    },
  }}
>
            {images.map((img, i) => {
              const isActive = activeIndex === i;
              return (
                <SwiperSlide key={i}>
                  <div
                    className={`rounded-[18px] sm:rounded-[20px] ${
                      isActive
                        ? 'p-[2px] bg-[linear-gradient(90deg,#9F54B6,#2CC0D4)]'
                        : 'p-[1px] border-2 border-white'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${i}`}
                      className="w-[205px] sm:w-[auto] h-[auto] sm:h-[auto] object-cover rounded-[20px] cursor-pointer transition-opacity duration-200"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default ThumbGallerySlider;