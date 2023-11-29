import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Peran Kalsium untuk Ibu Hamil dan Cara Praktis Memenuhinya
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
                Puskesmas Kahuripan
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Sabtu, 13 November 2023 08:20
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/Kehamilan"
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
              src="/image/kehamilan1.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">wanita hamil</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pentingnya Kalsium untuk Ibu Hamil
          </h3>
          <p className="text-gray-600 text-justify">
            Baik Ibu maupun bayi sama-sama memerlukan kalsium, namun tubuh Ibu
            tidak dapat memproduksi mineral ini sendiri ya, Bu. Bayi hanya akan
            memperoleh mineral ini dari cadangan kalsium milik Ibu. Oleh karena
            itu, jika Ibu tidak mengonsumsi asupan mineral ini dengan rutin,
            maka kesehatan Ibu akan terganggu. Berikut ini merupakan peran
            penting kalsium bagi bayi dan Ibu sendiri:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Mendukung Pertumbuhan Tulang Janin
          </h3>
          <p className="text-gray-600 text-justify">
            Kalsium memiliki peran untuk membentuk tulang padat, agar dapat
            menciptakan sistem rangka pada tubuh bayi. Sebetulnya, rangka ini
            telah tumbuh sejak pertengahan kehamilan dan akan berlanjut terus
            sampai bayi lahir. Pertumbuhannya memerlukan mineral ini dari
            cadangan Ibu secara terus-menerus. Ibu dapat memperoleh mineral
            tersebut dari susu dan makanan. Penyerapan kalsium dalam tulang Ibu
            akan lebih optimal jika dibantu oleh PROTEIN loh.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Mengoptimalkan Perkembangan Saraf, Jantung dan Otot
          </h3>
          <p className="text-gray-600 text-justify">
            Menurut Healthline, sebagian besar kalsium tubuh disimpan dalam
            tulang, sedangkan sebagian kecil ditemukan dalam darah, otot, dan
            jaringan lainnya. Mineral tersebut membantu jantung untuk mengatur
            kontraksi pembuluh darah (otot polos). Selain kontraksi otot
            jantung, juga mengoptimalkan kontraksi otot pada gerakan motorik.
          </p>
          <p className="text-gray-600 text-justify">
            Selain itu, mineral ini berperan penting pada berbagai mekanisme
            serta reaksi tubuh, antara lain membuat fungsi saraf lebih optimal,
            sehingga mendukung kinerja otak.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Mengurangi Risiko Gangguan Kehamilan
          </h3>
          <p className="text-gray-600 text-justify">
            Dengan memenuhi kebutuhan kalsium saat hamil, ibu dapat mengurangi
            risiko gangguan kehamilan, seperti preeklamsia. Preeklamsia sendiri
            dapat menyebabkan bayi lahir lebih awal daripada seharusnya, atau
            sering juga disebut lahir prematur.
          </p>
          <p className="text-gray-600 text-justify">
            Selain itu, kurangnya asupan kalsium juga dapat menyebabkan
            pendarahan berlebihan saat melahirkan, yang tentunya dapat
            membahayakan nyawa Ibu.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Sumber Kalsium untuk Ibu Hamil
          </h3>
          <p className="text-gray-600 text-justify">
            Memenuhi porsi asupan zat kapur harian lebih baik diambil dari
            asupan makanan sehari-hari, seperti berikut ini:
          </p>
          <p className="text-gray-600 text-justify">
            Sayuran berdaun hijau gelap (bayam, kale, pokcoy, brokoli, kubis
            brussel) , Susu dan olahannya (susu, keju, yoghurt) , Biji-bijian
            (biji chia, wijen) , Ikan sarden dan ikan salmon , Kacang-kacangan
            (kacang merah, kedelai, edamame, polong, almon)
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Tips Memenuhi Asupan Kalsium dan PROTEIN Selama Kehamilan dengan
            Praktis
          </h3>
          <p className="text-gray-600 text-justify">
            Memenuhi asupan kalsium harian saja tidak cukup, perempuan hamil
            memerlukan PROTEIN tambahan untuk membantu penyerapan mineral
            kalsium bagi kebutuhan pertumbuhan tulang.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Bagaimana PROTEIN Membantu Penyerapan Kalsium?
          </h3>
          <p className="text-gray-600 text-justify">
          Menurut National Library of Medicine, pencernaan Ibu akan mampu menyerap kalsium jika kalsium tersebut berikatan dengan PROTEIN khusus bernama calcium-binding PROTEIN. PROTEIN pengikat ini terbentuk dari asam amino yang diperoleh dari asupan PROTEIN sehari-hari.
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
