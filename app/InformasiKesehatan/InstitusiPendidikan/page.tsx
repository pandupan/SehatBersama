/* eslint-disable react/no-unescaped-entities */
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
                src="https://i.ibb.co/YyJCk4B/gambar-1-65ccd609de948f69127071f2.jpg"
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
            Puskesmas Maju: Mahasiswa PMM UMM Kelompok 63 Tingkatkan Pemahaman
            para Pasien Puskesmas DAU melalui Edukasi Hipertensi dan PHBS
          </h1>
          <p className="xl:text-base text-xs line-clamp-5 lg:line-clamp-none">
            Kegiatan pengabdian kepada masyarakat mahasiswa (PMM) ini bertujuan
            untuk hilirisasi hasil penelitian Universitas Muhammadiyah Malang
            (UMM). Bantuan ini dimanfaatkan oleh kelompok PMM yang berjumlah 63
            mahasiswa Universitas Muhammadiyah Malang yang beranggotakan Toby
            Farhan Nabiel Kubarek dan kawan-kawan untuk membantu pasien di
            Puskesmas DAU yang mengidap penyakit darah tinggi dan PHBS.
            Penerapan ini dilakukan karena masih kurangnya pengetahuan
            masyarakat umum khususnya lansia mengenai pemeriksaan kesehatan
            rutin, dan perilaku PHBS khususnya pada ibu menyusui. Latihan
            sosialisasi ini akan dilakukan melalui pemberian informasi topik
            kesehatan yang dibahas dan pembagian leaflet di akhir sesi
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
              14 Februari 2024, diperbarui 25 Maret 2024
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
          Implementasi Phbs, Lpka Palu Bersama Mahasiswa/I Poltekkes Kemenkes
          Palu Tinjau Langsung Area Blok Hunian
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Lembaga Pembinaan Khusus Anak (LPKA) Kelas II Palu dan Mahasiswa
            Profesi Ners dari Politeknik Kesehatan Kementerian Kesehatan
            (Poltekkes Kemenkes) Kota Palu melakukan tinjauan langsung ke area
            blok hunian anak binaan sebagai bagian dari implementasi Perilaku
            Hidup Bersih dan Sehat (PHBS).
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
                  src="https://i.ibb.co/G2ZYDnd/whatsapp-image-2024-02-16-at-12-14-25-65cefb0fde948f448e4b9e14.jpg"
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
          Pembentukan TIMKES, Dalam Upaya Melaksanakan Praktik Perilaku Hidup
          Bersih dan Sehat (PHBS) di Pondok Pesantren Miftahul Huda 4
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Mahasiswa Pengabdian Masyarakat (PMM) Gelombang 05 Kelompok 93 di
            Universitas Muhammadiyah Malang, dibimbing oleh Ibu Sri Sunaringsih
            Ika Wrdojo SKM. M.PH. Ph.D, memberikan edukasi dan praktik Perilaku
            Hidup Bersih dan Sehat (PHBS) kepada warga Pondok Pesantren Miftahul
            Huda 4 dengan membentuk Tim Kesehatan (TIMKES) pada hari Sabtu, 3
            Februari 2020.
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
                  src="https://i.ibb.co/gPCGpx8/gambar-whatsapp-2024-02-25-pukul-10-07-27-f04673ed-65daaf64de948f3dd032ac22.jpg"
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
          Perilaku Hidup Bersih dan Sehat di RA Nurul Huda Langang
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Semua mahasiswa Universitas Muhammadiyah Malang harus mengikuti
            Kegiatan Pengabdian Masyarakat Oleh Mahasiswa (PMM). PMM adalah cara
            bagi mahasiswa untuk berkontribusi pada masyarakat melalui berbagai
            kegiatan positif. Salah satu tujuan dari Kegiatan Pengabdian
            Masyarakat oleh Mahasiswa (PMM) ini adalah untuk menerapkan
            Hilirisasi temuan penelitian Universitas Muhammadiyah Malang.
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
                  src="https://i.ibb.co/jgRqL84/umm.jpg"
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
          Mahasiswa KKN Tim 1 UNDIP Ajak Siswa Sekolah Dasar di Desa Jatilawang
          Terapkan PHBS di Sekolah
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Perilaku Hidup Bersih dan Sehat (PHBS) adalah upaya atau rekayasa
            sosial yang mengajak masyarakat untuk berperilaku sehari-hari
            sebagai agen perubahan (agent of change) yang mampu meningkatkan
            kualitas dalam rangka menciptakan kehidupan yang bersih dan sehat.
            Manfaat utama dari PHBS adalah masyarakat menjadi sadar kesehatan
            dan memiliki pengetahuan dan kesadaran untuk menjalani perilaku
            hidup yang menjaga kebersihan dan kesehatan.
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
                  src="https://i.ibb.co/TWLWDH4/whatsapp-image-2024-02-05-at-13-32-33-fa696211-65ccc87412d50f20cc089513.jpg"
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
