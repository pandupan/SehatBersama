import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Bagaimana Menentukan Cara Diet yang Tepat untuk Saya?
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
              href="/InformasiKesehatan/NutrisiDanDiet"
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
              src="/image/diet4.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Diet itu apa ?</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Sebenarnya, diet itu apa, sih?
          </h3>
          <p className="text-gray-600 text-justify">
            Sebelum Anda menentukan cara diet yang akan dijalani, sebaiknya
            ketahui dulu apa arti diet sebenarnya. Pasalnya, banyak orang yang
            menganggap bahwa diet merupakan pembatasan makan supaya berat badan
            turun. Padahal, anggapan ini kurang tepat. Lalu, apa itu diet? Kata
            diet berasal dari bahasa Yunani yang artinya cara hidup. Oleh karena
            itu, diet yang baik sebenarnya merupakan yang bisa menjadi cara
            hidup diri kita sehari-hari.
          </p>
          <p className="text-gray-600 text-justify">
            Diet juga bisa diartikan sebagai cara untuk mengatur jumlah dan
            memilih makanan untuk mencapai tujuan tertentu, misalnya menurunkan
            berat badan, mengendalikan kadar kolesterol tubuh, hingga sebagai
            penunjang pengobatan penyakit tertentu. Saat ini, banyak sekali diet
            yang beredar di masyarakat terutama untuk menurunkan berat badan.
            Diet untuk menurunkan berat badan yang paling sering diperbincangkan
            yaitu: Diet Atkins , The zone diet , Diet ketogenik , Diet
            vegetarian , Diet vegan , Weight watcher diet , South beach diet ,
            Raw food diet , Diet Mediterranian , Diet puasa (intermittent
            fasting) , Food combining
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Dalam memilih cara diet yang tepat, apa saja yang harus
            dipertimbangkan?
          </h3>
          <p className="text-gray-600 text-justify">
            Sebelum beranjak lebih jauh, perlu diingat lagi bahwa arti diet
            adalah cara hidup. Cara hidup ini pastinya dilakukan setiap orang
            dari bayi hingga lansia. Bukan berarti diet itu selalu untuk
            menurunkan berat badan. Saat ingin menentukan mana cara diet yang
            tepat, tentu hal ini harus didasari kebutuhan Anda sendiri.
            Contohnya, apakah Anda saat ini ingin menurunkan berat badan,
            menjaga kadar kolesterol, meningkatkan performa (biasanya untuk
            atlet), atau mencegah penuaan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Penyakit mental psikotik
          </h3>
          <p className="text-gray-600 text-justify">
            Setelah mengetahui apa tujuan dari diet yang akan dilakukan, lihat
            juga bagaimana kondisi berat badan, kadar lemak tubuh, penyakit yang
            dimiliki, profesi, dan pola hidup (contohnya, pola tidur, olahraga,
            aktivitas harian yang dilakukan). Bila memang Anda kesulitan untuk
            memilih mana cara diet yang tepat, sebaiknya konsultasikan ke dokter
            dan ahli gizi.
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
