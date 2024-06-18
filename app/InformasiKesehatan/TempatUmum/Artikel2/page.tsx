import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">Pengelolaan Limbah Rumah Sakit</h1>
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
              src="https://i.ibb.co/mTJvKsx/nareeta-martin-Fo-G7-PKNYjp-M-unsplash.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi Merokok</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Limbah dari rumah sakit mencakup berbagai bentuk
          </h3>
          <p className="text-gray-600 text-justify">
            Limbah dari rumah sakit mencakup berbagai bentuk, seperti padat,
            cair, dan gas, yang dihasilkan dari berbagai kegiatan medis dan
            pengobatan. Rumah sakit, sebagai tempat berkumpulnya individu yang
            sakit atau sehat, memiliki potensi untuk menjadi sumber penyebaran
            penyakit dan pencemaran lingkungan, serta menghasilkan limbah yang
            berpotensi menularkan penyakit.
          </p>
          <p className="text-gray-600 text-justify">
            Limbah rumah sakit memiliki potensi bahaya bagi lingkungan dan
            masyarakat sekitarnya. Jika tidak dikelola dengan benar sesuai
            dengan peraturan, limbah ini dapat mencemari lingkungan sekitarnya.
            Oleh karena itu, manajemen limbah di rumah sakit sangat penting
            untuk mengurangi risiko tersebut.
          </p>
          <p className="text-gray-600 text-justify">
            Tujuan dari manajemen limbah di rumah sakit adalah:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            1. Mematuhi peraturan yang berlaku dalam pengelolaan limbah medis.
          </p>
          <p className="text-gray-600 text-justify">
            2. Melindungi pasien, petugas kesehatan, pengunjung, dan masyarakat
            sekitar dari penularan infeksi dan cidera.
          </p>
          <p className="text-gray-600 text-justify">
            3. Mengelola bahan-bahan berbahaya seperti limbah sitotoksik,
            radioaktif, gas, limbah infeksius, limbah kimia, dan farmasi dengan
            aman.
          </p>
          <p className="text-gray-600 text-justify">
            4. Mencegah pencemaran lingkungan sekitar rumah sakit.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Rumah sakit harus berupaya mengurangi jumlah limbah yang dihasilkan
          </h3>
          <p className="text-gray-600 text-justify">
            Rumah sakit harus berupaya mengurangi jumlah limbah yang dihasilkan
            dengan strategi seperti mengurangi penggunaan bahan, mendaur ulang
            limbah, dan menggunakan kembali limbah yang layak.
          </p>
          <p className="text-gray-600 text-justify">
            Jenis limbah rumah sakit meliputi:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            1. Limbah radioaktif, yang berasal dari kegiatan medis yang
            menggunakan isotop radioaktif.
          </p>
          <p className="text-gray-600 text-justify">
            2. Limbah sangat infeksius, yang diduga mengandung bahan patogen
            dalam jumlah yang cukup untuk menyebabkan penyakit pada individu
            yang rentan.
          </p>
          <p className="text-gray-600 text-justify">
            3. Limbah patologis dan anatomi, termasuk jaringan tubuh, organ,
            darah, dan cairan tubuh.
          </p>
          <p className="text-gray-600 text-justify">
            4. Limbah sitotoksik, yang terkontaminasi dengan obat sitotoksik
            selama penggunaan atau peracikan.
          </p>
          <p className="text-gray-600 text-justify">
            5. Limbah kimia dan farmasi, termasuk obat-obatan kadaluwarsa atau
            tidak digunakan, yang dibuang dengan benar.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Proses pengelolaan limbah
          </h3>
          <p className="text-gray-600 text-justify">
            Proses pengelolaan limbah meliputi identifikasi, pemisahan,
            labeling, pengangkutan, penyimpanan, dan pembuangan limbah. Limbah
            harus dipisahkan sesuai dengan jenisnya, seperti limbah infeksius,
            non-infeksius, dan benda tajam. Pengangkutan limbah harus dilakukan
            dengan peralatan khusus dan dilengkapi dengan perlindungan diri.
          </p>
          <p className="text-gray-600 text-justify">
            Pengolahan limbah meliputi pembakaran untuk limbah infeksius,
            pengiriman limbah non-infeksius ke tempat pembuangan akhir, dan
            penanganan khusus untuk limbah benda tajam. Limbah berbahaya seperti
            limbah B3 harus diangkut dan dimusnahkan oleh pihak berwenang sesuai
            dengan prosedur yang ditetapkan.
          </p>
          <p className="text-gray-600 text-justify">
            Pengelolaan limbah cair melibatkan pengumpulan dalam kontainer yang
            sesuai dan pengolahan sesuai dengan karakteristik bahan kimia dan
            radiologi. Saluran pembuangan limbah cair harus memenuhi standar
            tertentu untuk mencegah pencemaran lingkungan. Rumah sakit juga
            harus memiliki instalasi pengolahan limbah cair sendiri jika belum
            ada sistem pengolahan limbah perkotaan yang memadai.
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
