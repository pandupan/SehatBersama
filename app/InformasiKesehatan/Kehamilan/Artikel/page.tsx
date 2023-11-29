import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Ciri-ciri Hamil 2 Minggu yang Perlu Ibu Sadari
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
                Rabu, 29 November 2023 06:20
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/Kehamilan"
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
              src="/image/kehamilan0.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Pregnant</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Ciri-ciri Hamil 2 Minggu yang Harus Diketahui
          </h3>
          <p className="text-gray-600 text-justify">
            Ovulasi adalah keluarnya sel telur dari indung. Setelah hubungan
            seksual, sperma membuahi telur tersebut. Tidak bisa dipastikan
            selang waktu pembuahan. Pada kehamilan awal ini, banyak perubahan
            tubuh terjadi. Biasanya kehamilan 2 minggu muncul tanda-tanda
            kehamilan sebagai berikut:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Telat Menstruasi</h3>
          <p className="text-gray-600 text-justify">
            Jika biasanya Ibu memiliki siklus menstruasi yang teratur, telat
            datang bulan bisa menjadi tanda pertama kehamilan. Telat menstruasi
            bisa terjadi setelah sekitar 10-14 hari atau lebih dari hubungan
            intim yang berpotensi sebagai tanda kehamilan.
          </p>
          <p className="text-gray-600 text-justify">
            Namun, ini bisa bervariasi tergantung pada siklus menstruasi
            individu dan waktu ovulasi. Ovulasi biasanya terjadi sekitar
            pertengahan siklus menstruasi, yang bisa sekitar 14 hari sebelum
            menstruasi berikutnya dimulai.
          </p>
          <p className="text-gray-600 text-justify">
            Penting untuk dicatat bahwa telat haid bukan selalu berarti
            kehamilan. Meskipun telat haid sering dianggap sebagai tanda pertama
            kehamilan, ada sejumlah alasan lain yang dapat menyebabkan telat
            menstruasi. Baca selengkapnya di sini: Siklus Haid Normal dan Cara
            Menghitung Telat Datang Bulan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pendarahan Implantasi
          </h3>
          <p className="text-gray-600 text-justify">
            Sekitar 6-12 hari setelah sel telur dibuahi oleh sperma, janin yang
            baru berkembang berusaha melekat pada dinding rahim. Proses ini bisa
            menyebabkan perdarahan kecil yang disebut pendarahan implantasi.
            Pendarahan ini cenderung lebih ringan dan berbeda dari menstruasi
            normal, namun seringkali dapat menyerupai menstruasi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Keputihan</h3>
          <p className="text-gray-600 text-justify">
            Perubahan hormon di awal kehamilan dapat membuat area serviks
            menghasilkan lebih banyak lendir. Ini bisa mengakibatkan perubahan
            dalam keputihan, di mana keputihan mungkin tampak lebih banyak,
            lebih kental, dan berbeda dari biasanya.
          </p>
          <p className="text-gray-600 text-justify">
            Ibu mungkin bingung membedakan keputihan sebelum haid atau tanda
            hamil. Yuk, ketahui perbedaan keputihan tanda hamil dan haid di
            sini: Perbedaan Keputihan Tanda Hamil dan Sebelum Haid.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Nyeri Payudara</h3>
          <p className="text-gray-600 text-justify">
            Hormon kehamilan seperti hormon Human chorionic gonadotropin (hCG)
            dapat membuat payudara menjadi lebih sensitif. Ibu mungkin merasakan
            nyeri, kemerahan, atau pembengkakan pada payudara. Puting susu juga
            bisa menjadi lebih sensitif.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Kram Perut</h3>
          <p className="text-gray-600 text-justify">
            Pada tahap awal kehamilan, beberapa wanita mungkin mengalami kram
            perut yang ringan. Ini bisa terjadi karena perubahan hormon yang
            mulai terjadi dalam tubuh. Hormon-hormon seperti progesteron dan
            estrogen meningkat untuk membantu mendukung kehamilan.
          </p>
          <p className="text-gray-600 text-justify">
            Perubahan ini dapat mempengaruhi otot-otot rahim dan area
            sekitarnya, yang bisa menyebabkan sensasi kram atau ketidaknyamanan
            perut.
          </p>
          <p className="text-gray-600 text-justify">
            Ibu juga perlu tahu bahwa gejala kram perut akibat hamil berbeda
            dengan kram menjelang haid. Yuk, ketahui perbedaannya di artikel
            ini: Contoh Sakit Perut Tanda Hamil, Beda dengan Nyeri Haid.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Perut Kembung</h3>
          <p className="text-gray-600 text-justify">
            Peningkatan hormon progesteron pada awal kehamilan bisa mempengaruhi
            sistem pencernaan. Hormon ini memiliki efek relaksasi pada otot
            polos yang ada dalam dinding saluran pencernaan.
          </p>
          <p className="text-gray-600 text-justify">
            Akibatnya, proses pencernaan bisa melambat dan udara bisa
            terperangkap dalam perut dan usus, yang mengakibatkan perasaan
            kembung dan perut terasa penuh. Namun, Ibu harus membedakan mana
            gejala perut kembung secara umum dengan kembung akibat hamil. Yuk,
            baca di sini: Jangan Salah! Ini Perbedaan Perut Buncit dan Hamil.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Nyeri Punggung</h3>
          <p className="text-gray-600 text-justify">
            Perubahan tingkat hormon progesteron juga bisa berdampak pada nyeri
            punggung ringan pada tahap awal kehamilan. Hormon ini dapat
            mempengaruhi otot dan ligamen di sekitar tulang belakang dan
            panggul.
          </p>
          <p className="text-gray-600 text-justify">
            Selain itu, perubahan dalam pusat gravitasi tubuh karena pertumbuhan
            rahim juga dapat memberikan tekanan tambahan pada area punggung
            bawah, menyebabkan rasa nyeri.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Mual dan Muntah</h3>
          <p className="text-gray-600 text-justify">
            Peningkatan hormon hCG pada awal kehamilan dapat mempengaruhi bagian
            otak yang mengatur rasa mual dan muntah. Ini bisa mengakibatkan
            sensasi mual yang mungkin berujung pada muntah. Meskipun seringkali
            dikenal sebagai &ldquot;morning sickness,&ldquot; mual dan muntah
            ini sebenarnya bisa terjadi kapan saja sepanjang hari.
          </p>
          <p className="text-gray-600 text-justify">
            Penting untuk diingat bahwa pada tahap 2 minggu setelah pembuahan,
            embrio masih belum berimplantasi ke dalam dinding rahim dan belum
            mulai berkembang. Oleh karena itu, gejala-gejala ini lebih
            disebabkan oleh perubahan hormon daripada oleh perkembangan janin
            itu sendiri. Jika Ibu mencurigai kehamilan, sebaiknya konsultasikan
            dengan profesional medis atau melakukan tes kehamilan untuk
            mendapatkan konfirmasi yang lebih pasti.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Nyeri Punggung</h3>
          <p className="text-gray-600 text-justify">
            Perubahan tingkat hormon progesteron juga bisa berdampak pada nyeri
            punggung ringan pada tahap awal kehamilan. Hormon ini dapat
            mempengaruhi otot dan ligamen di sekitar tulang belakang dan
            panggul.
          </p>
          <p className="text-gray-600 text-justify">
            Selain itu, perubahan dalam pusat gravitasi tubuh karena pertumbuhan
            rahim juga dapat memberikan tekanan tambahan pada area punggung
            bawah, menyebabkan rasa nyeri.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Apakah Kehamilan 2 Minggu Sudah Bisa Terdeteksi?
          </h3>
          <p className="text-gray-600 text-justify">
            Kehamilan 2 minggu sudah dapat dideteksi dengan memeriksa ada atau
            tidaknya hormon human chorionic gonadotropin (hCG) yang merupakan
            pertanda kehamilan.
          </p>
          <p className="text-gray-600 text-justify">
            Melansir dari americanpregnancy.org, untuk melakukan tes kehamilan
            di rumah menggunakan test pack, dianjurkan untuk menunggu sampai
            periode menstruasi terlewati. Sebab, terlambat haid merupakan salah
            satu tanda hamil. Namun jika tidak bisa menunggu, Ibu bisa melakukan
            tes kehamilan 14 hari setelah terjadinya pembuahan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Bentuk perut hamil 2 minggu
          </h3>
          <p className="text-gray-600 text-justify">
            Secara fisik, bentuk perut saat Ibu hamil 2 minggu belum ada
            perubahan yang signifikan dan masih sama seperti bentuk perut
            sebelum hamil. Meskipun begitu, kemungkinan janin sudah mulai
            terbentuk menjadi embrio, dengan ukurannya masih sangat kecil yaitu
            sekitar 0,1 - 0,2 millimeter. Melansir dari KlikDokter, perubahan
            bentuk perut biasanya akan terlihat saat kehamilan memasuki usia 16
            hingga 20 minggu. Penasaran dengan bentuk perut saat hamil? Yuk
            temukan info lengkap ciri perut wanita hamil.
          </p>
          <p className="text-gray-600 text-justify">
            Perlu Ibu ketahui, waktu yang dibutuhkan untuk membesarnya perut
            berbeda antar Ibu hamil. Oleh karena itu, jika hingga minggu ke-16
            hingga minggu ke-20 perut Ibu tak kunjung membesar, jangan khawatir
            ya. Apalagi jika ini merupakan kali pertama Ibu mengandung.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pemeriksaan USG Janin 2 Minggu{" "}
          </h3>
          <p className="text-gray-600 text-justify">
            Pada usia kehamilan sekitar 2 minggu–dihitung sejak hari pertama
            siklus menstruasi terakhir–janin belum terbentuk dalam rahim. Di
            tahap awal ini, yang bisa terlihat dalam pemeriksaan ultrasonografi
            (USG) adalah persiapan rahim untuk menerima sel telur yang telah
            dibuahi. Jika penghitungan dimulai sejak saat telur dibuahi, janin
            belum terbentuk dengan jelas di dalam rahim pada usia kehamilan 2
            minggu.
          </p>
          <p className="text-gray-600 text-justify">
            Dokter biasanya melakukan USG pada usia kehamilan yang lebih lanjut
            untuk melihat janin, memeriksa perkembangannya, dan mengevaluasi
            kondisi kehamilan. Janin biasanya dapat terlihat dalam USG antara
            usia kehamilan 6-8 minggu, dihitung sejak hari pertama siklus
            menstruasi terakhir. Namun, Ibu dapat melakukan USG untuk memeriksa
            kehamilan setelah terlambat haid selama sekitar 2 minggu atau lebih.
            USG transvaginal atau perut dapat membantu menentukan keberadaan
            janin, melihat tanda-tanda kehamilan seperti kantung kehamilan atau
            deteksi detak jantung janin, serta mengevaluasi kondisi rahim dan
            ovarium. Ini dapat membantu menegakkan diagnosis kehamilan dan
            menentukan usia kehamilan yang lebih akurat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Bolehkah Berhubungan Saat Hamil 2 Minggu?
          </h3>
          <p className="text-gray-600 text-justify">
            Berhubungan intim saat hamil memang memiliki berbagai manfaat untuk
            kesehatan Ibu, persalinan, dan tentunya keharmonisan hubungan Ibu
            dan Ayah. Namun bagaimana jika berhubungan saat hamil 2 minggu? Saat
            hamil muda, terutama trimester pertama, sebaiknya hindari
            berhubungan intim ya Bu. Sebab, sperma mengandung prostaglandin yang
            dapat memicu kontraksi dan keguguran.
          </p>
          <p className="text-gray-600 text-justify">
            Di sisi lain, kondisi Ibu saat hamil muda pun cenderung menurun dan
            lemas karena mengalami mual muntah, perubahan mood, dan lain
            sebagainya. Namun jika Ibu dan Ayah tetap ingin berhubungan intim,
            pastikan Ibu dalam kondisi sehat dan berkonsultasi dengan dokter
            kandungan ya.
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
