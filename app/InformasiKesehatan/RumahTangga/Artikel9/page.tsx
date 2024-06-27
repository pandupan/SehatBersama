import React from "react";
import Image from "next/image";

const Page = () => {
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
              src="https://cdn.discordapp.com/attachments/1005701738109620237/1255673391567081472/7-tips-olahraga-di-rumah-yang-mudah-dan-aman-dilakukan-2-27122022-103216.png?ex=667dfc79&is=667caaf9&hm=9366bde174db2302d32895255ae13ea2b69b6afc3ee527ad218f97b789b2dd78&"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi Olahraga</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Olahraga di Rumah: Meningkatkan Kesehatan dan Kebugaran dengan Mudah
          </h3>
          <p className="text-gray-600 text-justify">
            Apakah olahraga di rumah bisa memberikan manfaat yang sama dengan
            berolahraga di luar rumah? Jawabannya adalah ya! Berolahraga di
            rumah dapat menjadi pilihan yang baik dan praktis untuk meningkatkan
            kesehatan dan kebugaran kamu.
            <br />
            Sampah Medis Rumah TanggaSampah medis rumah tangga adalah
            benda-benda yang terkontaminasi oleh darah, cairan tubuh, atau bahan
            kimia berbahaya, yang dihasilkan dari perawatan kesehatan di rumah.
            Contohnya termasuk jarum suntik, alat pengukur glukosa darah, perban
            bekas, peralatan nebulizer, dan obat-obatan kedaluwarsa.
            <br />
            Asalkan dilakukan dengan benar dan aman, olahraga di rumah bisa
            memberikan hasil yang memuaskan.
            <br />
            World Health Organization (WHO) menyebutkan bahwa melakukan
            aktivitas fisik secara rutin dapat membantu mencegah berbagai
            penyakit, seperti penyakit jantung, stroke, diabetes, dan beberapa
            jenis kanker.
            <br />
            Selain itu, olahraga juga dapat membantu menurunkan tekanan darah
            tinggi, menjaga berat badan tetap sehat, serta meningkatkan
            kesehatan mental dan suasana hati.
          </p>
          <br />
          <h3 className="text-md font-bold text-gray-600">
            Berikut adalah beberapa keuntungan olahraga di rumah:
          </h3>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            1. Kenyamanan: <br />
            Olahraga di rumah menghilangkan kebutuhan untuk berurusan dengan
            kemacetan dan biaya transportasi, sehingga mengurangi stres dan
            memungkinkan fokus sepenuhnya pada latihan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            2. Fleksibel:
            <br /> Dengan berolahraga di rumah, kamu memiliki fleksibilitas
            dalam menentukan waktu dan durasi latihan sesuai dengan jadwalmu,
            tanpa terikat dengan jadwal operasional gym.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            3. Kontrol suasana latihan:
            <br /> Kamu memiliki kontrol penuh atas lingkungan tempat olahraga
            di rumah, termasuk suhu ruangan, pencahayaan, dan musik yang diputar
            selama latihan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            4. Akses tanpa batas:
            <br />
            Berolahraga di rumah memberikan akses tak terbatas. Kamu dapat
            menggunakan berat badan sendiri, peralatan sederhana seperti matras
            yoga, serta dumbbell atau resistance band.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Berikut adalah tips praktis untuk berolahraga di rumah:
          </h3>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              1. Pilih ruang yang lapang untuk bergerak dengan bebas dan aman.
            </p>
          </div>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              2. Berolahraga tanpa alas kaki bisa menjadi pilihan, namun perlu
              dihindari saat melakukan olahraga yang membutuhkan lompat atau
              pada lantai yang tidak rata.
            </p>
          </div>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              3. Lakukan pemanasan sebelum memulai sesi olahraga untuk
              mengurangi risiko cedera dan meningkatkan performa.
            </p>
          </div>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              4. Perhatikan teknik pernapasan yang tepat selama berolahraga.
            </p>
          </div>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              5. Mulailah dengan gerakan ringan atau intensitas rendah terlebih
              dahulu untuk mencegah cedera.
            </p>
          </div>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              6. Gunakan perlengkapan keamanan tambahan jika diperlukan, seperti
              support band.
            </p>
          </div>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              7. Pastikan untuk terhidrasi dengan baik selama berolahraga dengan
              minum air putih sebelum, selama, dan setelah sesi olahraga.
            </p>
          </div>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Gerakan ringan yang dapat meningkatkan kesehatan di rumah antara
            lain:
          </h3>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              - Naik turun tangga atau kursi
              <br />
              - Push-up
              <br />
              - Mountain climber
              <br />
              - Squat jump
              <br />
              - Burpees
              <br />
              - Jumping jacks
              <br />
              - Screamer lunges
              <br />
              - Jalan di tempat
              <br />
              - Angkat beban
              <br />
              - Lompat tali atau skipping
              <br />
              - Yoga
              <br />- Zumba atau senam aerobik
            </p>
          </div>
          <div className="mt-4 mb-6 space-y-2">
            <p className="text-gray-600 text-justify">
              Dengan menerapkan tips dan gerakan olahraga di rumah ini, kamu
              dapat memulai perjalanan kesehatan dan kebugaran tanpa harus
              meninggalkan rumah. Mulailah dari sekarang dan jadikan olahraga
              sebagai bagian penting dari gaya hidup sehat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
