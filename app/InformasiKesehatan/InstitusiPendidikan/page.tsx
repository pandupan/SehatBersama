/* eslint-disable @next/next/no-img-element */
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
                src="https://i.ibb.co.com/bKrLw74/anak-skj.jpg"
                alt="phbs"
                className="object-cover items-center rounded-xl xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            INSTITUSI PENDIDIKAN
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
          Pembiasaan Perilaku Hidup Bersih dan Sehat
          </h1>
          <p className="xl:text-base text-xs line-clamp-5">
          Salah satu tugas guru dan orang tua adalah mendidik dan memantau  perilaku hidup bersih dan sehat (PHBS) pada anak.PHBS ini hendaknya diterapkan tidak hanya di sekolah tetapi juga di rumah dan  tempat umum.
Pola hidup bersih dan sehat dapat menurunkan risiko anak Anda terkena penyakit.

          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
            07 Juni 2024
            </h3>
            <a
              href="/InformasiKesehatan/InstitusiPendidikan/Artikel"
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
          <h1 className="font-bold sm:text-xl text-sm">INSTITUSI PENDIDIKAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Upaya Penanaman Budaya Perilaku Hidup Bersih dan Sehat di Sekolah
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Penerapan Perilaku Hidup Bersih dan Sehat (PHBS) di lingkungan
            sekolah sangat penting untuk memastikan kesehatan dan keselamatan
            semua siswa, staf, dan warga sekolah lainnya. Lingkungan pendidikan
            yang sehat tidak hanya menciptakan kondisi belajar yang optimal
            tetapi juga melindungi dari risiko penyakit. Berbagai indikator PHBS
            di tingkat SMP dan pendidikan sederajat perlu diperhatikan sesuai
            dengan pedoman yang telah ditetapkan. Contoh indikator ini mencakup
            praktik konsumsi jajanan sehat di kantin, kebiasaan mencuci tangan
            dengan sabun dan air mengalir, pemilahan dan pembuangan sampah yang
            tepat, pengendalian jentik nyamuk, larangan merokok di area sekolah,
            promosi membawa makanan sehat, serta perawatan kebersihan diri dan
            kesehatan reproduksi yang teratur.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">16 Februari 2024</h2>
          <div>
            <a
              href="/InformasiKesehatan/InstitusiPendidikan/Artikel1"
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
                  src="https://i.ibb.co.com/cFwY5cg/d9a29937fa29ba9bc5a6c1cf48795cbe.jpg"
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
          <h1 className="font-bold sm:text-xl text-sm">INSTITUSI PENDIDIKAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Menjaga Kebersihan Dengan Membuang Sampah Ke Tempat Sampah
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Dalam upaya mewujudkan lingkungan yang bersih dan nyaman, sangat
            penting untuk memastikan bahwa tempat sampah tertutup tersedia di
            berbagai lokasi strategis di sekolah, seperti ruang kelas, selasar,
            jamban, kantin, halaman, dan area lainnya. Tempat sampah ini harus
            dikosongkan setiap hari sesuai dengan sistem pengelolaan sampah yang
            efektif. Selain itu, penting juga untuk menciptakan budaya membuang
            sampah pada tempatnya dan sesuai dengan kategorinya, sehingga
            pengelolaan sampah dapat berjalan dengan optimal dan lingkungan
            sekolah tetap terjaga kebersihannya.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          17 April 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/InstitusiPendidikan/Artikel2"
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
                  src="https://i.ibb.co.com/XknLkMR/istockphoto-2149538813-1024x1024.jpg"
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
          <h1 className="font-bold sm:text-xl text-sm">INSTITUSI PENDIDIKAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Pentingnya Gizi Seimbang untuk Kesehatan dan Perkembangan Anak Sekolah
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Kesehatan dan kesejahteraan anak sekolah merupakan aspek yang sangat penting dalam proses pendidikan. Salah satu faktor penentu kesehatan yang krusial adalah asupan gizi yang seimbang. Anak-anak memerlukan gizi yang cukup setiap harinya, yang dapat diperoleh dari berbagai jenis makanan dan minuman. Gizi ini berperan sebagai sumber energi, mendukung pertumbuhan, memperbaiki sel-sel yang rusak, dan menjaga kesehatan secara keseluruhan. Oleh karena itu, penting bagi kita untuk memahami dan memenuhi kebutuhan gizi anak-anak agar mereka dapat tumbuh dan berkembang dengan optimal.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          15 Februari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/InstitusiPendidikan/Artikel3"
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
                  src="https://i.ibb.co.com/4jLbNzM/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg"
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
          <h1 className="font-bold sm:text-xl text-sm">INSTITUSI PENDIDIKAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Manfaat Aktivitas Fisik untuk Kesehatan dan Kesejahteraan: Memulai Hidup Sehat dari Sekarang

          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Aktivitas fisik tidak hanya membantu meningkatkan kebugaran fisik,
            tetapi juga memiliki dampak positif dalam mengendalikan berat badan,
            tekanan darah, serta meningkatkan daya tahan tubuh. Selain itu,
            aktivitas fisik secara teratur dapat meningkatkan fungsi organ vital
            seperti jantung, paru-paru, dan otot, menjaga agar mereka tetap kuat
            dan berfungsi optimal.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          15 Februari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/InstitusiPendidikan/Artikel4"
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
                  src="https://i.ibb.co.com/612YZtJ/istockphoto-671375670-1024x1024.jpg"
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
          <h1 className="font-bold sm:text-xl text-sm">INSTITUSI PENDIDIKAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Menerapkan Perilaku Hidup Bersih dan Sehat (PHBS) di Pondok Pesantren
          untuk Pencegahan Penyakit Menular
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Penyakit menular merupakan salah satu ancaman serius bagi kesehatan
            masyarakat, terutama di lingkungan yang padat seperti pondok
            pesantren, sebuah lembaga pendidikan yang kerap menjadi tempat
            tinggal dan belajar bagi banyak individu. Jenis penyakit ini
            disebabkan oleh berbagai agen biologi seperti virus, bakteri, jamur,
            dan parasit.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          07 Juni 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/InstitusiPendidikan/Artikel5"
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
                  src="https://i.ibb.co.com/ZxgY3Hz/6-P.png"
                  alt="artikel1"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* ARTIKEL 6 */}
       <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">INSTITUSI PENDIDIKAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Implementasi PHBS untuk Meningkatkan Kesehatan Anak Sekolah Dasar
          dengan Gizi Seimbang
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Anak-anak pada usia sekolah dasar membutuhkan asupan gizi yang
            seimbang untuk mendukung pertumbuhan fisik, perkembangan otak, dan
            kesehatan secara keseluruhan. Gizi yang cukup membantu mereka
            menjaga energi tinggi untuk kegiatan belajar dan bermain sepanjang
            hari. Dalam masa pertumbuhan yang pesat ini, penting untuk
            memastikan bahwa mereka mendapatkan nutrisi yang cukup melalui
            makanan yang seimbang dan berkualitas.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          19 Juni 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/InstitusiPendidikan/Artikel6"
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
                  src="https://i.ibb.co.com/1bqXcJb/7-p.jpg"
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
