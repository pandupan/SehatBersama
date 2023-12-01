import React from 'react'
import Image from 'next/image'
import { BsCheckLg } from 'react-icons/bs'

const FindKesehatan = () => {
  return (
    <div className='container justify-center items-center flex flex-col lg:py-64 sm:py-40 py-32'>
      <h1 className='font-medium lg:text-5xl sm:text-3xl text-lg'>
        Temukan Kesehatan Anda
      </h1>
      <p className='text-center lg:w-[980px] pt-4 lg:text-2xl sm:text-base text-xs'>
        Sehatbersama mengajak Anda untuk melihat gambaran kesehatan secara lebih komprehensif. Jelajahi kesehatan Anda secara menyeluruh
      </p>
      <div className='flex flex-row justify-center items-center lg:gap-10 lg:mt-20'>
        <div>
          <div className='relative lg:w-[400px] lg:h-[600px] sm:w-[230px] sm:h-[400px] w-[100px] h-[200px] '>
            <Image
            src="/image/Kalkulator.png"
            alt="Kalkulator Kesehatan"
            fill={true}
            className='object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col lg:w-[370px] lg:gap-8 gap-2 mt-10'>
          <div className='flex flex-row'>
            <div className='text-[#4bb6be] hidden lg:flex'>
              <BsCheckLg size={70}/>
            </div>
            <div className='text-[#4bb6be] lg:hidden md:flex hidden'>
              <BsCheckLg size={50}/>
            </div>
            <div className='text-[#4bb6be] sm:hidden flex'>
              <BsCheckLg size={30}/>
            </div>
            <div className='lg:ml-10 ml-2 flex flex-col lg:gap-4'>
              <h1 className='lg:text-4xl sm:text-2xl font-medium text-sm'>
                Kalkulator BMI
              </h1>
              <p className='lg:text-xl sm:text-lg text-xs text-justify'>
                Hitung indeks massa tubuh Anda untuk memahami proporsi tubuh Anda
              </p>
            </div>
          </div>
          <div className='flex flex-row'>
          <div className='text-[#4bb6be] hidden lg:flex'>
              <BsCheckLg size={70}/>
            </div>
            <div className='text-[#4bb6be] lg:hidden md:flex hidden'>
              <BsCheckLg size={50}/>
            </div>
            <div className='text-[#4bb6be] sm:hidden flex'>
              <BsCheckLg size={30}/>
            </div>
            <div className='lg:ml-10 ml-2 flex flex-col lg:gap-4'>
              <h1 className='lg:text-4xl sm:text-2xl font-medium text-sm'>
                Asupan Air
              </h1>
              <p className='lg:text-xl sm:text-lg text-xs text-justify'>
              Mengukur kebutuhan cairan harian Anda untuk menjaga hidrasi yang baik.
              </p>
            </div>
          </div>
          <div className='flex flex-row'>
          <div className='text-[#4bb6be] hidden lg:flex'>
              <BsCheckLg size={70}/>
            </div>
            <div className='text-[#4bb6be] lg:hidden md:flex hidden'>
              <BsCheckLg size={50}/>
            </div>
            <div className='text-[#4bb6be] sm:hidden flex'>
              <BsCheckLg size={30}/>
            </div>
            <div className='lg:ml-10 ml-2 flex flex-col lg:gap-4'>
              <h1 className='lg:text-4xl sm:text-2xl font-medium text-sm'>
                Asupan Kalori
              </h1>
              <p className='lg:text-xl sm:text-lg text-xs text-justify'>
              Lacak asupan kalori harian Anda untuk mendukung tujuan kesehatan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FindKesehatan
