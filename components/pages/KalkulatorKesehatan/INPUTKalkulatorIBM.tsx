import React from "react";
import Image from "next/image";

const KalkulatorIBM = () => {
  return (
    <div className="flex flex-col h-[1000px] sm:mb-24">
      <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 lg:px-20 px-4  lg:gap-4 sm:gap-2">
        <h1 className="lg:text-3xl sm:text-xl  font-bold">Kalkulator Kesehatan</h1>
        <div className="text-[#9a8e8e] font-bold lg:text-base sm:text-sm text-xs flex flex-row">
          <a href="/">Home</a>
          <a href="/KalkulatorKesehatan">&gt; Kalkulator Kesehatan</a>
          <div>&gt; Kalkulator IBM</div>
        </div>
      </div>
      <div className="container flex flex-col sm:gap-8 gap-4 justify-center items-center mt-10">
        <h1 className="text-center font-bold sm:text-3xl text-xl">Kalkulator IBM</h1>
        <div className="sm:w-[600px]">
          <p className="text-center sm:text-xl text-xs">
            Kalkulator IBM digunakan untuk menghitung Indeks Massa Tubuh (IMT)
            dan mengecek apakah berat badan dan tinggi badanmu sudah ideal atau
            belum
          </p>
          <h3 className="underline underline-offset-4 text-center font-bold sm:text-xl text-lg my-10">
            Pilih Jenis Kelamin
          </h3>
          <div className="flex flex-row justify-center items-center gap-10">
            <div className="">
              <button title="pria" className="flex flex-col justify-center items-center rounded-xl bg-[#4bb6be] hover:bg-[#36858b] sm:px-24 px-4 py-4">
                <div className="relative sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] rounded-full overflow-hidden">
                  <div className="object-fit">
                    <Image src="/image/pria.png" alt="Pria" fill={true} />
                  </div>
                </div>
                <h1 className="text-center mt-4 text-white font-bold sm:text-base text-sm underline underline-offset-auto">
                  Pria
                </h1>
              </button>
            </div>
            <div className="">
              <button title="wanita" className="flex flex-col justify-center items-center rounded-xl bg-[#4bb6be] hover:bg-[#36858b] sm:px-24 px-4 py-4">
                <div className="relative sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] rounded-full overflow-hidden">
                  <div className="object-fit">
                    <Image src="/image/wanita.png" alt="Pria" fill={true} />
                  </div>
                </div>
                <h1 className="text-center mt-4 text-white font-bold sm:text-base text-sm underline underline-offset-auto">
                  Wanita
                </h1>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-start sm:w-[400px] sm:gap-10 gap-4 p-4 flex-col bg-[#4bb6be] rounded-2xl text-white">
          <div>
            <h3 className="font-semibold sm:text-xl">Usia</h3>
            <input
              className="ml-2 p-2 border border-gray-300 rounded sm:w-[300px] sm:text-base text-xs w-[200px]"
              type="text"
              placeholder="Masukkan Usia Anda"
            />
          </div>
          <div>
            <h3 className="font-semibold sm:text-xl">Tinggi Badan</h3>
            <input
              className="ml-2 p-2 border border-gray-300 rounded sm:w-[300px] sm:text-base text-xs w-[200px]"
              type="text"
              placeholder="Masukkan Tinggi Badan Anda"
            />
          </div>
          <div>
            <h3 className="font-semibold sm:text-xl">Berat Badan</h3>
            <input
              className="ml-2 p-2 border border-gray-300 rounded sm:w-[300px] sm:text-base text-xs w-[200px]"
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
  );
};

export default KalkulatorIBM;
