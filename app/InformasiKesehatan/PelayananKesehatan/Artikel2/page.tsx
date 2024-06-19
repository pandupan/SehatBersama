/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Mengenal Retrograde Intrarenal Surgery dan Pentingnya PHBS di
          Fasilitas Kesehatan untuk Pencegahan Batu Ginjal Jangka Panjang
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
                A. Firdaus
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Rabu 05 Juni 2024
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
              src="https://i.ibb.co.com/T2pG4Jr/fk-1.jpg" // Ganti dengan URL gambar yang tepat
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
            Menurut data Riset Kesehatan Dasar Nasional (Riskesdas) tahun 2020,
            prevalensi penyakit batu ginjal di Indonesia tercatat sebanyak 3.8%,
            yang setara dengan 739.208 jiwa. Penyakit batu ginjal sering kali
            tidak menunjukkan gejala atau keluhan awal, sehingga batu ginjal
            bisa tumbuh tanpa disadari hingga mencapai ukuran yang signifikan.
          </p>
          <p className="text-gray-600 text-justify">
            Gejala yang umum dialami oleh penderita batu ginjal meliputi nyeri
            pinggang yang hilang timbul, urin berwarna kemerahan atau berdarah,
            urin keruh berpasir atau keluar batu kecil, serta demam dan nyeri
            saat berkemih jika terjadi infeksi. Risiko terkena batu ginjal
            meningkat jika ada riwayat keluarga yang menderita penyakit ini.
            Dehidrasi, terutama bagi mereka yang tinggal di iklim hangat dan
            kering, juga dapat meningkatkan risiko karena tubuh cenderung
            kehilangan banyak cairan.
          </p>
          <p className="text-gray-600 text-justify">
            Konsumsi makanan dengan kadar protein, natrium (garam), dan gula
            yang berlebihan, obesitas, penyakit pencernaan, prosedur bedah
            sebelumnya, dan kondisi medis lain seperti asidosis tubulus ginjal,
            sistinuria, hiperparatiroidisme, serta infeksi saluran kemih
            berulang, juga berkontribusi terhadap peningkatan risiko batu
            ginjal.
          </p>
          <p className="text-gray-600 text-justify">
            Untuk mengatasi masalah batu ginjal, Siloam Hospitals ASRI
            memperkenalkan metode inovatif yaitu Retrograde Intrarenal Surgery
            (RIRS). Metode ini menawarkan berbagai keunggulan dibandingkan
            metode bedah terbuka tradisional. RIRS dilakukan dengan prosedur
            yang lebih cepat, tidak meninggalkan bekas luka, memungkinkan
            pemulihan yang lebih cepat, minim rasa nyeri, dan risiko infeksi
            yang lebih rendah.
          </p>
          <p className="text-gray-600 text-justify">
            Dalam konteks Perilaku Hidup Bersih dan Sehat (PHBS), penerapan
            metode RIRS dapat dianggap sebagai bagian dari upaya meningkatkan
            kualitas layanan kesehatan. Prosedur ini mendukung PHBS dengan
            mengurangi risiko infeksi dan mempercepat pemulihan pasien, sehingga
            mereka dapat kembali beraktivitas dengan normal lebih cepat. Selain
            itu, kesadaran akan pentingnya menjaga hidrasi dan pola makan yang
            sehat juga merupakan bagian dari PHBS yang dapat membantu mencegah
            terbentuknya batu ginjal.
          </p>
          <p className="text-gray-600 text-justify">
            Dengan terus berkembangnya metode perawatan kesehatan di bidang
            urologi dan nefrologi, inovasi seperti RIRS menunjukkan bahwa upaya
            peningkatan kualitas layanan kesehatan dan penerapan PHBS secara
            keseluruhan dapat berjalan beriringan. Melalui edukasi dan penerapan
            teknologi medis yang canggih, diharapkan angka kejadian penyakit
            batu ginjal dapat ditekan dan masyarakat dapat menjalani hidup yang
            lebih sehat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
