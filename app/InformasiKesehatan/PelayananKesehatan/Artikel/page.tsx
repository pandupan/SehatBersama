/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Perilaku Hidup Bersih dan Sehat (PHBS) di Fasilitas Pelayanan
          Kesehatan
        </h1>
        <div className="flex items-center justify-between">
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
                Rina Nurjannah
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                6 November 2013
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/PelayananKesehatan"
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
              src="https://i.ibb.co.com/rc2ccRV/image.png" // Ganti dengan URL gambar yang tepat
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Kebijakan pembangunan kesehatan menekankan pada upaya promotif dan
            preventif untuk menjadikan individu yang sudah sehat menjadi lebih
            sehat dan produktif. Pola hidup sehat adalah implementasi dari
            paradigma kesehatan yang melibatkan perilaku individu, keluarga,
            kelompok, dan masyarakat yang bertujuan untuk meningkatkan,
            memelihara, dan melindungi kesehatan secara fisik, mental,
            spiritual, dan sosial.
          </p>
          <p className="text-gray-600 text-justify">
            Perilaku hidup sehat mencakup langkah-langkah proaktif seperti rutin
            berolahraga, menjauhi praktik-praktik budaya yang berisiko penyakit,
            melindungi diri dari ancaman penyakit, dan aktif berpartisipasi
            dalam upaya kesehatan masyarakat.
          </p>
          <p className="text-gray-600 text-justify">
            Rumah sakit sebagai pusat pelayanan kesehatan merupakan tempat di
            mana orang sakit dan sehat berkumpul, sehingga dapat menjadi sumber
            penularan penyakit. Infeksi rumah sakit terjadi karena kurangnya
            kebersihan fasilitas atau ketidakcukupan sanitasi seperti air bersih
            dan pengelolaan limbah medis.
          </p>
          <p className="text-gray-600 text-justify">
            Upaya Promosi Kesehatan Berbasis Masyarakat (PHBS) di fasilitas
            pelayanan kesehatan bertujuan untuk memberdayakan pasien,
            pengunjung, dan petugas agar mengadopsi dan melaksanakan perilaku
            hidup bersih dan sehat, serta mencegah penularan penyakit di
            lingkungan tersebut. Langkah-langkahnya mencakup mencuci tangan
            dengan sabun, menggunakan air bersih, menjaga kebersihan jamban,
            membuang sampah pada tempatnya, melarang merokok, tidak meludah
            sembarangan, dan pemberantasan sarang nyamuk.
          </p>
          <p className="text-gray-600 text-justify">
            Manfaat dari program PHBS ini mencakup pelayanan kesehatan yang
            lebih aman, pencegahan penularan penyakit, percepatan proses
            penyembuhan, dan peningkatan reputasi fasilitas kesehatan sebagai
            tempat yang aman dan berkualitas. Program ini dapat berhasil jika
            didukung oleh keputusan dan partisipasi aktif dari semua pihak
            terkait.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
