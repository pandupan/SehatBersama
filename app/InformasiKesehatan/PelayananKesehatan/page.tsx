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
                src="https://i.ibb.co.com/rc2ccRV/image.png"
                alt="phbs"
                className="object-cover items-center rounded-xl xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            PELAYANAN KESEHATAN
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
          Perilaku Hidup Bersih dan Sehat (PHBS) di Fasilitas Pelayanan Kesehatan
          </h1>
          <p className="xl:text-base text-xs line-clamp-5">
          Kebijakan pembangunan kesehatan menekankan pada upaya promotif dan preventif untuk menjadikan individu yang sudah sehat menjadi lebih sehat dan produktif. Pola hidup sehat adalah implementasi dari paradigma kesehatan yang melibatkan perilaku individu, keluarga, kelompok, dan masyarakat yang bertujuan untuk meningkatkan, memelihara, dan melindungi kesehatan secara fisik, mental, spiritual, dan sosial.

          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              11 Juni 2020
            </h3>
            <a
              href="/InformasiKesehatan/PelayananKesehatan/Artikel"
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
          <h1 className="font-bold sm:text-xl text-sm">PELAYANAN KESEHATAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Membangun Lingkungan Kesehatan: Strategi PHBS dalam Manajemen Limbah
            Medis di Fasilitas Pelayanan Kesehatan
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Pada setiap langkah pelayanan kesehatan, kita tidak hanya berfokus
            pada pemulihan pasien, tetapi juga pada keselamatan lingkungan di
            sekitar kita. Salah satu aspek penting dalam membangun lingkungan
            yang sehat adalah manajemen limbah medis di fasilitas pelayanan
            kesehatan. Dalam artikel ini, kita akan menjelajahi strategi
            Perilaku Hidup Bersih dan Sehat (PHBS) yang efektif dalam manajemen
            limbah medis tersebut.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">15 Juli 2020</h2>
          <div>
            <a
              href="/InformasiKesehatan/PelayananKesehatan/Artikel1"
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
                  src="https://i.ibb.co/Gdjq3Pv/dr-Hesty-1.jpg"
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
          <h1 className="font-bold sm:text-xl text-sm">PELAYANAN KESEHATAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Mengenal Retrograde Intrarenal Surgery dan Pentingnya PHBS di Fasilitas Kesehatan untuk Pencegahan Batu Ginjal Jangka Panjang
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Menurut data Riset Kesehatan Dasar Nasional (Riskesdas) tahun 2020,
            prevalensi penyakit batu ginjal di Indonesia tercatat sebanyak 3.8%,
            yang setara dengan 739.208 jiwa. Penyakit batu ginjal sering kali
            tidak menunjukkan gejala atau keluhan awal, sehingga batu ginjal
            bisa tumbuh tanpa disadari hingga mencapai ukuran yang signifikan.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">Rabu 05 Juni 2024</h2>
          <div>
            <a
              href="/InformasiKesehatan/PelayananKesehatan/Artikel2"
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
                  src="https://i.ibb.co.com/T2pG4Jr/fk-1.jpg"
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
          <h1 className="font-bold sm:text-xl text-sm">PELAYANAN KESEHATAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Pangan Yang Sehat Dan Aman Bisa Cegah Berbagai Penyakit dengan Peran Fasilitas Kesehatan dalam Menjalankan PHBS
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Setiap tahun, pada tanggal 7 Juni, dunia memperingati Hari Keamanan Pangan Sedunia (HKPS) untuk meningkatkan kesadaran global tentang pentingnya mencegah, mendeteksi, dan mengelola risiko penyakit yang disebabkan oleh makanan terkontaminasi atau Kejadian Luar Biasa (KLB) Keracunan Pangan.

          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">Selasa, 11 Juni</h2>
          <div>
            <a
              href="/InformasiKesehatan/PelayananKesehatan/Artikel3"
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
                  src="https://i.ibb.co.com/0DMVjLt/fk-2.jpg"
                  alt="artikel3"
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
          <h1 className="font-bold sm:text-xl text-sm">PELAYANAN KESEHATAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Strategi Pencegahan Kusta dan Implementasi PHBS oleh Petugas Kesehatan
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Penyakit kusta, jika tidak diobati dengan baik, dapat menyebabkan kecacatan. Pengobatan kusta umumnya membutuhkan waktu 6 hingga 12 bulan, tergantung pada kondisi pasien. Salah satu terapi yang umum digunakan untuk pasien kusta adalah terapi MDT (Multi Drug Therapy). Terapi MDT diberikan khususnya di daerah-daerah dengan tingkat kasus kusta yang tinggi. Pemerintah menyediakan obat kusta ini secara gratis di daerah-daerah tersebut, tanpa dipungut biaya.

          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          Sabtu, 6 Februari 2021
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/PelayananKesehatan/Artikel4"
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
                  src="https://i.ibb.co.com/BrDSJ68/4-fk.jpg"
                  alt="artikel4"
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
          <h1 className="font-bold sm:text-xl text-sm">PELAYANAN KESEHATAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Kehidupan Sehat dan Sejahtera: Upaya Mewujudkan Pelayanan Kesehatan yang Lebih Baik di Indonesia
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Kehidupan sehat dan sejahtera bagi seluruh penduduk Indonesia merupakan tujuan yang diupayakan oleh banyak pihak. Untuk mencapai tujuan ini, berbagai aspek harus diperhatikan, seperti layanan kesehatan dasar dan rujukan, peningkatan kebersihan lingkungan, penyediaan farmasi dan alat kesehatan, pencegahan dan pengendalian penyakit menular dan tidak menular, rehabilitasi penyalahgunaan NAPZA, serta layanan kesehatan reproduksi dan KB bagi perempuan usia reproduksi, termasuk remaja. Pemerintah berkomitmen untuk meningkatkan akses layanan kesehatan yang terjangkau dan berkualitas dengan menerapkan Rekam Medis Elektronik (RME). Jejaring Nasional Pendidikan Kesehatan (JNPK) merupakan organisasi yang menyatukan tenaga ahli dan pemerhati di bidang pendidikan kesehatan.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          13 Januari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/PelayananKesehatan/Artikel5"
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
                  src="https://assets.kompasiana.com/items/album/2024/01/14/homecare2-65a3e92412d50f2c706dfef7.png?t=o&v=740&x=416"
                  alt="artikel5"
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
