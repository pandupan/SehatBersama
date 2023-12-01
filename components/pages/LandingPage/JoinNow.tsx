import Link from 'next/link'
import React from 'react'

const JoinNow = () => {
  return (
    <div className='container flex justify-center items-center lg:mt-[200px] sm:mt-[150px] mt-[100px] flex-col'>
      <div className='border-2 border-[#4bb6be] lg:px-20 lg:py-12 px-8 py-6 rounded-[70px] lg:w-[1050px]'>
        <p className='text-black lg:text-2xl text-xs md:text-base text-justify'>
        &quot;Bersama Sehatbersama, kesehatan menjadi prioritas. Kami ada untuk memberikan bimbingan dan informasi yang akan memudahkan Anda dalam mencapai hidup yang lebih sehat dan bahagia. Mari berawal dari sini, bersama-sama.&quot;
        </p>
      </div>
      <div className='lg:mt-14 mt-4'>
        <Link href='/ForumKomunitas' className='py-4 px-4 bg-[#4bb6be] hover:bg-[#30787d] rounded-xl text-white text-xs md:text-base lg:text-2xl'>
              Bergabung Sekarang
        </Link>
      </div>
    </div>
  )
}

export default JoinNow
