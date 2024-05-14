/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
        PHBS Perilaku Hidup Bersih dan Sehat di Tatanan Rumah Tangga
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
                Sabtu, 11 November 2023 06:20
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
              src="https://i.ibb.co/Zhnp397/phbs-tatanan-rt.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Ilustrasi
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Latar Belakang PHBS di Tatanan Rumah Tangga
          </h3>
          <p className="text-gray-600 text-justify">
          PHBS (perilaku Hidup Bersi dan Sehat) di Tatanan Rumah Tangga adalah semua perilaku kebersihan dan kesehatan yang dilakukan atas kesadaran masing masing sehingga setiap anggota keluarga atau keluarga dapat menolong dirinya sendiri di bidang kesehatan dan ikut berperan aktif dalam kegiatan-kegiatan kesehatan di masyarakat.

PHBS di Tatanan Rumah Tangga adalah upaya untuk menyadarkan keluarga dan masing masing anggota keuarga agar memilki kemaunan dan kemampuan dalam mempraktikkan PHBS.Sehingga keluarga dan seluruh anggota keluarga dapat memelihara dan meningkatkan kesehatannya, mencegah resiko terjadinya penyakit dan melindungi diri dari ancaman penyakit serta berperan aktif dalam gerakan kesehatan masyarakat. Rumah tangga atau keluarga yang sehat dapat diwujudkan dengan mengimplementasikan PHBS dan menciptakan dukungan lingkungan yang sehat.

Rumah tangga atau keluarga yang sehat merupakan aset utama pembangunan yang perlu dipelihara terus menerus, ditingkakan dan dilindungi kesehatannya. Sehingga perlu dilakukan upaya upaya untuk meningkatkan pengetahuan, kemauan dan kemampuan anggota rumah tangga atau anggota keluarga untuk melaksanakan PHBS, dan ikut berperan aktif dalam gerakan PHBS di masyarakat.

          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
          Bahwa rumah tangga atau keluarga sehat merupakan aset atau modal utama pembangunan di masa depan yang perlu dijaga, ditingkakan dan dilindungi kesehatannya. Beberapa anggota rumah tangga mempunyai masa rawan terkena gangguan berbagai penyakit. Angka kesakitan dan kematian penyakit infeksi dan non infeksi dapat dicegah dengan PHBS.

PHBS itu jumlahnya bisa banyak sekali, bisa ratusan; misalnya tentang Gizi: makan beraneka ragam makanan, minum Tablet Tambah Darah, mengkonsumsi Garam Beryodium, memberi bayi dan balita Kapsul Vitamin A; dst. Namun setiap rumah tangga dianjurkan untuk melaksanakan semua perilaku kesehatan; untuk manfaat yang tidak ternilai; baik bagi rumah tangga itu sendiri, lingkungan, dan bahkan nasional.

          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          Manfaat PHBS di Tatanan Rumah Tangga
          </h3>
          <p className=" font-bold">
          1. Setiap anggota keluarga menjadi sehat dan tidak mudah sakit.
          </p>
          <p className=" font-bold">
          2. Anak tumbuh sehat dan cerdas.
          </p>
          <p className=" font-bold">
          3. Anggota keluarga giat bekerja.
          </p>
          <p className=" font-bold">
          4. Pengeluaran biaya rumah tangga dapat ditujukan untuk memenuhi gizi keluarga, pendidikan dan modal usaha untuk peningkatan pendapatan keluarga.
          </p>
        </div>
        <h3 className="font-bold">Rumah Tangga Ber-PHBS adalah rumah tangga yang melakukan 10 PHBS di Rumah Tangga, yaitu :</h3>
        <div className="mt-4 mb-6 space-y-2">
          <p className=" font-bold">
          1. Pertolongan persalinan oleh tenaga kesehatan.
          </p>
          <p className=" font-bold">
          2. Memberi bayi ASI Eksklusif.
          </p>
          <p className=" font-bold">
          3. Menimbang balita setiap bulan.
          </p>
          <p className=" font-bold">
          4. Menggunakan air bersih.
          </p>
          <p className=" font-bold">
          5. Mencuci tangan dengan air bersih dan sabun.
          </p>
          <p className=" font-bold">
          6. Menggunakan jamban sehat.
          </p>
          <p className=" font-bold">
          7. Memberantas jentik di rumah sekali seminggu.
          </p>
          <p className=" font-bold">
          8. Makan buah dan sayur setiap hari.
          </p>
          <p className=" font-bold">
          9. Melakukan Aktivitas Fisik setiap hari.
          </p>
          <p className=" font-bold">
          10. Tidak merokok di dalam rumah.
          </p>
        </div>
        <p>PHBS Tatanan Rumah Tangga harus dapat diketahui, dimengerti dan dipraktekkan oleh keluarga, anggota keluarga, serta lingkungan dimana setiap keluarga tinggal. Dalam kondisi ini peran anggota keluarga, masyarakat, tokoh masyarakat, pemerintah daerah sangat berpengaruh termasuk dalam tersedianya fasilitas serta adanya kebijakan yang mendukung.

</p>



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
