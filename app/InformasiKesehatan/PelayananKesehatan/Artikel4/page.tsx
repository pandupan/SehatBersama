/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
        Strategi Pencegahan Kusta dan Implementasi PHBS oleh Petugas Kesehatan
        </h1>
        <div className="flex items-center justify-between">
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
              Raka Lestari 	
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
              Sabtu, 6 Februari
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/PelayananKesehatan"
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
              src="https://i.ibb.co.com/BrDSJ68/4-fk.jpg" // Ganti dengan URL gambar yang tepat
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
          Penyakit kusta, jika tidak diobati dengan baik, dapat menyebabkan kecacatan. Pengobatan kusta umumnya membutuhkan waktu 6 hingga 12 bulan, tergantung pada kondisi pasien. Salah satu terapi yang umum digunakan untuk pasien kusta adalah terapi MDT (Multi Drug Therapy). Terapi MDT diberikan khususnya di daerah-daerah dengan tingkat kasus kusta yang tinggi. Pemerintah menyediakan obat kusta ini secara gratis di daerah-daerah tersebut, tanpa dipungut biaya.

          </p>
          <p className="text-gray-600 text-justify">
          Dr. Siti Nadia Tarmizi dari Kementerian Kesehatan menjelaskan bahwa akses terhadap terapi MDT dapat dilakukan melalui Puskesmas, yang merupakan cara paling mudah dan terjangkau untuk pasien. Jika Puskesmas di daerah tersebut belum memiliki obat MDT, mereka dapat meminta persediaan obat tersebut dari Dinas Kesehatan setempat. Biasanya, Dinas Kesehatan akan menyimpan obat-obatan kusta karena prevalensi penyakit ini cenderung rendah.

          </p>
          <p className="text-gray-600 text-justify">
          Penting untuk dicatat bahwa kusta sebenarnya merupakan penyakit yang dapat dicegah. Aspek kebersihan personal menjadi kunci dalam pencegahan penularan kusta. Oleh karena itu, penting untuk menerapkan perilaku hidup bersih dan sehat (PHBS). Petugas kesehatan, termasuk nakes, memainkan peran penting dalam mengimplementasikan PHBS di fasilitas kesehatan. Mereka harus menjadi contoh dan memastikan lingkungan di fasilitas kesehatan tetap bersih dan higienis, sehingga risiko penularan kusta dan penyakit lainnya dapat diminimalkan.
          </p>
          <p className="text-gray-600 text-justify">
          Dengan menjaga kebersihan personal dan lingkungan serta mengikuti pedoman PHBS, dapat membantu mencegah penularan kusta dan menjaga kesehatan secara keseluruhan. Oleh karena itu, penting bagi petugas kesehatan untuk terus mengedukasi masyarakat tentang pentingnya PHBS dan memastikan implementasinya di seluruh fasilitas kesehatan.

          </p>
          <h3 className="text-md font-bold text-gray-600">
          Untuk menghindari penyakit kusta atau mencegah terjadinya penyakit kusta itu sendiri, ada beberapa tindakan yang bisa diambil :

          </h3>
          <p className="text-gray-600 text-justify">
         1. Konsultasikan dengan Petugas Kesehatan: Jika Anda memiliki gejala kusta seperti bercak kulit yang kehilangan rasa atau area mati rasa, segera konsultasikan dengan petugas kesehatan setempat. Mereka dapat melakukan pemeriksaan lebih lanjut dan memberikan diagnosis yang tepat. <br />
            <br /> 2. Hindari Kontak Langsung dengan Penderita Kusta: Jika Anda mengetahui atau mencurigai adanya orang yang menderita kusta, hindari kontak langsung dengan mereka, terutama jika Anda memiliki luka terbuka atau luka gores. Penularan kusta umumnya terjadi melalui kontak langsung dengan penderita yang belum diobati.<br />
            <br /> 3. Ikuti Terapi MDT dengan Tepat: Jika Anda didiagnosis menderita kusta, penting untuk mengikuti terapi MDT dengan disiplin sesuai dengan petunjuk dari petugas kesehatan. Jangan menghentikan pengobatan sebelum direkomendasikan, meskipun gejalanya sudah mulai membaik.<br />
            <br /> 4. Perhatikan Kebersihan Diri dan Lingkungan: Selain menjalani terapi, penting juga untuk menjaga kebersihan diri dan lingkungan sekitar. Mandi secara teratur dengan sabun, hindari berbagi barang pribadi seperti handuk, dan jauhi tempat-tempat yang kotor atau berdebu.
            <br />
          </p>
          <p className="text-gray-600 text-justify">
          Dengan mengikuti langkah-langkah tersebut, Anda dapat membantu mencegah penularan kusta dan mempercepat proses pemulihan jika Anda atau seseorang yang Anda kenal terkena penyakit ini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
