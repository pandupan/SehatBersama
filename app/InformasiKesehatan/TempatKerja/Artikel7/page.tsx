import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Mengenali Tanda-tanda Stres karena Pekerjaan dan Cara Mengatasinya
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
                Cermati.com
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                11 April 2019
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
              src="https://i.ibb.co.com/ThvJYYm/7-tk.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi Stress Bekerja</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Mengenali Tanda-tanda Stres karena Pekerjaan dan Cara Mengatasinya
          </h3>
          <p className="text-gray-600 text-justify">
            Apakah kamu merasa lelah dan sulit berkonsentrasi saat bekerja?
            Mungkin itu pertanda kamu sedang mengalami stres akibat pekerjaan.
            Stres ini bisa muncul karena beban kerja yang berat, tekanan untuk
            mencapai target, atau konflik interpersonal di tempat kerja. Jika
            tidak ditangani dengan baik, stres dapat berkembang menjadi masalah
            kesehatan mental yang serius, seperti depresi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Stres karena pekerjaan tidak hanya mempengaruhi karyawan secara
            individu, tetapi juga dapat mengganggu produktivitas dan atmosfer
            kerja di perusahaan. Beberapa tanda umum stres karena pekerjaan
            meliputi:
            <br />
            1. Sulit Berkomunikasi
            <br />
            Stres dapat membuat seseorang enggan berkomunikasi dengan atasan
            atau rekan kerja, yang berpotensi memicu isolasi diri dan konflik.
            <br />
            2. Kehilangan Fokus atau Konsentrasi <br />
            Karyawan yang stres cenderung mengalami penurunan fokus dan
            motivasi, yang dapat berdampak negatif pada produktivitas dan
            kepuasan kerja.
            <br />
            3. Kehadiran yang Tidak Teratur <br />
            Stres bisa menyebabkan karyawan lebih sering terlambat atau bahkan
            absen, menunjukkan perlunya mereka untuk mendapatkan keseimbangan
            kembali dalam hidup.
            <br />
            4. Ketidakpedulian terhadap Kesehatan dan Penampilan
            <br />
            Stres dapat mempengaruhi gaya hidup, termasuk pola makan dan
            aktivitas fisik, yang berpotensi memengaruhi kesehatan fisik secara
            keseluruhan.
            <br />
            5. Mudah Marah atau Sensitif Berlebihan <br /> Tingkat stres yang
            tinggi bisa meningkatkan tingkat iritabilitas, membuat seseorang
            lebih mudah marah atau tersinggung di tempat kerja.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Cara Mengatasi Stres karena Pekerjaan
          </h3>
          <p className="text-gray-600 text-justify">
            Untuk mengurangi stres dan meningkatkan kesejahteraan di tempat
            kerja, berikut beberapa langkah yang bisa diambil:
            <br />
            1. Ambil Cuti dan Berlibur
            <br />
            Luangkan waktu untuk beristirahat dan pergi berlibur agar bisa
            melepaskan diri dari tekanan pekerjaan dan mengembalikan semangat
            kerja.
            <br />
            2. Istirahat dan Bersantai
            <br />
            Manfaatkan waktu luang untuk melakukan kegiatan yang menyenangkan
            atau hobi yang menenangkan untuk menghilangkan stres.
            <br />
            3. Olahraga dan Meditasi <br />
            Aktivitas fisik ringan seperti yoga atau berjalan dapat membantu
            meredakan stres dan menjaga kesehatan mental.
            <br />
            4. Luangkan Waktu untuk Diri Sendiri
            <br />
            Tetapkan waktu untuk bersantai, berkumpul dengan keluarga, dan
            menjaga keseimbangan antara pekerjaan dan kehidupan pribadi.
            <br />
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Implementasi PHBS di Tempat Kerja
          </h3>
          <p className="text-gray-600 text-justify">
            Selain itu, untuk mengurangi risiko stres akibat pekerjaan dan
            menciptakan lingkungan kerja yang sehat serta mendukung
            kesejahteraan karyawan, implementasi PHBS sangat penting. Beberapa
            langkah yang dapat dilakukan meliputi:
            <br />
            1. Edukasi dan Kesadaran
            <br />
            Selenggarakan sesi edukasi tentang manajemen stres dan pentingnya
            keseimbangan kerja-hidup untuk meningkatkan kesadaran karyawan.
            <br />
            2. Fasilitas Kesehatan dan Kesejahteraan
            <br />
            Sediakan fasilitas seperti ruang istirahat yang nyaman dan program
            kesehatan seperti yoga atau meditasi untuk membantu karyawan
            mengelola stres dengan lebih baik.
            <br />
            3. Kebijakan Kerja yang Mendukung <br />
            Implementasikan kebijakan yang mendukung keseimbangan kerja-hidup
            dan fleksibilitas jam kerja untuk mengurangi tekanan pada karyawan.
            <br />
            4. Penghargaan dan Pengakuan
            <br />
            Berikan penghargaan atas kontribusi karyawan untuk meningkatkan
            motivasi dan mengurangi stres yang disebabkan oleh tuntutan kerja.
            <br />
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Dengan mengenali tanda-tanda stres, mengimplementasikan strategi
            mengatasi stres, dan mempromosikan PHBS di tempat kerja, perusahaan
            dapat menciptakan lingkungan kerja yang lebih produktif dan sehat
            bagi semua karyawan.
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
