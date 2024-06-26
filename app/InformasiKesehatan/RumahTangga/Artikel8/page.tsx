/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Olahraga di Rumah: Meningkatkan Kesehatan dan Kebugaran dengan Mudah
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
                Azriel Ismail
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                15 Mei 2024
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="https://prodiadigital.com/id/artikel/7-tips-olahraga-di-rumah-yang-mudah-dan-aman-dilakukan"
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
              src="https://media.suara.com/pictures/970x544/2020/04/01/73353-olahraga-yang-cocok-saat-dirumahaja.jpg" // Ganti dengan URL gambar yang tepat
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
            Apakah olahraga di rumah bisa memberikan manfaat yang sama dengan berolahraga di luar rumah? Jawabannya adalah ya! Berolahraga di rumah dapat menjadi pilihan yang baik dan praktis untuk meningkatkan kesehatan dan kebugaran kamu.
          </p>
          <p className="text-gray-600 text-justify">
            Asalkan dilakukan dengan benar dan aman, olahraga di rumah bisa memberikan hasil yang memuaskan.
          </p>
          <p className="text-gray-600 text-justify">
            World Health Organization (WHO) menyebutkan bahwa melakukan aktivitas fisik secara rutin dapat membantu mencegah berbagai penyakit, seperti penyakit jantung, stroke, diabetes, dan beberapa jenis kanker.
          </p>
          <p className="text-gray-600 text-justify">
            Selain itu, olahraga juga dapat membantu menurunkan tekanan darah tinggi, menjaga berat badan tetap sehat, serta meningkatkan kesehatan mental dan suasana hati.
          </p>
          <p className="text-gray-600 text-justify">
            Berikut adalah beberapa keuntungan olahraga di rumah:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <b>Kenyamanan:</b> Olahraga di rumah menghilangkan kebutuhan untuk berurusan dengan kemacetan dan biaya transportasi, sehingga mengurangi stres dan memungkinkan fokus sepenuhnya pada latihan.
            </li>
            <li>
              <b>Fleksibel:</b> Dengan berolahraga di rumah, kamu memiliki fleksibilitas dalam menentukan waktu dan durasi latihan sesuai dengan jadwalmu, tanpa terikat dengan jadwal operasional gym.
            </li>
            <li>
              <b>Kontrol suasana latihan:</b> Kamu memiliki kontrol penuh atas lingkungan tempat olahraga di rumah, termasuk suhu ruangan, pencahayaan, dan musik yang diputar selama latihan.
            </li>
            <li>
              <b>Akses tanpa batas:</b> Berolahraga di rumah memberikan akses tak terbatas. Kamu dapat menggunakan berat badan sendiri, peralatan sederhana seperti matras yoga, serta dumbbell atau resistance band.
            </li>
          </ul>
          <p className="text-gray-600 text-justify">
            Berikut adalah tips praktis untuk berolahraga di rumah:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Pilih ruang yang lapang untuk bergerak dengan bebas dan aman.</li>
            <li>Berolahraga tanpa alas kaki bisa menjadi pilihan, namun perlu dihindari saat melakukan olahraga yang membutuhkan lompat atau pada lantai yang tidak rata.</li>
            <li>Lakukan pemanasan sebelum memulai sesi olahraga untuk mengurangi risiko cedera dan meningkatkan performa.</li>
            <li>Perhatikan teknik pernapasan yang tepat selama berolahraga.</li>
            <li>Mulailah dengan gerakan ringan atau intensitas rendah terlebih dahulu untuk mencegah cedera.</li>
            <li>Gunakan perlengkapan keamanan tambahan jika diperlukan, seperti support band.</li>
            <li>Pastikan untuk terhidrasi dengan baik selama berolahraga dengan minum air putih sebelum, selama, dan setelah sesi olahraga.</li>
          </ul>
          <p className="text-gray-600 text-justify">
            Gerakan ringan yang dapat meningkatkan kesehatan di rumah antara lain:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Naik turun tangga atau kursi</li>
            <li>Push-up</li>
            <li>Mountain climber</li>
            <li>Squat jump</li>
            <li>Burpees</li>
            <li>Jumping jacks</li>
            <li>Screamer lunges</li>
            <li>Jalan di tempat</li>
            <li>Angkat beban</li>
            <li>Lompat tali atau skipping</li>
            <li>Yoga</li>
            <li>Zumba atau senam aerobik</li>
          </ul>
          <p className="text-gray-600 text-justify">
            Dengan menerapkan tips dan gerakan olahraga di rumah ini, kamu dapat memulai perjalanan kesehatan dan kebugaran tanpa harus meninggalkan rumah. Mulailah dari sekarang dan jadikan olahraga sebagai bagian penting dari gaya hidup sehat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
