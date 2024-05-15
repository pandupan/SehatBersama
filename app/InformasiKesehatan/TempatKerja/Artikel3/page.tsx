/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Perilaku Hidup Bersih dan Sehat (PHBS) di Tempat Kerja
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
            Perilaku Hidup Bersih dan Sehat (PHBS) adalah sebuah upaya untuk
            memberdayakan masyarakat agar mereka mengetahui, mau, dan mampu
            mempraktikkan perilaku hidup bersih dan sehat serta berpartisipasi
            aktif dalam gerakan kesehatan masyarakat.
          </p>
          <p className="text-gray-600 text-justify">
            Lingkungan kerja memiliki dampak positif dan negatif pada kesehatan
            psikologis pekerjanya. Berbagai faktor seperti gaji, lingkungan
            kerja, dan interaksi dengan rekan kerja dapat memengaruhi kesehatan
            mental. Ketika faktor-faktor tersebut tidak berjalan dengan baik,
            tingkat stres akan meningkat. Beban kerja yang menumpuk dapat
            menurunkan produktivitas dan fokus. Oleh karena itu, penting untuk
            segera mencari solusi untuk mengatasi masalah tersebut. Cara menjaga
            kesehatan mental meliputi menghindari tekanan yang parah dan segera
            mencari solusi saat menghadapi masalah. Salah satu cara efektif
            adalah dengan mendiskusikan masalah dengan rekan kerja untuk
            menghindari dampak negatif pada kinerja tim.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Ruang Lingkup PHBS: 1. Perilaku Hidup Bersih dan Sehat di Rumah
            Tangga 2. Perilaku Hidup Bersih dan Sehat di Institusi Kesehatan 3.
            Perilaku Hidup Bersih dan Sehat di Tempat Umum 4. Perilaku Hidup
            Bersih dan Sehat di Sekolah 5. Perilaku Hidup Bersih dan Sehat di
            Tempat Kerja
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Sebanyak 89.7% populasi usia produktif (15-55 tahun) adalah pekerja
            aktif. Dari jumlah tersebut, 44% bekerja di sektor pertanian, 19.9%
            di sektor perdagangan, 12.3% di sektor industri, 5.8% di sektor
            transportasi, dan sisanya di sektor lain. Sektor dengan jumlah
            tenaga kerja paling sedikit adalah sektor listrik, air, dan gas
            (0.2%) serta sektor pertambangan (0.9%). Karena banyaknya industri
            kecil dan usaha sektor informal, perhatian dan penanganan kesehatan
            serta keselamatan kerja menjadi penting untuk menghindari penyakit
            dan kecelakaan kerja yang dapat mempengaruhi produktivitas.
          </p>
          <p className="text-gray-600 text-justify">
            PHBS di tempat kerja bertujuan untuk memberdayakan pekerja agar
            mereka tahu, mau, dan mampu mempraktikkan hidup bersih dan sehat
            serta berperan dalam menciptakan Tempat Kerja Sehat.
          </p>
        </div>
        <div className="text-gray-600 text-justify space-y-4">
          <p>
            <strong>Tujuan PHBS di Tempat Kerja:</strong>
            <ul className="list-disc list-inside">
              <li>
                Mengembangkan perilaku hidup bersih dan sehat di tempat kerja
              </li>
              <li>Meningkatkan produktivitas kerja</li>
              <li>Menciptakan lingkungan kerja yang sehat</li>
              <li>Menurunkan angka absensi kerja</li>
              <li>
                Menurunkan angka penyakit akibat kerja dan lingkungan kerja
              </li>
              <li>
                Memberikan dampak positif terhadap lingkungan kerja dan
                masyarakat
              </li>
            </ul>
          </p>

          <div>
            <strong>
              Perilaku Hidup Bersih dan Sehat di Tempat Kerja antara lain:
            </strong>
            <ul className="list-disc list-inside">
              <li>Tidak merokok di tempat kerja</li>
              <li>
                Membeli dan mengonsumsi makanan yang sehat di tempat kerja
              </li>
              <li>Melakukan olahraga secara teratur atau aktivitas fisik</li>
              <li>
                Mencuci tangan dengan air bersih dan sabun sebelum makan dan
                setelah buang air
              </li>
              <li>Memberantas jentik nyamuk di tempat kerja</li>
              <li>Menggunakan air bersih</li>
              <li>Menggunakan jamban yang bersih</li>
              <li>Membuang sampah pada tempatnya</li>
              <li>
                Menggunakan Alat Pelindung Diri (APD) sesuai jenis pekerjaan
              </li>
            </ul>
          </div>

          <p>
            <strong>Manfaat PHBS di Tempat Kerja:</strong>
            <ul className="list-disc list-inside">
              <li>
                <strong>Bagi Pekerja:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Peningkatan kesehatan dan penurunan risiko sakit</li>
                  <li>
                    Meningkatnya produktivitas yang berdampak pada peningkatan
                    penghasilan dan ekonomi keluarga
                  </li>
                  <li>
                    Pengeluaran rumah tangga bisa difokuskan untuk peningkatan
                    taraf hidup, bukan untuk biaya pengobatan
                  </li>
                </ul>
              </li>
              <li>
                <strong>Bagi Masyarakat:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Lingkungan tetap sehat meskipun berada di sekitar tempat
                    kerja
                  </li>
                  <li>
                    Dapat mencontoh perilaku hidup bersih dan sehat dari tempat
                    kerja setempat
                  </li>
                </ul>
              </li>
              <li>
                <strong>Bagi Tempat Kerja:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Peningkatan produktivitas kerja yang berdampak positif pada
                    pencapaian target dan tujuan
                  </li>
                  <li>Penurunan biaya Kesehatan</li>
                  <li>Peningkatan citra positif tempat kerja</li>
                </ul>
              </li>
              <li>
                <strong>Bagi Pemerintah Provinsi dan Kabupaten/Kota:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Peningkatan tempat kerja sehat menunjukkan kinerja dan citra
                    pemerintah yang baik
                  </li>
                  <li>
                    Anggaran dapat dialihkan untuk peningkatan kesehatan, bukan
                    untuk penanggulangan masalah kesehatan
                  </li>
                  <li>
                    Dapat dijadikan pusat pembelajaran bagi daerah lain dalam
                    pembinaan PHBS di Rumah Tangga
                  </li>
                </ul>
              </li>
            </ul>
          </p>

          <p>
            <strong>Ruang Lingkup PHBS:</strong>
            <ol className="list-decimal list-inside">
              <li>Perilaku Hidup Bersih dan Sehat di Rumah Tangga</li>
              <li>Perilaku Hidup Bersih dan Sehat di Institusi Kesehatan</li>
              <li>Perilaku Hidup Bersih dan Sehat di Tempat Umum</li>
              <li>Perilaku Hidup Bersih dan Sehat di Sekolah</li>
              <li>Perilaku Hidup Bersih dan Sehat di Tempat Kerja</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
