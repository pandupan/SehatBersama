import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Penyebab Sendi Geser dan Cara Menanganinya dengan Tepat
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
                Minggu, 11 Oktober 2023 09:20
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
            <Image
              src="/image/penyakit2.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Sendi geser atau dislokasi sendi bisa terjadi pada semua bagian
              tubuh yang memiliki sendi, termasuk lutut
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Berbagai penyebab sendi geser dan faktor risikonya
          </h3>
          <p className="text-gray-600 text-justify">
            Dislokasi bisa terjadi pada semua bagian tubuh yang memiliki sendi.
            Namun jenis sendi yang paling sering mengalami dislokasi adalah
            bahu. Penyebab utama dari dislokasi sendi adalah benturan keras yang
            memicu ujung tulang terlepas dari sendi yang menjadi engselnya.
            Contoh sendi geser misalnya ujung tulang lutut yang bergeser dan
            terlepas dari tempurungnya. Berikut adalah sederet penyebab di balik
            sendi bergeser dan faktor risikonya:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">1. Kecelakaan</h3>
          <p className="text-gray-600 text-justify">
            Kecelakaan merupakan salah satu penyebab sendi geser yang paling
            umum. Biasanya, saat kecelakaan, korban mengalami benturan yang
            keras. Jika saat benturan terjadi, ada sendi yang menahan beban
            tubuh, bukan tidak mungkin sendi ikut bergeser.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">2. Olahraga</h3>
          <p className="text-gray-600 text-justify">
            Jenis olahraga yang memerlukan banyak kontak fisik seperti gulat,
            basket, sepak bola, dan rugby juga bisa menyebabkan sendi bergeser
            dari tempatnya. Maka dari itu, kalau kamu berniat untuk melakukan
            olahraga-olahraga tersebut, jangan lupa untuk pakai pelindung yang
            memadai.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">3. Faktor usia</h3>
          <p className="text-gray-600 text-justify">
            Semakin bertambah usia seseorang, risiko dislokasi sendi juga bisa
            ikut meningkat. Koordinasi gerakan dan keseimbangan umumnya akan
            menurun seiring penuaan. Inilah mengapa kalangan lansia bisa lebih
            rentan untuk terjatuh dan mengalami cedera, termasuk patah tulang
            dan dislokasi sendi. Tak hanya lansia, dislokasi sendi maupun cedera
            juga lebih rentan dialami oleh anak-anak. Pasalnya, mereka lebih
            mudah terjatuh ketika bermain atau beraktivitas fisik.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">4. Faktor keturunan</h3>
          <p className="text-gray-600 text-justify">
            Faktor keturunan pun bisa dikatakan menjadi salah satu hal yang
            menambah risiko sendi bergeser. Hal ini dikarenakan beberapa orang
            mungkin terlahir dengan kondisi ligamen yang lemah, sehingga sendi
            mereka lebih rentan mengalami pergeseran. Misalnya pada seseorang
            dengan sindrom marfan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pertolongan pertama untuk sendi geser
          </h3>
          <p className="text-gray-600 text-justify">
            Dislokasi sendi tergolong dalam kondisi gawat darurat medis. Oleh
            sebab itu, penanganannya tidak boleh sembarangan dan harus dilakukan
            oleh tenaga profesional medis. Namun sembari menunggu bantuan medis
            datang, beberapa langkah pertolongan pertama di bawah ini bisa kamu
            lakukan terlebih dulu:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            1. Jangan gerakkan sendi yang cedera
          </h3>
          <p className="text-gray-600 text-justify">
            Menggerakkan sendi yang geser berisiko membuat cedera tambah parah.
            Jadi, jangan coba untuk memaksa kembali tulang untuk masuk ke
            cangkang sendi seperti semula. Jika bukan dilakukan oleh tenaga
            medis profesional, cara mengembalikan tulang yang geser dengan paksa
            dapat merusak otot-otot, ligamen, saraf, maupun pembuluh darah di
            sekitar sendi, yang malah semakin memperburuk cedera.
          </p>
          <p className="text-gray-600 text-justify">
            Supaya bagian sendi yang geser tetap stabil, balut bagian tersebut
            dengan perban elastis agar tidak bergerak. Tapi ingat agar balutan
            tidak terlalu kencang agar sirkulasi darah tidak terganggu.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            2. Kompres dengan es
          </h3>
          <p className="text-gray-600 text-justify">
            Mengompres bagian sendi yang cedera dengan es batu yang telah
            dibungkus kain atau handuk. Langkah ini dapat mengurangi nyeri dan
            pembengkakan. Hindari menempelkan es batu langsung ke bagian yang
            cedera karena dapat menyebabkan pembekuan darah dan mempertinggi
            risiko munculnya radang dingin atau frostbite.
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
