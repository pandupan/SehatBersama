import React from 'react'
import Image from 'next/image'

const HeroKonsultasi = () => {
  return (
    <div className='bg-gradient-to-br from-teal-300 via-transparent to-white w-full h-[500px] mb-24'>
      <div className='flex flex-row container justify-center items-center gap-20'>
        <div className='flex flex-col mt-20 w-[360px] gap-4 text-justify'>
          <h1 className='text-3xl font-bold'>AYOO KONSULTASI</h1>
          <p className='text-xl '>
          Jangan biarkan masalah kesehatan Anda semakin parah, segera konsultasikan dengan dokter untuk mendapatkan penanganan yang tepat.
          </p>
          <div>
            <a href="/LayananKomunitas" className='px-10 py-2 bg-[#4bb6be] hover:bg-[#36858b] text-white text-md rounded-xl'>
              Gabung Komunitas
            </a>
          </div>
        </div>
        <div className='relative w-[600px] h-[500px] mt-20'>
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
