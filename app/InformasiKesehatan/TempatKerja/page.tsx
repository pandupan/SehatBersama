import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-gradient-to-br from-[#46aea8] via-[#d2e9e8] to-[white] xl:px-16 sm:px-10 px-4 flex flex-col mt-20 xl:pt-20 sm:pt-10 pt-4 pb-40">
      <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
        <div className="flex items-center justify-center sm:items-stretch sm:justify-stretch">
          <div className="relative xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]">
            <div className="object-fit">
            <img
                src="https://i.ibb.co/bFf84n7/i-Stock-860065586.jpg"
                alt="phbs"
                className="object-cover items-center rounded-xl xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">TEMPAT KERJA</h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
          Ini Hubungan Kesehatan Mental dengan Lingkungan Kerja
          </h1>
          <p className="xl:text-base text-xs line-clamp-5">
          Jakarta - Banyak orang menghabiskan sebagian besar waktunya di
            tempat kerja dari Senin hingga Jumat, dan terkadang akhir pekan
            mereka juga dihabiskan untuk bekerja meskipun dari rumah. Tekanan
            pekerjaan yang tinggi dapat menyebabkan stres yang berdampak pada
            kesehatan mental. Menjaga kesehatan mental di tempat kerja sangat
            penting untuk kelancaran pekerjaan. Jika seseorang mengalami
            gangguan mental, beban pekerjaan yang mereka tanggung mungkin tidak
            terselesaikan dengan baik. Berikut ini pembahasan tentang pentingnya
            menjaga kesehatan mental di tempat kerja.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">
            15 Februari 2024
            </h3>
            <a
              href="/InformasiKesehatan/TempatKerja/Artikel1"
              className="text-gray-500 hover:text-blue-500 lg:text-base text-xs "
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-xl lg:text-3xl border-b-2 border-black mt-4">
        Artikel Terbaru
      </h1>

      {/* LIST ARTIKEL */}
      {/* ARTIKEL 1 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT KERJA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Menjaga Kesehatan Mental di Lingkungan Kerja
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Beban kerja yang berlebihan bisa berdampak signifikan pada
            seseorang, baik secara fisik maupun mental. Perasaan stres yang
            muncul akibat beban kerja yang terlalu berat merupakan hal umum,
            tetapi jika dibiarkan, dapat menyebabkan masalah kesehatan mental
            seperti depresi dan kecemasan. Stres berlebihan tidak hanya
            memunculkan emosi negatif tetapi juga menurunkan produktivitas dan
            mengganggu konsentrasi dalam menyelesaikan pekerjaan. Menjaga
            kesehatan mental sangat penting, karena dampaknya sama seriusnya
            dengan dampak fisik. Setiap orang perlu mengetahui cara efektif
            untuk menjaga kesehatan mental saat menghadapi stres berlebihan di
            tempat kerja. Sebagai tempat di mana banyak individu menghabiskan
            sebagian besar waktunya, perusahaan atau organisasi harus
            memperhatikan lingkungan kerja yang mendukung kesehatan mental
            karyawan. Berikut beberapa cara yang bisa dilakukan karyawan untuk
            menjaga kesehatan mental di tempat kerja:
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          15 Februari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatKerja/Artikel2"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <img
                  src="https://i.ibb.co/RP0DPV2/nik-shuliahin-Bu-NWp1b-L0nc-unsplash.jpg"
                  className="object-cover"
                  alt="artikel1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 2 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT KERJA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Perilaku Hidup Bersih dan Sehat (PHBS) di Tempat Kerja
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Lingkungan kerja memiliki dampak positif dan negatif pada kesehatan
            psikologis pekerjanya. Berbagai faktor seperti gaji, lingkungan
            kerja, dan interaksi dengan rekan kerja dapat memengaruhi kesehatan
            mental. Ketika faktor-faktor tersebut tidak berjalan dengan baik,
            tingkat stres akan meningkat. Beban kerja yang menumpuk dapat
            menurunkan produktivitas dan fokus. Oleh karena itu, penting untuk
            segera mencari solusi untuk mengatasi masalah tersebut. Cara menjaga
            kesehatan mental meliputi menghindari tekanan yang parah dan segera
            mencari solusi saat menghadapi masalah. Salah satu cara efektif
            adalah dengan mendiskusikan masalah dengan rekan kerja untuk
            menghindari dampak negatif pada kinerja tim.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          15 Februari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatKerja/Artikel3"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <img
                  src="https://i.ibb.co/Gdjq3Pv/dr-Hesty-1.jpg"
                  alt="artikel1"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 3 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT KERJA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          PHBS Perilaku Hidup Bersih dan Sehat di Tatanan Tempat Kerja
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          PHBS (Perilaku Hidup Bersih dan Sehat) di Tempat Kerja adalah upaya
            untuk memberdayakan karyawan agar mereka mengetahui, mau, dan mampu
            mempraktikkan PHBS serta berperan aktif dalam menciptakan lingkungan
            kerja yang sehat. Implementasi PHBS di tempat kerja penting untuk
            menjaga, memelihara, dan mempertahankan kesehatan karyawan sehingga
            tetap sehat dan produktif.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          15 Februari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatKerja/Artikel4"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <img
                  src="https://i.ibb.co/fHM37Gq/photo-1560264280-88b68371db39.jpg"
                  alt="artikel1"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* ARTIKEL 4 */}
  <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT KERJA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          PHBS Perilaku Hidup Bersih dan Sehat di Tatanan Tempat Kerja
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          PHBS (Perilaku Hidup Bersih dan Sehat) di Tempat Kerja adalah upaya
            untuk memberdayakan karyawan agar mereka mengetahui, mau, dan mampu
            mempraktikkan PHBS serta berperan aktif dalam menciptakan lingkungan
            kerja yang sehat. Implementasi PHBS di tempat kerja penting untuk
            menjaga, memelihara, dan mempertahankan kesehatan karyawan sehingga
            tetap sehat dan produktif.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          15 Februari 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatKerja/Artikel4"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <img
                  src="https://i.ibb.co/fHM37Gq/photo-1560264280-88b68371db39.jpg"
                  alt="artikel1"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* ARTIKEL 5 */}
        <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT KERJA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Pentingnya Edukasi Kesehatan di Tempat Kerja
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Edukasi kesehatan memainkan peran penting dalam meningkatkan kesejahteraan masyarakat, termasuk di kalangan pekerja. Menurut Organisasi Kesehatan Dunia (WHO), pendidikan kesehatan adalah alat untuk meningkatkan kesehatan dan kesejahteraan umum masyarakat melalui peningkatan pengetahuan dan praktik sehat. Pendidikan kesehatan di tempat kerja tidak hanya memberikan manfaat bagi perusahaan, namun juga bagi karyawan.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          Senin, 03 Juni 2024
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatKerja/Artikel5"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <img
                  src="https://i.ibb.co.com/z7q42dn/5-Tk.jpg"
                  alt="artikel1"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* ARTIKEL 6 */}
        <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT KERJA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          5 Tips Menjaga Kesehatan Saat Kerja Shift Malam

          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Beberapa profesi mengharuskan pekerjanya untuk bekerja di malam hari. Ini adalah tanggung jawab yang perlu dijalankan dengan baik, tetapi ada risiko kesehatan yang perlu diwaspadai. Apabila tidak mampu beradaptasi, kesehatan bisa menurun dan menyebabkan sakit. 
Namun, Anda tidak perlu khawatir. Berikut adalah beberapa tips untuk menjaga kesehatan saat bekerja shift malam yang telah dirangkum dari berbagai sumber.

          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          16 Oktober 2020

          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatKerja/Artikel6"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <img
                  src="https://i.ibb.co.com/hd2Bny0/6-tk.jpg"
                  alt="artikel1"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* ARTIKEL 7 */}
  <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">TEMPAT KERJA</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
          Mengenali Tanda-tanda Stres karena Pekerjaan dan Cara Mengatasinya

          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
          Apakah kamu merasa lelah dan sulit berkonsentrasi saat bekerja? Mungkin itu pertanda kamu sedang mengalami stres akibat pekerjaan. Stres ini bisa muncul karena beban kerja yang berat, tekanan untuk mencapai target, atau konflik interpersonal di tempat kerja. Jika tidak ditangani dengan baik, stres dapat berkembang menjadi masalah kesehatan mental yang serius, seperti depresi.

          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">
          11 April 2019	
          </h2>
          <div>
            <a
              href="/InformasiKesehatan/TempatKerja/Artikel7"
              className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1"
            >
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <img
                  src="https://i.ibb.co.com/ThvJYYm/7-tk.jpg"
                  alt="artikel1"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row justify-center items-center gap-4 font-semibold mt-4">
        <button title="leftbig" className="sm:flex hidden">
          <AiOutlineLeft size={40} />
        </button>
        <button title="leftsmall" className="flex sm:hidden">
          <AiOutlineLeft size={20} />
        </button>
        <div className="flex flex-row sm:text-5xl text-2xl sm:gap-20 gap-10 border-x-2 px-10 border-black">
          <a href="#" className="text-black hover:text-blue-500">
            1
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            2
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            3
          </a>
        </div>
        <button title="rightbig" className="sm:flex hidden">
          <AiOutlineRight size={40} />
        </button>
        <button title="rightsmall" className="flex sm:hidden">
          <AiOutlineRight size={20} />
        </button>
      </div> */}
    </div>
  );
};

export default page;
