/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Meningkatkan Kesehatan dengan Perilaku Hidup Bersih dan Sehat di Fasilitas Pelayanan Kesehatan
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
                Rina Nurjannah
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Staf Intsalasi Kesling & K3 RSHS
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="https://www.rshs.or.id/perilaku-hidup-bersih-dan-sehat-phbs-di-fasilitas-pelayanan-kesehatan/"
              className="bg-[#1dbbb4] rounded-md text-white sm:text-base text-xs px-2 py-2 sm:px-10 sm:py-2"
            >
              Sumber
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
            Membangun masyarakat yang sehat dan produktif menjadi fokus utama pembangunan kesehatan di Indonesia. Upaya preventif dan promotif menjadi kunci untuk mewujudkan hal ini. Salah satu pilar utama dalam mewujudkan masyarakat sehat adalah dengan menerapkan Perilaku Hidup Bersih dan Sehat (PHBS), khususnya di fasilitas pelayanan kesehatan seperti rumah sakit.
          </p>
          <p className="text-gray-600 text-justify">
            Kebijakan kesehatan menekankan pada upaya promotif dan preventif untuk menjadikan individu yang sehat menjadi lebih sehat dan produktif. Pola hidup sehat merupakan gambaran dari paradigma kesehatan yang berkaitan dengan perilaku individu, keluarga, kelompok, dan masyarakat yang berorientasi pada kesehatan, baik fisik, mental, spiritual, maupun sosial.
          </p>
          <div className="text-gray-600 text-justify">
            Perilaku hidup sehat melibatkan tindakan proaktif seperti:
            <ol className="list-decimal list-inside mt-2">
              <li>Mempelihara dan Meningkatkan Kesehatan dengan rutin berolahraga dan menjalani gaya hidup sehat.</li>
              <li>Menghilangkan Kebiasaan Berisiko dengan mengurangi kebiasaan yang berpotensi menimbulkan penyakit.</li>
              <li>Melindungi Diri dari Ancaman Penyakit dengan berusaha untuk menghindari faktor risiko yang dapat menyebabkan penyakit.</li>
              <li>Berpartisipasi Aktif dalam Gerakan Kesehatan Masyarakat dengan turut serta dalam kegiatan yang bertujuan meningkatkan kesadaran dan tindakan kesehatan masyarakat.</li>
            </ol>
          </div>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Rumah sakit, sebagai salah satu fasilitas pelayanan kesehatan, memiliki peran penting dalam menjaga kesehatan individu dan masyarakat. Namun, rumah sakit juga memiliki potensi sebagai tempat penularan penyakit bagi pasien, petugas kesehatan, dan pengunjungnya. Infeksi rumah sakit dapat terjadi karena kurangnya kebersihan fasilitas, kurangnya keahlian petugas medis, serta tidak memadainya fasilitas sanitasi.
          </p>
          <p className="text-gray-600 text-justify">
            Menurut data Kementerian Kesehatan tahun 2004, infeksi rumah sakit merupakan penyumbang penyakit tertinggi. Persentase tingkat risiko terjangkitnya infeksi rumah sakit di Rumah Sakit Umum mencapai 93,4% sedangkan Rumah Sakit Khusus hanya 6,6%, 1,6-80,8 % diantaranya merupakan penyakit saluran pencernaan. Oleh karena itu, penting untuk mengimplementasikan Perilaku Hidup Bersih dan Sehat (PHBS) di fasilitas pelayanan kesehatan untuk mencegah penularan penyakit.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Beberapa kegiatan yang dapat dilakukan untuk meningkatkan efektivitas PHBS di fasilitas pelayanan kesehatan antara lain mencuci tangan, menggunakan air bersih, penggunaan jamban sehat, membuang sampah pada tempatnya, larangan merokok, tidak meludah sembarangan, dan pemberantasan jentik nyamuk.
          </p>
          <div className="text-gray-600 text-justify">
            Tujuan dari implementasi PHBS di fasilitas pelayanan kesehatan adalah untuk:
            <ul className="list-disc list-inside mt-2">
              <li>Membudayakan perilaku hidup bersih dan sehat.</li>
              <li>Mencegah penularan penyakit.</li>
              <li>Menciptakan lingkungan yang sehat.</li>
            </ul>
          </div>
          <p className="text-gray-600 text-justify">
            Sasaran PHBS di fasilitas pelayanan kesehatan meliputi pasien, keluarga pasien, pengunjung, petugas kesehatan, dan karyawan. Manfaat dari implementasi PHBS di fasilitas pelayanan kesehatan mencakup pelayanan kesehatan yang lebih aman, terhindar dari penularan penyakit, mempercepat proses penyembuhan penyakit, serta meningkatkan citra fasilitas pelayanan kesehatan sebagai tempat yang aman dan sehat.
          </p>
        </div>
        <div className="text-gray-600 text-justify space-y-4">
          <p>
            Program PHBS di fasilitas pelayanan kesehatan dapat berhasil jika didukung oleh keinginan dan kemampuan dari para pengambil keputusan serta melibatkan peran aktif dari semua stakeholder.
          </p>
          <p>
            <strong>Kesimpulan:</strong>
            Perilaku Hidup Bersih dan Sehat (PHBS) di fasilitas pelayanan kesehatan merupakan langkah penting untuk mencegah penularan penyakit dan menciptakan lingkungan yang sehat. Dengan kesadaran dan tindakan bersama, kita dapat menjaga kesehatan individu, keluarga, dan masyarakat secara lebih efektif dan berkelanjutan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
