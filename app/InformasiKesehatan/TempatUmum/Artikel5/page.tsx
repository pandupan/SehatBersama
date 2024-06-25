import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Langkah Proaktif dalam Menghadapi Adaptasi Kebiasaan Baru dengan
          Menerapkan PHBS di Tempat Umum
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
                Kompas Tv
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                19 Juni 2020
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
              src="https://i.ibb.co.com/CV7d2SP/6-tu.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Ilustrasi Rokok dan Jantung</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Langkah Proaktif dalam Menghadapi Adaptasi Kebiasaan Baru dengan
            Menerapkan PHBS di Tempat Umum
          </h3>
          <p className="text-gray-600 text-justify">
            Tempat umum seperti pasar, mall, hotel, restoran, serta transportasi
            umum merupakan area dengan potensi tinggi untuk penyebaran berbagai
            penyakit menular. Oleh karena itu, implementasi PHBS di
            tempat-tempat ini sangat penting. Langkah-langkah PHBS mencakup
            penggunaan masker, cuci tangan dengan sabun atau hand sanitizer,
            menjaga jarak fisik, serta menjaga kebersihan lingkungan sekitar.
          </p>
          <p className="text-gray-600 text-justify">
            Dalam prakteknya, kesuksesan implementasi PHBS tergantung pada
            pemahaman dan keterlibatan aktif dari semua pihak terkait, termasuk
            petugas kebersihan, manajemen fasilitas, dan pengguna tempat umum
            itu sendiri. Pihak-pihak ini harus berperan aktif dalam memastikan
            bahwa protokol kesehatan dipatuhi dengan baik oleh semua pengguna
            fasilitas.
          </p>
          <p className="text-gray-600 text-justify">
            Selain itu, edukasi kepada masyarakat tentang pentingnya PHBS juga
            merupakan komponen krusial. Petugas kesehatan, seperti nakes di
            Puskesmas atau rumah sakit, memiliki peran strategis dalam
            menyebarkan informasi dan memberikan contoh nyata dalam menerapkan
            PHBS.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Pengawasan dan penegakan terhadap kepatuhan terhadap protokol
            kesehatan juga perlu ditingkatkan. Ini dapat dilakukan melalui
            inspeksi rutin, sosialisasi, serta sanksi terhadap pelanggaran yang
            dilakukan.
          </p>
          <p className="text-gray-600 text-justify">
            Dengan menerapkan PHBS secara konsisten dan menyeluruh, diharapkan
            dapat meningkatkan keamanan dan kesehatan masyarakat yang
            beraktivitas di tempat umum. Ini merupakan langkah proaktif dalam
            melindungi individu dari potensi penularan berbagai penyakit menular
            yang dapat terjadi di lingkungan publik.
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
