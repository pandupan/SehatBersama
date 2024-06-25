import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pentingnya Jamban Sehat untuk Perilaku Hidup Bersih dan Sehat (PHBS),
          Coba Cek di Rumahmu!
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
                Firdha Austin
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Kamis, 21 Desember 2023 14 : 00 WIB
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
              src="https://i.ibb.co.com/r27wrJn/image.png"
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
            Salah satu indikator penting dalam Perilaku Hidup Bersih dan Sehat
            (PHBS)
          </h3>
          <p className="text-gray-600 text-justify">
            Salah satu indikator penting dalam Perilaku Hidup Bersih dan Sehat
            (PHBS) adalah kebiasaan buang hajat di jamban yang sehat. Jamban
            yang sehat merupakan infrastruktur sanitasi yang penting untuk
            pembuangan kotoran dan pengelolaan air limbah. Menggunakan jamban
            yang sehat dapat mencegah penyebaran berbagai penyakit yang
            disebabkan oleh buang hajat di sembarang tempat.PHBS dapat
            diterapkan di rumah tangga, tempat umum, dan sekolah. Artikel ini
            akan membahas PHBS dalam lingkungan rumah tangga yang berkaitan
            dengan penggunaan jamban sehat dan syarat-syaratnya.
            <br />
            <br />
            Apa itu Jamban Sehat? Menurut Dinas Kesehatan Malang, jamban adalah
            suatu ruangan yang memiliki fasilitas pembuangan kotoran manusia,
            terdiri atas tempat jongkok atau tempat duduk dengan atau tanpa
            leher angsa (cemplung) yang dilengkapi dengan unit penampungan
            kotoran dan air untuk membersihkannya.
          </p>
        </div>
        <h3 className="text-md font-bold text-gray-600">
        Jenis-jenis Jamban:
          </h3>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-gray-600 text-justify">
            1. Jamban Cemplung:
          </h3>
          <p className="text-gray-600 text-justify">
            Jamban ini memiliki penampungan berupa lubang yang menyimpan dan
            meresapkan cairan kotoran atau tinja ke dalam tanah, serta
            mengendapkan kotoran ke dasar lubang. Jamban cemplung harus memiliki
            penutup agar tidak berbau.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-gray-600 text-justify">
            2. Jamban Tangki Septik/Leher Angsa:
          </h3>
          <p className="text-gray-600 text-justify">
            Jamban ini memiliki penampungan berupa tangki septik kedap air yang
            berfungsi sebagai wadah proses penguraian kotoran manusia,
            dilengkapi dengan resapan. Jamban jenis ini cocok untuk daerah
            dengan pasokan air yang cukup dan kepadatan penduduk yang tinggi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Memilih Jamban yang Tepat:
          </h3>
          <p className="text-gray-600 text-justify">
            - Jamban Cemplung: Cocok untuk daerah yang sulit air.
            <br />- Jamban Tangki Septik/Leher Angsa: Cocok untuk daerah dengan
            cukup air dan padat penduduk, serta daerah pasang surut dengan
            penampungan kotoran yang ditinggikan.
          </p>
          <p className="text-gray-600 text-justify">
            Penggunaan Jamban Semua anggota rumah tangga harus menggunakan
            jamban untuk buang air besar atau kecil guna menjaga lingkungan
            tetap bersih, sehat, dan tidak berbau.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Syarat Jamban Sehat
          </h3>
          <p className="text-gray-600 text-justify">
            Penggunaan jamban juga mencegah pencemaran sumber air, menghindari
            lalat dan serangga yang dapat menularkan penyakit seperti diare,
            kolera, disentri, tipes, kecacingan, penyakit saluran pencernaan,
            penyakit kulit, dan keracunan.
          </p>
          <p className="text-gray-600 text-justify">
            1. Tidak mencemari sumber air minum (jarak minimal 10meter).
            <br />
            2. Tidak berbau.
            <br />
            3. Kotoran tidak dapat dijamah oleh serangga dan tikus.
            <br />
            4. Tidak mencemari tanah di sekitarnya.
            <br />
            5. Mudah dibersihkan dan aman digunakan.
            <br />
            6. Dilengkapi dinding dan atap pelindung.
            <br />
            7. Memiliki penerangan dan ventilasi yang cukup.
            <br />
            8. Lantai kedap air dan luas ruangan memadai.
            <br />
            9. Tersedia air, sabun, dan alat pembersih.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Cara Memelihara Jamban Sehat
          </h3>
          <p className="text-gray-600 text-justify">
            1. Jaga kebersihan lantai jamban dan hindari genangan air.
            <br />
            2. Bersihkan jamban secara teratur.
            <br />
            3. Pastikan tidak ada kotoran yang terlihat di dalam jamban.
            <br />
            4. Hindari keberadaan serangga seperti kecoa, lalat, dan tikus.
            <br />
            5. Sediakan alat pembersih seperti sabun, sikat, dan air bersih.
            <br />
            6. Segera perbaiki jika terdapat kerusakan.
          </p>
        </div>

        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Dengan menerapkan kebiasaan buang hajat di jamban yang
            sehat, kita dapat menjaga kebersihan lingkungan dan mencegah
            berbagai penyakit, serta mendukung upaya PHBS di rumah tangga.
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
