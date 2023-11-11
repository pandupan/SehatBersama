import React from 'react'

const JoinNow = () => {
  return (
    <div className='container flex justify-center items-center mt-[350px] flex-col'>
      <div className='border-2 border-[#4bb6be] px-20 py-12 rounded-[70px] '>
        <p className='text-black text-4xl text-justify'>
        &quot;Bersama Sehatbersama, kesehatan menjadi prioritas. Kami ada untuk memberikan bimbingan dan informasi yang akan memudahkan Anda dalam mencapai hidup yang lebih sehat dan bahagia. Mari berawal dari sini, bersama-sama.&quot;
        </p>
      </div>
      <div className='mt-14'>
        <button className='py-6 px-4 bg-[#4bb6be] rounded-xl'>
            <h3 className='text-white text-3xl'>
              Bergabung Sekarang
            </h3>
        </button>
      </div>
    </div>
  )
}

export default JoinNow
