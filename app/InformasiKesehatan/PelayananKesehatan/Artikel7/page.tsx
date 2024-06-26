/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          4 Strategi Pemerintah Kendalikan TB di Indonesia
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
                Rokom
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                05 September 2023
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
              src="https://www.lalpathlabs.com/blog/wp-content/uploads/2018/03/Tuberculosis-TB.jpg" // Ganti dengan URL gambar yang tepat
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
            Tuberkulosis (TB) masih menjadi masalah kesehatan serius di Indonesia. Berdasarkan Global TB Report 2022, Indonesia menempati posisi kedua di dunia setelah India dengan beban TB tertinggi, yaitu dengan estimasi 969.000 kasus dan 144.000 kematian per tahun. Untuk mengatasi masalah ini, pemerintah Indonesia menetapkan target eliminasi TB pada tahun 2030 dengan menerapkan empat strategi nasional.
          </p>
          <p className="text-gray-600 text-justify">
            Strategi pertama adalah menambah fasilitas pelayanan kesehatan yang mampu mengidentifikasi TB. Saat ini, jumlah fasilitas kesehatan (fasyankes) yang mampu mengidentifikasi TB masih terbatas. Pemerintah berencana untuk menambah dan melengkapi fasilitas tersebut dengan sarana dan prasarana yang mendukung proses identifikasi dan pengobatan TB secara bertahap.
          </p>
          <p className="text-gray-600 text-justify">
            Strategi kedua adalah memperkuat dan memperluas surveilans berbasis laboratorium. Pemeriksaan TB ke depan tidak hanya akan menggunakan Tes Cepat Molekuler (TCM), tetapi juga laboratorium PCR yang tersebar di seluruh Indonesia dan menggunakan reagen produksi dalam negeri. Hal ini disampaikan oleh Menteri Kesehatan dalam kegiatan 5th INA-TIME bertajuk “Stepping up research to end TB”.
          </p>
          <p className="text-gray-600 text-justify">
            Strategi ketiga adalah membentuk TB Army, sebuah inisiatif pelacakan pasien initial Lost to Follow Up (iLTFU) TBC Resisten Obat (RO) dengan melibatkan peran penyintas TB dan organisasi TB. TB Army pertama kali diinisiasi pada Oktober 2022 dan dikembangkan di beberapa daerah. Pilot project dilaksanakan di 6 kabupaten/kota, dan selama piloting, TB Army telah melacak 96 orang dengan TB RO. Menteri Kesehatan Budi G. Sadikin meluncurkan TB Army secara resmi pada Selasa (29/8).
          </p>
          <p className="text-gray-600 text-justify">
            Strategi keempat adalah mengembangkan vaksin TB. Pemerintah saat ini sedang mengembangkan tiga jenis vaksin TB yang menggunakan teknologi berbeda-beda. Vaksin pertama berbasis protein rekombinan dari Bill and Melinda Gates Foundation (BMGF), vaksin kedua berbasis viral vektor yang dikembangkan oleh CanSino-Etana, dan vaksin ketiga berbasis mRNA yang dikembangkan oleh BioNTech bekerja sama dengan Biofarma. Dirjen Maxi menambahkan bahwa Kemenkes tengah meneliti mekanisme baru pengobatan bagi pasien TB RO agar pengobatan yang saat ini memakan waktu 20 bulan dapat dipercepat.
          </p>
          <p className="text-gray-600 text-justify">
            Dengan keempat strategi ini, Dirjen Maxi berharap semua pihak, termasuk masyarakat, dapat bekerja sama untuk mengeliminasi TB. "Kita harus agresif karena kita berbicara tentang penyakit yang kematiannya melebihi COVID-19. Penyakit yang sudah puluhan tahun tidak bisa kita selesaikan, namun dengan kerjasama yang baik, kita pasti bisa menuntaskannya," tutup Dirjen Maxi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
