/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Menu Gizi Seimbang, Kunci Cegah Obesitas kala di Rumah Saja
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
                Info Sehat FKUI
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Rabu, 15 Mei 2024
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="https://fk.ui.ac.id/infosehat/menu-gizi-seimbang-kunci-cegah-obesitas-kala-di-rumah-saja/"
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
              src="https://th.bing.com/th/id/OIP.0mEadCFwCkO5hpGRV8EYlgHaHa?rs=1&pid=ImgDetMain/" // Ganti dengan URL gambar yang tepat
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
            Pandemi COVID-19 telah membawa banyak perubahan dalam kehidupan sehari-hari, termasuk pola makan dan aktivitas fisik. Salah satu masalah kesehatan yang semakin banyak dibahas adalah obesitas. Banyak orang mengalami kenaikan berat badan selama pandemi, terutama karena mobilitas yang dibatasi dan kecenderungan memesan makanan siap saji. Ahli nutrisi dari Fakultas Kedokteran Universitas Indonesia (FKUI), Prof. Dr. dr. Saptawati Bardosono, mengungkapkan kekhawatiran terhadap peningkatan berat badan akibat perubahan pola hidup ini.
          </p>
          <p className="text-gray-600 text-justify">
            Untuk mencegah kenaikan berat badan selama pandemi, beberapa langkah dapat diambil. Saptawati menekankan pentingnya mengatur jenis energi yang masuk dalam makanan dan memperbanyak aktivitas fisik meski di rumah. Menu gizi seimbang sangat penting untuk diperhatikan. Selain untuk mengontrol berat badan, makanan yang kaya nutrisi juga bermanfaat untuk menjaga kesehatan tubuh secara keseluruhan.
          </p>
          <p className="text-gray-600 text-justify">
            "Memilih makanan pokok yang memiliki indeks glikemik rendah, seperti beras merah, dan mengonsumsi lauk pauk nabati atau hewani rendah lemak dengan cara memasak yang sehat tanpa digoreng adalah langkah yang baik. Selain itu, memperbanyak sayur dan buah dalam diet harian sangat dianjurkan," jelas Saptawati.
          </p>
          <p className="text-gray-600 text-justify">
            Penting untuk memastikan bahwa makanan yang masuk ke dalam tubuh mengandung zat gizi lengkap. Kekurangan nutrisi dapat menyebabkan masalah kesehatan lain. Sebagai perbandingan, jumlah asupan energi yang ideal adalah 50-60 persen dari karbohidrat, 15-20 persen dari protein, dan kurang lebih 30 persen dari lemak. Sayur dan buah tidak menyumbang banyak energi sehingga bisa dikonsumsi dalam jumlah banyak untuk menimbulkan rasa kenyang dan menyediakan serat yang bermanfaat bagi kesehatan.
          </p>
          <p className="text-gray-600 text-justify">
            "Sementara sayur dan buah dianggap tidak menyumbang ke asupan energi, mereka bisa dikonsumsi banyak untuk menimbulkan rasa kenyang dan kandungan seratnya dapat bermanfaat bagi kesehatan," tambahnya.
          </p>
          <p className="text-gray-600 text-justify">
            Bagi mereka yang sudah mengalami kenaikan berat badan yang signifikan, sering kali muncul godaan untuk menurunkan berat badan dengan cepat melalui diet ketat. Namun, pendekatan ini bisa berbahaya. Memangkas asupan nutrisi tertentu secara drastis dapat menyebabkan kekurangan nutrisi dan masalah kesehatan lainnya. Makanan yang masuk ke dalam tubuh harus tetap mengandung zat gizi lengkap untuk menghindari malnutrisi.
          </p>
          <p className="text-gray-600 text-justify">
            "Diet makanan bukan satu-satunya cara untuk memiliki berat badan yang ideal. Olahraga juga harus dilakukan secara teratur," kata Saptawati. Menggabungkan diet yang sehat dengan olahraga teratur adalah kunci keberhasilan dalam program penurunan berat badan. Olahraga membantu membakar energi yang berlebihan dan meningkatkan kesehatan secara keseluruhan.
          </p>
          <p className="text-gray-600 text-justify">
            Menjaga kesehatan dan berat badan ideal selama pandemi memerlukan komitmen untuk menjalani gaya hidup sehat. Dengan memperhatikan pola makan yang seimbang dan tetap aktif secara fisik, kita dapat mengatasi tantangan yang muncul akibat pandemi. Edukasi tentang pentingnya nutrisi yang tepat dan aktivitas fisik harus terus disebarluaskan agar masyarakat dapat mengadopsi kebiasaan sehat yang berkelanjutan.
          </p>
          <p className="text-gray-600 text-justify">
            Obesitas merupakan masalah kesehatan serius yang memerlukan perhatian khusus, terutama di masa pandemi. Dengan strategi yang tepat dan komitmen untuk hidup sehat, kita dapat mencegah kenaikan berat badan dan menjaga kesehatan tubuh secara keseluruhan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
