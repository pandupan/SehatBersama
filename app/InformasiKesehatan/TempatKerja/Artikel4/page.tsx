/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          PHBS Perilaku Hidup Bersih dan Sehat di Tatanan Tempat Kerja
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
                Puskesmas Purbaratu
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                15 Februari 2024
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/KesehatanMental"
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
              src="https://i.ibb.co/fHM37Gq/photo-1560264280-88b68371db39.jpg "
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
            PHBS (Perilaku Hidup Bersih dan Sehat) di Tempat Kerja adalah upaya
            untuk memberdayakan karyawan agar mereka mengetahui, mau, dan mampu
            mempraktikkan PHBS serta berperan aktif dalam menciptakan lingkungan
            kerja yang sehat. Implementasi PHBS di tempat kerja penting untuk
            menjaga, memelihara, dan mempertahankan kesehatan karyawan sehingga
            tetap sehat dan produktif.
          </p>
          <p className="text-gray-600 text-justify">
            Pengertian dan Latar Belakang: Tempat kerja, seperti kantor dan
            pabrik, mencakup lingkungan fisik, kimia, biologi, ergonomi, dan
            psikososial. Implementasi PHBS di tempat kerja diperlukan untuk
            menjaga kesehatan karyawan agar tetap sehat dan produktif. Memahami
            pentingnya penerapan PHBS di tempat kerja untuk meningkatkan derajat
            kesehatan masyarakat, khususnya bagi karyawan, maka perlu dilakukan
            sosialisasi yang sistematis dan masif. PHBS di tempat kerja adalah
            salah satu dari lima tatanan PHBS.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <div>
            <strong>Tujuan PHBS di Tempat Kerja:</strong>
            <ul className="list-disc list-inside">
              <li>
                Mengembangkan perilaku hidup bersih dan sehat di tempat kerja.
              </li>
              <li>Menurunkan angka absensi karyawan.</li>
              <li>
                Menurunkan angka penyakit akibat kerja dan lingkungan kerja.
              </li>
              <li>
                Menciptakan lingkungan kerja yang sehat, mendukung, dan aman.
              </li>
              <li>
                Membantu berkembangnya gaya kerja dan gaya hidup yang sehat.
              </li>
              <li>
                Memberikan dampak positif terhadap lingkungan kerja dan
                masyarakat.
              </li>
            </ul>
          </div>

          <p>
            <strong>Manfaat PHBS di Tempat Kerja:</strong> Manfaat penerapan
            PHBS mencakup peningkatan kesehatan karyawan sehingga tidak mudah
            sakit, peningkatan produktivitas yang berdampak pada peningkatan
            penghasilan dan ekonomi keluarga, serta pengeluaran biaya rumah
            tangga yang lebih difokuskan pada peningkatan taraf hidup daripada
            biaya pengobatan. Bagi perusahaan, manfaatnya termasuk peningkatan
            produktivitas kerja, penurunan biaya kesehatan, dan peningkatan
            citra positif tempat kerja.
          </p>

          <div>
            <strong>Indikator PHBS di Tempat Kerja:</strong>
            <ul className="list-disc list-inside">
              <li>
                Menggunakan Alat Pelindung Diri (APD) sesuai jenis pekerjaan.
              </li>
              <li>Tidak merokok/ada kebijakan larangan merokok.</li>
              <li>Olahraga teratur/aktivitas fisik.</li>
              <li>
                Mencuci tangan dengan air bersih dan sabun sebelum makan dan
                sesudah buang air besar.
              </li>
              <li>Menggunakan jamban sehat saat buang air kecil dan besar.</li>
              <li>Membuang sampah di tempat sampah.</li>
              <li>Memberantas jentik nyamuk di tempat kerja.</li>
              <li>Mengonsumsi makanan dan minuman sehat.</li>
              <li>
                Bebas dari NAPZA (Narkotika, Obat-obatan, Psikotropika, dan Zat
                Adiktif lainnya).
              </li>
              <li>Tidak meludah sembarangan.</li>
            </ul>
          </div>

          <div>
            <strong>
              Menurut flyer dari Kementerian Kesehatan, beberapa perilaku PHBS
              yang harus dipraktikkan di tempat kerja meliputi:
            </strong>
            <ul className="list-disc list-inside">
              <li>Mengurangi penggunaan plastik/styrofoam.</li>
              <li>Memanfaatkan kertas bekas.</li>
              <li>
                Mematikan komputer dan peralatan listrik jika tidak digunakan.
              </li>
              <li>
                Membuang sampah pada tempatnya dan memisahkan antara sampah
                basah, kering, dan berbahaya.
              </li>
              <li>
                Meminimalkan penggunaan kendaraan pribadi ke kantor atau
                memaksimalkan penumpang dalam satu mobil.
              </li>
              <li>Tidak merokok.</li>
              <li>Beraktivitas fisik setidaknya 30 menit setiap hari.</li>
              <li>Mencuci tangan menggunakan sabun sesering mungkin.</li>
              <li>
                Mengonsumsi makanan bergizi seimbang, serta makan buah dan sayur
                3-5 porsi sehari.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
