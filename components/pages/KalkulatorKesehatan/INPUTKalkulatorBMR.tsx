import React from "react";
import Image from "next/image";

const INPUTKalkulatorBMR = () => {
  return (
    <div className="flex flex-col h-[1100px] mb-24">
      <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 px-20  gap-4">
        <h1 className="text-3xl font-bold">Kalkulator Kesehatan</h1>
        <div className="text-[#9a8e8e] font-bold flex flex-row">
          <a href="/">Home</a>
          <a href="/KalkulatorKesehatan">&gt; Kalkulator Kesehatan</a>
          <div>&gt; Kalkulator BMR</div>
        </div>
      </div>
      <div className="container flex flex-col gap-8 justify-center items-center mt-10">
        <h1 className="text-center font-bold text-3xl">Kalkulator BMR </h1>
        <div className="w-[600px]">
          <p className="text-center text-xl">
            Kalkulator BMR (Basal Metabolic Rate) digunakan untuk menghitung
            jumlah kalori yang dibutuhkan oleh tubuh dalam keadaan istirahat
            untuk menjaga fungsi-fungsi dasar seperti pernapasan, detak jantung,
            dan pemeliharaan suhu tubuh.
          </p>
          <h3 className="underline underline-offset-4 text-center font-bold text-xl my-10">
            Pilih Jenis Kelamin
          </h3>
          <div className="flex flex-row gap-10 -ml-4">
            <div className="">
              <button className="flex flex-col justify-center items-center rounded-xl bg-[#4bb6be] hover:bg-[#36858b] px-24 py-4">
                <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
                  <div className="object-fit">
                    <Image src="/image/pria.png" alt="Pria" fill={true} />
                  </div>
                </div>
                <h1 className="text-center mt-4 font-bold text-white underline underline-offset-auto">
                  Pria
                </h1>
              </button>
            </div>
            <div className="">
              <button className="flex flex-col justify-center items-center rounded-xl bg-[#4bb6be] hover:bg-[#36858b] px-24 py-4">
                <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
                  <div className="object-fit">
                    <Image src="/image/wanita.png" alt="Pria" fill={true} />
                  </div>
                </div>
                <h1 className="text-center mt-4 font-bold text-white underline underline-offset-auto">
                  Wanita
                </h1>
              </button>
            </div>
          </div>
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
        <div>
          <button className="px-10 py-4 bg-[#4bb6be] rounded-2xl text-white text-xl font-semibold">
            Masukan
          </button>
        </div>
      </div>
    </div>
  );
};

export default INPUTKalkulatorBMR;
