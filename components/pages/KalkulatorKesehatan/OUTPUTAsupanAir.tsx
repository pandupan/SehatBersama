import React from 'react'

const OUTPUTAsupanAir = () => {
  return (
<div className="flex flex-col container  pt-20 pb-40 px-20">
      <div className="border-2 border-gray-100 rounded-t-2xl p-10 flex flex-col">     
            <p className="text-2xl border rounded-2xl py-2 px-4 mt-4 text-center font-semibold">
              Anda disarankan untuk mengonsumsi sekitar 2.1 mL air setiap hari.
            </p>
        <div className="flex-col bg-gray-100 rounded-2xl p-6">
          <p className='text-center'>Pastikan untuk menyebarkan konsumsi air Anda sepanjang hari untuk menjaga hidrasi tubuh optimal.</p>
        </div>
      </div>
      <a href="/KalkulatorKesehatan" className="px-10 py-4 bg-[#4bb6be] text-white text-center rounded-b-2xl">
        CEK KESEHATAN LAINNYA
      </a>
    </div>
  )
}

export default OUTPUTAsupanAir
