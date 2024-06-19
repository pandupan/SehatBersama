/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Kehidupan Sehat dan Sejahtera: Upaya Mewujudkan Pelayanan Kesehatan yang Lebih Baik di Indonesia
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
                Muflif Daffa
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                13 Januari 2024 15:04
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/PelayananKesehatan"
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
              src="https://assets.kompasiana.com/items/album/2024/01/14/homecare2-65a3e92412d50f2c706dfef7.png?t=o&v=740&x=416" // Ganti dengan URL gambar yang tepat
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
            Kehidupan sehat dan sejahtera bagi seluruh penduduk Indonesia merupakan tujuan yang diupayakan oleh banyak pihak. Untuk mencapai tujuan ini, berbagai aspek harus diperhatikan, seperti layanan kesehatan dasar dan rujukan, peningkatan kebersihan lingkungan, penyediaan farmasi dan alat kesehatan, pencegahan dan pengendalian penyakit menular dan tidak menular, rehabilitasi penyalahgunaan NAPZA, serta layanan kesehatan reproduksi dan KB bagi perempuan usia reproduksi, termasuk remaja. Pemerintah berkomitmen untuk meningkatkan akses layanan kesehatan yang terjangkau dan berkualitas dengan menerapkan Rekam Medis Elektronik (RME). Jejaring Nasional Pendidikan Kesehatan (JNPK) merupakan organisasi yang menyatukan tenaga ahli dan pemerhati di bidang pendidikan kesehatan.
          </p>
          <p className="text-gray-600 text-justify">
            Pendidikan kesehatan juga menjadi komponen penting dalam mencapai tujuan ini. Pendidikan kesehatan adalah proses pembelajaran yang ditujukan kepada individu atau kelompok masyarakat mengenai nilai-nilai kesehatan. Aspek penting seperti pola makan sehat, olahraga, dan akses layanan kesehatan harus diperhatikan untuk mencapai tujuan ini. Dalam upaya mencapai tujuan kehidupan sehat dan sejahtera bagi seluruh penduduk Indonesia, pendidikan kesehatan di sekolah bagi peserta didik juga sangat penting. Pendidikan kesehatan adalah bimbingan dan tuntunan yang diberikan kepada peserta didik mengenai berbagai aspek kesehatan, seperti gizi, kebersihan, dan perawatan kesehatan.
          </p>
          <p className="text-gray-600 text-justify">
            Pemerintah melakukan lima upaya utama untuk memperkuat layanan kesehatan: penyediaan tenaga kesehatan yang memadai, peningkatan sarana pelayanan primer, mekanisme rujukan yang efektif, penguatan peran Dinas Kesehatan Kabupaten/Kota dan Provinsi melalui sosialisasi, serta dukungan lintas sektor berupa regulasi, infrastruktur, dan pendanaan. Untuk memenuhi pelayanan kesehatan masyarakat secara berkesinambungan, pemerintah juga melakukan penguatan Jaminan Kesehatan Nasional (JKN) sebagai skema asuransi sosial wajib, meningkatkan mutu fasilitas pelayanan kesehatan, dan menyederhanakan tarif layanan.
          </p>
          <p className="text-gray-600 text-justify">
            Mewujudkan kehidupan sehat dan sejahtera bagi seluruh penduduk Indonesia memerlukan partisipasi dari semua pihak. Pemerintah tidak dapat bekerja sendiri; dukungan dan bantuan dari seluruh komponen bangsa sangat dibutuhkan untuk mencapai layanan kesehatan yang lebih baik. Setiap individu dan kelompok masyarakat diharapkan dapat berperan aktif dalam menjaga dan meningkatkan kesehatan, sehingga tujuan nasional untuk mencapai kehidupan sehat dan sejahtera dapat terwujud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
