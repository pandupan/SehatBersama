import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Seberapa Penting ASI Eksklusif bagi Bayi dan Ibu?
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
                Jumat, 10 November 2023 10:20
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
              src="/image/kehamilan3.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Menyusui</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Manfaat ASI Eksklusif
          </h3>
          <p className="text-gray-600 text-justify">
            Dikutip dari Cleveland Clinic, menyusui memberikan sejumlah manfaat
            kesehatan dan perkembangan bagi Buah Hati, di antaranya mengurangi
            risiko infeksi saluran pernapasan, diare, muntah, serta menurunkan
            risiko Sudden Infant Death Syndrome (SIDS) atau kematian mendadak
            pada bayi.
          </p>
          <p className="text-gray-600 text-justify">
            ASI juga memberikan dukungan penting untuk pertumbuhan organ bayi,
            mengoptimalkan sistem pencernaan, serta menyediakan antibodi sebagai
            perlindungan dari infeksi. Selain itu, cairan alami dari Ibu ini
            juga mencegah masalah kesehatan pada gigi bayi, juga menurunkan
            risiko obesitas dan diabetes tipe 2 yang dapat timbul ketika dewasa
            nanti.
          </p>
          <p className="text-gray-600 text-justify">
            Menyusui juga memberikan banyak keuntungan bagi Ibu. Beberapa
            manfaat tersebut mencakup mengurangi risiko depresi pasca melahirkan
            dan mengurangi risiko terkena kanker payudara serta kanker ovarium.
          </p>
          <p className="text-gray-600 text-justify">
            Tidak hanya itu, menyusui juga membantu Ibu dalam pemulihan setelah
            melahirkan dengan memproduksi hormon oksitosin untuk membantu
            kontraksi rahim setelah persalinan. Kontraksi ini membantu rahim
            kembali ke ukuran normal dan mengurangi pendarahan vagina setelah
            melahirkan. Selain manfaat kesehatan jangka panjang, menyusui juga
            memberikan keuntungan dalam ikatan fisik dan emosional antara Ibu
            dan bayi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Berapa Banyak Kebutuhan ASI Bayi Baru Lahir?
          </h3>
          <p className="text-gray-600 text-justify">
            Yuk, cek perkiraan rata-rata kebutuhan ASI bayi baru lahir dalam
            satu sesi menyusui berdasarkan informasi dari situs Health Service
            Executive berikut ini: , Usia 1 hari: sekitar 5 ml atau setara
            dengan 1 sendok teh , Usia 2 hari: sekitar 5-15 ml atau di bawah 3
            sendok teh , Usia 3 hari: sekitar 15-30 ml atau lebih dari 2 sendok
            makan.
          </p>
          <p className="text-gray-600 text-justify">
            Selama seminggu pertama, kebutuhan ASI bayi umumnya sekitar 30-60 ml
            per sesi, karena ukuran lambungnya yang masih sangat kecil. Setelah
            4-5 minggu, asupan harian bertambah menjadi sekitar 90-120 ml.
            Setelahnya, kebutuhan harian bisa mencapai 900 ml. Ketika mencapai
            usia 6 bulan, asupan bayi atas air susu ibunya mulai berkurang
            secara perlahan seiring dengan pengenalan makanan padat.
          </p>
          <p className="text-gray-600 text-justify">
            Penting untuk diingat bahwa kebutuhan ASI akan terus meningkat
            seiring dengan pertumbuhannya. Perhatikan tanda bayi ketika mulai
            lapar untuk membantu menciptakan pola makan yang lebih teratur dan
            memenuhi kebutuhan nutrisi yang berkembang seiring waktu.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Seberapa Sering Ibu Perlu Memberikan ASI Eksklusif?
          </h3>
          <p className="text-gray-600 text-justify">
            Meskipun pada awalnya produksi ASI mungkin terasa sedikit, terutama
            pada hari-hari pertama kelahiran, ini sudah cukup untuk memenuhi
            kebutuhan Buah Hati yang memiliki lambung kecil. Suplai air susu
            akan menyesuaikan pada kebutuhan tubuh bayi. Semakin sering menyusui
            dapat membantu meningkatkan produksinya.
          </p>
          <p className="text-gray-600 text-justify">
            Pada hari pertama, Buah Hati mungkin perlu menyusu setiap 1-3 jam
            karena ukuran lambungnya yang kecil. Seiring pertumbuhan, ukuran
            perutnya akan bertambah, sehingga ia dapat minum lebih banyak setiap
            kali menyusui.
          </p>
          <p className="text-gray-600 text-justify">
            Biasanya, selama beberapa bulan pertama, menyusu dilakukan setiap
            2-4 jam. Namun, meski pola menyusui dapat beragam, bayi umumnya akan
            mengambil sebanyak yang kebutuhannya, lalu berhenti saat merasa
            kenyang.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Strategi ASI Eksklusif Bagi Ibu Bekerja
          </h3>
          <p className="text-gray-600 text-justify">
            Memberikan ASI eksklusif untuk Buah Hati merupakan impian bagi
            banyak ibu, tak terkecuali ibu yang bekerja. Inilah tips untuk
            membantu Ibu yang bekerja dalam memberikan ASI eksklusif: , Sebelum
            kembali bekerja, pilih metode memerah ternyaman dan paling efisien.
            Apakah dengan tangan, pompa manual, atau pompa elektrik. , Jadwalkan
            sesi memompa setiap 3 jam, atau sesuai dengan kebutuhan bayi. , Jika
            memungkinkan, selalu sediakan waktu untuk menyusui langsung ketika
            di rumah untuk membangun ikatan emosional. , Hindari stres karena
            dapat mempengaruhi produksi air susu. , Saat memerah di kantor,
            usahakan untuk duduk dengan nyaman dan memikirkan kebahagiaan Buah
            Hati, sambil sesekali memijat payudara..
          </p>
          <p className="text-gray-600 text-justify">
            Ibu bekerja memiliki hak untuk menyusui yang dilindungi oleh hukum
            untuk mendapatkan kesempatan agar bisa menyusui atau memompa ASI
            selama waktu bekerja. Mengetahui hak-hak ini membantu menciptakan
            lingkungan untuk mendukung keberlanjutan pemberian ASI eksklusif.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Cara Memperbanyak Produksi ASI dan Meningkatkan Kualitasnya
          </h3>
          <p className="text-gray-600 text-justify">
          Ibu dapat memperbanyak produksi air susunya dengan makanan tertentu dan juga susu khusus ibu menyusui.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Konsumsi Makanan Pelancar ASI
          </h3>
          <p className="text-gray-600 text-justify">
          Berikut beberapa makanan untuk melancarkan produksi air susu yang dapat membantu:
          </p>
          <p className="text-gray-600 text-justify">
          Bawang putih, mengandung senyawa galaktogogum yang dapat merangsang jumlah produksi air susu
, Oatmeal, kaya akan zat besi, yaitu nutrisi yang penting untuk merangsang produksi air susu
, Makanan kaya PROTEIN, seperti kacang, susu, almond, telur, serta daging rendah lemak memiliki peran penting dalam memperlancar produksi air susu
, Sayuran, seperti wortel, bayam, brokoli, ataupun ubi, mengandung berbagai vitamin. Sayuran ini juga mengandung mineral, termasuk zat besi, kalsium, dan folat yang penting untuk meningkatkan jumlah dan kualitas air susu
, Biji wijen, yang mengandung kalsium dalam jumlah tinggi untuk meningkatkan kualitas air susu 
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Minum Susu Ibu Menyusui
          </h3>
          <p className="text-gray-600 text-justify">
          Susu ibu menyusui dapat berperan sebagai ASI booster sekaligus memberikan nutrisi lengkap yang dibutuhkan oleh ibu menyusui. Berbagai manfaat susu ibu menyusui antara lain:

, Menyediakan kandungan nutrisi secara seimbang, mencakup PROTEIN, karbohidrat, serta vitamin dan mineral esensial. Terutama PROTEIN yang penting untuk perkembangan otak dan organ tubuh bayi
, Mengandung asam lemak DHA-omega-3 untuk kecerdasan bayi 
, Kandungan kalsium dan vitamin D membantu menjaga kesehatan tulang dan gigi, dan kurangi nyeri pegal Ibu
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
