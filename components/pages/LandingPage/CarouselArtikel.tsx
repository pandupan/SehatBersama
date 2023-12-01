'use client';

import React from 'react'
import Image from 'next/image'
import { crouselLP } from "@/lib/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';

const CarouselArtikel = () => {
  return (
    <div className='container px-20 flex flex-col justify-center items-center w-full'>
      <div className='flex flex-row lg:gap-20 gap-8 justify-center items-center w-full'>
      <Swiper
  navigation
  pagination={{ type: "fraction" }}
  modules={[Navigation, Pagination, Autoplay]}
  autoplay={{ delay: 3000 }}
  breakpoints={{
    640: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1024: {
      slidesPerView: 2,

    },
  }}
  className='flex justify-center items-center mx-auto text-[#4bb6be]'
>
  {crouselLP.map((image, index) => (
    <SwiperSlide key={index}>
      <div className="relative mx-auto md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px]">
      <Link href={image.link}>
        <Image
          src={image.src}
          alt="Artikel"
          fill={true}
          className="object-cover"
        />
      </Link>
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