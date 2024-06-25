import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Hindari Penyakit dengan Terapkan PHBS di Rumah: Syarat dan Manfaat
          Hunian Sehat dan Bersih
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
                Agus Ramadhan
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Rabu, 20 desember 2023 14:40 WIB
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/RumahTangga"
              className="bg-[#1dbbb4] rounded-md text-white sm:text-base text-xs px-2 py-2 sm:px-10 sm:py-2"
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="relative w-full aspect-video flex justify-center items-center rounded-md bg-gray-100 overflow-hidden">
            <img
              src="https://i.ibb.co.com/fdYBSFC/image.png"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Ilustrasi Hidup Sehat</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Rumah merupakan tempat berlindung bagi anggota keluarga dan menjadi
            sarana pendidikan
          </h3>
          <p className="text-gray-600 text-justify">
            Perilaku Hidup Bersih dan Sehat (PHBS) bermula dari rumah, kemudian
            merambah ke lingkungan dan komunitas masyarakat. Menerapkan PHBS di
            rumah menciptakan keluarga yang sehat dan mampu meminimalisir
            masalah kesehatan.Manfaat PHBS di Rumah1. Meningkatkan
            Kesejahteraan: Setiap anggota keluarga tidak mudah terkena
            penyakit.2. Meningkatkan Produktivitas: Keluarga dapat tumbuh sehat
            dan tercukupi gizinya, meningkatkan produktivitas anggota keluarga.
            <br />
            <br />
            Namun, apakah rumah kita sudah bersih dan sehat? Untuk menjadi rumah
            yang sehat, beberapa syarat berikut harus dipenuhi:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Syarat Rumah Sehat
          </h3>
          <p className="text-gray-600 text-justify">
            1. Kebutuhan Fisiologis:
            <br />
            - Pencahayaan yang cukup.
            <br />
            - Penghawaan dan ruang gerak yang memadai.
            <br />- Terhindar dari kebisingan dan aman.
          </p>
          <p className="text-gray-600 text-justify">
            2. Kebutuhan Psikologis:
            <br />- Privacy yang cukup.- Lingkungan yang nyaman.
            <br />- Komunikasi yang sehat antar anggota keluarga.
          </p>
          <p className="text-gray-600 text-justify">
            3. Pencegahan Penularan Penyakit:
            <br />- Penyediaan air bersih.
            <br />- Pengelolaan tinja dan limbah rumah tangga yang baik.
            <br />- Bebas vektor penyakit dan tikus.
            <br />- Kepadatan hunian yang tidak berlebihan.
            <br />- Cukup sinar matahari pagi.
            <br />- Makanan dan minuman terlindungi dari pencemaran.
          </p>
          <p className="text-gray-600 text-justify">
            4. Pencegahan Kecelakaan:
            <br />- Konstruksi rumah yang aman dan tidak mudah roboh.
            <br />- Tidak mudah terbakar.
            <br />- Meminimalkan risiko jatuh tergelincir.
            <br />- Efisien dan hemat energi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
          Manfaat Rumah Sehat dan Bersih
          </h3>
          <p className="text-gray-600 text-justify">
          1. Menurunkan Stres: Membersihkan rumah selama 20
          menit dapat mengurangi kecemasan dan stres.
          </p>
          <p className="text-gray-600 text-justify">
          2. Menghalau Penyakit: Membersihkan rumah secara rutin dapat melindungi dari kuman,
          debu, tungau, dan jamur.
          </p>
          <p className="text-gray-600 text-justify">
          3. Mencegah Tikus dan Serangga: Rumah yang bersih dan rapi tidak menarik bagi hewan-
          hewan ini.
          </p>
          <p className="text-gray-600 text-justify">
          4. Mengurangi Alergi dan Asma: Rumah yang bersih mengurangi risiko alergi dan
          kambuhnya asma.
          </p>
          <p className="text-gray-600 text-justify">
          5. Memperbaiki Mood: Rumah yang rapi memudahkan mencari barang dan membuat
          penghuninya lebih nyaman.
          </p>
          <p className="text-gray-600 text-justify">
          6. Terhindar dari Demam Berdarah Dengue (DBD): Menjaga kebersihan rumah mencegah
          berkembangnya nyamuk penyebab DBD.
          </p>
          <p className="text-gray-600 text-justify">
          7. Meningkatkan Kualitas Tidur: Lingkungan tidur yang bersih dan rapi meningkatkan
          kualitas tidur.
          </p>
          <p className="text-gray-600 text-justify">
          8. Lebih Produktif: Rumah yang bersih meningkatkan mood dan produktivitas dalam
          bekerja.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
          Dengan menerapkan PHBS di rumah, kita dapat menjaga kebersihan lingkungan dan
          kesehatan keluarga, sekaligus meningkatkan kualitas hidup secara keseluruhan.
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
