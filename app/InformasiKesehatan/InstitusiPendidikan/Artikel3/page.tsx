/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Perilaku Hidup Bersih dan Sehat di RA Nurul Huda Langang
        </h1>
        <div className="flex items-centerjustify-between">
          <div className="flex items-center gap-4 mt-4 mb-2 w-full">
            <div className="relative w-16 sm:w-20 aspect-square rounded-full border-2 bg-gray-100 overflow-hidden">
              <Image
                src="/image/profile.jpeg"
                alt="logo"
                fill={true}
                className="object-contain"
              />
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-lg text-gray-600">
                Puskesmas Purbaratu
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
              15 Februari 2024
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/KesehatanMental"
              className="bg-[#1dbbb4] rounded-md text-white sm:text-base text-xs px-2 py-2 sm:px-10 sm:py-2"
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
            <img
              src="https://i.ibb.co/jgRqL84/umm.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Mahasiswa Universitas Muhammadiyah Malang
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Kegiatan Pengabdian Masyarakat Oleh Mahasiswa (PMM)
          </h3>
          <p className="text-gray-600 text-justify">
            Semua mahasiswa Universitas Muhammadiyah Malang harus mengikuti
            Kegiatan Pengabdian Masyarakat Oleh Mahasiswa (PMM). PMM adalah cara
            bagi mahasiswa untuk berkontribusi pada masyarakat melalui berbagai
            kegiatan positif. Salah satu tujuan dari Kegiatan Pengabdian
            Masyarakat oleh Mahasiswa (PMM) ini adalah untuk menerapkan
            Hilirisasi temuan penelitian Universitas Muhammadiyah Malang.
          </p>
          <p className="text-gray-600 text-justify">
            Almas Syamma', Camelia Churil Aini, Fansisca Fitria Aini, Gita Tri
            Kurnia Rahmah, dan Putri Citra Banowati adalah siswa dari program
            Farmasi Universitas Muhammadiyah Malang. Mereka semua dibimbing oleh
            Ibu Gina Harventy, SE.Ak., M.Si., CA, sebagai Dosen Pembimbing
            Lapangan (DPL).University of Muhammadiyah Malang
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            PHBS membantu menciptakan sekolah yang lebih sehat.
          </h3>
          <p className="text-gray-600 text-justify">
            Di sekolah, Perilaku Hidup Bersih dan Sehat (PHBS) adalah upaya
            untuk memberdayakan siswa, guru, dan masyarakat di sekitar sekolah
            untuk tahu, ingin, dan mampu melakukan PHBS. Ini sangat penting
            untuk anak-anak usia dini karena PHBS membentuk kebiasaan yang akan
            mempengaruhi kesehatan mereka di masa dewasa. PHBS juga membantu
            menciptakan sekolah yang lebih sehat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Mahasiswa PMM kelompok 95 dari Universitas Muhammadiyah Malang
          </h3>
          <p className="text-gray-600 text-justify">
            Mahasiswa PMM kelompok 95 dari Universitas Muhammadiyah Malang
            melakukan penerapan PHBS di TK RA Nurul Huda Desa Langlang pada hari
            Senin, 5 Februari 2024. Pada tanggal tersebut, para siswa
            mempelajari cara membedakan sampah berdasarkan jenisnya. Tujuannya
            adalah untuk memberi tahu siswa TK RA Nurul Huda bahwa ada banyak
            jenis sampah di lingkungan mereka.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Pada tanggal 8 Februari 2024, TK tersebut mengadakan kegiatan serupa
            dengan materi yang berbeda, yaitu tata cara 6 langkah cuci tangan
            dan gosok gigi. Penyampaian kembali topik ini menggunakan pendekatan
            yang menarik karena berinteraksi langsung dengan anak-anak. Kami
            menggunakan teknik demonstrasi dengan manekin gigi untuk praktik
            gosok gigi kami. Dalam latihan cuci tangan, siswa mempraktikkan
            secara langsung prosedur yang harus diikuti untuk mencuci tangan
            yang lebih baik untuk menghilangkan kuman dan bakteri. Untuk
            membantu anak-anak mengingat, pembelajaran dilakukan dengan
            bernyanyi bersama dan melakukan cuci tangan dengan benar.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Selama edukasi PHBS tentang membedakan jenis sampah, cuci tangan,
            dan gosok gigi, ditemukan bahwa pendekatan pengajaran yang digunakan
            cukup menarik minat anak-anak untuk mengambil bagian dalam kegiatan
            tersebut. Salah satunya adalah karena metode belajar bermain yang
            digunakan oleh mahasiswa PMM ini membuat kelas menjadi menyenangkan.
            Mereka yang menerima pendidikan PHBS yang terintegrasi ini
            diharapkan dapat membangun kebiasaan hidup yang lebih sehat sejak
            dini, yang akan berdampak positif pada kesehatan mereka di masa
            depan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
