/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Peran Fasilitas Kesehatan Jadi Kunci Negara Sehat
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
                Putri
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Rabu, 31 Januari 2024 22:07 WIB
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="https://infopublik.id/kategori/nasional-sosial-budaya/821930/peran-fasilitas-kesehatan-jadi-kunci-negara-sehat"
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
              src="https://infopublik.id/assets/upload/headline//bpjs22.jpg" // Ganti dengan URL gambar yang tepat
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
            Menteri Kesehatan (Menkes) Budi Gunadi Sadikin telah menyoroti peran penting fasilitas kesehatan dalam memperkuat fondasi kesehatan suatu negara. Pernyataannya ini mencuat dalam kegiatan Silaturahmi Presiden RI dengan peserta Jaminan Kesehatan Nasional (JKN) di Kabupaten Gunungkidul, Provinsi DI Yogyakarta pada Selasa, 30 Januari 2024.
          </p>
          <p className="text-gray-600 text-justify">
            Menkes Budi menekankan bahwa kualitas pelayanan di fasilitas kesehatan merupakan salah satu faktor kunci untuk memastikan pasien merasa aman dan nyaman. "Kita harus terus meningkatkan kualitas layanan di fasilitas kesehatan. Apabila pelayanan di fasilitas kesehatan memuaskan, maka pasien akan merasa aman dan nyaman," ujarnya.
          </p>
          <p className="text-gray-600 text-justify">
            Di samping menggarisbawahi pentingnya pelayanan yang berkualitas, Menkes Budi juga membangun kesadaran akan pentingnya penerapan pola hidup sehat sebagai langkah preventif. Beliau menjelaskan bahwa kesadaran akan pentingnya kesehatan dan upaya pencegahan merupakan modal utama dalam menjaga kesejahteraan individu dan masyarakat secara keseluruhan. Menurutnya, kebiasaan hidup sehat akan membantu mengurangi risiko penyakit dan memperpanjang usia harapan hidup.
          </p>
          <p className="text-gray-600 text-justify">
            Presiden Joko Widodo juga memberikan apresiasi yang tinggi terhadap Program JKN yang telah memberikan jaminan kesehatan kepada masyarakat Indonesia. Baginya, memberikan jaminan kesehatan adalah bagian tak terpisahkan dari tugas negara untuk memastikan kesejahteraan rakyat. Dalam pandangannya, investasi dalam kesehatan adalah investasi bagi masa depan bangsa. Dalam konteks ini, pelayanan kesehatan yang berkualitas dan terjangkau merupakan pijakan utama dalam mewujudkan kesejahteraan masyarakat secara keseluruhan.
          </p>
          <p className="text-gray-600 text-justify">
            Direktur Utama BPJS Kesehatan, Ghufron Mukti, menambahkan data konkret terkait pencapaian Program JKN. Menurutnya, jumlah peserta JKN telah mencapai angka yang signifikan, mencerminkan tingginya tingkat partisipasi masyarakat dalam program tersebut. Dengan pencapaian ini, diharapkan bahwa kualitas pelayanan di fasilitas kesehatan akan terus ditingkatkan guna memastikan kepuasan dan kesejahteraan masyarakat pengguna layanan kesehatan. Ghufron menegaskan bahwa pencapaian ini merupakan hasil kerja keras dari seluruh stakeholder terkait, termasuk pemerintah dan masyarakat. Diharapkan bahwa pelayanan kesehatan yang berkualitas akan menjadi pilar utama dalam membangun kesejahteraan bangsa yang berkelanjutan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
