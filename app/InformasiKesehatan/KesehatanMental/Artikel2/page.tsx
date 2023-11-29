import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
        Bagaimana &quot;Coping Mechanisms&quot; Bisa Membantu Mengatasi Stress?
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
                Minggu, 11 Oktober 2023 09:20
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
              src="/image/mental1.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">CopingMechanism</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Sebuah Pembukaan</h3>
          <p className="text-gray-600 text-justify">
            Artikel ini menjelaskan bagaimana mekanisme koping membantu
            mengatasi stres dengan contoh sehari-hari yang relevan, menunjukkan
            cara menghadapi stres secara adaptif.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Mekanisme Koping</h3>
          <p className="text-gray-600 text-justify">
            Mari kita masuk ke dalam dunia &quot;coping mechanisms&quot; atau
            mekanisme koping, konsep yang mungkin terdengar asing, tapi
            sebenarnya sangat dekat dengan kehidupan sehari-hari. Bicara tentang
            stress, siapa sih yang tidak pernah merasakannya? Dari macet di
            jalan, deadline pekerjaan, hingga hubungan yang naik turun, semua
            itu bagaikan bumbu dalam resep kehidupan. Nah, di sinilah mekanisme
            koping ini berperan, sebagai &quot;bumbu rahasia&quot; yang membantu
            kita menghadapi stress tersebut.
          </p>
          <p className="text-gray-600 text-justify">
            Pertama, harus diakui bahwa stress itu ibarat udara, ada di
            mana-mana dan tidak bisa dihindari. Tapi, bukan berarti kita pasrah
            dan biarkan diri kita &quot;terseret arus&quot;. Di sinilah kita
            harus mengenal berbagai jenis mekanisme koping. Ada yang bersifat
            adaptif, yaitu cara-cara yang mendukung kesehatan mental kita. Lalu,
            ada juga yang maladaptif, yang justru bisa memperburuk keadaan.
          </p>
          <p className="text-gray-600 text-justify">
            agai contoh sederhana, bayangkan ketika kita sedang terjebak macet
            di jalan. Ada dua pilihan: marah-marah dan terus mengumpat, atau
            mengambil napas dalam, menyalakan radio, dan mendengarkan musik
            favorit. Pilihan pertama adalah contoh mekanisme koping maladaptif,
            sementara yang kedua adalah adaptif. Perbedaannya? Pilihan pertama
            meningkatkan tekanan darah dan stres, sedangkan yang kedua membantu
            kita rileks dan menerima situasi yang tidak bisa diubah.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Kesadaran Diri</h3>
          <p className="text-gray-600 text-justify">
            Salah satu kunci untuk mengembangkan mekanisme koping yang adaptif
            adalah kesadaran diri. Kita harus mengenal diri kita sendiri, apa
            yang membuat kita stres, dan bagaimana kita biasanya bereaksi. Ini
            seperti mengenal karakter dalam cerita. Setiap orang unik, dan
            begitu pula dengan cara mereka menghadapi stress. Ada yang dengan
            menulis diari, berolahraga, bermeditasi, atau bahkan sekedar duduk
            dan menikmati secangkir teh hangat.
          </p>
          <p className="text-gray-600 text-justify">
            Yang menarik, dalam konteks masyarakat Indonesia, kita bisa melihat
            mekanisme koping ini dalam berbagai bentuk. Misalnya, kebiasaan
            berkumpul dan bercerita dengan keluarga atau teman. Ini bukan hanya
            sekedar kumpul-kumpul biasa, tapi juga sebuah proses melepaskan
            beban pikiran. Atau, bagi sebagian orang, menghabiskan waktu di
            dapur, memasak hidangan favorit bisa menjadi terapi. Ini adalah
            contoh bagaimana aktivitas sehari-hari bisa bertransformasi menjadi
            mekanisme koping yang adaptif.
          </p>
          <p className="text-gray-600 text-justify">
            Lebih lanjut, penting juga untuk memahami bahwa mekanisme koping ini
            tidak selalu harus besar dan dramatis. Kadang, hal-hal kecil seperti
            mendengarkan lagu, merapikan kamar, atau sekedar mengambil napas
            dalam beberapa kali, bisa memiliki dampak yang besar. Ini ibarat
            menambahkan sedikit garam dalam masakan, kecil tapi mampu mengubah
            seluruh rasa.
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
