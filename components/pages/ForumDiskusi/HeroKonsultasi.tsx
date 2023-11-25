import React from 'react'
import Image from 'next/image'

const HeroKonsultasi = () => {
  return (
    <div className='flex flex-row bg-gradient-to-br from-teal-300 via-transparent to-white w-full lg:h-[500px] sm:h-[300px] mb-24 lg:mt-0 sm:mt-4'>
      <div className='flex sm:flex-row  flex-col-reverse container justify-center items-center sm:gap-20'>
        <div className='flex flex-col sm:mt-20 sm:w-[360px] w-[260px] gap-4 text-justify'>
          <h1 className='lg:text-3xl sm:text-3xl text-sm font-bold'>AYOO KONSULTASI</h1>
          <p className='lg:text-xl sm:text-sm text-xs'>
          Jangan biarkan masalah kesehatan Anda semakin parah, segera konsultasikan dengan dokter untuk mendapatkan penanganan yang tepat.
          </p>
          <div>
            <a href="/LayananKomunitas" className='px-10 py-2 bg-[#4bb6be] hover:bg-[#36858b] text-white lg:text-base sm:text-sm text-xs rounded-xl'>
              Gabung Komunitas
            </a>
          </div>
        </div>
        <div className='relative lg:w-[600px] xl:h-[500px] lg:h-[400px] sm:h-[250px] sm:w-[400px] w-[250px] h-[170px] mt-20'>
          <Image
          src="/image/KonsulDokter.png"
          alt='Konsultasi'
          fill={true}/>
        </div>
      </div>
    </div>
  )
}

export default HeroKonsultasi
