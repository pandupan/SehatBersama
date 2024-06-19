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
                07 Juni 2024
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
              src="https://i.ibb.co.com/rw14ntn/image.png"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Ilustrasi PHBS di Rumah Tangga</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            PHBS (perilaku Hidup Bersi dan Sehat) di Tatanan Rumah Tangga
          </h3>
          <p className="text-gray-600 text-justify">
            PHBS (perilaku Hidup Bersi dan Sehat) di Tatanan Rumah Tangga adalah
            semua perilaku kebersihan dan kesehatan yang dilakukan atas
            kesadaran masing masing sehingga setiap anggota keluarga atau
            keluarga dapat menolong dirinya sendiri di bidang kesehatan dan ikut
            berperan aktif dalam kegiatan-kegiatan kesehatan di masyarakat.
            <br /> <br /> 
            PHBS di Tatanan Rumah Tangga adalah upaya untuk menyadarkan keluarga
            dan masing masing anggota keuarga agar memilki kemaunan dan
            kemampuan dalam mempraktikkan PHBS.Sehingga keluarga dan seluruh
            anggota keluarga dapat memelihara dan meningkatkan kesehatannya,
            mencegah resiko terjadinya penyakit dan melindungi diri dari ancaman
            penyakit serta berperan aktif dalam gerakan kesehatan masyarakat.
            Rumah tangga atau keluarga yang sehat dapat diwujudkan dengan
            mengimplementasikan PHBS dan menciptakan dukungan lingkungan yang
            sehat.
            <br /> <br /> 
            Rumah tangga atau keluarga yang sehat merupakan aset utama pembangunan yang perlu dipelihara terus menerus, ditingkakan dan dilindungi kesehatannya. Sehingga perlu dilakukan upaya upaya untuk meningkatkan pengetahuan, kemauan dan kemampuan anggota rumah tangga atau anggota keluarga untuk melaksanakan PHBS, dan ikut berperan aktif dalam gerakan PHBS di masyarakat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
          Latar Belakang PHBS di Tatanan Rumah Tangga
          </h3>
          <p className="text-gray-600 text-justify">
          Bahwa rumah tangga atau keluarga sehat merupakan aset atau modal utama pembangunan di masa depan yang perlu dijaga, ditingkakan dan dilindungi kesehatannya. Beberapa anggota rumah tangga mempunyai masa rawan terkena gangguan berbagai penyakit. Angka kesakitan dan kematian penyakit infeksi dan non infeksi dapat dicegah dengan PHBS.
          <br/><br/>
          PHBS itu jumlahnya bisa banyak sekali, bisa ratusan; misalnya tentang Gizi: makan beraneka ragam makanan, minum Tablet Tambah Darah, mengkonsumsi Garam Beryodium, memberi bayi dan balita Kapsul Vitamin A; dst. Namun setiap rumah tangga dianjurkan untuk melaksanakan semua perilaku kesehatan; untuk manfaat yang tidak ternilai; baik bagi rumah tangga itu sendiri, lingkungan, dan bahkan nasional.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
          Manfaat PHBS di Tatanan Rumah Tangga
          </h3>
          <p className="text-gray-600 text-justify">
          • Setiap anggota keluarga menjadi sehat dan tidak mudah sakit.<br/>
          • Anak tumbuh sehat dan cerdas.<br/>
          • Anggota keluarga giat bekerja.<br/>
          • Pengeluaran biaya rumah tangga dapat ditujukan untuk memenuhi gizi keluarga, pendidikan dan modal usaha untuk peningkatan pendapatan keluarga.

          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
          Rumah Tangga Ber-PHBS adalah rumah tangga yang melakukan 10 PHBS di Rumah Tangga, yaitu :

          </h3>
          <p className="text-gray-600 text-justify">
          •  Pertolongan persalinan oleh tenaga kesehatan.
          <br/> •  Memberi bayi ASI Eksklusif.
          <br/> •  Menimbang balita setiap bulan.
          <br/> •  Menggunakan air bersih.
          <br/> •  Mencuci tangan dengan air bersih dan sabun.
          <br/> •  Menggunakan jamban sehat.
          <br/> •  Memberantas jentik di rumah sekali seminggu.
          <br/> •  Makan buah dan sayur setiap hari.
          <br/> •  Melakukan Aktivitas Fisik setiap hari.
          <br/> •  Tidak merokok di dalam rumah.

          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
          PHBS Tatanan Rumah Tangga harus dapat diketahui, dimengerti dan dipraktekkan oleh keluarga, anggota keluarga, serta lingkungan dimana setiap keluarga tinggal. Dalam kondisi ini peran anggota keluarga, masyarakat, tokoh masyarakat, pemerintah daerah sangat berpengaruh termasuk dalam tersedianya fasilitas serta adanya kebijakan yang mendukung
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
