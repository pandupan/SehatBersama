/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Membangun Lingkungan Kesehatan: Strategi PHBS dalam Manajemen Limbah
          Medis di Fasilitas Pelayanan Kesehatan
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
                Pooja M Patil
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                15 Juli 2020
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
              src="https://i.ibb.co/Gdjq3Pv/dr-Hesty-1.jpg"
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
            Pada setiap langkah pelayanan kesehatan, kita tidak hanya berfokus
            pada pemulihan pasien, tetapi juga pada keselamatan lingkungan di
            sekitar kita. Salah satu aspek penting dalam membangun lingkungan
            yang sehat adalah manajemen limbah medis di fasilitas pelayanan
            kesehatan. Dalam artikel ini, kita akan menjelajahi strategi
            Perilaku Hidup Bersih dan Sehat (PHBS) yang efektif dalam manajemen
            limbah medis tersebut.
          </p>
          <p className="text-gray-600 text-justify">
            <strong>Mengapa Manajemen Limbah Medis Penting?</strong>
            Limbah medis merupakan bagian tak terpisahkan dari kegiatan
            pelayanan kesehatan. Namun, limbah tersebut juga memiliki potensi
            bahaya bagi kesehatan manusia dan lingkungan jika tidak dikelola
            dengan baik. Limbah medis dapat mengandung zat-zat berbahaya seperti
            bahan kimia, infeksi, dan bahan beracun lainnya yang dapat
            menyebabkan kerusakan jika terpapar secara langsung.
          </p>
          <div className="text-gray-600 text-justify">
            <strong>Strategi PHBS dalam Manajemen Limbah Medis</strong>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                <strong>Pendidikan dan Pelatihan:</strong> Membangun kesadaran
                dan pengetahuan yang baik tentang manajemen limbah medis di
                antara petugas kesehatan adalah langkah awal yang penting.
                Pelatihan rutin tentang pembuangan limbah medis yang aman dan
                benar akan membantu mencegah kesalahan dalam proses
                penanganannya.
              </li>
              <li>
                <strong>Pemisahan dan Penanganan Awal:</strong> PHBS mengajarkan
                pentingnya memisahkan limbah medis sejak awal. Dengan memisahkan
                limbah berdasarkan kategori dan risikonya, kita dapat mengurangi
                kemungkinan terjadinya kontaminasi silang dan memudahkan proses
                pengelolaan limbah selanjutnya.
              </li>
              <li>
                <strong>
                  Penggunaan Peralatan dan Peralatan Pelindung Diri (APD) yang
                  Tepat:
                </strong>{" "}
                PHBS mendorong penggunaan peralatan dan APD yang sesuai saat
                menangani limbah medis. Ini termasuk penggunaan sarung tangan,
                masker, dan pakaian pelindung lainnya untuk mengurangi risiko
                kontaminasi.
              </li>
              <li>
                <strong>Pengelolaan dan Penyimpanan yang Aman:</strong>{" "}
                Fasilitas pelayanan kesehatan perlu memiliki sistem pengelolaan
                limbah medis yang terorganisir dan aman. Ini mencakup
                penyimpanan sementara limbah medis sebelum pengangkutan,
                penggunaan wadah yang tahan bocor, dan pemusnahan limbah medis
                yang tepat sesuai dengan pedoman yang berlaku.
              </li>
              <li>
                <strong>Monitoring dan Evaluasi:</strong> PHBS juga melibatkan
                proses monitoring dan evaluasi secara berkala terhadap praktik
                manajemen limbah medis. Dengan melakukan audit rutin, kita dapat
                mengidentifikasi area-area di mana perbaikan diperlukan dan
                memastikan kepatuhan terhadap prosedur yang ditetapkan.
              </li>
            </ol>
          </div>
        </div>
        <div className="text-gray-600 text-justify space-y-4">
          <p>
            <strong>Kesimpulan:</strong> Manajemen limbah medis yang efektif
            adalah salah satu aspek kunci dalam membangun lingkungan kesehatan
            dan aman di fasilitas pelayanan kesehatan. Dengan menerapkan
            strategi PHBS yang tepat, kita dapat mengurangi risiko paparan
            terhadap limbah medis berbahaya, melindungi kesehatan petugas
            kesehatan, pasien, dan masyarakat, serta melestarikan lingkungan
            sekitar kita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
