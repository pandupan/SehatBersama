import React from 'react'
import Image from 'next/image'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const LayananKonsul = () => {
  return (
<div className="bg-gradient-to-br from-teal-300 via-transparent to-white w-full lg:h-[700px] sm:h-[600px] h-[500px] pb-24 ">
      <div className="flex flex-col justify-center items-center container ">
        <div className="flex flex-col mt-28  text-justify">
          <h3 className="sm:-ml-32 -ml-10 lg:text-2xl sm:text-xl text-sm font-medium">LAYANAN KONSULTASI</h3>
          <h1 className="text-center lg:text-5xl sm:text-3xl text-xl font-medium">TERSEDIA LAYANAN</h1>
        </div>
        <div className="relative w-full mt-10 flex flex-row justify-center items-center xl:gap-20 lg:gap-10 gap-4">
          <button title='left' className='lg:flex hidden'>
            <AiOutlineLeft size={50}/>
          </button>
          <button title='left' className='sm:flex lg:hidden'>
            <AiOutlineLeft size={30}/>
          </button>
          <div className="bg-[#34b1b1]  lg:h-[332px] lg:w-[300px] sm:h-[252px] sm:w-[200px] w-[200px] h-[200px] rounded-2xl flex flex-col p-6 items-center">
            <div>
              <div className="relative  lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px]  justify-center items-center lg:py-14 sm:py-4">
                <h1 className='sm:text-2xl lg:text-4xl text-lg text-center text-white font-medium '>Konsultasi Anak</h1>
              </div>
            </div>
            <div className="mt-4">
              <button className='lg:text-base sm:text-sm text-xs text-white bg-[#207183] hover:bg-[#13454f] px-6 py-2 rounded-xl'>
                Berlayanan
              </button>
            </div>
          </div>
          <div className="bg-[#34b1b1]  lg:h-[332px] lg:w-[300px] sm:h-[252px] sm:w-[200px] w-[200px] h-[200px] rounded-2xl sm:flex hidden flex-col p-6 items-center">
            <div>
              <div className="relative  lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px]  justify-center items-center lg:py-14 sm:py-4">
                <h1 className='sm:text-2xl lg:text-4xl text-lg text-center text-white font-medium '>Konsultasi Kehamilan</h1>
              </div>
            </div>
            <div className="mt-4">
              <button className='lg:text-base sm:text-sm text-xs text-white bg-[#207183] hover:bg-[#13454f] px-6 py-2 rounded-xl'>
                Berlayanan
              </button>
            </div>
          </div>
          <div className="bg-[#34b1b1]  lg:h-[332px] lg:w-[300px] sm:h-[252px] sm:w-[200px] w-[200px] h-[200px] rounded-2xl sm:flex hidden flex-col p-6 items-center">
            <div>
              <div className="relative  lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px]  justify-center items-center lg:py-14 sm:py-4">
                <h1 className='sm:text-2xl lg:text-4xl text-lg text-center text-white font-medium '>Konsultasi  Kesehatan</h1>
              </div>
            </div>
            <div className="mt-4">
              <button className='lg:text-base sm:text-sm text-xs text-white bg-[#207183] hover:bg-[#13454f] px-6 py-2 rounded-xl'>
                Berlayanan
              </button>
            </div>
          </div>
          <button title='Right' className='lg:flex hidden'>
            <AiOutlineRight size={50}/>
          </button>
          <button title='Right' className='sm:flex lg:hidden'>
            <AiOutlineRight size={30}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LayananKonsul
