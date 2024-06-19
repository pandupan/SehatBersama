import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          7 Langkah Bijak Memproses dan Membuang Sampah Medis Rumah Tangga
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
                Christovel Ramot
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                6 Maret 2024
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
              src=""
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
            Salah satu tugas guru dan orang tua adalah mendidik dan memantau
            perilaku hidup bersih dan sehat (PHBS) pada anak.
          </h3>
          <p className="text-gray-600 text-justify">
            Kesehatan rumah tangga tidak hanya mencakup kebersihan fisik, tetapi
            juga penanganan yang aman terhadap sampah medis. Sampah medis rumah
            tangga mencakup benda-benda yang terkontaminasi oleh darah, cairan
            tubuh, atau bahan kimia berbahaya. Penting untuk mengelola sampah
            medis dengan bijak agar tidak menimbulkan risiko kesehatan bagi
            penghuni rumah tangga dan lingkungan sekitar.
            <br />
            <br />
            Sampah Medis Rumah TanggaSampah medis rumah tangga adalah
            benda-benda yang terkontaminasi oleh darah, cairan tubuh, atau bahan
            kimia berbahaya, yang dihasilkan dari perawatan kesehatan di rumah.
            Contohnya termasuk jarum suntik, alat pengukur glukosa darah, perban
            bekas, peralatan nebulizer, dan obat-obatan kedaluwarsa.
          </p>
          <br />
          <h3 className="text-md font-bold text-gray-600">
            Cara Mengolah dan Membuang Sampah Medis Rumah Tangga
          </h3>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            1. Pisahkan Sampah Medis <br />- Sediakan wadah khusus berwarna
            mencolok (seperti kuning atau merah) untuk sampah medis.
            <br /> - Beri label &quot;Sampah Medis&quot; agar tidak tercampur
            dengan jenis sampah lain.
            <br /> - Pisahkan sampah tajam seperti jarum suntik dalam wadah yang
            keras dan tahan bocor untuk mencegah kecelakaan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            2. Penyimpanan yang Aman
            <br /> - Tempatkan wadah sampah medis di lokasi yang tidak mudah
            dijangkau oleh anak- anak dan hewan peliharaan.
            <br /> - Pastikan wadah kedap udara dan tahan kebocoran untuk
            mencegah kontaminasi.
            <br /> - Selalu tutup rapat wadah sampah medis setelah digunakan
            untuk menghindari penyebaran bakteri atau virus.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            3. Jangan Mencampur dengan Sampah Organik
            <br /> - Edukasikan anggota keluarga tentang pentingnya tidak
            mencampur sampah medis dengan sampah organik atau jenis sampah
            lainnya.
            <br /> - Kelola sampah organik dalam wadah terpisah dan buang sampah
            medis sesuai aturan setempat.
            <br />- Gunakan layanan pengelolaan sampah medis profesional jika
            memungkinkan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            4. Kemas dengan Aman
            <br /> - Setelah dimasukkan ke dalam wadah yang tepat, pastikan
            untuk mengemas dan menyegel wadah tersebut dengan baik.
            <br /> - Gunakan pita perekat untuk menyegel wadah plastik atau
            kotak, dan berikan label yang jelas bahwa ini adalah sampah medis.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            5. Pemusnahan yang Aman
            <br /> - Ikuti pedoman atau aturan pemusnahan sampah medis yang
            ditetapkan oleh otoritas kesehatan lokal.
            <br /> - Gunakan layanan pemusnahan sampah medis profesional jika
            tersedia.
            <br /> - Untuk jarum dan benda tajam lainnya, gunakan kotak
            pemusnahan khusus dan serahkan ke pusat layanan kesehatan atau
            layanan pemusnahan yang aman.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            6. Hindari Penggunaan Ulang
            <br /> - Edukasikan anggota keluarga tentang bahaya penggunaan ulang
            alat medis yang seharusnya dibuang.
            <br /> - Tandai alat medis sekali pakai setelah digunakan untuk
            mencegah penggunaan ulang secara tidak sengaja.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            7. Konsultasi dengan Pusat Layanan Kesehatan
            <br /> - Beberapa pusat layanan kesehatan atau apotek menawarkan
            program pengambilan sampah medis atau pengembalian alat tajam yang
            sudah digunakan. Pusat layanan kesehatan dapat memberikan informasi
            dan panduan tentang cara menyimpan sampah medis sebelum pemusnahan
            dan rekomendasi wadah penyimpanan yang tepat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            <h3 className="text-md font-bold text-gray-600">
              Manfaat Mengelola Sampah Medis dengan Bijak
            </h3>
            <br/>
            Dengan mengikuti langkah-langkah di atas, kita dapat meminimalkan
            risiko kontaminasi dan melindungi diri serta anggota keluarga dari
            bahaya yang mungkin ditimbulkan oleh sampah medis. Konsultasikan
            dengan pusat layanan kesehatan jika memerlukan bantuan tambahan
            dalam mengelola sampah medis rumah tangga secara aman dan efektif.
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
