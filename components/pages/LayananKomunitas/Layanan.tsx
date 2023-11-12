import React from "react";
import Image from "next/image";

const Layanan = () => {
  return (
    <div className="bg-gradient-to-br from-teal-300 via-transparent to-white w-full h-[700px] pb-24 ">
      <div className="flex flex-col justify-center items-center container ">
        <div className="flex flex-col mt-28  text-justify">
          <h3 className="-ml-32 text-2xl font-medium">KOMUNITAS</h3>
          <h1 className="text-center text-5xl font-medium">TERSEDIA LAYANAN</h1>
        </div>
        <div className="relative w-full mt-10 flex justify-center items-center gap-40 ">
          <a href="#" className="bg-[#34b1b1] hover:bg-[#257d7d] h-[362px] w-[300px] rounded-2xl flex flex-col p-6 items-center">
            <div>
              <div className="relative  w-[200px] h-[200px]">
              <div className="object-fit">
                  <Image
                  src="/image/ForumDiskusi.png"
                  alt=""
                  fill={true}/>
                </div>  
              </div>
            </div>
            <div className="mt-4">
              <h1 className="flex justify-center text-center font-bold">
                Forum Diskusi
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>
          <a href="/LayananKonsultasi" className="bg-[#34b1b1] hover:bg-[#257d7d] h-[362px] w-[300px] rounded-2xl flex flex-col p-6 items-center">
            <div>
              <div className="relative  w-[200px] h-[200px]">
                <div className="object-fit">
                  <Image
                  src="/image/LayananKonsult.png"
                  alt=""
                  fill={true}/>
                </div>  
              </div>
            </div>
            <div className="mt-4">
              <h1 className="flex justify-center text-center font-bold">
                Layanan Konsultasi
              </h1>
              <p className="text-center">
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
