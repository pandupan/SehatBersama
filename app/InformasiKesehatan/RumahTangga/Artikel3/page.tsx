import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
        Sakit Gigi Tak Kunjung Sembuh, Ini Penyebab dan Cara Mengatasinya
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
                Selasa, 20 November 2023 10:20
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
          <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
            <Image
              src="/image/penyakit3.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Sakit gigi tak kunjung sembuh bisa terjadi karena infeksi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Penyebab sakit gigi berkepanjangan</h3>
          <p className="text-gray-600 text-justify">
          Saat sakit gigi yang kamu rasakan tidak kunjung sembuh, maka tandanya ada infeksi dan peradangan yang sedang berlangsung di situ. Infeksi yang ada membuat saraf gigi jadi rusak, bahkan memicu terbentuknya abses di ujung akar gigi.

Kondisi ini sebenarnya diawali oleh lubang kecil yang tidak dirawat dan lama kelamaan jadi makin besar.  Ketika lubang makin besar, maka kerusakan yang terjadi juga makin dalam. 
          </p>
          <p className="text-gray-600 text-justify">
          Di bagian dalam gigi terdapat pulpa yang mengandung jaringan, saraf, dan pembuluh darah. Saat gigi berlubang atau retak, udara dan kuman dapat masuk ke dalam gigi, lalu mengiritasi dan menginfeksi saraf di pulpa yang sensitif. Inilah yang menyebabkan sakit gigi.

Kalau sudah begini, biasanya sakit gigi yang dirasakan tumpul, tapi konsisten. Saat peradangan sedang parah, rasa sakit gigi bisa menyebar ke area lain termasuk rahang dan kepala. Pada saat-saat tertentu, sakit gigi bisa terasa tajam tapi hal ini jarang terjadi.  
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Cara mengatasi sakit gigi berkepanjangan</h3>
          <p className="text-gray-600 text-justify">
          Penanganan sakit gigi berkepanjangan bergantung pada kondisi masing-masing kasus. Dokter akan melakukan pemeriksaan kondisi gigi sebelum merekomendasikan jenis perawatan untuk sakit gigi tak kunjung sembuh.

Beberapa pilihan perawatan untuk sakit gigi tak kunjung sembuh meliputi:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          1. Obat sakit gigi
          </h3>
          <p className="text-gray-600 text-justify">
          Obat pereda nyeri dan antibiotik dapat meringankan gejala sakit gigi dan menghilangkan infeksi. Namun, efek dari obat sakit gigi hanya bersifat sementara dan rasa nyeri yang menyiksa bisa kambuh lagi jika penyebab utamanya tidak diatasi hingga tuntas.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          2. Tambal gigi
          </h3>
          <p className="text-gray-600 text-justify">
          Penambalan gigi adalah cara paling efektif untuk meredakan sakit gigi yang tidak kunjung sembuh. Dengan catatan, lubangnya belum terlalu besar hingga merusak saraf. 
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          3. Perawatan saluran akar
          </h3>
          <p className="text-gray-600 text-justify">
          Kalau lubang gigi sudah sangat besar dan saraf gigi sudah rusak, maka solusi untuk meredakan nyeri berkepanjangan yang kamu rasakan adalah dengan perawatan saluran akar. 

Setelah perawatan selesai, dokter gigi akan menambal permanen gigi sehingga bentuknya bisa kembali normal. Namun kalau kerusakan bagian mahkotanya sudah sangat besar tapi akarnya masih kuat, maka bisa dipasangkan crown gigi, inlay, atau onlay. 
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
          4. Cabut gigi
          </h3>
          <p className="text-gray-600 text-justify">
          Cabut gigi adalah cara untuk mengatasi gigi yang sudah rusak parah, sehingga tidak mungkin lagi untuk dirawat saluran akarnya. 

Infeksi gigi parah yang tidak diobati, dapat menyebar ke area lain, termasuk tulang rahang, wajah, tenggorokan, dan juga kepala. Kondisi ini bisa berakibat fatal bahkan mungkin mengancam jiwa.

Segera kunjungi dokter jika sakit gigi disertai dengan demam, berlangsung lebih dari satu hari, menyebabkan masalah menggigit atau mengunyah, pembengkakan, gusi merah, kesulitan menelan, atau disertai rasa dan bau tidak enak.

Demikian juga jika gigi patah atau tanggal, segera kunjungi dokter gigi sebelum menyebabkan sakit gigi tak kunjung sembuh.
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
