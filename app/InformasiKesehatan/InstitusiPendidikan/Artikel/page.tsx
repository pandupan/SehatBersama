/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Puskesmas Maju: Mahasiswa PMM UMM Kelompok 63 Tingkatkan Pemahaman
          para Pasien Puskesmas DAU melalui Edukasi Hipertensi dan PHBS
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
                14 Februari 2024, diperbarui 25 Maret 2024
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/InstitusiPendidikan"
              className="bg-[#1dbbb4] rounded-md text-white sm:text-base text-xs px-2 py-2 sm:px-10 sm:py-2"
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="relative w-full aspect-video flex justify-center items-center rounded-md bg-gray-100 overflow-hidden">
            <img
              src="https://i.ibb.co/YyJCk4B/gambar-1-65ccd609de948f69127071f2.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Mahasiswa PMM UMM</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Kegiatan pengabdian kepada masyarakat mahasiswa (PMM) ini bertujuan
            untuk hilirisasi hasil penelitian Universitas Muhammadiyah Malang
            (UMM)
          </h3>
          <p className="text-gray-600 text-justify">
            Bantuan ini dimanfaatkan oleh kelompok PMM yang berjumlah 63
            mahasiswa Universitas Muhammadiyah Malang yang beranggotakan Toby
            Farhan Nabiel Kubarek dan kawan-kawan untuk membantu pasien di
            Puskesmas DAU yang mengidap penyakit darah tinggi dan PHBS.
            Penerapan ini dilakukan karena masih kurangnya pengetahuan
            masyarakat umum khususnya lansia mengenai pemeriksaan kesehatan
            rutin, dan perilaku PHBS khususnya pada ibu menyusui. Latihan
            sosialisasi ini akan dilakukan melalui pemberian informasi topik
            kesehatan yang dibahas dan pembagian leaflet di akhir sesi
          </p>
          <p className="text-gray-600 text-justify">
            Mahasiswa rombongan PMM UMM yang berjumlah 36 orang tersebut
            melaksanakan kegiatan bakti sosial melalui pertukaran yang dipimpin
            oleh Dosen Pembimbing Lapangan (DPL) Firda Ayu Amalia, S.E., Ak.,
            M.SA, dan menyelesaikan pelatihannya di Puskesmas DAU pokok bahasan
            hipertensi dan PHBS.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Kegiatan pertukaran dilaksanakan selama dua hari, dengan
            menghadirkan dua pembicara mahasiswa dan 35 peserta umum
          </h3>
          <p className="text-gray-600 text-justify">
            Perubahan perilaku sehat pada ibu menyusui, khususnya yang menderita
            hipertensi. Pengabdian masyarakat ini sering dilakukan oleh
            mahasiswa untuk meningkatkan keterampilan dan berkontribusi terhadap
            kesejahteraan masyarakat dengan memberikan solusi berdasarkan
            permasalahan dunia nyata.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Materi pertama yang diberikan ditujukan kepada penderita darah
            tinggi yang meliputi tanda dan gejala, faktor risiko, dampak darah
            tinggi, pola hidup sehat dan pencegahan penyakit
          </h3>
          <p className="text-gray-600 text-justify">
            Materi pertama yang diberikan ditujukan kepada penderita darah
            tinggi yang meliputi tanda dan gejala, faktor risiko, dampak darah
            tinggi, pola hidup sehat dan pencegahan penyakit. Kegiatan
            berlangsung interaktif antara narasumber dan peserta umum. Terdapat
            kesempatan untuk tanya jawab di akhir sesi. Pemateri akan membagikan
            leaflet atau poster dengan gambaran materi yang mudah dipahami oleh
            masyarakat. Hal ini memungkinkan masyarakat untuk membawa pulang
            materi tersebut dengan harapan dapat digunakan di kemudian hari.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pemberian materi kedua dirujukan kepada para ibu menyusui mengenai
            kebersihan diri ibu menyusui untuk pencegahan stunting pada anak
          </h3>
          <p className="text-gray-600 text-justify">
            Pemberian materi kedua dirujukan kepada para ibu menyusui mengenai
            kebersihan diri ibu menyusui untuk pencegahan stunting pada anak.
            ASI perlu diberikan selama 6 bulan kehidupan anak untuk menunjang
            imunitas tubuh anak. Sosialisasi dilakukan dengan pemberian materi,
            sesi tanya-jawab serta pemberian leaflet
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Kelompok PMM 36 dari Universitas Muhammadiyah Malang ini berhasil
            melaksanakan sosialisasi yang tidak terhenti hanya pada masyarakat
            umum saja, namun melibatkan para tenaga kesehatan di puskesmas DAU
            serta kader - kadernya dalam membantu berperan pada program kerja
            mereka yang berfokus kepada kesehatan masyarakat.
          </p>
        </div>

        {/* <div>
          <h4 className="font-bold">Tag:</h4>
          <div className="flex flex-wrap gap-2 items-center mt-2 text-xs sm:text-base">
            <span className="block py-1 px-2 rounded bg-primary text-white">
              Gizi
            </span>
            <span className="block py-1 px-2 rounded bg-primary text-white">
              Tips & Trick
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
