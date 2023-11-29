import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Cemas? Ini 10 Cara untuk Mengatasinya
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
                Selasa, 20 November 2023 10:20
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
              src="/image/mental3.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Cemas</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Cemas</h3>
          <p className="text-gray-600 text-justify">
            Saat kita punya perasaan takut, khawatir, atau gelisah yang timbul
            akibat adanya ancaman atau masalah yang tidak pasti, itulah yang
            disebut dengan cemas. Cemas adalah reaksi alami tubuh, membantu kita
            beradaptasi dengan situasi yang menantang atau berbahaya. Tapi,
            kalau cemasnya terlalu sering, berlebihan, atau mengganggu aktivitas
            sehari-hari, maka bisa jadi itu adalah tanda gangguan kecemasan.
            Jadi kalau kita cemasnya itu wajar-wajar aja, tak perlu khawatir.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Gangguan Kecemasan</h3>
          <p className="text-gray-600 text-justify">
            Gangguan kecemasan adalah kondisi psikologis yang ditandai dengan
            rasa cemas yang berlebihan, tidak rasional, atau tidak proporsional
            dengan situasi yang dihadapi. Gangguan kecemasan bisa menyebabkan
            berbagai gejala fisik dan mental seperti jantung berdebar, sesak
            napas, keringat dingin, pusing, mual, sulit tidur, mudah marah,
            sulit konsentrasi, dan lain-lain. Gangguan kecemasan bisa dipicu
            oleh berbagai faktor seperti stres, trauma, genetik, lingkungan,
            atau penyakit fisik.
          </p>
          <p className="text-gray-600 text-justify">
            Lalu bagimana cara menentukan apakah cemas kita itu normal atau
            gangguan kecemasan? Untuk membedakan antara kecemasan normal dan
            gangguan kecemasan, kita perlu memperhatikan frekuensi, intensitas,
            durasi, dan dampak dari rasa cemas yang kita alami. Kecemasan normal
            biasanya bersifat sementara, sesuai dengan situasi yang dihadapi,
            dan tidak mengganggu fungsi sosial atau pekerjaan kita. Sedangkan
            gangguan kecemasan biasanya berlangsung lama, tidak sejalan dengan
            kenyataan, dan menghambat kualitas hidup kita.
          </p>
          <p className="text-gray-600 text-justify">
            Perasaan cemas berpeluang sama bisa terjadi pada semua individu,
            karena cemas adalah reaksi yang alami. Tidak peduli pada tingkat
            usia, jenis kelamin, tingkat pendidikan, sosial dan ekonomi. Maka
            ada baiknya kita segera mengantisipasi sejak dini sebelum perasaan
            cemas itu muncul dan berkembang menjadi gangguan kecemasan. Bukankah
            mencegah itu selalu lebih baik daripada mengobati?
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            10 Strategi untuk mengatasi kecemasan
          </h3>
          <h2 className="text-lg sm:text-2xl font-bold">
            1. Mengidentifikasi dan mengakui sumber kecemasan kita.
          </h2>
          <p className="text-gray-600 text-justify">
            Jadi langkah pertama untuk mengatasi cemas adalah mengetahui apa
            yang membuat kita cemas. Sadarilah dengan segera! Dengan begitu,
            kita bisa menilai seberapa realistis atau rasional ancaman atau
            masalah yang kita hadapi. Akui perasaan cemas kita tanpa menyalahkan
            diri sendiri atau orang lain. Hal ini bisa membantu kita merasa
            lebih tenang dan terkontrol.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            2. Mengatur napas dengan tenang dan dalam.
          </h3>
          <p className="text-gray-600 text-justify">
            Salah satu gejala cemas adalah napas yang cepat dan pendek, yang
            bisa menyebabkan tubuh kita menjadi tegang dan panik. Kita bisa
            mencoba mengatur napas kita secara perlahan dan dalam. Usahakan
            memakai pernafasan perut, bukan pernafasan dada. Cara ini bisa
            membantu kita menenangkan sistem saraf dan mengurangi detak jantung.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            3. Melakukan relaksasi otot progresif atau meditasi.
          </h3>
          <p className="text-gray-600 text-justify">
            Relaksasi otot progresif adalah teknik yang melibatkan penegangan
            dan pengenduran otot-otot tubuh secara bergantian. Teknik ini bisa
            membantu mengurangi ketegangan fisik dan mental yang disebabkan oleh
            rasa cemas. Sementara meditasi adalah praktik yang melibatkan fokus
            pada napas, suara, atau objek tertentu untuk meningkatkan kesadaran
            dan ketenangan. Meditasi bisa membantu mengurangi pikiran negatif
            dan emosi yang memicu rasa cemas.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            4. Berolahraga secara teratur.
          </h3>
          <p className="text-gray-600 text-justify">
            Olahraga adalah aktivitas fisik yang bisa meningkatkan kesehatan
            tubuh dan pikiran. Olahraga bisa membantu melepaskan hormon endorfin
            yang bisa meningkatkan suasana hati dan rasa percaya diri kita.
            Olahraga juga bisa membantu mengalihkan perhatian kita dari hal-hal
            yang membuat kita cemas dan memberi kita rasa pencapaian.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            5. Mengonsumsi makanan sehat dan cukup minum air.
          </h3>
          <p className="text-gray-600 text-justify">
            Makanan yang kita konsumsi bisa mempengaruhi keseimbangan kimia di
            otak kita. Keseimbangan kimia itu bisa mempengaruhi mood dan tingkat
            cemas kita. Makanan sehat yang mengandung protein, karbohidrat
            kompleks, serat, vitamin, dan mineral bisa membantu memberi energi
            dan nutrisi yang dibutuhkan tubuh dan otak kita. Minum air yang
            cukup juga bisa membantu menjaga hidrasi dan fungsi tubuh kita.
            Sebaliknya, hindari makanan yang mengandung gula, lemak atau
            pengawet yang bisa menyebabkan perubahan mood dan penurunan kinerja
            otak kita.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            6. Menghindari kafein, alkohol, dan rokok.
          </h3>
          <p className="text-gray-600 text-justify">
            Kafein, alkohol dan rokok adalah zat-zat yang bisa mempengaruhi
            sistem saraf dan kardiovaskular kita. Zat-zat tersebut bisa
            meningkatkan atau memperburuk gejala cemas. Kafein bisa menyebabkan
            jantung berdebar, gelisah dan sulit tidur. Alkohol bisa menyebabkan
            dehidrasi, depresi dan penurunan fungsi kognitif. Rokok bisa
            menyebabkan peningkatan tekanan darah, iritasi dan gangguan
            pernapasan. Oleh karena itu, ada baiknya untuk mengurangi atau
            menghindari konsumsi zat-zat ini jika ingin mengatasi kecemasan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            7. Berbicara dengan orang yang kita percaya atau konselor
            professional.
          </h3>
          <p className="text-gray-600 text-justify">
            Berbagi perasaan dan masalah kita dengan orang yang kita percaya
            seperti keluarga, teman, atau pasangan, bisa membantu kita merasa
            didengar, dimengerti, dan didukung. Orang-orang ini bisa memberi
            kita saran, solusi, atau sekadar hiburan yang bisa mengurangi beban
            pikiran kita. Jika kita merasa perlu, kita juga bisa mencari bantuan
            dari konselor profesional, seperti psikolog atau psikiater yang bisa
            memberi kita diagnosis, terapi atau obat yang sesuai dengan kondisi
            kita.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            8. Mengubah pola pikir negatif menjadi positif.
          </h3>
          <p className="text-gray-600 text-justify">
            Pola pikir adalah cara kita memandang dan menafsirkan situasi yang
            kita hadapi. Pola pikir negatif adalah pola pikir yang cenderung
            melihat hal-hal buruk, menggeneralisasi, membesar-besarkan atau
            memperburuk situasi. Pola pikir negatif bisa menyebabkan kita merasa
            tidak berdaya, tidak berharga atau tidak berharap. Untuk mengatasi
            cemas, kita perlu mengubah pola pikir negatif menjadi positif, yaitu
            pola pikir yang cenderung melihat hal-hal baik, spesifik, realistis
            atau memperbaiki situasi. Pola pikir positif bisa membantu kita
            merasa lebih optimis, percaya diri dan berani.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            9. Mencari hobi atau kegiatan yang menyenangkan.
          </h3>
          <p className="text-gray-600 text-justify">
            Hobi atau kegiatan yang menyenangkan adalah hal-hal yang bisa
            memberi kita kebahagiaan, kesenangan, atau kepuasan. Hobi atau
            kegiatan ini bisa berupa apapun, seperti membaca, menulis,
            menggambar, bermain musik, berkebun, bermain game atau lainnya.
            Dengan melakukan hobi atau kegiatan yang menyenangkan, kita bisa
            mengisi waktu luang kita dengan hal-hal yang bermanfaat, mengasah
            kreativitas dan bakat kita serta mengurangi stres dan cemas yang
            kita rasakan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            10. Menghadapi masalah atau tantangan secara bertahap.
          </h3>
          <p className="text-gray-600 text-justify">
            Menghindari atau menunda masalah atau tantangan yang membuat kita
            cemas bisa membuat kita merasa lebih lega untuk sementara, tetapi
            tidak menyelesaikan masalah atau tantangan tersebut. Justru, hal ini
            bisa membuat kita merasa lebih cemas karena masalah atau tantangan
            tersebut semakin menumpuk atau mendesak. Untuk mengatasi cemas, kita
            perlu menghadapi masalah atau tantangan yang kita hadapi secara
            bertahap, yaitu dengan memecahnya menjadi langkah-langkah yang lebih
            kecil dan mudah dilakukan. Dengan begitu, kita bisa merasa lebih
            terorganisir, terkontrol, dan termotivasi untuk menyelesaikan
            masalah atau tantangan tersebut.
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
