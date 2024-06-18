/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pentingnya Gizi Seimbang untuk Kesehatan dan Perkembangan Anak Sekolah
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
                15 Februari 2024
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
          <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
            <img
              src="https://i.ibb.co.com/4jLbNzM/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi Makanan Bergizi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Kegiatan Pengabdian Masyarakat Oleh Mahasiswa (PMM)
          </h3>
          <p className="text-gray-600 text-justify">
            Kesehatan dan kesejahteraan anak sekolah merupakan aspek yang sangat
            penting dalam proses pendidikan. Salah satu faktor penentu kesehatan
            yang krusial adalah asupan gizi yang seimbang. Anak-anak memerlukan
            gizi yang cukup setiap harinya, yang dapat diperoleh dari berbagai
            jenis makanan dan minuman. Gizi ini berperan sebagai sumber energi,
            mendukung pertumbuhan, memperbaiki sel-sel yang rusak, dan menjaga
            kesehatan secara keseluruhan. Oleh karena itu, penting bagi kita
            untuk memahami dan memenuhi kebutuhan gizi anak-anak agar mereka
            dapat tumbuh dan berkembang dengan optimal.
          </p>
          <p className="text-gray-600 text-justify">
            Anak sekolah membutuhkan gizi setiap harinya, yang diperoleh dari
            berbagai makanan dan minuman. Gizi yang cukup sangat penting karena
            digunakan sebagai sumber energi, mendukung pertumbuhan, menggantikan
            sel-sel yang rusak, dan menjaga kesehatan secara keseluruhan.
            Kebutuhan gizi ini bervariasi antara individu, tergantung pada jenis
            kelamin, kelompok usia, tingkat aktivitas fisik, dan kondisi
            fisiologis masing-masing. Oleh karena itu, memahami kebutuhan gizi
            yang spesifik sangat penting untuk memastikan anak-anak mendapatkan
            asupan yang tepat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            PHBS membantu menciptakan sekolah yang lebih sehat.
          </h3>
          <p className="text-gray-600 text-justify">
            Di sekolah, Perilaku Hidup Bersih dan Sehat (PHBS) adalah upaya
            untuk memberdayakan siswa, guru, dan masyarakat di sekitar sekolah
            untuk tahu, ingin, dan mampu melakukan PHBS. Ini sangat penting
            untuk anak-anak usia dini karena PHBS membentuk kebiasaan yang akan
            mempengaruhi kesehatan mereka di masa dewasa. PHBS juga membantu
            menciptakan sekolah yang lebih sehat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Untuk mencapai gizi seimbang, anak-anak perlu mengonsumsi beraneka
            ragam pangan. Tidak cukup hanya mengandalkan satu jenis makanan,
            karena tubuh membutuhkan berbagai nutrisi yang tidak bisa didapatkan
            dari satu sumber saja. Beraneka ragam pangan mencakup sayuran,
            buah-buahan, protein dari daging, ikan, atau kacang-kacangan, serta
            karbohidrat dari biji-bijian. Dengan pola makan yang bervariasi,
            kebutuhan vitamin, mineral, protein, dan energi dapat terpenuhi
            dengan baik.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Selain itu, membiasakan perilaku hidup bersih juga merupakan bagian
            integral dari mencapai gizi seimbang. Kebersihan dalam proses
            pengolahan dan penyimpanan makanan sangat penting untuk mencegah
            kontaminasi dan penyakit yang dapat mengganggu kesehatan anak-anak.
            Membiasakan cuci tangan sebelum makan, menjaga kebersihan alat
            makan, dan memastikan makanan disimpan dengan benar adalah
            langkah-langkah sederhana namun efektif untuk mendukung kesehatan
            anak.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold">
        Aktivitas fisik juga tidak kalah penting dalam menjaga keseimbangan
        gizi.
          </h3>
          <p className="text-gray-600 text-justify">
            Aktivitas fisik membantu dalam proses metabolisme tubuh,
            meningkatkan sirkulasi darah, dan menjaga kebugaran fisik. Anak-anak
            yang aktif secara fisik cenderung memiliki pola makan yang lebih
            baik dan lebih teratur. Oleh karena itu, menggabungkan pola makan
            sehat dengan aktivitas fisik yang cukup adalah kunci untuk mendukung
            pertumbuhan dan kesehatan anak secara menyeluruh.
          </p>
          <p className="text-gray-600 text-justify">
            Untuk memastikan anak sekolah tumbuh sehat dan aktif, mereka
            membutuhkan gizi seimbang yang diperoleh dari berbagai makanan dan
            minuman. Kebutuhan gizi ini berbeda-beda tergantung pada berbagai
            faktor seperti jenis kelamin, usia, aktivitas fisik, dan kondisi
            fisiologis. Konsumsi beraneka ragam pangan, perilaku hidup bersih,
            dan aktivitas fisik yang cukup adalah langkah-langkah penting dalam
            mencapai gizi seimbang. Dengan pendekatan yang holistik ini, kita
            dapat mendukung perkembangan optimal anak-anak, menjadikan mereka
            lebih sehat, kuat, dan siap menghadapi tantangan belajar dan
            kehidupan sehari-hari.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
