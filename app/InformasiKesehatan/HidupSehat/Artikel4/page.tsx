import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
<div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
        Manfaat Hidup Sehat
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
                    Puskesmas Purbaratu
                    </span>
                    <span className="block text-xs sm:text-base text-gray-400">
                    Minggu, 11 Oktober 2023 06:20
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
              src="/image/artikel4.png" 
              alt="article" 
              fill={true} 
              className="object-cover" 
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Gambar Buah</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Manfaat Hidup Sehat</h3>
          <p className="text-gray-600 text-justify">
          Mengapa hidup sehat itu penting ? saat ini masih banyak orang yang belum sadar betapa pentingnya hidup sehat untuk kehidupan sehari-hari. Memiliki tubuh yang sehat tentu akan menunjang aktivitas kita sehari-hari. Bayangkan saja jika kita memiliki penyakit yang disebabkan oleh gaya hidup yang tidak sehat tentu akan merugikan diri sendiri dan juga keluarga. Sebab, aktivitas akan terganggu karena kita sakit bahkan akan banyak biaya yang keluar untuk pengobatan. Oleh sebab itu kita harus sudah sadar betapa pentingnya menjaga kesehatan.
          </p>
          <p className="text-gray-600 text-justify">
          Hidup sehat bisa dimulai dari diri sendiri dengan mengurangi kebiasaan yang tidak baik untuk kesehatan. mulai sekarang sudah saatnya kita untuk memulai hidup sehat tanpa diabetes, hidup sehat tanpa merokok, hidup sehat tanpa obat dan hidup sehat bebas kanker. ayo mulai hidup sehat sejak remaja sehingga bisa hidup sehat hingga lansia.berikut adalah manfaat dari menjalankan hidup sehat
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Lebih bahagia</h3>
          <p className="text-gray-600 text-justify">
          Selain bermanfaat untuk kesehatan, menjalankan hidup sehat juga mampu meningkatkan suasana hati. Sebab menjalankan hidup sehat mampu membuat percaya diri dan meningkatkan suasana hati. Hal tersebut karena hidup sehat dengan berolahraga dan pola makan sehat mampu menstimulasi produksi hormon endorphin yang ada dalam tubuh. Hal ini yang membuat kita merasa lebih bahagia dan lebih rileks.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Meningkatkan energi tubuh</h3>
          <p className="text-gray-600 text-justify">
          Manfaat hidup sehat selanjutnya adalah mampu meningkatkan pasokan energi yang dibutuhkan oleh tubuh dalam menunjang aktivitas sehari hari. Menjalankan pola makan sehat dengan mengkonsumsi buah dan sayur dan makanan yang tinggi protein mampu memberikan banyak energi untuk tubuh
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Mengurangi risiko penyakit</h3>
          <p className="text-gray-600 text-justify">
          Menjalankan hidup sehat tentu kita akan terhindar dari masalah penyakit. Menjalankan hidup sehat dengan melakukan aktivitas fisik secara rutin akan meningkatkan daya tahan tubuh. Ketika menjalankan hidup sehat tentu asupan protein, vitamin hingga nutrisi akan terpenuhi hal ini yang membuat kita terhindar dari risiko penyakit.
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
