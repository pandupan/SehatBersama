'use client';

import React from 'react'
import Image from 'next/image'
import { crouselLP } from "@/lib/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselArtikel = () => {
  return (
    <div className='container px-20 flex flex-col justify-center items-center'>
      <div className='flex flex-row lg:gap-20 gap-8'>
      <Swiper
  navigation
  pagination={{ type: "fraction" }}
  modules={[Navigation, Pagination, Autoplay]}
  autoplay={{ delay: 3000 }}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  className="w-full rounded-lg text-[#4bb6be] flex justify-center items-center"
>
  {crouselLP.map((image, index) => (
    <SwiperSlide key={index}>
      <div className="relative md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px]">
        <Image
          src={image.src}
          alt="Artikel"
          fill={true}
          className="object-cover"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
      <div className='flex flex-row lg:mt-16 mt-4 lg:gap-10 gap-4'>
        <button title="." className='bg-[#c6e7e9] md:w-[80px] md:h-[40px] lg:w-[110px] lg:h-[40px] w-[50px] h-[20px] rounded-full'>

        </button>
        <button title="." className='bg-[#4bb6be] md:w-[80px] md:h-[40px] lg:w-[110px] lg:h-[40px] w-[50px] h-[20px] rounded-full'>

        </button>
        <button title="." className='bg-[#c6e7e9] md:w-[80px] md:h-[40px] lg:w-[110px] lg:h-[40px] w-[50px] h-[20px] rounded-full'>

        </button>
      </div>
    </div>
  )
}

export default CarouselArtikel