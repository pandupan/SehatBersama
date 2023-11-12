import React from 'react'
import Image from 'next/image'

const AboutForum = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <div className='flex flex-row gap-20'>
        <div className='w-[350px] mt-20'>
          <p className='text-3xl'>
          &quot;Forum komunitas adalah ruang untuk berdiskusi, berbagi, dan belajar bersama. Temukan dukungan, informasi, dan inspirasi dari komunitas Sehatbersama.&quot;
          </p>
        </div>
        <div className='relative w-[528px] h-[564px]'>
          <Image
          src="/image/InformKes.jpeg"
          alt="aboutforum"
          fill={true}
          />
        </div>
      </div>
      <div className='flex flex-row bg-[#eaf8f6] w-full h-[400px] -mt-40  gap-10'>
        <div className='container flex-row flex px-32 gap-10'>
          <div className='flex flex-col mt-28 w-[278px] h-[467px] items-center'>
            <div className='relative w-[278px] h-[367px] '>
              <Image
              src="/image/LayananKonsultasi.png"
              alt="Layanan Diskusi"
              fill={true}/>
            </div>
            <div className=' justify-center flex items-center'>
              <h3 className='text-center mt-10 text-xl '>Layanan Konsultasi</h3>
            </div>
          </div>
          <div className='flex flex-col mt-28 w-[278px] h-[467px] items-center'>
            <div className='relative w-[278px] h-[367px] '>
              <Image
              src="/image/ForumDisk.png"
              alt="Layanan Diskusi"
              fill={true}/>
            </div>
            <div className=' justify-center flex items-center'>
              <h3 className='text-center mt-10 text-xl '>Forum Diskusi</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutForum
