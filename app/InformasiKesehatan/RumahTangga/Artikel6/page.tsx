/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Mengadopsi Gaya Hidup Sehat untuk Pencegahan Tuberkulosis TBC
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
                Nurkholis
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                25 Agustus 2023
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/PencegahanTBC"
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
              src="https://th.bing.com/th/id/OIP.RuUoAAKGx4OLS_msje0OJAHaF7?w=249&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Ganti dengan URL gambar yang tepat
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
            Tuberkulosis (TBC) adalah penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis. Memahami gejala dan cara pencegahan TBC sangat penting, terutama bagi generasi muda. Dengan pengetahuan ini, masyarakat dapat melakukan deteksi dini, penanganan yang tepat, dan upaya pencegahan yang efektif. Penerapan Perilaku Hidup Bersih dan Sehat (PHBS) di lingkungan rumah merupakan langkah kunci dalam mencegah penyebaran TBC. Berikut adalah lima kebiasaan hidup sehat yang bisa diterapkan:
          </p>
          <p className="text-gray-600 text-justify">
            <b>1. Perhatikan Pola Tidur yang Teratur</b><br/>
            Pola tidur yang teratur sangat penting untuk menjaga kesehatan. Tidur adalah cara alami tubuh untuk "mengisi ulang daya". Gangguan pada pola tidur dapat melemahkan sistem kekebalan tubuh, meningkatkan risiko terkena berbagai penyakit, termasuk TBC. Bakteri Mycobacterium tuberculosis, penyebab TBC, lebih mudah menyerang tubuh dengan sistem kekebalan yang lemah. Pastikan Anda memiliki waktu istirahat yang cukup dan mengikuti pola tidur yang baik.
          </p>
          <p className="text-gray-600 text-justify">
            <b>2. Konsumsi Makanan Bernutrisi dan Seimbang</b><br/>
            Asupan nutrisi yang seimbang berperan penting dalam membangun pertahanan tubuh terhadap penyakit. Mengonsumsi makanan bergizi memberikan perlindungan ekstra dari ancaman penyakit, termasuk TBC. Mulailah dengan mengurangi kadar minyak, garam, dan tepung dalam makanan sehari-hari untuk menjaga pola makan yang sehat.
          </p>
          <p className="text-gray-600 text-justify">
            <b>3. Menjaga Kebersihan Rumah dan Lingkungan</b><br/>
            Bakteri Mycobacterium tuberculosis dapat tersebar melalui udara dan bertahan dalam kondisi lembab dan minim sinar matahari. Oleh karena itu, menjaga kebersihan rumah dan lingkungan sangat penting. Pastikan rumah tetap higienis, memiliki sirkulasi udara yang baik, dan mendapat paparan sinar matahari yang cukup. Langkah ini juga membantu menjaga kesejahteraan mental dan mengurangi stres.
          </p>
          <p className="text-gray-600 text-justify">
            <b>4. Lakukan Imunisasi BCG</b><br/>
            Vaksin Bacillus Calmette-Guerin (BCG) merupakan langkah pencegahan TBC yang efektif. Imunisasi BCG adalah salah satu dari lima vaksin dasar yang wajib diberikan kepada anak-anak. Vaksin ini memberikan perlindungan terhadap berbagai bentuk TBC, termasuk TBC selaput otak, TBC tulang, dan TBC milier. Meskipun perilaku hidup sehat tetap penting, imunisasi BCG memberikan perlindungan tambahan yang signifikan.
          </p>
          <p className="text-gray-600 text-justify">
            <b>5. Rutin Berolahraga</b><br/>
            Meskipun di masa pandemi, olahraga tetap dapat dilakukan tanpa harus keluar rumah. Olahraga ringan seperti jogging di treadmill, plank, atau push-up bisa dijadikan pilihan untuk meningkatkan sistem kekebalan tubuh. Hanya 10-20 menit olahraga ringan setiap hari sudah cukup untuk meningkatkan peredaran darah dan menjaga kesehatan jantung.
          </p>
          <p className="text-gray-600 text-justify">
            Mengimplementasikan PHBS di lingkungan rumah merupakan langkah penting dalam pencegahan TBC. Masyarakat, khususnya generasi muda, perlu diberdayakan dengan pengetahuan dan praktik kebiasaan sehat untuk melindungi diri dan orang-orang di sekitar mereka dari risiko TBC. Dengan lingkungan yang bersih dan sehat, serta kebiasaan hidup yang baik, penyebaran TBC dapat ditekan secara signifikan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
