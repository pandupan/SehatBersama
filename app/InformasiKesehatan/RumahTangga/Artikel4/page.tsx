import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Penyebab Napas Pendek dan Cara Mengatasinya
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
                Minggu, 11 Oktober 2023 06:20
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
          <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
            <Image
              src="/image/penyakit4.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Penyakit jantung bisa membuat napas jadi pendek-pendek
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Penyakit jantung penyebab napas pendek
          </h3>
          <p className="text-gray-600 text-justify">
            Mengalami napas pendek terus-menerus bisa jadi merupakan gejala dari
            penyakit jantung. Beberapa penyakit jantung yang bisa menyebabkan
            napas pendek antara lain adalah:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">1. Gagal jantung</h3>
          <p className="text-gray-600 text-justify">
            Gagal jantung, atau kadang-kadang disebut dengan gagal jantung
            kongestif adalah kondisi saat jantung tidak cukup kuat memompa darah
            dengan baik sehingga tidak dapat memenuhi kebutuhan tubuh. Selain
            napas pendek, gagal jantung juga ditandai dengan rasa lelah,
            pembengkakan di pergelangan kaki, telapak kaki, dan bagian tengah
            tubuh.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">2. Takikardia</h3>
          <p className="text-gray-600 text-justify">
            Takikardia adalah kondisi detak jantung yang sangat cepat, biasanya
            lebih dari 100 detak per menit pada orang dewasa. Padahal, frekuensi
            detak jantung yang normal adalah 60 kali per menit untuk orang
            dewasa. Salah satu jenis takikardia yang dapat menyebabkan napas
            pendek adalah atrial tachycardia atau SVT. Ini adalah kondisi saat
            sinyal listrik jantung tidak menyala dengan baik dan harus segera
            mendapatkan pertolongan medis.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">3. Angina</h3>
          <p className="text-gray-600 text-justify">
            Sebenarnya, angina bukanlah penyakit, melainkan suatu gejala berupa
            rasa sakit atau perasaan tidak nyaman ketika aliran darah ke jantung
            berkurang. Saat terjadi, angina biasanya disertai dengan gangguan
            napas seperti napas pendek dan keringat yang keluar berlebihan.
            Angina bisa menjadi tanda adanya masalah jantung yang memerlukan
            penanganan medis, seperti misalnya penyakit jantung koroner.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">4. Serangan jantung</h3>
          <p className="text-gray-600 text-justify">
            Serangan jantung terjadi saat sesuatu menyumbat aliran darah ke
            jantung, sehingga jantung tidak mendapatkan oksigen yang
            dibutuhkannya. Ini adalah kondisi darurat medis yang perlu ditangani
            dengan cepat.
          </p>
          <p className="text-gray-600 text-justify">
            Napas pendek adalah salah satu gejala serangan jantung. Selain itu,
            orang yang sedang mengalami serangan jantung juga akan merasakan
            nyeri di bagian dada dan bawah tulang dada, serta lengan. Rasa nyeri
            juga bisa menyebar ke rahang, tenggorokan, dan punggung.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">5. Fibrilasi atrium</h3>
          <p className="text-gray-600 text-justify">
            Fibrilasi atrium adalah kondisi ketika impuls listrik jantung kacau,
            sehingga menyebabkan detak jantung tidak teratur atau berdebar-debar
            Selain jantung berdebar kencang, AF juga dapat disertai gejala napas
            pendek, nyeri dada, kelelahan, pusing atau merasa ingin pingsan, dan
            merasa kesulitan untuk berolahraga.
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
