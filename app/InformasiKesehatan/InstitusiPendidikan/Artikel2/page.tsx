/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Menjaga Kebersihan Debgan Membuang Sampah Ke Tempat Sampah
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
                17 April 2024
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
          <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
            <img
              src="https://i.ibb.co.com/XknLkMR/istockphoto-2149538813-1024x1024.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Ilustrasi Tempat Sampah
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pengelolaan sampah yang baik dan benar merupakan salah satu aspek
            penting dalam menjaga kebersihan dan kesehatan lingkungan sekolah.
          </h3>
          <p className="text-gray-600 text-justify">
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
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Menjaga kebersihan lingkungan sekolah memerlukan perhatian dan
            komitmen dari seluruh warga sekolah.
          </h3>
          <p className="text-gray-600 text-justify">
            Pastikan tempat sampah tertutup berada di ruang kelas, selasar,
            jamban, kantin, halaman, dan di lokasi strategis lainnya,
            dikosongkan setiap hari menggunakan sistem pengelolaan sampah yang
            terorganisir dengan baik. Dengan demikian, kita dapat mencegah
            penumpukan sampah yang dapat menyebabkan bau tidak sedap dan menjadi
            sarang penyakit. Selain itu, menciptakan budaya untuk membuang
            sampah pada tempatnya sesuai kategorinya sangat penting untuk
            mendukung program daur ulang dan pengelolaan sampah yang
            berkelanjutan. Melalui langkah-langkah ini, kita dapat menciptakan
            lingkungan sekolah yang bersih, sehat, dan nyaman bagi semua
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Dengan menerapkan sistem pengelolaan sampah yang terstruktur dan
            memastikan tempat sampah tertutup tersedia di lokasi-lokasi
            strategis seperti ruang kelas, selasar, jamban, kantin, dan halaman,
            kita dapat menjaga kebersihan dan kesehatan lingkungan sekolah.
            Pengosongan tempat sampah setiap hari dan penciptaan budaya membuang
            sampah pada tempatnya sesuai kategorinya adalah langkah-langkah
            penting untuk mencegah penumpukan sampah dan mendukung program daur
            ulang. Melalui upaya bersama ini, kita dapat menciptakan lingkungan
            sekolah yang lebih bersih, sehat, dan nyaman bagi semua warga
            sekolah.
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
