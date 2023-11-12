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
      <div className='flex flex-row justify-center items-center gap-10'>
        <div className='relative w-[400px] h-[600px]'>
          <Image
          src="/image/Kalkulator.png"
          alt="Kalkulator Kesehatan"
          fill={true}
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
              <BsCheckLg size={100}/>
            <div className='flex flex-col'>
              <h1 className='text-4xl font-medium'>
                Kalkulator BMI
              </h1>
              <p className='text-xl'>
                Hitung indeks massa tubuh Anda untuk memahami proporsi tubuh Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindKesehatan
