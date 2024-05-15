/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pemerintah Berupaya Memenuhi Pelayanan Kesehatan Masyarakat Secara Berkesinambungan
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
                Kristian Suryatna
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                11 Juni 2020
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="https://www.kemenkopmk.go.id/pemerintah-berupaya-memenuhi-pelayanan-kesehatan-masyarakat-secara-berkesinambungan"
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
              src="https://www.kemenkopmk.go.id/sites/default/files/articles/2020-06/A27B6966-825C-4467-A863-42A4A1300C6B.jpeg" // Ganti dengan URL gambar yang tepat
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
            Pemerintah terus berupaya membangun sistem Jaminan Kesehatan Nasional (JKN) agar dapat memenuhi pelayanan kesehatan masyarakat secara optimal dan berkesinambungan. Menurut Menteri Koordinator Bidang Pembangunan Manusia dan Kebudayaan (Menko PMK) Muhadjir Effendy, pemerintah telah menyiapkan serangkaian kebijakan untuk memperbaiki ekosistem JKN secara menyeluruh. Kebijakan tersebut mencakup rasionalisasi manfaat program sesuai kebutuhan dasar kesehatan, penerapan satu kelas rawat yang standar, dan penyederhanaan tarif layanan.
          </p>
          <p className="text-gray-600 text-justify">
            Muhadjir menjelaskan bahwa perbaikan ekosistem JKN perlu dilakukan secara sistemik. Penguatan JKN sebagai skema asuransi sosial wajib menjadi prioritas utama. Seluruh penduduk yang menjadi peserta JKN diharapkan wajib membayar iuran, dengan pemerintah menanggung biaya bagi peserta miskin atau tidak mampu. Kebijakan ini bertujuan untuk menciptakan kepesertaan yang bersifat wajib dan dapat diandalkan.
          </p>
          <p className="text-gray-600 text-justify">
            Selain itu, manfaat yang dijamin dalam program JKN mencakup kebutuhan dasar dengan kelas rawat inap standar sesuai dengan UU 40/2004. Untuk memastikan keberlanjutan program, perlu dilakukan peninjauan iuran, manfaat, dan tarif layanan secara konsisten dan reguler dengan pendekatan aktuaria yang akuntabel. Peninjauan ini mempertimbangkan pemenuhan kebutuhan dasar kesehatan, kemampuan bayar peserta, inflasi kesehatan, dan potensi perbaikan program yang ada. Pemerintah selalu mencari keseimbangan agar iuran tetap terjangkau bagi peserta mandiri dan menalangi kekurangan sebagai tanggung jawab menjaga kelangsungan JKN.
          </p>
          <p className="text-gray-600 text-justify">
            Muhadjir menekankan pentingnya prinsip gotong royong dalam JKN, di mana yang sehat membantu yang sakit, dan yang kaya membantu yang miskin. Sesuai ketentuan, besaran iuran harus direviu setiap dua tahun sekali. Namun, iuran JKN terakhir diperbarui pada tahun 2016, dan untuk iuran PBPU Kelas III belum pernah disesuaikan sejak tahun 2014. Oleh karena itu, penyesuaian besaran iuran BPJS Kesehatan untuk peserta mandiri telah diumumkan pemerintah, sebagaimana tertuang dalam Peraturan Presiden Nomor 64 Tahun 2020.
          </p>
          <p className="text-gray-600 text-justify">
            Dalam rapat dengar pendapat (RDP) yang dihadiri oleh Menteri Kesehatan, Ketua DJSN, Ketua Dewan Pengawas, dan Direktur Utama BPJS Kesehatan, terjadi diskusi dinamis antara Komisi IX DPR-RI dengan Pemerintah. Rapat tersebut menghasilkan tujuh kesimpulan, di antaranya adalah mendesak Pemerintah untuk mempercepat perbaikan tata kelola sistem JKN sesuai amanat UUD 1945, UU SJSN, dan UU BPJS. Selain itu, dilakukan kajian formulasi baru terkait model pembiayaan dan sistem pembayaran kepada fasilitas kesehatan guna menciptakan ekosistem JKN yang sehat dan berkesinambungan.
          </p>
          <p className="text-gray-600 text-justify">
            Dengan langkah-langkah tersebut, diharapkan sistem JKN dapat terus berkembang, memberikan pelayanan kesehatan yang lebih baik dan terjangkau bagi seluruh masyarakat Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
