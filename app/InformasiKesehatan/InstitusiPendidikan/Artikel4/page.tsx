import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Mahasiswa KKN Tim 1 UNDIP Ajak Siswa Sekolah Dasar di Desa Jatilawang
          Terapkan PHBS di Sekolah
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
              src="https://i.ibb.co/TWLWDH4/whatsapp-image-2024-02-05-at-13-32-33-fa696211-65ccc87412d50f20cc089513.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
            Mahasiswa KKN Tim 1 UNDIP
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Perilaku Hidup Bersih dan Sehat (PHBS)
          </h3>
          <p className="text-gray-600 text-justify">
            Perilaku Hidup Bersih dan Sehat (PHBS) adalah upaya atau rekayasa
            sosial yang mengajak masyarakat untuk berperilaku sehari-hari
            sebagai agen perubahan (agent of change) yang mampu meningkatkan
            kualitas dalam rangka menciptakan kehidupan yang bersih dan sehat.
            Manfaat utama dari PHBS adalah masyarakat menjadi sadar kesehatan
            dan memiliki pengetahuan dan kesadaran untuk menjalani perilaku
            hidup yang menjaga kebersihan dan kesehatan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Perilaku Hidup Bersih dan Sehat (PHBS) melibatkan berbagai tatanan
            dalam kehidupan, salah satunya adalah sekolah. PHBS di sekolah
            sangat penting untuk memberdayakan siswa, guru, dan warga sekolah
            lainnya untuk menciptakan lingkungan sekolah yang bersih dan sehat
            dan mencegah penyakit. PHBS dapat meningkatkan semangat dan prestasi
            siswa.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Kondisi di lapangan menunjukkan bahwa siswa sekolah dasar Desa
            Jatilawang
          </h3>
          <p className="text-gray-600 text-justify">
            Kondisi di lapangan menunjukkan bahwa siswa sekolah dasar Desa
            Jatilawang tidak tahu cara mencuci tangan pakai sabun dengan benar,
            yang merupakan indikator PHBS di sekolah. Oleh karena itu, sebagai
            bentuk pengabdian kepada masyarakat, Vidiya Amalia, mahasiswa Tim 1
            KKN Universitas Diponegoro Tahun 2024, mengajar melalui program
            "Bersih Mulai Dari Tangan: Menanamkan PHBS Sejak Dini". Program ini
            bertujuan untuk meningkatkan kesadaran dan pengetahuan siswa sekolah
            dasar di Desa Jatilawang tentang PHBS.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Siswa kelas 1 dan 2 SDN 01 Jatilawang mengikuti program ini pada
            tanggal 26 Januari 2024
          </h3>
          <p className="text-gray-600 text-justify">
            Sebagai bagian dari kegiatan, materi tentang pentingnya Perilaku
            Hidup Bersih dan Sehat di sekolah disampaikan dan praktik cuci
            tangan pakai sabun yang benar dilakukan bersama-sama melalui video.
            Siswa yang paling antusias dengan kegiatan diberikan hadiah sabun
            cuci tangan. Tujuan dari pemberian sabun cuci tangan ini adalah agar
            siswa menjadi lebih terbiasa mencuci tangan pakai sabun, terutama di
            luar sekolah. Secara keseluruhan, diharapkan bahwa program ini akan
            membantu siswa lebih terlibat dalam praktik perilaku hidup bersih
            dan sehat (PHBS) di sekolah.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Program ;&quot;#HabiskanMakanmu: Aksi Zero Food Waste;&quot;
          </h3>
          <p className="text-gray-600 text-justify">
            Selain itu, program ;&quot;#HabiskanMakanmu: Aksi Zero Food Waste;&quot;
            membantu siswa sekolah dasar Desa Jatilawang menerapkan Perilaku
            Hidup Bersih dan Sehat (PHBS) di sekolah mereka. Program ini
            mengajak siswa untuk menghabiskan jajanan yang mereka beli atau
            makan untuk mengurangi tingkat sampah makanan yang berbahaya bagi
            lingkungan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Siswa kelas 4 mengikuti program di SDN 02 Jatilawang pada tanggal 27
            januari 2024. Kegiatan terdiri dari presentasi materi, tanya jawab
            singkat, dan penempelan poster Aksi Zero Food Waste di setiap kelas.
            Diharapkan bahwa program ini akan membantu meningkatkan manajemen
            sampah di sekolah, khususnya sampah makanan, dan menciptakan
            lingkungan sekolah yang sehat dan bersih.
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
