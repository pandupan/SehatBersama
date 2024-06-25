import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Implementasi PHBS untuk Meningkatkan Kesehatan Anak Sekolah Dasar
          dengan Gizi Seimbang
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
                Ratnaningtyas Winahyu
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                19 Juni 2024
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
              src="https://i.ibb.co.com/1bqXcJb/7-p.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Ilustrasi Makanan Bergizi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Implementasi PHBS untuk Meningkatkan Kesehatan Anak Sekolah Dasar
            dengan Gizi Seimbang
          </h3>
          <p className="text-gray-600 text-justify">
            Anak-anak pada usia sekolah dasar membutuhkan asupan gizi yang
            seimbang untuk mendukung pertumbuhan fisik, perkembangan otak, dan
            kesehatan secara keseluruhan. Gizi yang cukup membantu mereka
            menjaga energi tinggi untuk kegiatan belajar dan bermain sepanjang
            hari. Dalam masa pertumbuhan yang pesat ini, penting untuk
            memastikan bahwa mereka mendapatkan nutrisi yang cukup melalui
            makanan yang seimbang dan berkualitas.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Kebutuhan Gizi Anak Sekolah Dasar
          </h3>
          <p className="text-gray-600 text-justify">
            1. Karbohidrat <br />
            Karbohidrat adalah sumber energi utama bagi anak-anak. Mereka
            membutuhkan energi ini untuk mendukung aktivitas belajar dan
            bermain. Pilihan karbohidrat sehat meliputi nasi, roti gandum,
            pasta, kentang, dan sereal.
            <br /> 2. Protein <br />
            Protein penting untuk pertumbuhan otot, jaringan, dan sistem
            kekebalan tubuh. Sumber protein yang baik meliputi daging, ikan,
            telur, kacang-kacangan, dan produk susu.
            <br /> 3. Lemak Sehat
            <br /> Lemak sehat diperlukan untuk perkembangan otak dan penyerapan
            vitamin. Mereka dapat ditemukan dalam ikan berlemak seperti salmon,
            minyak zaitun, alpukat, dan kacang-kacangan.
            <br /> 4. Vitamin dan Mineral <br />
            Vitamin dan mineral penting untuk berbagai fungsi tubuh, termasuk
            penglihatan, sistem kekebalan tubuh, dan pertumbuhan tulang.
            Pastikan anak-anak mendapatkan cukup vitamin A, C, kalsium, dan zat
            besi melalui makanan seperti wortel, buah jeruk, susu, dan bayam.
            <br /> 5. Serat <br />
            Serat membantu menjaga kesehatan pencernaan dan mencegah sembelit.
            Anak-anak sebaiknya mengonsumsi buah-buahan, sayuran, biji-bijian,
            dan kacang-kacangan untuk memenuhi kebutuhan serat mereka.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Makanan Sehat untuk Anak Sekolah Dasar
          </h3>
          <p className="text-gray-600 text-justify">
            - Sarapan: <br />
            Sarapan adalah waktu makan yang penting bagi anak-anak. Sarapan
            sehat dapat mencakup sereal gandum utuh dengan susu, telur rebus,
            roti gandum dengan selai kacang, dan buah segar.
            <br /> - Makan Siang:
            <br />
            Pastikan makan siang mereka mengandung karbohidrat, protein, dan
            sayuran. Contoh makan siang sehat termasuk nasi dengan ayam
            panggang, sayuran rebus, dan buah potong.
            <br /> - Camilan Sehat:
            <br />
            Camilan sehat membantu menjaga energi anak-anak di antara waktu
            makan. Beberapa pilihan camilan sehat meliputi yogurt, buah-buahan,
            kacang-kacangan, dan sayuran dengan hummus.
            <br /> - Makan Malam: <br />
            Makan malam harus mencakup semua kelompok makanan utama. Pasta
            dengan saus tomat dan daging, salad hijau, dan susu adalah contoh
            makan malam yang seimbang.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Implementasi PHBS di Lingkungan Pendidikan
          </h3>
          <p className="text-gray-600 text-justify">
            Implementasi Perilaku Hidup Bersih dan Sehat (PHBS) di sekolah
            sangat penting untuk menciptakan lingkungan belajar yang sehat dan
            mendukung. Berikut langkah-langkah yang bisa diambil:
          </p>
          <p className="text-gray-600 text-justify">
            1. Edukasi Gizi <br />
            Sertakan pendidikan gizi dalam kurikulum sekolah untuk meningkatkan
            kesadaran akan pentingnya makanan sehat dan gizi seimbang.
            <br /> 2. Fasilitas Kesehatan <br />
            Pastikan tersedianya fasilitas air bersih, sanitasi yang baik, serta
            makanan dan minuman sehat di kantin sekolah.
            <br /> 3. Promosi Gaya Hidup Sehat
            <br /> Selain makanan, ajak siswa untuk aktif bergerak dengan
            menyediakan waktu istirahat yang cukup untuk berolahraga dan bermain
            di luar ruangan.
            <br /> 4. Kemitraan dengan Orang Tua <br />
            Libatkan orang tua dalam mendukung gizi seimbang anak dengan
            menyelenggarakan seminar atau workshop tentang pola makan sehat dan
            PHBS.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
          Memenuhi kebutuhan gizi anak sekolah dasar sangat penting, tidak hanya untuk kesehatan mereka saat ini, tetapi juga untuk membentuk kebiasaan makan sehat yang berkelanjutan hingga dewasa. Dengan menerapkan prinsip Perilaku Hidup Bersih dan Sehat (PHBS) di lingkungan pendidikan, kita dapat menciptakan suasana belajar yang optimal dan mendukung perkembangan anak secara menyeluruh.
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
