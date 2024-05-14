/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Implementasi Phbs, Lpka Palu Bersama Mahasiswa/I Poltekkes Kemenkes
          Palu Tinjau Langsung Area Blok Hunian
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
              16 Februari 2024
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
          <div className="relative w-full aspect-video flex justify-center items-center rounded-md bg-gray-100 overflow-hidden">
            <img
              src="https://i.ibb.co/G2ZYDnd/whatsapp-image-2024-02-16-at-12-14-25-65cefb0fde948f448e4b9e14.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              LPKA Palu Bersama Mahasiswa/I Poltekkes Kemenkes Palu
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Lembaga Pembinaan Khusus Anak (LPKA) Kelas II Palu dan Mahasiswa
            Profesi Ners
          </h3>
          <p className="text-gray-600 text-justify">
            Lembaga Pembinaan Khusus Anak (LPKA) Kelas II Palu dan Mahasiswa
            Profesi Ners dari Politeknik Kesehatan Kementerian Kesehatan
            (Poltekkes Kemenkes) Kota Palu melakukan tinjauan langsung ke area
            blok hunian anak binaan sebagai bagian dari implementasi Perilaku
            Hidup Bersih dan Sehat (PHBS).
          </p>
          <p className="text-gray-600 text-justify">
            Implementasi PHBS di lingkungan sekitar bertujuan untuk mendorong
            anak binaan untuk memahami tujuan dan keuntungan dari program
            tersebut, serta untuk mendorong mereka untuk mempraktikkannya dan
            berpartisipasi aktif dalam menciptakan lingkungan yang sehat dan
            bersih.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Mahasiswa dan Kepala Seksi Pengawasan dan Penegakkan Disiplin
          </h3>
          <p className="text-gray-600 text-justify">
            Mahasiswa dan Kepala Seksi Pengawasan dan Penegakkan Disiplin,
            Mohamad Ma'ruf, melakukan inspeksi di area blok hunian anak.
            Pengecekkan ini mencakup kamar hunian, area cuci, toilet, dan area
            santai dan kebugaran. Ma'ruf mengatakan bahwa dia ingin bertemu
            dengan siswa untuk memastikan apakah anak binaan mampu menerapkan
            PHBS di lingkungan sekitar mereka.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Ma'ruf berpesan kepada anak binaannya
          </h3>
          <p className="text-gray-600 text-justify">
            "Menjaga kesehatan dan kebersihan itu penting, jika bukan kalian
            yang menjaga lantas siapa lagi. Teman yang berperilaku buruk tolong
            diingatkan dengan memberikan contoh yang baik."
          </p>
          <p className="text-gray-600 text-justify">
            I Komang Gede Ardiwahyudi menyatakan bahwa PHBS harus ditanamkan
            dalam jiwa kita karena dengan menggunakannya, kita dapat memperoleh
            banyak manfaat untuk diri kita sendiri, orang lain, dan lingkungan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Ardiwahyudi menyarankan untuk terus menjaga kesehatan dengan
            menerapkan PHBS
          </h3>
          <p className="text-gray-600 text-justify">
            Ardiwahyudi menyarankan untuk terus menjaga kesehatan dengan
            menerapkan PHBS. Mulailah dengan hal-hal kecil yang dimulai dari
            diri sendiri. Perhatikan juga kebersihan tubuh, mulut, dan gigi
            serta kebersihan lingkungan agar tidak menjadi sarang penyakit.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            LPKA Palu memberikan layanan kesehatan tambahan seperti bubur kacang
            hijau, vitamin, dan pemeriksaan gigi dan mulut yang rutin.
          </h3>
          <p className="text-gray-600 text-justify">
            LPKA Palu telah mengantongi sertifikat laik hygiene dari Dinas
            Kesehatan Kota Palu dan terus berupaya memberikan layanan kesehatan
            terbaik kepada anak-anak dengan memperhatikan gizi mereka dengan
            memberikan makanan sehat dan higienis. Selain itu, LPKA Palu
            memberikan layanan kesehatan tambahan seperti bubur kacang hijau,
            vitamin, dan pemeriksaan gigi dan mulut yang rutin.
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
