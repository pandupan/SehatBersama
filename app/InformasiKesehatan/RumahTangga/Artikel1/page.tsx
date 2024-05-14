import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Memahami Penyebab Maag Kambuh dan Cara Mengatasinya
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
                Sabtu, 11 November 2023 06:20
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
              src="/image/penyakit1.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Ilustrasi seorang wanita yang mengalami maag kambuh
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Apa penyebab maag kambuh?
          </h3>
          <p className="text-gray-600 text-justify">
            Cara terbaik untuk mencegah maag kambuh lagi adalah menghindari
            berbagai hal yang dapat memicu kondisi ini. Berikut adalah beberapa
            penyebab maag kambuh yang perlu kamu hindari: Makan terburu-buru ,
            Stres berlebih dan kelelahan , Makan dalam jumlah yang banyak
            sekaligus , Makanan yang asam dan pedas , Makanan berlemak atau
            berminyak , Gemar mengonsumsi minuman beralkohol dan merokok ,
            Menggunakan pakaian yang ketat karena dapat memicu makanan naik ke
            kerongkongan , Minuman atau makanan yang mengandung kafein, seperti
            kopi atau teh , Langsung tidur setelah makan , Makan sebelum
            olahraga atau berolahraga dengan perut kenyang. mengonsumsi makanan
            berat sebelum tidur juga dapat menjadi penyebab maag kambuh. Jadi,
            usahakan untuk makan setidaknya 3 jam sebelum waktu tidurmu.
            Contohnya, kamu dapat memberi batasan waktu makan malam, yaitu pada
            jam 6 atau 7 malam. Dengan begini, kamu bisa tidur sekitar jam 10
            malam.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Gejala penyakit maag
          </h3>
          <p className="text-gray-600 text-justify">
            Berikut sederet gejala maag kambuh yang perlu diwaspadai: Sakit
            perut atau perut kembung , Nyeri ulu hati (heartburn) , Mual ,
            Muntah , Merasa lebih cepat kenyang ketika sedang makan , Muncul
            sensasi terbakar di perut atau esofagus (kerongkongan) , Muncul
            penumpukan gas atau bersendawa. , Dalam beberapa kasus, maag juga
            bisa disertai dengan gejala-gejala yang parah, seperti: , Muntah
            yang terlihat berdarah atau teksturnya mirip ampas kopi , Penurunan
            berat badan yang tak jelas penyebabnya , Feses berwarna hitam ,
            Sulit menelan. Jika kamu mengalami berbagai gejala di atas,
            segeralah datang ke dokter dan berkonsultasi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Cara mengatasi maag agar tidak kambuh 
          </h3>
          <h3 className="text-xl sm:text-2xl font-bold">
          1. Menerapkan pola makan sehat
          </h3>
          <p className="text-gray-600 text-justify">
          Menjaga pola makan sehat bisa kamu lakukan dengan memerhatikan jenis makanan dan asupan gizi yang terdapat di dalamnya. Selain itu, hindari mengonsumsi makanan secara berlebihan dan terburu-buru.

Konsumsilah makanan yang kaya akan serat. Tujuannya adalah membantu membersihkan usus sehingga membuat pencernaan menjadi lebih lancar. 

Beberapa contoh makanan berserat, di antaranya beras merah, oatmeal, ubi, buah bit, wortel, brokoli, dan buncis.
          </p>
          <p className="text-gray-600 text-justify">
          Selain itu, kamu juga disarankan untuk mengonsumsi makanan yang tinggi pH, seperti pisang, kacang-kacangan, dan melon. Lalu, konsumsi juga makanan yang kaya air, seperti semangka, sup, timun, seledri, dan selada.

Jika kamu ingin mengonsumsi daging sapi atau ayam, pastikan daging tersebut tidak mengandung banyak lemak.

Tak hanya makanan, kamu juga perlu menghindari minuman penyebab maag kambuh dan menggantinya dengan yang lebih sehat. Minuman seperti teh chamomile, teh peppermint, jahe, akar licorice, adas, dan air lemon dapat kamu konsumsi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          2. Menjalani gaya hidup sehat
          </h3>
          <p className="text-gray-600 text-justify">
          Seperti yang sudah disebutkan sebelumnya, merokok, minuman beralkohol, stres, dan makan sebelum tidur dapat membuat maag kamu kambuh.

Oleh karena itu, mulailah untuk menghindari gaya hidup yang kurang baik tersebut. Selain dapat memicu maag, gaya hidup di atas juga berdampak buruk untuk kesehatan kamu secara menyeluruh.

Sebisa mungkin, cobalah untuk meredakan kecemasan dan stres yang kamu alami guna mencegah maag kambuh. Kamu bisa melakukan yoga secara teratur untuk menghilangkan stres dan gejala gangguan pencernaan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          3. Mengonsumsi obat-obatan maag
          </h3>
          <p className="text-gray-600 text-justify">
          Jika masih tetap kambuh, cobalah berkonsultasi ke dokter terkait konsumsi obat-obatan maag. 

Terdapat beberapa obat yang mungkin diresepkan dokter agar maag tidak kambuh, salah satunya penghambat pompa proton yang mengurangi asam lambung. Obat ini biasanya direkomendasikan pada pasien maag yang mengalami nyeri ulu hati. 

Selain itu, ada pula obat antagonis reseptor-H2 yang juga bisa mengurangi asam lambung. 

Apa pun obat yang kamu konsumsi, pastikan kamu berkonsultasi dulu dengan dokter untuk mengetahui dosis dan anjuran konsumsi yang tepat. 

Penyebab maag kambuh tidak melulu soal apa yang kamu konsumsi. Gaya hidup, stres, dan kelelahan pun dapat menjadi pemicu kondisi ini. Oleh karena itu, cobalah untuk mulai menghindarinya, dan mulailah menerapkan pola makan serta gaya hidup sehat.
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
