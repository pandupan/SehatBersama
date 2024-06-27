import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Ciptakan Udara Bersih di Rumah, Panduan Praktis Ruangan Segar dan
          Hidup Lebih Sehat
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
                Diki Febrianto
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                13 Januari 2024
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
              src="https://cdn.discordapp.com/attachments/1005701738109620237/1255672312464674836/FotoJet-40-1043640164.png?ex=667dfb78&is=667ca9f8&hm=1e638b22f89e56a2fff025af84c23e459f03dd9e26ff622f5ffde38b661b05a0&"
              alt="article"
              className="object-contain items-center w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Ilustrasi</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-md font-bold text-gray-600">
            Ciptakan Udara Bersih di Rumah, Panduan Praktis Ruangan Segar dan
            Hidup Lebih Sehat
          </h3>
          <p className="text-gray-600 text-justify">
            Udara bersih adalah kunci untuk menjaga ruangan tetap segar dan
            sehat. Polusi udara dalam ruangan dapat menyebabkan berbagai
            gangguan kesehatan, terutama pada lansia dan anak-anak, seperti
            kanker paru-paru, pneumonia, dan iritasi kulit. Untuk menghindari
            risiko penyakit yang disebabkan oleh polusi udara, penting bagi kita
            untuk memperhatikan kualitas udara di dalam rumah.
            <br />
            <br />
            Udara yang bersih membantu mencegah partikel berbahaya masuk ke
            dalam tubuh dan mendukung sistem pernapasan yang sehat, terutama
            bagi mereka yang memiliki kondisi kesehatan yang lebih rentan. Oleh
            karena itu, menjaga kebersihan udara bukan hanya sekedar menjaga
            kenyamanan, tetapi juga investasi dalam kesehatan jangka panjang.
          </p>
          <br />
          <h3 className="text-md font-bold text-gray-600">
            Berikut adalah beberapa cara untuk menciptakan udara bersih di
            rumah:
          </h3>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            1. Ventilasi yang Baik
            <br />
            Ventilasi yang baik membantu mengatasi polusi udara dalam rumah,
            seperti karbon monoksida dan gas radon yang berasal dari tabung gas,
            bahan bangunan, dan air leding. Pastikan setiap ruangan memiliki
            ventilasi yang memadai, terutama di dapur, kamar mandi, dan kamar
            tidur, serta buka jendela secara rutin.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            2. Tanaman Hias Penyaring Udara
            <br />
            Tanaman hias tidak hanya mempercantik rumah tetapi juga membantu
            menyaring udara. Beberapa tanaman yang efektif menyaring senyawa
            organik yang mudah menguap adalah kaktus, daun Ivy (Hedera Helix),
            Dracaena, Sukulen, dan Lili Perdamaian (Spathiphyllum).
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            3. Membersihkan Debu secara Rutin
            <br /> Membersihkan debu secara rutin menggunakan penyedot debu
            berkualitas tinggi dengan filter HEPA dapat menghilangkan serbuk
            sari, debu, dan bulu hewan peliharaan. Fokus pada karpet, sofa,
            tempat tidur, dan area lain yang sering terkena debu.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            4. Penggunaan Produk Ramah Lingkungan
            <br />
            Produk kebersihan rumah seperti pembersih lantai, kaca, dan kloset
            sering mengandung bahan kimia berbahaya yang dapat mencemari udara.
            Pilih produk dengan bahan yang lebih aman dan perhatikan label
            kemasan sebelum membeli.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            5. Hindari Merokok di Sekitar Rumah
            <br /> Merokok dalam rumah mencemari udara dan partikel asap rokok
            dapat menempel pada permukaan barang. Disarankan untuk merokok di
            luar ruangan dan membersihkan area setelah digunakan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            6. Menggunakan Diffuser
            <br />
            Diffuser dengan essential oil dapat membantu membersihkan udara
            dalam rumah, mengurangi penyumbatan hidung, tenggorokan, dan
            peradangan akibat polusi udara.
          </p>
        </div>

        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
            Menjaga kebersihan udara di rumah bukan hanya tentang meningkatkan
            kenyamanan, tetapi juga tentang melindungi kesehatan seluruh anggota
            keluarga. Ini sejalan dengan prinsip-prinsip Pola Hidup Bersih dan
            Sehat (PHBS), yang menjadi landasan penting bagi kehidupan yang
            lebih baik. PHBS tidak hanya bermanfaat untuk kesehatan fisik tetapi
            juga meningkatkan kualitas hidup secara keseluruhan, menciptakan
            suasana yang lebih menyenangkan dan bebas dari polusi udara.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
