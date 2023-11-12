import React from 'react'

const INPUTAsupanAir = () => {
  return (
    <div className="flex flex-col h-[1100px] mb-24">
      <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 px-20  gap-4">
        <h1 className="text-3xl font-bold">Kalkulator Kesehatan</h1>
        <div className="text-[#9a8e8e] font-bold flex flex-row">
          <a href="/">Home</a>
          <a href="/KalkulatorKesehatan">&gt; Kalkulator Kesehatan</a>
          <div>&gt; Asupan Air</div>
        </div>
      </div>
      <div className="container flex flex-col gap-8 justify-center items-center mt-10">
      <h1 className="text-center font-bold text-3xl">Kalkulator IBM</h1>
        <div className="w-[600px]">
          <p className="text-center text-xl">
            Kalkulator IBM digunakan untuk menghitung Indeks Massa Tubuh (IMT)
            dan mengecek apakah berat badan dan tinggi badanmu sudah ideal atau
            belum
          </p>
        </div>
        <div className="flex justify-start w-[400px] gap-10 p-4 flex-col bg-[#4bb6be] rounded-2xl text-white">
          <div>
            <h3 className="font-semibold text-xl">Usia</h3>
            <input
              className="ml-2 p-2 border border-gray-300 rounded w-[300px]"
              type="text"
              placeholder="Masukkan Usia Anda"
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl">Tinggi Badan</h3>
            <input
              className="ml-2 p-2 border border-gray-300 rounded w-[300px]"
              type="text"
              placeholder="Masukkan Tinggi Badan Anda"
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl">Berat Badan</h3>
            <input
              className="ml-2 p-2 border border-gray-300 rounded w-[300px]"
              type="text"
              placeholder="Masukkan Berat Badan Anda"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default INPUTAsupanAir
