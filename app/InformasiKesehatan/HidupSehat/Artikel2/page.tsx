import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Cara Menjaga Kesehatan Tubuh agar Tak Mudah Sakit
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
                Minggu, 11 Oktober 2023 06:20
              </span>
            </div>
          </div>
          <div className="my-auto">
            <a
              href="/InformasiKesehatan/HidupSehat"
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
              src="/image/artikel2.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b>{" "}
            <span className="italic">Menjaga Kesehatan Tubuh</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Sebuah Pembukaan</h3>
          <p className="text-gray-600 text-justify">
            Menerapkan pola hidup sehat merupakan langkah utama yang perlu Anda
            lakukan untuk menjaga kesehatan. Meski beberapa orang mungkin merasa
            susah untuk memulainya, hasil dari pola hidup sehat akan membuat
            kesehatan Anda lebih terjaga ke depannya. Berikut adalah beberapa
            tips sederhana yang bisa Anda lakukan untuk menjaga kesehatan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            1. Makan buah dan sayur
          </h3>
          <p className="text-gray-600 text-justify">
            Ketika mengambil makan, jangan hanya terfokus pada pemenuhan
            karbohidrat saja. Cobalah untuk memenuhi piring dengan berbagai zat
            gizi, termasuk melengkapinya dengan sayur dan buah-buahan. Mengutip
            dari situs World Health Organization (WHO), orang dewasa setidaknya
            membutuhkan 400 gram asupan buah dan sayur setiap harinya. Selain
            sebagai lauk, Anda bisa makan sayur dan buah setiap hari dalam
            bentuk camilan sehat, seperti salad atau smoothie bowl. Dengan
            asupan makanan yang sehat, Anda bisa memiliki sistem kekebalan tubuh
            yang lebih kuat. Ini juga mengurangi risiko berbagai penyakit,
            seperti diabetes jantung, stroke, hingga kanker.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">2. Olahraga rutin</h3>
          <p className="text-gray-600 text-justify">
            Tetap aktif melakukan olahraga secara rutin akan membuat tubuh Anda
            bugar dan tidak mudah terserang penyakit. Orang dewasa (18–64 tahun)
            setidaknya membutuhkan aktivitas fisik selama 150 menit setiap
            minggunya. Tidak hanya menjaga kesehatan fisik, olahraga rutin juga
            membantu Anda menjaga kesehatan mental dengan cara mengurangi stres.
            Pastikan untuk menyesuaikan jenis olahraga dengan kondisi tubuh
            Anda.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">3. Minum teh hijau</h3>
          <p className="text-gray-600 text-justify">
            Sudah cukup lama teh hijau dipercaya mampu memberi berbagai manfaat
            bagi kesehatan. Manfaat ini didapatkan dari tingginya kandungan
            antioksidan yang ada di dalamnya, terutama flavonoid. Dengan
            kandungan flavonoid, teh hijau dipercaya mampu menurunkan tekanan
            darah hingga mengurangi risiko penyakit kardiovaskular. Teh hijau
            juga dikenal mengandung polifenol yang dapat menghambat pertumbuhan
            berbagai jenis sel kanker. Meski begitu, masih dibutuhkan penelitian
            lebih lanjut tentang pemanfaatan satu ini.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">4. Tidur cukup</h3>
          <p className="text-gray-600 text-justify">
            Terdapat hubungan yang kuat antara kualitas tidur dengan sistem
            kekebalan tubuh. Pasalnya, ketika beristirahat, tubuh Anda akan
            membersihkan racun dan mengembalikan energi. Dengan begitu, sistem
            kekebalan tubuh Anda akan terjaga. Kurang tidur akan meningkatkan
            risiko berbagai penyakit kronis, seperti diabetes tipe dua, jantung,
            obesitas, hingga depresi. Pastikan Anda tidak mengganti jam tidur
            malam dengan tidur siang karena keduanya tidak memberikan manfaat
            yang sama.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">5. Kelola stres</h3>
          <p className="text-gray-600 text-justify">
            Salah satu cara menjaga kesehatan tubuh adalah mengelola stres.
            Pasalnya, stres terbukti dapat melemahkan sistem imun sehingga
            membuat Anda lebih mudah sakit. Ketika stres, tubuh akan melepaskan
            hormon kortisol sebagai penyedia energi. Namun, jika kortisol
            dilepaskan secara terus menerus, kinerja tubuh justru bisa menurun
            sehingga Anda rentan sakit. Terdapat berbagai cara yang bisa Anda
            gunakan untuk mengelola stres, contohnya melakukan hobi, meditasi,
            dan menghabiskan waktu dengan orang-orang terdekat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            6. Bersosialisasi dengan orang sekitar
          </h3>
          <p className="text-gray-600 text-justify">
            Ketika Anda merasa terpuruk saat menghadapi sesuatu, jangan pernah
            merasa sendiri. Cobalah untuk menceritakan kondisi tersebut pada
            orang-orang terdekat Anda yang bisa dipercaya. Jika itu tidak cukup,
            Anda bisa mempertimbangkan untuk datang ke psikolog. Mengisolasi
            diri saat sedang terpuruk justru memperbesar risiko Anda untuk
            mengalami stres dan depresi. Saat Anda stres, kekebalan tubuh akan
            ikut menurun sehingga tubuh Anda rentan terkena penyakit.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            7. Menjaga kebersihan
          </h3>
          <p className="text-gray-600 text-justify">
            Cara menjaga kesehatan yang selanjutnya adalah dengan menjaga
            kebersihan diri dan lingkungan sekitar. Dengan begitu, Anda bisa
            terhindar dari berbagai penyakit menular. Berikut adalah beberapa
            cara menjaga kebersihan yang bisa Anda terapkan. Cuci tangan sebelum
            dan setelah makan. Tutup mulut dan hidung saat batuk atau bersin.
            Minum air dari sumber terpercaya. Menutup genangan air.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            8. Konsumsi vitamin tambahan
          </h3>
          <p className="text-gray-600 text-justify">
            Beberapa orang mungkin membutuhkan tambahan suplemen vitamin untuk
            memenuhi kebutuhan gizi setiap harinya. Contohnya, jika Anda masih
            kekurangan vitamin D meski sudah mengonsumsi sumber makanannya,
            suplemen bisa dijadikan tambahan. Meski begitu, usahakan untuk
            membicarakan dengan dokter terlebih dahulu terkait jenis suplemen
            yang Anda butuhkan
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            9. Hindari rokok dan alkohol
          </h3>
          <p className="text-gray-600 text-justify">
            Tidak ada takaran alkohol yang aman bagi kesehatan. Berapa pun
            jumlah alkohol yang masuk dalam tubuh, itu bisa mengganggu kesehatan
            fisik dan mental. Jika dibiarkan, kebiasaan minum alkohol juga bisa
            menyebabkan ketergantungan dan memberikan efek samping yang lebih
            membahayakan. Sama halnya dengan alkohol, rokok juga tidak baik
            untuk tubuh. Bukan hanya bagi perokok aktif, asap rokok juga
            berbahaya bagi perokok pasif. Maka saat Anda merokok, Anda bukan
            hanya membahayakan diri sendiri, tetapi juga orang sekitar.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            10. Praktikan seks yang aman
          </h3>
          <p className="text-gray-600 text-justify">
            Seks yang dilakukan dengan aman tidak hanya memberi kepuasan secara
            emosional, tetapi juga menjaga kesehatan fisik. Salah satu cara
            menerapkan seks aman adalah dengan tidak berganti-ganti pasangan.
            Dengan begitu, Anda bisa mengurangi risiko infeksi menular seksual.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            11. Jaga berat badan tetap ideal
          </h3>
          <p className="text-gray-600 text-justify">
            Melansir dari laman American Academy of Family Physicians, menjaga
            berat badan tetap ideal merupakan salah satu cara menjaga kesehatan
            tubuh. Kelebihan berat badan akan meningkatkan risiko Anda
            terjangkit berbagai gangguan kesehatan, seperti diabetes tipe 2,
            tekanan darah tinggi, dan stroke. Dengan memiliki berat badan ideal,
            Anda juga akan memiliki tubuh yang lebih bugar dan merasa lebih
            mudah ketika harus beraktivitas.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            12. Cara lain menjaga kesehatan
          </h3>
          <p className="text-gray-600 text-justify">
            Selain beberapa tips di atas, berikut adalah tips lain yang bisa
            Anda gunakan untuk menjaga kesehatan. Membatasi konsumsi gula dan
            garam. Mengurangi konsumsi lemak jahat atau low density lipoprotein
            (LDL). Mendapatkan vaksin terbaru. Menggunakan tabir surya.
            Membatasi penggunaan peralatan elektronik. Melakukan pemeriksaan
            kesehatan secara rutin. Orang-orang yang memiliki masalah kesehatan
            atau penyakit kronis juga perlu mengelola kondisi tubuhnya dengan
            baik, misalnya dengan meminum obat secara rutin.
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
