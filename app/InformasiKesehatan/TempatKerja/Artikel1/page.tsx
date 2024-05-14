/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Ini Hubungan Kesehatan Mental dengan Lingkungan Kerja
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
              href="/InformasiKesehatan/TempatKerja"
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
              src="https://i.ibb.co/bFf84n7/i-Stock-860065586.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pengaruh Kesehatan Mental di Tempat Kerja
          </h3>
          <p className="text-gray-600 text-justify">
            Jakarta - Banyak orang menghabiskan sebagian besar waktunya di
            tempat kerja dari Senin hingga Jumat, dan terkadang akhir pekan
            mereka juga dihabiskan untuk bekerja meskipun dari rumah. Tekanan
            pekerjaan yang tinggi dapat menyebabkan stres yang berdampak pada
            kesehatan mental. Menjaga kesehatan mental di tempat kerja sangat
            penting untuk kelancaran pekerjaan. Jika seseorang mengalami
            gangguan mental, beban pekerjaan yang mereka tanggung mungkin tidak
            terselesaikan dengan baik. Berikut ini pembahasan tentang pentingnya
            menjaga kesehatan mental di tempat kerja.
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
          <h3 className="text-xl sm:text-2xl font-bold">
            Kerugian Akibat Dampak Negatif Kesehatan Mental di Tempat Kerja
          </h3>
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
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Cara Mengatasi Gangguan Kesehatan Mental di Tempat Kerja
          </h3>
          <p className="text-gray-600 text-justify">
            Mengatasi gangguan kesehatan mental di tempat kerja sangat penting
            karena dapat memengaruhi kinerja tim. Prioritaskan keseimbangan
            antara waktu kerja dan waktu pribadi. Waktu untuk diri sendiri
            membuat seseorang lebih rileks dan dapat mengatasi stres serta
            insomnia. Beberapa kegiatan di luar kantor, seperti menjadi
            sukarelawan, meditasi, berjalan-jalan, dan menghabiskan waktu
            bersama teman serta keluarga, dapat membantu memulihkan kesehatan
            mental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
