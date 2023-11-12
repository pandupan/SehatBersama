import React from "react";
import Image from "next/image";

const ListFitur = () => {
  return (
    <div className="container flex flex-col jusitfy-center items-center py-20">
      <h1 className="font-normal text-3xl ">
        Perubahan Sehat dimulai di SehatBersama
      </h1>
      {/* INFORMASI KESEHATAN */}
      <div className=" ml-20 flex flex-row mt-20">
        <div className="relative w-[420px] h-[460px] border-4 rounded-[50px] border-[#4bb6be] overflow-hidden">
          <div className="object-fit">
            <Image
              src="/image/InformKes.jpeg"
              alt="InformasiKesehatan"
              fill={true}
            />
          </div>
        </div>
        <div className="flex flex-row ml-10 w-[350px] gap-10 mt-10">
          <h1 className="text-[#3299db] text-4xl font-bold">1</h1>
          <div className="flex flex-col gap-10 mt-10">
            <h1 className="text-3xl font-medium">Informasi Kesehatan</h1>
            <p className="text-2xl">Sumber informasi kesehatan terkini</p>
          </div>
        </div>
      </div>
      {/* FORUM KOMUNITAS */}
      <div className="flex flex-row-reverse -mt-[50px] ">
        <div className="relative w-[420px] h-[460px] border-4 rounded-[50px] border-[#4bb6be] overflow-hidden">
          <div className="object-fit">
            <Image
              src="/image/InformKes.jpeg"
              alt="InformasiKesehatan"
              fill={true}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mr-10 w-[350px]  mt-32">
          <h1 className="text-[#3299db] text-4xl font-bold">2</h1>
          <div className="flex flex-col gap-10 mt-10 pl-24">
            <h1 className="text-3xl font-medium">Forum Komunitas</h1>
            <p className="text-2xl">Komunitas berbagi pengetahuan kesehatan</p>
          </div>
        </div>
      </div>
       {/* INFORMASI KESEHATAN */}
       <div className=" ml-20 flex flex-row -mt-[40px]">
        <div className="relative w-[420px] h-[460px] border-4 rounded-[50px] border-[#4bb6be] overflow-hidden">
          <div className="object-fit">
            <Image
              src="/image/InformKes.jpeg"
              alt="InformasiKesehatan"
              fill={true}
            />
          </div>
        </div>
        <div className="flex flex-row ml-10 w-[320px] gap-10 mt-32">
          <h1 className="text-[#3299db] text-4xl font-bold">3</h1>
          <div className="flex flex-col gap-10 mt-10">
            <h1 className="text-3xl font-medium">Kalkulator Kesehatan</h1>
            <p className="text-2xl">Alat hitung kesehatan pribadi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFitur;
