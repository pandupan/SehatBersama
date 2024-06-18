import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Upaya Penanaman Budaya Perilaku Hidup Bersih dan Sehat di Sekolah
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
                16 Februari 2024
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/InstitusiPendidikan"
              className="bg-[#1dbbb4] rounded-md text-white sm:text-base text-xs px-2 py-2 sm:px-10 sm:py-2"
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="relative w-full aspect-video flex justify-center items-center rounded-md bg-gray-100 overflow-hidden">
            <img
              src="https://i.ibb.co.com/cFwY5cg/d9a29937fa29ba9bc5a6c1cf48795cbe.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi Perilaku Bersih</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Lembaga Pembinaan Khusus Anak (LPKA) Kelas II Palu dan Mahasiswa
            Profesi Ners
          </h3>
          <p className="text-gray-600 text-justify">
            Penerapan Perilaku Hidup Bersih dan Sehat (PHBS) di lingkungan
            sekolah sangat penting untuk memastikan kesehatan dan keselamatan
            semua siswa, staf, dan warga sekolah lainnya. Lingkungan pendidikan
            yang sehat tidak hanya menciptakan kondisi belajar yang optimal
            tetapi juga melindungi dari risiko penyakit. Berbagai indikator PHBS
            di tingkat SMP dan pendidikan sederajat perlu diperhatikan sesuai
            dengan pedoman yang telah ditetapkan. Contoh indikator ini mencakup
            praktik konsumsi jajanan sehat di kantin, kebiasaan mencuci tangan
            dengan sabun dan air mengalir, pemilahan dan pembuangan sampah yang
            tepat, pengendalian jentik nyamuk, larangan merokok di area sekolah,
            promosi membawa makanan sehat, serta perawatan kebersihan diri dan
            kesehatan reproduksi yang teratur.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Implementasi PHBS di sekolah tidak hanya berfokus pada aspek fisik
            semata, tetapi juga memperhatikan edukasi dan pembiasaan perilaku
            sehat sebagai bagian integral dari kehidupan sehari-hari. Upaya ini
            tidak hanya bertujuan untuk mengurangi risiko penyakit infeksius dan
            non-infeksius di kalangan siswa dan staf, tetapi juga untuk
            meningkatkan kesadaran akan pentingnya menjaga kesehatan secara
            menyeluruh. Dengan demikian, pendidikan kesehatan melalui PHBS
            diharapkan dapat memberikan kontribusi positif dalam menciptakan
            lingkungan belajar yang aman, produktif, dan mendukung perkembangan
            optimal bagi seluruh komunitas sekolah.
          </p>
          <p className="text-gray-600 text-justify">
            Upaya penanaman perilaku hidup bersih dan sehat di sekolah Selain
            memperhatikan indikator PHBS, juga dilakukan upaya penanaman
            perilaku hidup bersih dan sehat di lingkungan sekolah.
            <br />
            <br />
            Berikut beberapa langkah yang dapat kita lakukan:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-700">
            1. Meningkatkan Literasi Kesehatan
          </h3>
          <p className="text-gray-600 text-justify">
            Literasi merupakan hal yang sangat mendasar. Hal ini diperlukan
            untuk meningkatkan pemahaman warga sekolah hingga terjadi perubahan
            perilaku mengenai tindakan standar yang harus dilakukan siswa untuk
            mencegah penyebaran penyakit, khususnya infeksi virus corona.
            Peningkatan kemampuan literasi dapat dimulai dari hal yang paling
            mendasar seperti melakukan 3M, melakukan aktivitas kebugaran
            jasmani, dan menjaga pola makan yang sehat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-700">
            2. Penguatan komunitas sekolah lebih lanjut
          </h3>
          <p className="text-gray-600 text-justify">
             Penguatan komunitas sekolah
            juga perlu dilakukan melalui berbagai upaya kesehatan di sekolah.
            Contohnya seperti imbauan sekolah KTR (Kawasan Dilarang Merokok),
            imbauan CTPS (Cuci Tangan Pakai Sabun), imbauan Gigi Sehat, imbauan
            Senyum Cerah, dan masih banyak lagi yang lainnya.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-700">
            3. Memanfaatkan fasilitas UKS Usaha Kesehatan Sekolah (UKS)
          </h3>
          <p className="text-gray-600 text-justify">
            Memanfaatkan fasilitas UKS Usaha Kesehatan Sekolah (UKS) merupakan
            salah satu fasilitas penting dalam penerapan PHBS di lingkungan
            sekolah. Kita perlu memanfaatkan UKS sebagai fasilitas kesehatan
            dasar sekolah. Oleh karena itu, Direktorat SMP juga melaksanakan
            program pembinaan dan pengembangan UKS.
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
