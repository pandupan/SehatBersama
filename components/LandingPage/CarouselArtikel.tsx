import React from 'react'
import Image from 'next/image'

const CarouselArtikel = () => {
  return (
    <div className='container px-20 flex flex-col justify-center items-center'>
      <div className='flex flex-row gap-20'>
        <div className=' relative w-[400px] h-[400px]'>
        <Image
          src="/image/CarouselArtikel.png"
          alt='Artikel'
          fill={true}
          />
        </div>
        <div className=' relative w-[400px] h-[400px]'>
        <Image
          src="/image/CarouselArtikel.png"
          alt='Artikel'
          fill={true}
          />
        </div>
      </div>
      <div className='flex flex-row mt-16 gap-10'>
        <button className='bg-[#c6e7e9] w-[110px] h-[40px] rounded-full'>
      
        </button>
        <button className='bg-[#4bb6be] w-[110px] h-[40px] rounded-full'>

        </button>
        <button className='bg-[#c6e7e9] w-[110px] h-[40px] rounded-full'>

        </button>
      </div>
    </div>
  )
}

export default CarouselArtikel
