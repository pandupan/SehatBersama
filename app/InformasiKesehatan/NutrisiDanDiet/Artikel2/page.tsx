import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[75px] py-4 container mx-auto">
      <div className="border-b-2 pb-4">
        <h1 className="text-lg sm:text-4xl font-bold">
          Pentingnya Memahami Nutrisi, Samakah dengan Zat Gizi?
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
              src="/image/diet2.png"
              alt="article"
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Porsi Makan</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Apa itu nutrisi?</h3>
          <p className="text-gray-600 text-justify">
            Nutrisi adalah asupan makanan dalam kaitannya dengan kebutuhan diet
            sehat untuk tubuh. Bila mengacu pada Kamus Besar Bahasa Indonesia,
            nutrisi adalah proses pemasukan dan pengolahan zat makanan oleh
            tubuh; makanan bergizi; dan ilmu tentang gizi.
          </p>
          <p className="text-gray-600 text-justify">
            Nutrisi yang tepat, dalam artian makanan bergizi, menjadi kunci
            untuk mencegah berkembangnya penyakit kronis dan membuat seseorang
            dapat hidup sehat serta panjang umur. Tidak hanya berumur lebih
            panjang, tapi Anda juga memiliki hidup yang lebih berkualitas.
          </p>
          <p className="text-gray-600 text-justify">
            Bagi orang dengan masalah kesehatan tertentu, menentukan nutrisi
            yang sesuai dengan arahan dokter gizi, ahli gizi, atau dietitian
            dapat membantu mengelola gejala dan mencegah terjadinya komplikasi.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Beda nutrisi dengan zat gizi
          </h3>
          <p className="text-gray-600 text-justify">
            Setelah memahami penjelasan di atas, Anda tentu paham jika nutrisi
            berbeda dengan zat gizi. Nutrisi lebih mengarah pada proses makanan
            yang dicerna oleh tubuh, sedangkan zat gizi adalah senyawa aktif
            yang digunakan tubuh agar bisa berfungsi normal.
          </p>
          <p className="text-gray-600 text-justify">
            Zat gizi ini kemudian terbagi menjadi dua, yakni zat gizi makro dan
            zat gizi mikro. Zat gizi makro diperlukan tubuh dalam jumlah besar,
            misalnya karbohidrat, lemak, dan protein yang memberi tubuh energi.
          </p>
          <p className="text-gray-600 text-justify">
            Sementara zat gizi mikro diperlukan tubuh dalam jumlah yang lebih
            sedikit yang mencangkup vitamin dan mineral, seperti zat besi,
            vitamin A, vitamin D, yodium, asam folat, dan zink. Berikut ini
            adalah peran dari zat gizi mikro bagi tubuh , Membentuk sel darah ,
            Meningkatkan sistem imun agar tidak mudah sakit , Membangun tulang
            dan gigi , Mendukung perkembangan janin dan sel-sel baru setiap
            harinya Nah, semua zat gizi tersebut bisa didapat dari buah-buahan,
            sayur, biji-bijian, daging, kacang-kacangan, minyak nabati, dan
            makanan sehat lainnya.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            Pentingnya mempelajari nutrisi (ilmu gizi)
          </h3>
          <p className="text-gray-600 text-justify">
            Berdasarkan KBBI, nutrisi juga bisa diartikan sebagai ilmu gizi.
            Cabang keilmuan ini umumnya berada di fakultas kesehatan masyarakat
            (FKM). Namun, beberapa universitas di Indonesia, cabang keilmuan ini
            berada di bawah fakultas kedokteran (FK). Mempelajari bidang
            keilmuan ini sangat penting karena menyangkut kesejahteraan manusia.
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
