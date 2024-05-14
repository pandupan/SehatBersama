/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Menjaga Kesehatan Mental di Lingkungan Kerja
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
              src="https://i.ibb.co/RP0DPV2/nik-shuliahin-Bu-NWp1b-L0nc-unsplash.jpg"
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
            Beban kerja yang berlebihan bisa berdampak signifikan pada
            seseorang, baik secara fisik maupun mental. Perasaan stres yang
            muncul akibat beban kerja yang terlalu berat merupakan hal umum,
            tetapi jika dibiarkan, dapat menyebabkan masalah kesehatan mental
            seperti depresi dan kecemasan. Stres berlebihan tidak hanya
            memunculkan emosi negatif tetapi juga menurunkan produktivitas dan
            mengganggu konsentrasi dalam menyelesaikan pekerjaan. Menjaga
            kesehatan mental sangat penting, karena dampaknya sama seriusnya
            dengan dampak fisik. Setiap orang perlu mengetahui cara efektif
            untuk menjaga kesehatan mental saat menghadapi stres berlebihan di
            tempat kerja. Sebagai tempat di mana banyak individu menghabiskan
            sebagian besar waktunya, perusahaan atau organisasi harus
            memperhatikan lingkungan kerja yang mendukung kesehatan mental
            karyawan. Berikut beberapa cara yang bisa dilakukan karyawan untuk
            menjaga kesehatan mental di tempat kerja:
          </p>
          <p className="text-gray-600 text-justify">
            Lingkungan kerja memiliki dampak positif dan negatif pada kesehatan
            psikologis pekerjanya. Berbagai faktor seperti gaji, lingkungan
            kerja, dan interaksi dengan rekan kerja dapat memengaruhi kesehatan
            mental. Ketika faktor-faktor tersebut tidak berjalan dengan baik,
            tingkat stres akan meningkat. Beban kerja yang menumpuk dapat
            menurunkan produktivitas dan fokus. Oleh karena itu, penting untuk
            segera mencari solusi untuk mengatasi masalah tersebut. Cara menjaga
            kesehatan mental meliputi menghindari tekanan yang parah dan segera
            mencari solusi saat menghadapi masalah. Salah satu cara efektif
            adalah dengan mendiskusikan masalah dengan rekan kerja untuk
            menghindari dampak negatif pada kinerja tim.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Menjaga keseimbangan antara pekerjaan dan kehidupan pribadi adalah
            kunci untuk mempertahankan kesehatan mental di tempat kerja.
            Manajemen stres, pengelolaan waktu, dan keseimbangan antara
            pekerjaan dan kehidupan pribadi sangat penting. Gangguan kesehatan
            mental pada pekerja dapat menurunkan produktivitas, yang pada
            akhirnya menghambat kemajuan perusahaan. Oleh karena itu, perusahaan
            perlu segera menangani masalah kesehatan mental karyawan. Stres yang
            berlebihan dapat menyebabkan gangguan mental akut, yang berdampak
            pada kelelahan fisik dan emosional serta penurunan produktivitas.
            Perusahaan seharusnya menyediakan layanan konsultasi kesehatan bagi
            karyawan untuk menjaga kesehatan mental mereka. Dengan layanan
            tersebut, produktivitas karyawan dapat tetap maksimal. Jika tidak,
            perusahaan mungkin harus mencari karyawan baru, meskipun karyawan
            yang ada memiliki potensi yang baik.
          </p>
        </div>
        <p>
          1. Menjaga Keseimbangan Antara Pekerjaan dan Kehidupan Pribadi
          (Work-Life Balance) Untuk menjaga kesehatan mental, penting bagi
          karyawan memastikan keseimbangan antara pekerjaan di kantor dan
          kehidupan pribadi. Hindari membawa pulang pekerjaan. Tanpa
          keseimbangan, produktivitas bisa menurun dan karyawan mungkin merasa
          kelelahan. Menghabiskan waktu bersama keluarga, berolahraga, melakukan
          hobi, dan aktivitas yang disukai bisa membantu mengurangi stres dari
          pekerjaan.
        </p>
        <p>
          2. Mengelola Stres Stres berlebihan bisa dikurangi dengan pengelolaan
          yang baik. Berolahraga rutin, makan makanan sehat dan disukai, serta
          bersantai adalah beberapa cara untuk menghindari stres yang bisa
          berujung pada masalah serius.
        </p>
        <p>
          3. Fokus pada Hal yang Positif Penyakit mental bisa menimbulkan
          masalah serius, tetapi dampak buruknya bisa dicegah dan dikendalikan.
          Fokus pada hal-hal positif dan pastikan orang-orang di sekitar
          mendukung apa yang kamu lakukan, serta memberikan saran yang
          dibutuhkan.
        </p>
        <p>
          4. Diskusikan Kesehatan Mental di Tempat Kerja Jangan takut untuk
          mengungkapkan masalah terkait stres, depresi, kecemasan, dan gangguan
          mental lainnya di lingkungan kerja. Setiap orang perlu memahami bahwa
          mereka mungkin mengalami stres berlebihan yang bisa berdampak buruk
          pada kesehatan mental.
        </p>
      </div>
    </div>
  );
};

export default page;
