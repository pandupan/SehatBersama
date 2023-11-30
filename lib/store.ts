type ResikoBMI = {
    id: string;
    resiko: string;
    rekomendasi: string;
    threshold: string;
  };

export const resikoBMI = [
    {id:"1",resiko : "Resiko kesehatan mungkin termasuk kekurangan nutrisi, lemahnya sistem kekebalan tubuh, dan masalah lain terkait berat badan rendah.", rekomendasi : "Konsultasikan dengan dokter atau ahli gizi untuk merancang rencana makan yang seimbang dan mungkin mempertimbangkan program latihan fisik yang sesuai.",  threshold: "Kurus"},
    {id:"2",resiko : "Risiko kesehatan yang lebih rendah dibandingkan dengan orang-orang di luar kategori normal BMI, tetapi tetap perlu menjaga pola makan dan aktivitas fisik yang sehat.", rekomendasi : "Pertahankan kombinasi latihan kardiovaskular dan kekuatan. Ini bisa termasuk berenang, berlari, yoga, atau latihan interval untuk menjaga kebugaran dan kesehatan umum.", threshold: "Normal"},
    {id:"3",resiko : "Risiko kesehatan yang lebih rendah dibandingkan dengan orang-orang di luar kategori normal BMI, tetapi tetap perlu menjaga pola makan dan aktivitas fisik yang sehat.", rekomendasi : "Fokus pada latihan kardiovaskular yang intensitas sedang hingga tinggi, seperti jogging, bersepeda, atau berenang. Kombinasikan dengan latihan kekuatan untuk membakar kalori dan meningkatkan metabolisme.", threshold: "Obesitas 1"},
    {id:"4",resiko : "Risiko serius untuk penyakit kardiovaskular, diabetes tipe 2, dan komplikasi kesehatan lainnya.", rekomendasi : "Mulailah dengan latihan kardiovaskular yang ringan, seperti berjalan cepat, dan tingkatkan intensitas seiring waktu. Latihan kekuatan juga penting untuk membantu pembakaran kalori. Pertimbangkan aktivitas rendah tekanan pada sendi, seperti berenang atau bersepeda.", treshold : "Obesitas 2"},

  ]