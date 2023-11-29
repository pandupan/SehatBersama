import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Makanan Sehat yang Direkomendasikan untuk Ibu Hamil
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
                Puskesmas Kahuripan
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Minggu, 11 Oktober 2023 06:20
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
              src="/image/kehamilan4.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Makanan Sehat untuk ibu hamil</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Makanan Sehat Untuk Ibu Hamil
          </h3>
          <p className="text-gray-600 text-justify">
            Pemilihan asupan makanan untuk Ibu tentu tidak boleh sembarangan,
            sehingga Ibu harus memastikan konsumsi makanan Ibu benar-benar
            sehat. Adapun beberapa asupan makanan sehat untuk ibu hamil, antara
            lain:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Makanan Tinggi PROTEIN
          </h3>
          <p className="text-gray-600 text-justify">
            PROTEIN merupakan kandungan makanan utama dalam kehamilan, karena
            selain memberikan energi tambahan selama hamil, PROTEIN juga dapat
            mendukung pertumbuhan dan perkembangan otak serta jantung bayi
            penting untuk pembentukan organ tubuh dan otak bayi.
          </p>
          <p className="text-gray-600 text-justify">
            Kebutuhan asupan PROTEIN untuk ibu hamil yaitu 60-100 gram. Adapun
            beberapa makanan dengan kandungan PROTEIN tinggi, yaitu susu, ikan,
            ayam, kacang-kacangan, dan telur. PROTEIN juga terdapat dalam
            makanan olahan kacang kedelai, misalnya tahu dan tempe.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Hidangan Tinggi Kalsium
          </h3>
          <p className="text-gray-600 text-justify">
            Selama kehamilan, kalsium mendukung pertumbuhan tulang dan gigi
            janin serta mengoptimalkan perkembangan jantung, saraf, dan hatinya.
            Ibu hamil membutuhkan 1200-1600 miligram kalsium, dan ini dapat
            dibagi dalam dua dosis, yaitu sebesar 600-800 miligram per hari.
          </p>
          <p className="text-gray-600 text-justify">
            Adapun asupan kalsium ini bisa ibu temukan dari susu, yoghurt, keju,
            ikan lele, udang, salmon, tahu, dan sayuran berdaun hijau.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Makanan Kaya DHA</h3>
          <p className="text-gray-600 text-justify">
            Menurut National Library of Medicine, Ibu hamil disarankan
            mengonsumsi asupan DHA sekitar 200 mg setiap harinya. DHA sendiri
            merupakan salah satu komponen asam lemak omega-3 untuk menyusun otak
            janin. Sebab, otak telah tumbuh sejak awal kehamilan dan
            pertumbuhannya masih akan berlangsung hingga lahir dan tumbuh besar
            menjadi balita.
          </p>
          <p className="text-gray-600 text-justify">
            Selain untuk kesehatan otak, DHA juga dapat meminimalisasi risiko
            melahirkan prematur. Perlu diketahui, dampak dari Ibu yang
            melahirkan prematur ini adalah bayi yang dilahirkannya belum sempat
            memperoleh omega-3. Sebab, tubuh janin memang baru bisa menyerap
            nutrisi ini dari ibunya ketika minggu-minggu terakhir kehamilan.
          </p>
          <p className="text-gray-600 text-justify">
            DHA sebagai omega 3 juga bekerja dengan nutrisi lainnya untuk
            menjaga agar tubuh Ibu tidak mengalami preeklamsia atau komplikasi
            kehamilan. Adapun makanan sumber DHA ini antara lain: , Tumbuhan
            ganggang di laut , Telur ayam, terutama kuning telurnya ,
            Ikan-ikanan, terutama salmon, tuna dan sarden , Ikan teri, dan nila
            , Suplemen minyak ikan , Susu Kehamilan
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Asupan Kaya Asam Folat
          </h3>
          <p className="text-gray-600 text-justify">
            Ibu hamil juga direkomendasikan untuk mengonsumsi 600-1000 mikrogram
            folat setiap hari. Nutrisi ini dapat membantu mengurangi risiko
            cacat lahir pada bayi. Ibu bisa mendapatkan asupan folat dari
            sayuran berdaun hijau, kacang polong, telur, ati sapi Dan susu
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Makanan Tinggi Zat Besi
          </h3>
          <p className="text-gray-600 text-justify">
            Konsumsi zat besi yang cukup dapat membantu mengurangi risiko anemia
            defisiensi besi yang bisa menyebabkan Ibu mudah lelah. Anemia berat
            selama kehamilan juga bisa meningkatkan risiko kelahiran prematur,
            bayi terlahir dengan berat badan rendah, hingga depresi setelah
            melahirkan.
          </p>
          <p className="text-gray-600 text-justify">
            Adapun asupan zat besi yang ideal bagi Ibu yaitu antara 8-26
            miligram per hari. Beberapa sumber zat besi yang bisa dikonsumsi
            antara lain daging merah tanpa lemak, daging ayam, ikan, sayuran,
            dan kacang-kacangan. Adapun konsumsi zat besi harus diimbangi dengan
            konsumsi tinggi PROTEIN agar ibu tidak anemia.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Asupan Tinggi Vitamin B6
          </h3>
          <p className="text-gray-600 text-justify">
            Vitamin B6 menjadi salah satu nutrisi penting juga untuk dikonsumsi.
            Vitamin ini menyimpan banyak manfaat bagi Ibu dan janin, mulai dari
            menjaga tumbuh kembang janin tetap sehat hingga membantu meredakan
            gejala awal kehamilan seperti halnya mual-mual dan kram perut.
          </p>
          <p className="text-gray-600 text-justify">
            Berdasarkan angka kecukupan gizi anjuran Kementerian Kesehatan RI,
            ibu dapat mengonsumsi vitamin B6 sebanyak 2-3 miligram per hari
            selama hamil. Adapun sumber vitamin B6 ini bisa Ibu dapatkan dari
            ikan salmon, ikan tuna, daging sapi, pisang, dan bayam.
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
