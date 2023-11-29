import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          7 Kebiasaan Diet yang Salah dan Tanda-Tanda Diet Anda Tidak Tepat
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
                Selasa, 20 November 2023 10:20
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
              src="/image/diet3.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Konsultasi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Berbagai kebiasaan diet yang salah
          </h3>
          <p className="text-gray-600 text-justify">
            Berikut ini ada berbagai kebiasaan diet yang salah yang sering
            terjadi dan sebaiknya Anda hindari.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            1. Tidak sarapan pagi
          </h3>
          <p className="text-gray-600 text-justify">
            Melewatkan waktu sarapan bukanlah cara diet yang dianjurkan.
            Pasalnya, hal ini membuat Anda justru bisa makan lebih banyak dengan
            porsi yang besar di siang harinya. Selain itu, melewatkan sarapan
            juga dapat menurunkan mood dan meningkatkan risiko obesitas.
            Keseimbangan gula dan insulin dalam tubuh juga akan terganggu
            sehingga tubuh selalu merasa lapar.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            2. Tidak menghiraukan kalori dari minuman
          </h3>
          <p className="text-gray-600 text-justify">
            Tahukah Anda bahwa minuman cepat saji mengandung kalori yang cukup
            tinggi. Bahkan, minuman yang berlabel “jus buah’ pun bisa mengandung
            kalori dan gula yang sangat tinggi sehingga dapat menambah asupan
            kalori harian. Padahal. saat melakukan diet, membatasi asupan kalori
            menjadi hal wajib yang perlu Anda lakukan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            3. Makan terlalu banyak protein dan lemak
          </h3>
          <p className="text-gray-600 text-justify">
            Membatasi asupan karbohidrat dan meningkatkan protein serta lemak
            secara berlebih dapat membahayakan tubuh. Kondisi ini dapat merusak
            ginjal dan meningkatkan kadar kolesterol yang berakibat pada
            penyakit jantung serta stroke.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            3. Makan terlalu banyak protein dan lemak
          </h3>
          <p className="text-gray-600 text-justify">
            Membatasi asupan karbohidrat dan meningkatkan protein serta lemak
            secara berlebih dapat membahayakan tubuh. Kondisi ini dapat merusak
            ginjal dan meningkatkan kadar kolesterol yang berakibat pada
            penyakit jantung serta stroke.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            4. Makan tanpa garam
          </h3>
          <p className="text-gray-600 text-justify">
            Diet tanpa garam menjadi diet yang sedang populer. Namun, makan
            tanpa menambahkan garam sedikit pun justru dapat membahayakan tubuh.
            Pasalnya, tubuh tetap membutuhkan asupan garam terutama untuk
            produksi hormon tiroid, memelihara keseimbangan cairan tubuh,
            menjaga aktivitas sel saraf, kontraksi serta relaksasi otot, dan
            meningkatkan fungsi otak. Namun, asupan garam harian tidak boleh
            sampai berlebihan. Kelebihan garam juga bisa meningkatkan risiko
            hipertensi, stroke, jantung, dan juga masalah ginjal.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">5. Kekurangan serat</h3>
          <p className="text-gray-600 text-justify">
            Diet dengan membatasi asupan kalori harian tanpa sadar juga
            menurunkan asupan serat harian. Padahal, serat sangat dibutuhkan
            untuk membantu menurunkan berat badan dengan cara menahan rasa
            kenyang lebih lama. Selain itu, serat juga berfungsi membantu
            melancarkan pencernaan Anda.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            6. Memuntahkan kembali makanan yang telah dimakan
          </h3>
          <p className="text-gray-600 text-justify">
            Kebiasaan memuntahkan kembali makanan yang telah dimakan secara
            paksa merupakan gangguan psikologis yang bisa membahayakan.
            Nantinya, efek samping yang dialami cukup serius seperti kulit dan
            rambut yang kusam, kerusakan kelenjar air liur, osteoporosis,
            gangguan menstruasi, gangguan irama jantung, sembelit, hingga
            gangguan emosi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            7. Minum obat pelangsing tanpa pengawasan dokter
          </h3>
          <p className="text-gray-600 text-justify">
            Banyak orang menggunakan berbagai cara untuk menurunkan berat badan;
            termasuk mengonsumsi obat pelangsing tanpa pengawasan atau resep
            dari dokter. Kebiasaan ini sangat membahayakan karena kandungan di
            dalam obat yang belum pasti aman justru dapat merusak organ tubuh
            hingga menimbulkan kematian.
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
