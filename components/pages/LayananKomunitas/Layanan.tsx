import React from "react";
import Image from "next/image";

const Layanan = () => {
  return (
    <div className="bg-gradient-to-br from-teal-300 via-transparent to-white w-full lg:h-[700px] h-[520px] lg:pb-24  ">
      <div className="flex flex-col justify-center items-center container ">
        <div className="flex flex-col mt-28  text-justify">
          <h3 className="sm:-ml-32 -ml-10 lg:text-2xl sm:text-xl text-sm font-medium">KOMUNITAS</h3>
          <h1 className="text-center lg:text-5xl sm:text-3xl text-xl font-medium">TERSEDIA LAYANAN</h1>
        </div>
        <div className="relative w-full mt-10 flex justify-center items-center lg:gap-40 sm:gap-20 gap-4">
          <a href="#" className="bg-[#34b1b1] hover:bg-[#257d7d] lg:h-[362px] lg:w-[300px] sm:h-[242px] sm:w-[200px] h-[260px] w-[200px] rounded-2xl flex flex-col p-6 items-center">
            <div>
              <div className="relative  lg:w-[200px] lg:h-[200px] sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]">
              <div className="object-fit">
                  <Image
                  src="/image/ForumDiskusi.png"
                  alt=""
                  fill={true}/>
                </div>  
              </div>
            </div>
            <div className="mt-4">
              <h1 className="flex justify-center text-center font-bold lg:text-xl text-sm">
                Forum Diskusi
              </h1>
              <p className="text-center lg:text-base text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>
          <a href="/LayananKonsultasi" className="bg-[#34b1b1] hover:bg-[#257d7d] lg:h-[362px] lg:w-[300px] sm:h-[242px] sm:w-[200px] h-[260px] w-[200px] rounded-2xl flex flex-col p-6 items-center">
            <div>
              <div className="relative  lg:w-[200px] lg:h-[200px] sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]">
                <div className="object-fit">
                  <Image
                  src="/image/LayananKonsult.png"
                  alt=""
                  fill={true}/>
                </div>  
              </div>
            </div>
            <div className="mt-4">
              <h1 className="flex justify-center text-center font-bold lg:text-xl text-sm">
                Layanan Konsultasi
              </h1>
              <p className="text-center lg:text-base text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
