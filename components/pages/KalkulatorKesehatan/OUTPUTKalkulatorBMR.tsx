import React from "react";

const OUTPUTKalkulatorBMR = () => {
  return (
    <div className="flex flex-col container  pt-20 pb-40 px-20">
      <div className="border-2 border-gray-100 rounded-t-2xl p-10 flex flex-col">
        <p className="text-2xl border rounded-2xl py-2 px-4 mt-4 text-center font-semibold">
          Berdasarkan informasi yang Anda berikan, hasil kalkulasi BMR Anda
          adalah [Nilai BMR] kalori per hari.
        </p>
        <div className="flex-col bg-gray-100 rounded-2xl p-6">
          <p className="text-center">
            Ini adalah jumlah kalori yang dibutuhkan tubuh Anda saat
            beristirahat untuk menjaga fungsi dasar seperti pernapasan, detak
            jantung, dan fungsi organ internal lainnya. Pastikan untuk
            memperhatikan kebutuhan tambahan kalori berdasarkan tingkat
            aktivitas fisik Anda untuk menentukan total kebutuhan kalori harian
            Anda.
          </p>
        </div>
      </div>
      <a
        href="/KalkulatorKesehatan"
        className="px-10 py-4 bg-[#4bb6be] text-white text-center rounded-b-2xl"
      >
        CEK KESEHATAN LAINNYA
      </a>
    </div>
  );
};

export default OUTPUTKalkulatorBMR;
