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
                src="https://i.ibb.co.com/rw14ntn/image.png"
                alt="phbs"
                className="object-cover items-center rounded-xl xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">
            RUMAH TANGGA
          </h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
            PHBS Perilaku Hidup Bersih dan Sehat di Tatanan Rumah Tangga
          </h1>
          <p className="xl:text-base text-xs line-clamp-5">
            PHBS (perilaku Hidup Bersi dan Sehat) di Tatanan Rumah Tangga adalah
            semua perilaku kebersihan dan kesehatan yang dilakukan atas
            kesadaran masing masing sehingga setiap anggota keluarga atau
            keluarga dapat menolong dirinya sendiri di bidang kesehatan dan ikut
            berperan aktif dalam kegiatan-kegiatan kesehatan di masyarakat. PHBS
            di Tatanan Rumah Tangga adalah upaya untuk menyadarkan keluarga dan
            masing masing anggota keuarga agar memilki kemaunan dan kemampuan
            dalam mempraktikkan PHBS.Sehingga keluarga dan seluruh anggota
            keluarga dapat memelihara dan meningkatkan kesehatannya, mencegah
            resiko terjadinya penyakit dan melindungi diri dari ancaman penyakit
            serta berperan aktif dalam gerakan kesehatan masyarakat. Rumah
            tangga atau keluarga yang sehat dapat diwujudkan dengan
            mengimplementasikan PHBS dan menciptakan dukungan lingkungan yang
            sehat. Rumah tangga atau keluarga yang sehat merupakan aset utama
            pembangunan yang perlu dipelihara terus menerus, ditingkakan dan
            dilindungi kesehatannya. Sehingga perlu dilakukan upaya upaya untuk
            meningkatkan pengetahuan, kemauan dan kemampuan anggota rumah tangga
            atau anggota keluarga untuk melaksanakan PHBS, dan ikut berperan
            aktif dalam gerakan PHBS di masyarakat.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              11 November 2023
            </h3>
            <a
              href="/InformasiKesehatan/RumahTangga/Artikel"
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
          <h1 className="font-bold sm:text-xl text-sm">RUMAH TANGGA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Apa Itu Perilaku Hidup Bersih dan Sehat (PHBS) serta Contohnya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Perilaku Hidup Bersih dan Sehat (PHBS) merupakan upaya untuk
            menularkan pengalaman mengenai perilaku hidup sehat melalui
            individu, kelompok, atau pun masyarakat luas dengan jalur-jalur
            komunikasi sebagai media berbagi informasi.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            15 Februari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/RumahTangga/Artikel1"
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
                  src="https://i.ibb.co.com/G9qwxP5/image-2024-06-19-063316567.png"
                  className="object-cover"
                  alt="artikel2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 2 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">RUMAH TANGGA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Pentingnya Jamban Sehat untuk Perilaku Hidup Bersih dan Sehat
            (PHBS), Coba Cek di Rumahmu!
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Salah satu indikator penting dalam Perilaku Hidup Bersih dan Sehat
            (PHBS) adalah kebiasaan buang hajat di jamban yang sehat. Jamban
            yang sehat merupakan infrastruktur sanitasi yang penting untuk
            pembuangan kotoran dan pengelolaan air limbah. Menggunakan jamban
            yang sehat dapat mencegah penyebaran berbagai penyakit yang
            disebabkan oleh buang hajat di sembarang tempat.PHBS dapat
            diterapkan di rumah tangga, tempat umum, dan sekolah. Artikel ini
            akan membahas PHBS dalam lingkungan rumah tangga yang berkaitan
            dengan penggunaan jamban sehat dan syarat-syaratnya.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            21 Desember 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/RumahTangga/Artikel2"
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
                  src="https://i.ibb.co.com/r27wrJn/image.png"
                  className="object-cover"
                  alt="artikel2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 3 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">RUMAH TANGGA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Hindari Penyakit dengan Terapkan PHBS di Rumah: Syarat dan Manfaat
            Hunian Sehat dan Bersih
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Perilaku Hidup Bersih dan Sehat (PHBS) bermula dari rumah, kemudian
            merambah ke lingkungan dan komunitas masyarakat. Menerapkan PHBS di
            rumah menciptakan keluarga yang sehat dan mampu meminimalisir
            masalah kesehatan.Manfaat PHBS di Rumah1. Meningkatkan
            Kesejahteraan: Setiap anggota keluarga tidak mudah terkena
            penyakit.2. Meningkatkan Produktivitas: Keluarga dapat tumbuh sehat
            dan tercukupi gizinya, meningkatkan produktivitas anggota keluarga.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            20 desember 2023
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/RumahTangga/Artikel3"
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
                  src="https://i.ibb.co.com/fdYBSFC/image.png"
                  alt="artikel4"
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
          <h1 className="font-bold sm:text-xl text-sm">RUMAH TANGGA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            7 Langkah Bijak Memproses dan Membuang Sampah Medis Rumah Tangga
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Kesehatan rumah tangga tidak hanya mencakup kebersihan fisik, tetapi
            juga penanganan yang aman terhadap sampah medis. Sampah medis rumah
            tangga mencakup benda-benda yang terkontaminasi oleh darah, cairan
            tubuh, atau bahan kimia berbahaya. Penting untuk mengelola sampah
            medis dengan bijak agar tidak menimbulkan risiko kesehatan bagi
            penghuni rumah tangga dan lingkungan sekitar.Sampah Medis Rumah
            Tangga Sampah medis rumah tangga adalah benda-benda yang
            terkontaminasi oleh darah, cairan tubuh, atau bahan kimia berbahaya,
            yang dihasilkan dari perawatan kesehatan di rumah. Contohnya
            termasuk jarum suntik, alat pengukur glukosa darah, perban bekas,
            peralatan nebulizer, dan obat-obatan kedaluwarsa. Cara Mengolah dan
            Membuang Sampah Medis Rumah Tangga
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">6 Maret 2024</h2>
          <div>
            <a
              href="/InformasiKesehatan/RumahTangga/Artikel4"
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
                  src="https://i.ibb.co.com/R64HQ2P/image.png"
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
