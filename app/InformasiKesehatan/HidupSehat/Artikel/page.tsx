import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
<div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pola Hidup Sehat
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
              src="/image/PHBSartikel.png" 
              alt="article" 
              fill={true} 
              className="object-cover" 
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Pola Hidup Sehat</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Pahami makna pola hidup sehat</h3>
          <p className="text-gray-600 text-justify">
          Banyak orang melakukan diet ketat untuk mendapatkan tubuh yang diinginkan terutama pada kaum wanita sampai-sampai mengesampingkan nilai-nilai kesehatan, bahkan dalam beberapa kasus sudah banyak terjadi orang yang melakukan diet ketat hingga mengalami kematian. Untuk mendapatkan tubuh bentuk tubuh yang ideal tidak cukup hanya dengan diet sehat apalagi diet ketat yang salah, melainkan harus ada keseimbangan antara olahraga, istirahat, pola makan yang benar, dan masih banyak lagi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <p className="text-gray-600 text-justify">
          Persepsi yang salah terhadap makna sehat juga masih terdapat di beberapa kalangan masyarakat dimana mereka beranggapan bahwa gemuk itu berarti sehat padahal orang yang gemuk itu artinya di dalam tubuhnya sudah banyak terjadi penimbunan lemak yang berbahaya bagi tubuh. Orang yang gemuk atau dalam istilah lain disebut dengan obesitas cenderung memiliki kadar kolesterol yang tinggi yang dapat memicu terjadinya gangguan pada jantung dan beberapa penyakit lain seperti asam urat, tekanan darah tinggi hingga diabetes
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Kriteria pola hidup sehat</h3>
          <p className="text-gray-600 text-justify">
          Ada beberapa kriteria yang dijadikan apakah hidup kita sudah sesuai dengan pola hidup yang sehat diantaranya
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">1.Nilai gizi atau kandungan dari makanan yang kita konsumsi</h3>
          <p className="text-gray-600 text-justify">
          Makanan yang kita konsumsi haruslah memenuhi semua yang dibutuhkan oleh tubuh, pola makan yang benar hendaknya memenuhi konsep 4 sehat 5 sempurna yang sudah tidak asing lagi kita dengar dimana konsep ini menekankan pentingnya 4 golongan makanan berupa sumber kalori untuk tenaga, protein untuk pembangun, sayuran dan buah sebagai sumber vitamin dan mineral sebagai pemeliharaan.
          Perlu juga diketahui bahwa jumlah kebutuhan gizi dari masing-masing orang berbeda tingkat kebutuhannya, orang yang berusia tua dengan orang yang masih muda tentu memiliki nilai kebutuhan gizi yang berbeda, begitu juga jenis kelamin ikut mempengaruhi nilai gizi yang dibutuhkan. Untuk mengetahui seberapa besar kebutuhan tubuh anda terhadap kandungan gizi atau vitamin tertentu tentu saja anda harus berkonsultasi dengan ahli gizi bukan dengan mencari informasi dari web atau blog yang tersedia di internet, karena informasi yang tersedia di internet hanyalah sebagai pemberi informasi secara garis besar sekalipun situs web yang anda kunjungi dikelola oleh pakar atau ahli gizi terkecuali situs web tersebut menyediakan fasilitas tanya jawab sehingga admint dari web tersebut betul-betul paham dengan kondisi dan riwayat penyakit yang pernah anda derita.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">2.Istirahat yang cukup dan berkualitas</h3>
          <p className="text-gray-600 text-justify">
          Istirahat yang paling baik adalah tidur dan tidur yang baik bagi tubuh adalah pada malam hari. Berapa jam sebaiknya tidur dalam satu hari? untuk pertanyaan ini dalam beberapa penelitian ilmiah memberikan jawaban yang berbeda, ada yang mengatakan 7 jam ada juga yang mengatakan 8 jam/hari bahkan ada penelitian ilmiah yang menyebutkan tidur cukup hanya dengan 6 jam/hari namun yang paling penting sebenarnya adalah terletak pada kualitas tidur bukan kuantitas.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">3.Olahraga</h3>
          <p className="text-gray-600 text-justify">
          Lakukan olahraga secara rutin yang sesuai dengan kondisi tubuh, usia, dan riwayat penyakit yang pernah anda derita. Beda usia tentu beda pula jenis olahraga yang sesuai untuk dijalani, namun ada beberapa olahraga yang cocok untuk segala usia dan terlebih bagi anda yang menderita gangguan jantung diantaranya jalan santai atau lari-lari kecil, dan bersepeda. Untuk orang yang mengalami gangguan jantung sangat cocok menjalani olahraga yang sifatnya tidak melakukan gerakan-gerakan spontan.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">4.Lingkungan yang sehat</h3>
          <p className="text-gray-600 text-justify">
          Lingkungan yang sehat tentunya kebersihan adalah syarat mutlak dan selain kebersihan, lingkungan yang sehat memiliki kriteria seperti sirkulasi udara yang baik dan bersih, hawa sejuk dan tidak terlalu bising.
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

export default page
