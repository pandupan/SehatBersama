"use client";

import React, { useState } from "react";
import Image from "next/image";

const InputOutputBMR = () => {
  const [input, setInput] = useState({
    usia: "",
    tinggi: "",
    berat: "",
    gender: 0,
  });
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
      gender: input.gender,
    };
    console.log(nilaiInput);

    function handleGender() {
      const gender = input.gender;
      if (gender == 1) {
        return (
          66 +
          13.7 * parseInt(input.berat) +
          5 * parseInt(input.tinggi) -
          6.8 * parseInt(input.usia)
        );
      } else if (gender == 2) {
        return (
          655 +
          9.6 * parseInt(input.berat) +
          1.8 * parseInt(input.tinggi) -
          4.7 * parseInt(input.usia)
        );
      }
    }

    const hasilBMR = handleGender();
    console.log(hasilBMR);

    setInput({
      usia: "",
      tinggi: "",
      berat: "",
      gender: 0,
    });
  };

  return (
    <>
      <div className="flex flex-col h-[1100px] sm:mb-24">
        <div className="mt-10 flex flex-col bg-[#a7e9e6] w-full pt-16 pb-8 lg:px-20 px-4  lg:gap-4 sm:gap-2">
          <h1 className="lg:text-3xl sm:text-xl  font-bold">
            Kalkulator Kesehatan
          </h1>
          <div className="text-[#9a8e8e] font-bold lg:text-base sm:text-sm text-xs flex flex-row">
            <a href="/">Home</a>
            <a href="/KalkulatorKesehatan">&gt; Kalkulator Kesehatan</a>
            <div>&gt; Kalkulator BMR</div>
          </div>
        </div>
        <div className="container flex flex-col sm:gap-8 gap-4 justify-center items-center mt-10">
          <h1 className="text-center font-bold sm:text-3xl text-xl">
            Kalkulator BMR{" "}
          </h1>
          <div className="sm:w-[600px]">
            <p className="text-center sm:text-xl text-xs">
              Kalkulator BMR (Basal Metabolic Rate) digunakan untuk menghitung
              jumlah kalori yang dibutuhkan oleh tubuh dalam keadaan istirahat
              untuk menjaga fungsi-fungsi dasar seperti pernapasan, detak
              jantung, dan pemeliharaan suhu tubuh.
            </p>
            <h3 className="underline underline-offset-4 text-center font-bold sm:text-xl text-lg my-10">
              Pilih Jenis Kelamin
            </h3>

            <div className="flex flex-row justify-center items-center gap-10">
              <div className="">
                <button
                  title="pria"
                  className="flex flex-col justify-center items-center rounded-xl bg-[#4bb6be] hover:bg-[#36858b] sm:px-24 px-4 py-4"
                  onClick={() => setInput({ ...input, gender: 1 })}
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
                  onClick={() => setInput({ ...input, gender: 2 })}
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
            <div>
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
      <div className="flex flex-col container  lg:py-40 sm:py-20 sm:mb-0 mb-10 sm:px-20">
        <div className="border-2 border-gray-100 rounded-t-2xl p-10 flex flex-col">
          <p className="sm:text-2xl border rounded-2xl py-2 px-4 mt-4 text-center font-semibold">
            Berdasarkan informasi yang Anda berikan, hasil kalkulasi BMR Anda
            adalah [Nilai BMR] kalori per hari.
          </p>
          <div className="flex-col bg-gray-100 rounded-2xl p-6">
            <p className="text-center">
              Ini adalah jumlah kalori yang dibutuhkan tubuh Anda saat
              beristirahat untuk menjaga fungsi dasar seperti pernapasan, detak
              jantung, dan fungsi organ internal lainnya. Pastikan untuk
              memperhatikan kebutuhan tambahan kalori berdasarkan tingkat
              aktivitas fisik Anda untuk menentukan total kebutuhan kalori
              harian Anda.
            </p>
          </div>
        </div>
        <a
          href="/KalkulatorKesehatan"
          className="px-10 py-4 bg-[#4bb6be] text-white text-center sm:text-base text-xs rounded-b-2xl"
        >
          CEK KESEHATAN LAINNYA
        </a>
      </div>
    </>
  );
};

export default InputOutputBMR;
