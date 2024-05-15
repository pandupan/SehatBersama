/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Penerapan RME Jamin Kemudahan Akses Layanan Kesehatan Masyarakat
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
                07 November 2023
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="https://sehatnegeriku.kemkes.go.id/baca/umum/20231107/3844203/penerapan-rme-jamin-kemudahan-akses-layanan-kesehatan-masyarakat/"
              className="bg-[#1dbbb4] rounded-md text-white sm:text-base text-xs px-2 py-2 sm:px-10 sm:py-2"
            >
              Sumber
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
            <img
              src="https://sehatnegeriku.kemkes.go.id/wp-content/uploads/2023/11/a1b4366a-4697-4a96-92e1-f8a7d65ab346.jpeg" // Ganti dengan URL gambar yang tepat
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
            Pemerintah Indonesia terus berupaya meningkatkan akses layanan kesehatan yang murah dan berkualitas melalui pemanfaatan teknologi digital. Salah satu langkah utamanya adalah penerapan Rekam Medis Elektronik (RME) di fasilitas kesehatan di seluruh Indonesia. Inisiatif ini bertujuan untuk mempercepat, mempermudah, dan meningkatkan transparansi akses layanan kesehatan.
          </p>
          <p className="text-gray-600 text-justify">
            Menteri Kesehatan, Budi Gunadi Sadikin, menjelaskan bahwa RME akan menstandarisasi pertukaran data kesehatan, sehingga layanan kesehatan menjadi lebih cepat, mudah, dan transparan. “Penerapan RME tidak hanya memudahkan akses data kesehatan tetapi juga mengurangi asimetri informasi yang menyebabkan biaya kesehatan mahal,” kata Menkes Budi saat acara AeHIN General Meeting 2023 di Jakarta.
          </p>
          <p className="text-gray-600 text-justify">
            Penerapan RME di Indonesia sudah diatur dalam Peraturan Menteri Kesehatan (PMK No. 24 Tahun 2022) tentang Rekam Medis yang diterbitkan pada Agustus tahun lalu. Upaya transformasi digital ini juga diperkuat oleh Undang-Undang No. 17 Tahun 2023 tentang Kesehatan. Melalui regulasi ini, seluruh data kesehatan akan disimpan dalam platform big data SATUSEHAT, yang berfungsi sebagai ekosistem data kesehatan nasional.
          </p>
          <p className="text-gray-600 text-justify">
            Lebih dari 60.000 fasilitas kesehatan di Indonesia, termasuk lebih dari 10.000 fasilitas perawatan primer, 17.000 klinik swasta, 3.000 rumah sakit, 1.000 laboratorium, dan lebih dari 30.000 apotek, akan terintegrasi ke dalam SATUSEHAT. Dengan demikian, semua fasilitas kesehatan diharapkan dapat menerapkan RME, meliputi digitalisasi data kesehatan, penerapan standar terminologi data, protokol keamanan data, dan protokol interoperabilitas.
          </p>
          <p className="text-gray-600 text-justify">
            Data individu akan otomatis menjadi bagian dari demografi pada Sistem Informasi Kesehatan kecuali jika pemilik data menolak. Platform SATUSEHAT akan memungkinkan akses data yang sebelumnya terbatas. Selain itu, Kementerian Kesehatan juga mengembangkan Ilmu Biomedis & Genom Inisiatif (BGSi) untuk mendorong pengobatan presisi di berbagai rumah sakit di Indonesia. Integrasi genomik ke dalam layanan kesehatan melalui SATUSEHAT diharapkan mendorong kemajuan pengobatan yang lebih tepat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
