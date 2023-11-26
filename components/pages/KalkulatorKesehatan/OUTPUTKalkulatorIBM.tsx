import React from "react";

const OUTPUTKalkulatorIBM = () => {
  return (
    <div className="flex flex-col container  lg:py-40 sm:py-20 sm:mb-0 mb-10 sm:px-20">
      <div className="border-2 border-gray-100 rounded-t-2xl lg:p-10 p-4 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:gap-0 gap-4">
          <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center">
              <h1 className="  md:text-2xl lg:text-4xl border-r px-6">21.3</h1>
              <h1 className=" md:text-2xl lg:text-4xl px-6">Normal</h1>
            </div>
            <p className=" lg:text-xl text-sm border rounded-2xl py-2 px-4 mt-4 ">
              Berat ideal Anda adalah 53.25-73.66 kg.
            </p>
          </div>
          <div className="flex flex-row lg:gap-14 gap-4 justify-center sm:border-l  lg:ml-4  lg:text-base text-xs">
            <div className="flex flex-col sm:ml-4">
              <h3>Kurus</h3>
              <h3>Normal</h3>
              <h3>Kegemukan</h3>
              <h3>Obesitas</h3>
            </div>
            <div className="flex flex-col">
              <h3>&lt;18 </h3>
              <h3>18.00 - 24.99 </h3>
              <h3>25.00 - 26.99</h3>
              <h3>&gt;=27 </h3>
            </div>
          </div>
        </div>
        <div className="lg:text-base text-xs sm:mt-0 mt-4 flex-col gap-20 bg-gray-100 rounded-2xl p-6">
          <div>
            <h1 className="font-bold">Risiko : </h1>
              <p>Tetap konsumsi makanan sehat dan bergisi seimbang</p>
              <p>Tetap aktif bergerak 30 menit per hari</p>
          </div>
          <div>
            <h1 className="font-bold">Rekomendasi : </h1>
              <p>Tetap konsumsi makanan sehat dan bergisi seimbang</p>
              <p>Tetap aktif bergerak 30 menit per hari</p>
          </div>
        </div>
      </div>
      <a href="/KalkulatorKesehatan" className="px-10 py-4 bg-[#4bb6be] text-white text-center sm:text-base text-xs rounded-b-2xl">
        CEK KESEHATAN LAINNYA
      </a>
    </div>
  );
};

export default OUTPUTKalkulatorIBM;
