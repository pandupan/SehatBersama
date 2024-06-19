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
                src="/image/mental.png"
                alt="phbs"
                fill={true}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            KESEHATAN MENTAL
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
            Ketika Kenyamanan Menjadi Bumerang: Tantangan Mental Generasi Z di
            Era Digital
          </h1>
          <p className="xl:text-base text-xs line-clamp-5">
            Generasi Z, yang tumbuh di era smartphone dan media sosial, memang
            hidup di dunia yang penuh kemudahan. Dengan segala informasi yang
            ada di ujung jari, mereka bisa mendapatkan apa yang mereka inginkan
            dengan cepat. Namun, ironisnya, di balik semua kemudahan ini, banyak
            dari mereka yang terlihat rapuh secara mental. Hal ini disebabkan
            oleh perlindungan berlebihan dari orang tua mereka yang ingin
            memberikan yang terbaik bagi anak-anaknya, tapi tanpa sadar malah
            membuat mereka kehilangan peluang untuk belajar dari kesulitan.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              14 November 2023
            </h3>
            <a
              href="/InformasiKesehatan/KesehatanMental/Artikel"
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
          <h1 className="font-bold sm:text-xl text-sm">KESEHATAN MENTAL</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Pengaruh Kesehatan Mental Remaja dengan Maraknya Kasus Bunuh Diri di
            Indonesia
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Kualitas hidup manusia sangat erat kaitannya dengan kesehatan, bukan
            hanya kesehatan jasmani saja tetapi juga kesehatan mental juga perlu
            menjadi perhatian. Kesehatan adalah keadaan sehat fisik, mental dan
            sosial, bukan semata-mata keadaan tanpa penyakit atau kelemahan yang
            berarti seseorang dikatakan sehat apabila seluruh aspek dalam
            dirinya dalam keadaan tidak terganggu baik tubuh, psikis maupun
            sosial (Ayu Rianti, H idaya, and Yasipin 2020). Selain itu, menurut
            (Prasetyo and Kunci 2021), kesehatan mental adalah suatu keadaan
            dimana seorang individu tidak mengalami perasaan bersalah terhadap
            dirinya sendiri, serta mempunyai estimasi yang realistis terhadap
            dirinya sendiri dan dapat menerima kelemahan pada dirinya sendiri,
            memiliki kemampuan menghadapi masalah-masalah yang ada dalam
            hidupnya, memiliki kepuasan dalam kehidupan sosialnya, serta
            memiliki kebahagiaan dalam hidup.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            12 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/KesehatanMental/Artikel1"
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
                  src="/image/mental2.png"
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
          <h1 className="font-bold sm:text-xl text-sm">KESEHATAN MENTAL</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Bagaimana “Coping Mechanisms” Bisa Membantu Mengatasi Stress?
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Artikel ini menjelaskan bagaimana mekanisme koping membantu mengatasi stres dengan contoh sehari-hari yang relevan, menunjukkan cara menghadapi stres secara adaptif.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            11 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/KesehatanMental/Artikel2"
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
                  src="/image/mental1.png"
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
          <h1 className="font-bold sm:text-xl text-sm">KESEHATAN MENTAL</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Cemas? Ini 10 Cara untuk Mengatasinya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Saat kita punya perasaan takut, khawatir, atau gelisah yang timbul akibat adanya ancaman atau masalah yang tidak pasti, itulah yang disebut dengan cemas. Cemas adalah reaksi alami tubuh, membantu kita beradaptasi dengan situasi yang menantang atau berbahaya. Tapi, kalau cemasnya terlalu sering, berlebihan, atau mengganggu aktivitas sehari-hari, maka bisa jadi itu adalah tanda gangguan kecemasan. Jadi kalau kita cemasnya itu wajar-wajar aja, tak perlu khawatir.


          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            10 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/KesehatanMental/Artikel3"
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
                  src="/image/mental3.png"
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
          <h1 className="font-bold sm:text-xl text-sm">KESEHATAN MENTAL</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Memahami Kesehatan Mental dan Cara Menjaganya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Seperti halnya kesehatan fisik, kesehatan mental juga tidak boleh luput dari perhatianmu, lho. Jika kesehatan mental terganggu, kondisi fisik dan kualitas hidupmu juga bisa menurun. Untuk mengetahui lebih jauh mengenai kesehatan mental, mari simak ulasan berikut ini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            18 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/KesehatanMental/Artikel4"
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
                  src="/image/mental4.png"
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
