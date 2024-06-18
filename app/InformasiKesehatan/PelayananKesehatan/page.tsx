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
                src="https://www.kemenkopmk.go.id/pemerintah-berupaya-memenuhi-pelayanan-kesehatan-masyarakat-secara-berkesinambungan"
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
          <p className="xl:text-base text-xs line-clamp-5 lg:line-clamp-none">
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
            Peran Fasilitas Kesehatan Jadi Kunci Negara Sehat
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Menteri Kesehatan (Menkes) Budi Gunadi Sadikin telah menyoroti peran
            penting fasilitas kesehatan dalam memperkuat fondasi kesehatan suatu
            negara. Pernyataannya ini mencuat dalam kegiatan Silaturahmi
            Presiden RI dengan peserta Jaminan Kesehatan Nasional (JKN) di
            Kabupaten Gunungkidul, Provinsi DI Yogyakarta pada Selasa, 30
            Januari 2024.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">31 Januari 2024</h2>
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
                  src="https://infopublik.id/assets/upload/headline//bpjs22.jpg"
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
            Masyarakat Dihimbau Memanfaatkan Pelayanan Kesehatan Saat ”GERMAS”
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            {" "}
            Gerakan Masyarakat Hidup Sehat (GERMAS) adalah inisiatif nasional
            yang dicanangkan oleh pemerintah Indonesia untuk meningkatkan
            kesadaran dan partisipasi masyarakat dalam menjaga kesehatan. Dengan
            slogan "Sehat Dimulai dari Diri Sendiri", GERMAS mendorong
            masyarakat untuk aktif melakukan berbagai aktivitas yang mendukung
            kesehatan, seperti olahraga rutin, makan makanan bergizi, dan cek
            kesehatan secara berkala. Salah satu poin penting yang ditekankan
            dalam GERMAS adalah pemanfaatan pelayanan kesehatan yang tersedia.
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
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">3 November 2023</h2>
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
                  src="https://th.bing.com/th/id/OIP.Hg7wFIaHuHEJMF3Ium_KIwHaEl?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
          <h1 className="font-bold sm:text-xl text-sm">PELAYANAN KESEHATAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Penerapan RME Jamin Kemudahan Akses Layanan Kesehatan Masyarakat
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Pemerintah Indonesia terus berupaya meningkatkan akses layanan kesehatan yang murah dan berkualitas melalui pemanfaatan teknologi digital. Salah satu langkah utamanya adalah penerapan Rekam Medis Elektronik (RME) di fasilitas kesehatan di seluruh Indonesia. Inisiatif ini bertujuan untuk mempercepat, mempermudah, dan meningkatkan transparansi akses layanan kesehatan.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          07 November 2023
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
                  src="https://sehatnegeriku.kemkes.go.id/wp-content/uploads/2023/11/a1b4366a-4697-4a96-92e1-f8a7d65ab346.jpeg"
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
          <h1 className="font-bold sm:text-xl text-sm">PELAYANAN KESEHATAN</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Pemerintah Berupaya Memenuhi Pelayanan Kesehatan Masyarakat Secara Berkesinambungan
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Pemerintah terus berupaya membangun sistem Jaminan Kesehatan Nasional (JKN) agar dapat memenuhi pelayanan kesehatan masyarakat secara optimal dan berkesinambungan. Menurut Menteri Koordinator Bidang Pembangunan Manusia dan Kebudayaan (Menko PMK) Muhadjir Effendy, pemerintah telah menyiapkan serangkaian kebijakan untuk memperbaiki ekosistem JKN secara menyeluruh. Kebijakan tersebut mencakup rasionalisasi manfaat program sesuai kebutuhan dasar kesehatan, penerapan satu kelas rawat yang standar, dan penyederhanaan tarif layanan.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          11 Juni 2020
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/PelayananKesehatan/Artikel6"
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
                  src="https://www.kemenkopmk.go.id/sites/default/files/articles/2020-06/A27B6966-825C-4467-A863-42A4A1300C6B.jpeg"
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
