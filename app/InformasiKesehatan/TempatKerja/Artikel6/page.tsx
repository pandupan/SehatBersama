import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          5 Tips Menjaga Kesehatan Saat Kerja Shift Malam
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
                Aufi Ramadhania Pasha
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                16 Oktober 2020
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/TempatKerja"
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
              src="https://i.ibb.co.com/hd2Bny0/6-tk.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi Bekerja Shift Malam</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            5 Tips Menjaga Kesehatan Saat Kerja Shift Malam
          </h3>
          <p className="text-gray-600 text-justify">
            Beberapa profesi mengharuskan pekerjanya untuk bekerja di malam
            hari. Ini adalah tanggung jawab yang perlu dijalankan dengan baik,
            tetapi ada risiko kesehatan yang perlu diwaspadai. Apabila tidak
            mampu beradaptasi, kesehatan bisa menurun dan menyebabkan sakit.
            Namun, Anda tidak perlu khawatir. Berikut adalah beberapa tips untuk
            menjaga kesehatan saat bekerja shift malam yang telah dirangkum dari
            berbagai sumber.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            1. Menjaga Pola Makan
          </h3>
          <p className="text-gray-600 text-justify">
            Mengatur pola makan dengan baik sangat penting untuk menjaga
            kesehatan. Pastikan asupan gizi, mineral, dan vitamin yang Anda
            dapatkan cukup untuk mendukung aktivitas sehari-hari yang tidak
            menentu. Pertimbangkan untuk menginstal aplikasi penghitung asupan
            gizi di smartphone Anda. Aplikasi ini dapat membantu mengatur pola
            makan sehingga asupan vitamin, gizi, dan mineral terpenuhi.
            <br />
            Selalu konsumsi air putih yang cukup karena memiliki banyak manfaat
            untuk kesehatan. Lebih baik lagi jika Anda mengonsumsi buah dan
            sayuran agar tubuh tidak kekurangan vitamin dan serat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            2. Menjaga Kebersihan Tubuh dan Lingkungan
          </h3>
          <p className="text-gray-600 text-justify">
            Sumber penyakit dapat berasal dari mana saja, termasuk dari tubuh
            dan lingkungan sekitar. Untuk terhindar dari berbagai penyakit,
            penting untuk menjaga kebersihan tubuh dan lingkungan. Tubuh dan
            lingkungan yang bersih akan mengurangi risiko bakteri dan virus yang
            dapat menyebabkan penyakit.
            <br />
            Selain menjaga kesehatan fisik, kebersihan juga mampu meningkatkan
            kondisi mental dan mood. Kondisi mental yang baik dapat
            menghindarkan Anda dari stres. Usahakan untuk selalu mandi sebelum
            bekerja dan menjaga lingkungan sekitar tetap rapi. Pastikan kamar
            dan meja kerja Anda tertata dengan baik untuk meningkatkan mood.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            3. Menjaga Kuantitas dan Kualitas Tidur
          </h3>
          <p className="text-gray-600 text-justify">
            Tidur adalah hal yang sangat penting, terutama bagi Anda yang
            bekerja di malam hari. Tidur yang berkualitas tidak hanya memberikan
            istirahat tetapi juga meningkatkan mood dan semangat setelah bangun.
            Tetapkan jam tidur yang baik, sekitar 7-8 jam per hari. Hindari
            rokok dan kopi sebelum tidur untuk memastikan tidur yang lebih
            berkualitas.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            4. Berolahraga dengan Teratur
          </h3>
          <p className="text-gray-600 text-justify">
            Meskipun waktu kerja yang tidak beraturan bisa membuat sulit untuk
            berolahraga, tetap penting untuk melakukan aktivitas fisik. Anda
            bisa melakukan olahraga ringan seperti jumping jacks, squat jumps,
            push up, atau olahraga kecil lainnya yang bisa dilakukan di tempat.
            Tidak perlu lama-lama, cukup lakukan olahraga kecil selama 10 hingga
            20 menit setiap hari.
            <br />
            Melakukan olahraga secara teratur akan membantu Anda tetap bugar dan
            tidak mudah lelah saat bekerja pada shift yang berbeda. Kekurangan
            olahraga bisa membuat tubuh lemas dan lesu serta mengganggu kualitas
            tidur. Oleh karena itu, berolahraga secara teratur meskipun dalam
            waktu singkat sangat dianjurkan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            5. Perbanyak Tersenyum
          </h3>
          <p className="text-gray-600 text-justify">
            Senyum adalah tanda suasana hati yang gembira dan dapat membantu
            menghindari stres yang sering dialami oleh pekerja shift malam.
            Banyak tersenyum bukan berarti harus tersenyum sepanjang waktu tanpa
            alasan, tetapi lebih kepada menjalani segala hal dengan rasa nyaman
            dan bahagia. Jaga mood dengan bersosialisasi sehingga bisa lebih
            semangat dalam mengerjakan pekerjaan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pola Hidup Sehat Harus Diterapkan pada Berbagai Situasi
          </h3>
          <p className="text-gray-600 text-justify">
            Pola hidup sehat dengan makanan sehat, tidur cukup dan berkualitas,
            serta olahraga merupakan kunci agar kesehatan tetap terjaga.
            Pastikan tubuh selalu fit dan sehat sehingga tugas bisa dikerjakan
            dengan lebih maksimal. Jika perlu, tambahkan vitamin kesehatan agar
            tubuh tidak mudah sakit.
            <br />
            Dengan mengikuti tips di atas, Anda bisa menjaga kesehatan meskipun
            harus bekerja pada shift malam. Pola hidup sehat tidak hanya penting
            untuk kesehatan fisik tetapi juga mental, sehingga Anda bisa bekerja
            dengan lebih produktif dan bahagia.
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
