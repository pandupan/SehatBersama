import React from 'react'
import Image from 'next/image'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const LayananKonsul = () => {
  return (
<div className="bg-gradient-to-br from-teal-300 via-transparent to-white w-full h-[700px] pb-24 ">
      <div className="flex flex-col justify-center items-center container ">
        <div className="flex flex-col mt-28  text-justify">
          <h3 className="-ml-32 text-2xl font-medium">LAYANAN KONSULTASI</h3>
          <h1 className="text-center text-5xl font-medium">TERSEDIA LAYANAN</h1>
        </div>
        <div className="relative w-full mt-10 flex flex-row justify-center items-center gap-20 ">
          <button>
            <AiOutlineLeft size={50}/>
          </button>
          <div className="bg-[#34b1b1]  h-[332px] w-[300px] rounded-2xl flex flex-col p-6 items-center">
            <div>
              <div className="relative  w-[200px] h-[200px]  justify-center items-center py-14">
                <h1 className='text-4xl text-center text-white font-medium '>Konsultasi Anak</h1>
              </div>
            </div>
            <div className="mt-4">
              <button className='text-white bg-[#207183] hover:bg-[#13454f] px-6 py-2 rounded-xl'>
                Berlayanan
              </button>
            </div>
          </div>
          <div className="bg-[#34b1b1]  h-[332px] w-[300px] rounded-2xl flex flex-col p-6 items-center">
            <div>
              <div className="relative  w-[200px] h-[200px]  justify-center items-center py-14">
                <h1 className='text-4xl text-center text-white font-medium '>Konsultasi Kehamilan</h1>
              </div>
            </div>
            <div className="mt-4">
              <button className='text-white bg-[#207183] hover:bg-[#13454f] px-6 py-2 rounded-xl'>
                Berlayanan
              </button>
            </div>
          </div>
          <div className="bg-[#34b1b1]  h-[332px] w-[300px] rounded-2xl flex flex-col p-6 items-center">
            <div>
              <div className="relative  w-[200px] h-[200px]  justify-center items-center py-14">
                <h1 className='text-4xl text-center text-white font-medium '>Konsultasi  Kesehatan</h1>
              </div>
            </div>
            <div className="mt-4">
              <button className='text-white bg-[#207183] hover:bg-[#13454f] px-6 py-2 rounded-xl'>
                Berlayanan
              </button>
            </div>
          </div>
          <button>
            <AiOutlineRight size={50}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LayananKonsul
