"use client";

import React, { useState } from "react";
import Image from "next/image";
import { resikoBMI } from "@/lib/store";

const InputOutputIBM = () => {
  const [input, setInput] = useState({
    usia: "",
    tinggi: "",
    berat: "",
    gender: "",
  });

  const [thresholdBMI, handleThresholdBMI] = useState(0);
  const [nilaiBMI, setnilaiBMI] = useState(0);
  const [resikoBMIIndex, setResikoBMIIndex] = useState(-1);

  function handleThreshold(threshold: any) {
    threshold = thresholdBMI;

    if (threshold <= 18.5) {
      return "Kurus";
    } else if (threshold > 18.6 && threshold <= 24.9) {
      return "Normal";
    } else if (threshold > 25 && threshold <= 29.9) {
      return "Gemuk";
    } else if (threshold > 30 && threshold <= 34.9) {
      return "Obesitas 1";
    } else if (threshold > 35) {
      return "Obesitas 2";
    }
  }

  console.log(input);

  const handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const nilaiInput = {
      usia: parseInt(input.usia),
      tinggi: parseInt(input.tinggi),
      berat: parseInt(input.berat),
      gender: parseInt(input.gender),
    };
    console.log(nilaiInput);

    const hasilBMI =
      nilaiInput.berat /
      ((nilaiInput.tinggi / 100) * (nilaiInput.tinggi / 100));
    const pembulatanBMI = hasilBMI.toFixed(2);

    setnilaiBMI(parseFloat(pembulatanBMI));
    handleThresholdBMI(hasilBMI);

    setInput({
      usia: "",
      tinggi: "",
      berat: "",
      gender: "",
    });

    console.log("Threshold Result:", handleThreshold(thresholdBMI));

    const indexResikoBMI = handleThreshold(thresholdBMI);
    const tempResikoBMIIndex = resikoBMI.findIndex(
      (resiko) => resiko.threshold === indexResikoBMI
    );

    setResikoBMIIndex(tempResikoBMIIndex);
  };

  return (
    <>
      <div className="flex flex-col h-[1000px] sm:mb-24">
        <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 lg:px-20 px-4  lg:gap-4 sm:gap-2">
          <h1 className="lg:text-3xl sm:text-xl  font-bold">
            Kalkulator Kesehatan
          </h1>
          <div className="text-[#9a8e8e] font-bold lg:text-base sm:text-sm text-xs flex flex-row">
            <a href="/">Home</a>
            <a href="/KalkulatorKesehatan">&gt; Kalkulator Kesehatan</a>
            <div>&gt; Kalkulator IBM</div>
          </div>
        </div>
        <div className="container flex flex-col sm:gap-8 gap-4 justify-center items-center mt-10">
          <h1 className="text-center font-bold sm:text-3xl text-xl">
            Kalkulator IBM
          </h1>
          <div className="sm:w-[600px]">
            <p className="text-center sm:text-xl text-xs">
              Kalkulator IBM digunakan untuk menghitung Indeks Massa Tubuh (IMT)
              dan mengecek apakah berat badan dan tinggi badanmu sudah ideal
              atau belum
            </p>
            <h3 className="underline underline-offset-4 text-center font-bold sm:text-xl text-lg my-10">
              Pilih Jenis Kelamin
            </h3>
            <div className="flex flex-row justify-center items-center gap-10">
              <div className="">
                <button
                  title="pria"
                  className="flex flex-col justify-center items-center rounded-xl bg-[#4bb6be] hover:bg-[#36858b] sm:px-24 px-4 py-4"
                >
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
                <button
                  title="wanita"
                  className="flex flex-col justify-center items-center rounded-xl bg-[#4bb6be] hover:bg-[#36858b] sm:px-24 px-4 py-4"
                >
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

          <form onSubmit={handleSubmit}>
            <div className="flex justify-start sm:w-[400px] sm:gap-10 gap-4 p-4 flex-col bg-[#4bb6be] rounded-2xl text-white">
              <div>
                <h3 className="font-semibold sm:text-xl">Usia</h3>

                <input
                  className="ml-2 p-2 border border-gray-300 rounded sm:w-[300px] sm:text-base text-xs w-[200px] text-black"
                  type="text"
                  name="usia"
                  value={input.usia}
                  onChange={handleChange}
                  placeholder={
                    input.usia === "0"
                      ? "Masukkan Usia Anda"
                      : "Masukkan Usia Anda"
                  }
                />
              </div>
              <div>
                <h3 className="font-semibold sm:text-xl">Tinggi Badan</h3>

                <input
                  className="ml-2 p-2 border border-gray-300 rounded sm:w-[300px] sm:text-base text-xs w-[200px] text-black"
                  type="text"
                  name="tinggi"
                  value={input.tinggi}
                  onChange={handleChange}
                  placeholder={
                    input.tinggi === "0"
                      ? "Masukkan Tinggi Badan Anda"
                      : "Masukkan Tinggi Badan Anda"
                  }
                />
              </div>
              <div>
                <h3 className="font-semibold sm:text-xl">Berat Badan</h3>

                <input
                  className="ml-2 p-2 border border-gray-300 rounded sm:w-[300px] sm:text-base text-xs w-[200px] text-black"
                  type="text"
                  name="berat"
                  value={input.berat}
                  onChange={handleChange}
                  placeholder={
                    input.berat === "0"
                      ? "Masukkan Berat Badan Anda"
                      : "Masukkan Berat Badan Anda"
                  }
                />
              </div>
            </div>

            <div className="flex justify-center my-4">
              <button
                type="submit"
                className="sm:px-10 sm:py-4 px-6 py-2 bg-[#4bb6be] rounded-2xl text-white sm:text-xl font-semibold"
              >
                Masukan
              </button>
            </div>
          </form>
        </div>
      </div>
      {nilaiBMI !== 0 && (
        <div className="flex flex-col container  lg:py-40 sm:py-20 sm:mb-0 mb-10 sm:px-20">
          <div className="border-2 border-gray-100 rounded-t-2xl lg:p-10 p-4 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:gap-0 gap-4">
              <div className="flex flex-col">
                <div className="flex flex-row justify-center items-center">
                  <h1 className="  md:text-2xl lg:text-4xl border-r px-6">
                    {nilaiBMI}
                  </h1>
                  <h1 className=" md:text-2xl lg:text-4xl px-6">
                    {handleThreshold(thresholdBMI)}
                  </h1>
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
                  <h3>&lt; 18 </h3>
                  <h3>18.00 - 24.99 </h3>
                  <h3>25.00 - 26.99</h3>
                  <h3>&gt;= 27 </h3>
                </div>
              </div>
            </div>
            <div className="lg:text-base text-xs sm:mt-0 mt-4 flex-col gap-20 bg-gray-100 rounded-2xl p-6">
              {resikoBMIIndex !== -1 && (
                <div key={resikoBMIIndex}>
                  <h1 className="font-bold">Risiko : </h1>
                  <p>{resikoBMI[resikoBMIIndex].resiko}</p>
                  <div>
                    <h1 className="font-bold">Rekomendasi : </h1>
                    <p>{resikoBMI[resikoBMIIndex].rekomendasi}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <a
            href="/KalkulatorKesehatan"
            className="px-10 py-4 bg-[#4bb6be] text-white text-center sm:text-base text-xs rounded-b-2xl"
          >
            CEK KESEHATAN LAINNYA
          </a>
        </div>
      )}
    </>
  );
};

export default InputOutputIBM;
