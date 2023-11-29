import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Begini Cara Diet Sehat tanpa Bahayakan Tubuh
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
                Sabtu, 11 November 2023 06:20
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/NutrisiDanDiet"
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
              src="/image/diet1.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>
            <span className="italic">Buah dan Sayur</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Cara diet sehat untuk menurunkan berat badan
          </h3>
          <p className="text-gray-600 text-justify">
            Diet yang sehat nyatanya tidak semudah kedengarannya. Salah strategi
            diet justru bisa menjadi bumerang bagi orang yang ingin menurunkan
            berat badan. Diet untuk mengurangi berat badan perlu dilakukan
            dengan cara yang tepat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            1. Menghitung kebutuhan kalori
          </h3>
          <p className="text-gray-600 text-justify">
            Sebelum merancang menu makanan, cara yang paling tepat memulai diet
            sehat yaitu mengenali kebutuhan kalori harian Anda. Setiap orang
            memiliki kebutuhan kalori yang berbeda berdasarkan berbagai faktor,
            seperti usia hingga kondisi kesehatan. Sebagai contoh, penyandang
            obesitas akan memiliki kebutuhan kalori yang berbeda dengan orang
            sehat yang ingin mengurangi berat badan.
          </p>
          <p className="text-gray-600 text-justify">
            Menurut situs Mayo Clinic, dengan memperoleh jumlah kalori yang
            tepat dari makanan dan minuman, tubuh mendapatkan energi yang
            dibutuhkan. Alhasil, fungsi tubuh akan berjalan normal, mulai dari
            berpikir, memompa darah, hingga bernapas. Jadi, sebelum menyusun
            pola makan untuk menurunkan atau mempertahankan berat badan, kenali
            dahulu kebutuhan kalori agar tubuh tetap berfungsi dengan baik.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            2. Mengatur porsi makan
          </h3>
          <p className="text-gray-600 text-justify">
            Selain kebutuhan kalori, cara diet sehat lainnya yang perlu
            diperhatikan yaitu mengatur porsi makan. Pada saat menjalani diet,
            bukan berarti Anda harus menghindari berbagai jenis makanan.
            Pasalnya, semua jenis makanan tetap dibutuhkan oleh tubuh, hanya
            saja Anda perlu mengatur porsi masing-masing dengan baik.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            3. Membuat jadwal makan yang teratur
          </h3>
          <p className="text-gray-600 text-justify">
            Banyak orang yang percaya, melewatkan waktu makan dapat menurunkan
            berat badan dengan cepat. Nyatanya, hal ini tidak benar. Melewatkan
            sarapan atau waktu makan lainnya justru membuat tubuh merasa cepat
            lapar, gula darah naik-turun drastis, dan stres. Jika ingin
            mengurangi porsi makan, Anda bisa membagi 3 waktu makan besar
            menjadi 6 kali makan sepanjang hari dengan porsi kecil.
          </p>
          <p className="text-gray-600 text-justify">
            Kuncinya, Anda tetap perlu menghindari makanan tinggi lemak dan
            tinggi kalori. Selain itu, pastikan untuk tidak melewatkan sarapan
            dengan makanan tinggi protein dan serat. Hal ini bertujuan agar
            tubuh merasa kenyang lebih lama hingga waktu makan siang tiba.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            4. Makan pelan-pelan
          </h3>
          <p className="text-gray-600 text-justify">
            Makan secara perlahan ternyata termasuk cara diet sehat yangs sering
            disepelekan. Padahal, metode ini dapat membuat Anda merasa kenyang
            lebih cepat. Menurut Harvard Medical School, para ahli melaporkan
            bahwa perut kenyang merupakan bagian dari faktor kepuasan makan
            seseorang setelah makan. Faktor rasa kenyang ini ternyata juga
            dipicu oleh aktivitas otak. Otak memproses serangkaian sinyal rasa
            kenyang dan puas dari hormon yang dilepaskan selama proses
            pencernaan.
          </p>
          <p className="text-gray-600 text-justify">
            Itulah sebabnya makan terlalu cepat sering kali terasa kurang
            mengenyangkan. Ketika Anda makan terlalu cepat, tubuh tidak memiliki
            waktu yang cukup untuk mengirimkan sinyal rasa kenyang dan puas ke
            otak. Akibatnya, Anda mungkin akan terus makan karena perut belum
            terpuaskan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            5. Makan sampai tidak merasa lapar
          </h3>
          <p className="text-gray-600 text-justify">
            Bila ingin program menurunkan berat badan berhasil, usahakan makan
            sampai tidak merasa lapar. Tips diet sehat ini bertujuan agar tubuh
            tidak kelebihan energi yang nantinya akan disimpan sebagai lemak.
            Lemak yang menumpuk dapat mengakibatkan berat badan pun kembali
            naik.
          </p>
          <p className="text-gray-600 text-justify">
            Maka dari itu, mulai lebih sensitif dengan sensasi lapar dan
            makanlah ketika isyarat fisik tersebut muncul. Cobalah untuk makan
            pagi dengan porsi yang banyak dan mengurangi porsi tersebut secara
            bertahap hingga makan malam. Awalnya mungkin akan terasa sulit.
            Namun, cara menurunkan berat badan ini jauh lebih aman ketika Anda
            bisa menyesuaikan diri seiring berjalannya waktu.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">6. Olahraga teratur</h3>
          <p className="text-gray-600 text-justify">
            Tak hanya mengatur pola makan, cara diet sehat yang tak boleh Anda
            lewatkan adalah berolahraga secara teratur. Saat tubuh Anda
            menggunakan energi untuk aktif bergerak, ini akan membantu membakar
            kalori dari makanan yang Anda konsumsi. Kunci penting olahraga
            teratur sebagai cara diet sehat bukan terletak pada intensitas saja,
            tapi juga pada konsistensi Anda.
          </p>
          <p className="text-gray-600 text-justify">
            Lakukan olahraga minimal 30 menit sehari sebanyak 3 – 5 kali dalam
            seminggu, bergantung kapasitas dan kebutuhan Anda. Bila Anda
            kesulitan menemukan waktu yang tepat untuk berolahraga, manfaatkan
            aktivitas sehari-hari seperti membereskan rumah dan lebih banyak
            berjalan kaki.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            7. Terapkan gaya hidup sehat
          </h3>
          <p className="text-gray-600 text-justify">
            Cara diet sehat di atas akan percuma saja bila tidak disertai dengan
            perubahan gaya hidup menjadi lebih sehat. Pasalnya, kebiasaan
            sehari-hari Anda juga punya peran penting untuk menentukan apakah
            program diet sehat Anda akan berhasil. Kebiasaan ini meliputi pola
            tidur, konsumsi alkohol, hingga manajemen stres.
          </p>
          <p className="text-gray-600 text-justify">
            Hindari kebiasaan bergadang dan pastikan Anda mencukupi kebutuhan
            tidur selama 7 – 9 jam per hari. Hentikan kebiasaan minum alkohol
            dan alihkan perhatian Anda dengan melakukan aktivitas lainnya saat
            timbul keinginan untuk minum. Upayakan juga untuk mengelola stres
            karena kesehatan mental Anda berperan penting untuk memperlancar
            program diet sehat Anda.
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
