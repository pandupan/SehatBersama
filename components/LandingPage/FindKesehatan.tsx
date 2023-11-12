import React from 'react'
import Image from 'next/image'
import { BsCheckLg } from 'react-icons/bs'

const FindKesehatan = () => {
  return (
    <div className='container justify-center items-center flex flex-col py-64'>
      <h1 className='font-medium text-5xl'>
        Temukan Kesehatan Anda
      </h1>
      <p className='text-center w-[980px] pt-12 text-2xl'>
        Sehatbersama mengajak Anda untuk melihat gambaran kesehatan secara lebih komprehensif. Jelajahi kesehatan Anda secara menyeluruh
      </p>
      <div className='flex flex-row justify-center items-center gap-10 mt-20'>
        <div className='relative w-[400px] h-[600px]'>
          <Image
          src="/image/Kalkulator.png"
          alt="Kalkulator Kesehatan"
          fill={true}
          />
        </div>
        <div className='flex flex-col w-[370px] gap-8 mt-10'>
          <div className='flex flex-row'>
            <div className='text-[#4bb6be]'>
              <BsCheckLg size={70}/>
            </div>
            <div className='ml-10 flex flex-col gap-4'>
              <h1 className='text-4xl font-medium'>
                Kalkulator BMI
              </h1>
              <p className='text-xl text-justify'>
                Hitung indeks massa tubuh Anda untuk memahami proporsi tubuh Anda
              </p>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='text-[#4bb6be]'>
              <BsCheckLg size={70}/>
            </div>
            <div className='ml-10 flex flex-col gap-4'>
              <h1 className='text-4xl font-medium'>
                Asupan Air
              </h1>
              <p className='text-xl text-justify'>
              Mengukur kebutuhan cairan harian Anda untuk menjaga hidrasi yang baik.
              </p>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='text-[#4bb6be]'>
              <BsCheckLg size={70}/>
            </div>
            <div className='ml-10 flex flex-col gap-4'>
              <h1 className='text-4xl font-medium'>
                Asupan Kalori
              </h1>
              <p className='text-xl text-justify'>
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
