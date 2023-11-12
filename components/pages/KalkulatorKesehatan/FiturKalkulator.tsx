import React from "react";
import Image from "next/image";

const FiturKalkulator = () => {
  return (
    <div className="flex flex-col h-[800px] mb-24">
      <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 px-20  gap-4">
        <h1 className="text-3xl font-bold">
          Kalkulator Kesehatan
        </h1>
        <div className="text-[#9a8e8e] font-bold flex flex-row">
          <button>
          Home 
          </button>
          <div>
          &gt; Kalkulator Kesehatan  
          </div>
        </div>
      </div>
      <div className="container flex flex-row gap-32 justify-center items-center mt-20">
        <div className="flex flex-col h-[500px]">
          <a href="/KalkulatorKesehatan/KalkulatorIBM" className=" h-[290px] bg-[#9cd7d4] hover:bg-[#76a3a1] rounded-2xl">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src="/image/KalkulatorIBM.png"
                alt="kalkulatoribm"
                fill={true}
              />
            </div>
          </a>
          <div className="flex flex-col w-[230px] text-center">
            <h3 className="font-medium text-xl py-4">Kalkulator IBM</h3>
            <p className="font-medium text-xl text-[#736f6f]">
              Alat skrining mandiri yang bisa dilakukan untuk mengontrol Body
              Mass Index
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[500px]">
          <a href="/KalkulatorKesehatan/AsupanAir" className=" h-[290px] bg-[#9cd7d4] hover:bg-[#76a3a1] rounded-2xl">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src="/image/KalkulatorAsupanAir.png"
                alt="kalkulatoribm"
                fill={true}
              />
            </div>
          </a>
          <div className="flex flex-col w-[230px] text-center">
            <h3 className="font-medium text-xl py-4">Asupan Air</h3>
            <p className="font-medium text-xl text-[#736f6f]">
            Alat Mandiri Pengontrol asupan air yang dibutuhkan sehari-hari
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[500px]">
          <a href="/KalkulatorKesehatan/KalkulatorBMR" className=" h-[290px] bg-[#9cd7d4] hover:bg-[#76a3a1] rounded-2xl">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src="/image/KalkulatorBMR.png"
                alt="kalkulatoribm"
                fill={true}
              />
            </div>
          </a>
          <div className="flex flex-col w-[230px] text-center">
            <h3 className="font-medium text-xl py-4">Kalkulator BMR</h3>
            <p className="font-medium text-xl text-[#736f6f]">
            Alat untuk mengetahui berapa banyak kalori dari asupan makanan yang dimakan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiturKalkulator;
