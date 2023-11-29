import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Memahami Kesehatan Mental dan Cara Menjaganya
        </h1>
        <div className="flex items-centerjustify-between">
          <div className="flex items-center gap-4 mt-4 mb-2 w-full">
            <div className="relative w-16 sm:w-20 aspect-square rounded-full border-2 bg-gray-100 overflow-hidden">
              <Image
                src="/image/profile.jpeg"
                alt="logo"
                fill={true}
                className="object-cover"
              />
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-lg text-gray-600">
                Puskesmas Kahuripan
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                Minggu, 11 Oktober 2023 06:20
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
              src="/image/mental4.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Kesehatan Mental</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Alasan Kesehatan Mental Perlu Dijaga
          </h3>
          <p className="text-gray-600 text-justify">
            Kepekaan dan kesadaran terhadap kesehatan mental tak hanya berlaku
            pada orang dewasa yang sedang produktif, tetapi juga anak-anak,
            remaja, bahkan lansia.
          </p>
          <p className="text-gray-600 text-justify">
            Orang dengan kesehatan mental yang prima dapat beraktivitas secara
            produktif dan menggunakan potensi yang dimilikinya dengan maksimal.
            Ia juga mampu berpikir positif dan jernih ketika dihadapkan dengan
            berbagai persoalan. Hal ini akan menuntun dirinya menjadi pribadi
            yang lebih baik dalam menyikapi masalah. Mental yang sehat juga baik
            untuk kehidupan sosial. Orang dengan mental yang sehat dapat
            berkomunikasi lebih baik, mudah bergaul, dan memiliki pertemanan
            yang sehat. Ia juga lebih mampu memberikan kontribusi yang baik
            kepada komunitas atau orang-orang di sekitarnya. Tidak hanya itu,
            kesehatan mental juga dapat memengaruhi kesehatan fisik. Seperti
            kata pepatah “di dalam tubuh yang sehat terdapat jiwa yang kuat”,
            seseorang dengan kesehatan mental yang baik terbukti berisiko lebih
            rendah terkena penyakit kronis, seperti stroke, diabetes tipe 2, dan
            penyakit jantung.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Penyakit Mental yang Perlu Diwaspadai
          </h3>
          <p className="text-gray-600 text-justify">
            Ada banyak faktor yang dapat memengaruhi kondisi kesehatan mental
            seseorang, mulai dari faktor keturunan, trauma masa lalu, pelecehan
            seksual atau pelecehan fisik, gaya hidup yang tidak sehat, hingga
            cedera pada otak. Selain itu, berada pada situasi pandemi, seperti
            pandemi COVID-19, juga bisa membuat seseorang lebih rentan mengalami
            gangguan kesehatan mental. Berdasarkan gejalanya, penyakit mental
            terbagi menjadi dua, yaitu psikotik dan nonpsikotik. Berikut ini
            adalah penjelasannya:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Penyakit mental psikotik
          </h3>
          <p className="text-gray-600 text-justify">
            Penyakit mental psikotik atau psikosis adalah suatu kondisi mental
            yang membuat penderitanya sulit membedakan realita dan kerap
            mengalami halusinasi, yaitu melihat atau mendengar sesuatu yang
            sebenarnya tidak ada. Selain itu, penderita psikotik juga percaya
            terhadap suatu hal yang sebetulnya tidak benar atau delusi. Beberapa
            penyakit mental yang termasuk dalam psikotik meliputi: Gangguan
            bipolar dengan gejala psikotik, Depresi berat dengan gejala
            psikotik, Gangguan delusi, Skizofrenia
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Penyakit mental nonpsikotik
          </h3>
          <p className="text-gray-600 text-justify">
            Penyakit mental nonpsikotik tidak membuat penderitanya mengalami
            gangguan realita. Namun, penderita penyakit mental ini biasanya
            mengalami gangguan perasaan atau memiliki pola pikir yang tidak
            sesuai dengan hukum atau norma yang berlaku. Penyakit ini
            berhubungan erat dengan stres dan trauma. Berikut ini adalah
            beberapa contoh penyakit mental nonpsikotik: Depresi, Gangguan
            kecemasan, Fobia, Serangan panik, Obsessive-compulsive disorder
            (OCD)
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Cara Menjaga Kesehatan Mental
          </h3>
          <p className="text-gray-600 text-justify">
            Agar dapat beraktivitas dan berinteraksi dengan baik dalam
            masyarakat serta terhindar dari penyakit mental, penting bagi kamu
            untuk senantiasa menjaga kesehatan mental. Berikut ini adalah
            panduan umum yang bisa diterapkan untuk menjaga kesehatan mental:
            Hargai diri sendiri, misalnya dengan tidak membandingkan diri
            sendiri dengan orang lain. Usahakan untuk selalu melihat sisi
            positif dari suatu masalah. Perlakukan dirimu seperti kamu
            memperlakukan orang lain yang kamu sayangi.
          </p>
          <p className="text-gray-600 text-justify">
            Temukan cara terbaik mengelola stres untuk diri sendiri, misalnya
            menulis buku harian, berjalan-jalan, dan berbincang. Syukuri segala
            yang hal dimiliki agar dapat menerima dan mencintai diri sendiri.
            Terapkan pola hidup yang sehat, seperti konsumsi makanan sehat,
            olahraga secara rutin, dan istirahat yang cukup. Kembangkan potensi
            yang kamu miliki atau coba hal-hal baru yang belum pernah dilakukan.
            Pelihara hubungan yang baik dengan orang lain. Lakukan hal-hal yang
            membuatmu bahagia. Hindari sikap perfeksionis yang berlebihan.
            Lakukan meditasi atau teknik mindfulness untuk memusatkan perhatian
            dan kesadaran.
          </p>
          <p className="text-gray-600 text-justify">
            Penting untuk diingat bahwa kesehatan mental merupakan hal yang
            tidak boleh diabaikan dan harus dipelihara sebaik mungkin. Lakukan
            cara menjaga kesehatan mental yang telah dipaparkan di atas agar
            fisik, psikis, emosi, dan kehidupan sosialmu selalu dalam kondisi
            yang baik. Jika kamu merasa mengalami tanda gangguan mental atau
            memiliki keluarga maupun kerabat yang memiliki masalah ini, jangan
            malu untuk meminta bantuan psikolog dan psikiater. Dengan penanganan
            yang tepat, gangguan kesehatan mental akan bisa dikendalikan dan
            kamu pun bisa menjalani hidup yang lebih berkualitas dan bahagia.
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
