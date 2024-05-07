import React from 'react'
import Button from '@/components/core/Button'
import Image from 'next/image'


const ArtikelDetail = () => {
  return (
<div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
        10 Cara Hidup Sehat yang Mudah dan Sederhana
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
                    Puskesmas Purbaratu
                    </span>
                    <span className="block text-xs sm:text-base text-gray-400">
                    Rabu, 29 November 2023 06:20
                    </span>
                </div>
            </div>
            <div className="my-auto">
                <a href="/InformasiKesehatan/HidupSehat" className="bg-[#1dbbb4] rounded-md text-white sm:text-base text-xs px-2 py-2 sm:px-10 sm:py-2">
                  Kembali
                </a>
            </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
            <Image
              src="/image/HeroSection.png" 
              alt="article" 
              fill={true} 
              className="object-cover" 
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Gambar Diet</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Cara Hidup Sehat yang Sederhana dan Mudah</h3>
          <p className="text-gray-600 text-justify">
          Hidup sehat didapatkan dari kebiasaan pola hidup dan pola makan yang sehat. Bukan hanya konsumsi makanan sehat setiap hari, namun penting juga untuk mengelola stres, olahraga, meminimalkan kebiasaan buruk, menjaga kualitas tidur, dll. Meski cara hidup sehat bukanlah sesuatu yang mudah untuk dilakukan, hidup sehat mempunyai banyak manfaat seperti membantu Anda menjaga berat badan dan meningkatkan energi. Anda juga dapat mencegah terjadinya penyakit serius bila menjalani gaya hidup sehat. Berikut ini beberapa tips hidup sehat untuk Anda jalani:
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">1. Makan Sehat dan Diet Seimbang</h3>
          <p className="text-gray-600 text-justify">
          Kunci utama hidup sehat adalah dengan memenuhi kebutuhan gizi harian. Nutrisi dalam tubuh berguna agar tubuh dapat tumbuh dan berkembang serta menjalankan fungsinya dengan maksimal. Apabila fungsi organ tubuh normal, maka risiko penyakit kronis pun menurun. Setidaknya, tubuh membutuhkan 40 nutrisi berbeda yang tidak didapatkan hanya dengan satu jenis makanan. Anda dianjurkan untuk makan kombinasi sayur-sayuran, buah-buahan, kacang-kacangan, biji-bijian, lemak sehat, dan asam lemak omega-3. Jika Anda memiliki kebiasaan pola makan yang tidak sehat, sepertinya Anda perlu mendata semua makanan yang dikonsumsi setiap hari. Batasi asupan makanan tidak sehat seperti makanan olahan, junk food, makanan berlemak, daging merah, minuman manis, lemak trans, dan kelebihan natrium.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">2. Mengatur Jadwal dan Porsi Makan</h3>
          <p className="text-gray-600 text-justify">
          Setelah Anda sudah berkomitmen untuk mengonsumsi makanan sehat, selanjutnya Anda harus mengontrol porsi makan dan jadwal makan yang teratur. Sebagai contoh, jangan makan berlebihan. Mengatur porsi makan akan membantu Anda untuk membatasi asupan kalori harian. Berikut ini beberapa tips untuk mengontrol porsi makan Anda:
          </p>
          <p className="text-gray-600 text-justify">
          Gunakan piring yang lebih kecil.
          </p>
          <p className="text-gray-600 text-justify">
          Hitung kalori makanan sebelum mengonsumsinya.
          </p>
          <p className="text-gray-600 text-justify">
          Total jumlah kalori harian yang dianjurkan adalah 2.000 kalori untuk wanita dan 2.500 untuk pria. Contoh porsi yang sesuai adalah 100 g daging, sepotong buah ukuran sedang, dan setengah cangkir pasta. Bila makan di luar, Anda dapat berbagi porsi dengan teman Anda.
          </p>
          <p className="text-gray-600 text-justify">
          Sementara itu, berikut ini jadwal makan yang dianjurkan:
          </p>
          <p className="text-gray-600 text-justify">
          Sarapan sekitar 7-8 pagi. Makan siang sekitar jam 11-12 siang. Makan malam sekitar jam 6 sore atau setidaknya 3 jam sebelum tidur. Bila masih lapar, Anda dapat makan cemilan sehat seperti smoothie, buah pisang atau apel, kacang-kacangan, atau yogurt.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">3. Olahraga Secara Teratur</h3>
          <p className="text-gray-600 text-justify">
          Hidup sehat yang sering kali dilewatkan oleh masyarakat yang tinggal di kota besar adalah olahraga. Olahraga dengan cara yang benar dan waktu yang tepat dapat melancarkan peredaran darah, menguatkan otot dan tulang, membakar kalori, menambah energi, serta membuat fisik dan mental menjadi sehat. Pakar kesehatan menyarankan untuk berolahraga dengan durasi total minimal 150 menit tiap minggu. Anda dapat memilih jenis latihan ringan seperti jalan kaki, joging, lari santai, atau naik tangga daripada naik lift. Setelah sudah terbiasa, Anda dapat melakukan latihan lain seperti squat, lunge, push-up, plank, dll.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">4. Kelola Stres Stres</h3>
          <p className="text-gray-600 text-justify">
          adalah bentuk perasaan yang tidak dapat dihindari dan menimbulkan gejala fisik seperti sakit kepala, sakit perut, meningkatnya tekanan darah tinggi, dada terasa sakit, hingga susah tidur. Stres berkepanjangan dapat memicu penyakit, karena itu Anda harus mengelolanya dengan baik. Sebelum perasaan stres semakin besar, sebaiknya lakukan berbagai aktivitas untuk koping dari stres. Anda dapat melakukan yoga, meditasi, refleksi, jalan-jalan, menghabiskan momen dengan teman-teman, atau aktivitas lainnya yang membuat Anda bahagia. Bila stres memicu depresi, sebaiknya hubungi psikolog.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">5. Istirahat Cukup</h3>
          <p className="text-gray-600 text-justify">
          Tanggung jawab sehari-hari seperti pekerjaan, tugas sekolah, atau masalah hidup lainnya mungkin membuat Anda sering tidur larut malam. Bagaimanapun, istirahat cukup adalah kunci mendapatkan tubuh dan pikiran yang sehat. Pastikan jam tidur Anda terpenuhi dengan membiasakan tidur dan bangun tidur secara teratur. Durasi tidur yang dianjurkan untuk orang dewasa adalah 7-9 jam per hari, namun setiap orang mungkin memiliki kebutuhan yang berbeda-beda. Apabila Anda memiliki masalah tidur, Anda dianjurkan untuk mandi air hangat, membaca buku, atau mendengarkan musik dapat menjadi aktivitas menjelang tidur yang membantu tubuh untuk istirahat. Ingat, tubuh Anda butuh istirahat agar fungsi organ-organ tubuh tetap sehat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">6. Penuhi Kebutuhan Cairan</h3>
          <p className="text-gray-600 text-justify">
          Salah satu cara hidup sehat paling dasar yang mungkin sering diabaikan adalah sebagian orang tidak memenuhi kebutuhan asupan cairan harian. Bila Anda kekurangan cairan, Anda akan berisiko tinggi mengalami dehidrasi dan memicu gangguan kesehatan lainnya. Tubuh manusia terdiri dari 60-70% air untuk mengoptimalkan fungsi organ tubuh. Jadi, sangat penting untuk minum air putih yang cukup setiap hari. Kebutuhan air setiap orang mungkin berbeda-beda sesuai dengan usia, aktivitas harian, dan faktor lainnya, namun disarankan untuk minum air setidaknya 1,5-2 liter per hari.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">7. Kurangi Asupan Garam dan Gula</h3>
          <p className="text-gray-600 text-justify">
          Asupan garam yang tinggi memicu tekanan darah tinggi dan meningkatkan risiko penyakit kardiovaskular. Bila Anda pecinta makanan asin, sebaiknya kontrol diri Anda demi kesehatan jangka panjang. Anda dapat menggantinya bumbu asin dengan rempah-rempah atau variasi rasa lainnya. Selain itu, batasi juga asupan gula harian. Rasa manis dari makanan atau minuman tinggi gula memang menggoda, namun kebanyakan asupan gula tersebut tidak sehat. Misalnya, gula dalam minuman manis tidak dapat diolah menjadi energi dan akan menumpuk di tubuh. Kebanyakan asupan gula akan memicu diabetes dan gangguan kesehatan lainnya.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">8. Jaga Tekanan Darah Normal</h3>
          <p className="text-gray-600 text-justify">
          Tips hidup sehat selanjutnya adalah untuk selalu menjaga tekanan darah Anda. Pastikan tekanan darah, kadar kolesterol, dan gula darah Anda normal. Ketiga faktor ini penting agar Anda selalu sehat. Tubuh yang sehat memiliki: Tekanan Darah: kurang dari 120/80 Total Kolesterol: kurang dari 200 mg/dL Gula Darah: kurang dari 100 mg/dL Anda dianjurkan untuk cek kesehatan secara rutin dan konsultasi pada dokter apabila memiliki risiko gangguan medis terkait tekanan darah, kolesterol, dan gula darah.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">9. Jaga Berat Badan</h3>
          <p className="text-gray-600 text-justify">
          Apabila Anda menjalani gaya hidup sehat, maka Anda juga akan mendapat berat badan ideal. Seseorang dengan berat badan ideal memiliki risiko yang lebih rendah untuk mengalami penyakit jantung, kanker, diabetes, dan sebagainya. Pastikan Anda mengontrol secara rutin berat badan Anda. Ikuti skala berat badan normal berdasarkan kalkulator body mass index (BMI), yaitu 18.5-24.9. Bila skala berat badan Anda kurang atau lebih dari indikator itu, maka segera membuat program berat badan ideal.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">10. Jangan Merokok</h3>
          <p className="text-gray-600 text-justify">
          Tidak ada manfaat kesehatan dari merokok. Merokok meningkatkan risiko berbagai penyakit termasuk kanker paru-paru, penyakit jantung, diabetes, penyakit pernapasan, stroke, dan sebagainya. Merokok juga melemahkan sistem imun Anda dan berisiko pada gangguan kesehatan yang lebih serius. Itulah beberapa tips hidup sehat. Sangat dianjurkan untuk mulai peduli pada kesehatan diri sendiri sejak dini. Hidup sehat dimulai dari perubahan kecil seperti mulai konsumsi sayuran dan olahraga ringan. Apabila Anda memiliki riwayat penyakit sehingga sulit menjalankan tips hidup sehat tersebut, sebaiknya konsultasi dengan dokter untuk perubahan gaya hidup sehat seperti apa yang sesuai dengan kondisi Anda.
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
  )
}

export default ArtikelDetail
