import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Gerakan PHBS Sebagai Langkah Awal Menuju Peningkatan Kualitas
          Kesehatan Masyarakat
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
                Puskesmas Kahuripan
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Selasa, 28 November 2023 06:20
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/HidupSehat"
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
            <Image
              src="/image/artikel3.png"
              alt="article"
              fill={true}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Gambar PHBS</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">PHBS</h3>
          <p className="text-gray-600 text-justify">
            PHBS merupakan kependekan dari Perilaku Hidup Bersih dan Sehat.
            Sedangkan pengertian PHBS adalah semua perilaku kesehatan yang
            dilakukan karena kesadaran pribadi sehingga keluarga dan seluruh
            anggotanya mampu menolong diri sendiri pada bidang kesehatan serta
            memiliki peran aktif dalam aktivitas masyarakat.
          </p>
          <p className="text-gray-600 text-justify">
            Perilaku Hidup Bersih dan Sehat pada dasarnya merupakan sebuah upaya
            untuk menularkan pengalaman mengenai perilaku hidup sehat melalui
            individu, kelompok ataupun masyarakat luas dengan jalur – jalur
            komunikasi sebagai media berbagi informasi. Ada berbagai informasi
            yang dapat dibagikan seperti materi edukasi guna menambah
            pengetahuan serta meningkatkan sikap dan perilaku terkait cara hidup
            yang bersih dan sehat.
          </p>
          <p className="text-gray-600 text-justify">
            PHBS adalah sebuah rekayasa sosial yang bertujuan menjadikan
            sebanyak mungkin anggota masyarakat sebagai agen perubahan agar
            mampu meningkatkan kualitas perilaku sehari – hari dengan tujuan
            hidup bersih dan sehat.
          </p>
          <p className="text-gray-600 text-justify">
            Terdapat langkah – langkah berupa edukasi melalui pendekatan pemuka
            atau pimpinan masyarakat, pembinaan suasana dan juga pemberdayaan
            masyarakat dengan tujuan kemampuan mengenal dan tahu masalah
            kesehatan yang ada di sekitar; terutama pada tingkatan rumah tangga
            sebagai awal untuk memperbaiki pola dan gaya hidup agar lebih sehat.
          </p>
          <p className="text-gray-600 text-justify">
            Tujuan utama dari gerakan PHBS adalah meningkatkan kualitas
            kesehatan melalui proses penyadartahuan yang menjadi awal dari
            kontribusi individu – individu dalam menjalani perilaku kehidupan
            sehari – hari yang bersih dan sehat. Manfaat PHBS yang paling utama
            adalah terciptanya masyarakat yang sadar kesehatan dan memiliki
            bekal pengetahuan dan kesadaran untuk menjalani perilaku hidup yang
            menjaga kebersihan dan memenuhi standar kesehatan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Beberapa Tatanan PHBS
          </h3>
          <p className="text-gray-600 text-justify">
            Tatanan PHBS melibatkan beberapa elemen yang merupakan bagian dari
            tempat beraktivitas dalam kehidupan sehari – hari. Berikut ini 5
            tatanan PBHS yang dapat menjadi simpul – simpul untuk memulai proses
            penyadartahuan tentang perilaku hidup bersih sehat :
          </p>
          <p className="text-gray-600 text-justify">
            PHBS di Rumah tangga , PHBS di Sekolah , PHBS di Tempat kerja , PHBS
            di Sarana kesehatan , PHBS di Tempat umum
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Manfaat PHBS</h3>
          <p className="text-gray-600 text-justify">
            Manfaat PHBS secara umum adalah meningkatkan kesadaran masyarakat
            untuk mau menjalankan hidup bersih dan sehat. Hal tersebut agar
            masyarakat bisa mencegah dan menanggulangi masalah kesehatan. Selain
            itu, dengan menerapkan PHBS masyarakat mampu menciptakan lingkungan
            yang sehat dan meningkatkan kualitas hidup.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Manfaat PHBS di Sekolah
          </h3>
          <p className="text-gray-600 text-justify">
            PHBS di sekolah merupakan kegiatan memberdayakan siswa, guru dan
            masyarakat lingkungan sekolah untuk mau melakukan pola hidup sehat
            untuk menciptakan sekolah sehat. Manfaat PHBS di Sekolah mampu
            menciptakan lingkungan yang bersih dan sehat, meningkatkan proses
            belajar mengajar dan para siswa, guru hingga masyarakat lingkungan
            sekolah menjadi sehat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Manfaat PHBS di Rumah Tangga
          </h3>
          <p className="text-gray-600 text-justify">
            Menerapkan PHBS di rumah tangga tentu akan menciptakan keluarga
            sehat dan mampu meminimalisir masalah kesehatan. Manfaat PHBS di
            rumah tangga antara lain, setiap anggota keluarga mampu meningkatkan
            kesejahteraan dan tidak mudah terkena penyakit, rumah tangga sehat
            mampu meningkatkan produktivitas anggota rumah tangga dan manfaat
            PHBS rumah tangga selanjutnya adalah anggota keluarga terbiasa untuk
            menerapkan pola hidup sehat dan anak dapat tumbuh sehat dan
            tercukupi gizi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Manfaat PHBS di Tempat Kerja
          </h3>
          <p className="text-gray-600 text-justify">
            PHBS di Tempat kerja adalah kegiatan untuk memberdayakan para
            pekerja agar tahu dan mau untuk melakukan Perilaku Hidup Bersih dan
            Sehat dan berperan dalam menciptakan tempat kerja yang sehat.
            manfaat PHBS di tempat kerja yaitu para pekerja mampu meningkatkan
            kesehatannya dan tidak mudah sakit, meningkatkan produktivitas kerja
            dan meningkatkan citra tempat kerja yang positif.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pentingnya Materi PHBS di Setiap Tatanan
          </h3>
          <p className="text-gray-600 text-justify">
            Selain PHBS dalam tatanan rumah tangga, masih terdapat tatanan lain
            yang tidak kalah penting seperti PHBS di sekolah dan juga PHBS di
            tempat kerja. Keseluruhan dari materi PHBS bertujuan untuk
            meningkatkan kualitas kesehatan individu dan masyarakat yang
            terlibat pada setiap tatanan. Sekolah yang sehat dengan anggota
            komunitas tingkat sekolah yang berperilaku Hidup Bersih dan Sehat
            dapat mencegah sekolah menjadi titik penularan atau sumber berbagai
            penyakit. Demikian pula dengan PHBS di tempat kerja dimana keamanan
            dan kesehatan menjadi sesuatu yang tidak kalah penting. Perilaku
            Hidup Bersih dan Sehat yang berasal dari implementasi materi PHBS
            dapat menjadi kunci untuk meningkatkan kualitas kesehatan
            masyarakat. Menjalankan praktek indikator – indikator PHBS di
            berbagai tatanan dapat menjadi sebuah gerakan untuk memasyarakatkan
            Perilaku Hidup Bersih dan Sehat dimanapun dan juga kapanpun.
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
