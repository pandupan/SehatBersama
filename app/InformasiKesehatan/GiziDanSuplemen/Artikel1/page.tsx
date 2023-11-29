import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pengaruh Kesehatan Mental Remaja dengan Maraknya Kasus Bunuh Diri di
          Indonesia
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
              href="/InformasiKesehatan/KesehatanMental"
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
              src="/image/mental2.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Pengaruh Kesehatan Mental Remaja</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Kualitas hidup manusia
          </h3>
          <p className="text-gray-600 text-justify">
            Kualitas hidup manusia sangat erat kaitannya dengan kesehatan, bukan
            hanya kesehatan jasmani saja tetapi juga kesehatan mental juga perlu
            menjadi perhatian. Kesehatan adalah keadaan sehat fisik, mental dan
            sosial, bukan semata-mata keadaan tanpa penyakit atau kelemahan yang
            berarti seseorang dikatakan sehat apabila seluruh aspek dalam
            dirinya dalam keadaan tidak terganggu baik tubuh, psikis maupun
            sosial (Ayu Rianti, H idaya, and Yasipin 2020). Selain itu, menurut
            (Prasetyo and Kunci 2021), kesehatan mental adalah suatu keadaan
            dimana seorang individu tidak mengalami perasaan bersalah terhadap
            dirinya sendiri, serta mempunyai estimasi yang realistis terhadap
            dirinya sendiri dan dapat menerima kelemahan pada dirinya sendiri,
            memiliki kemampuan menghadapi masalah-masalah yang ada dalam
            hidupnya, memiliki kepuasan dalam kehidupan sosialnya, serta
            memiliki kebahagiaan dalam hidup.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Masa Remaja</h3>
          <p className="text-gray-600 text-justify">
            adalah salah satu masa yang dibilang paling krusial, karena pada
            masa ini setiap orang pasti menginginkan berbagai masalah terlewati.
            Salah satu persoalan yang biasanya terjadi pada masa remaja adalah
            munculnya depresi yang berlebihan. Banyak ahli percaya bahwa
            keluarga yang “bermasalah” merupakan penyebab utama dari pembentukan
            masalah emosional pada anak yang berdampak dalam jangka panjang.
            Manusia di masa ini juga berpeluang untuk menyelesaikan masalah
            bagaimanapun caranya, sehingga mereka lupa bahwa setiap masalah
            perlu diselesaikan dengan cara yang baik juga. Pada usia remaja juga
            merupakan usia yang rentan terpengaruh oleh faktor- faktor eksternal
            yang berdampak buruk terhadap perkembangannya, seperti pertemanan,
            lingkungan, dan keluarga.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            banyaknya kasus-kasus bunuh diri di Indonesia
          </h3>
          <p className="text-gray-600 text-justify">
            Akhir-akhir ini tidak dipungkiri bahwa banyaknya kasus-kasus bunuh
            diri di Indonesia. Dilansir dari pusiknas.polri sejak awal tahun
            2023, Polri menindak 1.680 kasus penemuan mayat dan 451 aksi bunuh
            diri di Indonesia. Tidak sedikit pula korbannya adalah remaja.
            Jumlah tersebut cenderung meningkat dari Januari hingga April 2023.
            Berbagai asumsi akan memunculkan pandangan dari masyarakat akan
            fenomena bunuh diri. Salah satu faktor dari kasus bunuh diri adalah
            adanya masalah terkait kesehatan mental individu.
          </p>
          <p className="text-gray-600 text-justify">
            Menurut (Biroli 2018) bunuh diri adalah tindakan yang dapat
            menyebabkan kematian, disengaja, dilakukan oleh dirinya sendiri dan
            pelaku menganggap tindakannya sebagai jalan yang terbaik untuk
            masalahnya. Tindakan ini mempunyai tujuan untuk mengakhiri hidupnya.
            Salah satu faktor yang mendasari seseorang melakukan hal tersebut
            yaitu gangguan mental. Gangguan mental adalah keadaan individu yang
            dimana mengalami gangguan pada perasaan, mood, pemikiran, dan
            kemampuan berinteraksi dengan orang lain. Gangguan mental yang umum
            terjadi pada remaja, meliputi cemas berlebihan dan depresi. Gangguan
            mental tersebut biasanya terjadi karena beberpa faktor, diantaranya
            pendidikan dan pekerjaan yang buruk, mengalami kondisi fisik yang
            kurang, hubungan pertemanan, percintaan, bahkan kekeluargaan yang
            tidak harmonis, serta mempunyai orang yang menderita penyalahgunaann
            obat atau penyakit mental lainnya. Ketidaksehatan mental seseorang
            akan semakin sulit dicegah apabila seseorang tidak memiliki daya
            tahan mental dan spiritual yang tangguh.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Rasa empati untuk diri kita sendiri dan orang lain.
          </h3>
          <p className="text-gray-600 text-justify">
            Melihat banyaknya kasus yang berkaitan dengan gangguan mental, kita
            sebagai manusia perlu memiliki rasa empati untuk diri kita sendiri
            dan orang lain. Setiap manusia perlu mengetahui pentingnya kesehatan
            mental bagi setiap orang. Salah satu hal yang utama dalam
            meningkatkan daya tahan seseorang dari ketidaksehatan mental adalah
            agama. Agama memiliki peran yang sangat penting dalam pembinaan
            moral manusia karena nilai-nilai moral yang terkandung dalam agama
            bersifat tetap dan menyeluruh (universal). Apabila seseorang
            dihadapkan pada suatu permasalahan, ia dapat menggunakan
            pertimbangan-pertimbangan berdasarkan nilai-nilai moral agama. Hal
            tersebut perlu diterapkan bagi setiap individu.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Cara untuk menghindari gangguan mental
          </h3>
          <p className="text-gray-600 text-justify">
            Selain itu, cara untuk menghindari gangguan mental adalah menerapkan
            salah satu sikap kebhinekaan, dimana satu sama lain saling memberi
            perhatian terhadap orang lain. Cara ini terlihat simple untuk
            dilakukan, tetapi tidak semua orang dapat melakukannya. Manusia
            adalah makhluk sosial, yang dimana selama manusia hidup pasti adanya
            interaksi dengan orang lain. Saling bertukar perhatian awalnya dapat
            dilakukan bagi orang-orang terdekat, berupa menanyakan kabar,
            menanyakan keadaannya, serta dapat menghibur orang terdekat untuk
            memperbaiki keadaannya yang kurang baik. Seiring dengan perkembangan
            teknologi, para remaja tentu tidak asing dengan penggunaan media
            sosial. Media sosial dapat digunakan sebagai tempat untuk saling
            berempati satu sama lain, empati yang dimaksud dengan berkomentar
            yang baik, memberikan dukungan yang positif, dan kegiatan-kegiatan
            lainnya. Setiap orang perlu dukungan bahkan tempat untuk bercerita,
            maka dari itu kita sebagai makhluk sosial perlu memberikan perhatian
            penuh bagi orang lain. Setidaknya, perilaku yang kita lakukan dapat
            mengurangi bahkan mencegah orang lain untuk berpikir pada hal-hal
            yang dapat menyakiti dirinya.
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
