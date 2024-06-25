import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Menerapkan Perilaku Hidup Bersih dan Sehat (PHBS) di Pondok Pesantren
          untuk Pencegahan Penyakit Menular
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
                Tasya
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                07 Juni 2024
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
              src="https://i.ibb.co.com/ZxgY3Hz/6-P.png"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi Bakteri</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Penyakit menular merupakan salah satu ancaman serius bagi kesehatan
            masyarakat
          </h3>
          <p className="text-gray-600 text-justify">
            Penyakit menular merupakan salah satu ancaman serius bagi kesehatan
            masyarakat, terutama di lingkungan yang padat seperti pondok
            pesantren, sebuah lembaga pendidikan yang kerap menjadi tempat
            tinggal dan belajar bagi banyak individu. Jenis penyakit ini
            disebabkan oleh berbagai agen biologi seperti virus, bakteri, jamur,
            dan parasit.
          </p>
          <p className="text-gray-600 text-justify">
            Penularan penyakit menular bisa terjadi melalui kontak langsung
            antara individu, melalui media seperti udara atau air, serta melalui
            vektor seperti nyamuk atau binatang pembawa penyakit. Oleh karena
            itu, pencegahan penularan penyakit menular menjadi hal yang sangat
            penting dalam menjaga kesehatan individu dan masyarakat secara
            keseluruhan, terutama di lingkungan yang padat seperti pondok
            pesantren.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pentingnya Pencegahan Penyakit Menular
          </h3>
          <p className="text-gray-600 text-justify">
            Penyakit menular dapat menyebabkan tingkat kesakitan, kematian, dan
            kecacatan yang tinggi. Oleh karena itu, diperlukan upaya pencegahan,
            pengendalian, dan pemberantasan yang efektif. Ada dua jenis penyakit
            menular, yaitu langsung dan melalui vektor serta binatang pembawa
            penyakit. Contoh penyakit langsung termasuk difteri, campak,
            tuberkulosis, dan hepatitis, sedangkan contoh penyakit melalui
            vektor dan binatang pembawa penyakit termasuk malaria dan
            filariasis.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Penerapan PHBS dalam Pondok Pesantren
          </h3>
          <p className="text-gray-600 text-justify">
            Perilaku Hidup Bersih dan Sehat (PHBS) merupakan kunci penting dalam
            mencegah penularan penyakit menular di pondok pesantren.
            Langkah-langkah praktis seperti mencuci tangan dengan sabun,
            pemberantasan jentik nyamuk, dan menggunakan air bersih untuk
            keperluan rumah tangga merupakan bagian dari upaya pencegahan yang
            efektif. Konsumsi makanan bergizi, aktivitas fisik, penggunaan
            jamban sehat, serta perhatian pada kesehatan reproduksi juga
            merupakan bagian dari PHBS yang dapat membantu mencegah penularan
            penyakit.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Peran Pondok Pesantren dalam Menerapkan PHBS
          </h3>
          <p className="text-gray-600 text-justify">
            Pondok pesantren memiliki peran penting dalam menerapkan PHBS di
            lingkungannya. Kondisi lingkungan yang sehat, kebersihan personal,
            dan pengendalian penyakit menular harus menjadi prioritas. Inisiatif
            seperti penyediaan klinik kesehatan di pesantren, edukasi tentang
            PHBS, dan kerjasama dengan pihak kesehatan setempat merupakan
            langkah-langkah konkret dalam menjaga kesehatan santri dan
            santriwati.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Kesadaran dan Perubahan Perilaku
          </h3>
          <p className="text-gray-600 text-justify">
            Pengelola pondok pesantren perlu meningkatkan kesadaran akan
            pentingnya PHBS dan mengubah perilaku yang tidak sehat. Edukasi,
            sosialisasi, dan pembiasaan perilaku hidup bersih dan sehat harus
            menjadi bagian integral dari kegiatan sehari-hari di pesantren.
            Dengan demikian, dapat diharapkan bahwa penularan penyakit menular
            di pondok pesantren dapat diminimalkan, dan kesehatan para santri
            dan santriwati terjaga dengan baik.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Kesimpulan</h3>
          <p className="text-gray-600 text-justify">
            Pondok pesantren memiliki peran yang besar dalam menjaga kesehatan
            santri dan santriwati serta mencegah penularan penyakit menular.
            Dengan menerapkan PHBS secara konsisten dan menyeluruh, pondok
            pesantren dapat menjadi lingkungan yang aman dan sehat bagi seluruh
            penghuninya.
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
