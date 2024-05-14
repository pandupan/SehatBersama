
/* eslint-disable @next/next/no-img-element */
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
              src="https://i.ibb.co/yF4fxKt/hari-cuci-tangan-pakai-sabun-sedunia-di-bogor-antarafoto-ratio-16x9.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Ilustrasi
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Pengertian Perilaku Hidup Bersih dan Sehat (PHBS)
          </h3>
          <p className="text-gray-600 text-justify">
          Perilaku Hidup Bersih dan Sehat (PHBS) merupakan upaya untuk menularkan pengalaman mengenai perilaku hidup sehat melalui individu, kelompok, atau pun masyarakat luas dengan jalur-jalur komunikasi sebagai media berbagi informasi.

PHBS merupakan langkah awal menuju peningkatan kualitas kesehatan masyarakat. Program ini dapat diterapkan di berbagai lingkungan seperti sekolah dan rumah tangga. Salah satu contoh PHBS di lingkungan sekolah ialah membuang sampah pada tempatnya dan mencuci tangan dengan sabun sebelum serta sesudah makan.

          </p>
          <p className="text-gray-600 text-justify">
          Dikutip dari laman Promkes Kemenkes (2016), PHBS adalah semua perilaku kesehatan yang dilakukan karena kesadaran pribadi sehingga keluarga dan seluruh anggotanya mampu menolong diri sendiri pada bidang kesehatan serta memiliki peran aktif dalam aktivitas masyarakat.

PHBS merupakan rekayasa sosial yang menjadikan banyak anggota masyarakat berperan aktif sebagai agen perubahan supaya mampu meningkatkan kualitas perilaku sehari-hari dengan tujuan hidup bersih dan sehat.

Dalam artikel bertajuk "Perilaku Hidup Bersih dan Sehat" pada laman RSUP Persahabatan (2019) disebutkan, tujuan PHBS adalah mencapai rumah tangga sehat, setiap anggota keluarga menjadi sehat, tidak mudah sakit, anak tumbuh sehat dan cerdas, serta anggota keluarga giat bekerja.

Selain itu, anggota rumah tangga diharapkan meningkatkan pengetahuan, kemauan dan kemampuan untuk melaksanakan PHBS, serta berperan aktif dalam gerakan PHBS di masyarakat.

          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
