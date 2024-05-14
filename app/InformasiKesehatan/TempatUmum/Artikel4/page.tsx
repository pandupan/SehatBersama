import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Regulasi Larangan Merokok di Tempat Umum: Langkah Penting untuk
          Menjaga Kesehatan Jantung
        </h1>
        <div className="flex items-centerjustify-between">
          <div className="flex items-center gap-4 mt-4 mb-2 w-full">
            <div className="relative w-16 sm:w-20 aspect-square rounded-full border-2 bg-gray-100 overflow-hidden">
              <Image
                src="/image/profile.jpeg"
                alt="logo"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-lg text-gray-600">
                Puskesmas Purbaratu
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Sabtu, 30 September 2023
              </span>
            </div>
          </div>
          <div className="my-auto">
          <a
              href="/InformasiKesehatan/TempatUmum"
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
              src="https://i.ibb.co/BgTM850/dampak-rokok-terhadap-kesehatan-jantung.webp"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Ilustrasi Rokok dan Jantung
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Rokok adalah salah satu faktor risiko utama penyakit jantung
          </h3>
          <p className="text-gray-600 text-justify">
            Rokok adalah salah satu faktor risiko utama penyakit jantung, yang
            menjadi penyebab kematian nomor satu di seluruh dunia. Dengan
            menyebabkan berbagai jenis penyakit jantung, seperti penyakit
            jantung koroner, gagal jantung, serangan jantung, dan stroke,
            merokok sangat berbahaya bagi kesehatan jantung.
          </p>
          <p className="text-gray-600 text-justify">
            Menyadari bahaya rokok terhadap kesehatan jantung, penting untuk
            mengimplementasikan regulasi yang ketat tentang larangan merokok di
            tempat umum di seluruh Indonesia. Regulasi ini bertujuan untuk
            melindungi masyarakat dari paparan asap rokok, baik dari perokok
            aktif maupun pasif.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Berikut beberapa faktor yang mendukung perlunya regulasi larangan
            merokok di tempat umum:
          </h3>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            1. Kandungan Kimia Berbahaya:
          </h3>
          <p className="text-gray-600 text-justify">
            Asap rokok mengandung lebih dari 7.000 bahan kimia, termasuk
            nikotin, tar, karbon monoksida, dan logam berat, yang dapat merusak
            pembuluh darah dan jantung, serta meningkatkan risiko penyakit
            jantung.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            2. Dampak Kesehatan:
          </h3>
          <p className="text-gray-600 text-justify">
            Paparan asap rokok dapat menyebabkan berbagai masalah kesehatan,
            termasuk penyakit jantung, kanker, stroke, dan penyakit paru-paru
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            3. Keefektifan Regulasi:
          </h3>
          <p className="text-gray-600 text-justify">
            Regulasi larangan merokok di tempat umum telah terbukti efektif
            dalam mengurangi paparan asap rokok dan meningkatkan kesehatan
            masyarakat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Manfaat dari regulasi larangan merokok di tempat umum meliputi:
          </h3>
          <p className="text-gray-600 text-justify">
            - Melindungi Kesehatan Masyarakat: Mencegah paparan asap rokok bagi
            perokok aktif maupun pasif.
          </p>
          <p className="text-gray-600 text-justify">
            - Menurunkan Risiko Penyakit: Mengurangi risiko penyakit jantung,
            kanker, stroke, dan penyakit paru-paru.
          </p>
          <p className="text-gray-600 text-justify">
            - Meningkatkan Kualitas Udara: Menjadikan udara di tempat umum lebih
            bersih dan sehat.
          </p>
          <p className="text-gray-600 text-justify">
            - Menciptakan Lingkungan yang Nyaman: Memberikan lingkungan yang
            lebih nyaman bagi semua orang.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Menciptakan lingkungan yang lebih sehat dan bebas dari asap rokok
          </h3>
          <p className="text-gray-600 text-justify">
            Dengan menerapkan regulasi larangan merokok di tempat umum yang kuat
            dan efektif, diharapkan dapat menciptakan lingkungan yang lebih
            sehat dan bebas dari asap rokok. Beberapa rekomendasi untuk
            memperkuat regulasi tersebut antara lain:
          </p>
          <p className="text-gray-600 text-justify">
            - Sanksi yang Tegas: Menetapkan sanksi yang tegas bagi pelanggar
            regulasi.
          </p>
          <p className="text-gray-600 text-justify">
            - Sosialisasi dan Edukasi: Meningkatkan sosialisasi dan edukasi
            tentang bahaya rokok.
          </p>
          <p className="text-gray-600 text-justify">
            - Dukungan Penelitian: Mendukung penelitian tentang dampak regulasi
            larangan merokok.
          </p>
          <p className="text-gray-600 text-justify">
            Dengan langkah-langkah tersebut, diharapkan dapat menciptakan
            Indonesia yang lebih sehat dan bebas dari asap rokok, serta
            mengurangi risiko penyakit jantung secara signifikan.
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
