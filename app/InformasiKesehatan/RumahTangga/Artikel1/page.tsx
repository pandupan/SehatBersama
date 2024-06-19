import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Apa Itu Perilaku Hidup Bersih dan Sehat (PHBS) serta Contohnya
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
                07 Juni 2024
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/RumahTangga"
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
              src="https://i.ibb.co.com/G9qwxP5/image-2024-06-19-063316567.png"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Ilustrasi Hidup Sehat</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Salah satu tugas guru dan orang tua adalah mendidik dan memantau
            perilaku hidup bersih dan sehat (PHBS) pada anak.
          </h3>
          <p className="text-gray-600 text-justify">
            Perilaku Hidup Bersih dan Sehat (PHBS) merupakan upaya untuk
            menularkan pengalaman mengenai perilaku hidup sehat melalui
            individu, kelompok, atau pun masyarakat luas dengan jalur-jalur
            komunikasi sebagai media berbagi informasi.
          </p>
          <p className="text-gray-600 text-justify">
            PHBS merupakan langkah awal menuju peningkatan kualitas kesehatan
            masyarakat. Program ini dapat diterapkan di berbagai lingkungan
            seperti sekolah dan rumah tangga. Salah satu contoh PHBS di
            lingkungan sekolah ialah membuang sampah pada tempatnya dan mencuci
            tangan dengan sabun sebelum serta sesudah makan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Pengertian Perilaku Hidup Bersih dan Sehat (PHBS)
          </h3>
          <p className="text-gray-600 text-justify">
            Dikutip dari laman Promkes Kemenkes (2016), PHBS adalah semua
            perilaku kesehatan yang dilakukan karena kesadaran pribadi sehingga
            keluarga dan seluruh anggotanya mampu menolong diri sendiri pada
            bidang kesehatan serta memiliki peran aktif dalam aktivitas
            masyarakat.
          </p>
          <p className="text-gray-600 text-justify">
            PHBS merupakan rekayasa sosial yang menjadikan banyak anggota
            masyarakat berperan aktif sebagai agen perubahan supaya mampu
            meningkatkan kualitas perilaku sehari-hari dengan tujuan hidup
            bersih dan sehat. Dalam artikel bertajuk "Perilaku Hidup Bersih dan
            Sehat" pada laman RSUP Persahabatan (2019) disebutkan, tujuan PHBS
            adalah mencapai rumah tangga sehat, setiap anggota keluarga menjadi
            sehat, tidak mudah sakit, anak tumbuh sehat dan cerdas, serta
            anggota keluarga giat bekerja.
          </p>
          <p className="text-gray-600 text-justify">
            Selain itu, anggota rumah tangga diharapkan meningkatkan
            pengetahuan, kemauan dan kemampuan untuk melaksanakan PHBS, serta
            berperan aktif dalam gerakan PHBS di masyarakat.
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
