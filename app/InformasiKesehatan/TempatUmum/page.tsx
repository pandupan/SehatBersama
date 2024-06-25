import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-gradient-to-br from-[#46aea8] via-[#d2e9e8] to-[white] xl:px-16 sm:px-10 px-4 flex flex-col mt-20 xl:pt-20 sm:pt-10 pt-4 pb-40">
      <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
        <div className="flex items-center justify-center sm:items-stretch sm:justify-stretch">
          <div className="relative xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]">
            <div className="object-fit">
              <img
                src="https://i.ibb.co/JQZm5Qm/photo-1628235172251-6b87dab144b3.jpg"
                alt="phbs"
                className="object-cover items-center rounded-xl xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            TEMPAT UMUM
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
            6 Langkah Mencuci Tangan yang Benar Agar Tetap Bersih
          </h1>
          <p className="xl:text-base text-xs line-clamp-5">
            Cuci tangan adalah praktik penting dalam menjaga kebersihan dan
            kesehatan tubuh, membantu mengurangi risiko infeksi atau penyakit
            yang dapat ditularkan melalui tangan. Mencuci tangan dengan sabun
            dan air bersih membantu menghilangkan virus, kuman, dan bakteri yang
            mungkin menempel pada tangan setelah menyentuh permukaan yang
            terkontaminasi.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              29 November 2023
            </h3>
            <a
              href="/InformasiKesehatan/TempatUmum/Artikel"
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
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT UMUM</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            10 Tips Perilaku Hidup Bersih dan Sehat (PHBS) Sehari-hari
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Apakah Anda yakin sudah menjalani pola hidup bersih dan sehat?
            Meskipun terdengar sepele, praktik Perilaku Hidup Bersih dan Sehat
            (PHBS) seringkali masih diabaikan oleh banyak orang. Padahal,
            menerapkan kebiasaan ini tidak hanya melindungi diri sendiri dari
            penyakit, tetapi juga menjaga kesehatan orang-orang di sekitar kita.
            Untuk itu, penting memahami arti sebenarnya dari PHBS melalui ulasan
            berikut ini.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">04 April 2024</h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatUmum/Artikel1"
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
                <img
                  src="https://i.ibb.co/64cJ6XC/dan-gold-4-jh-DO54-BYg-unsplash.jpg"
                  className="object-cover"
                  alt="artikel1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 2 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT UMUM</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Pengelolaan Limbah Rumah Sakit
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Limbah dari rumah sakit mencakup berbagai bentuk, seperti padat,
            cair, dan gas, yang dihasilkan dari berbagai kegiatan medis dan
            pengobatan. Rumah sakit, sebagai tempat berkumpulnya individu yang
            sakit atau sehat, memiliki potensi untuk menjadi sumber penyebaran
            penyakit dan pencemaran lingkungan, serta menghasilkan limbah yang
            berpotensi menularkan penyakit.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            23 Februari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatUmum/Artikel2"
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
                <img
                  src="https://i.ibb.co/mTJvKsx/nareeta-martin-Fo-G7-PKNYjp-M-unsplash.jpg"
                  alt="artikel1"
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
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT UMUM</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Pentingnya Cuci Tangan dengan Sabun dan Cara Tepat Melakukannya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Mencuci tangan dengan sabun merupakan langkah penting dalam
            menghentikan penyebaran kuman dibandingkan hanya dengan menggunakan
            air saja. Praktik sederhana ini terbukti efektif dalam mengurangi
            risiko berbagai penyakit. Oleh karena itu, penting bagi kita untuk
            memahami cara mencuci tangan yang benar. Penyebaran kuman melalui
            tangan seringkali menjadi penyebab utama penyakit. Untuk
            meningkatkan kesadaran akan pentingnya mencuci tangan, setiap
            tanggal 15 Oktober diperingati sebagai Hari Cuci Tangan Pakai Sabun
            Sedunia. Ini bertujuan untuk mengurangi risiko terserang penyakit,
            menghentikan penyebaran kuman, dan menurunkan tingkat kematian
            akibat penyakit menular.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">19 Juni 2020</h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatUmum/Artikel3"
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
                <img
                  src="https://i.ibb.co/mDR9L6K/photo-1604520531441-680d541221c2.jpg"
                  alt="artikel1"
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
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT UMUM</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Regulasi Larangan Merokok di Tempat Umum: Langkah Penting untuk
            Menjaga Kesehatan Jantung
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Rokok adalah salah satu faktor risiko utama penyakit jantung, yang
            menjadi penyebab kematian nomor satu di seluruh dunia. Dengan
            menyebabkan berbagai jenis penyakit jantung, seperti penyakit
            jantung koroner, gagal jantung, serangan jantung, dan stroke,
            merokok sangat berbahaya bagi kesehatan jantung.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            30 September 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatUmum/Artikel4"
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
                <img
                  src="https://i.ibb.co/BgTM850/dampak-rokok-terhadap-kesehatan-jantung.webp"
                  alt="artikel1"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ARTIKEL 5 */}
 <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT UMUM</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Langkah Proaktif dalam Menghadapi Adaptasi Kebiasaan Baru dengan
          Menerapkan PHBS di Tempat Umum
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Tempat umum seperti pasar, mall, hotel, restoran, serta transportasi
            umum merupakan area dengan potensi tinggi untuk penyebaran berbagai
            penyakit menular. Oleh karena itu, implementasi PHBS di
            tempat-tempat ini sangat penting. Langkah-langkah PHBS mencakup
            penggunaan masker, cuci tangan dengan sabun atau hand sanitizer,
            menjaga jarak fisik, serta menjaga kebersihan lingkungan sekitar.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          19 Juni 2020
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatUmum/Artikel5"
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
                <img
                  src="https://i.ibb.co.com/CV7d2SP/6-tu.jpg"
                  alt="artikel1"
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
