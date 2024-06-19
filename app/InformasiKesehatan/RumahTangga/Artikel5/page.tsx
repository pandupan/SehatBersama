import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pembiasaan Perilaku Hidup Bersih dan Sehat
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
                Puskesmas Purbaratu
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                07 Juni 2024
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/InstitusiPendidikan"
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
              src=""
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
            Salah satu tugas guru dan orang tua adalah mendidik dan memantau perilaku hidup bersih dan sehat (PHBS) pada anak.
          </h3>
          <p className="text-gray-600 text-justify">
            PHBS ini hendaknya diterapkan tidak hanya di sekolah tetapi juga di rumah dan tempat umum. Pola hidup bersih dan sehat dapat menurunkan risiko anak Anda terkena penyakit.
            <br />
            <br />
            Berikut lima perilaku hidup bersih dan sehat yang sebaiknya dilakukan anak setiap hari:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            1. Cuci tangan pakai dengan sabun
          </h3>
          <p className="text-gray-600 text-justify">
            Tangan merupakan salah satu bagian tubuh yang paling sering menyentuh benda. Kita tidak tahu jenis kuman dan kuman apa yang akan menempel pada permukaan benda yang kita sentuh. Oleh karena itu, penting untuk membiasakan mencuci tangan dengan sabun setelah menyentuh permukaan benda.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            2. Buang sampah pada tempatnya
          </h3>
          <p className="text-gray-600 text-justify">
            Menanamkan perilaku hidup bersih dan sehat pada anak tidak hanya soal kebersihan diri, namun juga kebersihan lingkungan. Mengajari anak membuang sampah secara disiplin merupakan kebiasaan yang membantu menjaga kebersihan lingkungan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            3. Rutin melakukan sikat gigi
          </h3>
          <p className="text-gray-600 text-justify">
            Menyikat gigi dengan pasta gigi berfluoride merupakan salah satu cara mencegah gigi berlubang. Membiasakan anak menyikat gigi dua kali sehari akan berdampak positif pada gigi yang lebih sehat dan napas yang lebih segar. Ajari anak menyikat gigi selama dua menit dengan gerakan maju mundur ke atas dan ke bawah pada gigi bagian dalam dan luar, serta gerakan memutar pada bagian luar gigi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            4. Mengonsumsi makanan yang sehat dan bergizi
          </h3>
          <p className="text-gray-600 text-justify">
            Mengonsumsi makanan yang sehat dan bergizi adalah langkah awal untuk menjaga kesehatan tubuh. Ajari anak bahwa makanan benar-benar memperkuat sistem kekebalan tubuh. Pola makan yang sehat dan bergizi membantu mengisi kembali sel-sel tubuh yang rusak. Kebutuhan gizi setiap orang berbeda-beda tergantung jenis kelamin, kelompok umur, aktivitas fisik, dan status fisiologis. Menjaga kesehatan juga mencakup mengonsumsi makanan bersih dan memantau berat badan secara teratur.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            5. Olahraga/ Aktivitas fisik
          </h3>
          <p className="text-gray-600 text-justify">
            Banyak aktivitas fisik yang menyenangkan dapat membantu anak membangun kekuatan dan daya tahan serta membantu mengendalikan berat badan. Aktivitas tidak harus selalu berupa olahraga. Permainan anak-anak juga mempunyai manfaat fisik dan sering kali meningkatkan fungsi otak. Oleh karena itu, penting untuk memberikan ruang pada anak untuk melakukan aktivitas fisik.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Perilaku Hidup Bersih dan Sehat (PHBS) harus dilakukan tidak hanya di lingkungan sekolah tetapi juga di ruang publik dan di rumah. Menerapkan pola hidup bersih dan sehat juga menjadi bagian penting dalam mewujudkan gerakan sekolah sehat.
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
