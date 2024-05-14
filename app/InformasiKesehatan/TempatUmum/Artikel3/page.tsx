import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Ini Lengkap Keputusan Menkes Soal Protokol Kesehatan di Tempat Umum
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
                Jumat, 19 Juni 2020
              </span>
            </div>
          </div>
          <div className="my-auto">
          <a
              href="/InformasiKesehatan/TempatUmum"
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
              src="https://i.ibb.co/fNxDvWx/menkes-terawan-agus-putranto-6-169.jpg"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">
              Menteri Kesehatan
            </span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Menteri Kesehatan, Terawan Agus Putranto, telah mengeluarkan
            peraturan terkait protokol kesehatan
          </h3>
          <p className="text-gray-600 text-justify">
            Menteri Kesehatan, Terawan Agus Putranto, telah mengeluarkan
            peraturan terkait protokol kesehatan bagi masyarakat yang berlaku di
            tempat umum, sebagai langkah preventif untuk menghambat penyebaran
            virus Corona (COVID-19). Panduan ini diatur dalam Keputusan Menteri
            Kesehatan nomor HK.01.07/MENKES/382/2020 tentang Protokol Kesehatan
            bagi Masyarakat di Tempat dan Fasilitas Umum, yang disahkan pada 19
            Juni 2020. Tempat umum yang termasuk dalam lingkup aturan ini
            meliputi mal, pertokoan, hotel, rumah makan, fasilitas olahraga,
            moda transportasi, lokasi wisata, layanan kecantikan, sektor ekonomi
            kreatif, aktivitas keagamaan di tempat ibadah, serta penyelenggaraan
            acara
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Tujuan dari kebijakan
          </h3>
          <p className="text-gray-600 text-justify">
            Tujuan dari kebijakan ini adalah untuk meningkatkan langkah-langkah
            pencegahan dan pengendalian COVID-19 di kalangan masyarakat yang
            berada di tempat-tempat umum, dengan maksud untuk mencegah
            terjadinya klaster atau pusat penyebaran baru selama periode
            pandemi. Menurut pernyataan dalam keputusan tersebut, Menteri
            Terawan menekankan bahwa peran aktif masyarakat sangat penting dalam
            memutus mata rantai penularan COVID-19, khususnya di lokasi-lokasi
            yang sering dikunjungi, tempat dengan interaksi manusia yang tinggi,
            dan tempat berkumpulnya orang banyak.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Menteri Terawan juga menyoroti pentingnya adaptasi masyarakat
            terhadap norma-norma baru dalam situasi pandemi, yang menekankan
            pada prinsip-prinsip kebersihan, kesehatan, dan kepatuhan. Dia
            menegaskan bahwa semua elemen masyarakat harus berpartisipasi aktif
            dalam pelaksanaan kebiasaan baru ini, serta memanfaatkan semua
            sumber daya yang tersedia.
          </p>
          <p className="text-gray-600 text-justify">
            Terawan menyampaikan bahwa risiko penularan COVID-19 cenderung
            tinggi di tempat-tempat umum karena aktivitas pergerakan dan
            interaksi sosial yang tinggi. Oleh karena itu, mitigasi dampak
            pandemi, terutama di tempat-tempat umum, menjadi hal yang sangat
            penting untuk menjaga roda ekonomi tetap berputar.
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
