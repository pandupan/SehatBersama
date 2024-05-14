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
                src="https://i.ibb.co/YyJCk4B/gambar-1-65ccd609de948f69127071f2.jpg"
                alt="phbs"
                className="object-cover items-center rounded-xl xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">RUMAH TANGGA</h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
          PHBS Perilaku Hidup Bersih dan Sehat di Tatanan Rumah Tangga
          </h1>
          <p className="xl:text-base text-xs line-clamp-5 lg:line-clamp-none">
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
              href="/InformasiKesehatan/RumahTangga/Artikel1"
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
            komunikasi sebagai media berbagi informasi. PHBS merupakan langkah
            awal menuju peningkatan kualitas kesehatan masyarakat. Program ini
            dapat diterapkan di berbagai lingkungan seperti sekolah dan rumah
            tangga. Salah satu contoh PHBS di lingkungan sekolah ialah membuang
            sampah pada tempatnya dan mencuci tangan dengan sabun sebelum serta
            sesudah makan.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          15 Februari 2024
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
                  src="https://i.ibb.co/yF4fxKt/hari-cuci-tangan-pakai-sabun-sedunia-di-bogor-antarafoto-ratio-16x9.jpg"
                  className="object-cover"
                  alt="artikel1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 2 */}
      {/* <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">RUMAH TANGGA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Penyebab Sendi Geser dan Cara Menanganinya dengan Tepat
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Sendi geser adalah keadaan di mana tulang bergeser dari tempat
            perlekatannya pada sendi yang disebabkan dari kecelakaan, olahraga,
            faktor usia dan faktor keturunan. Kondisi ini bisa diatasi dengan
            reposisi, imobilisasi, hingga operasi.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            11 November 2023
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
      </div> */}
      {/* ARTIKEL 3 */}
      {/* <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">RUMAH TANGGA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Sakit Gigi Tak Kunjung Sembuh, Ini Penyebab dan Cara Mengatasinya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Sakit gigi tak kunjung sembuh bisa disebabkan oleh infeksi di gigi.
            Jika gigi tidak segera dirawat ke dokter gigi, maka rasa sakit bisa
            terus timbul meski bisa mereda sementara saat minum obat sakit gigi.
            Sakit gigi bisa cuma dirasakan sebentar, tapi bisa juga dirasakan
            terus menerus. Sakit gigi yang tidak kunjung sembuh ini tentu
            mengganggu, jadi kamu perlu tahu juga cara mengatasinya. Biasanya,
            jika rasa nyeri tidak kunjung hilang meski kamu sudah minum obat,
            itu tandanya tindakan perawatan dari dokter perlu segera kamu
            dapatkan.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            10 November 2023
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
      </div> */}
      {/* ARTIKEL 4 */}
      {/* <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">RUMAH TANGGA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Penyebab Napas Pendek dan Cara Mengatasinya
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Penyakit jantung bisa menyebabkan napas jadi pendek-pendek. Saat
            seseorang mengalami gangguan jantung, jantung tidak cukup kuat
            memompa darah dengan baik, sehingga fungsi pernapasan tidak
            maksimal. Napas pendek normal jika dialami oleh orang yang baru saja
            melakukan olahraga intens, mengalami perubahan suhu secara drastis,
            atau berada di ketinggian. Namun, jika kamu mengalaminya hampir
            setiap saat, bahkan saat beraktivitas ringan atau sedang
            beristirahat, bisa jadi ada gangguan kesehatan yang perlu
            diwaspadai.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
            18 November 2023
          </h2>
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
      </div> */}
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
