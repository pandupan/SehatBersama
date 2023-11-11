import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='relative'>
      <div className='w-full h-[825px]'>
        <Image
        src="/image/HeroSection.png"
        alt="HeroSection"
        fill={true} />
      </div>
      <div className='relative container'>
        <div className='absolute w-[700px] h-[530px] text-white bg-[#4bb6be] -top-60 left-20 p-10 flex flex-col gap-8'>
          <h1 className='text-7xl font-semibold '>
            Jelajahi
          </h1>
          <h1 className='text-7xl font-semibold '>
            Hidup Sehat
          </h1>
          <h1 className='text-7xl font-semibold '>
            dengan
          </h1>
          <h1 className='text-7xl font-semibold '>
            SehatBersama
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
