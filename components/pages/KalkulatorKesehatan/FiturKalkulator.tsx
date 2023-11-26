'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";


const FiturKalkulator = () => {

  const { data } : any = useSession();
  
  return (
    <div className="flex flex-col lg:h-[800px] h-[600px] lg:mb-24">
      <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 lg:px-20 px-4  lg:gap-4 sm:gap-2">
        <h1 className="lg:text-3xl sm:text-xl  font-bold">
          Kalkulator Kesehatan
        </h1>
        <div className="text-[#9a8e8e] font-bold lg:text-base sm:text-sm text-xs flex flex-row">
          <button>
          Home 
          </button>
          <div>
          &gt; Kalkulator Kesehatan  
          </div>
        </div>
      </div>
      <div className="container flex flex-row gap-2 sm:gap-10 lg:gap-20 xl:gap-32 justify-center items-center lg:mt-20 mt-10">
        <div className="flex flex-col h-[500px]">
          <a href="/KalkulatorKesehatan/KalkulatorIBM" title="IBM" className=" lg:h-[290px] sm:h-[190px] h-[120px] bg-[#9cd7d4] hover:bg-[#76a3a1] rounded-2xl">
            <div className="relative lg:w-[250px] lg:h-[250px]  sm:h-[150px] sm:w-[150px] w-[100px] h-[100px]">
              <Image
                src="/image/KalkulatorIBM.png"
                alt="kalkulatoribm"
                fill={true}
              />
            </div>
          </a>
          <div className="flex flex-col sm:w-[150px] lg:w-[230px] text-center">
            <h3 className="font-medium lg:text-xl sm:text-base text-xs py-4">Kalkulator IBM</h3>
            <p className="font-medium sm:text-sm lg:text-xl text-xs text-[#736f6f]">
              Alat skrining mandiri yang bisa dilakukan untuk mengontrol Body Mass Index
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[500px]">
          <a href="/KalkulatorKesehatan/AsupanAir" title="ASUPANAIR"className=" lg:h-[290px] sm:h-[190px] h-[120px] bg-[#9cd7d4] hover:bg-[#76a3a1] rounded-2xl">
            <div className="relative lg:w-[250px] lg:h-[250px]  sm:h-[150px] sm:w-[150px] w-[100px] h-[100px]">
              <Image
                src="/image/KalkulatorAsupanAir.png"
                alt="kalkulatoribm"
                fill={true}
              />
            </div>
          </a>
          <div className="flex flex-col sm:w-[150px] lg:w-[230px] text-center">
            <h3 className="font-medium lg:text-xl sm:text-base text-xs py-4">Asupan Air</h3>
            <p className="font-medium sm:text-sm lg:text-xl text-xs text-[#736f6f]">
            Alat Mandiri Pengontrol asupan air yang dibutuhkan sehari-hari
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[500px]">
          <a href="/KalkulatorKesehatan/KalkulatorBMR" title="BMR" className=" lg:h-[290px] sm:h-[190px] h-[120px] bg-[#9cd7d4] hover:bg-[#76a3a1] rounded-2xl">
            <div className="relative lg:w-[250px] lg:h-[250px]  sm:h-[150px] sm:w-[150px] w-[100px] h-[100px]">
              <Image
                src="/image/KalkulatorBMR.png"
                alt="kalkulatoribm"
                fill={true}
              />
            </div>
          </a>
          <div className="flex flex-col sm:w-[150px] lg:w-[230px] text-center">
            <h3 className="font-medium lg:text-xl sm:text-base text-xs py-4">Kalkulator BMR</h3>
            <p className="font-medium sm:text-sm lg:text-xl text-xs text-[#736f6f]">
            Alat untuk mengetahui berapa banyak kalori dari asupan makanan yang dimakan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiturKalkulator;
