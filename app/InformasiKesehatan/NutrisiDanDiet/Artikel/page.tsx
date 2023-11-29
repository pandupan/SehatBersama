import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Diet Sehat: Panduan, Tips dan Menu Diet agar Berat Badan Cepat Turun
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
                Rabu, 29 November 2023 06:20
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
              src="/image/diet0.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Sayur dan buah</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Tips sederhana untuk diet cepat dan sehat{" "}
          </h3>
          <p className="text-gray-600 text-justify">
            Ada banyak strategi penurunan berat badan yang dapat membuat tubuh
            terasa sakit dan hasilnya tidak bertahan lama. Nah, untuk itu diet
            cepat dan sehat perlu dilakukan agar penurunan berat badan tidak
            menimbulkan efek samping bagi tubuh.
          </p>
          <p className="text-gray-600 text-justify">
            Cara menjalankan diet sehat bisa dilakukan sendiri, namun tak
            sedikit yang memerlukan bantuan ahli agar mendapatkan berat badan
            yang diinginkan. Beberapa cara diet sehat alami yang bisa dilakukan
            secara mandiri, antara lain:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            1. Makan secara perlahan
          </h3>
          <p className="text-gray-600 text-justify">
            Kecepatan makan akan memengaruhi seberapa banyak makanan yang masuk
            sehingga memungkinkan bertambahnya berat badan. Dalam sebuah
            penelitian juga menyebutkan kecepatan makan hingga 115% lebih
            mungkin mengalami obesitas daripada pemakan yang lambat.
          </p>
          <p className="text-gray-600 text-justify">
            Nafsu makan dikendalikan oleh hormon yang bekerja untuk memberi
            sinyal pada otak saat lapar atau kenyang. Namun, perlu diketahui
            jika otak membutuhkan waktu sekitar 20 menit untuk menerima pesan
            tersebut.
          </p>
          <p className="text-gray-600 text-justify">
            Jadi, makan lebih lambat atau secara perlahan akan memberi waktu
            pada otak untuk memahami bahwa kamu kenyang.
          </p>
          <p className="text-gray-600 text-justify">
            Penelitian juga menyebutkan jika makan secara perlahan bisa
            mengurangi jumlah kalori yang kamu konsumsi saat makan. Selain itu,
            cara ini juga dapat membantu menurunkan berat badan dengan sehat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            2. Tingkatkan asupan protein
          </h3>
          <p className="text-gray-600 text-justify">
            Protein sering disebut sebagai sumber nutrisi dan memiliki beberapa
            kekuatan super. Protein yang merupakan nutrisi makronutrien mampu
            memengaruhi hormon rasa lapar dan kenyang.
          </p>
          <p className="text-gray-600 text-justify">
            Sebuah studi menunjukkan bahwa meningkatkan asupan protein menjadi
            30% dapat membuat orang makan lebih sedikit.
          </p>
          <p className="text-gray-600 text-justify">
            Terlebih lagi, protein dapat membantu kamu dalam mempertahankan
            massa otot serta menentukan tingkat metabolisme tubuh. Hal ini
            sangat penting untuk mencegah hilangnya massa otot yang dapat
            terjadi selama penurunan berat badan.
          </p>
          <p className="text-gray-600 text-justify">
            Menambahkan sumber protein dalam makanan akan membantu tubuh merasa
            kenyang lebih lama dan cenderung mengekang keinginan untuk makan
            terlalu banyak. Beberapa protein yang baik dikonsumsi, termasuk
            produk susu, kacang-kacangan, selai kacang, telur, serta daging
            tanpa lemak.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            3. Minum air yang cukup
          </h3>
          <p className="text-gray-600 text-justify">
            Mendapatkan cukup asupan air sangat penting untuk kesehatan tubuh.
            Banyak penelitian yang menunjukkan jika air minum dapat memberi
            manfaat bagi penurunan berat badan. Selain itu, bisa pula memelihara
            berat badan tetap ideal dan meningkatkan jumlah kalori yang dibakar
            setiap hari.
          </p>
          <p className="text-gray-600 text-justify">
            Sebuah studi juga mengatakan bahwa minum air sebelum makan dapat
            mengurangi nafsu makan dan asupan kalori selama makan berikutnya
            pada orang dewasa. Orang yang tercukupi asupan air minumnya terbukti
            mengonsumsi 200 kalori lebih sedikit per hari.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            4. Rebus makanan daripada digoreng
          </h3>
          <p className="text-gray-600 text-justify">
            Metode populer untuk menyiapkan daging dan ikan, salah satunya
            adalah dengan digoreng. Namun, selama metode memasak ini beberapa
            senyawa yang berpotensi toksik akan terbentuk.
          </p>
          <p className="text-gray-600 text-justify">
            Semua senyawa ini telah dikaitkan dengan beberapa penyakit, termasuk
            kanker dan penyakit jantung. Metode memasak yang lebih sehat bisa
            dilakukan dengan dipanggang dan direbus. Metode memasak ini tidak
            akan menyebabkan pembentukan senyawa berbahaya dan akan membuat
            makanan lebih sehat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          5. Konsumsi omega-3 dan vitamin D
          </h3>
          <p className="text-gray-600 text-justify">
            Sebagian besar orang di dunia kekurangan vitamin D. Vitamin D
            sendiri merupakan vitamin yang larut dalam lemak. Vitamin ini sangat
            penting untuk kesehatan tulang dan meningkatkan sistem kekebalan
            pada tubuh.
          </p>
          <p className="text-gray-600 text-justify">
            Faktanya, setiap sel dalam tubuh memiliki reseptor untuk vitamin D.
            Vitamin D akan ditemukan dalam beberapa jenis makan, terutama
            makanan laut berlemak.
          </p>
          <p className="text-gray-600 text-justify">
            Sementara itu, asam lemak omega 3 adalah nutrisi lain yang memiliki
            peran penting dalam mengurangi peradangan, menjaga kesehatan jantung
            dan meningkatkan fungsi otak.
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
