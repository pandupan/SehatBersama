"use client";

import React, { useState } from "react";

const InputOutputAIR = () => {

  const [input, setInput] = useState({
    usia: "",
    berat: "",
  });
  
  const [kebutuhanAir, setKebutuhanAir] = useState(0);

  // console.log(input);

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
      berat: parseInt(input.berat),

    };
    // console.log(nilaiInput);

    const hasilKebutuhanAir = (nilaiInput.berat ) * 0.033;

    setKebutuhanAir(parseFloat(hasilKebutuhanAir.toFixed(2)));

    setInput({
      usia: "",
      berat: "",
    });

  };

  return (
    <>
      <div className="flex flex-col h-[600px] sm:mb-24">
        <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 lg:px-20 px-4  lg:gap-4 sm:gap-2">
          <h1 className="lg:text-3xl sm:text-xl  font-bold">
            Kalkulator Kesehatan
          </h1>
          <div className="text-[#9a8e8e] font-bold lg:text-base sm:text-sm text-xs flex flex-row">
            <a href="/">Home</a>
            <a href="/KalkulatorKesehatan">&gt; Kalkulator Kesehatan</a>
            <div>&gt; Asupan Air</div>
          </div>
        </div>
        <div className="container flex flex-col sm:gap-8 gap-4 justify-center items-center mt-10">
          <h1 className="text-center font-bold sm:text-3xl text-xl">
            Asupan Air
          </h1>
          <div className="sm:w-[600px]">
            <p className="text-center sm:text-xl text-xs">
              Kalkulator asupan air membantu menentukan seberapa banyak air yang
              sebaiknya Anda minum setiap hari berdasarkan Usia dan Berat badan
              anda. Temukan berapa banyak air yang Anda butuhkan setiap hari
              untuk tetap sehat!
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-start sm:w-[400px] sm:gap-10 gap-4 p-4 flex-col bg-[#4bb6be] rounded-2xl text-white">
                <div>
                <h3 className="font-semibold sm:text-xl">Masukan Usia</h3>
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
            <button type="submit" className="sm:px-10 sm:py-4 px-6 py-2 bg-[#4bb6be] rounded-2xl text-white sm:text-xl font-semibold">
              Masukan
            </button>
          </div>
          </form>
        </div>

      </div>

      <div className="flex flex-col container  lg:py-40 sm:py-20 sm:mb-0 mb-10 sm:px-20">
        { kebutuhanAir !== 0 && (
        <div className="border-2 border-gray-100 rounded-t-2xl p-10 flex flex-col">
          <p className="sm:text-2xl border rounded-2xl py-2 px-4 mt-4 text-center font-semibold">
            Anda disarankan untuk mengonsumsi sekitar {kebutuhanAir} Liter air setiap hari.
          </p>
          <div className="flex-col bg-gray-100 rounded-2xl p-6">
            <p className="text-center">
              Pastikan untuk menyebarkan konsumsi air Anda sepanjang hari untuk
              menjaga hidrasi tubuh optimal.
            </p>
          </div>
        <a
          href="/KalkulatorKesehatan"
          className="px-10 py-4 bg-[#4bb6be] text-white text-center sm:text-base text-xs rounded-b-2xl"
        >
          CEK KESEHATAN LAINNYA
        </a>
        </div>

        )

        }
      </div>
    </>
  );
};

export default InputOutputAIR;
