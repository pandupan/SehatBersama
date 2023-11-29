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
                src="/image/kehamilan0.png"
                alt="phbs"
                fill={true}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            KEHAMILAN
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
            Ciri-ciri Hamil 2 Minggu yang Perlu Ibu Sadari
          </h1>
          <p className="xl:text-base text-xs line-clamp-5 lg:line-clamp-none">
            Dilansir dari Medical News Today, beberapa wanita belum menunjukan
            gejala kehamilan pada minggu pertama atau kedua kehamilan.
            Sedangkan, beberapa wanita yang lain mungkin mengalami gejala
            kehamilan awal seperti kelelahan, mual baik dengan atau tanpa
            muntah, nyeri payudara, dan kram ringan dalam 5-6 hari pertama
            setelah berhubungan dan/atau telat menstruasi. Untuk informasi
            selengkapnya, yuk baca terus sampai selesai.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              11 November 2023
            </h3>
            <a
              href="/InformasiKesehatan/Kehamilan/Artikel"
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
          <h1 className="font-bold sm:text-xl text-sm">KEHAMILAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Peran Kalsium untuk Ibu Hamil dan Cara Praktis Memenuhinya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Umumnya, para ibu hamil disarankan oleh dokter untuk mengonsumsi
            makanan dan minuman yang mengandung kalsium. Sebetulnya, mengapa
            kalsium untuk ibu hamil itu sangat penting? Apa yang terjadi jika
            Ibu kekurangan asupan mineral ini selama kehamilan? Yuk, lihat
            penjelasannya di sini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            13 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/Kehamilan/Artikel1"
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
                  src="/image/kehamilan1.png"
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
          <h1 className="font-bold sm:text-xl text-sm">KEHAMILAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Jarak Ideal antara Kehamilan Pertama dan Kehamilan Kedua
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Jarak antar kehamilan menjadi salah satu hal yang tak jarang
            dibicarakan ketika membahas tentang seputar kehamilan. Pertanyaan
            mendasar yang memang perlu ditanyakan adalah ‘seberapa lama jarak
            ideal antara kehamilan anak pertama dan kedua; kedua dengan ketiga,
            dan berikutnya?’.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            14 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/Kehamilan/Artikel2"
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
                  src="/image/kehamilan2.png"
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
          <h1 className="font-bold sm:text-xl text-sm">KEHAMILAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Seberapa Penting ASI Eksklusif bagi Bayi dan Ibu?
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            ASI eksklusif merupakan asupan nutrisi terbaik untuk tumbuh kembang
            Buah Hati. Dalam air susu ini, terkandung nutrisi optimal, seperti
            vitamin, PROTEIN, karbohidrat, serta lemak. Selain itu ASI juga
            berperan penting untuk perlindungan terhadap berbagai penyakit. Yuk,
            ketahui bagaimana ASI eksklusif dapat membantu nutrisi dan
            menciptakan perlindungan tersebut di sini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            10 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/Kehamilan/Artikel3"
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
                  src="/image/kehamilan3.png"
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
          <h1 className="font-bold sm:text-xl text-sm">KEHAMILAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Makanan Sehat yang Direkomendasikan untuk Ibu Hamil
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Kehamilan merupakan fase yang memerlukan perhatian khusus terhadap pola makan. Konsumsi makanan sehat dan bergizi merupakan kunci untuk mendukung pertumbuhan janin dan kesehatan Ibu yang sedang mengandung. Untuk itu, ketahui makanan sehat untuk ibu hamil dalam memastikan kecukupan nutrisi selama masa kehamilan berikut ini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            18 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/Kehamilan/Artikel4"
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
                  src="/image/kehamilan4.png"
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
