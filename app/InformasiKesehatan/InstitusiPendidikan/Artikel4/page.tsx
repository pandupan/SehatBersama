import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Manfaat Aktivitas Fisik untuk Kesehatan dan Kesejahteraan: Memulai
          Hidup Sehat dari Sekarang
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
              src="https://i.ibb.co.com/612YZtJ/istockphoto-671375670-1024x1024.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Ilustrasi Aktivitas Fisik</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Melakukan aktivitas fisik secara teratur memberikan banyak manfaat
            yang signifikan bagi kesehatan dan kesejahteraan kita.
          </h3>
          <p className="text-gray-600 text-justify">
            Aktivitas fisik tidak hanya membantu meningkatkan kebugaran fisik,
            tetapi juga memiliki dampak positif dalam mengendalikan berat badan,
            tekanan darah, serta meningkatkan daya tahan tubuh. Selain itu,
            aktivitas fisik secara teratur dapat meningkatkan fungsi organ vital
            seperti jantung, paru-paru, dan otot, menjaga agar mereka tetap kuat
            dan berfungsi optimal.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Aktivitas fisik tidak selalu harus berarti melakukan olahraga
            formal. Segala bentuk aktivitas fisik, termasuk bermain atau
            melakukan kegiatan sehari-hari yang melibatkan gerakan tubuh, dapat
            memberikan manfaat yang sama. Misalnya, berjalan kaki, naik tangga,
            atau bahkan melakukan pekerjaan rumah tangga dapat menjadi bagian
            dari rutinitas aktivitas fisik kita sehari-hari.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Selain manfaat fisik yang nyata, aktivitas fisik juga memiliki
            dampak positif pada kesehatan mental dan kognitif. Penelitian
            menunjukkan bahwa aktivitas fisik yang teratur dapat meningkatkan
            fungsi otak, mempertahankan daya ingat, serta meningkatkan
            keterampilan berpikir. Ini sangat penting, terutama dalam konteks
            pendidikan, di mana kemampuan kognitif yang baik memungkinkan
            peserta didik untuk belajar dengan lebih efektif dan menyerap
            informasi dengan lebih baik.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Oleh karena itu, penting bagi kita untuk memperkenalkan kebiasaan
            hidup sehat, termasuk aktivitas fisik, sedini mungkin kepada
            generasi muda. Dengan memulai kebiasaan ini sejak dini, kita tidak
            hanya membantu mereka tumbuh dengan tubuh yang kuat dan sehat,
            tetapi juga membantu mereka mengembangkan keterampilan kognitif yang
            penting untuk masa depan mereka.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Secara keseluruhan, aktivitas fisik secara teratur adalah bagian
            integral dari gaya hidup sehat yang harus dipromosikan dan
            diterapkan di semua kalangan masyarakat. Dengan mengenalkan dan
            mendorong pentingnya aktivitas fisik, kita dapat membantu individu
            untuk hidup lebih lama, lebih sehat, dan lebih bahagia. Itulah
            mengapa penting untuk terus mendukung dan memotivasi diri sendiri
            serta orang lain untuk tetap aktif secara fisik setiap hari.
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
