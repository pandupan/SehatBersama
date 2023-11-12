import React from "react";

const OUTPUTKalkulatorIBM = () => {
  return (
    <div className="flex flex-col container  py-40 px-20">
      <div className="border-2 border-gray-100 rounded-t-2xl p-10 flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center">
              <h1 className="text-4xl border-r px-6">21.3</h1>
              <h1 className="text-4xl px-6">Normal</h1>
            </div>
            <p className="text-xl border rounded-2xl py-2 px-4 mt-4 ">
              Berat ideal Anda adalah 53.25-73.66 kg.
            </p>
          </div>
          <div className="flex flex-row gap-14 border-l ml-4">
            <div className="flex flex-col ml-4">
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
        <div className="flex-col bg-gray-100 rounded-2xl p-6">
          <h1 className="font-bold">Rekomendasi : </h1>
          <p>Tetap konsumsi makanan sehat dan bergisi seimbang</p>
          <p>Tetap aktif bergerak 30 menit per hari</p>
        </div>
      </div>
      <a href="/KalkulatorKesehatan" className="px-10 py-4 bg-[#4bb6be] text-white text-center rounded-b-2xl">
        CEK KESEHATAN LAINNYA
      </a>
    </div>
  );
};

export default OUTPUTKalkulatorIBM;
