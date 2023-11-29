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
                src="/image/penyakit0.png"
                alt="phbs"
                fill={true}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            PENYAKIT
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
            5 Cara Merawat Luka Diabetes agar Cepat Kering
          </h1>
          <p className="xl:text-base text-xs line-clamp-5 lg:line-clamp-none">
            Cara merawat luka diabetes agar cepat kering adalah dengan
            membungkusnya menggunakan perban steril, lalu menghindari tekanan
            pada area luka. Luka juga perlu segera dirawat dan rutin
            dibersihkan. Diabetes dapat menyebabkan imun tubuh melemah. Kondisi
            ini menyebabkan luka sekecil apa pun jadi lebih lama sembuh dan
            lebih rentan mengalami komplikasi. Karena luka diabetes sulit
            sembuh, maka diperlukan langkah khusus untuk merawatnya agar tidak
            sampai infeksi. Ada beberapa cara merawat luka diabetes agar cepat
            kering, antara lain harus rutin mengganti perban atau penutup luka
            dan menghindari tekanan berlebihan pada luka. Berikut penjelasannya.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              14 November 2023
            </h3>
            <a
              href="/InformasiKesehatan/Penyakit/Artikel"
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
          <h1 className="font-bold sm:text-xl text-sm">PENYAKIT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Memahami Penyebab Maag Kambuh dan Cara Mengatasinya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Penyebab maag kambuh bermacam-macam, seperti makan terburu-buru,
            stres berlebihan dan kelelahan, makan dalam jumlah yang banyak
            sekaligus, hingga suka minum alkohol dan merokok. Untuk mencegah
            maag kambuh kembali, kamu perlu menerapkan pola makan sehat dan
            menjalani gaya hidup sehat. Mual dan nyeri pada bagian perut dapat
            mengindikasikan kondisi maag yang kambuh. Jika sudah begini, makan
            pun jadi tak nyaman dan aktivitas sehari-hari juga mungkin
            terganggu. Agar kondisi ini bisa ditangani dengan tepat, mari kenali
            apa penyebab maag kambuh berikut ini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            12 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/Penyakit/Artikel1"
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
                  src="/image/penyakit1.png"
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
          <h1 className="font-bold sm:text-xl text-sm">PENYAKIT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Penyebab Sendi Geser dan Cara Menanganinya dengan Tepat
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Sendi geser adalah keadaan di mana tulang bergeser dari tempat perlekatannya pada sendi yang disebabkan dari kecelakaan, olahraga, faktor usia dan faktor keturunan. Kondisi ini bisa diatasi dengan reposisi, imobilisasi, hingga operasi.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            11 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/Penyakit/Artikel2"
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
                  src="/image/penyakit2.png"
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
          <h1 className="font-bold sm:text-xl text-sm">PENYAKIT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Cemas? Ini 10 Cara untuk Mengatasinya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Saat kita punya perasaan takut, khawatir, atau gelisah yang timbul
            akibat adanya ancaman atau masalah yang tidak pasti, itulah yang
            disebut dengan cemas. Cemas adalah reaksi alami tubuh, membantu kita
            beradaptasi dengan situasi yang menantang atau berbahaya. Tapi,
            kalau cemasnya terlalu sering, berlebihan, atau mengganggu aktivitas
            sehari-hari, maka bisa jadi itu adalah tanda gangguan kecemasan.
            Jadi kalau kita cemasnya itu wajar-wajar aja, tak perlu khawatir.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            10 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/Penyakit/Artikel3"
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
                  src="/image/penyakit3.png"
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
          <h1 className="font-bold sm:text-xl text-sm">PENYAKIT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Memahami PENYAKIT dan Cara Menjaganya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Seperti halnya kesehatan fisik, PENYAKIT juga tidak boleh luput dari
            perhatianmu, lho. Jika PENYAKIT terganggu, kondisi fisik dan
            kualitas hidupmu juga bisa menurun. Untuk mengetahui lebih jauh
            mengenai PENYAKIT, mari simak ulasan berikut ini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            18 November 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/Penyakit/Artikel4"
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
                  src="/image/penyakit4.png"
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
