import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pentingnya Edukasi Kesehatan di Tempat Kerja
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
                Mia Chitra Dinisari
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                03 Juni 2024
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
              src="https://i.ibb.co.com/z7q42dn/5-Tk.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Ilustrasi Cek Kesehatan</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pentingnya Edukasi Kesehatan di Tempat Kerja
          </h3>
          <p className="text-gray-600 text-justify">
            Edukasi kesehatan memainkan peran penting dalam meningkatkan
            kesejahteraan masyarakat, termasuk di kalangan pekerja. Menurut
            Organisasi Kesehatan Dunia (WHO), pendidikan kesehatan adalah alat
            untuk meningkatkan kesehatan dan kesejahteraan umum masyarakat
            melalui peningkatan pengetahuan dan praktik sehat. Pendidikan
            kesehatan di tempat kerja tidak hanya memberikan manfaat bagi
            perusahaan, namun juga bagi karyawan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Manfaat Edukasi Kesehatan di Tempat Kerja
          </h3>
          <p className="text-gray-600 text-justify">
            Pendidikan kesehatan yang diterapkan di tempat kerja menciptakan
            kondisi yang mendukung dan mengajarkan kesehatan terbaik bagi
            karyawan. Ini memberi karyawan rasa memiliki dan mendorong mereka
            untuk bekerja sama dalam tindakan terkoordinasi untuk meningkatkan
            kesejahteraan bersama.
            <br />
            Edukasi kesehatan yang efektif di tempat kerja mencakup berbagai
            aspek, seperti: <br />
            Kesehatan jantung <br />
            Nutrisi <br />
            Kebugaran <br />
            Rekreasi <br />
            Kesadaran akan tembakau dan alkohol <br />
            Fokus utama dari pendidikan kesehatan adalah pencegahan, yang pada
            gilirannya menyebabkan penurunan biaya layanan kesehatan secara
            keseluruhan. Manajemen penyakit, pendidikan kesehatan, dan
            pemeliharaan kesehatan semuanya penting dalam menciptakan landasan
            kesehatan yang kokoh dalam suatu organisasi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Bukti Efektivitas dan Dampak Positif
          </h3>
          <p className="text-gray-600 text-justify">
            Terdapat bukti kuat yang mendukung efektivitas promosi kesehatan di
            tempat kerja, yang memberikan perbedaan signifikan dalam struktur
            organisasi. Perusahaan yang menerapkan program kesehatan bagi
            karyawannya tidak hanya mendorong gaya hidup sehat bagi karyawan
            tetapi juga keluarganya.
            <br />
            Pendidikan kesehatan mental sebagai bagian dari promosi kesehatan di
            tempat kerja terbukti secara signifikan mengurangi depresi pada
            karyawan. Selain itu, perusahaan yang menerapkan strategi ini juga
            menikmati penurunan angka bunuh diri dan berkurangnya masalah
            perilaku di kalangan karyawan. Program kesehatan mental dan kelas
            manajemen stres juga mengurangi agresi dalam rumah tangga dan
            menciptakan lingkungan yang lebih positif bagi karyawan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Inisiatif Nyata di Tempat Kerja
          </h3>
          <p className="text-gray-600 text-justify">
            Maria Endang Sumiwi, Direktur Jenderal Kesehatan Masyarakat dari
            Kementerian Kesehatan RI, menekankan pentingnya mendorong
            terciptanya kebiasaan hidup sehat di tempat kerja. Sudarmadi Widodo,
            HCD & Corporate Communications Director Otsuka Group, menyatakan
            bahwa pekerja adalah aset paling berharga yang mendorong pola hidup
            sehat, sehingga perusahaan berinvestasi dalam kesejahteraan dan
            produktivitas mereka.
            <br />
            Salah satu langkah konkret yang diambil Otsuka Group adalah
            menggelar acara Otsuka Run 2024 untuk meluncurkan Program Kesehatan
            Pekerja bekerja sama dengan Kementerian Kesehatan. Acara ini diikuti
            oleh lebih dari 1.000 pekerja Otsuka Group dan ASN Runner dari
            Kementerian Kesehatan. Kolaborasi ini mencerminkan dedikasi
            perusahaan terhadap kesehatan pekerja dan misi Kementerian Kesehatan
            untuk meningkatkan kesehatan masyarakat dan mendorong kebiasaan
            hidup sehat di tempat kerja.
            <br />
            Otsuka Group juga memberikan edukasi nutrisi bagi para pekerja
            melalui ahli gizi untuk memberikan panduan tentang kebiasaan makan
            sehat dan gizi seimbang. Dukungan kesehatan mental juga menjadi
            salah satu inisiatif yang diusung melalui program kesadaran
            kesehatan mental dan akses layanan konseling untuk mendukung
            kesejahteraan mental pekerja. "Inisiatif ini diharapkan dapat
            menjadi langkah awal kami untuk hidup lebih sehat secara
            berkelanjutan,” tutup Widodo.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Kesimpulan</h3>
          <p className="text-gray-600 text-justify">
            Pendidikan kesehatan di tempat kerja memainkan peran kunci dalam
            meningkatkan kesejahteraan karyawan dan efektivitas organisasi.
            Dengan mempromosikan gaya hidup sehat dan menyediakan dukungan
            kesehatan mental, perusahaan dapat menciptakan lingkungan kerja yang
            lebih produktif dan harmonis. Inisiatif seperti yang dilakukan oleh
            Otsuka Group menunjukkan betapa pentingnya investasi dalam kesehatan
            pekerja untuk mencapai hasil jangka panjang yang positif.
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
