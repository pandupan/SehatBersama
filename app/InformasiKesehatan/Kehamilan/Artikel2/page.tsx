import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Jarak Ideal antara Kehamilan Pertama dan Kehamilan Kedua
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
                sabtu, 14 Oktober 2023 13:20
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/Kehamilan"
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
              src="/image/kehamilan2.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Kehamilan kedua</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Mengapa Jarak Kehamilan Perlu Diperhitungkan?
          </h3>
          <p className="text-gray-600 text-justify">
            Sejumlah pasangan memiliki kehendak yang berbeda-beda terkait jarak
            usia antar anak-anak mereka. Beberapa menginginkan jarak yang
            lumayan dekat dengan alasan supaya anak-anak lebih ‘nyambung’ ketika
            berkomunikasi nantinya. Selain itu, ada pula yang mengehendaki punya
            anak kedua setelah menunggu lebih lama; misalnya saja lima tahun
            atau lebih, supaya mereka dapat mencurahkan kasih sayang penuh
            kepada anak pertama. Mana yang lebih baik tentu menjadi opini mutlak
            masing-masing pasangan.
          </p>
          <p className="text-gray-600 text-justify">
          Meskipun demikian, teori mempunyai patokan tersendiri tentang jarak kehamilan antara anak pertama-kedua; kedua-ketiga, dan seterusnya. Jarak ideal, yang dihitung sejak ibu melahirkan sampai hamil kembali, adalah dua hingga lima tahun. Hal ini berdasarkan pada perhitungan-perhitungan secara medis dan psikologis.
          </p>
          <p className="text-gray-600 text-justify">
          Yang pertama, adalah dari segi medis. Waktu minimal dua tahun memungkinkan si ibu untuk melakukan persiapan kehamilan secara lebih baik. Ibu perlu mendapatkan kembali kesehatannya yang mungkin sempat menurun ketika hamil dan melahirkan serta merawat jabang bayi yang baru dilahirkan. Pun melahirkan dalam jangka waktu dekat akan mempengaruhi kesehatan ibu secara negatif.
          </p>
          <p className="text-gray-600 text-justify">
          Di samping itu, waktu dua tahun merupakan waktu ideal bagi seorang bayi untuk mendapatkan ASI (Air Susu Ibu). ASI dua tahun akan lebih memberikan dampak positif bagi kecerdasan dan kesehatan sang anak. Jika ibu ternyata hamil kembali saat masih menyusui, kemungkinan yang sering terjadi adalah kurangnya perhatian terhadap anak (pertama) dan berkurangnya nutrisi dari ASI yang diberikan padanya, karena fokus juga harus diberikan kepada bayi dalam kandungan. Dengan demikian, anak pertama tidak akan mendapatkan jumlah ideal perhatian dan ASI dari ibunya, yang mungkin memengaruhi pertumbuhannya.
          </p>
          <p className="text-gray-600 text-justify">
          Yang kedua, dari segi psikologis anak. Umumnya, secara teori, anak bisa mulai mengerti atau bisa menerima adanya adik ketika sudah berusia di atas dua tahun. Oleh karena itu, jika ibu mereka hamil dan melahirkan lagi sebelum mereka mencapai usia itu, kemungkinan akan sulit bagi mereka untuk menerima keberadaan ‘orang baru’ di tengah keluarganya.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Menghitung Kehamilan Demi Jarak Ideal</h3>
          <p className="text-gray-600 text-justify">
          Agar Ibu bisa mendapatkan kondisi kesehatan yang bagus sekaligus memberikan apa yang sudah menjadi hak anak pertama Ibu (berupa perhatian dan ASI), sangat disarankan bagi Ibu untuk menghitung kehamilan. Catat baik-baik waktu pertama Ibu hamil, tanggal kelahiran, dan tanggal yang menandai bahwa Ibu sudah ‘boleh hamil kembali’. Dengan demikian, kehamilan kedua yang terlalu cepat bisa disiasati dengan baik.
          </p>
          <p className="text-gray-600 text-justify">
          Salah satu upaya untuk ‘menunda’ kehamilan hingga jarak ideal adalah dengan menyusui selama dua tahun penuh. Selain akan memberikan nutrisi bagus untuk anak, menyusui juga bermenfaat untuk memperkecil kemungkinan hamil kembali dalam rentang waktu dua tahun tersebut.
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
