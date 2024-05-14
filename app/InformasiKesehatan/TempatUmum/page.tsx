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
          <h3 className="text-white font-semibold lg:text-base text-xs ">TEMPAT UMUM</h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
          6 Langkah Mencuci Tangan yang Benar Agar Tetap Bersih
          </h1>
          <p className="xl:text-base text-xs line-clamp-5 lg:line-clamp-none">
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
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          04 April 2024
          </h2>
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
          Ini Aturan Hukum Merokok di Tempat Umum, Melanggar Bisa Dipidana!
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Sendi geser adalah keadaan di mana tulang bergeser dari tempat
            perlekatannya pada sendi yang disebabkan dari kecelakaan, olahraga,
            faktor usia dan faktor keturunan. Kondisi ini bisa diatasi dengan
            reposisi, imobilisasi, hingga operasi.
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
                  src="https://i.ibb.co/cczLMXL/hipwee-SAVE-20210427-171636-640x422.jpg"
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
          Ini Lengkap Keputusan Menkes Soal Protokol Kesehatan di Tempat Umum
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Menteri Kesehatan, Terawan Agus Putranto, telah mengeluarkan
            peraturan terkait protokol kesehatan bagi masyarakat yang berlaku di
            tempat umum, sebagai langkah preventif untuk menghambat penyebaran
            virus Corona (COVID-19). Panduan ini diatur dalam Keputusan Menteri
            Kesehatan nomor HK.01.07/MENKES/382/2020 tentang Protokol Kesehatan
            bagi Masyarakat di Tempat dan Fasilitas Umum, yang disahkan pada 19
            Juni 2020. Tempat umum yang termasuk dalam lingkup aturan ini
            meliputi mal, pertokoan, hotel, rumah makan, fasilitas olahraga,
            moda transportasi, lokasi wisata, layanan kecantikan, sektor ekonomi
            kreatif, aktivitas keagamaan di tempat ibadah, serta penyelenggaraan
            acara
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          19 Juni 2020
          </h2>
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
                  src="https://i.ibb.co/fNxDvWx/menkes-terawan-agus-putranto-6-169.jpg"
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
