import React from 'react'

const INPUTAsupanAir = () => {
  return (
    <div className="flex flex-col h-[800px] sm:mb-24">
      <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 lg:px-20 px-4  lg:gap-4 sm:gap-2">
        <h1 className="lg:text-3xl sm:text-xl  font-bold">Kalkulator Kesehatan</h1>
        <div className="text-[#9a8e8e] font-bold lg:text-base sm:text-sm text-xs flex flex-row">
          <a href="/">Home</a>
          <a href="/KalkulatorKesehatan">&gt; Kalkulator Kesehatan</a>
          <div>&gt; Asupan Air</div>
        </div>
      </div>
      <div className="container flex flex-col sm:gap-8 gap-4 justify-center items-center mt-10">
      <h1 className="text-center font-bold sm:text-3xl text-xl">Asupan Air</h1>
        <div className="sm:w-[600px]">
          <p className="text-center sm:text-xl text-xs">
          Kalkulator asupan air membantu menentukan seberapa banyak air yang sebaiknya Anda minum setiap hari berdasarkan Usia dan Berat badan anda. Temukan berapa banyak air yang Anda butuhkan setiap hari untuk tetap sehat!
          </p>
        </div>
        <div className="flex justify-start sm:w-[400px] sm:gap-10 gap-4 p-4 flex-col bg-[#4bb6be] rounded-2xl text-white">
        <div>
          <h3 className="font-semibold sm:text-xl">Rentang Usia</h3>
          <select className="ml-2 p-2 border sm:text-base text-xs text-[#9ca3af] border-gray-300 rounded sm:w-[300px] w-[200px]" aria-label="Pilih Rentang Usia">
            <option value="" disabled selected className='text-[#9ca3af] '>Pilih Rentang Usia</option>
            <option className='text-[#9ca3af]' value="0-18">0-18 tahun</option>
            <option className='text-[#9ca3af]' value="19-30">19-30 tahun</option>
            <option className='text-[#9ca3af]' value="31-50">31-50 tahun</option>
            <option className='text-[#9ca3af]' value="51-65">51-65 tahun</option>
            <option className='text-[#9ca3af]'value="65+">65 tahun ke atas</option>
          </select>
        </div>

          <div>
            <h3 className="font-semibold sm:text-xl">Berat Badan</h3>
            <input
              className="ml-2 p-2 border sm:text-base text-xs border-gray-300 rounded sm:w-[300px] w-[200px] text-black"
              type="text"
              placeholder="Masukkan Berat Badan Anda"
            />
          </div>
        </div>
        <div>
            <button className="sm:px-10 sm:py-4 px-6 py-2 bg-[#4bb6be] rounded-2xl text-white sm:text-xl font-semibold">
              Masukan
            </button>
          </div>
      </div>
    </div>
  )
}

export default INPUTAsupanAir
