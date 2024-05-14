import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          10 Tips Perilaku Hidup Bersih dan Sehat (PHBS) Sehari-hari
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
                Kamis, 04 April 2024
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
              src="https://i.ibb.co/64cJ6XC/dan-gold-4-jh-DO54-BYg-unsplash.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Apakah Anda yakin sudah menjalani pola hidup bersih dan sehat?
            Meskipun terdengar sepele, praktik Perilaku Hidup Bersih dan Sehat
            (PHBS) seringkali masih diabaikan oleh banyak orang. Padahal,
            menerapkan kebiasaan ini tidak hanya melindungi diri sendiri dari
            penyakit, tetapi juga menjaga kesehatan orang-orang di sekitar kita.
            Untuk itu, penting memahami arti sebenarnya dari PHBS melalui ulasan
            berikut ini.
          </h3>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Apa saja yang termasuk dalam indikator PHBS?
          </h3>
          <p className="text-gray-600 text-justify">
            PHBS adalah gerakan untuk menjaga kesehatan dan kualitas hidup
            seseorang melalui berbagai perilaku yang dipraktikkan atas kesadaran
            pribadi demi mencapai kehidupan yang sehat. Menurut Kementerian
            Kesehatan Republik Indonesia, PHBS perlu diterapkan di berbagai
            tempat, seperti rumah tangga, institusi pendidikan, tempat kerja,
            tempat umum, hingga fasilitas kesehatan. Namun, secara umum, hidup
            bersih dan sehat dapat dimulai dari diri sendiri, yakni dengan
            kebiasaan di rumah.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Berikut adalah berbagai indikator yang menentukan keberhasilan
            seseorang dalam menjalankan PHBS di rumah tangga:
          </h3>
          <h3 className="text-black font-semibold text-justify">
            1. Cuci tangan dengan sabun dan air mengalir:
          </h3>
          <p className="text-gray-600 text-justify">
            Gosok kedua telapak tangan: Gunakan sabun dan air bersih, lalu gosok
            kedua telapak tangan hingga seluruh permukaan tangan terkena sabun.
          </p>
          <h3 className="text-black font-semibold text-justify">
            2. Menggunakan air bersih:
          </h3>
          <p className="text-gray-600 text-justify">
            Air bersih sangat penting untuk berbagai aktivitas, seperti makan,
            minum, mandi, buang air, dan mencuci baju. Pastikan rumah Anda
            memiliki akses air bersih untuk mewujudkan kehidupan yang bersih dan
            sejahtera.
          </p>
          <h3 className="text-black font-semibold text-justify">
            3. Menggunakan toilet dan menjaga kebersihannya:
          </h3>
          <p className="text-gray-600 text-justify">
            Toilet yang bersih adalah indikator PHBS. Rumah yang bersih harus
            memiliki sanitasi yang berfungsi baik dan terjaga kebersihannya
            untuk menghindari sarang bakteri dan virus.
          </p>
          <h3 className="text-black font-semibold text-justify">
            4. Rutin berolahraga:
          </h3>
          <p className="text-gray-600 text-justify">
            Membiasakan diri beraktivitas fisik secara rutin menandakan pola
            hidup bersih dan sehat. Berolahraga setidaknya 30 menit setiap hari
            meningkatkan kebugaran tubuh dan mencegah berbagai penyakit.
          </p>
          <h3 className="text-black font-semibold text-justify">
            5. Konsumsi makanan sehat dan bergizi:
          </h3>
          <p className="text-gray-600 text-justify">
            Apa yang Anda makan dan minum berpengaruh besar pada PHBS. Konsumsi
            banyak sayur dan buah untuk memenuhi kebutuhan gizi harian dan
            perhatikan cara mengolah makanan untuk mencegah kontaminasi bakteri.
          </p>
          <h3 className="text-black font-semibold text-justify">
            6. Hindari kebiasaan merokok:
          </h3>
          <p className="text-gray-600 text-justify">
            Merokok berdampak buruk pada kesehatan, meningkatkan risiko penyakit
            paru-paru dan jantung. Mulailah mengurangi kebiasaan merokok hingga
            berhenti sepenuhnya.
          </p>
          <h3 className="text-black font-semibold text-justify">
            7. Membasmi sarang nyamuk:
          </h3>
          <p className="text-gray-600 text-justify">
            Memberantas sarang nyamuk adalah bagian penting dari PHBS untuk
            mencegah penyakit yang ditularkan dari gigitan nyamuk seperti DBD
            dan chikungunya.
          </p>
          <h3 className="text-black font-semibold text-justify">
            8. Memakai masker saat keluar rumah:
          </h3>
          <p className="text-gray-600 text-justify">
            Saat kasus penyakit tinggi atau pandemi seperti COVID-19, memakai
            masker di luar rumah dapat mengurangi risiko tertular penyakit dan
            melindungi orang lain.
          </p>
          <h3 className="text-black font-semibold text-justify">
            9. Menjaga jarak fisik dari orang lain:
          </h3>
          <p className="text-gray-600 text-justify">
            Usahakan menjaga jarak fisik setidaknya 2 meter saat beraktivitas di
            luar rumah untuk mencegah penyebaran penyakit.
          </p>
          <h3 className="text-black font-semibold text-justify">
            10. Memelihara kesehatan mulut dan gigi:
          </h3>
          <p className="text-gray-600 text-justify">
            Jaga kesehatan mulut karena mulut adalah akses masuknya bakteri,
            kuman, dan virus ke tubuh. Selain sikat dan flossing gigi rutin,
            gunakan obat kumur yang efektif mengurangi plak.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Selain indikator-indikator di atas, PHBS di rumah tangga juga
            mencakup kesejahteraan ibu dan anak, seperti memberikan ASI
            eksklusif, persalinan dengan bantuan tenaga medis, memantau tumbuh
            kembang anak, memberikan imunisasi sesuai jadwal, dan menjaga
            kebersihan diri serta rumah.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Dengan menjalankan pola hidup bersih dan sehat, Anda akan
            mendapatkan manfaat seperti:
          </h3>
          <p className="text-black font-semibold text-justify">
            1. Terhindar dari berbagai penyakit:
          </p>
          <p className="text-gray-600 text-justify">
            PHBS menjauhkan Anda dari risiko penyakit yang disebabkan oleh
            infeksi bakteri, virus, dan jamur.
          </p>
          <p className="text-black font-semibold text-justify">
            2. Memaksimalkan tumbuh kembang anak:
          </p>
          <p className="text-gray-600 text-justify">
            Menerapkan PHBS mendukung pertumbuhan dan perkembangan anak,
            menghindari gangguan seperti stunting.
          </p>
          <p className="text-black font-semibold text-justify">
            3. Meningkatkan produktivitas:
          </p>
          <p className="text-gray-600 text-justify">
            Tubuh dan pikiran yang sehat meningkatkan performa belajar dan
            aktivitas kerja.
          </p>
          <p className="text-black font-semibold text-justify">
            4. Menjaga kebersihan tempat tinggal:
          </p>
          <p className="text-gray-600 text-justify">
            PHBS menjadikan rumah sebagai tempat tinggal yang nyaman dan bebas
            dari sumber penyakit
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-xl sm:text-2xl font-bold">
            Dengan menerapkan PHBS dalam kehidupan sehari-hari, Anda tidak hanya
            melindungi diri sendiri tetapi juga berkontribusi pada kesehatan
            masyarakat sekitar.
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
