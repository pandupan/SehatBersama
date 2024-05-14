import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
        Ini Aturan Hukum Merokok di Tempat Umum, Melanggar Bisa Dipidana!
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
              Jumat, 23 Februari 2024
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
              src="https://i.ibb.co/cczLMXL/hipwee-SAVE-20210427-171636-640x422.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Ilustrasi Merokok
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Merokok di tempat umum dapat berujung pada hukuman pidana
          </h3>
          <p className="text-gray-600 text-justify">
          Merokok di tempat umum dapat berujung pada hukuman pidana, terutama di area yang telah ditetapkan sebagai kawasan tanpa rokok atau area dilarang merokok. Kawasan tanpa rokok (KTR) merupakan ruang atau area yang secara tegas dinyatakan bebas dari kegiatan merokok dan kegiatan terkait tembakau. Dasar hukum untuk setiap KTR telah diatur dalam Undang-Undang Republik Indonesia.
          </p>
          <p className="text-gray-600 text-justify">
          Sayangnya, masih sering kita temui orang-orang yang merokok tanpa mempedulikan lingkungan sekitar, padahal asap rokok memiliki dampak berbahaya bagi kesehatan manusia dan lingkungan. Jika Anda terganggu oleh perokok sembarangan, Anda berhak untuk menegurnya bahkan melaporkannya ke pihak yang berwenang.
          </p>
          <p className="text-gray-600 text-justify">
          Aturan terkait kawasan dilarang merokok ditetapkan sebagai upaya untuk melindungi dan mengurangi dampak merokok terhadap lingkungan. Ini juga sebagai respon atas tingginya angka kematian yang disebabkan oleh rokok, baik bagi perokok aktif maupun pasif.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Pasal 115 Ayat (1) UU Kesehatan</h3>
          <p className="text-gray-600 text-justify">
          Pasal 115 Ayat (1) UU Kesehatan mengatur bahwa kawasan tanpa rokok mencakup beberapa tempat seperti fasilitas kesehatan, tempat pendidikan, tempat bermain anak, tempat ibadah, angkutan umum, dan tempat kerja. Namun, tempat kerja, tempat umum, dan tempat lainnya masih diizinkan menyediakan area khusus untuk merokok.
          </p>
          <p className="text-gray-600 text-justify">
          Pemerintah telah memberikan sanksi pidana bagi pelanggar aturan merokok di kawasan dilarang merokok, sebagaimana diatur dalam Undang-Undang Nomor 32 Tahun 2010 tentang Larangan Merokok. Pelanggar dapat dikenakan pidana penjara hingga dua tahun atau denda maksimal Rp200.000.000,00.
          </p>
          <p className="text-gray-600 text-justify">
          Berkendara sambil merokok juga dapat berujung pada sanksi hukum, mengingat abu rokok dapat mencelakakan orang lain di jalanan. Undang-Undang Nomor 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan (UU LLAJ) mengatur bahwa setiap pengemudi kendaraan bermotor wajib mengemudikan kendaraannya dengan penuh kesadaran. Pemerintah telah mengeluarkan peraturan untuk melarang pengemudi sepeda motor merokok dan melakukan aktivitas lain yang mengganggu konsentrasi, dengan ancaman pidana kurungan hingga tiga bulan atau denda maksimal Rp750.000,00.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Bahaya merokok bagi kesehatan dan lingkungan telah terbukti dengan jelas</h3>
          <p className="text-gray-600 text-justify">
          meskipun masih banyak orang yang belum menyadari atau menghentikan kebiasaan tersebut. Merokok dapat menyebabkan berbagai penyakit serius seperti kanker paru-paru dan penyakit jantung, serta dapat mencemari lingkungan dengan menurunkan kualitas air dan mengancam ekosistem laut. Oleh karena itu, penegakan aturan tentang larangan merokok di tempat umum sangat penting untuk menjaga kesehatan dan kelestarian lingkungan.
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
