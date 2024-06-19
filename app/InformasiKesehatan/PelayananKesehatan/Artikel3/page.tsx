/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pangan Yang Sehat Dan Aman Bisa Cegah Berbagai Penyakit dengan Peran
          Fasilitas Kesehatan dalam Menjalankan PHBS
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
                Didid Rustandi
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Selasa, 11 Juni
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
              src="https://i.ibb.co.com/0DMVjLt/fk-2.jpg" // Ganti dengan URL gambar yang tepat
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
            Setiap tahun, pada tanggal 7 Juni, dunia memperingati Hari Keamanan
            Pangan Sedunia (HKPS) untuk meningkatkan kesadaran global tentang
            pentingnya mencegah, mendeteksi, dan mengelola risiko penyakit yang
            disebabkan oleh makanan terkontaminasi atau Kejadian Luar Biasa
            (KLB) Keracunan Pangan.
          </p>
          <p className="text-gray-600 text-justify">
            Wakil Menteri Kesehatan, Prof. dr. Dante Saksono Harbuwono,
            mengungkapkan bahwa lebih dari 200 penyakit dapat disebabkan oleh
            makanan yang terkontaminasi, dengan gejala mulai dari ringan hingga
            fatal. Oleh karena itu, pengelolaan pangan yang higienis dan aman
            sangat penting untuk mencegah penyakit tersebut, termasuk Penyakit
            Tidak Menular (PTM) seperti hipertensi, kanker, diabetes, dan
            penyakit jantung.
          </p>
          <h3 className="text-md font-bold text-gray-600">
          Berlandaskan penekanan akan pentingnya keamanan pangan, terdapat
            lima kunci utama yang menjadi fondasi dalam menjaga kualitas dan
            keamanan makanan.
          </h3>
          <p className="text-gray-600 text-justify">
            1. Menjaga Kebersihan: Langkah pertama dalam memastikan
            keamanan pangan adalah dengan menjaga kebersihan. Ini termasuk
            membersihkan tangan, peralatan, dan area kerja dengan benar sebelum
            dan sesudah menangani makanan. <br />
            <br /> 2. Memisahkan Pangan Mentah dan Matang: Penting untuk
            memisahkan pangan mentah, seperti daging mentah, dari pangan matang
            atau siap saji. Hal ini dapat mencegah kontaminasi silang yang dapat
            menyebabkan penyakit. <br />
            <br /> 3. Memasak dengan Benar: Memasak makanan dengan suhu yang
            tepat dan waktu yang cukup adalah kunci untuk membunuh bakteri dan
            patogen yang mungkin ada dalam makanan mentah. <br />
            <br /> 4. Menggunakan Air dan Bahan Pangan yang Aman: Pastikan bahwa
            air yang digunakan untuk memasak dan bahan makanan yang digunakan
            adalah aman dan bebas dari kontaminasi. <br />
            <br /> 5. Menjaga Pangan pada Suhu yang Aman: Setelah dimasak,
            penting untuk menjaga makanan pada suhu yang aman untuk mencegah
            pertumbuhan bakteri. Ini bisa berarti menyimpan makanan dalam suhu
            dingin di lemari es atau memanaskannya kembali sebelum disajikan.
          </p>
          <h3 className="text-md font-bold text-gray-600">
          Peran Fasilitas Kesehatan dalam Menyediakan Makanan yang Sehat dan
          Aman 
          </h3>
          <p className="text-gray-600 text-justify">
           Peran fasilitas kesehatan dalam menyediakan makanan yang sehat
            dan aman tak boleh diabaikan, terutama dalam menerapkan Perilaku
            Hidup Bersih dan Sehat (PHBS). PHBS menjadi krusial untuk memastikan
            bahwa pasien, pengunjung, dan staf medis dapat mengonsumsi makanan
            yang tak hanya bergizi, tetapi juga bebas dari kontaminasi dan aman
            dikonsumsi.
          </p>
          <p className="text-gray-600 text-justify">
            Implementasi PHBS di fasilitas kesehatan harus menjadikan proses
            pemilihan bahan makanan yang berkualitas, penyimpanan yang tepat,
            pengolahan yang higienis, dan penyajian dengan standar kebersihan
            yang tinggi sebagai prioritas utama. Dengan demikian, fasilitas
            kesehatan tidak hanya memberikan perawatan medis yang baik, tetapi
            juga mendukung kesehatan secara menyeluruh melalui aspek makanan
            yang aman dan sehat.
          </p>
          <p className="text-gray-600 text-justify">
            Dengan menerapkan standar keamanan pangan yang ketat, fasilitas
            kesehatan tidak hanya memberikan perawatan medis yang baik, tetapi
            juga mendukung kesehatan secara menyeluruh melalui aspek makanan
            yang aman dan sehat. Ini adalah langkah penting untuk menjaga
            kesehatan masyarakat dan mengurangi risiko penyakit yang terkait
            dengan konsumsi pangan yang tidak aman.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
