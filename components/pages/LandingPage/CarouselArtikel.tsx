import React from 'react'
import Image from 'next/image'

const CarouselArtikel = () => {
  return (
    <div className='container px-20 flex flex-col justify-center items-center'>
      <div className='flex flex-row lg:gap-20 gap-8'>
        <div className=' relative md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px]'>
        <Image
          src="/image/CarouselArtikel.png"
          alt='Artikel'
          fill={true}
          />
        </div>
        <div className=' relative md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px]'>
        <Image
          src="/image/CarouselArtikel.png"
          alt='Artikel'
          fill={true}
          />
        </div>
      </div>
      <div className='flex flex-row lg:mt-16 mt-4 lg:gap-10 gap-4'>
        <button className='bg-[#c6e7e9] md:w-[80px] md:h-[40px] lg:w-[110px] lg:h-[40px] w-[50px] h-[20px] rounded-full'>
      
        </button>
        <button className='bg-[#4bb6be] md:w-[80px] md:h-[40px] lg:w-[110px] lg:h-[40px] w-[50px] h-[20px] rounded-full'>

        </button>
        <button className='bg-[#c6e7e9] md:w-[80px] md:h-[40px] lg:w-[110px] lg:h-[40px] w-[50px] h-[20px] rounded-full'>

        </button>
      </div>
    </div>
  )
}

export default CarouselArtikel
