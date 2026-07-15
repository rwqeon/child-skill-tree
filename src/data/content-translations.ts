import { Topic } from './types';

interface ContentTranslation {
  name: string;
  description: string;
  evidence: string[];
  assessmentPrompt: string;
}

// Indonesian translations for all topics
export const contentTranslations: Record<string, ContentTranslation> = {
  // ==================== COMPUTING ====================
  "mt_AzTrT5ySCx": {
    name: "AI dalam Kehidupan Sehari-hari",
    description: "Mengenali AI dalam kehidupan sehari-hari: buka kunci wajah di ponsel, rekomendasi video, koreksi ejaan otomatis, pintu otomatis yang mendeteksi orang; teknologi yang tampak 'mengetahui' hal-hal",
    evidence: [
      "Mengidentifikasi setidaknya lima contoh AI dalam kehidupan sehari-hari mereka",
      "Menjelaskan bahwa teknologi ini menggunakan pola dan data, bukan sihir atau pemikiran nyata",
      "Mendeskripsikan satu cara AI membuat hidup mereka lebih mudah dan satu waktu mungkin tidak berfungsi dengan baik"
    ],
    assessmentPrompt: "Bisakah {{name}} menunjukkan beberapa hal yang mereka gunakan setiap hari — seperti koreksi otomatis atau buka kunci wajah — dan menjelaskan bahwa ini adalah contoh AI?"
  },
  "mt_XbGfVhfiUz": {
    name: "Komputer dalam Kehidupan Sehari-hari",
    description: "Mengidentifikasi komputer dalam kehidupan sehari-hari — bukan hanya laptop tetapi juga ponsel, tablet, speaker pintar, lampu lalu lintas, mesin cuci; apa yang membuat sesuatu menjadi komputer",
    evidence: [
      "Menunjukkan setidaknya lima benda sehari-hari yang mengandung komputer",
      "Menjelaskan apa yang dimiliki semua komputer secara bersama (mereka mengikuti instruksi dan memproses informasi)",
      "Mengelompokkan serangkaian benda menjadi 'mengandung komputer' dan 'tidak mengandung komputer'"
    ],
    assessmentPrompt: "Bisakah {{name}} melihat sekitar rumah Anda dan menunjukkan setidaknya lima hal yang memiliki komputer di dalamnya, termasuk yang tidak terlihat seperti komputer tradisional?"
  },
  "mt_jvJ35MmCvK": {
    name: "Robot Dunia Nyata",
    description: "Apa sebenarnya robot — bukan versi fiksi ilmiah; robot di pabrik, robot penyedot debu, lengan robot dalam operasi; robot mengikuti instruksi yang diberikan oleh manusia",
    evidence: [
      "Mendeskripsikan apa itu robot (mesin yang mengikuti instruksi untuk melakukan suatu tugas)",
      "Menyebutkan setidaknya tiga robot nyata dan apa yang mereka lakukan",
      "Menjelaskan bahwa robot tidak hidup dan tidak memiliki perasaan — mereka mengikuti instruksi yang ditulis manusia"
    ],
    assessmentPrompt: "Jika {{name}} melihat robot penyedot debu, bisakah mereka menjelaskan bagaimana robot itu berbeda dari orang yang membersihkan — bahwa robot mengikuti instruksi daripada berpikir untuk dirinya sendiri?"
  },
  "mt_WRRv1ABECC": {
    name: "Perangkat Pintar vs Tidak Pintar",
    description: "Mengelompokkan benda menjadi 'pintar' (bisa mendeteksi dan merespons) dan 'tidak pintar' (hanya diam); pemanggang roti vs speaker pintar; pengenalan gagasan bahwa beberapa mesin bisa mendeteksi dan merespons dunia",
    evidence: [
      "Mengelompokkan serangkaian benda menjadi 'pintar' (merespons input) dan 'tidak pintar' (melakukan hal yang sama setiap kali)",
      "Menjelaskan apa yang membuat speaker pintar berbeda dari radio biasa",
      "Memberikan contoh mesin yang mendeteksi sesuatu dan merespons (pintu otomatis, lampu sensor gerak)"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan perbedaan antara saklar lampu biasa dan saklar yang menyala otomatis saat Anda berjalan ke dalam ruangan?"
  },
  "mt__p5n8z5soJ": {
    name: "Instruksi Langkah demi Langkah",
    description: "Instruksi langkah demi langkah untuk tugas sehari-hari (membuat sandwich, menggosok gigi); jika instruksi salah atau hilang, sesuatu menjadi salah; komputer mengikuti instruksi dengan tepat",
    evidence: [
      "Menulis atau mendeskripsikan instruksi langkah demi langkah untuk tugas sehari-hari yang sederhana",
      "Memprediksi apa yang terjadi jika satu langkah hilang atau dalam urutan yang salah",
      "Menjelaskan bahwa komputer mengikuti instruksi dengan tepat — tidak bisa menebak apa yang Anda maksud"
    ],
    assessmentPrompt: "Jika {{name}} harus menulis instruksi untuk membuat sandwich selai yang begitu tepat sehingga bahkan robot pun bisa mengikutinya, bisakah mereka menyertakan setiap langkah?"
  },
  "mt_u6SYiVx7FX": {
    name: "Asisten Suara dan Cara Kerjanya",
    description: "Apa yang terjadi saat Anda berbicara dengan Alexa, Siri, atau Google Assistant; mereka mendengarkan, mencoba memahami, mencari jawaban; terkadang mereka salah; mereka adalah alat, bukan makhluk hidup",
    evidence: [
      "Mendeskripsikan langkah-langkah yang terjadi saat Anda menanyakan pertanyaan ke asisten suara (ia mendengarkan, memproses kata-kata, menemukan jawaban, berbicara kembali)",
      "Memberikan contoh waktu ketika asisten suara mungkin salah",
      "Menjelaskan bahwa asisten suara adalah program komputer, bukan orang — tidak mengerti atau merasakan"
    ],
    assessmentPrompt: "Jika {{name}} bertanya kepada Alexa atau Siri dan mendapat jawaban yang salah, bisakah mereka menjelaskan mengapa asisten suara terkadang melakukan kesalahan?"
  },
  "mt_fT4G0QloX5": {
    name: "AI dalam Game Komputer",
    description: "Bagaimana karakter game komputer 'memutuskan' apa yang harus dilakukan; AI berbasis aturan sederhana vs AI pembelajaran; NPC, penyesuaian kesulitan; AI sebagai lawan dalam catur atau permainan papan",
    evidence: [
      "Menjelaskan bagaimana lawan komputer dalam game memutuskan langkahnya",
      "Mendeskripsikan perbedaan antara karakter game yang mengikuti aturan tetap dan yang belajar dari pemain",
      "Memberikan contoh AI yang membuat game lebih menyenangkan (menyesuaikan kesulitan, menghasilkan level)"
    ],
    assessmentPrompt: "Ketika {{name}} bermain game melawan komputer, bisakah mereka menjelaskan bagaimana karakter game 'memutuskan' apa yang harus dilakukan?"
  },
  "mt_bPFToj0OhZ": {
    name: "Kesalahan dan Keterbatasan AI",
    description: "Mesin membuat kesalahan; mereka hanya mengetahui apa yang telah ditunjukkan; data pelatihan yang buruk menghasilkan hasil yang buruk; AI bukan sihir — hanya matematika pada data; menampilkan kasus pinggir dan kegagalan",
    evidence: [
      "Memberikan contoh AI yang membuat kesalahan (asisten suara salah dengar, kesalahan koreksi otomatis, rekomendasi yang salah)",
      "Menjelaskan bahwa kesalahan AI terjadi karena celah atau kesalahan dalam data pelatihan",
      "Mendeskripsikan mengapa AI bukan sihir — mengikuti aturan matematika yang diterapkan pada data"
    ],
    assessmentPrompt: "Jika AI salah mengidentifikasi gambar muffin sebagai chihuahua, bisakah {{name}} menjelaskan mengapa kesalahan semacam itu terjadi?"
  },
  "mt_kH1DzOPsXG": {
    name: "Data dan Informasi untuk Komputer",
    description: "Apa itu data: informasi yang digunakan komputer — angka, kata-kata, gambar, suara; semua yang diketahui komputer berasal dari data yang diberikan orang",
    evidence: [
      "Mendefinisikan data sebagai informasi yang disimpan di komputer (angka, teks, gambar, suara)",
      "Memberikan setidaknya tiga contoh data yang mereka buat setiap hari (foto, pesan, kueri pencarian)",
      "Menjelaskan bahwa komputer hanya mengetahui apa yang telah diberikan — tidak memiliki pengetahuan sendiri"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan apa arti 'data' dan memberikan contoh data yang mereka buat setiap kali menggunakan ponsel atau komputer?"
  },
  "mt_oajUvqAiBJ": {
    name: "Manusia vs Mesin",
    description: "Membandingkan kemampuan manusia dan mesin: kreativitas, empati, akal sehat vs kecepatan, memori, pengulangan; Ujian Turing (sederhana); apa yang membuat manusia unik",
    evidence: [
      "Menyebutkan setidaknya tiga hal yang manusia lebih baik daripada komputer (kreativitas, empati, akal sehat)",
      "Menyebutkan setidaknya tiga hal yang komputer lebih baik daripada manusia (kecepatan, memori, tugas berulang)",
      "Mendeskripsikan Ujian Turing dalam istilah sederhana (bisakah komputer menipu seseorang sehingga mengira itu manusia?)"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan apa yang manusia masih lebih baik daripada komputer dan apa yang komputer bisa lakukan yang manusia tidak bisa?"
  },
  "mt_K6qtan847r": {
    name: "Dasar Pembelajaran Mesin",
    description: "Bagaimana pembelajaran mesin bekerja pada tingkat konseptual: menunjukkan banyak contoh ke komputer, ia menemukan pola, lalu membuat prediksi tentang hal baru; pengalaman langsung dengan Teachable Machine atau alat serupa",
    evidence: [
      "Mendeskripsikan tiga langkah pembelajaran mesin dalam istilah sederhana (memberi contoh, menemukan pola, membuat prediksi)",
      "Melatih model sederhana menggunakan alat seperti Teachable Machine dan mendeskripsikan apa yang terjadi",
      "Menjelaskan mengapa menunjukkan lebih banyak dan contoh yang lebih baik membuat model lebih akurat"
    ],
    assessmentPrompt: "Bisakah {{name}} mendeskripsikan bagaimana Anda mengajari komputer mengenali sesuatu — dengan menunjukkan banyak contoh sampai ia menemukan polanya?"
  },
  "mt_ofOGCQ7FWj": {
    name: "Pola dan Klasifikasi",
    description: "Manusia pandai menemukan pola; komputer juga bisa belajar menemukan pola, tetapi membutuhkan banyak contoh; kegiatan pengurutan dan klasifikasi sebagai dasar pembelajaran mesin",
    evidence: [
      "Mengurutkan serangkaian item ke dalam kategori dan menjelaskan aturan yang mereka gunakan",
      "Menjelaskan bahwa komputer belajar pola dengan melihat banyak contoh",
      "Mendeskripsikan mengapa komputer membutuhkan lebih banyak contoh daripada manusia untuk mempelajari pola yang sama"
    ],
    assessmentPrompt: "Jika Anda menunjukkan gambar kucing dan anjing kepada {{name}}, bisakah mereka menjelaskan bagaimana komputer bisa belajar membedakannya — dan mengapa komputer membutuhkan lebih banyak gambar daripada manusia?"
  },
  "mt_EedcpioR0v": {
    name: "Sistem Rekomendasi dan Gelembung Filter",
    description: "Bagaimana sistem rekomendasi bekerja: YouTube, Netflix, dan situs web toko melacak apa yang Anda klik dan menemukan pola; gelembung filter; perbedaan antara saran yang membantu dan manipulasi",
    evidence: [
      "Menjelaskan bagaimana YouTube atau Netflix memutuskan apa yang akan disarankan selanjutnya",
      "Mendeskripsikan apa itu 'gelembung filter' (hanya melihat hal-hal yang mirip dengan apa yang sudah Anda sukai)",
      "Memberikan satu manfaat dan satu risiko dari sistem rekomendasi"
    ],
    assessmentPrompt: "Apakah {{name}} memahami mengapa YouTube terus menyarankan video yang mirip dengan yang sudah mereka tonton, dan bisakah mereka menjelaskan bagaimana sistem rekomendasi bekerja?"
  },
  "mt_cVp_nop-5L": {
    name: "AI dan Keadilan dalam Keputusan",
    description: "Apakah AI harus membuat keputusan penting tentang orang: pekerjaan, pinjaman, keadilan; siapa yang bertanggung jawab ketika AI membuat keputusan yang tidak adil; pengenalan keadilan algoritmik",
    evidence: [
      "Memberikan contoh keputusan penting yang mungkin dibantu AI (perekrutan, diagnosis medis, persetujuan pinjaman)",
      "Menjelaskan mengapa membiarkan AI membuat keputusan tentang orang bisa berisiko jika sistemnya bias",
      "Menyarankan siapa yang harus bertanggung jawab jika sistem AI membuat keputusan yang tidak adil"
    ],
    assessmentPrompt: "Jika {{name}} mengetahui bahwa program komputer memutuskan siapa yang mendapat wawancara kerja, bisakah mereka menjelaskan mengapa itu mungkin tidak adil dan siapa yang harus bertanggung jawab?"
  },
  "mt_ZpCcTU8j_o": {
    name: "AI dan Lingkungan",
    description: "AI membutuhkan energi dan air yang sangat besar untuk pelatihan; pusat data dan biaya lingkungannya; tetapi AI juga bisa membantu — memprediksi cuaca, memantau deforestasi, mengoptimalkan energi; kompromi",
    evidence: [
      "Menjelaskan bahwa melatih model AI menggunakan banyak listrik dan air",
      "Memberikan setidaknya dua contoh AI yang digunakan untuk membantu lingkungan",
      "Mendeskripsikan kompromi antara biaya lingkungan AI dan manfaat lingkungannya"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan bahwa AI membutuhkan banyak energi untuk bekerja tetapi juga bisa digunakan untuk membantu melindungi lingkungan, dan mendiskusikan apakah kompromi itu sepadan?"
  },
  "mt__AWSThGJ0d": {
    name: "AI dan Masa Depan Pekerjaan",
    description: "Bagaimana AI mengubah dunia kerja: beberapa pekerjaan menghilang, yang baru diciptakan, banyak yang berubah; pekerjaan yang AI tidak bisa lakukan (belum); keterampilan apa yang penting di dunia AI",
    evidence: [
      "Menyebutkan setidaknya dua pekerjaan yang AI ubah atau gantikan dan dua pekerjaan baru yang AI ciptakan",
      "Menjelaskan mengapa kreativitas, empati, dan pemecahan masalah adalah keterampilan yang lebih penting di dunia AI",
      "Mendeskripsikan bagaimana AI mungkin mengubah pekerjaan spesifik yang mereka kenal (guru, dokter, petani) tanpa menggantikannya"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan bagaimana AI mungkin mengubah cara orang bekerja di masa depan dan keterampilan manusia apa yang masih akan penting?"
  },
  "mt_HopZomN12L": {
    name: "Pengumpulan Data AI dan Privasi",
    description: "Data apa yang dikumpulkan sistem AI tentang Anda; siapa yang memilikinya dan mengapa ini penting; cookie, pelacakan, speaker pintar selalu mendengarkan; data Anda berharga",
    evidence: [
      "Menyebutkan setidaknya tiga jenis data pribadi yang dikumpulkan sistem AI",
      "Menjelaskan mengapa data pribadi berharga bagi perusahaan",
      "Mendeskripsikan satu langkah yang bisa mereka ambil untuk melindungi privasi mereka secara online"
    ],
    assessmentPrompt: "Apakah {{name}} memahami bahwa aplikasi dan situs web mengumpulkan informasi tentang apa yang mereka lakukan secara online, dan bisakah mereka menjelaskan mengapa itu penting?"
  },
  "mt__BbOjiY5A5": {
    name: "Bias dalam Sistem AI",
    description: "Jika data pelatihan berbiasa, AI akan berbiasa; contoh: pengenalan wajah bekerja lebih baik untuk beberapa warna kulit, terjemahan mengasumsikan gender; dari mana bias berasal dan apakah kita bisa memperbaikinya",
    evidence: [
      "Menjelaskan apa arti bias dalam AI menggunakan contoh dunia nyata",
      "Mendeskripsikan bagaimana data pelatihan yang berbiasa menghasilkan hasil AI yang berbiasa",
      "Menyarankan satu cara untuk mengurangi bias dalam sistem AI (gunakan data yang lebih beragam, uji dengan kelompok berbeda)"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa AI yang dilatih terutama pada foto wajah berwarna kulit terang mungkin tidak bekerja sebaik untuk orang dengan kulit lebih gelap?"
  },
  "mt_tzMr83pS8v": {
    name: "Deepfake dan Konten yang Dihasilkan AI",
    description: "Deepfake, gambar dan teks yang dihasilkan AI; cara mendeteksinya dan mengapa ini penting; pentingnya memeriksa sumber; tidak semua yang online itu nyata",
    evidence: [
      "Menjelaskan apa itu deepfake dan memberikan contoh konten yang dihasilkan AI",
      "Mendeskripsikan setidaknya dua petunjuk yang mungkin mengungkapkan bahwa gambar atau teks dihasilkan oleh AI",
      "Menjelaskan mengapa penting bahwa AI bisa membuat konten palsu yang realistis"
    ],
    assessmentPrompt: "Jika {{name}} melihat foto yang menakjubkan secara online, apakah mereka akan mempertanyakan apakah foto itu mungkin dibuat oleh AI daripada diambil oleh kamera?"
  },
  "mt_1z-gJBJFlM": {
    name: "Merancang Aturan AI yang Adil",
    description: "Pemikiran desain yang diterapkan pada etika AI: jika Anda merancang sistem AI, aturan apa yang akan Anda berikan? Siapa yang harus dibantu? Apa yang tidak boleh dilakukan?",
    evidence: [
      "Mengusulkan setidaknya tiga aturan untuk sistem AI hipotetis yang mereka rancang",
      "Menjelaskan mengapa perancang AI perlu memikirkan siapa yang mungkin dirugikan, bukan hanya siapa yang diuntungkan",
      "Mendeskripsikan satu contoh nyata AI yang digunakan secara bertanggung jawab dan satu yang tidak"
    ],
    assessmentPrompt: "Jika {{name}} merancang asisten AI untuk sekolah mereka, bisakah mereka memikirkan aturan untuk memastikan adil dan membantu semua orang?"
  },
  "mt__LiAEHt9nk": {
    name: "Masa Depan AI",
    description: "Apa yang mungkin dilakukan AI dalam 10 tahun; apa yang kita inginkan dan apa yang kita khawatirkan; anak-anak sebagai perancang dan pembuat keputusan masa depan tentang AI; kerangka harapan dan pemberdayaan",
    evidence: [
      "Mendeskripsikan setidaknya dua cara AI mungkin digunakan di masa depan yang belum ada",
      "Menjelaskan satu hal yang mereka inginkan AI lakukan dan satu hal yang tidak mereka inginkan",
      "Mendeskripsikan mengapa penting anak muda memahami AI — karena mereka akan membentuk cara AI digunakan"
    ],
    assessmentPrompt: "Bisakah {{name}} melakukan percakapan yang bijaksana tentang apa yang mereka inginkan AI lakukan di masa depan dan apa yang mereka khawatirkan?"
  },
  // ==================== ENGLISH ====================
  "mt_scBgiMKhG_": {
    name: "Membaca untuk Memahami",
    description: "Memahami bahwa membaca tentang membuat makna, bukan hanya mengatakan kata dengan benar — teks yang bisa dibaca tetapi tidak dipahami belum dibaca",
    evidence: [
      "Tinjauan Sederhana tentang Membaca (Gough & Tunmer)",
      "penelitian pemahaman membaca tentang pemisahan pemahaman-dekode"
    ],
    assessmentPrompt: "Jika {{name}} membaca sesuatu dengan lantang dengan benar tetapi kemudian tidak bisa memberitahu Anda apa isinya, apakah mereka mengenali bahwa membaca berarti memahami — bukan hanya mengucapkan kata-kata?"
  },
  "mt_GugVunb2lI": {
    name: "Memantau Pemahaman",
    description: "Memperhatikan perbedaan antara membaca kata dan benar-benar memahaminya — mengenali kapan Anda telah membaca kata-kata tetapi belum memahami maknanya, dan melakukan sesuatu tentang hal itu",
    evidence: [
      "penelitian pemantauan pemahaman",
      "Pemantauan Metakognitif dalam Pemahaman Membaca (MDPI 2024)"
    ],
    assessmentPrompt: "Setelah {{name}} membaca paragraf atau mendengarkan penjelasan, apakah mereka memperhatikan kapan mereka belum benar-benar memahaminya — daripada hanya melanjutkan seolah-olah mereka sudah mengerti?"
  },
  "mt_QB4qIGJIIj": {
    name: "Pilihan Kata Pengarang",
    description: "Mengenali bagaimana pilihan sadar pengarang — dari kata-kata, struktur, nada, dan perspektif — menciptakan efek tertentu pada Anda sebagai pembaca",
    evidence: [
      "penelitian kesadaran pengarang",
      "Memahami Tujuan Pengarang (Firkins)",
      "interpretasi teks kolaboratif multilapis pada anak usia 5-8 tahun"
    ],
    assessmentPrompt: "Ketika {{name}} membaca buku atau artikel, apakah mereka memperhatikan dan mengomentari mengapa pengarang memilih untuk menulisnya dengan cara tertentu — dan efek apa yang dimiliki pada mereka sebagai pembaca?"
  },
  "mt_lp3qyEujIv": {
    name: "Inferensi vs Makna Eksplisit",
    description: "Membedakan antara apa yang secara eksplisit dikatakan teks dan apa yang Anda simpulkan, asumsikan, atau baca — mengetahui mana yang mana adalah fondasi pemahaman yang jujur",
    evidence: [
      "penelitian pengembangan inferensi vs pemahaman literal",
      "pembuatan inferensi online dan pemantauan pemahaman (PMC 2021)"
    ],
    assessmentPrompt: "Setelah {{name}} membaca cerita atau artikel, bisakah mereka memberitahu Anda bagian mana yang benar-benar mereka baca dalam teks dan bagian mana yang mereka kerjakan atau asumsikan sendiri?"
  },
  "mt_LH714Riydn": {
    name: "Mengetahui Apa yang Belum Anda Ketahui",
    description: "Memantau celah kosakata Anda sendiri — memperhatikan kata-kata yang Anda setengah ketahui, membedakan pengetahuan yakin dari yang tidak pasti, dan mengembangkan strategi untuk menyelesaikan ketidakpastian",
    evidence: [
      "Penelitian Penilaian Perhatian Kata Asing (kelas 2+)",
      "penelitian kesadaran kosakata dan metakognisi kosakata",
      "Membangun Pengetahuan Kata e-Book (PMC 2019)"
    ],
    assessmentPrompt: "Ketika {{name}} menemukan kata yang setengah mereka ketahui — di mana mereka bisa menebak maknanya tetapi tidak yakin — apakah mereka memperhatikan celah itu dan melakukan sesuatu tentang hal itu, seperti mencari tahu atau bertanya?"
  },
  "mt_U_8iVFZuHH": {
    name: "Meninjau Tulisan Sendiri",
    description: "Menilai apakah tulisan Anda sendiri mencapai efek yang Anda inginkan pada pembaca — melampaui memeriksa kebenaran untuk bertanya apakah itu benar-benar berhasil",
    evidence: [
      "penelitian penilaian diri menulis kelas 3-5",
      "kesadaran metakognitif tentang menulis (Frontiers 2025)"
    ],
    assessmentPrompt: "Setelah {{name}} menulis sesuatu — cerita, surat, tulisan persuasif — apakah mereka berpikir tentang apakah itu akan memiliki efek yang mereka inginkan pada pembaca, bukan hanya apakah ejaannya benar?"
  },
  "mt_haNr13NIuN": {
    name: "Merefleksikan Penggunaan Bahasa Anda",
    description: "Merefleksikan diri Anda sebagai pengguna bahasa — bagaimana membaca, menulis, dan berbicara Anda berubah melintasi audiens, tujuan, dan konteks, dan di mana Anda ingin berkembang lebih jauh",
    evidence: [
      "pengembangan kesadaran metalinguistik",
      "penelitian kesadaran register dan audiens"
    ],
    assessmentPrompt: "Apakah {{name}} memperhatikan bagaimana mereka berkomunikasi berbeda dalam situasi berbeda — menulis untuk sekolah versus mengirim pesan ke teman, atau berbicara dalam debat versus mengobrol di rumah — dan bisakah mereka menjelaskan mengapa perbedaan itu penting?"
  },
  "mt_N8CpN1EJrP": {
    name: "Membangun Kalimat",
    description: "Memahami bahwa kata-kata digabungkan menjadi kalimat — kalimat menyatakan pemikiran lengkap; menghasilkan dan memperluas kalimat lengkap dalam bicara dan tulisan",
    evidence: [
      "Membedakan antara kalimat lengkap dan fragmen",
      "Menyusun kalimat lengkap dengan subjek dan kata kerja",
      "Memperluas kalimat sederhana dengan menambahkan detail"
    ],
    assessmentPrompt: "Jika {{name}} mengatakan sesuatu seperti \"Anjing itu\", bisakah mereka memberitahu bahwa itu bukan kalimat lengkap — dan menambahkan kata-kata untuk membuatnya menjadi \"Anjing itu berlari cepat\"?"
  },
  "mt_of2GggtxFl": {
    name: "Spasi Antara Kata",
    description: "Memisahkan kata dengan spasi dalam tulisan; memahami bahwa spasi menandai batas kata dalam cetak",
    evidence: [
      "Meninggalkan spasi jari yang jelas antara kata-kata saat menulis",
      "Menghitung jumlah kata dalam kalimat tulisan dengan mengidentifikasi spasi",
      "Memperbaiki tulisan yang memiliki spasi yang hilang antara kata-kata"
    ],
    assessmentPrompt: "Jika {{name}} menulis pesan singkat, bisakah mereka meninggalkan spasi di antara setiap kata — sehingga pembaca bisa tahu di mana satu kata berakhir dan kata berikutnya dimulai?"
  },
  "mt_yBJyCfhtem": {
    name: "Kata Benda & Kata Kerja Dasar",
    description: "Menggunakan kata benda yang sering muncul (orang, tempat, benda) dan kata kerja (kata aksi) dengan tepat dalam bicara dan tulisan",
    evidence: [
      "Menggunakan kata benda umum dengan tepat dalam kalimat (misal 'anjing', 'sekolah', 'buku')",
      "Menggunakan kata kerja aksi dengan tepat (misal 'berlari', 'makan', 'bermain')",
      "Mengidentifikasi kata benda dan kata kerja dalam kalimat sederhana saat diminta"
    ],
    assessmentPrompt: "Ketika {{name}} berbicara atau menulis tentang hal-hal sehari-hari — seperti \"anjing berlari\" atau \"Ibu memasak makan malam\" — apakah mereka menggunakan jenis kata yang tepat untuk benda (kata benda) dan aksi (kata kerja) tanpa mencampuradukkannya?"
  },
  "mt_uM6q_KBWKy": {
    name: "Huruf Kapital untuk Nama, Hari dan Saya",
    description: "Menggunakan huruf kapital untuk kata benda proper (nama orang, tempat), hari dalam seminggu, dan kata ganti pribadi 'Saya'",
    evidence: [
      "Mengkapitalisasi nama orang dan tempat secara konsisten dalam tulisan",
      "Menulis kata ganti 'Saya' dengan huruf kapital",
      "Mengkapitalisasi hari dalam seminggu (misal 'Senin')"
    ],
    assessmentPrompt: "Jika {{name}} menulis nama teman mereka atau nama kota, apakah mereka secara otomatis memulainya dengan huruf kapital — dan apakah mereka menulis kata 'Saya' dengan huruf kapital saat berbicara tentang diri mereka sendiri?"
  },
  "mt_TfOiog-ALs": {
    name: "Istilah Tata Bahasa: Kata, Kata Benda, Kata Kerja",
    description: "Menggunakan terminologi tata bahasa dasar saat mendiskusikan membaca dan menulis: kata, kata benda, kata kerja, kata sifat, kata keterangan, kata sandang, kata sendi nama",
    evidence: [
      "Menyebutkan tanda baca dengan benar saat ditunjukkan dalam teks",
      "Menggunakan istilah seperti 'huruf kapital' dan 'titik' saat mengedit tulisan",
      "Menjelaskan apa itu 'kalimat' menggunakan istilah yang benar"
    ],
    assessmentPrompt: "Jika Anda menunjuk ke titik atau tanda tanya dalam buku, bisakah {{name}} memberitahu Anda apa namanya dan apa fungsinya — dan apakah mereka tahu perbedaan antara kata dan kalimat?"
  },
  "mt_YXVQaufkKO": {
    name: "Menggabungkan Kata dengan 'Dan'",
    description: "Menggabungkan kata dan klausa menggunakan konjungsi 'dan' untuk membuat kalimat lebih panjang",
    evidence: [
      "Menggabungkan dua kalimat sederhana menggunakan 'dan' (misal 'Aku suka kucing dan anjing')",
      "Menggabungkan dua klausa terkait dengan 'dan' (misal 'Kami pergi ke taman dan kami bermain')",
      "Menggunakan 'dan' dalam daftar item dalam kalimat"
    ],
    assessmentPrompt: "Ketika {{name}} menceritakan hari mereka, bisakah mereka menulis dua ide yang digabungkan dengan kata 'dan' — seperti \"Aku makan siang dan kemudian kami bermain di luar\"?"
  },
  "mt_VY3rBq8RyP": {
    name: "Kata Sendi Nama",
    description: "Memahami dan menggunakan kata sendi nama yang paling sering muncul untuk lokasi dan arah (misal ke, dari, di, keluar, di atas, mati, untuk, oleh, dengan)",
    evidence: [
      "Menggunakan kata sendi nama dengan benar dalam kalimat (misal 'di atas meja', 'di bawah tempat tidur')",
      "Mengikuti instruksi yang melibatkan kata sendi nama (misal 'Letakkan buku di rak')",
      "Mendeskripsikan posisi menggunakan frasa kata sendi nama"
    ],
    assessmentPrompt: "Jika Anda meminta {{name}} mendeskripsikan di mana sesuatu berada — seperti di mana cangkir berada di meja — bisakah mereka menggunakan kata-kata kecil seperti \"di atas\", \"di bawah\", \"di sebelah\", atau \"di dekat\" dengan benar?"
  },
  "mt_6lHBTwQPrS": {
    name: "Kata Tanya",
    description: "Memahami dan menggunakan kata tanya (siapa, apa, di mana, kapan, mengapa, bagaimana) untuk membentuk dan menjawab pertanyaan",
    evidence: [
      "Mengajukan pertanyaan menggunakan kata tanya yang tepat",
      "Menjawab pertanyaan siapa, apa, di mana, kapan tentang topik yang familiar",
      "Mengenali bahwa kata tanya menandai pertanyaan sedang diajukan"
    ],
    assessmentPrompt: "Jika {{name}} ingin mengetahui sesuatu — seperti di mana Anda meletakkan sepatu mereka atau mengapa langit biru — bisakah mereka memulai pertanyaan mereka dengan kata yang tepat, seperti \"di mana\" atau \"mengapa\"?"
  },
  "mt_18qkgxr_-T": {
    name: "Kata Benda Jamak Regular",
    description: "Membentuk dan menggunakan kata benda jamak regular secara lisan dan tulisan dengan menambahkan -s atau -s; memahami bahwa jamak berarti lebih dari satu",
    evidence: [
      "Menulis dan mengatakan bentuk jamak yang benar (misal 'satu kucing, dua kucing'; 'satu keinginan, dua keinginan')",
      "Memilih -s atau -es dengan benar berdasarkan akhiran suara",
      "Menjelaskan bahwa kata benda jamak menamai lebih dari satu"
    ],
    assessmentPrompt: "Jika Anda menunjuk ke gambar satu kucing dan kemudian beberapa kucing, bisakah {{name}} memberitahu kata yang benar untuk lebih dari satu — dan menulisnya dengan akhiran yang tepat, seperti \"kucing\" atau \"kotak\"?"
  },
  "mt_QEr24lqzvH": {
    name: "Memulai dan Mengakhiri Kalimat",
    description: "Memulai kalimat dengan huruf kapital dan mengakhirinya dengan tanda yang tepat (titik, tanda tanya, atau tanda seru); mengenali dan menamai tanda baca akhir",
    evidence: [
      "Menulis kalimat yang dimulai dengan huruf kapital",
      "Memilih dan menggunakan tanda baca akhir yang tepat untuk pernyataan, pertanyaan, dan seruan",
      "Mengidentifikasi dan menamai titik, tanda tanya, dan tanda seru saat membaca"
    ],
    assessmentPrompt: "Ketika {{name}} menulis kalimat seperti \"kucing duduk di atas karpet\", apakah mereka ingat untuk menggunakan huruf kapital di awal dan titik di akhir — tanpa perlu pengingat?"
  },
  "mt_mKAZTqItRG": {
    name: "Tanda Petik: Kontraksi dan Kepemilikan",
    description: "Menggunakan tanda petik dalam tulisan untuk kontraksi (menandai huruf yang dihilangkan) dan kepemilikan tunggal, membedakan dua penggunaan",
    evidence: [
      "Menggunakan tanda petik dengan benar dalam 'jangan' dan 'tas Sam' dalam potongan tulisan yang sama",
      "Menjelaskan perbedaan antara tanda petik untuk kontraksi dan tanda petik untuk kepemilikan",
      "Memperbaiki tanda petik yang salah tempat atau hilang dalam serangkaian kalimat"
    ],
    assessmentPrompt: "Ketika {{name}} menulis kata seperti \"jangan\" atau \"itu\", apakah mereka meletakkan tanda petik di tempat yang tepat — dan bisakah mereka juga menulis sesuatu seperti \"mangkuk anjing\" untuk menunjukkan mangkuk itu milik anjing?"
  },
  "mt_ntqNLHsj5n": {
    name: "Koma dalam Daftar",
    description: "Menggunakan koma untuk memisahkan item dalam daftar dalam kalimat (misal, 'Aku membeli apel, pisang, dan jeruk')",
    evidence: [
      "Menulis kalimat yang berisi daftar 3+ item yang dipisahkan koma: 'Aku membeli apel, pisang, dan jeruk'",
      "Mengidentifikasi di mana koma harus ditempatkan dalam kalimat daftar tanpa tanda baca",
      "Menjelaskan bahwa koma memisahkan item dalam daftar sehingga pembaca tahu setiap item"
    ],
    assessmentPrompt: "Jika {{name}} menulis kalimat yang mencantumkan tiga atau lebih hal — seperti barang yang akan mereka bawa untuk piknik — apakah mereka meletakkan koma di antara setiap item dalam daftar?"
  },
  "mt_RioBUxHz1X": {
    name: "Determiner dan Artikel",
    description: "Menggunakan determiner (artikel a/an/the dan demonstratif ini/itu/ini/itu) dengan benar sebelum kata benda",
    evidence: [
      "Menggunakan 'a' sebelum bunyi konsonan dan 'an' sebelum bunyi vokal dengan benar: 'bola', 'apel'",
      "Membedakan 'ini/ini' (dekat) dari 'itu/itu' (jauh) saat menunjuk ke benda",
      "Memilih artikel yang tepat (a/an/the) untuk melengkapi kalimat"
    ],
    assessmentPrompt: "Ketika {{name}} menulis tentang sesuatu yang dekat versus sesuatu yang jauh, apakah mereka menggunakan kata yang tepat, mengatakan \"buku ini\" untuk buku di tangan mereka dan \"buku itu\" untuk buku di seberang ruangan?"
  },
  "mt_cU3LcEVkBQ": {
    name: "Frasa Kata Benda yang Diperluas",
    description: "Menggunakan frasa kata benda yang diperluas untuk mendeskripsikan dan menentukan, menambahkan kata sifat dan pengubah lain sebelum kata benda (misal, 'kupu-kupu biru itu', 'pintu tua itu berderit')",
    evidence: [
      "Memperluas 'kucing itu' menjadi 'kucing hitam yang lembut' dengan menambahkan kata sifat",
      "Menggunakan frasa kata benda dengan dua atau lebih pengubah dalam tulisan mandiri",
      "Memilih kata sifat yang tepat untuk membuat frasa kata benda lebih hidup: misal, 'anak kucing kecil yang gemetar'"
    ],
    assessmentPrompt: "Ketika {{name}} mendeskripsikan sesuatu dalam tulisan — seperti hewan peliharaan atau mainan — apakah mereka menambahkan kata-kata deskripsi tambahan, seperti \"kelinci kecil yang lembut\" bukan hanya \"kelinci\"?"
  },
  "mt_u1-UfD0rTH": {
    name: "Empat Jenis Kalimat",
    description: "Memahami dan menggunakan empat jenis kalimat — pernyataan, pertanyaan, seruan, dan perintah — mengenali bagaimana pola tata bahasa menunjukkan fungsi kalimat",
    evidence: [
      "Menulis atau mengidentifikasi pernyataan, pertanyaan, seruan, dan perintah dari serangkaian kalimat",
      "Mencocokkan setiap jenis kalimat dengan tanda baca akhir yang benar",
      "Mengubah pernyataan menjadi pertanyaan atau perintah atas permintaan"
    ],
    assessmentPrompt: "Bisakah {{name}} membedakan antara pertanyaan (\"Apakah kamu lapar?\") dan perintah (\"Makan makan malammu!\") — dan menulis setiap jenis kalimat menggunakan tanda baca yang tepat di akhir?"
  },
  "mt_qzwQAOfurw": {
    name: "Istilah Tata Bahasa: Kata Benda, Kata Kerja dan Tense",
    description: "Menggunakan dan memahami terminologi tata bahasa Year 2 dalam diskusi: kata benda, frasa kata benda, pernyataan, pertanyaan, seruan, perintah, gabungan, akhiran, kata sifat, kata keterangan, kata kerja, tense (lampau/sekarang), tanda petik, koma",
    evidence: [
      "Menggunakan istilah 'frasa kata benda' saat mendiskusikan frasa kata benda yang diperluas dalam tulisan sendiri",
      "Mengidentifikasi kata sifat, kata keterangan, dan kata kerja dalam kalimat menggunakan terminologi yang benar",
      "Menjelaskan apa arti 'tense' dan memberikan contoh tense lampau dan sekarang"
    ],
    assessmentPrompt: "Jika Anda meminta {{name}} menunjuk kata benda, kata kerja, atau kata sifat dalam kalimat dari buku bacaan mereka, bisakah mereka menemukan satu dan menjelaskan apa fungsinya dalam kalimat?"
  },
  "mt_enj1sMcfOT": {
    name: "Tense Lampau, Sekarang dan Progresif",
    description: "Menggunakan kata kerja untuk menyampaikan tense lampau dan sekarang dengan benar dan konsisten, termasuk bentuk progresif (misal, dia sedang menabuh, dia sedang berteriak), memahami bagaimana tense menunjukkan waktu",
    evidence: [
      "Menulis potongan secara konsisten dalam tense lampau tanpa beralih ke sekarang",
      "Menggunakan bentuk progresif dengan benar: 'sedang berlari', 'sedang melompat' untuk menunjukkan aksi yang berlangsung",
      "Mengidentifikasi kata kerja dalam kalimat dan mengubahnya dari tense lampau ke sekanang atau sebaliknya"
    ],
    assessmentPrompt: "Jika {{name}} menulis tentang sesuatu yang terjadi kemarin versus sesuatu yang terjadi sekarang, apakah mereka mengubah kata kerja — misalnya, menulis \"dia melompat\" untuk lampau dan \"dia sedang melompat\" untuk sekarang?"
  },
  "mt_sZXPK1FnRB": {
    name: "Kata Ganti",
    description: "Menggunakan kata ganti pribadi, kepemilikan, dan tak tentu dengan benar (misal, aku/ku, mereka/mereka, siapa pun/apa pun), mengganti kata benda untuk menghindari pengulangan",
    evidence: [
      "Mengganti kata benda yang diulang dengan kata ganti: 'Anjing itu senang. Dia mengibarkan ekornya.'",
      "Menggunakan aku/ku dengan benar dalam posisi subjek dan objek dalam kalimat",
      "Memilih kata ganti kepemilikan yang tepat (ku/dia/dia/mereka) untuk mencocokkan kata benda yang digantinya"
    ],
    assessmentPrompt: "Ketika {{name}} menceritakan kembali cerita atau mendeskripsikan apa yang dilakukan teman, apakah mereka menggunakan kata-kata seperti \"dia\", \"dia\", \"mereka\", atau \"miliknya\" dengan benar — daripada mengulang nama orang itu setiap saat?"
  },
  "mt_u7Jxjjatkh": {
    name: "Kesepakatan Subjek-Kata Kerja",
    description: "Menggunakan kata benda tunggal dan jamak dengan kata kerja yang cocok dalam kalimat, mempertahankan kesepakatan subjek-kata kerja (misal, 'Dia melompat' vs 'Kita melompat')",
    evidence: [
      "Menulis 'Anjing berlari' (tunggal) dan 'Anjing-anjing berlari' (jamak) dengan kesepakatan kata kerja yang benar",
      "Memperbaiki kesalahan kesepakatan subjek-kata kerja dalam kalimat: memperbaiki 'Anak-anak bermain' menjadi 'Anak-anjing bermain'",
      "Memilih bentuk kata kerja yang tepat untuk mencocokkan subjek tunggal atau jamak dalam latihan isian"
    ],
    assessmentPrompt: "Jika {{name}} menulis \"dia melompat\" atau \"kita melompat\", apakah mereka menangkap kesalahan itu — dan bisakah mereka memperbaikinya menjadi \"dia melompat\" dan \"kita melompat\" sehingga subjek dan kata kerja cocok?"
  },
  "mt_wq-1OJ_8s5": {
    name: "Klausa Subordinat",
    description: "Menggunakan subordinasi (ketika, jika, bahwa, karena) dan koordinasi (atau, dan, tetapi) untuk menggabungkan klausa dan membuat kalimat majemuk dan kompleks",
    evidence: [
      "Menulis 'Aku tinggal di dalam karena hujan' menggunakan konjungsi subordinat",
      "Menggunakan 'tetapi' dan 'atau' untuk menggabungkan ide: 'Aku ingin bermain tetapi hujan'",
      "Menggunakan klausa 'ketika' dan 'jika' dalam tulisan: 'Jika berhenti hujan, kita bisa keluar'"
    ],
    assessmentPrompt: "Ketika {{name}} menulis cerita atau pesan, bisakah mereka menggabungkan dua ide dengan kata-kata seperti \"karena\", \"tetapi\", \"ketika\", atau \"jika\" — daripada menulis setiap pemikiran sebagai kalimat pendek terpisah?"
  },
  // ==================== HISTORY ====================
  "mt_14F_x1Xwwp": {
    name: "Perang Persia",
    description: "Perang Persia mempersatukan Athena dan Sparta — perlu mengetahui kedua kota-kota ini",
    evidence: [
      "Menjelaskan bagaimana ancaman Persia memaksa Athena dan Sparta bekerja sama",
      "Mendeskripsikan peran kedua kota-kota ini dalam Perang Persia",
      "Menjelaskan mengapa perang ini penting bagi sejarah Yunani kuno"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan bagaimana ancaman dari Kekaisaran Persia membuat Athena dan Sparta bekerja sama?"
  },
  "mt_26OJ9MetR9": {
    name: "Kehidupan Desa Anglo-Saxon",
    description: "Konsep kehidupan desa memberikan konteks untuk pemukiman Anglo-Saxon",
    evidence: [
      "Mendeskripsikan bagaimana kehidupan di desa Anglo-Saxon",
      "Menjelaskan pekerjaan dan aktivitas sehari-hari",
      "Membandingkan kehidupan desa kuno dengan kehidupan desa modern"
    ],
    assessmentPrompt: "Bisakah {{name}} mendeskripsikan bagaimana kehidupan di desa Anglo-Saxon?"
  },
  "mt_2DBPJ38iWl": {
    name: "Raja dan Ratu",
    description: "Ksatria melayani raja — memahami raja membantu memahami kekuasaan kerajaan",
    evidence: [
      "Menjelaskan peran raja dan ratu dalam masyarakat Anglo-Saxon",
      "Menyebutkan raja dan ratu Anglo-Saxon yang penting",
      "Menjelaskan bagaimana kekuasaan kerajaan mempengaruhi kehidupan sehari-hari"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan peran raja dan ratu dalam masyarakat Anglo-Saxon?"
  },
  "mt_M_xcaRcvSo": {
    name: "Ksatria",
    description: "Ksatria melayani raja — memahami ksatria membantu memahami kekuasaan kerajaan",
    evidence: [
      "Mendeskripsikan siapa ksatria dan apa yang mereka lakukan",
      "Menjelaskan peran ksatria dalam masyarakat abad pertengahan",
      "Membandingkan ksatria dengan pekerjaan modern"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan siapa ksatria dan apa yang mereka lakukan?"
  },
  "mt_oN7fI4d_kU": {
    name: "Kastil",
    description: "Kastil sebagai kediaman kerajaan memberikan konteks untuk memahami raja dan ratu",
    evidence: [
      "Mendeskripsikan bagaimana kastil dibangun dan digunakan",
      "Menjelaskan siapa yang tinggal di kastil dan mengapa",
      "Mengidentifikasi fitur-fitur utama kastil"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan siapa yang tinggal di kastil dan mengapa kastil penting?"
  },
  // ==================== PERSONAL & SOCIAL DEVELOPMENT ====================
  "mt_35-DhMh_Yr": {
    name: "Self-Talk Positif",
    description: "Self-talk positif membutuhkan pengetahuan istilah 'self-talk' dan membedakannya dari pikiran negatif yang mengganggu",
    evidence: [
      "Menggunakan self-talk positif saat menghadapi tantangan",
      "Membedakan self-talk positif dari pikiran negatif",
      "Menjelaskan mengapa self-talk positif membantu"
    ],
    assessmentPrompt: "Ketika {{name}} menghadapi sesuatu yang sulit, apakah mereka menggunakan self-talk positif untuk membantu diri sendiri?"
  },
  "mt_Iwg2diBSyW": {
    name: "Strategi Menenangkan Diri",
    description: "Self-talk positif dibangun di atas strategi menenangkan dasar",
    evidence: [
      "Menggunakan strategi menenangkan saat merasa cemas atau marah",
      "Menjelaskan strategi menenangkan yang berbeda",
      "Mengidentifikasi kapan mereka perlu menggunakan strategi menenangkan"
    ],
    assessmentPrompt: "Bisakah {{name}} menyebutkan beberapa cara untuk menenangkan diri saat mereka merasa cemas atau marah?"
  },
  "mt_MOY_2Cqalz": {
    name: "Kosakata Emosi",
    description: "Self-talk mendapat manfaat dari kosakata emosi yang lebih luas untuk menamai apa yang Anda rasakan",
    evidence: [
      "Menggunakan setidaknya 5 kata emosi yang berbeda untuk menggambarkan perasaan",
      "Membedakan antara emosi yang mirip (marah vs frustrasi, sedih vs kecewa)",
      "Menggunakan kosakata emosi saat berbicara tentang pengalaman"
    ],
    assessmentPrompt: "Bisakah {{name}} menggunakan banyak kata berbeda untuk menggambarkan perasaan mereka, bukan hanya 'senang' atau 'sedih'?"
  },
  "mt_pAuo9Op89t": {
    name: "Pertumbuhan Mindset",
    description: "Self-talk mendapat manfaat dari kerangka pertumbuhan mindset",
    evidence: [
      "Menggunakan bahasa pertumbuhan mindset (\"Aku belum bisa melakukannya\", \"Aku sedang belajar\")",
      "Menjelaskan perbedaan antara mindset tetap dan pertumbuhan",
      "Menerapkan pertumbuhan mindset saat menghadapi tantangan"
    ],
    assessmentPrompt: "Ketika {{name}} menghadapi sesuatu yang sulit, apakah mereka mengatakan \"Aku belum bisa\" daripada \"Aku tidak bisa\"?"
  },
  // ==================== LIFE SKILLS ====================
  "mt_SbEaQnMQoD": {
    name: "Pembeli & Penjual",
    description: "Ketika seseorang membuat atau memiliki sesuatu, mereka bisa menjualnya; ketika seseorang menginginkan sesuatu, mereka bisa membelinya; pengenalan konsep pertukaran dan transaksi",
    evidence: [
      "Menjelaskan apa yang dilakukan pembeli dan apa yang dilakukan penjual",
      "Memerankan transaksi jual beli sederhana dengan teman",
      "Mendeskripsikan waktu ketika mereka atau anggota keluarga membeli sesuatu dari seseorang (stan pasar, jual mobil, kue amal)"
    ],
    assessmentPrompt: "Jika {{name}} membuka stan di pesta sekolah, bisakah mereka menjelaskan siapa pembeli dan penjualnya dan apa yang dilakukan masing-masing?"
  },
  "mt_RgQxPddV8v": {
    name: "Barang & Jasa",
    description: "Beberapa orang membuat barang (barang) dan beberapa orang melakukan sesuatu untuk orang lain (jasa); mengenali keduanya dalam kehidupan sehari-hari dan memahami bahwa keduanya memiliki nilai",
    evidence: [
      "Mengelompokkan serangkaian gambar menjadi barang (benda yang bisa disentuh) dan jasa (hal yang orang lakukan untuk Anda)",
      "Memberikan tiga contoh barang dan tiga contoh jasa dari kehidupan sehari-hari mereka",
      "Menjelaskan bahwa membuat barang dan membantu orang adalah jenis pekerjaan yang berharga"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahu Anda perbedaan antara produk yang Anda beli di toko dan jasa seperti potong rambut, dan memberikan contoh masing-masing?"
  },
  "mt_CrGnpVjnk8": {
    name: "Membuat Sesuatu untuk Dijual",
    description: "Pengalaman membuat produk untuk dijual — kerajinan, gambar, kue; apa yang membuat sesuatu layak dibeli; bangga membuat sesuatu yang diinginkan orang lain",
    evidence: [
      "Membuat produk sederhana (kerajinan, gambar, kue) yang bisa dijual",
      "Menjelaskan apa yang membuat produk mereka cukup baik sehingga orang ingin membelinya",
      "Menyarankan harga yang adil untuk produk mereka dan memberikan alasan"
    ],
    assessmentPrompt: "Jika {{name}} membuat sesuatu di rumah — seperti gelang persahabatan atau kue yang didekorasi — bisakah mereka menjelaskan mengapa seseorang mungkin ingin membelinya?"
  },
  "mt_vpMDMbx4pc": {
    name: "Siapa Pelanggan?",
    description: "Memahami bahwa pelanggan adalah seseorang yang membeli apa yang Anda buat atau lakukan; memikirkan apa yang diinginkan dan dibutuhkan pelanggan; gagasan bahwa bisnis melayani orang",
    evidence: [
      "Mendefinisikan apa itu pelanggan dengan kata-kata mereka sendiri",
      "Menyarankan apa yang mungkin dicari pelanggan saat memutuskan apakah akan membeli sesuatu (kualitas, harga, terlihat bagus)",
      "Menjelaskan mengapa penting untuk memikirkan apa yang diinginkan pelanggan, bukan hanya apa yang ingin Anda buat"
    ],
    assessmentPrompt: "Jika {{name}} berencana menjual lemonade di acara sekolah, bisakah mereka memikirkan apa yang akan membuat orang ingin membeli lemonade mereka daripada lemonade orang lain?"
  },
  "mt_cq711F7ruL": {
    name: "Menjual dengan Baik",
    description: "Layanan pelanggan, keadilan, dan kejujuran dalam bisnis; memenuhi janji kepada pelanggan; mengapa menjadi dapat dipercaya penting untuk bisnis berulang dan reputasi",
    evidence: [
      "Menjelaskan mengapa jujur tentang apa yang Anda jual itu penting",
      "Mendeskripsikan seperti apa layanan pelanggan yang baik (ramah, membantu, menepati janji)",
      "Memberikan contoh bagaimana bersikap tidak adil atau tidak jujur bisa menyakiti bisnis"
    ],
    assessmentPrompt: "Jika {{name}} menjual sesuatu kepada teman dan itu rusak keesokan harinya, apakah mereka memahami mengapa penting untuk memperbaikinya daripada mengabaikannya?"
  },
  "mt_9gpUHWVKMR": {
    name: "Biaya & Pendapatan",
    description: "Biaya uang untuk membuat sesuatu (biaya/pengeluaran); Anda menghasilkan uang dengan menjualnya (pendapatan); jika pendapatan lebih dari biaya, itu keuntungan; jika biaya lebih, itu kerugian",
    evidence: [
      "Menjelaskan apa itu biaya, pendapatan, dan keuntungan menggunakan contoh sederhana",
      "Menghitung keuntungan dari skenario yang diberikan (misal, menghabiskan £3 untuk bahan, menjual kue untuk £8, keuntungan = £5)",
      "Menjelaskan apa yang terjadi jika biaya lebih tinggi dari pendapatan (Anda mengalami kerugian)"
    ],
    assessmentPrompt: "Jika {{name}} menghabiskan £4 untuk perlengkapan stan lemonade dan menghasilkan £10 dari penjualan lemonade, bisakah mereka memberitahu berapa keuntungan yang mereka buat?"
  },
  "mt_RTwmvr9R7V": {
    name: "Ide Bisnis",
    description: "Dari mana ide bisnis berasal; menemukan masalah sehari-hari dan memikirkan solusi; perbedaan antara menemukan sesuatu yang baru dan meningkatkan sesuatu yang sudah ada",
    evidence: [
      "Mengidentifikasi masalah sehari-hari sederhana dan menyarankan produk atau jasa yang bisa menyelesaikannya",
      "Menjelaskan perbedaan antara penemuan (sesuatu yang baru) dan inovasi (membuat sesuatu lebih baik)",
      "Mendeskripsikan dari mana pengusaha nyata mendapatkan ide bisnis mereka"
    ],
    assessmentPrompt: "Jika Anda meminta {{name}} memikirkan masalah di sekolah atau rumah yang bisa mereka selesaikan dengan membuat atau menjual sesuatu, bisakah mereka muncul dengan ide?"
  },
  "mt_dknMcCqvoY": {
    name: "Belajar dari Kegagalan",
    description: "Tidak semua ide bisnis berhasil; pengusaha mencoba, gagal, belajar, dan mencoba lagi; iterasi dan ketahanan sebagai keterampilan kewirausahaan inti; kisah kegagalan-keberhasilan yang terkenal",
    evidence: [
      "Memberikan contoh pengusaha terkenal yang gagal sebelum berhasil",
      "Menjelaskan apa yang akan mereka lakukan berbeda jika ide bisnis tidak berhasil pertama kali",
      "Mendeskripsikan mengapa gagal dan mencoba lagi lebih baik daripada menyerah"
    ],
    assessmentPrompt: "Jika usaha pertama {{name}} tidak berhasil, apakah mereka akan melihatnya sebagai kesempatan untuk berkembang daripada alasan untuk menyerah?"
  },
  "mt_phpn6KhCAv": {
    name: "Membuat Rencana Sederhana",
    description: "Sebelum memulai bisnis, membuat rencana sederhana: apa yang akan saya buat atau lakukan, siapa yang akan membelinya, apa yang saya butuhkan, berapa biayanya, dan berapa harga yang akan saya tetapkan?",
    evidence: [
      "Menulis atau menggambar rencana bisnis sederhana yang mencakup: produk, pelanggan, bahan yang dibutuhkan, dan harga",
      "Mengidentifikasi setidaknya tiga hal yang mereka butuhkan sebelum bisa mulai menjual",
      "Menjelaskan mengapa merencanakan sebelumnya lebih baik daripada hanya mulai tanpa berpikir"
    ],
    assessmentPrompt: "Jika {{name}} ingin menjalankan bisnis kecil di pesta sekolah, bisakah mereka menulis rencana sederhana yang mencakup apa yang akan mereka jual, apa yang mereka butuhkan, dan berapa yang akan mereka kenakan?"
  },
  "mt_M2Gou3O6qT": {
    name: "Dasar Pemasaran",
    description: "Bagaimana orang mengetahui tentang apa yang Anda jual; tanda, poster, media sosial, mulut ke mulut; persuasif; dasar-dasar periklanan dan promosi",
    evidence: [
      "Mendesain poster atau iklan sederhana untuk produk atau jasa",
      "Menyebutkan setidaknya tiga cara untuk memberi tahu orang tentang sesuatu yang Anda jual",
      "Menjelaskan mengapa nama yang menarik atau desain yang menarik perhatian membantu menjual lebih banyak"
    ],
    assessmentPrompt: "Jika {{name}} ingin mengiklankan cuci mobil atau penjualan kue, bisakah mereka mendesain poster yang akan membuat orang ingin datang?"
  },
  "mt_pOstrrS763": {
    name: "Kerja Tim dalam Bisnis",
    description: "Sebagian besar bisnis membutuhkan lebih dari satu orang; bekerja sama, membagi tugas, dan menggunakan kekuatan orang yang berbeda; nilai kerja tim dalam bisnis",
    evidence: [
      "Mendeskripsikan bagaimana mereka akan membagi tugas dalam proyek bisnis tim (satu orang membuat, satu menjual, satu mendesain)",
      "Menjelaskan mengapa menggunakan kekuatan orang yang berbeda membuat bisnis lebih baik",
      "Memberikan contoh masalah yang bisa terjadi jika tim tidak bekerja dengan baik"
    ],
    assessmentPrompt: "Jika {{name}} bekerja dengan teman-teman untuk menjalankan stan di pesta, bisakah mereka menyarankan bagaimana membagi pekerjaan sehingga semua orang bermain sesuai kekuatan mereka?"
  },
  "mt_b0sXYFblDL": {
    name: "Etika dalam Bisnis",
    description: "Jujur, adil, memperlakukan pekerja dengan baik, tidak merusak lingkungan; apa yang membuat bisnis 'baik'; apakah bisnis harus peduli lebih dari sekadar keuntungan",
    evidence: [
      "Menyebutkan setidaknya dua hal yang membuat bisnis etis (upah adil, iklan jujur, ramah lingkungan)",
      "Menjelaskan mengapa bisnis yang hanya peduli keuntungan mungkin menimbulkan masalah",
      "Mendeskripsikan situasi di mana pemilik bisnis menghadapi pilihan etis dan menyarankan apa yang harus mereka lakukan"
    ],
    assessmentPrompt: "Jika {{name}} mendengar tentang perusahaan yang membayar pekerjanya sangat sedikit untuk membuat keuntungan lebih besar, bisakah mereka menjelaskan mengapa itu tidak adil dan menyarankan pendekatan yang lebih baik?"
  },
  "mt_bAYy0ytbfC": {
    name: "Mempresentasikan Ide",
    description: "Mempresentasikan ide bisnis kepada orang lain dengan meyakinkan; menjelaskan apa yang membuatnya bagus dan mengapa orang harus mendukungnya; membangun kepercayaan diri dalam berbicara di depan umum tentang ide",
    evidence: [
      "Menyampaikan presentasi 1-2 menit untuk ide bisnis yang mencakup: apa itu, siapa yang dibantu, dan mengapa itu bagus",
      "Menjawab setidaknya dua pertanyaan tentang ide mereka dari audiens",
      "Menjelaskan mengapa bisa menjelaskan ide Anda dengan jelas penting untuk mendapatkan dukungan"
    ],
    assessmentPrompt: "Jika {{name}} harus berdiri di depan kelas dan menjelaskan ide bisnis dalam dua menit, bisakah mereka melakukannya dengan percaya diri dan meyakinkan?"
  },
  "mt_rxJ2O_9Lkr": {
    name: "Pengusaha Nyata",
    description: "Kisah pengusaha nyata yang memulai dari muda: Mikaila Ulmer (Me & the Bees), Moziah Bridges (Mo's Bows), Cory Nieves (Mr. Cory's Cookies); apa yang membuat seseorang menjadi pengusaha",
    evidence: [
      "Menceritakan kembali kisah setidaknya satu pengusaha nyata yang memulai dari kecil",
      "Mengidentifikasi tiga kualitas yang membantu pengusaha itu berhasil (kreativitas, ketekunan, semangat)",
      "Menjelaskan apa arti kata 'pengusaha' dengan kata-kata mereka sendiri"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahu Anda tentang seseorang yang memulai bisnis saat masih kecil dan menjelaskan kualitas apa yang membantu mereka berhasil?"
  },
  "mt_7SsduPB2tP": {
    name: "Mengembangkan Skala",
    description: "Apa yang terjadi ketika bisnis kecil tumbuh; membuat lebih banyak produk, mempekerjakan orang, menjangkau lebih banyak pelanggan; tantangan dan peluang dari pengembangan skala",
    evidence: [
      "Mendeskripsikan apa arti 'mengembangkan skala' bagi bisnis",
      "Mengidentifikasi setidaknya dua tantangan dari mengembangkan bisnis (butuh lebih banyak uang, lebih banyak orang, lebih banyak bahan)",
      "Menjelaskan bagaimana stan lemonade bisa berkembang menjadi bisnis yang lebih besar langkah demi langkah"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan apa yang perlu berubah jika bisnis kecil pesta sekolah mereka menjadi sangat populer sehingga banyak orang lebih ingin membeli dari mereka?"
  },
  "mt_QepALf3bin": {
    name: "Sosial Enterprise",
    description: "Menggunakan keterampilan bisnis untuk membantu orang lain atau menyelesaikan masalah sosial dan lingkungan; menghasilkan uang DAN membuat perbedaan; contoh sosial enterprise",
    evidence: [
      "Menjelaskan apa itu sosial enterprise dengan kata-kata mereka sendiri (bisnis yang membantu orang atau planet)",
      "Memberikan contoh sosial enterprise nyata atau toko amal",
      "Menyarankan ide sosial enterprise yang bisa membantu sekolah atau komunitas mereka"
    ],
    assessmentPrompt: "Bisakah {{name}} muncul dengan ide untuk bisnis yang menghasilkan uang DAN membantu orang atau lingkungan?"
  },
  "mt_tqgZH11cP5": {
    name: "Rantai Pasok",
    description: "Dari mana produk berasal sebelum sampai ke pelanggan; bahan mentah, pembuatan, transportasi, dan penjualan; perjalanan produk dari awal hingga akhir",
    evidence: [
      "Melacak perjalanan produk yang familiar (misal, cokelat batangan) dari bahan mentah ke rak toko",
      "Mengidentifikasi setidaknya tiga tahap dalam rantai pasok",
      "Menjelaskan mengapa rantai pasok yang panjang bisa membuat produk lebih mahal"
    ],
    assessmentPrompt: "Jika Anda bertanya kepada {{name}} bagaimana cokelat batangan sampai dari pertanian kakao ke rak toko, bisakah mereka mendeskripsikan langkah-langkah utama dalam perjalanannya?"
  },
  "mt_RNRymbz5SO": {
    name: "Membeli Barang",
    description: "Bagaimana pembelian dan penjualan bekerja: harga, membayar barang, menerima kembalian; proses transaksi dasar di toko dan pasar",
    evidence: [
      "Menjelaskan apa yang terjadi saat Anda membeli sesuatu di toko (memilih, membayar, mendapat kembalian)",
      "Membaca label harga dan mengatakan apakah mereka memiliki cukup uang untuk membeli barang tersebut",
      "Memerankan skenario pembelian sederhana menggunakan uang logam nyata atau mainan"
    ],
    assessmentPrompt: "Jika {{name}} memiliki uang logam £2 dan ingin membeli camilan seharga 80p, bisakah mereka menghitung perkiraan berapa kembalian yang akan mereka dapatkan?"
  },
  "mt_FIkqA0qhnj": {
    name: "Uang Logam & Kertas",
    description: "Mengenali uang logam dan kertas yang umum, mengetahui nilainya, dan memahami bahwa kombinasi berbeda bisa membuat jumlah yang sama",
    evidence: [
      "Mengelompokkan segenggam uang logam campuran ke dalam kelompok berdasarkan nilai",
      "Menyatakan nilai uang logam dan kertas yang umum saat ditunjukkan",
      "Menemukan dua cara berbeda untuk membuat jumlah yang sama menggunakan uang logam berbeda"
    ],
    assessmentPrompt: "Jika Anda menuangkan segenggam uang logam, bisakah {{name}} mengelompokkannya dan memberitahu Anda berapa nilai masing-masing jenis?"
  },
  "mt_asRwlPZXC3": {
    name: "Pekerjaan yang Dilakukan Orang",
    description: "Berbagai jenis pekerjaan yang dilakukan orang; bahwa orang menghasilkan uang dengan bekerja; bagaimana pekerjaan membantu komunitas; menghubungkan minat pribadi dengan pekerjaan yang mungkin",
    evidence: [
      "Menyebutkan setidaknya lima pekerjaan berbeda dan mendeskripsikan apa yang dilakukan masing-masing orang",
      "Menjelaskan bahwa orang dibayar uang untuk pekerjaan yang mereka lakukan",
      "Menghubungkan minat pribadi dengan pekerjaan (misal, 'Aku suka hewan jadi aku bisa menjadi dokter hewan')"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahu Anda tentang pekerjaan berbeda yang dilakukan orang di komunitas Anda dan menjelaskan bahwa orang dibayar untuk pekerjaan mereka?"
  },
  "mt_FNSeo9_T2Z": {
    name: "Menjaga Uang",
    description: "Menyimpan uang dengan aman; tidak kehilangan uang logam atau kertas; memahami bahwa uang memiliki nilai nyata dan harus diperlakukan dengan hati-hati; tanggung jawab uang dasar",
    evidence: [
      "Mendeskripsikan setidaknya dua cara untuk menjaga uang tetap aman (dompet, dompet kertas, celengan, memberikan kepada orang dewasa)",
      "Menjelaskan mengapa penting jika Anda kehilangan uang",
      "Menunjukkan bahwa mereka memperlakukan uang logam dan kertas nyata dengan hati-hati daripada membiarkannya tergeletak"
    ],
    assessmentPrompt: "Jika Anda memberikan beberapa uang logam kepada {{name}} untuk dijaga di toko, apakah mereka akan menjaganya tetap aman dan tahu di mana mereka meletakkannya?"
  },
  "mt__ab4knIaSL": {
    name: "Kebutuhan & Keinginan",
    description: "Perbedaan antara hal-hal yang kita butuhkan (makanan, tempat tinggal, pakaian) dan hal-hal yang kita inginkan (mainan, hadiah); bahwa kita terkadang harus memilih karena uang terbatas",
    evidence: [
      "Mengelompokkan serangkaian gambar menjadi kategori 'kebutuhan' dan 'keinginan' dan menjelaskan pilihan mereka",
      "Memberikan contoh sesuatu yang semua orang butuhkan dan sesuatu yang merupakan keinginan",
      "Menjelaskan mengapa keluarga mungkin memilih untuk membeli kebutuhan sebelum keinginan"
    ],
    assessmentPrompt: "Jika Anda menunjukkan gambar jaket musim dingin, robot mainan, dan roti tawar kepada {{name}}, bisakah mereka memberitahu mana yang merupakan kebutuhan dan mana yang merupakan keinginan?"
  },
  "mt_zrCyqhngYm": {
    name: "Menabung Uang",
    description: "Mengapa orang menabung uang; celengan dan toples tabungan; menetapkan tujuan tabungan; gagasan bahwa tidak membelanjakan sekarang berarti memiliki lebih nanti",
    evidence: [
      "Menjelaskan mengapa seseorang mungkin menabung uang daripada membelanjakannya segera",
      "Mendeskripsikan tujuan tabungan yang bisa mereka tetapkan dan bagaimana mereka akan bekerja ke arah itu",
      "Memberitahu Anda apa arti penundaan kepuasan dengan kata-kata mereka sendiri (menunggu untuk mendapatkan sesuatu yang lebih baik)"
    ],
    assessmentPrompt: "Jika {{name}} menerima uang ulang tahun, bisakah mereka menjelaskan mengapa mungkin bijaksana untuk menabung sebagian daripada membelanjakan semuanya sekaligus?"
  },
  "mt_SsS7GptD_o": {
    name: "Apa Itu Uang",
    description: "Apa itu uang dan mengapa kita menggunakannya; bahwa uang ditukar dengan barang dan jasa; sejarah singkat dari barter ke uang logam ke pembayaran digital",
    evidence: [
      "Menjelaskan bahwa orang menggunakan uang untuk membayar hal-hal yang mereka butuhkan atau inginkan",
      "Memberikan contoh bagaimana pembelian bekerja sebelum uang ada (menukar atau barter)",
      "Menyebutkan setidaknya dua bentuk uang (logam, kertas, kartu, pembayaran ponsel)"
    ],
    assessmentPrompt: "Jika Anda bertanya kepada {{name}} mengapa orang menggunakan uang alih-alih hanya menukar barang, bisakah mereka memberikan jawaban yang masuk akal?"
  },
  "mt_My0OL6fhGL": {
    name: "Iklan & Belanja",
    description: "Bagaimana iklan mencoba mempengaruhi apa yang kita beli; menjadi konsumen kritis; memahami 'nilai untuk uang'; perbedaan antara pengeluaran emosional dan rasional",
    evidence: [
      "Mengenali setidaknya dua teknik persuasi dalam iklan nyata (warna cerah, selebriti, penawaran khusus)",
      "Menjelaskan apa arti 'nilai untuk uang' dan membandingkan dua produk serupa dengan harga berbeda",
      "Mendeskripsikan waktu ketika iklan membuat mereka menginginkan sesuatu yang tidak benar-benar mereka butuhkan"
    ],
    assessmentPrompt: "Ketika {{name}} melihat iklan untuk mainan atau game, apakah mereka bisa mengenali bahwa iklan itu mencoba membuat mereka ingin membelinya?"
  },
  "mt_uSUqTjOl8m": {
    name: "Bank & Menabung",
    description: "Apa yang dilakukan bank dan mengapa orang menggunakannya; rekening bank sebagai tempat aman untuk uang; bahwa tabungan di bank bisa menghasilkan bunga; rekening tabungan anak",
    evidence: [
      "Menjelaskan apa yang dilakukan bank dalam istilah sederhana (menyimpan uang aman, membiarkan Anda menabung)",
      "Mendeskripsikan apa arti bunga (bank membayar Anda sedikit ekstra untuk menyimpan uang di sana)",
      "Menyebutkan satu alasan mengapa rekening bank lebih aman daripada menyimpan semua uang Anda di rumah"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan apa yang dilakukan bank dan mengapa orang menyimpan uang mereka di sana alih-alih menyimpan semuanya di rumah?"
  },
  "mt_Qzbh-_v0Gq": {
    name: "Anggaran Uang Saku",
    description: "Apa itu anggaran; merencanakan bagaimana membelanjakan jumlah tetap uang saku atau tunjangan; membuat kompromi antara hal-hal berbeda yang ingin Anda beli",
    evidence: [
      "Membuat rencana pengeluaran sederhana untuk £10 yang menunjukkan apa yang akan mereka beli dan berapa sisa",
      "Menjelaskan apa itu anggaran dan mengapa membantu merencanakan pengeluaran",
      "Mengidentifikasi kompromi (memilih satu hal berarti tidak memiliki cukup untuk yang lain)"
    ],
    assessmentPrompt: "Jika {{name}} memiliki £10 untuk dibelanjakan di pesta sekolah, bisakah mereka merencanakan sebelumnya apa yang akan dibelanjakan sehingga uangnya bertahan?"
  },
  "mt_uP9faJlnRq": {
    name: "Menghasilkan Uang",
    description: "Cara anak-anak dan orang dewasa menghasilkan uang; hubungan antara pekerjaan, keterampilan dan bayaran; bahwa pekerjaan yang lebih sulit atau lebih terampil sering dibayar lebih",
    evidence: [
      "Menyebutkan setidaknya tiga cara berbeda orang bisa menghasilkan uang",
      "Menjelaskan mengapa dokter mungkin dibayar lebih dari asisten toko (pelatihan, keterampilan, tanggung jawab)",
      "Mendeskripsikan cara anak bisa menghasilkan uang (pekerjaan rumah, cuci mobil, menjual kerajinan)"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa beberapa pekerjaan dibayar lebih dari yang lain dan mendeskripsikan cara mereka mungkin menghasilkan uang sendiri?"
  },
  "mt_HPf-dVtA3p": {
    name: "Perdagangan Adil & Etika",
    description: "Dari mana produk berasal dan siapa yang membuatnya; bahwa orang di seluruh dunia memproduksi apa yang kita beli; bayaran adil untuk pekerja; membuat pilihan etis sebagai konsumen",
    evidence: [
      "Menjelaskan bahwa hal-hal yang kita beli dibuat oleh orang nyata, terkadang di negara lain",
      "Mendeskripsikan apa arti 'perdagangan adil' dalam istilah sederhana (pekerja dibayar adil)",
      "Memberikan contoh pilihan ramah yang bisa dilakukan pembeli (membeli cokelat perdagangan adil, memilih lebih sedikit kemasan)"
    ],
    assessmentPrompt: "Jika {{name}} melihat logo Fairtrade pada cokelat batangan, bisakah mereka menjelaskan apa artinya dan mengapa ini penting?"
  },
  "mt_aWOK1npO5s": {
    name: "Membuat Kembalian",
    description: "Menghitung kembalian dari pembelian; bekerja dengan percaya diri dengan pound dan pence bersamaan; menyelesaikan masalah uang praktis yang melibatkan penjumlahan dan pengurangan",
    evidence: [
      "Menghitung kembalian dari £5 saat membeli barang yang harganya pound dan pence",
      "Menambahkan dua atau tiga harga bersama untuk menemukan total biaya",
      "Memeriksa apakah mereka telah diberikan kembalian yang benar dalam skenario peran"
    ],
    assessmentPrompt: "Jika {{name}} membeli komik seharga £2,75 dan membayar dengan catatan £5, bisakah mereka menghitung bahwa mereka harus mendapat kembalian £2,25?"
  },
  "mt_K8_RYIvrTV": {
    name: "Cara Membayar",
    description: "Cara berbeda untuk membayar: tunai, kartu debit, tanpa kontak, pembayaran online, pembayaran ponsel; bahwa pembayaran digital masih menggunakan uang nyata; menjaga detail pembayaran tetap aman",
    evidence: [
      "Menyebutkan setidaknya empat cara berbeda orang bisa membayar barang",
      "Menjelaskan bahwa mengetuk kartu atau ponsel masih membelanjakan uang nyata dari rekening bank",
      "Memberikan satu alasan mengapa Anda harus menjaga nomor kartu dan kata sandi tetap pribadi"
    ],
    assessmentPrompt: "Apakah {{name}} memahami bahwa saat Anda mengetuk kartu atau menggunakan ponsel untuk membayar, uang nyata keluar dari rekening bank Anda meskipun Anda tidak bisa melihat uang logam berpindah tangan?"
  },
  "mt_bAy4dmP1-A": {
    name: "Meminjam & Hutang",
    description: "Apa artinya meminjam uang; bahwa pinjaman harus dibayar kembali dengan bunga; apa itu kredit; mengapa terlalu banyak hutang bisa berisiko; meminjam yang bertanggung jawab",
    evidence: [
      "Menjelaskan apa itu pinjaman dan bahwa uang yang dipinjam harus dibayar kembali dengan ekstra (bunga)",
      "Memberikan contoh kapan meminjam mungkin bijaksana (membeli rumah) versus berisiko (membeli kemewahan yang tidak bisa Anda bayar)",
      "Mendeskripsikan apa yang terjadi jika seseorang meminjam terlalu banyak uang dan tidak bisa membayar kembali"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa meminjam uang biayanya lebih dari jumlah yang Anda pinjam, dan mengapa itu penting?"
  },
  "mt_r1hw-KenpK": {
    name: "Perencanaan Keuangan",
    description: "Menetapkan tujuan keuangan jangka panjang; merencanakan dan memprioritaskan pengeluaran; bagaimana menabung secara teratur bertambah seiring waktu; nilai berpikir ke depan dengan uang",
    evidence: [
      "Menetapkan tujuan tabungan yang realistis dan menghitung berapa lama waktu yang dibutuhkan dengan menabung jumlah tetap setiap minggu",
      "Membuat rencana keuangan sederhana untuk tujuan tertentu (pesta ulang tahun, perjalanan sekolah, hadiah)",
      "Menjelaskan mengapa merencanakan ke depan dengan uang lebih baik daripada membelanjakan semuanya saat masuk"
    ],
    assessmentPrompt: "Jika {{name}} ingin menabung untuk sesuatu yang berharga £30, bisakah mereka menghitung rencana realistis tentang berapa lama waktu yang dibutuhkan?"
  },
  "mt_0Rx1ISxXFE": {
    name: "Perdagangan Global",
    description: "Mengapa negara-negara berdagang satu sama lain; impor dan ekspor; bagaimana barang bepergian ke seluruh dunia; bahwa negara-negara berbeda menggunakan mata uang berbeda",
    evidence: [
      "Menjelaskan mengapa negara membeli barang dari negara lain (mereka tidak bisa membuat semuanya sendiri)",
      "Memberikan contoh produk impor dan ekspor dari negara mereka sendiri",
      "Menjelaskan bahwa negara-negara berbeda menggunakan mata uang berbeda dan Anda perlu menukar uang saat bepergian"
    ],
    assessmentPrompt: "Jika {{name}} melihat label pada item di dapur Anda, bisakah mereka menjelaskan mengapa begitu banyak hal berasal dari negara berbeda?"
  },
  "mt_udgPy5oAvR": {
    name: "Bagaimana Ekonomi Bekerja",
    description: "Apa itu ekonomi; produsen dan konsumen; penawaran dan permintaan; mengapa harga berubah; dasar-dasar cara pasar bekerja",
    evidence: [
      "Menjelaskan apa arti 'penawaran dan permintaan' menggunakan contoh sederhana (es krim di hari panas)",
      "Mendeskripsikan perbedaan antara produsen dan konsumen",
      "Memberikan alasan mengapa harga sesuatu mungkin naik atau turun"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa es krim mungkin lebih mahal di pantai di musim panas daripada di supermarket di musim dingin?"
  },
  "mt_W5euSyU2sO": {
    name: "Penipuan & Keamanan Online",
    description: "Mengenali penipuan dan trik keuangan; email phishing dan situs web palsu; melindungi informasi pribadi dan keuangan secara online; 'jika terlalu bagus untuk menjadi kenyataan, mungkin memang begitu'",
    evidence: [
      "Mengidentifikasi setidaknya dua tanda peringatan penipuan (meminta detail pribadi, penawaran yang terlalu bagus untuk menjadi kenyataan, urgensi)",
      "Menjelaskan mengapa Anda tidak boleh membagikan kata sandi atau detail bank secara online",
      "Mendeskripsikan apa yang harus dilakukan jika mereka menerima pesan atau email yang mencurigakan (jangan klik, beri tahu orang dewasa)"
    ],
    assessmentPrompt: "Jika {{name}} menerima pesan yang mengatakan mereka telah memenangkan hadiah dan hanya perlu memasukkan detail mereka, apakah mereka akan tahu itu mungkin penipuan?"
  },
  "mt_cSz7XTxVAx": {
    name: "Pajak & Layanan Publik",
    description: "Apa itu pajak dan mengapa orang membayarnya; bagaimana pajak membiayai sekolah, rumah sakit, jalan, dan layanan darurat; bahwa pemerintah memutuskan bagaimana membelanjakan uang pajak",
    evidence: [
      "Menjelaskan apa itu pajak dan bahwa sebagian besar orang dewasa yang bekerja membayarnya",
      "Menyebutkan setidaknya tiga hal yang dibayar oleh pajak (sekolah, rumah sakit, jalan, polisi, pemadam kebakaran)",
      "Mendeskripsikan mengapa pajak dibutuhkan (semua orang berkontribusi sehingga semua orang mendapat manfaat)"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan dari mana uang berasal untuk membayar hal-hal seperti sekolah dan rumah sakit yang digunakan semua orang?"
  },
  // ==================== HISTORY ====================
  "mt_IR8kIjZn_V": {
    name: "Penemuan Makam Tutankhamun",
    description: "Memahami bahwa kita mengetahui tentang Mesir Kuno karena arkeolog telah menggali makam dan benda-benda dari ribuan tahun yang lalu",
    evidence: [
      "Menjelaskan bahwa makam Tutankhamun ditemukan pada tahun 1922 oleh Howard Carter",
      "Mendeskripsikan harta karun yang ditemukan di dalam makam — topeng emas, peti mati, perhiasan",
      "Menjelaskan mengapa penemuan ini penting untuk memahami kehidupan di Mesir Kuno"
    ],
    assessmentPrompt: "Jika {{name}} menonton dokumenter tentang Howard Carter membuka makam Tutankhamun, bisakah mereka menjelaskan mengapa penemuan ini begitu mengejutkan dan penting?"
  },
  "mt_bvxkT1nepy": {
    name: "Dewa-Dewi Mesir dan Kehidupan Setelah Mati",
    description: "Memahami bahwa orang Mesir Kuno percaya pada banyak dewa dan dewi serta keyakinan mereka tentang kehidupan setelah kematian",
    evidence: [
      "Menyebutkan setidaknya tiga dewa Mesir Kuno dan apa yang mereka kuasai",
      "Menjelaskan keyakinan Mesir Kuno tentang kehidupan setelah kematian",
      "Mendeskripsikan mengapa orang Mesir Kuno membangun makam yang begitu megah"
    ],
    assessmentPrompt: "Jika {{name}} mempelajari bahwa makam Mesir diisi dengan makanan dan harta benda, bisakah mereka menjelaskan mengapa orang Mesir Kuno melakukan ini?"
  },
  "mt_8UL1opbJEt": {
    name: "Mesir, Sungai Nil, dan Gurun",
    description: "Menemukan Mesir pada peta Afrika dan memahami bahwa Mesir adalah negara di wilayah yang sangat panas dan kering",
    evidence: [
      "Menunjukkan Mesir pada peta dan menyebutkan benua tempatnya berada",
      "Menjelaskan mengapa Sungai Nil sangat penting bagi kehidupan di Mesir Kuno",
      "Mendeskripsikan bagaimana gurun memengaruhi cara orang Mesir Kuno hidup"
    ],
    assessmentPrompt: "Jika {{name}} melihat gambar piramida di gurun, bisakah mereka menjelaskan mengapa orang Mesir Kuno memilih membangun di dekat sungai?"
  },
  "mt_P0HBNfp46z": {
    name: "Kehidupan Sehari-hari di Mesir Kuno",
    description: "Mendeskripsikan seperti apa kehidupan sehari-hari bagi orang biasa di Mesir Kuno: petani, pengrajin, dan pedagang",
    evidence: [
      "Menjelaskan pekerjaan sehari-hari petani Mesir Kuno",
      "Mendeskripsikan jenis makanan yang dimakan oleh orang Mesir Kuno",
      "Menjelaskan bagaimana anak-anak Mesir Kuno menghabiskan waktunya"
    ],
    assessmentPrompt: "Jika kamu bertanya kepada {{name}} apa yang mungkin dilakukan anak seusianya di Mesir Kuno, bisakah mereka memberikan beberapa contoh?"
  },
  "mt_iFkd0CTwlA": {
    name: "Hieroglif dan Papirus",
    description: "Mengetahui bahwa orang Mesir Kuno menggunakan sistem tulisan khusus yang disebut hieroglif dan menulis di atas papirus",
    evidence: [
      "Menjelaskan apa itu hieroglif dan bagaimana cara kerjanya",
      "Menyebutkan apa itu papirus dan mengapa penting",
      "Membandingkan tulisan hieroglif dengan tulisan modern"
    ],
    assessmentPrompt: "Jika {{name}} melihat hieroglif di artefak museum, bisakah mereka menjelaskan bahwa ini adalah cara orang Mesir Kuno menulis?"
  },
  "mt_E7avIa-tcE": {
    name: "Firaun dan Tutankhamun",
    description: "Mengetahui bahwa Mesir Kuno dipimpin oleh raja dan ratu yang kuat yang disebut firaun, termasuk Tutankhamun",
    evidence: [
      "Menjelaskan siapa firaun dan mengapa mereka begitu kuat",
      "Menyebutkan firaun terkenal selain Tutankhamun",
      "Mendeskripsikan bagaimana firaun diperlakukan sebagai dewa"
    ],
    assessmentPrompt: "Jika {{name}} melihat gambar topeng emas Mesir, bisakah mereka menjelaskan siapa yang memakainya dan mengapa?"
  },
  "mt_mmudyxf7bT": {
    name: "Piramida dan Sphinx Besar",
    description: "Mengetahui bahwa orang Mesir Kuno membangun piramida batu raksasa sebagai makam bagi para firaun",
    evidence: [
      "Menjelaskan tujuan piramida dibangun",
      "Mendeskripsikan Sphinx Besar dan hubungannya dengan piramida",
      "Menyebutkan fakta tentang ukuran piramida"
    ],
    assessmentPrompt: "Jika {{name}} melihat foto piramida, bisakah mereka memberitahumu apa piramida itu dan mengapa dibangun?"
  },
  "mt_szw1Ln490b": {
    name: "Kosakata: Mesir Kuno",
    description: "Mengetahui dan menggunakan kosakata utama Mesir Kuno — firaun, piramida, makam, mumi, hieroglif, dan lainnya",
    evidence: [
      "Menggunakan setidaknya lima istilah Mesir Kuno dengan benar dalam percakapan",
      "Menjelaskan arti minimal tiga istilah Mesir Kuno",
      "Menggunakan kosakata Mesir Kuno secara tepat saat mendeskripsikan artefak"
    ],
    assessmentPrompt: "Jika {{name}} mengunjungi pameran Mesir Kuno di museum, bisakah mereka menggunakan kosakata yang benar saat mendeskripsikan apa yang mereka lihat?"
  },
  "mt_pTz6u49fQt": {
    name: "Mesir Kuno di Garis Waktu",
    description: "Menempatkan Mesir Kuno pada garis waktu yang mencakup lebih dari 3.000 tahun — dari sekitar 3100 SM hingga 30 SM",
    evidence: [
      "Menempatkan periode utama Mesir Kuno pada garis waktu",
      "Menjelaskan berapa lama peradaban Mesir Kuno bertahan",
      "Membandingkan durasi Mesir Kuno dengan peradaban lain"
    ],
    assessmentPrompt: "Jika kamu bertanya kepada {{name}} kapan orang Mesir Kuno hidup dan berapa lama peradaban mereka bertahan, bisakah mereka menjawab?"
  },
  "mt_kgTN6yk4oE": {
    name: "Membangun Piramida",
    description: "Memahami bagaimana piramida dibangun: ribuan pekerja memindahkan batu-batu besar menggunakan teknik sederhana namun efektif",
    evidence: [
      "Menjelaskan metode yang digunakan untuk memindahkan batu-batu besar",
      "Menyebutkan siapa yang membangun piramida (bukan budak, tetapi pekerja terampil)",
      "Mendeskripsikan bagaimana organisasi kerja yang diperlukan untuk proyek sebesar ini"
    ],
    assessmentPrompt: "Jika {{name}} bertanya-tanya bagaimana orang Mesir Kuno membangun piramida tanpa mesin modern, bisakah mereka menjelaskan beberapa teknik yang digunakan?"
  },
  "mt_B1ATUEVNPz": {
    name: "Dewa-Dewi Mesir",
    description: "Menyebutkan dan mendeskripsikan dewa-dewi utama Mesir: Ra matahari yang berlayar menyeberangi langit, Osiris dan Isis, dan lainnya",
    evidence: [
      "Menyebutkan setidaknya empat dewa/dewi Mesir dan peran mereka",
      "Menjelaskan hubungan antara dewa-dewi dalam mitologi Mesir",
      "Mendeskripsikan bagaimana orang Mesir Kuno memuja dewa-dewi mereka"
    ],
    assessmentPrompt: "Jika {{name}} melihat patung Mesir Kuno dengan kepala serigala, bisakah mereka menjelaskan dewa mana itu dan apa perannya?"
  },
  "mt_bEvMBUv4eG": {
    name: "Hierarki Sosial Mesir Kuno",
    description: "Mendeskripsikan struktur sosial Mesir Kuno sebagai hierarki berbentuk piramida: firaun di puncak, diikuti bangsawan, pendeta, prajurit, lalu rakyat biasa",
    evidence: [
      "Menggambarkan hierarki sosial Mesir Kuno dalam bentuk piramida",
      "Menjelaskan perbedaan kehidupan antara kelas sosial yang berbeda",
      "Menyebutkan siapa yang berada di setiap tingkatan hierarki"
    ],
    assessmentPrompt: "Jika {{name}} ditanya siapa yang lebih penting di Mesir Kuno — petani atau bangsawan — bisakah mereka menjelaskan mengapa?"
  },
  "mt_yNGrY9xJ8Y": {
    name: "Lukisan Makam dan Artefak Mesir Kuno",
    description: "Menggunakan lukisan makam, artefak, dan benda-benda dari Mesir Kuno sebagai bukti untuk menemukan tentang kehidupan di sana",
    evidence: [
      "Mengidentifikasi informasi yang dapat diperoleh dari lukisan makam",
      "Menjelaskan apa yang dapat dipelajari dari artefak tentang kehidupan sehari-hari",
      "Menggunakan bukti artefak untuk membuat kesimpulan tentang masyarakat Mesir Kuno"
    ],
    assessmentPrompt: "Jika {{name}} melihat lukisan Mesir Kuno yang menunjukkan orang-orang bekerja, bisakah mereka menjelaskan apa yang dapat dipelajari dari lukisan tersebut?"
  },
  "mt_cJ8CeyRKKs": {
    name: "Mumifikasi Langkah demi Langkah",
    description: "Mendeskripsikan proses mumifikasi langkah demi langkah: tubuh dicuci, organ dalam dikeluarkan, tubuh dikeringkan dan dibungkus",
    evidence: [
      "Menjelaskan langkah-langkah proses mumifikasi",
      "Menyebutkan mengapa orang Mesir Kuno melakukan mumifikasi",
      "Mendeskripsikan peralatan yang digunakan dalam proses mumifikasi"
    ],
    assessmentPrompt: "Jika {{name}} ditanya bagaimana orang Mesir Kuno membuat mumi, bisakah mereka menjelaskan langkah-langkah utamanya?"
  },
  "mt_V_kAitNbLN": {
    name: "Ahli Tulis dan Batu Rosetta",
    description: "Mengetahui bahwa ahli tulis adalah orang-orang yang terlatih khusus yang bisa membaca dan menulis hieroglif; Batu Rosetta adalah kunci untuk memecahkan kode hieroglif",
    evidence: [
      "Menjelaskan peran ahli tulis dalam masyarakat Mesir Kuno",
      "Menjelaskan mengapa Batu Rosetta begitu penting",
      "Menjelaskan bagaimana hieroglif akhirnya dapat dibaca"
    ],
    assessmentPrompt: "Jika {{name}} melihat Batu Rosetta di museum (atau gambarnya), bisakah mereka menjelaskan mengapa batu ini begitu penting?"
  },
  "mt_lSFwVU7V9g": {
    name: "Mesir Hulu dan Hilir",
    description: "Memahami bahwa Mesir Kuno dibagi menjadi Mesir Hulu (lembah sungai yang sempit) dan Mesir Hilir (delta yang luas)",
    evidence: [
      "Menjelaskan perbedaan antara Mesir Hulu dan Hilir",
      "Menunjukkan kedua wilayah pada peta",
      "Menjelaskan bagaimana kedua wilayah ini disatukan"
    ],
    assessmentPrompt: "Jika {{name}} melihat peta yang menunjukkan Sungai Nil bercabang, bisakah mereka menjelaskan perbedaan antara Mesir Hulu dan Hilir?"
  },
  "mt_JdAnBKIDnw": {
    name: "Warisan Abadi Mesir Kuno",
    description: "Menilai warisan abadi Mesir Kuno: orang Mesir mengembangkan bentuk awal tulisan, arsitektur, obat-obatan, dan pengetahuan yang masih kita gunakan hari ini",
    evidence: [
      "Menyebutkan setidaknya tiga kontribusi Mesir Kuno yang masih kita gunakan hari ini",
      "Menjelaskan bagaimana penemuan Mesir Kuno memengaruhi peradaban modern",
      "Mengevaluasi dampak jangka panjang warisan Mesir Kuno"
    ],
    assessmentPrompt: "Jika {{name}} ditanya apa yang diberikan orang Mesir Kuno kepada dunia modern, bisakah mereka memberikan beberapa contoh?"
  },
  "mt_HZyUwycFvf": {
    name: "Kleopatra dan Akhir Mesir",
    description: "Mengetahui bahwa Mesir Kuno akhirnya berakhir: firaun terakhir adalah Kleopatra, dan Mesir ditaklukkan oleh Kekaisaran Romawi",
    evidence: [
      "Menjelaskan siapa Kleopatra dan mengapa ia penting",
      "Menjelaskan bagaimana Mesir Kuno berakhir",
      "Menyebutkan apa yang terjadi setelah Mesir jatuh ke tangan Romawi"
    ],
    assessmentPrompt: "Jika {{name}} ditanya apa yang terjadi pada Mesir Kuno di akhir, bisakah mereka menjelaskan?"
  },
  "mt__qlBYNP62H": {
    name: "Seni dan Arsitektur Mesir Kuno",
    description: "Menganalisis seni dan arsitektur Mesir Kuno: memahami bahwa lukisan Mesir mengikuti aturan ketat dan patung memiliki proporsi khusus",
    evidence: [
      "Mengidentifikasi ciri khas seni Mesir Kuno",
      "Menjelaskan mengapa seni Mesir Kuno memiliki gaya yang konsisten",
      "Mendeskripsikan pencapaian arsitektur seperti piramida dan kuil"
    ],
    assessmentPrompt: "Jika {{name}} memperhatikan bahwa lukisan Mesir Kuno selalu menunjukkan orang dengan cara yang sama, bisakah mereka menjelaskan mengapa?"
  },
  "mt_C3eNLQJlgt": {
    name: "Garis Waktu dan Peta Mesir Kuno",
    description: "Membaca dan menyusun garis waktu sejarah — menempatkan periode, firaun, dan peristiwa utama Mesir Kuno secara kronologis",
    evidence: [
      "Menyusun garis waktu yang menunjukkan periode utama Mesir Kuno",
      "Menempatkan peristiwa sejarah pada garis waktu yang benar",
      "Menjelaskan urutan kronologis peristiwa penting"
    ],
    assessmentPrompt: "Jika {{name}} ditampilkan garis waktu sejarah kuno, bisakah mereka menempatkan Mesir Kuno pada tempat yang benar?"
  },
  "mt_5OxKnrGEMP": {
    name: "Perdagangan dan Ekonomi Mesir Kuno",
    description: "Memahami bahwa Mesir Kuno memiliki ekonomi yang makmur berdasarkan pertanian surplus, perdagangan, dan sistem perpajakan",
    evidence: [
      "Menjelaskan komoditas utama yang diperdagangkan oleh Mesir Kuno",
      "Menjelaskan bagaimana surplus pertanian mendukung ekonomi",
      "Menyebutkan mitra dagang Mesir Kuno"
    ],
    assessmentPrompt: "Jika {{name}} membaca bahwa orang Mesir Kuno memperdagangkan emas untuk kayu cedar, bisakah mereka menjelaskan mengapa perdagangan itu penting?"
  },
  "mt_8qQ2IosZZw": {
    name: "Pengadilan Orang Mati",
    description: "Mendeskripsikan keyakinan Mesir Kuno tentang pengadilan orang mati: setelah kematian, hati ditimbang terhadap bulu kebenaran",
    evidence: [
      "Menjelaskan proses pengadilan orang mati menurut keyakinan Mesir Kuno",
      "Menjelaskan makna simbolis penimbangan hati",
      "Menjelaskan apa yang terjadi pada orang yang lulus atau gagal dalam pengadilan"
    ],
    assessmentPrompt: "Jika {{name}} melihat lukisan yang menunjukkan hati ditimbang di atas timbangan, bisakah mereka menjelaskan apa yang dilukiskan?"
  },
  "mt_PCX1jZZnf9": {
    name: "Firaun sebagai Dewa yang Hidup",
    description: "Memahami bahwa firaun bukan hanya penguasa tetapi diyakini sebagai dewa yang hidup di bumi",
    evidence: [
      "Menjelaskan mengapa firaun dianggap sebagai dewa",
      "Menjelaskan dampak keyakinan ini terhadap kehidupan sehari-hari",
      "Mendeskripsikan bagaimana firaun mempertahankan kekuasaannya"
    ],
    assessmentPrompt: "Jika {{name}} ditanya mengapa firaun begitu kuat, bisakah mereka menjelaskan bahwa orang Mesir Kuno percaya firaun adalah dewa?"
  },
  "mt_B1LdSGMP66": {
    name: "Arkeologi Modern dan Etika Mesir",
    description: "Memahami bahwa ahli Mesir modern menggunakan teknologi canggih — pemindaian CT, analisis DNA, dan pencitraan digital untuk mempelajari Mesir Kuno secara hormat",
    evidence: [
      "Menjelaskan teknologi modern yang digunakan dalam studi Mesir Kuno",
      "Menjelaskan masalah etis dalam pengambilan artefak dari makam",
      "Mendiskusikan bagaimana Museum Mesir modern menampilkan artefak"
    ],
    assessmentPrompt: "Jika {{name}} mengunjungi museum dengan mumi Mesir Kuno yang dipamerkan, bisakah mereka menjelaskan bagaimana teknologi modern membantu kita mempelajari mereka tanpa merusak?"
  },
  "mt_PPNDO7BUrY": {
    name: "Matematika dan Rekayasa Mesir Kuno",
    description: "Mendeskripsikan pencapaian orang Mesir Kuno dalam matematika dan rekayasa: Teks Matematika Rhind, sistem penyiraman, dan teknik konstruksi",
    evidence: [
      "Menjelaskan pencapaian matematika orang Mesir Kuno",
      "Mendeskripsikan sistem penyiraman yang mereka kembangkan",
      "Menjelaskan bagaimana pengetahuan matematika digunakan dalam konstruksi piramida"
    ],
    assessmentPrompt: "Jika {{name}} diberitahu bahwa orang Mesir Kuno sudah menyelesaikan masalah matematika ribuan tahun yang lalu, bisakah mereka menyebutkan beberapa contoh?"
  },
  "mt_bhEuF-CCuY": {
    name: "Sumber Sejarah tentang Mesir Kuno",
    description: "Menjelaskan bagaimana pengetahuan tentang Mesir Kuno dibangun dari berbagai jenis sumber — inskripsi, artefak, tulisan kuno, dan penemuan arkeologi",
    evidence: [
      "Mengidentifikasi setidaknya tiga jenis sumber sejarah tentang Mesir Kuno",
      "Menjelaskan kekuatan dan keterbatasan berbagai jenis sumber",
      "Mendeskripsikan bagaimana sejarawan menggabungkan berbagai sumber"
    ],
    assessmentPrompt: "Jika {{name}} ditampilkan dua buku sejarah dengan pendapat yang berbeda tentang Mesir Kuno, bisakah mereka menjelaskan mengapa bisa terjadi perbedaan?"
  },
  "mt_NnlnxCx1DO": {
    name: "Mesir dan Tetangganya",
    description: "Memeriksa hubungan Mesir dengan peradaban tetangga: jaringan perdagangan, pengaruh budaya, dan konflik militer",
    evidence: [
      "Menyebutkan setidaknya tiga peradaban yang berinteraksi dengan Mesir Kuno",
      "Menjelaskan jenis interaksi yang terjadi (perdagangan, perang, pertukaran budaya)",
      "Mendeskripsikan pengaruh peradaban tetangga terhadap Mesir Kuno"
    ],
    assessmentPrompt: "Jika {{name}} ditanya apakah orang Mesir Kuno pernah pergi ke negara lain, bisakah mereka menjelaskan?"
  },
  "mt_xAG0aMeAIN": {
    name: "Siapa Sebenarnya yang Membangun Piramida",
    description: "Menganalisis siapa yang membangun piramida dan mengapa, mengevaluasi bukti melawan teori alien dan menegaskan peran pekerja manusia",
    evidence: [
      "Menjelaskan bukti bahwa piramida dibangun oleh pekerja manusia",
      "Mengevaluasi mengapa teori alien tidak didukung oleh bukti",
      "Menjelaskan motivasi dan metode pekerja yang membangun piramida"
    ],
    assessmentPrompt: "Jika {{name}} menonton dokumenter yang mengklaim alien membangun piramida, bisakah mereka menjelaskan mengapa klaim ini tidak didukung oleh bukti?"
  },
  "mt_5qNMVZi3dQ": {
    name: "Jatuhnya Peradaban Mesir Kuno",
    description: "Menelusuri berakhirnya peradaban Mesir Kuno melalui penaklukan berturut-turut oleh Persia, Yunani, dan Romawi",
    evidence: [
      "Menyebutkan penaklukan utama yang mengakhiri kemerdekaan Mesir Kuno",
      "Menjelaskan faktor-faktor yang melemahkan Mesir Kuno dari dalam",
      "Mendeskripsikan bagaimana penaklukan Romawi mengakhiri era Mesir Kuno"
    ],
    assessmentPrompt: "Jika {{name}} ditanya kapan Mesir Kuno berakhir dan mengapa, bisakah mereka menjelaskan?"
  },
  "mt_mMMXD4v9Sh": {
    name: "Yunani dan Romawi Kuno di Peta",
    description: "Menemukan Yunani dan Italia pada peta dan mengetahui bahwa mereka adalah negara di sekitar Laut Mediterania",
    evidence: [
      "Menunjukkan Yunani dan Italia pada peta",
      "Menjelaskan mengapa letak geografis ini penting bagi peradaban kuno",
      "Mendeskripsikan bagaimana Laut Mediterania menghubungkan peradaban kuno"
    ],
    assessmentPrompt: "Jika kamu menunjukkan peta kepada {{name}}, bisakah mereka menunjukkan di mana Yunani Kuno dan Romawi Kuno berada?"
  },
  "mt_19qy2uuaKp": {
    name: "Kehidupan Kuno vs Masa Kini",
    description: "Membandingkan bagaimana anak-anak di Yunani atau Romawi Kuno hidup dengan bagaimana anak-anak hidup hari ini",
    evidence: [
      "Menyebutkan setidaknya tiga perbedaan antara kehidupan anak-anak kuno dan modern",
      "Menjelaskan satu kesamaan antara kehidupan anak-anak kuno dan modern",
      "Mendeskripsikan tantangan unik yang dihadapi anak-anak di zaman kuno"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu seperti apa rasanya menjadi anak-anak di Yunani atau Romawi Kuno?"
  },
  "mt_H1pAi4F_Oh": {
    name: "Dewa Yunani dan Gunung Olympus",
    description: "Mengetahui bahwa orang Yunani Kuno percaya pada banyak dewa dan dewi yang tinggal di Gunung Olympus",
    evidence: [
      "Menyebutkan setidaknya tiga dewa Yunani dan domain mereka",
      "Menjelaskan mengapa Gunung Olympus penting dalam mitologi Yunani",
      "Mendeskripsikan sifat-sifat dewa Yunani yang mirip manusia"
    ],
    assessmentPrompt: "Jika {{name}} melihat gambar Zeus dengan petir atau Poseidon dengan trisula, bisakah mereka memberitahumu dewa mana itu?"
  },
  "mt_PhIZNl2230": {
    name: "Mitologi dan Pahlawan Yunani",
    description: "Menceritakan kembali setidaknya satu mitos Yunani yang melibatkan pahlawan dan monster — seperti Theseus dan Minotaur atau Hercules dan Tugas-Tugasnya",
    evidence: [
      "Menceritakan kembali satu mitos Yunani dengan benar",
      "Menjelaskan pelajaran atau moral dari mitos tersebut",
      "Menyebutkan karakter utama dan peran mereka dalam cerita"
    ],
    assessmentPrompt: "Bisakah {{name}} menceritakan kisah pahlawan Yunani seperti Theseus, Hercules, atau Perseus?"
  },
  "mt_VjxyJLtIbT": {
    name: "Prajurit dan Pembangun Romawi",
    description: "Mengetahui bahwa prajurit Romawi berbaris melintasi kekaisaran yang sangat besar membangun jalan lurus dan aqueduct saat mereka pergi",
    evidence: [
      "Menjelaskan bagaimana tentara Romawi diorganisasi",
      "Menyebutkan pencapaian konstruksi Romawi yang masih ada hari ini",
      "Mendeskripsikan dampak jalan Romawi terhadap perdagangan dan komunikasi"
    ],
    assessmentPrompt: "Jika keluargamu mengendarai jalan yang sangat lurus atau mengunjungi aqueduct, bisakah {{name}} menjelaskan siapa yang membangunnya dan mengapa?"
  },
  "mt_zh_RyesCgZ": {
    name: "Romulus dan Remus",
    description: "Mengetahui mitos pendirian Romawi tentang Romulus dan Remus — saudara kembar yang ditinggalkan sebagai bayi, disusui oleh serigala, dan mendirikan Roma",
    evidence: [
      "Menceritakan kembali mitos Romulus dan Remus",
      "Menjelaskan bagaimana Roma diyakini didirikan",
      "Menyebutkan simbol serigala yang terkait dengan pendirian Roma"
    ],
    assessmentPrompt: "Jika {{name}} melihat patung serigala yang menyusui dua bayi, bisakah mereka menceritakan kisah Romulus dan Remus?"
  },
  "mt_bKV2JYNwf7": {
    name: "Olimpiade Pertama",
    description: "Mengetahui bahwa Olimpiade dimulai di Yunani Kuno di tempat yang disebut Olympia sebagai upacara keagamaan",
    evidence: [
      "Menjelaskan bagaimana Olimpiade dimulai",
      "Menyebutkan olahraga yang dipertandingkan di Olimpiade kuno",
      "Membandingkan Olimpiade kuno dengan Olimpiade modern"
    ],
    assessmentPrompt: "Ketika {{name}} menonton Olimpiade di TV, bisakah mereka memberitahumu bagaimana Olimpiade dimulai di Yunani Kuno?"
  },
  "mt_8ad4U6msea": {
    name: "Demokrasi Athena",
    description: "Memahami bahwa Athena menemukan demokrasi — sistem di mana warga negara laki-laki bebas memberikan suara secara langsung tentang kebijakan",
    evidence: [
      "Menjelaskan bagaimana demokrasi Athena berbeda dari demokrasi modern",
      "Menjelaskan siapa yang diizinkan untuk berpartisipasi",
      "Mendeskripsikan bagaimana keputusan dibuat di Athena"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan bahwa demokrasi — rakyat memberikan suara tentang keputusan — berasal dari Yunani Kuno?"
  },
  "mt_CSGqz245rV": {
    name: "Athena vs Sparta",
    description: "Membandingkan Athena dan Sparta sebagai dua kota Yunani yang sangat berbeda: Athena berfokus pada demokrasi dan seni, Sparta pada militer dan disiplin",
    evidence: [
      "Menyebutkan tiga perbedaan utama antara Athena dan Sparta",
      "Menjelaskan nilai-nilai yang diutamakan masing-masing kota",
      "Mendeskripsikan kehidupan sehari-hari di masing-masing kota"
    ],
    assessmentPrompt: "Jika kamu bertanya kepada {{name}} tentang Athena dan Sparta, bisakah mereka memberitahumu perbedaan utamanya?"
  },
  "mt_e1Yr6rhRNW": {
    name: "Pemberontakan Boudicca melawan Roma",
    description: "Menceritakan kisah Boudicca, ratu suku Iceni, yang memimpin pemberontakan sengit melawan pendudukan Romawi di Britania",
    evidence: [
      "Menjelaskan siapa Boudicca dan mengapa dia memberontak",
      "Mendeskripsikan hasil pemberontakan Boudicca",
      "Menjelaskan mengapa Boudicca dianggap sebagai pahlawan"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu siapa Boudicca dan apa yang terjadi ketika dia memberontak melawan Romawi?"
  },
  "mt_6nqVnVdexe": {
    name: "Kehidupan Sehari-hari di Kota Romawi",
    description: "Mendeskripsikan kehidupan sehari-hari di kota Romawi — forum (pasar dan tempat pertemuan), pemandian umum, dan teater",
    evidence: [
      "Menjelaskan fungsi forum dalam kehidupan kota Romawi",
      "Mendeskripsikan kegiatan di pemandian umum Romawi",
      "Menjelaskan hiburan dan rekreasi yang tersedia di kota Romawi"
    ],
    assessmentPrompt: "Jika keluargamu mengunjungi reruntuhan Romawi seperti pemandian atau Tembok Hadrian, bisakah {{name}} menjelaskan apa yang dulunya ada di sana?"
  },
  "mt_VP9yZJ1xeP": {
    name: "Gladiator dan Pompeii",
    description: "Mengetahui bahwa orang Romawi menonton gladiator bertarung di arena besar seperti Colosseum di Roma; Pompeii hancur oleh letusan Gunung Vesuvius",
    evidence: [
      "Menjelaskan siapa gladiator dan mengapa mereka bertarung",
      "Mendeskripsikan Colosseum dan acara yang diadakan di sana",
      "Menjelaskan apa yang terjadi pada Pompeii"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu apa itu gladiator, mendeskripsikan Colosseum, dan menjelaskan apa yang terjadi pada Pompeii?"
  },
  "mt_W_CNRTBgYR": {
    name: "Dewa dan Parthenon",
    description: "Menyebutkan dewa-dewa Yunani utama dan peran mereka — Zeus (raja, petir), Hera (ratu, pernikahan), dan lainnya; Parthenon didedikasikan untuk Athena",
    evidence: [
      "Menyebutkan setidaknya lima dewa Yunani dan domain mereka",
      "Menjelaskan mengapa Parthenon dibangun",
      "Mendeskripsikan hubungan antara agama dan kehidupan publik di Yunani"
    ],
    assessmentPrompt: "Jika {{name}} melihat gambar Parthenon, bisakah mereka memberitahumu untuk dewa mana kuil ini didedikasikan?"
  },
  "mt_FDKd7I79JZ": {
    name: "Dewa Yunani dengan Nama Romawi",
    description: "Memahami bahwa orang Romawi mengadopsi dewa-dewa Yunani tetapi memberi mereka nama baru — Zeus menjadi Jupiter, Hera menjadi Juno, dan seterusnya",
    evidence: [
      "Menyebutkan setidaknya tiga dewa Yunani dan nama Romawi mereka",
      "Menjelaskan mengapa dewa-dewa ini memiliki nama berbeda",
      "Mendeskripsikan kesamaan dan perbedaan antara kedua versi"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu bahwa orang Romawi memiliki dewa yang sama dengan orang Yunani tetapi dengan nama berbeda?"
  },
  "mt_f4O__f3OU4": {
    name: "Teater Yunani",
    description: "Mengetahui bahwa orang Yunani Kuno menemukan teater, mengadakan pertunjukan tragedi dan komedi di amphitheater terbuka",
    evidence: [
      "Menjelaskan bagaimana teater Yunani berbeda dari teater modern",
      "Menyebutkan perbedaan antara tragedi dan komedi Yunani",
      "Mendeskripsikan bagaimana penonton berpartisipasi dalam pertunjukan"
    ],
    assessmentPrompt: "Jika {{name}} mengunjungi amphitheater kuno atau melihat gambar, bisakah mereka menjelaskan seperti apa pertunjukan teater di sana?"
  },
  "mt_MlD0gwLSw9": {
    name: "Tentara Romawi dan Penaklukan Britania",
    description: "Mendeskripsikan bagaimana tentara Romawi diorganisasi menjadi legiun prajurit terlatih tinggi yang menaklukkan dan membangun jalan di seluruh kekaisaran",
    evidence: [
      "Menjelaskan struktur organisasi tentara Romawi",
      "Menjelaskan bagaimana Romawi menaklukkan Britania",
      "Mendeskripsikan warisan Romawi di Britania"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu bagaimana tentara Romawi diorganisasi dan bagaimana mereka mempengaruhi kehidupan di Inggris?"
  },
  "mt_XMz_ohNjYO": {
    name: "Kekaisaran Alexander Agung",
    description: "Mendeskripsikan bagaimana Alexander Agung dari Makedonia menaklukkan kekaisaran yang membentang dari Yunani hingga India",
    evidence: [
      "Menjelaskan siapa Alexander Agung dan pencapaiannya",
      "Menyebutkan wilayah yang ditaklukkannya",
      "Menjelaskan dampak penaklukan Alexander terhadap penyebaran budaya Yunani"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu siapa Alexander Agung, seberapa jauh dia menaklukkan, dan apa yang terjadi setelah kematiannya?"
  },
  "mt_N1744276Zu": {
    name: "Bukti Kehidupan Yunani dan Romawi",
    description: "Memahami bahwa sejarawan dan arkeolog menyusun bukti kehidupan Yunani dan Romawi Kuno dari berbagai sumber artefak dan tulisan",
    evidence: [
      "Menyebutkan tiga jenis bukti yang digunakan untuk mempelajari Yunani dan Romawi Kuno",
      "Menjelaskan bagaimana artefak memberikan informasi tentang kehidupan kuno",
      "Mendeskripsikan tantangan dalam menafsirkan bukti sejarah"
    ],
    assessmentPrompt: "Jika {{name}} melihat pot Yunani kuno atau koin Romawi di museum, bisakah mereka menjelaskan apa yang dapat dipelajari dari benda-benda ini?"
  },
  "mt_H4bLNkDrGJ": {
    name: "Jatuhnya Kekaisaran Romawi Barat",
    description: "Mendeskripsikan bagaimana Kekaisaran Romawi Barat secara bertahap menurun karena kombinasi tekanan eksternal, ketidakstabilan politik, dan masalah ekonomi",
    evidence: [
      "Menyebutkan tiga faktor yang berkontribusi terhadap jatuhnya Romawi",
      "Menjelaskan peran invasi barbar dalam kejatuhan Romawi",
      "Mendeskripsikan apa yang menggantikan Kekaisaran Romawi Barat"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa Kekaisaran Romawi runtuh dan apa yang terjadi setelahnya?"
  },
  "mt_lzCcQzPJZi": {
    name: "Arsitektur Yunani dan Romawi",
    description: "Mengidentifikasi gaya kolom Yunani — Doric (sederhana dan kokoh), Ionic (kapitel berbentuk gulungan), dan Corinthian (hiasan daun); mengenali pengaruh Romawi dalam bangunan modern",
    evidence: [
      "Membedakan setidaknya dua gaya kolom Yunani",
      "Menjelaskan pengaruh arsitektur Yunani dan Romawi pada bangunan modern",
      "Mengidentifikasi fitur arsitektur Romawi dalam lingkungan mereka"
    ],
    assessmentPrompt: "Jika kamu berjalan melewati pengadilan atau museum dengan kolom-kolom besar, bisakah {{name}} menjelaskan gaya arsitektur mana yang terinspirasi dari Yunani atau Romawi?"
  },
  "mt_Nj32xtOhno": {
    name: "Warisan Yunani dan Romawi Hari Ini",
    description: "Menilai kontribusi abadi peradaban Yunani dan Romawi terhadap kehidupan modern — mulai dari demokrasi dan hukum hingga bahasa dan arsitektur",
    evidence: [
      "Menyebutkan setidaknya lima hal yang kita miliki hari ini berkat Yunani atau Romawi",
      "Menjelaskan bagaimana warisan ini masih memengaruhi kehidupan kita",
      "Mendeskripsikan warisan budaya yang paling signifikan"
    ],
    assessmentPrompt: "Bisakah {{name}} menyebutkan beberapa hal yang masih kita miliki hari ini berkat Yunani dan Romawi Kuno?"
  },
  "mt_cUMUYkDqZp": {
    name: "Filsuf dan Kedokteran Yunani",
    description: "Mengetahui bahwa para pemikir Yunani yang disebut filsuf mengembangkan cara memahami dunia melalui akal dan pengamatan, termasuk Socrates, Plato, dan Aristotle",
    evidence: [
      "Menyebutkan tiga filsuf Yunani utama dan gagasan mereka",
      "Menjelaskan kontribusi Hippocrates terhadap kedokteran",
      "Mendeskripsikan bagaimana pemikiran Yunani memengaruhi ilmu pengetahuan modern"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu tentang Socrates, Plato, dan Aristotle dan mengapa pemikiran mereka masih penting hari ini?"
  },
  "mt_uzk7qs4KxE": {
    name: "Hukum Romawi, Bahasa Latin, dan Kekristenan",
    description: "Memahami bahwa hukum Romawi menjadi dasar untuk sistem hukum di seluruh Eropa; bahasa Latin menjadi dasar banyak bahasa modern; dan Kekristenan menyebar melalui kekaisaran Romawi",
    evidence: [
      "Menjelaskan bagaimana hukum Romawi memengaruhi hukum modern",
      "Menyebutkan bahasa modern yang berasal dari Latin",
      "Mendeskripsikan bagaimana Kekristenan menyebar melalui Kekaisaran Romawi"
    ],
    assessmentPrompt: "Bisakah {{name}} memberikan contoh bahasa Inggris yang berasal dari Latin dan menjelaskan mengapa bahasa Latin begitu berpengaruh?"
  },
  "mt_vFYFvgrPgD": {
    name: "Republik dan Kekaisaran Romawi",
    description: "Menjelaskan bagaimana Roma awalnya dipemerintahan sebagai republik — dengan konsul terpilih, senat yang kuat, dan asamblea rakyat — sebelum menjadi kekaisaran",
    evidence: [
      "Menjelaskan perbedaan antara Republik dan Kekaisaran Romawi",
      "Menyebutkan peristiwa penting yang menyebabkan perubahan ini",
      "Mendeskripsikan bagaimana kekuasaan bergeser dari senat ke kaisar"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan perbedaan antara Republik Romawi dan Kekaisaran Romawi?"
  },
  "mt_c-F__Qe23X": {
    name: "Sumber Tersembunyi Yunani dan Romawi",
    description: "Memeriksa kehidupan orang-orang yang biasanya ditinggalkan dari cerita Yunani dan Romawi — budak, wanita, anak-anak, dan orang miskin",
    evidence: [
      "Menjelaskan mengapa sumber-sumber ini sering tersembunyi",
      "Menyebutkan setidaknya dua kelompok yang terpinggirkan dalam masyarakat kuno",
      "Mendeskripsikan bagaimana sejarawan menemukan tentang kehidupan kelompok-kelompok ini"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu tentang kehidupan budak atau wanita di Yunani dan Romawi Kuno?"
  },
  "mt_EHiM4_qg1R": {
    name: "Pengurusan dan Pengucilan di Athena",
    description: "Menganalisis siapa yang dimasukkan dan dikecualikan dari demokrasi Athena — hanya warga negara laki-laki bebas dewasa yang memiliki hak penuh",
    evidence: [
      "Menyebutkan tiga kelompok yang dikecualikan dari demokrasi Athena",
      "Menjelaskan dampak pengucilan ini terhadap masyarakat",
      "Membandingkan hak di Athena dengan hak di masyarakat modern"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan siapa yang ditinggalkan dari demokrasi Athena dan mengapa ini penting?"
  },
  "mt_aXNlkbAeIk": {
    name: "Troy: Mitos atau Sejarah?",
    description: "Menjelaskan bagaimana penggalian Heinrich Schliemann di Hisarlik di Turki modern memicu debat tentang apakah Perang Troya benar-benar terjadi",
    evidence: [
      "Menjelaskan siapa Schliemann dan apa yang dia temukan",
      "Menyebutkan bukti yang mendukung kemungkinan Perang Troya",
      "Mendeskripsikan perbedaan antara mitos dan sejarah"
    ],
    assessmentPrompt: "Bisakah {{name}} mendiskusikan apakah Perang Troya benar-benar terjadi dan bagaimana kita bisa mengetahuinya?"
  },
  "mt__o3TCmfomv": {
    name: "Jatuhnya Republik Romawi",
    description: "Menelusuri bagaimana kekerasan politik Romawi — pembunuhan bersaudara Gracchus, perang saudara, dan diktator — menghancurkan republik",
    evidence: [
      "Menyebutkan peristiwa kunci yang melemahkan Republik",
      "Menjelaskan peran Julius Caesar dalam jatuhnya Republik",
      "Mendeskripsikan bagaimana Kekaisaran menggantikan Republik"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan rantai peristiwa yang menghancurkan Republik Romawi?"
  },
  "mt_2GDBmKCJxs": {
    name: "Berbeda Akun tentang Peristiwa yang Sama",
    description: "Mengakui bahwa orang yang berbeda dapat memberikan akun yang berbeda tentang peristiwa yang sama — dan penting untuk mempertimbangkan berbagai sudut pandang",
    evidence: [
      "Menjelaskan mengapa dua saksi dapat melihat peristiwa yang sama secara berbeda",
      "Menyebutkan faktor-faktor yang memengaruhi bagaimana orang mengingat peristiwa",
      "Mendeskripsikan bagaimana sejarawan menangani akun yang berlawanan"
    ],
    assessmentPrompt: "Jika {{name}} mendengar dua versi berbeda dari peristiwa sejarah yang sama, bisakah mereka menjelaskan mengapa bisa terjadi perbedaan?"
  },
  "mt_9REmUc8r4D": {
    name: "Bukti dari Masa Lalu",
    description: "Memahami bahwa semua yang kita ketahui tentang masa lalu berasal dari bukti — benda-benda, tulisan, gambar, dan penemuan arkeologi",
    evidence: [
      "Menjelaskan berbagai jenis bukti sejarah",
      "Menjelaskan bagaimana bukti membantu kita memahami masa lalu",
      "Mendeskripsikan tantangan dalam menginterpretasikan bukti"
    ],
    assessmentPrompt: "Ketika {{name}} mempelajari sesuatu yang terjadi lama sekali, bisakah mereka menjelaskan bagaimana kita mengetahuinya?"
  },
  "mt_VXcua6-txq": {
    name: "Kosakata: Pemikiran Sejarah",
    description: "Mengetahui dan menggunakan kosakata pemikiran sejarah — sumber, bukti, sumber primer, sumber sekunder, interpretasi",
    evidence: [
      "Menggunakan setidaknya empat istilah pemikiran sejarah dengan benar",
      "Menjelaskan perbedaan antara sumber primer dan sekunder",
      "Menggunakan kosakata sejarah secara tepat dalam diskusi"
    ],
    assessmentPrompt: "Jika kamu bertanya kepada {{name}} apakah sesuatu yang mereka baca dalam buku sejarah adalah fakta atau pendapat, bisakah mereka menjelaskan perbedaannya?"
  },
  "mt_wWlZoLQBR6": {
    name: "Mengecek Sumber satu sama lain",
    description: "Menguatkan: memeriksa apakah beberapa sumber setuju tentang fakta yang sama — dan menyelidiki saat mereka tidak setuju",
    evidence: [
      "Menjelaskan mengapa penting untuk membandingkan beberapa sumber",
      "Menyebutkan apa yang harus dilakukan saat sumber tidak setuju",
      "Mendeskripsikan proses verifikasi sumber sejarah"
    ],
    assessmentPrompt: "Jika {{name}} mencoba mencari tahu apa yang benar-benar terjadi dalam peristiwa sejarah, bisakah mereka menjelaskan langkah-langkah yang harus diambil?"
  },
  "mt_TTzJTF-OkG": {
    name: "Mempertanyakan Sumber Sejarah",
    description: "Sebelum mempercayai sumber sejarah, tanyakan: siapa yang membuat ini, kapan, dan mengapa? — jawaban dapat mengubah interpretasi kita",
    evidence: [
      "Menyebutkan tiga pertanyaan kunci untuk ditanyakan tentang sumber sejarah",
      "Menjelaskan bagaimana tujuan pembuat sumber memengaruhi isinya",
      "Mendeskripsikan bagaimana waktu pembuatan memengaruhi reliabilitas sumber"
    ],
    assessmentPrompt: "Ketika {{name}} melihat dokumen sejarah, foto, atau artefak, bisakah mereka menjelaskan pertanyaan apa yang harus ditanyakan tentang siapa yang membuatnya?"
  },
  "mt_IlyE-Sm8k5": {
    name: "Memahami Orang di Waktu Mereka Sendiri",
    description: "Memahami bahwa orang di masa lalu melihat dunia dengan cara yang sangat berbeda dari kita — menilai mereka dengan standar waktu mereka sendiri",
    evidence: [
      "Menjelaskan mengapa penting untuk memahami konteks sejarah",
      "Menyebutkan contoh praktik masa lalu yang berbeda dari nilai-nilai modern",
      "Mendeskripsikan bagaimana sejarawan menangani perbedaan nilai ini"
    ],
    assessmentPrompt: "Jika {{name}} mempelajari bahwa orang di masa lalu melakukan sesuatu yang menurut kita salah, bisakah mereka menjelaskan mengapa penting untuk memahami konteks?"
  },
  "mt_Lu4H4mbsqO": {
    name: "Bukti vs Interpretasi",
    description: "Membedakan antara bukti sejarah dan interpretasi sejarah — bukti adalah fakta, interpretasi adalah penjelasan tentang fakta tersebut",
    evidence: [
      "Menjelaskan perbedaan antara bukti dan interpretasi",
      "Memberikan contoh bukti dan interpretasi yang berbeda dari peristiwa yang sama",
      "Mendeskripsikan bagaimana interpretasi dapat berubah dengan bukti baru"
    ],
    assessmentPrompt: "Bisakah {{name}} memahami bahwa dua sejarawan dapat melihat bukti yang sama dan membuat kesimpulan yang berbeda?"
  },
  "mt_R1xLS1c2Pg": {
    name: "Pakaian Abad Pertengahan",
    description: "Apa yang dikenakan orang di zaman abad pertengahan: pakaian petani (wol, linen) vs pakaian bangsawan (sutra, beludru); warna dan perhiasan menunjukkan status",
    evidence: [
      "Membedakan pakaian petani dan bangsawan",
      "Menjelaskan bagaimana pakaian menunjukkan status sosial",
      "Menyebutkan bahan dan warna yang digunakan oleh kelas yang berbeda"
    ],
    assessmentPrompt: "Jika {{name}} melihat gambar orang abad pertengahan yang berbeda, bisakah mereka menjelaskan siapa yang kaya dan siapa yang miskin berdasarkan pakaiannya?"
  },
  "mt_2NKzPeLzIm": {
    name: "Makanan dan Pesta Abad Pertengahan",
    description: "Apa yang dimakan orang di zaman abad pertengahan: roti dan pottage untuk orang biasa, jamuan makan megah untuk bangsawan",
    evidence: [
      "Membedakan makanan petani dan bangsawan",
      "Menjelaskan makanan utama dalam diet abad pertengahan",
      "Mendeskripsikan seperti apa pesta abad pertengahan"
    ],
    assessmentPrompt: "Jika {{name}} menghadiri jamuan makan abad pertengahan, bisakah mereka mendeskripsikan seperti apa makanannya?"
  },
  "mt_0FYFiLTqx4": {
    name: "Robin Hood dan Raja Arthur",
    description: "Legenda Robin Hood (Hutan Sherwood, mencuri dari kaya untuk diberikan kepada miskin, Merry Men) dan Raja Arthur (Meja Bundar, Excalibur, Kastil Camelot)",
    evidence: [
      "Menceritakan kembali legenda Robin Hood atau Raja Arthur",
      "Menjelaskan nilai-nilai yang terkandung dalam legenda-legenda ini",
      "Menyebutkan elemen-elemen kunci dari cerita"
    ],
    assessmentPrompt: "Bisakah {{name}} menceritakan kisah Robin Hood atau Raja Arthur dan menjelaskan pelajaran yang terkandung di dalamnya?"
  },
  "mt_X5fdB4haHf": {
    name: "Viking",
    description: "Siapa Viking: pejuang dan pedagang pelaut dari Skandinavia; kapal panjang, penjarahan, dan pemukiman; dampak mereka terhadap Inggris dan Eropa",
    evidence: [
      "Menjelaskan siapa Viking dan dari mana asalnya",
      "Menyebutkan pencapaian Viking dalam navigasi dan eksplorasi",
      "Mendeskripsikan dampak Viking terhadap Inggris"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu siapa Viking, dari mana asalnya, dan mengapa mereka begitu ditakuti?"
  },
  "mt_PThM5P7Umd": {
    name: "Kehidupan Desa",
    description: "Kehidupan sehari-hari bagi orang biasa di desa abad pertengahan: rumah beratap jerami, pertanian, komunitas yang erat, dan musim yang menentukan kehidupan",
    evidence: [
      "Mendeskripsikan rumah dan kondisi hidup di desa abad pertengahan",
      "Menjelaskan pekerjaan sehari-hari petani abad pertengahan",
      "Mendeskripsikan struktur komunitas desa"
    ],
    assessmentPrompt: "Bisakah {{name}} mendeskripsikan seperti apa hari biasa bagi anak-anak di desa abad pertengahan?"
  },
  "mt_OiDHqtLoln": {
    name: "Pertempuran Hastings dan 1066",
    description: "Peristiwa 1066: kematian Edward sang Pengaku, tiga penuntut tahta, Pertempuran Stamford Bridge, dan Pertempuran Hastings yang mengubah Inggris selamanya",
    evidence: [
      "Menjelaskan urutan peristiwa tahun 1066",
      "Menyebutkan tiga penuntut tahta dan mengapa mereka berperang",
      "Menjelaskan dampak penaklukan Norman terhadap Inggris"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu apa yang terjadi pada tahun 1066, mengapa itu penting, dan bagaimana itu mengubah Inggris?"
  },
  "mt_doVAdMqfJg": {
    name: "Desain Kastil Melalui Zaman",
    description: "Bagaimana kastil dibangun dan berevolusi: dari kayu motte-and-bailey hingga batu keeps, lalu kastil concentric dengan pertahanan berlapis",
    evidence: [
      "Menjelaskan tiga tahap evolusi desain kastil",
      "Menyebutkan mengapa kastil berevolusi (serangan yang lebih baik memerlukan pertahanan yang lebih baik)",
      "Mendeskripsikan fitur kastil abad pertengahan akhir"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan bagaimana kastil berubah seiring waktu dan mendesain evolusinya?"
  },
  "mt_bjlY5TE1y-": {
    name: "Piramida Kekuasaan Abad Pertengahan",
    description: "Bagaimana masyarakat abad pertengahan diorganisasi: raja di puncak, diikuti tuan tanah, lalu ksatria, lalu petani; setiap tingkatan memiliki hak dan kewajiban",
    evidence: [
      "Menggambarkan piramida kekuasaan abad pertengahan",
      "Menjelaskan hubungan antara setiap tingkatan",
      "Mendeskripsikan hak dan kewajiban masing-masing kelas"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan sistem kelas abad pertengahan — siapa yang berada di mana dan mengapa?"
  },
  "mt_CqzsM0BDFP": {
    name: "Peperangan Pengepungan",
    description: "Bagaimana kastil diserang dan dipertahankan: senjata pengepungan (trebuchet, ram), taktik pertahanan, dan kondisi kehidupan selama pengepungan",
    evidence: [
      "Menyebutkan setidaknya tiga senjata pengepungan dan cara kerjanya",
      "Menjelaskan taktik pertahanan kastil",
      "Mendeskripsikan seperti apa kehidupan selama pengepungan"
    ],
    assessmentPrompt: "Jika {{name}} membaca tentang pengepungan abad pertengahan, bisakah mereka menjelaskan bagaimana kastil diserang dan dipertahankan?"
  },
  "mt_8oAzr0WxRb": {
    name: "Kematian Hitam",
    description: "Kematian Hitam tahun 1348-49: apa itu wabah, bagaimana cara penyebarannya, dampak dahsyatnya terhadap populasi dan masyarakat",
    evidence: [
      "Menjelaskan apa itu Kematian Hitam dan bagaimana cara penyebarannya",
      "Menyebutkan dampak wabah terhadap populasi Eropa",
      "Mendeskripsikan perubahan sosial yang terjadi setelah wabah"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu apa itu Kematian Hitam, bagaimana cara penyebarannya, dan apa dampaknya?"
  },
  "mt_Zy-CKUkq34": {
    name: "Perang Salib",
    description: "Akun yang disederhanakan tentang Perang Salib: mengapa orang Eropa bepergian ke Tanah Suci, pertempuran yang terjadi, dan warisan jangka panjang",
    evidence: [
      "Menjelaskan mengapa Perang Salib dimulai",
      "Menyebutkan beberapa peristiwa penting selama Perang Salib",
      "Mendeskripsikan dampak Perang Salib terhadap hubungan Timur-Barat"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan apa itu Perang Salib dan mendeskripsikan beberapa peristiwa penting?"
  },
  "mt_LuwHnQItF_": {
    name: "Gereja Abad Pertengahan",
    description: "Kekuatan besar Gereja abad pertengahan: biara dan kehidupan harian para biarawan; pengaruh gereja terhadap politik, pendidikan, dan kehidupan sehari-hari",
    evidence: [
      "Menjelaskan mengapa Gereja begitu kuat di abad pertengahan",
      "Mendeskripsikan kehidupan harian di biara",
      "Menjelaskan peran Gereja dalam pendidikan dan politik"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa Gereja menjadi bagian besar dari kehidupan abad pertengahan?"
  },
  "mt_6XnezHOcM3": {
    name: "Viking vs Anglo-Saxon",
    description: "Konflik antara Viking dan Anglo-Saxon untuk menguasai Inggris: serangan Viking, pembentukan Danelaw, dan pertempuran untuk kendali",
    evidence: [
      "Menjelaskan mengapa Viking dan Anglo-Saxon berperang",
      "Menyebutkan hasil konflik ini",
      "Mendeskripsikan bagaimana kedua budaya akhirnya bercampur"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu tentang pertarungan antara Viking dan Anglo-Saxon dan apa yang terjadi pada akhirnya?"
  },
  "mt_pitjUcaAdy": {
    name: "Seni dan Arsitektur",
    description: "Pencapaian budaya abad pertengahan: manuskrip beriluminasi, katedral Gotik (terbang penopang, jendela kaca patri), dan musik gereja",
    evidence: [
      "Mendeskripsikan manuskrip beriluminasi dan bagaimana cara pembuatannya",
      "Menjelaskan ciri khas arsitektur Gotik",
      "Menyebutkan pencapaian budaya abad pertengahan lainnya"
    ],
    assessmentPrompt: "Jika {{name}} mengunjungi katedral Gotik, bisakah mereka menunjukkan fitur-fitur khas dan menjelaskannya?"
  },
  "mt_3tQXH9GwIa": {
    name: "Kejahatan dan Hukuman",
    description: "Bagaimana keadilan bekerja di abad pertengahan: percobaan melalui cobaan, percobaan melalui pertarungan, peran gereja dalam pengadilan",
    evidence: [
      "Menjelaskan metode pengadilan abad pertengahan",
      "Menyebutkan hukuman untuk kejahatan yang berbeda",
      "Mendeskripsikan bagaimana sistem keadilan abad pertengahan berbeda dari modern"
    ],
    assessmentPrompt: "Bisakah {{name}} mendeskripsikan bagaimana penjahat ditangkap dan dihukum di abad pertengahan?"
  },
  "mt_8ShghTx0jd": {
    name: "Magna Carta dan Pembatasan Kekuasaan Kerajaan",
    description: "Raja John, pemberontakan baron, dan penandatanganan Magna Carta pada tahun 1215; apa isinya dan mengapa ini menjadi dasar hukum modern",
    evidence: [
      "Menjelaskan mengapa baron memberontak melawan Raja John",
      "Menyebutkan prinsip-prinsip utama Magna Carta",
      "Mendeskripsikan mengapa dokumen ini penting bagi hukum modern"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu apa itu Magna Carta dan mengapa dokumen 800 tahun ini masih penting?"
  },
  "mt_Ik-WC2ARPf": {
    name: "Warisan Abad Pertengahan dalam Kehidupan Modern",
    description: "Apa yang diberikan Abad Pertengahan kepada kita: Parlemen, universitas, hukum umum, arsitektur Gotik, bahasa Inggris, dan banyak lagi",
    evidence: [
      "Menyebutkan setidaknya lima warisan abad pertengahan yang masih kita miliki",
      "Menjelaskan bagaimana warisan ini masih memengaruhi kehidupan kita",
      "Mendeskripsikan warisan yang paling signifikan"
    ],
    assessmentPrompt: "Bisakah {{name}} menyebutkan beberapa hal yang masih kita miliki hari ini berkat Abad Pertengahan?"
  },
  "mt_eosO26KE-Z": {
    name: "Dunia Abad Pertengahan di Luar Eropa",
    description: "Dunia abad pertengahan di luar Eropa: Zaman Keemasan Islam (matematika, kedokteran, arsitektur), Kekaisaran Mongol, dan Tiongkok Song",
    evidence: [
      "Menyebutkan setidaknya tiga peradaban non-Eropa yang berkembang di Abad Pertengahan",
      "Menjelaskan kontribusi Zaman Keemasan Islam terhadap sains",
      "Mendeskripsikan pencapaian peradaban non-Eropa lainnya"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu tentang peradaban penting di luar Eropa selama Abad Pertengahan?"
  },
  "mt_rf23aL6KwH": {
    name: "Mesin Cetak dan Renaisans",
    description: "Penemuan mesin cetak oleh Gutenberg dan kedatangannya di Inggris dengan William Caxton; bagaimana cetak mengubah masyarakat",
    evidence: [
      "Menjelaskan bagaimana mesin cetak mengubah penyebaran informasi",
      "Menjelaskan dampak cetak terhadap literasi dan pendidikan",
      "Menyebutkan bagaimana Renaisans terkait dengan penemuan cetak"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa penemuan mesin cetak menjadi salah satu penemuan terpenting dalam sejarah?"
  },
  "mt_UMOjbmLcbM": {
    name: "Kota dan Perdagangan",
    description: "Pertumbuhan kota abad pertengahan: pasar, guild, kelas pedagang; bagaimana kota memenangkan hak istimewa dari raja",
    evidence: [
      "Menjelaskan mengapa kota abad pertengahan tumbuh",
      "Menyebutkan peran guild dalam perekonomian kota",
      "Mendeskripsikan bagaimana kota memperoleh hak istimewa"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa kota abad pertengahan tumbuh dan bagaimana rakyat memperoleh hak istimewa?"
  },
  "mt_uuB3owTqNY": {
    name: "Wanita di Abad Pertengahan",
    description: "Kehidupan wanita abad pertengahan: bangsawan yang mengelola tanah, pekerjaan keras petani, batasan hukum dan sosial, namun juga kontribusi yang sering terabaikan",
    evidence: [
      "Membandingkan kehidupan wanita dari kelas sosial yang berbeda",
      "Menjelaskan batasan yang dihadapi wanita abad pertengahan",
      "Menyebutkan kontribusi wanita terhadap masyarakat abad pertengahan"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahumu seperti apa kehidupan bagi wanita di Abad Pertengahan?"
  },
  // ==================== LEARNING TO LEARN ====================
  "mt_mvXufozy2s": {
    name: "Meminta Bantuan",
    description: "Minta bantuan ketika sudah mencoba sendiri dan masih bingung — mengetahui kapan harus meminta bantuan adalah keterampilan belajar",
    evidence: [
      "Meminta bantuan setelah mencoba sendiri, bukan sebelum mencoba",
      "Menjelaskan dengan jelas apa yang sudah dicoba dan di mana masih stuck",
      "Menerima bantuan dengan terbuka dan mencoba saran yang diberikan"
    ],
    assessmentPrompt: "Jika {{name}} sudah mencoba sesuatu dan masih bingung, apakah mereka datang meminta bantuan?"
  },
  "mt_8dstvf-KKb": {
    name: "Memeriksa Pekerjaan Sendiri",
    description: "Setelah menyelesaikan tugas, lihat kembali apa yang dilakukan dan tanyakan pada diri sendiri: apakah ini benar?",
    evidence: [
      "Melihat kembali pekerjaan setelah selesai",
      "Mengidentifikasi setidaknya satu kesalahan atau area perbaikan",
      "Mengecek ulang jawaban sebelum menyerahkan"
    ],
    assessmentPrompt: "Setelah {{name}} menyelesaikan pekerjaan atau aktivitas, apakah mereka melihatnya kembali sendiri sebelum menyerahkan?"
  },
  "mt_S4G6GLKr1-": {
    name: "Bertahan Saat Sulit",
    description: "Terus mencoba ketika sesuatu terasa sulit — membuat kesalahan dan mencoba lagi adalah cara belajar",
    evidence: [
      "Terus mencoba setidaknya dua kali sebelum menyerah",
      "Menggunakan strategi berbeda saat cara pertama tidak berhasil",
      "Tidak mudah menyerah saat menghadapi tantangan"
    ],
    assessmentPrompt: "Jika {{name}} menemukan teka-teki atau aktivitas yang sangat sulit, apakah mereka terus mencoba cara yang berbeda?"
  },
  "mt_klyw-tdlhP": {
    name: "Perasaan Tidak Paham",
    description: "Menyadari perasaan tidak paham — mengenali ketika sesuatu membingungkan daripada membaca tanpa pemahaman",
    evidence: [
      "Mengenali ketika sesuatu tidak masuk akal saat membaca atau mendengarkan",
      "Berhenti dan menandai bagian yang membingungkan",
      "Meminta klarifikasi atau membaca ulang bagian yang sulit"
    ],
    assessmentPrompt: "Jika {{name}} membaca atau mendengarkan dan sesuatu tidak masuk akal, apakah mereka menyadari dan melakukan sesuatu tentang itu?"
  },
  "mt_QR3vxbN1o4": {
    name: "Merencanakan Tugas",
    description: "Buat rencana sederhana sebelum memulai tugas: apa yang harus saya lakukan, dan apa yang harus dilakukan pertama?",
    evidence: [
      "Membuat rencana sebelum memulai tugas besar",
      "Menyebutkan langkah-langkah yang perlu diambil",
      "Mengikuti rencana sambil mengerjakan tugas"
    ],
    assessmentPrompt: "Sebelum {{name}} memulai tugas besar — seperti menulis cerita atau membuat proyek — apakah mereka membuat rencana sederhana?"
  },
  "mt_LE7nFEwS12": {
    name: "Berpikir Sebelum Memulai",
    description: "Sebelum memulai sesuatu yang baru, berhenti dan berpikir: apa yang sudah saya ketahui tentang topik ini?",
    evidence: [
      "Mengingat pengetahuan sebelumnya tentang topik",
      "Menyebutkan apa yang sudah diketahui sebelum memulai",
      "Menghubungkan topik baru dengan apa yang sudah dipelajari"
    ],
    assessmentPrompt: "Ketika {{name}} akan mempelajari sesuatu yang baru, apakah mereka berhenti dan berpikir tentang apa yang sudah mereka ketahui?"
  },
  "mt_32B7xjUPwF": {
    name: "Menghubungkan Ide Baru dan Lama",
    description: "Cari hubungan antara ide baru dan hal-hal yang sudah kamu ketahui — bagaimana ini cocok dengan apa yang sudah saya pelajari?",
    evidence: [
      "Menyebutkan hubungan antara topik baru dan pengetahuan sebelumnya",
      "Menggunakan analogi untuk menjelaskan konsep baru",
      "Menunjukkan bagaimana ide-ide saling terhubung"
    ],
    assessmentPrompt: "Ketika {{name}} mempelajari sesuatu yang baru, apakah mereka pernah mengatakan sesuatu seperti 'oh, ini seperti yang sudah saya pelajari'?"
  },
  "mt_wvcFlwOrDl": {
    name: "Mengenali Pola",
    description: "Mengenali pola dan struktur yang berulang — dalam angka, kata, alam, suara, atau peristiwa — dan menggunakannya untuk membantu belajar",
    evidence: [
      "Mengidentifikasi pola dalam berbagai konteks",
      "Menggunakan pola untuk membuat prediksi atau generalisasi",
      "Menggunakan pola untuk membantu mengingat informasi"
    ],
    assessmentPrompt: "Ketika {{name}} memperhatikan pola — seperti pola angka, akhiran kata, atau sesuatu yang berulang — apakah mereka menggunakannya?"
  },
  "mt_6eTZUwKQZr": {
    name: "Mengajarkan Kembali",
    description: "Setelah mempelajari sesuatu yang baru, jelaskan dengan kata-katamu sendiri — kepada diri sendiri, anggota keluarga, atau bahkan boneka",
    evidence: [
      "Menjelaskan apa yang dipelajari dengan kata-kata sendiri",
      "Menjawab pertanyaan tentang apa yang dipelajari",
      "Menjelaskan dengan cara yang dipahami orang lain"
    ],
    assessmentPrompt: "Setelah {{name}} mempelajari sesuatu di sekolah, bisakah mereka menjelaskannya kembali kepadamu dengan kata-kata mereka sendiri?"
  },
  "mt_95zxYqpP7m": {
    name: "Mencoba Pendekatan Baru",
    description: "Ketika pendekatan pertamamu tidak berhasil, coba yang berbeda — fleksibel tentang strategi adalah bagian dari menjadi pembelajar yang baik",
    evidence: [
      "Mengubah strategi saat cara pertama tidak berhasil",
      "Mencoba setidaknya dua pendekatan berbeda",
      "Tidak menggunakan cara yang sama berulang kali jika tidak berhasil"
    ],
    assessmentPrompt: "Jika {{name}} mencoba satu cara untuk menyelesaikan masalah dan tidak berhasil, apakah mereka mencoba cara yang berbeda?"
  },
  "mt_hbe_kdE_7C": {
    name: "Mendeskripsikan Aturan dan Pola",
    description: "Ketika kamu memperhatikan pola berulang, deskripsikan sebagai aturan yang bekerja setiap kali — lalu uji apakah itu benar",
    evidence: [
      "Mengidentifikasi aturan dari pola yang diamati",
      "Menguji aturan untuk memastikan kebenarannya",
      "Menggunakan aturan untuk memprediksi hasil baru"
    ],
    assessmentPrompt: "Jika {{name}} mengenali pola — seperti aturan tata bahasa atau pola angka — bisakah mereka menjelaskan aturannya dan mengujinya?"
  },
  "mt_TDUpy57QVM": {
    name: "Belajar dari Kesalahan",
    description: "Ketika kamu salah, cari tahu mengapa — apa yang kamu salah pahami atau lewatkan? Menganalisis kesalahan membantu kamu memperbaiki pemahaman",
    evidence: [
      "Melihat kesalahan untuk memahami penyebabnya",
      "Menjelaskan apa yang salah pahami atau dilupakan",
      "Menggunakan wawasan dari kesalahan untuk memperbaiki pemahaman"
    ],
    assessmentPrompt: "Ketika {{name}} salah dalam tes atau aktivitas, apakah mereka melihat kesalahan tersebut untuk memahami apa yang salah?"
  },
  "mt_99G6Msdzw-": {
    name: "Mentransfer Keterampilan",
    description: "Mengenali ketika keterampilan atau strategi yang dipelajari dalam satu mata pelajaran atau situasi dapat diterapkan di konteks yang sama sekali berbeda",
    evidence: [
      "Mengidentifikasi keterampilan yang dapat ditransfer antar subjek",
      "Menggunakan strategi dari satu subjek di subjek lain",
      "Menjelaskan bagaimana keterampilan yang sama berlaku dalam situasi berbeda"
    ],
    assessmentPrompt: "Apakah {{name}} pernah menyadari bahwa sesuatu yang mereka pelajari di satu mata pelajaran juga berguna di mata pelajaran lain?"
  },
  "mt_Y6P9y1Rz-u": {
    name: "Memahami Mengapa",
    description: "Melampaui mengetahui *bahwa* sesuatu benar — tanyakan *mengapa* itu benar dan *bagaimana* cara kerjanya",
    evidence: [
      "Mengajukan pertanyaan 'mengapa' dan 'bagaimana' tentang fakta",
      "Menjelaskan alasan di balik fakta, bukan hanya menyebutkan fakta",
      "Mencari pemahaman yang lebih dalam tentang topik"
    ],
    assessmentPrompt: "Apakah {{name}} sering bertanya 'tapi mengapa?' ketika mereka mempelajari fakta — ingin memahami alasan di baliknya?"
  },
  "mt_q7zxOloj_L": {
    name: "Memilih Strategi",
    description: "Sebelum memulai tugas belajar, pilih strategi yang disengaja; setelah selesai, evaluasi secara jujur apakah strategi itu berhasil",
    evidence: [
      "Memilih strategi sebelum memulai tugas belajar",
      "Mengevaluasi efektivitas strategi setelah selesai",
      "Menyesuaikan strategi berdasarkan hasil evaluasi"
    ],
    assessmentPrompt: "Apakah {{name}} pernah membicarakan *bagaimana* mereka akan belajar atau berlatih sesuatu sebelum memulai?"
  },
  "mt_v5yDTWEiyQ": {
    name: "Refleksi Setelah Belajar",
    description: "Setelah menyelesaikan sesi belajar, renungkan prosesnya: apa yang paling membantu, apa yang membingungkan, dan apa yang akan dilakukan secara berbeda",
    evidence: [
      "Merefleksikan apa yang berhasil dan tidak berhasil",
      "Mengidentifikasi area untuk perbaikan",
      "Merencanakan strategi yang berbeda untuk sesi belajar berikutnya"
    ],
    assessmentPrompt: "Setelah {{name}} menyelesaikan proyek atau topik di sekolah, apakah mereka merenungkan bagaimana cara belajar mereka?"
  },
  "mt_2uHYdoxD0H": {
    name: "Menemukan Kesenjangan Pengetahuan",
    description: "Tinjau pemahamanmu tentang seluruh topik — identifikasi di mana pengetahuanmu solid, di mana lemah, dan di mana tidak ada sama sekali",
    evidence: [
      "Mengidentifikasi bagian topik yang sudah dipahami dengan baik",
      "Menunjukkan area di mana pengetahuan masih kurang",
      "Membuat rencan untuk mengisi kesenjangan pengetahuan"
    ],
    assessmentPrompt: "Jika kamu bertanya kepada {{name}} seberapa baik mereka memahami seluruh topik, bisakah mereka memberitahumu bagian mana yang sudah dikuasai dan bagian mana yang perlu dipelajari lebih?"
  },
  "mt_jIszRCO2ij": {
    name: "Menetapkan Tujuan Belajar",
    description: "Tetapkan tujuan belajar yang spesifik, kerjakan dengan rencana yang disengaja, lalu evaluasi secara jujur apakah kamu mencapainya",
    evidence: [
      "Menetapkan tujuan belajar yang spesifik dan terukur",
      "Membuat rencana untuk mencapai tujuan",
      "Mengevaluasi pencapaian tujuan secara jujur"
    ],
    assessmentPrompt: "Apakah {{name}} pernah menetapkan tujuan belajar yang spesifik — seperti 'saya ingin bisa menghafal tabel perkalian' — dan bekerja menuju tujuan itu?"
  },

  // ==================== PERSONAL & SOCIAL DEVELOPMENT ====================
  // --- Emotional Literacy ---
  "mt_kvrvpQris4": {
    name: "Mengekspresikan Perasaan dengan Kata-kata",
    description: "Mengekspresikan perasaan sendiri secara tepat menggunakan kata-kata bukan tindakan — mengatakan 'Aku merasa marah karena...' alih-alih memukul, berteriak, atau menarik diri",
    evidence: [
      "Menggunakan pernyataan 'Aku merasa ___ ketika ___' selama pertengkaran",
      "Memilih untuk memberitahu orang dewasa tentang perasaannya alih-alih bertindak secara fisik",
      "Mendeskripsikan perasaannya tentang situasi sulit menggunakan setidaknya dua kata emosi"
    ],
    assessmentPrompt: "Ketika {{name}} frustrasi — misalnya saudara mengambil mainannya — apakah mereka menggunakan kata-kata untuk mengungkapkan perasaannya alih-alih merebutnya kembali atau menangis?"
  },
  "mt_ggcamLzXAy": {
    name: "Perasaan Berubah dan Berbeda",
    description: "Memahami bahwa semua orang memiliki perasaan, bahwa perasaan berubah sepanjang hari, dan bahwa peristiwa yang sama bisa membuat orang yang berbeda merasakan hal yang berbeda",
    evidence: [
      "Memberikan contoh waktu ketika perasaan mereka berubah dalam satu hari",
      "Menjelaskan mengapa dua anak mungkin merasa berbeda tentang peristiwa yang sama",
      "Mengenali bahwa perasaan bersifat sementara dan bisa berubah"
    ],
    assessmentPrompt: "Jika Anda dan {{name}} menonton film yang sama dan Anda merasa lucu tetapi {{name}} merasa menakutkan, bisakah mereka memahami mengapa kalian berdua merasa berbeda?"
  },
  "mt_LhkP_KKIRS": {
    name: "Menamakan Emosi Dasar",
    description: "Menamakan dan mengenali emosi dasar — senang, sedih, marah, takut, bersemangat, dan terkejut — pada diri sendiri dan orang lain dengan melihat ekspresi wajah dan bahasa tubuh",
    evidence: [
      "Mengidentifikasi setidaknya lima emosi dasar dari gambar atau situasi nyata",
      "Mencocokkan ekspresi wajah dengan kata emosi dalam kegiatan pengurutan",
      "Mengatakan 'Aku merasa ___' menggunakan kata emosi yang benar saat ditanya tentang hari mereka"
    ],
    assessmentPrompt: "Jika {{name}} melihat teman menangis di pesta ulang tahun, bisakah mereka memberitahu Anda apa yang mungkin dirasakan teman itu dan menamakan emosinya?"
  },
  "mt_9Y5-GjF2B0": {
    name: "Pemicu dan Penyebab Perasaan",
    description: "Memahami bahwa perasaan memiliki penyebab — sesuatu terjadi (pemicu) dan itu membuat kita merasa dengan cara tertentu — dan mulai mengidentifikasi apa yang memicu emosi mereka sendiri",
    evidence: [
      "Mendeskripsikan pemicu untuk setidaknya tiga emosi berbeda dari pengalaman mereka sendiri",
      "Melengkapi kalimat 'Aku merasa ___ karena ___' dengan benar",
      "Mengidentifikasi apa yang membuat karakter dalam cerita merasa dengan cara tertentu"
    ],
    assessmentPrompt: "Ketika {{name}} sedih tentang sesuatu di sekolah, bisakah mereka menjelaskan kepada Anda apa yang terjadi sehingga mereka merasa seperti itu?"
  },
  "mt_E5ju6kQSu3": {
    name: "Perasaan Tersembunyi dan Terselubung",
    description: "Mengenali bahwa orang terkadang menyembunyikan atau menyamarkan perasaan sebenarnya — tersenyum saat sebenarnya sedih, atau mengatakan 'Aku baik-baik saja' padahal tidak — dan memahami mengapa seseorang mungkin melakukan ini",
    evidence: [
      "Memberikan contoh waktu seseorang mungkin menyembunyikan perasaan mereka dan menjelaskan mengapa",
      "Mengidentifikasi ketidakcocokan antara kata-kata seseorang dan bahasa tubuh mereka",
      "Menjelaskan bahwa menyembunyikan perasaan adalah hal umum tetapi biasanya lebih baik berbagi dengan orang yang dipercaya"
    ],
    assessmentPrompt: "Jika teman di sekolah mengatakan 'Aku baik-baik saja' tetapi terlihat terganggu dan sangat pendiam, bisakah {{name}} mengenali bahwa teman itu mungkin sebenarnya tidak baik-baik saja?"
  },
  "mt_Ytd8XC3eQr": {
    name: "Bagaimana Emosi Terasa di Tubuh",
    description: "Memahami hubungan antara emosi dan tubuh — mengenali sinyal fisik seperti perut gugup (gugup), kepalan tangan (marah), detak jantung cepat (takut atau bersemangat), dan bahu kencang (stres)",
    evidence: [
      "Menyebutkan setidaknya tiga sensasi tubuh dan mencocokkannya dengan emosi yang ditandainya",
      "Memperhatikan perasaan fisik di tubuh mereka sendiri dan mengidentifikasi emosi di baliknya",
      "Menjelaskan mengapa tubuh bereaksi secara fisik ketika kita memiliki emosi yang kuat"
    ],
    assessmentPrompt: "Sebelum pertunjukan sekolah atau hari olahraga, bisakah {{name}} memperhatikan dan memberitahu Anda tentang perasaan fisik di tubuh mereka — seperti perut gugup — dan menghubungkannya dengan gugup atau bersemangat?"
  },
  "mt_rymBfJmvFl": {
    name: "Emosi Ringan hingga Kuat",
    description: "Memahami bahwa emosi datang dalam intensitas berbeda — dari ringan hingga kuat — dan bahwa emosi yang sama bisa terasa sangat berbeda tergantung seberapa intensnya (misalnya, kesal → marah → sangat marah, atau gugup → cemas → panik)",
    evidence: [
      "Mengurutkan tiga kata emosi terkait dari ringan ke kuat",
      "Mengukur emosi mereka sendiri pada skala sederhana (misal, 1-5) dalam situasi nyata",
      "Menjelaskan mengapa mengenali intensitas penting untuk memilih cara merespons"
    ],
    assessmentPrompt: "Bisakah {{name}} membedakan antara sedikit kesal karena kalah permainan dan benar-benar sangat marah — dan menjelaskan bahwa itu adalah tingkatan perasaan yang berbeda?"
  },
  "mt_nIl1kKZHsk": {
    name: "Budaya dan Pengalaman Membentuk Emosi",
    description: "Memahami bahwa respons emosional dibentuk oleh pengalaman pribadi, budaya, dan konteks — situasi yang sama memicu emosi berbeda pada orang yang berbeda karena latar belakang dan pengalaman masa lalu mereka",
    evidence: [
      "Menjelaskan mengapa dua orang mungkin memiliki reaksi emosional yang sangat berbeda terhadap peristiwa yang sama",
      "Memberikan contoh bagaimana pengalaman masa lalu membentuk respons emosional seseorang",
      "Mendeskripsikan bagaimana latar belakang budaya mungkin mempengaruhi apa yang membuat seseorang merasa bangga atau malu"
    ],
    assessmentPrompt: "Jika satu anak di kelas {{name}} menjadi sangat takut selama badai petir sementara yang lain menganggapnya menarik, bisakah {{name}} memahami bahwa anak yang takut itu mungkin pernah memiliki pengalaman menakutkan dengan badai sebelumnya?"
  },
  "mt_cEQqskOaoo": {
    name: "Pola Emosional dari Waktu ke Waktu",
    description: "Merefleksikan pola emosional sendiri dari waktu ke waktu — memperhatikan pemicu yang berulang, memahami respons khas mereka, dan mengenali bagaimana kesadaran emosional mereka telah berkembang",
    evidence: [
      "Mengidentifikasi pemicu emosional yang berulang dan respons khas mereka terhadapnya",
      "Mendeskripsikan bagaimana pemahaman emosional mereka telah berubah dibandingkan saat mereka lebih muda",
      "Menetapkan tujuan pribadi yang berkaitan dengan kesadaran emosional, seperti memperhatikan kapan stres meningkat"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahu Anda sesuatu seperti 'Aku selalu stres sebelum ujian tetapi aku telah belajar bahwa itu normal bagiku' — menunjukkan bahwa mereka memahami pola emosional mereka sendiri?"
  },
  "mt_KA5j5OeGvw": {
    name: "Emosi dan Pengambilan Keputusan",
    description: "Memahami bagaimana emosi mempengaruhi pemikiran dan pengambilan keputusan — bahwa perasaan yang kuat bisa mengaburkan penilaian, bahwa kita sering membuat pilihan yang berbeda saat tenang dibandingkan saat terganggu, dan bahwa mengenali ini memberi kita lebih banyak kendali",
    evidence: [
      "Memberikan contoh waktu emosi yang kuat membawa mereka atau orang lain ke keputusan yang buruk",
      "Menjelaskan gagasan 'menenangkan diri' sebelum membuat pilihan penting",
      "Mendeskripsikan bagaimana situasi yang sama terlihat berbeda saat Anda tenang dibandingkan saat terganggu"
    ],
    assessmentPrompt: "Jika {{name}} mengirim pesan marah kepada teman selama pertengkaran dan kemudian menyesal, bisakah mereka menjelaskan bagaimana kemarahan mereka mempengaruhi keputusan mereka dan apa yang mungkin mereka lakukan berbeda lain kali?"
  },
  "mt_dlm3NspUyy": {
    name: "Perasaan Campuran dan Bertentangan",
    description: "Memahami bahwa orang bisa mengalami perasaan campuran atau bertentangan pada saat yang sama — merasa bersemangat dan gugup tentang memulai sekolah baru, atau senang untuk teman yang menang tetapi kecewa untuk diri sendiri",
    evidence: [
      "Mendeskripsikan situasi pribadi di mana mereka merasakan dua emosi secara bersamaan",
      "Menjelaskan mengapa perasaan campuran adalah hal normal dan bukan sesuatu yang perlu dikhawatirkan",
      "Mengidentifikasi emosi campuran pada karakter dari buku atau film"
    ],
    assessmentPrompt: "Ketika sahabat {{name}} terpilih untuk tim dan mereka tidak, bisakah {{name}} menjelaskan bahwa mereka merasa senang untuk temannya DAN kecewa untuk diri sendiri pada saat yang sama?"
  },
  "mt_gf4RUcACLg": {
    name: "Sains Otak tentang Emosi",
    description: "Memahami bagaimana amigdala memicu respons emosional dan bagaimana korteks prefrontal (masih berkembang pada masa remaja) mengaturnya; menjelaskan mengapa hormon stres (kortisol, adrenalin) mempengaruhi pemikiran dan memori; memahami bahwa sistem dopamin otak remaja membuat perasaan lebih intens; membedakan antara regulasi emosi (mengelola perasaan secara efektif) dan penekanan emosi (menekan perasaan, yang kontraproduktif); memperkenalkan reappraisal kognitif sebagai teknik berbasis penelitian untuk mengubah cara kita menafsirkan situasi",
    evidence: [],
    assessmentPrompt: "Bisakah {{name}} menjelaskan, dalam istilah dasar, mengapa remaja cenderung merasakan emosi lebih intens daripada orang dewasa — apa yang terjadi di otak yang berkembang yang membuat perasaan begitu kuat selama masa remaja, dan apa bedanya mengelola perasaan dengan menekan perasaan?"
  },
  "mt_p-8Hlf6_9k": {
    name: "Identitas dan Kepemilikan di Masa Remaja",
    description: "Memahami bahwa masa remaja melibatkan konstruksi aktif identitas, yang mengarah pada kompleksitas emosional seputar pertanyaan 'siapa aku?'; menjelajahi dinamika emosional menjadi bagian dari beberapa kelompok secara bersamaan (keluarga, kelompok sebaya, identitas budaya atau agama); memahami perbandingan sosial dan peningkatannya melalui media sosial; mengenali bahwa identitas tidak tetap dan ketidakpastian tentang identitas adalah hal normal, bukan tanda kegagalan; mengembangkan bahasa untuk menavigasi emosi yang terkait dengan keanggotaan kelompok dan nilai-nilai pribadi",
    evidence: [],
    assessmentPrompt: "Jika {{name}} mengalami masa merasa tidak yakin tentang siapa mereka atau di mana mereka berada, bisakah mereka menjelaskan mengapa ketidakpastian semacam ini adalah bagian yang sepenuhnya normal dan bahkan perlu dari masa remaja — bukan tanda ada yang salah?"
  },
  "mt_mydcMoa8gN": {
    name: "Kecerdasan Emosional",
    description: "Memperkenalkan model kecerdasan emosional Goleman (kesadaran diri, regulasi diri, motivasi, empati, keterampilan sosial); mengembangkan kosakata untuk keadaan emosional yang kompleks (ambivalensi, kebosanan, schadenfreude, kekaguman, nostalgia, disonansi kognitif); memahami bukti yang menghubungkan kecerdasan emosional dengan kesejahteraan, kualitas hubungan, dan hasil kehidupan jangka panjang; merefleksikan pertumbuhan emosional pribadi selama tahun-tahun sekolah menengah; menjelajahi hubungan antara literasi emosional dan kesehatan mental, dan mengetahui kapan harus mencari dukungan profesional",
    evidence: [],
    assessmentPrompt: "Bisakah {{name}} mendeskripsikan situasi nyata di mana kesadaran akan emosi mereka sendiri — mengetahui apa yang mereka rasakan dan mengapa — membantu mereka menangani momen sulit dengan lebih baik daripada jika mereka hanya bereaksi secara otomatis?"
  },
  // --- Empathy & Social Awareness ---
  "mt_lAvS72LOUO": {
    name: "Kebaikan dan Kepedulian Sehari-hari",
    description: "Menunjukkan kebaikan dan kepedulian kepada orang lain dengan cara sederhana sehari-hari — menghibur teman yang sedih, membantu orang yang menjatuhkan barang, berbagi tanpa diminta, dan mengucapkan kata-kata yang baik",
    evidence: [
      "Secara spontan menawarkan kenyamanan kepada seseorang yang terlihat sedih",
      "Membantu orang lain dengan tugas praktis tanpa diminta",
      "Menggunakan kata-kata yang baik untuk menyemangati atau menghibur seseorang yang kesulitan"
    ],
    assessmentPrompt: "Jika anak kecil di sekolah terjatuh di lapangan, apakah {{name}} datang membantu atau menghibur mereka tanpa disuruh oleh orang dewasa?"
  },
  "mt_wzUzVEBqJb": {
    name: "Perasaan dan Pikiran Orang Lain",
    description: "Memahami bahwa orang lain memiliki perasaan dan pikiran mereka sendiri, dan bahwa itu mungkin berbeda dari milik Anda — kesadaran dasar bahwa tidak semua orang melihat atau merasakan hal yang sama",
    evidence: [
      "Menyatakan bahwa orang lain bisa merasa berbeda tentang hal yang sama",
      "Memberikan contoh waktu seseorang merasa berbeda dari mereka tentang situasi yang sama",
      "Menerima perasaan anak lain sebagai sah meskipun berbeda dari milik mereka"
    ],
    assessmentPrompt: "Jika {{name}} suka anjing tetapi temannya takut anjing, bisakah {{name}} memahami bahwa ketakutan temannya itu nyata meskipun mereka tidak merasakannya sendiri?"
  },
  "mt_OJVkWvIaM_": {
    name: "Kesamaan & Perbedaan",
    description: "Memperhatikan dan menghargai cara orang serupa dan berbeda satu sama lain — termasuk penampilan, struktur keluarga, bahasa yang digunakan, makanan yang dimakan, dan perayaan yang diamati — dan memahami bahwa perbedaan membuat komunitas menjadi menarik",
    evidence: [
      "Menyebutkan beberapa cara orang di kelas atau komunitas mereka berbeda satu sama lain",
      "Mendeskripsikan setidaknya satu hal yang mereka pelajari dari seseorang yang berbeda dari mereka",
      "Mengekspresikan sikap positif tentang perbedaan alih-alih menghakimi"
    ],
    assessmentPrompt: "Bisakah {{name}} berbicara secara positif tentang bagaimana keluarga di kelas mereka berbeda — beberapa memiliki dua ibu, beberapa berbicara bahasa lain di rumah, beberapa merayakan hari libur yang berbeda — dan melihat ini sebagai menarik bukan aneh?"
  },
  "mt_wRlf0g2MbB": {
    name: "Kosakata: Memahami Orang Lain",
    description: "Mengetahui dan menggunakan kosakata kunci untuk memahami orang lain — empati, perspektif, baik, adil, komunitas, serupa, berbeda, dan peduli — dan memahami bahwa kata-kata ini menggambarkan kebiasaan berpikir dan merasa yang nyata",
    evidence: [
      "Menggunakan kata 'empati' dengan benar dan membedakannya dari 'simpati' — misalnya 'Empati berarti aku berusaha merasakan apa yang mereka rasakan'",
      "Menjelaskan apa arti 'perspektif' dan 'sudut pandang' dan mendemonstrasikannya dengan mendeskripsikan bagaimana dua orang mungkin melihat peristiwa yang sama secara berbeda",
      "Menggunakan kata-kata seperti 'komunitas', 'kepemilikan', dan 'inklusif' dengan tepat saat berbicara tentang sekolah atau lingkungan mereka"
    ],
    assessmentPrompt: "Ketika {{name}} melihat seseorang yang tampak sedih atau tersisihkan, bisakah mereka mendeskripsikan apa yang mungkin dirasakan orang itu menggunakan kata-kata seperti 'empati' atau 'perspektif' — menunjukkan bahwa mereka memikirkan orang lain, bukan hanya diri sendiri?"
  },
  "mt_S7UTAhptLi": {
    name: "Kehidupan dan Pengalaman yang Berbeda",
    description: "Memahami bahwa kehidupan dan pengalaman orang bisa sangat berbeda dari milik mereka — bahwa beberapa anak menghadapi tantangan seperti disabilitas, kemiskinan, kesulitan keluarga, atau baru pindah ke suatu negara — dan mengembangkan rasa simpati alih-alih penghakiman",
    evidence: [
      "Mendeskripsikan setidaknya dua cara pengalaman hidup anak lain mungkin sangat berbeda dari milik mereka",
      "Menjelaskan mengapa penting untuk tidak menghakimi seseorang berdasarkan keadaan mereka",
      "Menyarankan tindakan baik yang bisa mereka lakukan untuk membantu seseorang yang menghadapi situasi sulit"
    ],
    assessmentPrompt: "Jika anak baru masuk kelas {{name}} yang tidak banyak berbicara bahasa Inggris atau situasi keluarganya sangat berbeda, apakah {{name}} menunjukkan pemahaman dan berusaha memasukkannya alih-alih menghindarinya?"
  },
  "mt_mDp-1vlL3R": {
    name: "Keadilan, Kesetaraan dan Kequityan",
    description: "Memahami apa arti keadilan dan mengapa itu penting — mengenali bahwa adil tidak selalu berarti setara (semua orang mendapat hal yang sama) tetapi bisa berarti equitas (semua orang mendapat apa yang mereka butuhkan), dan menerapkan pemahaman ini dalam situasi kelompok",
    evidence: [
      "Menjelaskan perbedaan antara memperlakukan semua orang sama dan memperlakukan semua orang secara adil",
      "Memberikan contoh situasi di mana perlakuan setara tidak akan adil",
      "Menerapkan pemikiran keadilan saat berbagi sumber daya atau membuat keputusan kelompok"
    ],
    assessmentPrompt: "Jika anak dengan patah tangan mendapat waktu tambahan untuk menyelesaikan tugas di sekolah, bisakah {{name}} menjelaskan mengapa itu adil meskipun anak lain tidak mendapat waktu tambahan?"
  },
  "mt_9NQEiYLQA3": {
    name: "Melihat Sudut Pandang Orang Lain",
    description: "Melatih pengambilan perspektif dengan membayangkan bagaimana orang lain mungkin merasa dalam situasi tertentu — menggunakan panduan seperti 'Bagaimana perasaanmu jika itu terjadi padamu?' dan menerapkannya saat membaca cerita atau selama interaksi nyata",
    evidence: [
      "Mendeskripsikan bagaimana karakter dalam cerita merasa dan memberikan alasan berdasarkan alur cerita",
      "Memprediksi bagaimana anak lain akan merasa dalam skenario yang dideskripsikan",
      "Menggunakan pengambilan perspektif selama pertengkaran nyata untuk memahami sudut pandang orang lain"
    ],
    assessmentPrompt: "Saat membaca cerita bersama, bisakah {{name}} berhenti dan menjelaskan bagaimana karakter mungkin merasa dan mengapa — menempatkan diri mereka pada posisi karakter itu?"
  },
  "mt_a6AYrbb7x4": {
    name: "Kosakata: Kesadaran Sosial",
    description: "Mengetahui dan menggunakan kosakata kesadaran sosial — termasuk stereotip, pradiskriminasi, diskriminasi, kesetaraan, equitas, bias, simpati, dan keadilan — dan memahami apa yang membedakan konsep-konsep yang erat hubungannya ini",
    evidence: [
      "Menjelaskan apa arti 'stereotip' dan 'pradiskriminasi' dan memberikan contoh masing-masing dari kehidupan sehari-hari",
      "Menggunakan kata-kata seperti 'kesetaraan', 'equitas', dan 'bias' dengan benar saat mendiskusikan skenario — misalnya 'Itu bukan equitas karena tidak semua orang mendapat apa yang mereka butuhkan'",
      "Mengidentifikasi contoh diskriminasi dalam cerita atau artikel berita dan menjelaskan mengapa itu tidak adil menggunakan kosakata yang benar"
    ],
    assessmentPrompt: "Jika {{name}} mendengar sekelas mengatakan sesuatu yang mengelompokkan semua orang dari latar belakang tertentu bersama-sama, bisakah mereka menjelaskan mengapa itu stereotip dan bagaimana itu berbeda dari fakta tentang individu?"
  },
  "mt_HFN1pGASpZ": {
    name: "Pradiskriminasi dan Diskriminasi",
    description: "Memahami dampak pradiskriminasi dan diskriminasi terhadap individu dan komunitas — bahwa memperlakukan orang secara tidak adil karena identitas mereka menyebabkan kerugian nyata — dan mengenali tanggung jawab mereka sendiri untuk menentangnya",
    evidence: [
      "Mendefinisikan pradiskriminasi dan diskriminasi dengan kata-kata mereka sendiri beserta contoh",
      "Mendeskripsikan dampak emosional dan sosial diskriminasi terhadap orang yang mengalaminya",
      "Mengidentifikasi setidaknya satu tindakan yang secara pribadi bisa mereka ambil untuk menantang perlakuan tidak adil"
    ],
    assessmentPrompt: "Jika {{name}} melihat seseorang di sekolah dikucilkan atau diintimidasi karena ras, agama, atau disabilitas mereka, bisakah mereka menjelaskan mengapa itu salah dan mendeskripsikan apa yang bisa mereka lakukan?"
  },
  "mt_cOknxrYhwL": {
    name: "Mempertanyakan Bias Anda Sendiri",
    description: "Merefleksikan asumsi dan bias sendiri — mengenali bahwa semua orang membawa asumsi tanpa sadar tentang orang lain, dan bahwa secara aktif mempertanyakan asumsi ini adalah praktik berkelanjutan yang mengarah pada keadilan dan empati yang lebih besar",
    evidence: [
      "Mendeskripsikan waktu mereka membuat asumsi tentang seseorang yang ternyata salah",
      "Menjelaskan apa arti bias tanpa sadar dalam istilah sederhana",
      "Mendeskripsikan strategi untuk memeriksa asumsi mereka sendiri, seperti mengajukan pertanyaan sebelum menghakimi"
    ],
    assessmentPrompt: "Bisakah {{name}} menangkap diri mereka sendiri membuat asumsi tentang seseorang — seperti mengasumsikan anak yang pendiam tidak ramah — dan kemudian mempertanyakan apakah asumsi itu adil?"
  },
  "mt_2oswCNuapH": {
    name: "Stereotip dan Perbedaan Individu",
    description: "Mengenali stereotip — keyakinan yang disederhanakan berlebihan tentang kelompok orang berdasarkan jenis kelamin, ras, usia, atau karakteristik lainnya — dan memahami bahwa stereotip tidak adil karena mengabaikan perbedaan individu",
    evidence: [
      "Mendefinisikan apa itu stereotip dengan kata-kata mereka sendiri",
      "Mengidentifikasi stereotip umum dan menjelaskan mengapa itu tidak akurat",
      "Menantang stereotip yang mereka temui dengan memberikan contoh yang berlawanan"
    ],
    assessmentPrompt: "Jika seseorang mengatakan 'anak laki-laki tidak menangis' atau 'anak perempuan tidak pandai matematika', bisakah {{name}} menjelaskan mengapa pernyataan itu adalah stereotip tidak adil yang tidak berlaku untuk semua orang?"
  },
  "mt_DkzsZdyaL2": {
    name: "Dunia Memiliki Banyak Budaya dan Tradisi",
    description: "Memahami bahwa dunia memiliki banyak budaya, tradisi, dan sistem kepercayaan, dan bahwa mempelajari perspektif orang lain memperkaya pemahaman kita sendiri — mengembangkan rasa ingin tahu yang tulus dan hormat terhadap keberagaman budaya",
    evidence: [
      "Mendeskripsikan praktik budaya yang berbeda dari milik mereka dan menjelaskan apa yang mereka temukan menarik tentangnya",
      "Mengajukan pertanyaan yang hormat untuk belajar tentang tradisi atau kepercayaan orang lain",
      "Menjelaskan mengapa memahami budaya yang berbeda membuat komunitas lebih kuat"
    ],
    assessmentPrompt: "Apakah {{name}} menunjukkan minat yang tulus saat mempelajari bagaimana keluarga dari budaya yang berbeda merayakan, makan, atau beribadah — mengajukan pertanyaan dengan hormat alih-alih menolak hal-hal yang tidak dikenal?"
  },
  "mt_oqvJJKCJXw": {
    name: "Ketidaksetaraan Sistemik dan Kekuatan Sekutu",
    description: "Melampaui 'memperlakukan semua orang sama' untuk memahami bahwa keuntungan dan kerugian struktural ada terlepas dari usaha atau niat individu; menjelajahi contoh nyata ketidaksetaraan sistemik (kesenjangan pencapaian pendidikan, kesenjangan gaji gender, representasi dalam kepemimpinan); membedakan antara pradiskriminasi individu dan diskriminasi struktural; memahami intersEkonalitas — bagaimana beberapa aspek identitas berinteraksi; mengembangkan simpati yang berakar pada bukti alih-alih rasa kasihan; menjelajahi apa artinya menjadi sekutu yang tulus dalam praktik",
    evidence: [],
    assessmentPrompt: "Bisakah {{name}} menjelaskan perbedaan antara memperlakukan semua orang 'sama' dan benar-benar membuat segalanya adil — dan memberikan contoh nyata hambatan struktural yang membuat dua orang yang memulai dari posisi berbeda menghadapi peluang yang tidak setara meskipun mereka berusaha sama kerasnya?"
  },
  "mt_VA126P6Wp5": {
    name: "Simpati versus Empati",
    description: "Membedakan simpati ('Aku kasihan padamu') dari empati ('Aku memahami apa yang kamu alami'); mengembangkan keterampilan mendengarkan aktif: merefleksikan, mengartikulasikan ulang, mengajukan pertanyaan terbuka, menahan keinginan untuk menyelesaikan masalah terlalu cepat; memahami ketertarikan empatik sebagai minat tulus terhadap dunia batin orang lain; berlatih hadir bagi seseorang yang sedang tertekan tanpa mencoba memperbaiki atau meminimalkan pengalaman mereka; memahami trauma semu dan kelelahan simpatik, dan bagaimana orang yang empatik dapat melindungi kesejahteraan mereka sendiri sambil tetap hadir bagi orang lain",
    evidence: [],
    assessmentPrompt: "Ketika teman sedang mengalami sesuatu yang sangat sulit, bisakah {{name}} mendeskripsikan apa yang membuat pendengar benar-benar membantu — dan menjelaskan perbedaan antara empati dan simpati, menggunakan contoh sesuatu yang terdengar mendukung tetapi sebenarnya tidak?"
  },
  "mt_5XLhiqmocP": {
    name: "Kewarganegaraan Global",
    description: "Memahami apa artinya menjadi warga negara di dunia yang saling terhubung di mana keputusan di satu tempat mempengaruhi orang di tempat lain; menjelajahi masalah global (keadilan iklim, migrasi paksa, kesehatan global, kemiskinan) melalui lensa empati, membedakan fakta dari penilaian nilai; terlibat dalam ketegangan etis antara kewajiban kepada orang dekat dan kewajiban kepada orang asing yang jauh; memperkenalkan pemberian berbasis bukti dan altruisme efektif sebagai satu kerangka untuk berpikir tentang tanggung jawab global; mengembangkan posisi pribadi yang beralasan tentang kewarganegaraan global yang mengakui kompleksitas",
    evidence: [],
    assessmentPrompt: "Ketika {{name}} membaca tentang krisis yang terjadi di negara lain, bisakah mereka mendeskripsikan bagaimana mereka memikirkan tanggung jawab mereka sendiri — dan menyebutkan satu hal praktis yang benar-benar bisa dilakukan pemuda tentang masalah berskala besar alih-alih hanya merasa tidak berdaya?"
  },
  // --- Friendship & Cooperation ---
  "mt_PdYlsA33jB": {
    name: "Meminta Bantuan",
    description: "Meminta bantuan ketika mereka membutuhkannya — dari teman, guru, atau anggota keluarga — dan memahami bahwa meminta bantuan adalah tanda kekuatan, bukan kelemahan",
    evidence: [
      "Mendekati orang yang tepat dan meminta bantuan dengan jelas",
      "Mengidentifikasi ke mana harus pergi untuk berbagai jenis bantuan (akademis, emosional, praktis)",
      "Menjelaskan mengapa meminta bantuan adalah hal yang bijaksana bukan sesuatu yang memalukan"
    ],
    assessmentPrompt: "Jika {{name}} terjebak dalam sesuatu di sekolah atau merasa khawatir tentang sesuatu, apakah mereka akan meminta bantuan guru atau teman alih-alih berjuang dalam diam?"
  },
  "mt_YbX3LD0Eca": {
    name: "Mendengarkan Orang Lain",
    description: "Mendengarkan orang lain saat mereka berbicara — melihat pembicara, menunggu sampai mereka selesai, dan menunjukkan bahwa mereka telah mendengar dengan merespons apa yang dikatakan bukan hanya berbicara tentang ide mereka sendiri",
    evidence: [
      "Menghadap pembicara dan mempertahankan perhatian saat orang lain berbicara",
      "Menunggu sampai orang lain selesai sebelum merespons",
      "Merespons apa yang sebenarnya dikatakan alih-alih mengubah topik ke ide mereka sendiri"
    ],
    assessmentPrompt: "Ketika teman menceritakan akhir pekan mereka kepada {{name}}, apakah {{name}} benar-benar mendengarkan dan mengajukan pertanyaan tentang itu — alih-alih langsung menyela untuk berbicara tentang akhir pekan mereka sendiri?"
  },
  "mt_HBcvu0UxYe": {
    name: "Yang Membuat Seseorang Menjadi Teman yang Baik",
    description: "Memahami apa yang membuat seseorang menjadi teman yang baik — baik, jujur, dapat diandalkan, dan inklusif — dan mengenali perilaku yang tidak ramah, seperti bossy, mengucilkan orang, atau mengatakan hal-hal yang jahat",
    evidence: [
      "Menyebutkan setidaknya empat kualitas teman yang baik",
      "Mengidentifikasi perilaku tidak ramah dalam cerita atau situasi nyata",
      "Merefleksikan waktu mereka menjadi teman yang baik dan menjelaskan apa yang mereka lakukan"
    ],
    assessmentPrompt: "Bisakah {{name}} mendeskripsikan apa yang membuat teman yang baik dan mengenali ketika seseorang — termasuk diri mereka sendiri — tidak menjadi teman yang baik?"
  },
  "mt_FwI7q7DSIx": {
    name: "Gantian dan Berbagi",
    description: "Gantian, berbagi材料, dan bermain secara kooperatif dengan orang lain — memahami bahwa aktivitas kelompok berjalan lebih baik ketika semua orang mendapat giliran yang adil dan bahwa menunggu giliran Anda adalah bagian dari menjadi teman yang baik",
    evidence: [
      "Gantian dalam permainan atau aktivitas kelompok tanpa perlu pengingat orang dewasa",
      "Berbagi材料 dengan rela selama tugas bersama atau waktu bermain",
      "Menjelaskan mengapa gantian membuat permainan dan kerja kelompok lebih menyenangkan bagi semua orang"
    ],
    assessmentPrompt: "Ketika {{name}} bermain permainan papan dengan teman atau saudara, bisakah mereka menunggu giliran dan berbagi permainan tanpa merampas atau marah?"
  },
  "mt_NS5t-Jzlh8": {
    name: "Kosakata: Bekerja dengan Orang Lain",
    description: "Mengetahui dan menggunakan kosakata bekerja dengan orang lain — bekerjasama, berbagi, gantian, tim, mendengarkan, setuju, setuju secara hormat, dan memasukkan — dan memahami bahwa kata-kata ini menggambarkan kebiasaan yang bergantung pada pertemanan dan kerja kelompok",
    evidence: [
      "Menggunakan 'bekerjasama' dan 'kompromi' dengan benar — misalnya 'Kami bekerjasama dengan gantian memilih permainan'",
      "Menjelaskan apa arti 'mendengarkan aktif' dan mendemonstrasikannya: menghadap pembicara, tidak menyela, merespons apa yang dikatakan",
      "Menggunakan 'berbagi', 'gantian', dan 'memasukkan' untuk mendeskripsikan bagaimana mereka bekerja dengan orang lain dalam aktivitas kelompok"
    ],
    assessmentPrompt: "Ketika {{name}} mengerjakan sesuatu dengan teman atau saudara, bisakah mereka menggunakan kata-kata seperti 'bekerjasama' atau 'gantian' untuk mendeskripsikan apa yang mereka lakukan — dan benar-benar mempraktikkan hal-hal itu?"
  },
  "mt_Ag9NSWJu-X": {
    name: "Kosakata Komunikasi",
    description: "Mengetahui dan menggunakan kosakata komunikasi yang sehat dan penyelesaian konflik — asertif, pasif, agresif, kompromi, konflik, resolusi, mediasi, pengamat, pelopor, dan tekanan sebaya — dan memahami perbedaan antara pendekatan-pendekatan yang berlawanan ini",
    evidence: [
      "Menggunakan 'asertif' dengan benar dan membedakannya dari 'agresif' — misalnya 'Bersikap asertif berarti mengatakan apa yang aku butuhkan dengan tenang'",
      "Menjelaskan apa arti 'resolusi konflik' dan mendeskripsikan satu strategi seperti menggunakan pernyataan 'Aku merasa...'",
      "Menggunakan kata-kata seperti 'negosiasi', 'batasan', dan 'hormat' dengan tepat dalam diskusi tentang pertemanan"
    ],
    assessmentPrompt: "Jika {{name}} dan teman memiliki perselisihan, bisakah mereka mendeskripsikannya menggunakan kata-kata seperti 'konflik' atau 'kompromi' — dan menjelaskan bagaimana komunikasi asertif berbeda dari perilaku agresif atau pasif?"
  },
  "mt_X7Tu94-a2m": {
    name: "Pertemanan Berubah dari Waktu ke Waktu",
    description: "Memahami bahwa pertemanan berubah dari waktu ke waktu — bahwa adalah hal normal bagi teman untuk berjalan terpisah atau pertemanan baru terbentuk — dan mengembangkan strategi untuk membuat teman baru dan menangani perubahan pertemanan tanpa merasa ada yang salah dengan mereka",
    evidence: [
      "Menjelaskan bahwa perubahan pertemanan adalah hal normal dan tidak berarti ada yang salah",
      "Mendeskripsikan strategi untuk membuat teman baru, seperti bergabung dengan klub atau mengundang seseorang untuk bermain",
      "Berbicara tentang pertemanan yang berubah dan bagaimana mereka menanganinya"
    ],
    assessmentPrompt: "Jika sahabat {{name}} mulai menghabiskan lebih banyak waktu dengan orang lain, bisakah mereka menanganinya tanpa hancur — memahami bahwa pertemanan bergeser dan mereka bisa membuat teman baru juga?"
  },
  "mt_iWGnyUyN2j": {
    name: "Menyelesaikan Perselisihan dengan Teman",
    description: "Menyelesaikan perselisihan sederhana dengan teman sebaya dengan berbicara — menjelaskan bagaimana perasaan mereka, mendengarkan sisi orang lain, dan menemukan kompromi atau solusi yang bisa diterima kedua belah pihak",
    evidence: [
      "Menjelaskan sudut pandang mereka sendiri dengan tenang selama perselisihan",
      "Mendengarkan perspektif orang lain tanpa menyela",
      "Menyarankan kompromi atau solusi yang mengatasi kedua belah pihak"
    ],
    assessmentPrompt: "Jika {{name}} dan teman tidak setuju tentang permainan apa yang dimainkan saat istirahat, bisakah mereka berbicara dan menemukan kompromi — alih-alih satu orang selalu mendapatkan keinginannya atau pertengkaran memanas?"
  },
  "mt_w4nSIDhIgC": {
    name: "Peran dalam Kelompok",
    description: "Memahami peran berbeda yang dimainkan orang dalam kelompok — pemimpin, pendukung, mediator, pencetus ide — dan mengenali bahwa kelompok yang efektif membutuhkan campuran peran, bukan semua orang mencoba menjadi pemimpin",
    evidence: [
      "Menyebutkan setidaknya tiga peran berbeda yang bisa dimainkan orang dalam kelompok",
      "Mengidentifikasi peran favorit mereka dan mendeskripsikan kekuatannya",
      "Menjelaskan mengapa kelompok bekerja lebih baik ketika orang yang berbeda mengambil peran yang berbeda"
    ],
    assessmentPrompt: "Dalam proyek kelompok, bisakah {{name}} mengenali bahwa mereka tidak selalu harus memimpin — dan bahwa terkadang kelompok bekerja lebih baik ketika mereka mendukung ide orang lain alih-alih mendorong ide mereka sendiri?"
  },
  "mt_QxsoqVUt6u": {
    name: "Bekerja dengan Baik dalam Kelompok",
    description: "Bekerja secara efektif sebagai bagian dari kelompok kecil — memberikan ide mereka sendiri, mendengarkan ide orang lain, mengambil bagian pekerjaan yang adil, dan mendukung kelompok untuk mencapai tujuan bersama",
    evidence: [
      "Memberikan setidaknya satu ide selama diskusi kelompok",
      "Mendengarkan dan membangun di atas ide anggota kelompok lain",
      "Menyelesaikan bagian tugas kelompok mereka yang ditugaskan tepat waktu"
    ],
    assessmentPrompt: "Ketika {{name}} harus mengerjakan proyek kelompok di sekolah, apakah mereka melakukan bagian mereka — berbagi ide dan mengerjakan tugas mereka — alih-alih duduk diam atau mencoba mengambil alih?"
  },
  "mt_rqLMfiw61L": {
    name: "Komunikasi Asertif",
    description: "Menggunakan komunikasi asertif — mengekspresikan kebutuhan, opini, dan batasan dengan jelas dan hormat tanpa menjadi agresif (memaksa/menuntut) atau pasif (menyerah/diam) — termasuk mengatakan tidak saat sesuatu tidak terasa benar",
    evidence: [
      "Menjelaskan perbedaan antara respons asertif, agresif, dan pasif",
      "Berperan mengatakan tidak dalam skenario tekanan sebaya",
      "Mengekspresikan batasan pribadi dengan jelas dan hormat dalam situasi nyata"
    ],
    assessmentPrompt: "Jika teman ingin {{name}} melakukan sesuatu yang membuat mereka tidak nyaman — seperti mengucilkan anak lain atau melanggar aturan — bisakah {{name}} mengatakan 'Aku tidak mau melakukan itu' dengan tegas tetapi sopan?"
  },
  "mt_33zncDHC3N": {
    name: "Memberi dan Menerima Umpan Balik",
    description: "Memberi dan menerima umpan balik konstruktif — memberitahu seseorang apa yang mereka lakukan dengan baik dan apa yang bisa diperbaiki dengan cara yang membantu bukan menyakitkan, dan menerima umpan balik tentang pekerjaan mereka sendiri tanpa menjadi defensif",
    evidence: [
      "Memberikan umpan balik yang mencakup satu poin positif spesifik dan saran konstruktif",
      "Menerima umpan balik tentang pekerjaan mereka sendiri tanpa marah atau menolak",
      "Menjelaskan mengapa umpan balik konstruktif membantu orang berkembang"
    ],
    assessmentPrompt: "Jika {{name}} meninjau cerita teman sekelas dan menemukan kesalahan, bisakah mereka memberikan umpan balik yang membantu — seperti 'Aku suka bagian ini, dan bagian ini bisa lebih jelas' — bukan hanya mengatakan 'itu salah'?"
  },
  "mt_AbnwmKD8oe": {
    name: "Membantu Orang Lain Menyelesaikan Konflik",
    description: "Memediasi konflik antara orang lain — membantu dua teman yang bertengkar dengan mendengarkan kedua sisi, membantu mereka melihat sudut pandang satu sama lain, dan membimbing mereka menuju resolusi yang adil",
    evidence: [
      "Mendengarkan kedua sisi konflik tanpa memihak pada awalnya",
      "Membantu setiap orang mengartikulasikan perspektif mereka kepada yang lain",
      "Menyarankan resolusi atau kompromi yang adil yang dapat diterima kedua belah pihak"
    ],
    assessmentPrompt: "Jika dua teman {{name}} bertengkar dan keduanya datang ke {{name}} untuk dukungan, bisakah {{name}} membantu mereka berbicara dengan adil alih-alih hanya memihak satu sisi?"
  },
  "mt_z98J_Zg2L3": {
    name: "Refleksi Diri dalam Hubungan",
    description: "Merefleksikan peran dan perilaku sendiri dalam hubungan — mengenali pola dalam cara mereka berinteraksi dengan orang lain, memahami apa yang mereka sumbangkan untuk pertemanan, dan mengidentifikasi area di mana mereka bisa berkembang sebagai teman atau anggota tim",
    evidence: [
      "Mengidentifikasi pola dalam perilaku sosial mereka sendiri, seperti selalu ingin memimpin atau menghindari konfrontasi",
      "Mendeskripsikan apa yang mereka lakukan dengan baik dalam hubungan dan satu area yang ingin mereka perbaiki",
      "Menetapkan tujuan sosial yang spesifik, seperti 'Aku akan meminta ide orang lain sebelum berbagi milikku'"
    ],
    assessmentPrompt: "Bisakah {{name}} jujur merefleksikan pertemanan mereka dan mengatakan sesuatu seperti 'Aku pikir aku terkadang mengambil alih dalam kerja kelompok dan aku sedang berusaha untuk lebih banyak mendengarkan' — menunjukkan kesadaran akan pola sosial mereka sendiri?"
  },
  "mt_nqM2OW0Qlm": {
    name: "Petunjuk Sosial dan Dinamika Kelompok",
    description: "Memahami subteks, komunikasi tidak langsung, dan petunjuk sosial dalam kelompok sebaya remaja; menganalisis psikologi dinamika kelompok dalam dan kelompok luar dan mengapa kepemilikan bisa datang dengan harga pengucilan; memahami gosip sebagai mekanisme ikatan sosial dan status, dan biayanya; mengembangkan strategi untuk menavigasi hierarki sosial tanpa mengorbankan nilai-nilai; membedakan antara ketegasan dan agresivitas dalam pengaturan sebaya; memahami bagaimana merespons pengucilan — baik mengalaminya atau menyaksikannya",
    evidence: [],
    assessmentPrompt: "Ketika {{name}} merasakan ketegangan atau 'arus bawah' yang tidak terucapkan dalam sekelompok teman, bisakah mereka mendeskripsikan petunjuk sosial apa yang mereka tangkap dan menjelaskan perbedaan antara bersikap tegas dan bersikap agresif ketika mereka memilih untuk mengatasinya?"
  },
  "mt_NCrbQe0LdB": {
    name: "Percakapan Jujur dan Perbaikan Konflik",
    description: "Memahami bagaimana memiliki percakapan jujur dan langsung yang mengatasi masalah tanpa menyerang orang; menerapkan prinsip komunikasi non-kekerasan (observasi, perasaan, kebutuhan, permintaan); memahami proses perbaikan setelah konflik signifikan: mengambil tanggung jawab tanpa defensif, menawarkan permintaan maaf yang tulus (tanpa menyalahkan), dan membangun kembali kepercayaan melalui perilaku konsisten dari waktu ke waktu; membedakan antara permintaan maaf yang nyata dan 'maaf' yang menyelamatkan muka; memahami bagaimana pertemanan bertahan dan mendalam melalui konflik yang ditangani alih-alih dihindari",
    evidence: [],
    assessmentPrompt: "Ketika {{name}} bertengkar serius dengan teman, bisakah mereka mendeskripsikan apa yang membuat permintaan maaf benar-benar memperbaiki hubungan — dan apa perbedaan antara permintaan maaf yang tulus dan hanya mengatakan maaf untuk mengakhiri kecanggungan?"
  },
  "mt_8StiXnYq1u": {
    name: "Gaya Kepemimpinan dan Pengaruh",
    description: "Membedakan gaya kepemimpinan yang berbeda (direktif, demokratis, pelayan, transformatif) dan memahami kapan masing-masing tepat; memahami bahwa pengaruh dalam kelompok datang dengan tanggung jawab, dan menjelajahi perbedaan antara memimpin melalui inspirasi versus paksaan; berlatih kepemimpinan inklusif: secara aktif menciptakan ruang untuk suara yang lebih pendiam dan perspektif yang beragam; memahami etika pengaruh dan batasan antara persuasi dan manipulasi; menjelajahi konsep persetujuan dan paksaan dalam hubungan sebaya; merefleksikan jenis pengaruh apa yang ingin mereka miliki di komunitas mereka",
    evidence: [],
    assessmentPrompt: "Jika {{name}} memimpin proyek kelompok di mana satu orang mendominasi semua keputusan, bisakah mereka mendeskripsikan dua pendekatan kepemimpinan berbeda yang bisa mereka ambil dan menjelaskan mengapa orang paling berwenang dalam kelompok tidak selalu menjadi pemimpin terbaik?"
  },
  // --- Responsible Decision-Making ---
  "mt_UHQfb-n-w3": {
    name: "Tindakan dan Konsekuensinya",
    description: "Memahami bahwa tindakan memiliki konsekuensi — bahwa apa yang Anda pilih untuk dilakukan mempengaruhi diri sendiri dan orang lain — dan mulai memikirkan apa yang mungkin terjadi sebelum mereka bertindak",
    evidence: [
      "Mendeskripsikan apa yang terjadi sebagai konsekuensi dari tindakan spesifik yang mereka ambil",
      "Memprediksi apa yang mungkin terjadi jika mereka memilih tindakan tertentu sebelum melakukannya",
      "Menjelaskan bahwa tindakan bisa memiliki konsekuensi baik atau buruk bagi diri sendiri dan orang lain"
    ],
    assessmentPrompt: "Sebelum {{name}} melakukan sesuatu — seperti mengambil mainan dari saudara atau berlari di koridor — bisakah mereka berhenti dan memikirkan apa yang mungkin terjadi sebagai akibatnya?"
  },
  "mt_q3vRl4dddK": {
    name: "Kesadaran Keselamatan Sehari-hari",
    description: "Menjaga diri sendiri tetap aman dalam situasi sehari-hari — mengetahui aturan keselamatan dasar tentang jalan, orang asing, air, dan internet — dan memahami siapa orang dewasa yang mereka percai dan kapan harus memberitahu mereka sesuatu",
    evidence: [
      "Menyebutkan setidaknya tiga aturan keselamatan dasar dan menjelaskan mengapa masing-masing penting",
      "Menyebutkan orang dewasa yang mereka percayai dan mendeskripsikan kapan mereka harus memberitahu mereka sesuatu",
      "Menunjukkan perilaku aman dalam situasi sehari-hari yang familiar tanpa diingatkan"
    ],
    assessmentPrompt: "Apakah {{name}} mengetahui aturan keselamatan dasar mereka — seperti tidak pergi dengan orang yang tidak dikenal, melihat ke kiri dan kanan sebelum menyeberang, dan memberitahu Anda jika sesuatu secara online membuat mereka tidak nyaman?"
  },
  "mt_Wc6cOTQ1bA": {
    name: "Pilihan Benar dan Salah",
    description: "Mengetahui perbedaan antara benar dan salah dalam situasi sehari-hari yang familiar — memahami aturan dasar tentang kejujuran, tidak menyakiti orang lain, menghormati properti orang lain, dan bersikap adil — dan memilih untuk melakukan hal yang benar bahkan ketika itu lebih sulit",
    evidence: [
      "Mengidentifikasi pilihan benar dan salah dalam skenario moral sederhana",
      "Memilih untuk jujur bahkan ketika berbohong akan menghindari masalah",
      "Menjelaskan mengapa aturan tentang tidak menyakiti orang lain dan bersikap jujur itu penting"
    ],
    assessmentPrompt: "Jika {{name}} tidak sengaja menjatuhkan sesuatu di rumah teman, apakah mereka mengatakan yang sebenarnya tentang itu alih-alih menyembunyikannya atau menyalahkan orang lain?"
  },
  "mt_rkrG2w7WXI": {
    name: "Aturan dan Perjanjian Ada",
    description: "Memahami mengapa aturan dan perjanjian ada — bahwa aturan membantu menjaga orang tetap aman, membuat segalanya adil, dan membantu kelompok bekerja dengan baik bersama — dan mengikuti aturan yang disepakati dengan rela bukan hanya saat diawasi",
    evidence: [
      "Menjelaskan alasan di balik setidaknya dua aturan di rumah atau sekolah",
      "Mengikuti aturan secara konsisten tanpa perlu diingatkan atau diawasi",
      "Mendeskripsikan apa yang akan terjadi jika tidak ada yang mengikuti aturan dalam konteks tertentu"
    ],
    assessmentPrompt: "Apakah {{name}} mengikuti aturan kelas atau perjanjian keluarga bahkan ketika tidak ada orang dewasa yang menonton — bukan karena mereka takut hukuman tetapi karena mereka memahami mengapa aturan itu penting?"
  },
  "mt_uTKgmWqSoI": {
    name: "Kosakata: Mengambil Keputusan dan Menjaga Keamanan",
    description: "Mengetahui dan menggunakan kosakata mengambil keputusan dan menjaga keamanan — pilihan, konsekuensi, aturan, aman, adil, jujur, orang dewasa yang dipercaya, dan benar serta salah — dan memahami bahwa menamakan gagasan-gagasan ini dengan jelas membantu membuat pilihan yang lebih baik",
    evidence: [
      "Menjelaskan apa arti 'konsekuensi' dan memberikan contoh konsekuensi positif dan negatif dari sebuah pilihan",
      "Menggunakan 'bertanggung jawab' dan 'aman' dengan benar saat berbicara tentang keputusan sehari-hari — misalnya 'Pilihan yang bertanggung jawab adalah memberitahu orang dewasa'",
      "Mendefinisikan 'aturan' dan 'keadilan' dan menjelaskan mengapa aturan ada menggunakan contoh mereka sendiri dari sekolah atau rumah"
    ],
    assessmentPrompt: "Jika {{name}} menghadapi situasi di mana mereka perlu membuat pilihan — seperti apakah memberitahu yang sebenarnya tentang sesuatu yang salah — bisakah mereka membahas apa yang mungkin terjadi menggunakan kata-kata seperti 'konsekuensi' dan 'adil'?"
  },
  "mt_zIzJGkaj0Q": {
    name: "Kewarganegaraan Digital Dasar",
    description: "Memahami kewarganegaraan digital dasar — bersikap baik secara online, melindungi informasi pribadi, mengenali bahwa orang di balik layar adalah orang nyata dengan perasaan nyata, dan mengetahui apa yang harus dilakukan jika sesuatu secara online membuat mereka tidak nyaman",
    evidence: [
      "Menyebutkan setidaknya tiga aturan untuk tetap aman dan bersikap baik secara online",
      "Menjelaskan mengapa pesan yang menyakitkan secara online sama berbahayanya dengan mengatakannya secara langsung",
      "Mendeskripsikan apa yang harus mereka lakukan jika seseorang secara online membuat mereka merasa tidak nyaman atau meminta informasi pribadi"
    ],
    assessmentPrompt: "Ketika {{name}} mengobrol dengan teman secara online atau bermain game multipemain, apakah mereka memperlakukan orang dengan baik dan mengetahui untuk tidak membagikan detail pribadi seperti alamat atau nama sekolah?"
  },
  "mt_yCmYV9ruQu": {
    name: "Pengamat dan Pelopor",
    description: "Memahami peran pengamat — bahwa ketika seseorang menyaksikan perilaku yang tidak baik atau tidak adil, mereka memiliki pilihan: mereka bisa menjadi pengamat pasif (tidak melakukan apa-apa), ikut serta, atau menjadi pelopor (bersuara atau meminta bantuan) — dan mengembangkan kepercayaan diri untuk menjadi pelopor",
    evidence: [
      "Menjelaskan perbedaan antara pengamat dan pelopor",
      "Mendeskripsikan setidaknya dua tindakan aman yang bisa diambil pelopor",
      "Memberikan contoh waktu mereka atau seseorang yang mereka kenal membela orang lain"
    ],
    assessmentPrompt: "Jika {{name}} melihat sekelompok anak bersikap jahat kepada seseorang di sekolah, apakah mereka memiliki keberanian untuk mengatakan sesuatu, berjalan bersama orang yang menjadi sasaran, atau memberitahu guru — alih-alih hanya menonton?"
  },
  "mt_RhntJz7p_6": {
    name: "Berhenti, Berpikir, Lalu Memilih",
    description: "Menggunakan proses pengambilan keputusan sederhana saat menghadapi pilihan — berhenti untuk berpikir, mengidentifikasi opsi, mempertimbangkan konsekuensi dari setiap opsi, dan kemudian memilih — alih-alih bertindak secara impulsif",
    evidence: [
      "Mendeskripsikan setidaknya dua opsi saat menghadapi keputusan",
      "Memprediksi konsekuensi yang mungkin untuk setiap opsi",
      "Menjelaskan opsi mana yang mereka pilih dan mengapa, menunjukkan bahwa mereka mempertimbangkan konsekuensi"
    ],
    assessmentPrompt: "Ketika {{name}} menghadapi pilihan yang sulit — seperti apakah memberitahu guru bahwa teman menyontek — bisakah mereka memikirkan opsi dan konsekuensi mereka alih-alih hanya bereaksi?"
  },
  "mt_I9iSzpGRn5": {
    name: "Memahami Perundungan",
    description: "Memahami apa itu perundungan — perilaku berulang yang bertujuan menyakiti seseorang, termasuk fisik, verbal, sosial (pengucilan, menyebarkan gosip), dan siberperundungan — dan mengetahui bahwa itu selalu salah dan apa yang harus dilakukan jika mereka mengalaminya atau menyaksikannya",
    evidence: [
      "Mendefinisikan perundungan dan membedakannya dari konflik satu kali",
      "Menyebutkan setidaknya tiga bentuk perundungan termasuk siberperundungan",
      "Mendeskripsikan langkah-langkah yang harus mereka ambil jika mereka mengalami atau menyaksikan perundungan"
    ],
    assessmentPrompt: "Apakah {{name}} memahami perbedaan antara pertengkaran satu kali dan perundungan, dan apakah mereka tahu apa yang harus dilakukan jika mereka melihat seseorang ditindas — alih-alih hanya mengabaikannya?"
  },
  "mt_h-z88yf9Pn": {
    name: "Kosakata: Etika dan Kewarganegaraan",
    description: "Mengetahui dan menggunakan kosakata etika dan kewarganegaraan — perundungan, siberperundungan, pengamat, pelopor, tekanan sebaya, kewarganegaraan digital, hak, tanggung jawab, dan etis — dan memahami perbedaan antara istilah-istilah yang erat hubungannya ini",
    evidence: [
      "Menjelaskan apa arti 'etika' dengan kata-kata mereka sendiri dan memberikan contoh dilema etis",
      "Menggunakan 'warga negara', 'hak', dan 'tanggung jawab' dengan benar — misalnya 'Seorang warga negara memiliki hak untuk memilih dan tanggung jawab untuk mengikuti hukum'",
      "Mendefinisikan 'persetujuan' dan 'integritas' dan menjelaskan mengapa itu penting dalam hubungan dan perilaku online"
    ],
    assessmentPrompt: "Jika {{name}} melihat seseorang diperlakukan tidak baik secara online dan Anda bertanya tentang itu, bisakah mereka menjelaskan perbedaan antara menjadi pengamat dan pelopor — dan apa arti 'kewarganegaraan digital'?"
  },
  "mt_h_shhH-6DC": {
    name: "Hak dan Tanggung Jawab Komunitas",
    description: "Memahami hak dan tanggung jawab mereka sebagai anggota komunitas — bahwa setiap orang memiliki hak untuk diperlakukan dengan hormat dan merasa aman, dan bahwa dengan hak datang tanggung jawab untuk memperlakukan orang lain dengan cara yang sama",
    evidence: [
      "Menyebutkan setidaknya tiga hak yang dimiliki setiap anak (misalnya, keamanan, pendidikan, hormat)",
      "Mendeskripsikan tanggung jawab yang menyertai hak-hak tersebut",
      "Memberikan contoh bagaimana menggunakan hak mereka secara bertanggung jawab mendukung komunitas"
    ],
    assessmentPrompt: "Bisakah {{name}} menjelaskan bahwa mereka memiliki hak untuk merasa aman di sekolah DAN tanggung jawab untuk membantu membuat sekolah aman bagi orang lain — memahami bahwa hak dan tanggung jawab berjalan beriringan?"
  },
  "mt_6xj94tmpi-": {
    name: "Pilihan Etis yang Sulit",
    description: "Memahami bahwa keputusan etis tidak selalu hitam dan putih — bahwa terkadang tidak ada jawaban sempurna dan orang yang masuk akal bisa tidak setuju — dan berlatih menimbang nilai-nilai yang bersaing saat membuat pilihan yang sulit",
    evidence: [
      "Mendeskripsikan dilema moral di mana kedua belah pihak memiliki argumen yang sah",
      "Menjelaskan nilai-nilai yang bertengkarmisalnya, kesetiaan vs keamanan, kejujuran vs kebaikan",
      "Mendeskripsikan bagaimana mereka akan membuat keputusan dalam situasi seperti itu dan membenarkan penalaran mereka"
    ],
    assessmentPrompt: "Jika teman {{name}} memberitahu mereka rahasia tetapi rahasia itu melibatkan sesuatu yang berbahaya, bisakah {{name}} memikirkan ketegangan antara kesetiaan kepada teman mereka dan kebutuhan untuk menjaga seseorang tetap aman?"
  },
  "mt_RNeEF1JU4J": {
    name: "Etika dalam Isu Dunia Nyata",
    description: "Mengevaluasi dimensi etis dari isu dunia nyata yang mereka temui — seperti tanggung jawab lingkungan, keadilan dalam olahraga, etika digital, atau keadilan sosial — mempertimbangkan berbagai perspektif dan membentuk posisi pribadi yang beralasan",
    evidence: [
      "Mengidentifikasi isu etis dan mendeskripsikan setidaknya dua perspektif berbeda tentangnya",
      "Menjelaskan perspektif mana yang paling mereka setujui dan memberikan alasan untuk posisi mereka",
      "Mengakui bahwa perspektif lain memiliki beberapa validitas meskipun mereka tidak setuju"
    ],
    assessmentPrompt: "Bisakah {{name}} mendiskusikan isu nyata — seperti apakah adil bahwa beberapa anak memiliki lebih dari yang lain, atau apakah hewan harus dipelihara di kebun binatang — mempertimbangkan sudut pandang yang berbeda dan menjelaskan posisi mereka sendiri dengan bijaksana?"
  },
  "mt_JivEBTD_KV": {
    name: "Tekanan Sebaya dan Menolaknya",
    description: "Memahami tekanan sebaya — pengaruh yang bisa dimiliki teman dan teman sebaya terhadap pilihan dan perilaku Anda — dan mengembangkan strategi untuk menolak tekanan melakukan sesuatu yang mereka tahu salah atau membuat mereka tidak nyaman",
    evidence: [
      "Mendefinisikan tekanan sebaya dengan kata-kata mereka sendiri dan memberikan contoh dunia nyata",
      "Mendeskripsikan setidaknya dua strategi untuk menolak tekanan sebaya, seperti berjalan menjauh atau menggunakan humor",
      "Menjelaskan mengapa mengikuti sesuatu yang salah untuk masuk biasanya membuat segalanya lebih buruk"
    ],
    assessmentPrompt: "Jika teman {{name}} menantang mereka melakukan sesuatu yang berisiko atau tidak baik — seperti mencuri permen atau memposting foto memalukan seseorang — bisakah mereka menolak tekanan dan menjelaskan mengapa mereka tidak akan melakukannya?"
  },
  "mt_JiZ3H90Xg8": {
    name: "Risiko, Ketidakpastian, dan Bias Kognitif",
    description: "Membedakan antara risiko (keputusan dengan probabilitas yang diketahui) dan ketidakpastian (keputusan dengan hasil yang tidak diketahui); mengidentifikasi bias kognitif yang mendistorsi penilaian risiko: heuristik ketersediaan (menilai kemungkinan dari betapa mudahnya contoh terpikir), bias sekarang (mengambil nilai segera daripada masa depan), bias optimis (meremehkan risiko pribadi), dan pemikiran kelompok; memahami mengapa otak remaja secara biologis dikalibrasi menuju toleransi risiko yang lebih tinggi; menerapkan kerangka pengambilan keputusan yang terstruktur pada pilihan nyata; memahami peran nilai-nilai pribadi dalam keputusan di mana fakta saja tidak dapat menentukan jawaban",
    evidence: [],
    assessmentPrompt: "Bisakah {{name}} menjelaskan mengapa mengambil risiko tidak selalu tidak rasional — dan mendeskripsikan satu bias kognitif yang menyebabkan orang salah menilai risiko dalam keputusan sehari-hari mereka, seperti mengapa remaja cenderung meremehkan bahaya tertentu?"
  },
  "mt_WtO50EZQkf": {
    name: "Identitas Online dan Misinformasi",
    description: "Memahami etika identitas online dan pentingnya konsistensi antara siapa Anda secara online dan offline; menjelaskan bagaimana algoritma rekomendasi dan gelembung filter mempersempit paparan informasi; mengevaluasi psikologi misinformasi: mengapa itu menyebar, mengapa orang pintar mempercayainya, dan bagaimana menerapkan evaluasi sumber (pembacaan lateral, memeriksa bukti, mengenali manipulasi emosional); memahami persetujuan digital seputar berbagi gambar atau informasi pribadi; menjelajahi etika AI, pengawasan, dan privasi data sebagaimana mempengaruhi kehidupan sehari-hari; merefleksikan pembuatan konten yang bertanggung jawab dan pengaruh online",
    evidence: [],
    assessmentPrompt: "Ketika {{name}} melihat klaim yang meyakinkan dibagikan di media sosial, bisakah mereka mendeskripsikan proses mereka untuk memutuskan apakah akan mempercayai atau membagikannya — dan menjelaskan mengapa bahkan orang pintar pun sering tertipu secara online?"
  },
  "mt_LPYPuSaxv_": {
    name: "Kerangka Etika dan Penalaran Moral",
    description: "Memperkenalkan tiga kerangka etika utama: konsekuensialisme (menilai tindakan berdasarkan hasil dan kesejahteraan keseluruhan), deontologi (menilai tindakan berdasarkan kepatuhan terhadap aturan dan kewajiban terlepas dari konsekuensi), dan etika kebajikan (menilai tindakan berdasarkan karakter yang dicerminkan); menerapkan setiap kerangka pada dilema moral dunia nyata: tanggung jawab iklim, etika AI, ketidakpatuhan sipil, ketidaksetaraan kekayaan, alokasi perawatan kesehatan; memahami kekuatan dan keterbatasan setiap kerangka; mengembangkan kemampuan untuk penalaran moral yang cermat — kemampuan untuk memikirkan pertanyaan etis secara sistematis alih-alih hanya mengandalkan intuisi atau opini kelompok",
    evidence: [],
    assessmentPrompt: "Bisakah {{name}} mengambil dilema etis nyata — seperti apakah pernah benar untuk melanggar aturan untuk membantu seseorang — dan menjelaskan bagaimana seorang konsekuensialis, seorang deontolog, dan seseorang yang berfokus pada etika kebajikan masing-masing akan memikirkannya secara berbeda, dan pendekatan mana yang mereka anggap paling meyakinkan?"
  },
  // --- Self-Awareness ---
  "mt_69hFD2NgGe": {
    name: "Menamakan Perasaan Anda",
    description: "Memperhatikan apa yang Anda rasakan dan memberi nama padanya — mampu memberi label emosi adalah langkah pertama untuk memahami dan mengelolanya",
    evidence: [
      "penelitian literasi emosional",
      "Mengembangkan Literasi Emosional pada Anak Kecil (HeadStart.gov)",
      "pengembangan kosakata emosi usia 4-11 tahun (PMC)"
    ],
    assessmentPrompt: "Ketika {{name}} tampak sedih, bersemangat, atau frustrasi, bisakah mereka berhenti dan memberitahu Anda emosi apa yang mereka rasakan — bahkan jika mereka tidak bisa menjelaskan sepenuhnya mengapa?"
  },
  "mt_H4YZ1rSKP3": {
    name: "Kosakata: Diri",
    description: "Mengetahui dan menggunakan kosakata refleksi diri — kesadaran diri, merefleksikan, pola, pemicu, asumsi, dampak, perspektif, dan memperhatikan — dan memahami bahwa memiliki kata-kata yang tepat untuk pengalaman batin ini membuatnya lebih mudah dipahami dan dibicarakan",
    evidence: [
      "Menggunakan kata-kata seperti 'merefleksikan', 'pola', dan 'pemicu' dengan tepat saat mendeskripsikan perilaku mereka sendiri — misalnya 'Aku memperhatikan pola: aku frustrasi ketika terburu-buru'",
      "Menjelaskan apa arti 'kesadaran diri' dengan kata-kata mereka sendiri dan memberikan contoh pribadi",
      "Menggunakan kata 'perspektif' dengan benar — misalnya 'Dari perspektifku itu terasa tidak adil, tetapi aku bisa melihat milik mereka juga'"
    ],
    assessmentPrompt: "Setelah momen yang sulit — pertengkaran dengan teman atau tugas yang frustrasi — bisakah {{name}} berbicara tentang apa yang terjadi menggunakan kata-kata seperti 'pemicu' atau 'merefleksikan', menunjukkan bahwa mereka memikirkan reaksi mereka sendiri bukan hanya apa yang dilakukan orang lain?"
  },
  "mt_TU3BcLOgiV": {
    name: "Perasaan versus Tindakan",
    description: "Memahami bahwa perasaan dan tindakan terpisah — Anda bisa merasakan sesuatu dengan kuat tanpa harus langsung bertindak",
    evidence: [
      "penelitian pengembangan regulasi emosi",
      "Efek Usia dan Gender dalam Regulasi Emosi (PMC 2020)",
      "kontrol ekspresif ke regulasi emosi (PMC)"
    ],
    assessmentPrompt: "Apakah {{name}} memahami bahwa merasa marah, takut, atau cemburu tidak berarti mereka harus langsung bertindak — bahwa ada jeda antara perasaan dan apa yang mereka pilih untuk dilakukan selanjutnya?"
  },
  "mt_H8dEMH_wik": {
    name: "Pola dalam Reaksi Anda Sendiri",
    description: "Memperhatikan pola dalam reaksi Anda sendiri — 'Aku cenderung merespons seperti ini ketika lelah, tersisihkan, atau dipaksa memberikan jawaban'",
    evidence: [
      "penelitian kemandirian anak usia pertengahan dalam regulasi emosi",
      "pergeseran perkembangan usia 7 tahun dalam pemahaman diri"
    ],
    assessmentPrompt: "Apakah {{name}} pernah memperhatikan pola dalam cara mereka bereaksi — misalnya, mereka menjadi lebih terganggu pada waktu-waktu tertentu, atau jenis situasi tertentu secara konsisten memicu perasaan yang kuat?"
  },
  "mt_rpug2tkYhb": {
    name: "Dampak Anda terhadap Orang Lain",
    description: "Merefleksikan bagaimana perilaku Anda diterima oleh orang lain — mempertimbangkan bukan hanya apa yang Anda maksudkan tetapi apa dampak sebenarnya terhadap orang lain",
    evidence: [
      "Mendeskripsikan bagaimana sesuatu yang mereka katakan atau lakukan mempengaruhi orang lain — misalnya 'Ketika aku tidak memasukkan mereka, mereka tampak sedih'",
      "Memprediksi apa yang mungkin terjadi sebelum bertindak — misalnya 'Jika aku mengambil yang terakhir tanpa bertanya, mereka akan merasa itu tidak adil'",
      "Setelah konflik, menjelaskan apa yang bisa mereka lakukan berbeda dan dampak apa yang akan dimilikinya"
    ],
    assessmentPrompt: "Bisakah {{name}} memikirkan bagaimana sesuatu yang mereka katakan atau lakukan mungkin dirasakan oleh orang lain — bukan hanya apa yang mereka maksudkan, tetapi apa dampak sebenarnya?"
  },
  "mt_Mb1JUJmnbX": {
    name: "Mempertanyakan Kesan Pertama",
    description: "Memperhatikan ketika penilaian pertama Anda tentang situasi sosial mungkin salah — asumsi Anda tentang mengapa seseorang bertindak dengan cara tertentu tidak selalu merupakan fakta",
    evidence: [
      "Berhenti sebelum bereaksi terhadap perilaku teman sekelas dan mempertimbangkan penjelasan alternatif — misalnya 'Mungkin mereka menabrakku tanpa sengaja, bukan sengaja'",
      "Mendeskripsikan waktu mereka mengasumsikan yang terburuk tentang niat seseorang dan kemudian mengetahui bahwa mereka salah",
      "Ketika diberitahu tentang situasi sosial yang ambigu, menyarankan setidaknya dua kemungkinan alasan untuk perilaku orang lain alih-alih langsung pada satu kesimpulan"
    ],
    assessmentPrompt: "Jika {{name}} merasa yakin seseorang tidak adil atau tidak baik, bisakah mereka berhenti dan mempertimbangkan apakah mungkin ada penjelasan lain tentang apa yang terjadi?"
  },
  "mt_bkMDDstwwG": {
    name: "Pertumbuhan Pribadi dari Waktu ke Waktu",
    description: "Merefleksikan pertumbuhan Anda sendiri dari waktu ke waktu — hal-hal yang menantang Anda sekarang tidak tetap, dan memperhatikan bagaimana Anda telah berubah membangun pengetahuan diri yang tulus",
    evidence: [
      "pengembangan kosakata emosi berlanjut hingga usia 11 tahun (PMC)",
      "penelitian pentingnya refleksi diri pada anak"
    ],
    assessmentPrompt: "Bisakah {{name}} melihat ke belakang satu atau dua tahun terakhir dan menunjukkan sesuatu yang dulunya mereka anggap sangat sulit yang sekarang mereka tangani dengan lebih baik — dan menjelaskan apa yang berubah?"
  },
  // --- Self-Regulation & Resilience ---
  "mt_aS-Gdh-MHx": {
    name: "Menghadapi Perubahan Hidup",
    description: "Memahami bahwa perubahan adalah bagian normal dari kehidupan — seperti memulai sekolah, mendapat guru baru, bayi baru lahir, atau pindah rumah — dan mengidentifikasi strategi sederhana yang membantu mereka menghadapi perubahan",
    evidence: [
      "Menyebutkan setidaknya dua perubahan yang telah mereka alami dan bagaimana perasaan mereka",
      "Mengidentifikasi seseorang yang bisa mereka ajak bicara ketika perubahan terasa sulit",
      "Mendeskripsikan satu strategi yang membantu mereka menghadapi perubahan, seperti mempertahankan rutinitas yang familiar"
    ],
    assessmentPrompt: "Ketika sesuatu berubah dalam hidup {{name}} — seperti mendapat guru baru di sekolah — bisakah mereka berbicara tentang bagaimana perasaan mereka dan memikirkan cara untuk membantu mereka beradaptasi?"
  },
  "mt_UGf6jICEhs": {
    name: "Belajar dari Kesalahan",
    description: "Memahami bahwa membuat kesalahan adalah bagian normal dari belajar dan bahwa semua orang — termasuk orang dewasa — membuat kesalahan, dan mulai melihat kesalahan sebagai kesempatan untuk belajar bukan alasan untuk menyerah",
    evidence: [
      "Mendeskripsikan waktu mereka membuat kesalahan dan apa yang mereka pelajari darinya",
      "Merespons kesalahan dengan mencoba lagi alih-alih menyerah",
      "Menjelaskan mengapa kesalahan membantu orang belajar"
    ],
    assessmentPrompt: "Jika {{name}} mendapat jawaban salah di kelas atau gagal selama permainan, apakah mereka bangkit dan terus mencoba alih-alih menutup diri atau mengatakan 'Aku tidak bisa'?"
  },
  "mt_nNDX_jZ-cb": {
    name: "Kesabaran dan Penundaan Kepuasan",
    description: "Menunggu hal-hal yang mereka inginkan tanpa menjadi sangat tertekan — melatih kesabaran dan penundaan kepuasan dalam situasi sehari-hari seperti menunggu giliran, menunggu hadiah, atau menunggu bantuan",
    evidence: [
      "Menunggu giliran dalam permainan atau aktivitas tanpa keluhan yang konstan",
      "Mendeskripsikan apa yang mereka lakukan untuk membantu diri sendiri menunggu, seperti memikirkan sesuatu yang lain",
      "Menjelaskan mengapa terkadang kita harus menunggu dan bahwa itu adalah keterampilan yang bisa mereka latih"
    ],
    assessmentPrompt: "Jika {{name}} harus menunggu giliran untuk sesuatu yang sangat mereka inginkan — seperti giliran di iPad atau dilayani makan malam — bisakah mereka menunggu tanpa drama yang besar?"
  },
  "mt_SeNxOZTHCN": {
    name: "Kata-kata untuk Perasaan Besar",
    description: "Mengetahui dan menggunakan kata-kata kunci untuk mengelola perasaan besar — tenang, strategi, mengatasi, menenangkan, kesabaran, kewalahan, dan bernapas — dan memahami bahwa memiliki kata-kata untuk gagasan-gagasan ini adalah langkah pertama untuk menggunakannya",
    evidence: [
      "Menggunakan kata-kata seperti 'frustrasi', 'cemas', 'kewalahan', dan 'kecewa' dengan tepat untuk mendeskripsikan bagaimana perasaan mereka di saat-saat sulit",
      "Menjelaskan apa arti strategi 'menenangkan diri' dengan kata-kata mereka sendiri dan menyebutkan setidaknya dua yang telah mereka coba (misalnya, napas dalam, menghitung, berjalan menjauh)",
      "Membedakan antara perasaan yang mirip — misalnya menjelaskan perbedaan antara marah dan kecewa"
    ],
    assessmentPrompt: "Ketika {{name}} merasa sangat sedih atau frustrasi, bisakah mereka menggunakan kata-kata seperti 'Aku perlu menenangkan diri' atau 'Aku merasa kewalahan' alih-alih hanya bertindak?"
  },
  "mt_miGrca8zaS": {
    name: "Membagi Tugas menjadi Langkah-langkah",
    description: "Membagi tugas yang menantang menjadi langkah-langkah yang lebih kecil dan dapat dikelola alih-alih merasa kewalahan oleh keseluruhan — dan merayakan kemajuan di sepanjang jalan",
    evidence: [
      "Mengambil tugas yang menantang dan mencantumkan setidaknya tiga langkah yang lebih kecil untuk menyelesaikannya",
      "Memulai dengan langkah pertama alih-alih menunda seluruh tugas",
      "Mengakui kemajuan setelah menyelesaikan setiap langkah"
    ],
    assessmentPrompt: "Jika {{name}} memiliki proyek sekolah besar yang terasa kewalahan, bisakah mereka membaginya menjadi langkah-langkah yang lebih kecil — seperti 'pertama aku akan riset, lalu aku akan menulis pendahuluan' — alih-alih panik tentang keseluruhannya?"
  },
  "mt_j8Pv3s7TZR": {
    name: "Memilih Strategi Penghadapan yang Tepat",
    description: "Memahami bahwa situasi yang berbeda membutuhkan strategi penghadapan yang berbeda — apa yang berhasil untuk kemarahan mungkin tidak berhasil untuk kesedihan, dan apa yang membantu di sekolah mungkin berbeda dari apa yang membantu di rumah",
    evidence: [
      "Menyebutkan setidaknya dua strategi penghadapan berbeda dan menjelaskan kapan masing-masing paling berguna",
      "Memilih strategi yang tepat berdasarkan situasi dan emosi spesifik",
      "Merefleksikan waktu strategi tidak berhasil dan menjelaskan apa yang mungkin mereka coba sebagai gantinya"
    ],
    assessmentPrompt: "Bisakah {{name}} mengenali bahwa ketika mereka marah mereka perlu melakukan sesuatu yang fisik seperti berjalan-jalan, tetapi ketika mereka khawatir mereka perlu membicarakannya — alih-alih menggunakan pendekatan yang sama untuk setiap perasaan sulit?"
  },
  "mt_i1kk9HDctI": {
    name: "Kosakata: Ketahanan dan Diri",
    description: "Mengetahui dan menggunakan kosakata ketahanan dan pengelolaan diri — termasuk mengatur, ketahanan, pola pikir pertumbuhan, pola pikir tetap, percakapan diri, pemicu, kemunduran, bertahan, dan tekanan — dan memahami apa arti setiap kata dalam praktik",
    evidence: [
      "Menjelaskan apa arti 'ketahanan' dengan kata-kata mereka sendiri dan memberikan contoh waktu mereka terus berusaha ketika sesuatu sulit",
      "Menggunakan 'pola pikir pertumbuhan' dengan benar — misalnya 'Aku belum bisa, tetapi aku bisa berkembang dengan latihan'",
      "Mendefinisikan 'regulasi diri' dan mendeskripsikan strategi yang mereka gunakan untuk mengelola frustrasi atau kemunduran"
    ],
    assessmentPrompt: "Jika tim {{name}} kalah pertandingan atau mereka gagal dalam ujian, bisakah mereka berbicara tentang apa yang terjadi menggunakan kata-kata seperti 'ketahanan' atau 'pola pikir pertumbuhan' — menunjukkan bahwa mereka memahami perbedaan antara menyerah dan bangkit kembali?"
  },
  "mt_Jd2aWEUJ9G": {
    name: "Toolkit Penghadapan Pribadi",
    description: "Merefleksikan strategi regulasi diri dan penghadapan mana yang paling berhasil bagi mereka secara pribadi, membangun 'toolkit' pendekatan yang bisa mereka gunakan dalam situasi yang berbeda dan berbagi apa yang berhasil dengan orang lain",
    evidence: [
      "Mendeskripsikan setidaknya tiga strategi penghadapan pribadi dan kapan masing-masing paling efektif",
      "Merekomendasikan strategi kepada teman berdasarkan situasi spesifik teman itu",
      "Mengevaluasi apakah strategi yang mereka coba berhasil dengan baik dan menjelaskan penalaran mereka"
    ],
    assessmentPrompt: "Bisakah {{name}} memberitahu Anda 'Ketika aku stres karena ujian aku berjalan-jalan dan itu membantu, tetapi ketika aku sedih aku perlu berbicara dengan seseorang' — menunjukkan bahwa mereka mengetahui toolkit penghadapan mereka sendiri?"
  },
  "mt_cJjnPjuvCU": {
    name: "Penetapan Tujuan Pribadi",
    description: "Menetapkan tujuan pribadi yang realistis, membuat rencana sederhana untuk mencapainya, memantau kemajuan mereka sendiri, dan menyesuaikan pendekatan mereka ketika segalanya tidak berjalan dengan baik",
    evidence: [
      "Menulis atau menyatakan tujuan pribadi yang spesifik dan dapat dicapai dengan jangka waktu",
      "Mendeskripsikan langkah-langkah yang akan mereka ambil untuk mencapai tujuan",
      "Meninjau kemajuan mereka dan menyesuaikan rencana mereka ketika sesuatu tidak berhasil"
    ],
    assessmentPrompt: "Bisakah {{name}} menetapkan tujuan untuk diri mereka sendiri — seperti meningkatkan berenang atau menyelesaikan seri buku — dan benar-benar bekerja ke arah itu langkah demi langkah, menyesuaikan rencana jika diperlukan?"
  },
  "mt_Amw5ikSSQI": {
    name: "Ketahanan dan Bangkit Kembali",
    description: "Memahami ketahanan sebagai kemampuan untuk pulih dari kemunduran, beradaptasi dengan keadaan sulit, dan terus berjalan — mengenali bahwa ketahanan adalah keterampilan yang berkembang melalui pengalaman, bukan sifat yang Anda miliki atau tidak",
    evidence: [
      "Mendefinisikan ketahanan dengan kata-kata mereka sendiri dan menjelaskan mengapa itu penting",
      "Mendeskripsikan waktu mereka bangkit kembali dari kemunduran dan apa yang membantu mereka pulih",
      "Menjelaskan bahwa ketahanan tumbuh melalui pengalaman dan bahwa berjuang tidak berarti Anda lemah"
    ],
    assessmentPrompt: "Setelah kekecewaan nyata — seperti tidak mendapat peran dalam pertunjukan sekolah atau gagal ujian yang mereka pelajari — bisakah {{name}} merasa sedih tetapi kemudian bangkit dan mencari tahu apa yang harus dilakukan selanjutnya?"
  },
  "mt_HoJGVsMO7H": {
    name: "Manajemen Waktu dan Perhatian",
    description: "Mengelola waktu dan perhatian mereka sendiri secara efektif — memprioritaskan tugas, meminimalkan gangguan, dan mempertahankan fokus pada pekerjaan penting bahkan ketika itu bukan opsi yang paling menarik",
    evidence: [
      "Membuat rencana sederhana untuk menyelesaikan beberapa tugas dalam urutan yang masuk akal",
      "Mengidentifikasi gangguan umum mereka sendiri dan mendeskripsikan strategi untuk mengelolanya",
      "Menyelesaikan tugas yang kurang menyenangkan sebelum tugas yang lebih menyenangkan tanpa pengingat yang konstan"
    ],
    assessmentPrompt: "Ketika {{name}} memiliki pekerjaan rumah yang harus diselesaikan tetapi juga ingin bermain game, bisakah mereka mengelola waktu mereka — mengerjakan pekerjaan rumah terlebih dahulu atau mengatur timer — alih-alih selalu meminta Anda untuk menegakkannya?"
  },
  "mt_0VOZSVjo6c": {
    name: "Stres yang Baik dan Stres yang Buruk",
    description: "Membedakan antara eustres (jenis stres yang produktif dan memotivasi) dan distress (stres yang berbahaya dan menghancurkan); menjelaskan respons fisiologis stres (lawan-lari-beku, sumbu HPA) dan bagaimana stres kronis mempengaruhi tubuh dan pikiran; mengidentifikasi pemicu stres remaja yang umum (tekanan akademis, perbandingan sosial, perubahan fisik, ketidakpastian tentang masa depan); mengevaluasi strategi penghadapan berbasis bukti (olahraga, tidur, kesadaran, dukungan sosial, penulisan ekspresif); mengenali tanda-tanda peringatan bahwa stres telah berubah menjadi kecemasan atau depresi dan mengetahui di mana mendapatkan bantuan",
    evidence: [],
    assessmentPrompt: "Ketika {{name}} tertekan karena ujian atau situasi sosial, bisakah mereka menyebutkan dua atau tiga strategi yang benar-benar membantu mereka mengelola stres — dan menjelaskan mengapa masing-masing benar-benar berhasil, bukan hanya karena 'membuat mereka merasa lebih baik'?"
  },
  "mt_0ewYhTSHtP": {
    name: "Kebiasaan dan Motivasi",
    description: "Memahami pembentukan kebiasaan melalui lingkaran pemicu-rutinitas-hadiah dan bagaimana merancang kebiasaan baru secara sadar; membedakan motivasi intrinsik (melakukan sesuatu karena nilainya sendiri) dari motivasi ekstrinsik (hadiah/hukuman) dan memahami kapan masing-masing lebih efektif; memahami penundaan sebagai masalah regulasi emosi (menghindari ketidaknyamanan) bukan kegagalan manajemen waktu; menerapkan teori determinasi diri (otonomi, kompetensi, keterkaitan) untuk meningkatkan motivasi intrinsik; merancang lingkungan yang mengurangi gesekan untuk perilaku yang diinginkan",
    evidence: [],
    assessmentPrompt: "Jika {{name}} terus bermaksud melakukan sesuatu yang penting tetapi menemukan diri mereka menundanya, bisakah mereka menjelaskan alasan sebenarnya mengapa orang menunda — itu bukan kemalasan — dan mendeskripsikan satu perubahan praktis yang bisa mereka buat pada lingkungan mereka untuk mempermulai memulai?"
  },
  "mt__J2BO4V95l": {
    name: "Pertumbuhan Melalui Kesulitan",
    description: "Memahami bahwa menghadapi tantangan serius bisa mengarah pada pertumbuhan nyata dalam tiga domain: perspektif baru tentang kehidupan, hubungan yang lebih baik, dan rasa kemampuan pribadi yang diperkuat (pertumbuhan pascatrauma); membedakan pertumbuhan nyata dari positivitas beracun ('semua terjadi karena suatu alasan') dan dari penolakan; memahami bahwa ketahanan tidak berarti tidak terpengaruh oleh kesulitan tetapi pulih dan tumbuh melalui itu; mengembangkan filosofi pribadi untuk menghadapi kemunduran berdasarkan pembuatan makna; menjelajahi cara mendukung orang lain yang mengalami kesulitan serius tanpa meminimalkan pengalaman mereka",
    evidence: [],
    assessmentPrompt: "Apakah {{name}} pernah melewati sesuatu yang benar-benar sulit dan menemukan bahwa itu mengubah mereka dengan cara yang bermakna? Bisakah mereka menjelaskan apa arti pertumbuhan pascatrauma dan bagaimana itu berbeda dari hanya 'melupakan' atau berpura-pura bahwa sesuatu yang sulit tidak apa-apa?"
  }

};
export function getTranslatedTopic(topic: Topic, lang: string): Topic {
  if (lang === 'id') {
    const tr = contentTranslations[topic.id];
    if (tr) {
      return {
        ...topic,
        name: tr.name,
        description: tr.description,
        evidence: tr.evidence,
        assessmentPrompt: tr.assessmentPrompt,
      };
    }
  }
  return topic;
}
