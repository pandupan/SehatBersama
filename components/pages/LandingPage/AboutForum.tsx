import React from 'react'
import Image from 'next/image'

const AboutForum = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:mt-32 mt-16'>
      <div className='flex flex-row lg:gap-20'>
        <div className='lg:w-[350px] sm:w-[300px] w-[150px] mt-20'>
          <p className='lg:text-3xl sm:text-xl text-xs lg:mt-0 sm:-mt-10 -mt-20'>
          &quot;Forum komunitas adalah ruang untuk berdiskusi, berbagi, dan belajar bersama. Temukan dukungan, informasi, dan inspirasi dari komunitas Sehatbersama.&quot;
          </p>
        </div>
        <div className='relative lg:w-[528px] lg:h-[564px] sm:w-[328px] sm:h-[364px] w-[124px] h-[142px]'>
          <Image
          src="/image/ForumKomunitas.png"
          alt="aboutforum"
          fill={true}
          className='object-cover'
          />
        </div>
      </div>
      <div className='flex flex-row bg-[#eaf8f6] w-full lg:h-[400px] sm:h-[250px] h-[130px] lg:-mt-40 -mt-4 gap-10'>
        <div className='container flex-row flex lg:px-32 lg:gap-10 '>
          <div className='flex flex-col lg:mt-28 mt-10 w-[278px] h-[467px] items-center'>
            <div className='relative lg:w-[278px] lg:h-[367px] sm:w-[200px] sm:h-[267px] w-[100px] h-[140px]'>
              <Image
              src="/image/LayananKonsultasi.png"
              alt="Layanan Diskusi"
              fill={true}/>
            </div>
            <div className=' justify-center flex items-center'>
              <h3 className='text-center lg:mt-10 mt-2 lg:text-xl text-sm sm:text-lg '>Layanan Konsultasi</h3>
            </div>
          </div>
          <div className='flex flex-col lg:mt-28 mt-10 w-[278px] h-[467px] items-center'>
            <div className='relative lg:w-[278px] lg:h-[367px] sm:w-[200px] sm:h-[267px] w-[100px] h-[140px]'>
              <Image
              src="/image/ForumDisk.png"
              alt="Layanan Diskusi"
              fill={true}/>
            </div>
            <div className=' justify-center flex items-center'>
              <h3 className='text-center lg:mt-10 mt-2 lg:text-xl text-sm sm:text-lg '>Forum Diskusi</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutForum
