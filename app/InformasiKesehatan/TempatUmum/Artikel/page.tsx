import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          6 Langkah Mencuci Tangan yang Benar Agar Tetap Bersih
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
                Rabu, 29 November 2023 06:20
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/TempatUmum"
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
              src="https://i.ibb.co/JQZm5Qm/photo-1628235172251-6b87dab144b3.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Mencuci Tangan</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            6 Langkah Mencuci Tangan yang Benar Agar Tetap Bersih
          </h3>
          <p className="text-gray-600 text-justify">
            Cuci tangan adalah praktik penting dalam menjaga kebersihan dan
            kesehatan tubuh, membantu mengurangi risiko infeksi atau penyakit
            yang dapat ditularkan melalui tangan. Mencuci tangan dengan sabun
            dan air bersih membantu menghilangkan virus, kuman, dan bakteri yang
            mungkin menempel pada tangan setelah menyentuh permukaan yang
            terkontaminasi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Tentang Cara Mencuci Tangan dengan Benar Menurut WHO:
          </h3>
          <p className="text-gray-600 text-justify">
            1. Gosok kedua telapak tangan: Gunakan sabun dan air bersih, lalu
            gosok kedua telapak tangan hingga seluruh permukaan tangan terkena
            sabun.
          </p>
          <p className="text-gray-600 text-justify">
            2. Gosok kedua punggung tangan: Gosok kedua punggung tangan secara
            bergantian, pastikan sabun merata di seluruh permukaan.
          </p>
          <p className="text-gray-600 text-justify">
            3. Gosok sela-sela jari: Silangkan jari tangan dan gosok sela-sela
            jari secara bergantian untuk memastikan bersih dari kuman.
          </p>
          <p className="text-gray-600 text-justify">
            4. Gosok bagian dalam tangan dan punggung jari: Gosok bagian dalam
            tangan dan punggung jari dengan posisi jari saling mengunci.
          </p>
          <p className="text-gray-600 text-justify">
            5. Bersihkan ibu jari Gunakan gerakan memutar untuk membersihkan ibu
            jari secara menyeluruh.
          </p>
          <p className="text-gray-600 text-justify">
            6. Bersihkan bagian kuku dan ujung jari: Pastikan untuk membersihkan
            bagian kuku dan ujung jari, lalu gosokkan pada telapak tangan yang
            lain.
          </p>
          <p className="text-gray-600 text-justify">
            Setelah mencuci tangan, pastikan untuk mengeringkannya dengan tisu
            atau handuk bersih.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Saat berada di luar rumah atau tempat yang tidak memiliki akses air
            bersih, hand sanitizer dengan kandungan alkohol lebih dari 60 persen
            dapat digunakan sebagai alternatif untuk membersihkan tangan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Menghindari kontak langsung dengan benda-benda yang berpotensi
            mengandung kuman
          </h3>
          <p className="text-gray-600 text-justify">
            Selain itu, menghindari kontak langsung dengan benda-benda yang
            berpotensi mengandung kuman juga penting. Misalnya, segera mencuci
            tangan setelah menyentuh uang atau kartu pembayaran, pegangan pintu,
            buku menu makanan di restoran, hewan peliharaan, dan alat dapur. Ini
            akan membantu mengurangi risiko terpapar virus, bakteri, dan kuman
            yang dapat menyebabkan penyakit.
          </p>
          <p className="text-gray-600 text-justify">
            Meskipun mencuci tangan adalah kebiasaan sehat, terlalu sering
            mencucinya bisa menyebabkan kulit kering atau iritasi. Untuk
            mengatasi ini, gunakan pelembab setelah mencuci tangan secara
            teratur.
          </p>
          <p className="text-gray-600 text-justify">
            Secara keseluruhan, mencuci tangan secara benar adalah langkah
            sederhana namun efektif untuk menjaga kesehatan dan mencegah
            penularan penyakit. Dengan menjadikannya kebiasaan sehari-hari, Anda
            dapat melindungi diri dan orang-orang di sekitar Anda dari berbagai
            risiko infeksi.
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
