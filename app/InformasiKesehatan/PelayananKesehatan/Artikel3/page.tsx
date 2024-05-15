/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Masyarakat Dihimbau Memanfaatkan Pelayanan Kesehatan Saat ”GERMAS”
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
                Dinkominfo
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                3 November 2023
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="https://purbalinggakab.go.id"
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
              src="https://th.bing.com/th/id/OIP.Hg7wFIaHuHEJMF3Ium_KIwHaEl?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Ganti dengan URL gambar yang tepat
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
            Gerakan Masyarakat Hidup Sehat (GERMAS) adalah inisiatif nasional yang dicanangkan oleh pemerintah Indonesia untuk meningkatkan kesadaran dan partisipasi masyarakat dalam menjaga kesehatan. Dengan slogan "Sehat Dimulai dari Diri Sendiri", GERMAS mendorong masyarakat untuk aktif melakukan berbagai aktivitas yang mendukung kesehatan, seperti olahraga rutin, makan makanan bergizi, dan cek kesehatan secara berkala. Salah satu poin penting yang ditekankan dalam GERMAS adalah pemanfaatan pelayanan kesehatan yang tersedia.
          </p>
          <p className="text-gray-600 text-justify">
            Pemerintah melalui Kementerian Kesehatan mengimbau seluruh masyarakat untuk memanfaatkan pelayanan kesehatan yang disediakan oleh fasilitas kesehatan. Menurut Menteri Kesehatan, Budi Gunadi Sadikin, layanan kesehatan yang ada saat ini sudah cukup memadai dan terus ditingkatkan kualitasnya. "Kami mengajak masyarakat untuk rutin memeriksakan kesehatan mereka di puskesmas atau rumah sakit terdekat. Dengan begitu, kita dapat mendeteksi dini penyakit dan mencegah komplikasi yang lebih serius," ujarnya.
          </p>
          <p className="text-gray-600 text-justify">
            Pemanfaatan pelayanan kesehatan tidak hanya terbatas pada pemeriksaan rutin, tetapi juga mencakup imunisasi, pemeriksaan gigi, pemeriksaan ibu hamil, serta konseling gizi dan kesehatan mental. Program-program seperti Posbindu PTM (Pos Pembinaan Terpadu Penyakit Tidak Menular) di puskesmas, misalnya, dirancang untuk memantau kesehatan masyarakat secara berkala dan memberikan edukasi terkait gaya hidup sehat. Dengan adanya program ini, diharapkan masyarakat dapat lebih sadar akan pentingnya menjaga kesehatan sejak dini.
          </p>
          <p className="text-gray-600 text-justify">
            Partisipasi aktif masyarakat dalam GERMAS sangat diperlukan untuk mencapai tujuan jangka panjang program ini, yaitu meningkatkan kualitas hidup dan kesejahteraan masyarakat. GERMAS tidak hanya berfokus pada aspek fisik saja, tetapi juga kesehatan mental dan sosial. Masyarakat diajak untuk tidak ragu-ragu memanfaatkan layanan kesehatan yang ada, baik untuk keperluan pencegahan, pengobatan, maupun rehabilitasi. "Dengan memanfaatkan pelayanan kesehatan yang ada, kita bersama-sama dapat mewujudkan masyarakat yang lebih sehat dan produktif," tambah Menteri Kesehatan.
          </p>
          <p className="text-gray-600 text-justify">
            Untuk mendukung keberhasilan GERMAS, pemerintah juga menggandeng berbagai pihak seperti lembaga pendidikan, organisasi masyarakat, dan sektor swasta. Kerjasama lintas sektor ini diharapkan dapat memperluas jangkauan program GERMAS dan meningkatkan kesadaran serta partisipasi masyarakat. Melalui berbagai kegiatan seperti kampanye kesehatan, penyuluhan, dan pemeriksaan kesehatan gratis, diharapkan masyarakat dapat lebih mudah mengakses informasi dan layanan kesehatan yang dibutuhkan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
