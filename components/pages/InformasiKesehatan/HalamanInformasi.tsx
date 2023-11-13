import React from 'react'
import Image from 'next/image'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const HalamanInformasi = () => {
  return (
<div className=" to-white w-full h-[700px] pb-24 ">
      <div className="flex flex-col  container ">
        <div className="flex flex-col mt-28  text-justify">
          <h1 className="text-center text-4xl font-bold">INFORMASI KESEHATAN</h1>
        </div>
        <div className='justify-start px-14 flex flex-col gap-4 mt-6 '>
          <div className='flex flex-row justify-start text-start gap-4 '>
            <h3 className='text-xl font-bold underline underline-offset-1'>
              Kategori Artikel
            </h3>
            <h3 className='text-md font-semibold text-[#207183]'>
              Lihat Artikel Terbaru
            </h3>
          </div>
          <div className='flex flex-row gap-20 rounded-2xl px-10 py-4 bg-[#4bb6be]'>
            <div className='flex flex-col gap-4'>
              <div className=''>
                <a href="#" className='font-bold text-white hover:text-[#207183]'>
                  HIDUP SEHAT
                </a>
              </div>
              <a href="#" className='font-bold text-white hover:text-[#207183]'>
                KESEHATAN MENTAL
              </a>
            </div>
            <div className='flex flex-col gap-4'>
              <a href="#" className='font-bold text-white hover:text-[#207183]'>
                KEHAMILAN
              </a>
              <a href="#" className='font-bold text-white hover:text-[#207183]'>
                NUTRISI DAN DIET
              </a>
            </div>
            <div className='flex flex-col gap-4'>
              <a href="#" className='font-bold text-white hover:text-[#207183]'>
                PENYAKIT
              </a>
              <a href="#" className='font-bold text-white hover:text-[#207183]'>
                GIZI DAN SUPLEMEN
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full mt-10 flex flex-row justify-center items-center gap-10">
          <button>
            <AiOutlineLeft size={50}/>
          </button>
          <div className='flex flex-row gap-10'>
            <a href="#" className='flex flex-col  w-[300px]'>
              <div className="relative overflow-hidden bg-[#34b1b1] rounded-xl h-[150px] w-[300px] flex flex-col p-6 items-center">
                <div className='object-fit'>
                  <Image
                  src="/image/hidupsehat.png"
                  alt='hidupsehat'
                  fill={true}/>
                </div>
              </div>
                <div className='mt-4'>
                  <h1 className='text-[#145782] font-semibold text-2xl'>HIDUP SEHAT</h1>
                  <p className='text-sm mt-4 line-clamp-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cumque obcaecati voluptas id eligendi sit eaque doloribus. Nulla, ex nisi ea maxime odit corrupti sequi repellendus, rerum velit, voluptatum quos.
                  </p>
                </div>
            </a>
            <a href="#" className='flex flex-col  w-[300px]'>
              <div className="relative overflow-hidden bg-[#34b1b1] rounded-xl h-[150px] w-[300px] flex flex-col p-6 items-center">
                <div className='object-fit'>
                  <Image
                  src="/image/kesehatanmental.png"
                  alt='kesehatanmental'
                  fill={true}/>
                </div>
              </div>
                <div className='mt-4'>
                  <h1 className='text-[#145782] font-semibold text-2xl'>KESEHATAN MENTAL</h1>
                  <p className='text-sm mt-4 line-clamp-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cumque obcaecati voluptas id eligendi sit eaque doloribus. Nulla, ex nisi ea maxime odit corrupti sequi repellendus, rerum velit, voluptatum quos.
                  </p>
                </div>
            </a>
            <a href="#" className='flex flex-col  w-[300px]'>
              <div className="relative overflow-hidden bg-[#34b1b1] rounded-xl h-[150px] w-[300px] flex flex-col p-6 items-center">
                <div className='object-fit'>
                  <Image
                  src="/image/kehamilan.png"
                  alt='kehamilan'
                  fill={true}/>
                </div>
              </div>
                <div className='mt-4'>
                  <h1 className='text-[#145782] font-semibold text-2xl'>KEHAMILAN</h1>
                  <p className='text-sm mt-4 line-clamp-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cumque obcaecati voluptas id eligendi sit eaque doloribus. Nulla, ex nisi ea maxime odit corrupti sequi repellendus, rerum velit, voluptatum quos.
                  </p>
                </div>
            </a>
          </div>
          <button>
            <AiOutlineRight size={50}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HalamanInformasi
