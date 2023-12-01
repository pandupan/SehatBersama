type ResikoBMI = {
    id: string;
    resiko: string;
    rekomendasi: string;
    threshold: string;
  };

export const resikoBMI = [
  {
    id:"1",
    resiko : "Resiko kesehatan mungkin termasuk kekurangan nutrisi, lemahnya sistem kekebalan tubuh, dan masalah lain terkait berat badan rendah.", 
    rekomendasi : "Konsultasikan dengan dokter atau ahli gizi untuk merancang rencana makan yang seimbang dan mungkin mempertimbangkan program latihan fisik yang sesuai.",  
    threshold: "Kurus"
  },
  {
    id:"2",
    resiko : "Risiko kesehatan yang lebih rendah dibandingkan dengan orang-orang di luar kategori normal BMI, tetapi tetap perlu menjaga pola makan dan aktivitas fisik yang sehat.", 
    rekomendasi : "Pertahankan kombinasi latihan kardiovaskular dan kekuatan. Ini bisa termasuk berenang, berlari, yoga, atau latihan interval untuk menjaga kebugaran dan kesehatan umum.", 
    threshold: "Normal"
  },
  {
    id:"4",
    resiko : "Peningkatan risiko penyakit jantung, diabetes, dan masalah kesehatan lainnya.", 
    rekomendasi : "Konsultasikan dengan dokter atau ahli gizi untuk membuat rencana penurunan berat badan yang sehat, termasuk perubahan pola makan dan peningkatan aktivitas fisik.", 
    threshold: "Gemuk"
  },
  {
    id:"5",
    resiko : "Risiko serius untuk penyakit kardiovaskular, diabetes tipe 2, dan komplikasi kesehatan lainnya.", 
    rekomendasi : "Konsultasikan dengan dokter atau ahli gizi untuk bantuan profesional dalam menurunkan berat badan, mungkin dengan menggabungkan perubahan pola makan, olahraga, dan manajemen stres.", 
    threshold: "Obesitas 1"
  },
  {
    id:"6",
    resiko : "Risiko serius untuk penyakit kardiovaskular, diabetes tipe 2, dan komplikasi kesehatan lainnya.", 
    rekomendasi : "Mulailah dengan latihan kardiovaskular yang ringan, seperti berjalan cepat, dan tingkatkan intensitas seiring waktu. Latihan kekuatan juga penting untuk membantu pembakaran kalori. Pertimbangkan aktivitas rendah tekanan pada sendi, seperti berenang atau bersepeda.", 
    threshold : "Obesitas 2"
  },

]