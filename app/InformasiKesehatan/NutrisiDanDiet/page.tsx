import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-gradient-to-br from-[#46aea8] via-[#d2e9e8] to-[white] xl:px-16 sm:px-10 px-4 flex flex-col mt-20 xl:pt-20 sm:pt-10 pt-4 pb-40">
      <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
        <div className="flex items-center justify-center sm:items-stretch sm:justify-stretch">
          <div className="relative xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]">
            <div className="object-fit">
              <Image
                src="/image/diet0.png"
                alt="phbs"
                fill={true}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            NUTRISI DAN DIET
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
            Diet Sehat: Panduan, Tips dan Menu Diet agar Berat Badan Cepat Turun
          </h1>
          <p className="xl:text-base text-xs line-clamp-5 lg:line-clamp-none">
            Diet sehat adalah salah satu cara yang banyak dilakukan untuk
            menurunkan berat badan. Cara diet cepat dan sehat sudah banyak
            dilakukan, tetapi masih ada saja yang mempraktikkan diet tidak
            sehat.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              14 November 2023
            </h3>
            <a
              href="/InformasiKesehatan/NutrisiDanDiet/Artikel"
              className="text-gray-500 hover:text-blue-500 lg:text-base text-xs "
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-xl lg:text-3xl border-b-2 border-black mt-4">
        Artikel Terbaru
      </h1>

      {/* LIST ARTIKEL */}
      {/* ARTIKEL 1 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">NUTRISI DAN DIET</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Begini Cara Diet Sehat tanpa Bahayakan Tubuh
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Banyak orang yang menganggap bahwa cara diet sehat untuk menurunkan
            berat badan adalah dengan mengurangi porsi dan jenis makanannya.
            Padahal diet yang tepat bukan hanya soal seberapa banyak porsi
            makan. Lantas, bagaimana tips diet sehat untuk bantu menurunkan
            berat badan?
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            12 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/NutrisiDanDiet/Artikel1"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <Image
                  src="/image/diet1.png"
                  className="object-cover"
                  alt="artikel1"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 2 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">NUTRISI DAN DIET</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Pentingnya Memahami Nutrisi, Samakah dengan Zat Gizi?
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Kata “nutrisi” cukup umum, tetapi masih banyak yang keliru dalam
            memahaminya. Kata ini sering kali disamakan dengan zat gizi, padahal
            jelas berbeda. Supaya Anda tidak salah lagi memahaminya, simak
            penjelasannya berikut ini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            11 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/NutrisiDanDiet/Artikel2"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <Image
                  src="/image/diet2.png"
                  alt="artikel1"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 3 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">NUTRISI DAN DIET</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            7 Kebiasaan Diet yang Salah dan Tanda-Tanda Diet Anda Tidak Tepat
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Banyak orang melakukan diet dengan harapan bisa mendapatkan bentuk
            tubuh yang lebih ideal. Sayangnya, kurangnya pengetahuan tentang
            cara diet yang benar dan sesuai anjuran membuat banyak orang
            melakukan diet yang salah. Diet yang salah justru tidak akan membawa
            hasil dan manfaat. Malah sebaliknya, Anda bisa terkena bahaya yang
            mungkin tidak disangka-sangka.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            10 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/NutrisiDanDiet/Artikel3"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <Image
                  src="/image/diet3.png"
                  alt="artikel1"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 4 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">NUTRISI DAN DIET</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Bagaimana Menentukan Cara Diet yang Tepat untuk Saya?
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Tak jarang orang yang salah memilih program diet justru malah gagal mencapai tujuannya yang diinginkan, bahkan malah menimbulkan dampak buruk bagi kesehatan. Yuk, ketahui bagaimana mengetahui cara diet yang tepat dan cocok dengan diri Anda!
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            18 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/NutrisiDanDiet/Artikel4"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <Image
                  src="/image/diet4.png"
                  alt="artikel1"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row justify-center items-center gap-4 font-semibold mt-4">
        <button title="leftbig" className="sm:flex hidden">
          <AiOutlineLeft size={40} />
        </button>
        <button title="leftsmall" className="flex sm:hidden">
          <AiOutlineLeft size={20} />
        </button>
        <div className="flex flex-row sm:text-5xl text-2xl sm:gap-20 gap-10 border-x-2 px-10 border-black">
          <a href="#" className="text-black hover:text-blue-500">
            1
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            2
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            3
          </a>
        </div>
        <button title="rightbig" className="sm:flex hidden">
          <AiOutlineRight size={40} />
        </button>
        <button title="rightsmall" className="flex sm:hidden">
          <AiOutlineRight size={20} />
        </button>
      </div> */}
    </div>
  );
};

export default page;
