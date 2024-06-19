import React from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const KategoriArtikel = () => {
  return (
    <div className="bg-gradient-to-br from-[#46aea8] via-[#d2e9e8] to-[white] xl:px-16 sm:px-10 px-4 flex flex-col mt-20 xl:pt-20 sm:pt-10 pt-4 pb-40">
      <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
        <div className="flex items-center justify-center sm:items-stretch sm:justify-stretch">
          <div className="relative xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]">
            <div className="object-fit">
              <Image src="/image/PHBSartikel.png" alt="phbs" fill={true} className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            HIDUP SEHAT
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
            Pola Hidup Sehat
          </h1>
          <p className="xl:text-base text-xs line-clamp-5">
            Artikel kesehatan kali ini membahas tentang pola hidup sehat yang
            merupakan syarat mutlak agar kita dapat terhindar dari berbagai
            penyakit selain juga faktor lain yang juga mempengaruhi seperti
            lingkungan yang sehat. Pola hidup sehat mencakup pola tidur, makanan
            yang dikonsumsi, dan olahraga. Pada intinya bagaimana kita menjalani
            hidup, dan kebiasaan sehari-hari, itulah yang dimaksud dengan pola
            hidup. Sehat atau tidaknya hidup kita tentu kita sendiri yang
            menentukan.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              29 November 2023
            </h3>
            <a
              href="/InformasiKesehatan/HidupSehat/Artikel"
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
          <h1 className="font-bold sm:text-xl text-sm">HIDUP SEHAT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          10 Cara Hidup Sehat yang Mudah dan Sederhana
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Setiap orang ingin membangun hidup yang sehat, namun belum tahu bagaimana cara hidup sehat. Langkah awal adalah untuk meyakini bahwa perubahan pola hidup sekecil apapun dapat berpengaruh pada tubuh, selanjutnya terapkan beberapa tips hidup sehat berikut ini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            11 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/HidupSehat/Artikel1"
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
                <Image src="/image/HeroSection.png" className="object-cover" alt="artikel1" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 2 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">HIDUP SEHAT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Cara Menjaga Kesehatan Tubuh agar Tak Mudah Sakit
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Seperti peribahasa bahwa mencegah lebih baik daripada mengobati, sudah sepatutnya kita mengetahui cara menjaga kesehatan tubuh supaya terhindar dari berbagai penyakit.
          Menjaga kesehatan tubuh sebenarnya bisa dilakukan dengan cara yang sederhana. Hanya saja, Anda memang perlu konsisten dalam melakukannya.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            15 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/HidupSehat/Artikel2"
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
                <Image src="/image/artikel2.png" alt="artikel1" fill={true} className="object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 3 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">HIDUP SEHAT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Gerakan PHBS Sebagai Langkah Awal Menuju Peningkatan Kualitas Kesehatan Masyarakat
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          PHBS merupakan kependekan dari Perilaku Hidup Bersih dan Sehat. Sedangkan pengertian PHBS adalah semua perilaku kesehatan yang dilakukan karena kesadaran pribadi sehingga keluarga dan seluruh anggotanya mampu menolong diri sendiri pada bidang kesehatan serta memiliki peran aktif dalam aktivitas masyarakat. 
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            20 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/HidupSehat/Artikel3"
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
                <Image src="/image/artikel3.png" alt="artikel1" fill={true} className="object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 4 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">HIDUP SEHAT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Manfaat Hidup Sehat
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Mengapa hidup sehat itu penting ? saat ini masih banyak orang yang belum sadar betapa pentingnya hidup sehat untuk kehidupan sehari-hari. Memiliki tubuh yang sehat tentu akan menunjang aktivitas kita sehari-hari. Bayangkan saja jika kita memiliki penyakit yang disebabkan oleh gaya hidup yang tidak sehat tentu akan merugikan diri sendiri dan juga keluarga. Sebab, aktivitas akan terganggu karena kita sakit bahkan akan banyak biaya yang keluar untuk pengobatan. Oleh sebab itu kita harus sudah sadar betapa pentingnya menjaga kesehatan.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            16 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/HidupSehat/Artikel4"
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
                <Image src="/image/artikel4.png" alt="artikel1" fill={true} className="object-cover"/>
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

export default KategoriArtikel;
