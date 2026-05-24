// Data Destinasi Wisata
// Data Destinasi Wisata
const destinations = [
    {
        id: 1,
        name: "Taman Nasional Bunaken",
        description: "Taman Nasional Bunaken berada di pusat segitiga terumbu karang dunia, dengan keanekaragaman hayati berupa luasan terumbu karang 11.709 ha dengan 68 genera dan 390 spesies, mangrove 2.434 ha dengan 28 spesies, serta padang lamun 5.108 ha. Taman ini juga menjadi habitat berbagai spesies ikan, moluska, reptil, dan mamalia laut.\n\nPembentukan Taman Nasional Bunaken berdasarkan SK Menteri Kehutanan Nomor 730/Kpts-II/1991 yang diteken pada 15 Oktober 1991, dan diresmikan oleh Presiden Soeharto pada 24 Desember 1992. Pada tahun 2005, kawasan ini secara resmi diakui sebagai situs warisan dunia oleh UNESCO.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25uP3SibFKNughsTDcDuLBorwmEkAYgSIBQ&s",
        location: "https://maps.google.com/?q=Bunaken+National+Park",
        hours: "08:00 - 17:00 WITA",
        rating: 4.8,
        reviews: [],
        sources: [
            "https://ksdae.menlhk.go.id/info/4780/refleksi27-tahun-taman-nasional-bunaken.html",
            "https://tn-bunaken.com/",
            "https://id.wikipedia.org/wiki/Taman_Nasional_Bunaken"
        ]
    },
    {
        id: 2,
        name: "Gunung Lokon",
        description: "Gunung api Lokon terdapat di Kota Administratif Tomohon, Provinsi Sulawesi Utara, dengan posisi geografi terletak pada 1°21'30\" Lintang Utara dan 124°47'30\" Bujur Timur, dengan tinggi puncaknya sekitar 1.579 m di atas permukaan laut.\n\nGunung Lokon adalah sebuah gunung berapi di dekat Kota Tomohon, Provinsi Sulawesi Utara. Sesuai namanya, Gunung Lokon berarti yang tertua dan terbesar. Sebagai salah satu dari dua puncak yang membentuk kompleks vulkanik Lokon-Empung, gunung ini menawarkan keindahan alam, fenomena geologi, serta sejarah sosial budaya masyarakat sekitarnya.",
        image: "https://cdn1-production-images-kly.akamaized.net/jSqbfbsOPPUisY7uahLFtp8faNw=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4841919/original/002398600_1716560987-WhatsApp_Image_2024-05-24_at_21.10.49.jpeg",
        location: "https://maps.google.com/?q=Mount+Lokon",
        hours: "06:00 - 16:00 WITA",
        rating: 4.5,
        reviews: [],
        sources: [
            "https://geologi.esdm.go.id/media-center/press-release-aktivitas-vulkanik-g-lokon-juni-2023",
            "https://id.wikipedia.org/wiki/Gunung_Lokon"
        ]
    },
    {
        id: 3,
        name: "Danau Tondano",
        description: "Danau Tondano yang berada di dataran tinggi Minahasa merupakan danau terbesar di Sulawesi Utara. Danau Tondano terbentuk akibat aktivitas vulkanis gunung purba dan wilayahnya diampit oleh Gunung Kaweng, Bukit Tampusu, Pegunungan Lembean, dan Gunung Masarang.\n\nLuas danau ini sekitar 4.278 hektar dengan pemandangan yang menakjubkan. Terdapat 'pulau' yang bernama Pulau Likri yang berada di tengah danau. Danau Tondano merupakan salah satu danau yang diprioritaskan penanganannya secara nasional, dan statusnya telah dituangkan dalam Perda Sulut nomor 1 tahun 2014 tentang RTRW Provinsi Sulawesi Utara sebagai Kawasan Strategis Nasional.",
        image: "https://img.inews.co.id/media/620/files/inews_new/2023/08/11/legenda_danau_tondano.jpg",
        location: "https://maps.google.com/?q=Lake+Tondano",
        hours: "24 Jam",
        rating: 4.3,
        reviews: [],
        sources: [
            "https://indonesia.go.id/kategori/pariwisata/8498/tansformasi-tondano-dari-warisan-budaya-minahasa-menjadi-ikon-wisata-digital",
            "https://tonsealama.digitaldesa.id/wisata/danau-tondano"
        ]
    },
    {
        id: 4,
        name: "Pa'Dior Cultural Center",
        description: "Pa'Dior adalah tempat wisata edukasi yang menyajikan berbagai wahana edukasi, di antaranya Wale Anti Narkoba, Museum Pinawetengan (museum edukasi tentang kebudayaan Minahasa), dan Wale Manguni (rumah edukasi tentang burung Manguni khas Minahasa). Di Pa'Dior juga terdapat galeri dan rumah produksi kain tenun yang diproduksi secara tradisional.\n\nPusat kebudayaan ini terletak di kawasan pegunungan berhawa dingin. Pengunjung bisa melihat berbagai bentuk kebudayaan mulai dari hasil tenun hingga alat musik khas Sulut. Salah satu daya tarik utamanya adalah contra bass berukuran raksasa yang masuk dalam Guinness Book of Records sebagai contra bass terbesar di dunia.",
        image: "https://indonesiakaya.com/wp-content/uploads/2020/10/7__IMG_8227_Di_sini_pengunjung_juga_bisa_melihat_alat_musik_tiup_contra_bass_berukuran_raksasa_CROP.jpg",
        location: "https://maps.google.com/?q=Pa%27Dior+Cultural+Center",
        hours: "09:00 - 18:00 WITA",
        rating: 4.6,
        reviews: [],
        sources: [
            "https://padior.org/about",
            "https://indonesiakaya.com/pustaka-indonesia/melihat-contra-bass-terbesar-di-pusat-kebudayaan-padior/"
        ]
    },
    {
        id: 5,
        name: "Danau Linow",
        description: "Danau Linow adalah salah satu destinasi wisata terkenal di Kota Tomohon, Sulawesi Utara. Danau ini memiliki ciri khas unik yaitu warna air yang dapat berubah-ubah, mulai dari hijau, biru, hingga kekuningan. Perubahan warna ini terjadi karena kandungan belerang serta aktivitas vulkanik di bawah danau.\n\nDanau Linow adalah sebuah danau vulkanik yang terletak di Kota Tomohon, Sulawesi Utara. Beberapa lubang hidrotermal memuntahkan gas panas dari tepi dan kedalaman danau. Kata 'Linouw' berasal dari bahasa Minahasa yang berarti 'tempat berkumpulnya air'. Danau Linow terbentuk karena letusan gunung berapi sekitar 500.000 tahun yang lalu.",
        image: "https://www.tempatwisata.pro/users_media/3150/Danau%20Linow.jpg",
        location: "https://maps.google.com/?q=Lake+Linow",
        hours: "07:00 - 18:00 WITA",
        rating: 4.7,
        reviews: [],
        sources: [
            "https://dispar.tomohon.go.id/danau-linow/",
            "https://tiff.tomohon.go.id/tempat-wisata-di-kota-tomohon/",
            "https://id.wikipedia.org/wiki/Danau_Linouw"
        ]
    },
    {
        id: 6,
        name: "Paal Beach",
        description: "Pantai Paal adalah pantai yang terletak di Desa Marinsow, Kecamatan Likupang Timur, Kabupaten Minahasa Utara, Sulawesi Utara. Pantai ini terkenal dengan pasir putihnya yang lembut dan air laut yang jernih serta pemandangan yang eksotis.\n\nPantai Paal mulai dibuka untuk umum sekitar tahun 2014 dan kini telah berkembang menjadi tujuan wisata populer di kawasan Likupang. Nama 'Paal' sendiri berasal dari 'pal' atau patok yang dulunya digunakan sebagai pembatas kampung di daerah tersebut. Kawasan Likupang telah ditetapkan sebagai salah satu Destinasi Super Prioritas oleh pemerintah Indonesia.",
        image: "https://thumbs.dreamstime.com/b/beautiful-paal-beach-likupang-manado-indonesia-view-254006924.jpg",
        location: "https://maps.google.com/?q=Paal+Beach",
        hours: "07:00 - 18:00 WITA",
        rating: 4.4,
        reviews: [],
        sources: [
            "https://www.pesonalikupang.com/destinations/pantai-paal-01k1xfwbwmvtkg3nrfvhe1yr9q/show",
            "https://regional.kompas.com/read/2022/11/12/152058878/pantai-paal-wisata-di-sulawesi-utara-daya-tarik-jam-buka-dan-rute"
        ]
    }
];

// Data Budaya
const culturalItems = [
    {
        id: 1,
        name: "Tari Kabasaran",
        description: "Tarian perang tradisional Minahasa yang menggambarkan keberanian prajurit. Para penari menggunakan pakaian adat lengkap dengan senjata parang dan tombak.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXt3Z040nKSOcU7gYiSu2NJcARKz-x5Xy_w&s",
        video: "https://www.youtube.com/embed/27CqwfBq5No",
        history: "Tari Kabasaran berasal dari Minahasa, Sulawesi Utara. Tarian ini awalnya ditampilkan sebelum para prajurit berperang untuk membangkitkan semangat juang. Para penari disebut 'Kabasaran' yang berarti prajurit pilihan."
    },
    {
        id: 2,
        name: "Tari Maengket",
        description: "Tarian tradisional yang melambangkan rasa syukur atas hasil panen. Ditarikan secara berkelompok dengan gerakan lembut dan dinamis.",
        image: "https://1001indonesia.net/asset/2022/01/Tari-Maengket.jpg",
        video: "https://www.youtube.com/embed/hTzr3OBbPmo",
        history: "Maengket adalah tarian panen yang sudah ada sejak zaman nenek moyang orang Minahasa sebagai ungkapan terima kasih kepada Tuhan atas hasil panen yang melimpah."
    },
    {
        id: 3,
        name: "Kolintang",
        description: "Alat musik tradisional dari kayu yang menghasilkan nada indah. Dimainkan dengan cara dipukul menggunakan stik khusus.",
        image: "https://akcdn.detik.net.id/visual/2023/04/27/alat-musik-kolintang_169.jpeg?w=1200",
        video: "https://www.youtube.com/embed/qEERrx3-9Es",
        history: "Kolintang berasal dari kata 'Linting' yang berarti suara kecil. Alat musik ini berkembang di Minahasa sejak abad ke-19 dan terbuat dari kayu lokal seperti kayu cempaka."
    },
    {
        id: 4,
        name: "Rumah Panggung (Wale Wangko)",
        description: "Arsitektur tradisional rumah adat Minahasa dengan bentuk panggung dan atap yang menjulang tinggi.",
        image: "https://img.inews.co.id/media/1200/files/inews_new/2023/02/24/rumah_walewangko.jpg",
        video: "https://www.youtube.com/embed/zHY6nUVmGOU",
        history: "Wale Wangko adalah rumah adat Minahasa yang digunakan sebagai tempat musyawarah dan upacara adat. Dibangun tanpa paku dengan struktur kayu yang kuat."
    }
];

// ==================== DATA MANADO DIALECT ====================
const dialectPhrases = [
    { id: 1, indonesia: "Selamat pagi", manado: "Selamat pagi", english: "Good morning", mandarin: "早上好 (Zǎoshang hǎo)" },
    { id: 2, indonesia: "Selamat siang", manado: "Selamat siang", english: "Good afternoon", mandarin: "下午好 (Xiàwǔ hǎo)" },
    { id: 3, indonesia: "Selamat malam", manado: "Selamat malam", english: "Good evening", mandarin: "晚上好 (Wǎnshàng hǎo)" },
    { id: 4, indonesia: "Selamat tinggal", manado: "Selamat tinggal", english: "Goodbye", mandarin: "再见 (Zàijiàn)" },
    { id: 5, indonesia: "Terima kasih", manado: "Makasih", english: "Thank you", mandarin: "谢谢 (Xièxie)" },
    { id: 6, indonesia: "Terima kasih banyak", manado: "Makasih banyak", english: "Thank you very much", mandarin: "非常感谢 (Fēicháng gǎnxiè)" },
    { id: 7, indonesia: "Sama-sama", manado: "Sama-sama", english: "You're welcome", mandarin: "不客气 (Bù kèqi)" },
    { id: 8, indonesia: "Maaf", manado: "Maaf", english: "Sorry", mandarin: "对不起 (Duìbuqǐ)" },
    { id: 9, indonesia: "Permisi", manado: "Permisi", english: "Excuse me", mandarin: "打扰一下 (Dǎrǎo yīxià)" },
    { id: 10, indonesia: "Iya", manado: "Iyo", english: "Yes", mandarin: "是 (Shì)" },
    { id: 11, indonesia: "Tidak", manado: "Nda", english: "No", mandarin: "不是 (Bù shì)" },
    { id: 12, indonesia: "Tidak tahu", manado: "Nda tau", english: "I don't know", mandarin: "不知道 (Bù zhīdào)" },
    { id: 13, indonesia: "Tidak mengerti", manado: "Nda mangarti", english: "I don't understand", mandarin: "我不明白 (Wǒ bù míngbai)" },
    { id: 14, indonesia: "Bisa bicara bahasa Inggris?", manado: "Boleh bicara bahasa Inggris?", english: "Can you speak English?", mandarin: "你会说英语吗？(Nǐ huì shuō Yīngyǔ ma?)" },
    { id: 15, indonesia: "Tolong", manado: "Minta tolong", english: "Please", mandarin: "请 (Qǐng)" },
    { id: 16, indonesia: "Ada yang bisa bantu?", manado: "Ada yang bisa bantu?", english: "Can someone help?", mandarin: "有人能帮忙吗？(Yǒurén néng bāngmáng ma?)" },
    { id: 17, indonesia: "Saya butuh bantuan", manado: "Kita minta bantuan dang", english: "I need help", mandarin: "我需要帮助 (Wǒ xūyào bāngzhù)" },
    { id: 18, indonesia: "Berapa harganya?", manado: "Depe harga brapa?", english: "How much is this?", mandarin: "这个多少钱？(Zhège duōshǎo qián?)" },
    { id: 19, indonesia: "Mahal sekali", manado: "Mahal skali", english: "Too expensive", mandarin: "太贵了 (Tài guì le)" },
    { id: 20, indonesia: "Bisa kurang?", manado: "Boleh kurang?", english: "Can you lower the price?", mandarin: "可以便宜一点吗？(Kěyǐ piányi yīdiǎn ma?)" },
    { id: 21, indonesia: "Saya mau beli ini", manado: "Kita mo bli ini", english: "I want to buy this", mandarin: "我想买这个 (Wǒ xiǎng mǎi zhège)" },
    { id: 22, indonesia: "Boleh coba?", manado: "Boleh coba?", english: "Can I try?", mandarin: "可以试一下吗？(Kěyǐ shì yīxià ma?)" },
    { id: 23, indonesia: "Tolong bungkuskan", manado: "Tolong bungkus", english: "Please wrap it", mandarin: "请包起来 (Qǐng bāo qǐlái)" },
    { id: 24, indonesia: "Saya mau makan", manado: "Kita mo makan", english: "I want to eat", mandarin: "我想吃饭 (Wǒ xiǎng chī fàn)" },
    { id: 25, indonesia: "Saya mau minum", manado: "Kita mo minum", english: "I want to drink", mandarin: "我想喝水 (Wǒ xiǎng hē shuǐ)" },
    { id: 26, indonesia: "Enak sekali", manado: "Enak skali", english: "Very delicious", mandarin: "非常好吃 (Fēicháng hǎochī)" },
    { id: 27, indonesia: "Tidak enak", manado: "Nda enak", english: "Not tasty", mandarin: "不好吃 (Bù hǎochī)" },
    { id: 28, indonesia: "Ada menu vegetarian?", manado: "Ada menu vegetarian?", english: "Is there a vegetarian menu?", mandarin: "有素食菜单吗？(Yǒu sùshí càidān ma?)" },
    { id: 29, indonesia: "Saya alergi kacang", manado: "Kita alergi kacang", english: "I am allergic to peanuts", mandarin: "我对花生过敏 (Wǒ duì huāshēng guòmǐn)" },
    { id: 30, indonesia: "Tolong air putih", manado: "Minta air putih dang", english: "Please give me water", mandarin: "请给我水 (Qǐng gěi wǒ shuǐ)" },
    { id: 31, indonesia: "Di mana toilet?", manado: "WC ada di mana?", english: "Where is the toilet?", mandarin: "厕所在哪里？(Cèsuǒ zài nǎlǐ?)" },
    { id: 32, indonesia: "Di mana hotel?", manado: "Hotel ada di mana?", english: "Where is the hotel?", mandarin: "酒店在哪里？(Jiǔdiàn zài nǎlǐ?)" },
    { id: 33, indonesia: "Di mana bandara?", manado: "Bandara di mana?", english: "Where is the airport?", mandarin: "机场在哪里？(Jīchǎng zài nǎlǐ?)" },
    { id: 34, indonesia: "Di mana stasiun?", manado: "Di mana stasiun?", english: "Where is the station?", mandarin: "车站在哪里？(Chēzhàn zài nǎlǐ?)" },
    { id: 35, indonesia: "Belok kiri", manado: "Belok kiri", english: "Turn left", mandarin: "左转 (Zuǒ zhuǎn)" },
    { id: 36, indonesia: "Belok kanan", manado: "Belok kanan", english: "Turn right", mandarin: "右转 (Yòu zhuǎn)" },
    { id: 37, indonesia: "Lurus terus", manado: "Lurus trus", english: "Go straight", mandarin: "直走 (Zhí zǒu)" },
    { id: 38, indonesia: "Berhenti di sini", manado: "Stop di sini", english: "Stop here", mandarin: "停在这里 (Tíng zài zhèlǐ)" },
    { id: 39, indonesia: "Berapa lama ke sana?", manado: "Brapa lama sampe sana?", english: "How long to get there?", mandarin: "到那里需要多长时间？(Dào nàlǐ xūyào duō cháng shíjiān?)" },
    { id: 40, indonesia: "Saya mau ke pantai", manado: "Kita mo ka pante", english: "I want to go to the beach", mandarin: "我想去海滩 (Wǒ xiǎng qù hǎitān)" },
    { id: 41, indonesia: "Saya mau ke gunung", manado: "Kita mo ka gunung", english: "I want to go to the mountain", mandarin: "我想去山上 (Wǒ xiǎng qù shān shàng)" },
    { id: 42, indonesia: "Saya mau ke pulau", manado: "Kita mo ka pulau", english: "I want to go to the island", mandarin: "我想去岛上 (Wǒ xiǎng qù dǎo shàng)" },
    { id: 43, indonesia: "Sewa mobil berapa?", manado: "Sewa mobil brapa?", english: "How much for car rental?", mandarin: "租车多少钱？(Zū chē duōshǎo qián?)" },
    { id: 44, indonesia: "Bisa antar ke sana?", manado: "Boleh antar ka sana?", english: "Can you take me there?", mandarin: "你能带我去那里吗？(Nǐ néng dài wǒ qù nàlǐ ma?)" },
    { id: 45, indonesia: "Pukul berapa sekarang?", manado: "Jam brapa sekarang?", english: "What time is it?", mandarin: "现在几点了？(Xiànzài jǐ diǎn le?)" },
    { id: 46, indonesia: "Jam berapa buka?", manado: "Buka jam?", english: "What time does it open?", mandarin: "几点开门？(Jǐ diǎn kāimén?)" },
    { id: 47, indonesia: "Jam berapa tutup?", manado: "Tutup jam?", english: "What time does it close?", mandarin: "几点关门？(Jǐ diǎn guānmén?)" },
    { id: 48, indonesia: "Boleh foto di sini?", manado: "Boleh ba foto di sini?", english: "Can I take a photo here?", mandarin: "可以在这里拍照吗？(Kěyǐ zài zhèlǐ pāizhào ma?)" },
    { id: 49, indonesia: "Tolong foto saya", manado: "Tolong foto akang pa kita", english: "Please take my photo", mandarin: "请帮我拍照 (Qǐng bāng wǒ pāizhào)" },
    { id: 50, indonesia: "Pemandangan indah", manado: "Pemandangan bagus", english: "Beautiful view", mandarin: "风景很美 (Fēngjǐng hěn měi)" },
    { id: 51, indonesia: "Saya sakit", manado: "Kita ada sakit", english: "I am sick", mandarin: "我生病了 (Wǒ shēngbìng le)" },
    { id: 52, indonesia: "Saya sakit perut", manado: "Ada sakit perut kita", english: "I have a stomachache", mandarin: "我肚子疼 (Wǒ dùzi téng)" },
    { id: 53, indonesia: "Saya pusing", manado: "Ada pusing kita", english: "I am dizzy", mandarin: "我头晕 (Wǒ tóuyūn)" },
    { id: 54, indonesia: "Saya demam", manado: "Ba rasa panas kita", english: "I have a fever", mandarin: "我发烧了 (Wǒ fāshāo le)" },
    { id: 55, indonesia: "Panggilkan dokter", manado: "Pangge pa dokter", english: "Call a doctor", mandarin: "叫医生 (Jiào yīshēng)" },
    { id: 56, indonesia: "Di mana apotek?", manado: "Apotek di mana?", english: "Where is the pharmacy?", mandarin: "药房在哪里？(Yàofáng zài nǎlǐ?)" },
    { id: 57, indonesia: "Saya butuh obat", manado: "Butuh obat kita", english: "I need medicine", mandarin: "我需要药 (Wǒ xūyào yào)" },
    { id: 58, indonesia: "Saya kehilangan dompet", manado: "Ilang dompet kita", english: "I lost my wallet", mandarin: "我的钱包丢了 (Wǒ de qiánbāo diū le)" },
    { id: 59, indonesia: "Saya kehilangan paspor", manado: "Ilang paspor kita", english: "I lost my passport", mandarin: "我的护照丢了 (Wǒ de hùzhào diū le)" },
    { id: 60, indonesia: "Tolong panggil polisi", manado: "Tolong pangge polisi", english: "Please call the police", mandarin: "请叫警察 (Qǐng jiào jǐngchá)" },
    { id: 61, indonesia: "Ada restoran di sini?", manado: "Ada restoran di sini?", english: "Is there a restaurant here?", mandarin: "这里有餐厅吗？(Zhèlǐ yǒu cāntīng ma?)" },
    { id: 62, indonesia: "Saya mau pesan makanan", manado: "Kita mo ba pesan makanan", english: "I want to order food", mandarin: "我想点餐 (Wǒ xiǎng diǎn cān)" },
    { id: 63, indonesia: "Minta bonnya", manado: "Minta bill dang", english: "May I have the bill", mandarin: "请给我账单 (Qǐng gěi wǒ zhàngdān)" },
    { id: 64, indonesia: "Termasuk pajak?", manado: "Pajak so termasuk?", english: "Is tax included?", mandarin: "含税吗？(Hán shuì ma?)" },
    { id: 65, indonesia: "Boleh bayar pakai kartu?", manado: "Boleh bayar pake kartu?", english: "Can I pay by card?", mandarin: "可以用卡支付吗？(Kěyǐ yòng kǎ zhīfù ma?)" },
    { id: 66, indonesia: "Ada ATM di sini?", manado: "Ada ATM di sini?", english: "Is there an ATM here?", mandarin: "这里有ATM吗？(Zhèlǐ yǒu ATM ma?)" },
    { id: 67, indonesia: "Saya mau tukar uang", manado: "Kita mo tukar uang", english: "I want to exchange money", mandarin: "我想换钱 (Wǒ xiǎng huàn qián)" },
    { id: 68, indonesia: "Kursnya berapa?", manado: "Kurs brapa?", english: "What is the exchange rate?", mandarin: "汇率是多少？(Huìlǜ shì duōshǎo?)" },
    { id: 69, indonesia: "Saya mau check-in", manado: "Kita mo ba check-in", english: "I want to check-in", mandarin: "我想办理入住 (Wǒ xiǎng bànlǐ rùzhù)" },
    { id: 70, indonesia: "Saya mau check-out", manado: "Kita mo ba check-out", english: "I want to check-out", mandarin: "我想退房 (Wǒ xiǎng tuìfáng)" },
    { id: 71, indonesia: "Saya sudah pesan kamar", manado: "Kita so pesan kamar", english: "I have booked a room", mandarin: "我已经订了房间 (Wǒ yǐjīng dìng le fángjiān)" },
    { id: 72, indonesia: "Kuncinya hilang", manado: "Kunci ilang", english: "The key is lost", mandarin: "钥匙丢了 (Yàoshi diū le)" },
    { id: 73, indonesia: "Ada Wi-Fi?", manado: "Ada Wi-Fi?", english: "Is there Wi-Fi?", mandarin: "有Wi-Fi吗？(Yǒu Wi-Fi ma?)" },
    { id: 74, indonesia: "Password Wi-Fi apa?", manado: "Password Wi-Fi apa?", english: "What is the Wi-Fi password?", mandarin: "Wi-Fi密码是什么？(Wi-Fi mìmǎ shì shénme?)" },
    { id: 75, indonesia: "AC tidak dingin", manado: "AC nda dingin", english: "The AC is not cold", mandarin: "空调不冷 (Kōngtiáo bù lěng)" },
    { id: 76, indonesia: "Tolong bersihkan kamar", manado: "Tolong bersihkan kamar", english: "Please clean the room", mandarin: "请打扫房间 (Qǐng dǎsǎo fángjiān)" },
    { id: 77, indonesia: "Saya mau perpanjang menginap", manado: "Kita mo perpanjang tinggal", english: "I want to extend my stay", mandarin: "我想延长住宿 (Wǒ xiǎng yáncháng zhùsù)" },
    { id: 78, indonesia: "Bisa laundry?", manado: "Boleh ba laundry?", english: "Is laundry service available?", mandarin: "有洗衣服务吗？(Yǒu xǐyī fúwù ma?)" },
    { id: 79, indonesia: "Selamat jalan", manado: "Selamat jalan", english: "Have a safe trip", mandarin: "一路平安 (Yīlù píng'ān)" },
    { id: 80, indonesia: "Hati-hati di jalan", manado: "Hati-hati di jalan", english: "Be careful on the road", mandarin: "路上小心 (Lùshàng xiǎoxīn)" },
    { id: 81, indonesia: "Cepat sekali", manado: "Cepat skali", english: "Very fast", mandarin: "非常快 (Fēicháng kuài)" },
    { id: 82, indonesia: "Pelan-pelan saja", manado: "Pelan-pelan", english: "Slowly", mandarin: "慢一点 (Màn yīdiǎn)" },
    { id: 83, indonesia: "Bisa tunggu sebentar?", manado: "Boleh ba tunggu sadiki?", english: "Can you wait a moment?", mandarin: "能等一下吗？(Néng děng yīxià ma?)" },
    { id: 84, indonesia: "Saya buru-buru", manado: "Ada buru-buru kita", english: "I am in a hurry", mandarin: "我赶时间 (Wǒ gǎn shíjiān)" },
    { id: 85, indonesia: "Tidak masalah", manado: "Nda masalah", english: "No problem", mandarin: "没问题 (Méi wèntí)" },
    { id: 86, indonesia: "Boleh saya duduk di sini?", manado: "Boleh kita duduk di sini?", english: "May I sit here?", mandarin: "我可以坐在这里吗？(Wǒ kěyǐ zuò zài zhèlǐ ma?)" },
    { id: 87, indonesia: "Sendok / garpu", manado: "Sendok / garpu", english: "Spoon / fork", mandarin: "勺子 / 叉子 (Sháozi / chāzi)" },
    { id: 88, indonesia: "Tolong tambah es", manado: "Tolong tambah es", english: "Please add ice", mandarin: "请加冰 (Qǐng jiā bīng)" },
    { id: 89, indonesia: "Makanan pedas?", manado: "Makanan pedis?", english: "Is the food spicy?", mandarin: "这个辣吗？(Zhège là ma?)" },
    { id: 90, indonesia: "Tidak pakai micin", manado: "Nda pake micin", english: "No MSG please", mandarin: "不要味精 (Bù yào wèijīng)" },
    { id: 91, indonesia: "Saya suka Indonesia", manado: "Kita suka Indonesia", english: "I like Indonesia", mandarin: "我喜欢印度尼西亚 (Wǒ xǐhuān Yìndùníxīyà)" },
    { id: 92, indonesia: "Orang Manado ramah", manado: "Orang Manado ramah", english: "Manado people are friendly", mandarin: "万鸦老人很友好 (Wànyālǎo rén hěn yǒuhǎo)" },
    { id: 93, indonesia: "Makanan khas Manado enak", manado: "Makanan khas Manado enak", english: "Manado traditional food is delicious", mandarin: "万鸦老特色菜很好吃 (Wànyālǎo tèsè cài hěn hǎochī)" },
    { id: 94, indonesia: "Bunaken indah sekali", manado: "Bunaken bagus skali", english: "Bunaken is very beautiful", mandarin: "布纳肯非常美 (Bùnàkěn fēicháng měi)" },
    { id: 95, indonesia: "Saya mau snorkeling", manado: "Kita mo ba snorkeling", english: "I want to snorkel", mandarin: "我想浮潜 (Wǒ xiǎng fúqiǎn)" },
    { id: 96, indonesia: "Sewa peralatan snorkel", manado: "Sewa alat snorkel", english: "Rent snorkeling gear", mandarin: "租浮潜装备 (Zū fúqiǎn zhuāngbèi)" },
    { id: 97, indonesia: "Harga termasuk pemandu?", manado: "Harga so deng pemandu?", english: "Does the price include a guide?", mandarin: "价格包括导游吗？(Jiàgé bāokuò dǎoyóu ma?)" },
    { id: 98, indonesia: "Saya mau beli oleh-oleh", manado: "Kita mo ba beli oleh-oleh", english: "I want to buy souvenirs", mandarin: "我想买纪念品 (Wǒ xiǎng mǎi jìniànpǐn)" },
    { id: 99, indonesia: "Kapan kembali?", manado: "Kapan mo bale?", english: "When will you come back?", mandarin: "什么时候回来？(Shénme shíhòu huílái?)" },
    { id: 100, indonesia: "Sampai jumpa lagi", manado: "Sampai jumpa", english: "See you again", mandarin: "再见 (Zàijiàn)" }
];

function renderDialect() {
    return `
        <div class="container dialect-container">
            <div class="dialect-header">
                <h2>🗣️ Insight to the Manado Dialect</h2>
                <p>Pelajari frasa-frasa umum dalam dialek Manado untuk memudahkan komunikasi selama berwisata</p>
            </div>
            
            <div class="dialect-controls">
                <div class="search-box">
                    <input type="text" id="searchPhrase" placeholder="Cari frasa dalam Bahasa Indonesia, Manado, atau Inggris..." autocomplete="off">
                </div>
                <div class="filter-box">
                    <button class="filter-btn active" data-filter="all">Semua (${dialectPhrases.length})</button>
                </div>
                <div class="stats" id="resultStats">
                    Menampilkan ${dialectPhrases.length} dari ${dialectPhrases.length} frasa
                </div>
            </div>
            
            <div class="dialect-table-wrapper">
                <table class="dialect-table" id="dialectTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Bahasa Indonesia</th>
                            <th>Dialek Manado</th>
                            <th>English</th>
                            <th>中文 (Mandarin)</th>
                        </tr>
                    </thead>
                    <tbody id="dialectTableBody">
                        ${renderDialectRows(dialectPhrases)}
                    </tbody>
                </table>
            </div>
            
            <div class="dialect-cards" id="dialectCards">
                ${renderDialectCards(dialectPhrases)}
            </div>
            
            <div class="pronunciation-guide">
                <h4>💡 Tips Pelafalan Dialek Manado</h4>
                <p>Huruf "e" di akhir kata dibaca seperti "e" pada kata "emak" | "r" cenderung lembut | "ng" dibaca sengau seperti pada kata "sayang"</p>
            </div>
        </div>
    `;
}

function renderDialectRows(phrases) {
    return phrases.map(p => `
        <tr>
            <td>${p.id}</td>
            <td><strong>${p.indonesia}</strong></td>
            <td style="color: #ff6b35;">${p.manado}</td>
            <td><em>${p.english}</em></td>
            <td class="mandarin-cell">${p.mandarin}</td>
        </tr>
    `).join('');
}

function renderDialectCards(phrases) {
    return phrases.map(p => `
        <div class="dialect-card">
            <div class="phrase-indo">${p.indonesia}</div>
            <div class="phrase-manado">🗣️ ${p.manado}</div>
            <div class="phrase-eng">📖 ${p.english}</div>
            <div class="phrase-mandarin">🀄 ${p.mandarin}</div>
            <hr>
        </div>
    `).join('');
}

let currentFilter = 'all';
let currentSearch = '';

function filterAndSearchPhrases() {
    let filtered = [...dialectPhrases];
    
    // Apply search
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filtered = filtered.filter(p => 
            p.indonesia.toLowerCase().includes(searchLower) ||
            p.manado.toLowerCase().includes(searchLower) ||
            p.english.toLowerCase().includes(searchLower) ||
            p.mandarin.toLowerCase().includes(searchLower)
        );
    }
    
    // Update UI
    const tableBody = document.getElementById('dialectTableBody');
    const cardsContainer = document.getElementById('dialectCards');
    const resultStats = document.getElementById('resultStats');
    
    if (tableBody) {
        tableBody.innerHTML = renderDialectRows(filtered);
    }
    if (cardsContainer) {
        cardsContainer.innerHTML = renderDialectCards(filtered);
    }
    if (resultStats) {
        resultStats.textContent = `Menampilkan ${filtered.length} dari ${dialectPhrases.length} frasa`;
    }
}

function attachDialectEvents() {
    const searchInput = document.getElementById('searchPhrase');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            filterAndSearchPhrases();
        });
    }
}

// State Management
let currentPage = "home";

// Helper Functions
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star" style="color: #ffc107;"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt" style="color: #ffc107;"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star" style="color: #ffc107;"></i>';
    }
    return starsHTML;
}

function loadPage(page) {
    currentPage = page;
    const main = document.getElementById("app");
    
    switch(page) {
        case "home":
            main.innerHTML = renderHome();
            attachHomeEvents();
            break;
        case "sights":
            main.innerHTML = renderSights();
            attachSightsEvents();
            break;
        case "culture":
            main.innerHTML = renderCulture();
            attachCultureEvents();
            break;
        default:
            main.innerHTML = renderHome();
            attachHomeEvents();
        case "dialect":
            main.innerHTML = renderDialect();
            attachDialectEvents();
            break;
    }
    
    // Update active nav
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
}
function renderHome() {
    return `
        <div class="container">
            ${renderSlideshow()}
            
            <div class="quick-buttons">
                <div class="quick-card" data-nav="sights">
                    <i class="fas fa-mountain"></i>
                    <h3>See The Sights</h3>
                    <p>Jelajahi destinasi wisata terbaik</p>
                </div>
                <div class="quick-card" data-nav="culture">
                    <i class="fas fa-landmark"></i>
                    <h3>Cultural Information</h3>
                    <p>Kenali budaya Sulawesi Utara</p>
                </div>
                <div class="quick-card" id="travelCalcBtn">
                    <i class="fas fa-calculator"></i>
                    <h3>Travel Calculator</h3>
                    <p>Hitung estimasi biaya perjalanan</p>
                </div>
            </div>
        </div>
    `;
}

function renderSights() {
    return `
        <div class="container">
            <h2 style="margin-bottom: 2rem; color: #1a5d4a;">📍 Popular Sites di Sulawesi Utara</h2>
            <div class="destinations-grid">
                ${destinations.map(dest => `
                    <div class="destination-card" data-dest-id="${dest.id}">
                        <img src="${dest.image}" alt="${dest.name}" class="destination-img" onerror="this.src='https://placehold.co/400x200?text=No+Image'">
                        <div class="destination-info">
                            <h3>${dest.name}</h3>
                            <p>${dest.description.substring(0, 100)}${dest.description.length > 100 ? '...' : ''}</p>
                            <div class="rating">
                                ${renderStars(dest.rating)} (${dest.rating.toFixed(1)})
                            </div>
                            <button class="btn-detail" data-dest-id="${dest.id}">Lihat Detail</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderCulture() {
    return `
        <div class="container">
            <h2 style="margin-bottom: 2rem; color: #1a5d4a;">🎭 Warisan Budaya Sulawesi Utara</h2>
            <p style="margin-bottom: 2rem;">Klik pada salah satu budaya untuk melihat informasi lengkap, foto, dan video edukasi</p>
            <div class="culture-grid">
                ${culturalItems.map(culture => `
                    <div class="culture-card" data-culture-id="${culture.id}">
                        <img src="${culture.image}" alt="${culture.name}" onerror="this.src='https://placehold.co/400x200?text=No+Image'">
                        <h3>${culture.name}</h3>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSouvenirs() {
    return `
        <div class="container">
            <h2 style="margin-bottom: 2rem; color: #1a5d4a;">🛍️ Produk UMKM Lokal - Oleh-oleh Khas</h2>
            <p style="margin-bottom: 2rem;">Dukung produk lokal dengan membeli langsung melalui WhatsApp</p>
            <div class="souvenir-grid">
                ${souvenirs.map(item => `
                    <div class="souvenir-card">
                        <img src="${item.image}" alt="${item.name}" class="souvenir-img" onerror="this.src='https://placehold.co/400x200?text=No+Image'">
                        <div class="souvenir-info">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <div class="price">${item.price}</div>
                            <button class="whatsapp-btn" data-wa="${item.whatsapp}" data-produk="${item.name}">
                                <i class="fab fa-whatsapp"></i> Pesan via WhatsApp
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showDestinationModal(destId) {
    const dest = destinations.find(d => d.id === destId);
    if(!dest) return;
    
    // Generate sumber links HTML
    let sourcesHTML = '';
    if (dest.sources && dest.sources.length > 0) {
        sourcesHTML = `
            <div style="margin-top: 1.5rem; padding: 1rem; background: #f0f9f4; border-radius: 10px; border-left: 4px solid #1a5d4a;">
                <strong>📚 Sumber Informasi Resmi:</strong>
                <ul style="margin-top: 0.5rem; margin-left: 1rem;">
                    ${dest.sources.map(src => `<li><a href="${src}" target="_blank" style="color: #ff6b35; word-break: break-all;">${src}</a></li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${dest.name}</h2>
            <img src="${dest.image}" alt="${dest.name}" style="width:100%; border-radius:10px; margin:1rem 0;" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
            
            <p><strong>📝 Deskripsi:</strong></p>
            <p style="white-space: pre-line;">${dest.description}</p>
            
            <p><strong>📍 Lokasi:</strong> <a href="${dest.location}" target="_blank" style="color:#ff6b35;">Lihat di Google Maps <i class="fas fa-external-link-alt"></i></a></p>
            <p><strong>⏰ Jam Operasional:</strong> ${dest.hours}</p>
            <div class="rating">
                <strong>⭐ Rating:</strong> ${renderStars(dest.rating)} (${dest.rating.toFixed(1)})
            </div>
            
            ${sourcesHTML}
            
            <div class="review-input">
                <h4>💬 Berikan Review</h4>
                <select id="ratingSelect" style="padding:0.5rem; margin:0.5rem 0; border-radius:5px; border:1px solid #ddd;">
                    <option value="5">★★★★★ (5) - Luar biasa</option>
                    <option value="4">★★★★☆ (4) - Bagus</option>
                    <option value="3">★★★☆☆ (3) - Cukup</option>
                    <option value="2">★★☆☆☆ (2) - Kurang</option>
                    <option value="1">★☆☆☆☆ (1) - Buruk</option>
                </select>
                <textarea id="reviewText" placeholder="Tulis review Anda..." rows="3" style="width:100%; padding:0.5rem; border-radius:5px; border:1px solid #ddd;"></textarea>
                <button class="btn-secondary" id="submitReview" style="margin-top:0.5rem;">Kirim Review</button>
                
                <div class="review-list" id="reviewList" style="margin-top:1.5rem;">
                    <h4>📝 Review Pengunjung:</h4>
                    ${dest.reviews.length === 0 ? '<p style="color:#666;">Belum ada review. Jadilah yang pertama!</p>' : 
                        dest.reviews.map(r => `
                            <div class="review-item" style="background:#f1f5f9; padding:0.8rem; border-radius:8px; margin-bottom:0.8rem;">
                                <strong>⭐ ${r.rating}/5</strong>
                                <p style="margin:0.5rem 0;">${r.comment}</p>
                                <small style="color:#888;">📅 ${r.date}</small>
                            </div>
                        `).join('')
                    }
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    
    const submitBtn = modal.querySelector('#submitReview');
    submitBtn.onclick = () => {
        const rating = parseInt(modal.querySelector('#ratingSelect').value);
        const comment = modal.querySelector('#reviewText').value.trim();
        if(comment) {
            dest.reviews.unshift({
                rating: rating,
                comment: comment,
                date: new Date().toLocaleDateString('id-ID')
            });
            // Update rating average
            const total = dest.reviews.reduce((sum, r) => sum + r.rating, 0);
            dest.rating = total / dest.reviews.length;
            modal.remove();
            showDestinationModal(destId);
        } else {
            alert('✏️ Mohon tulis review Anda terlebih dahulu!');
        }
    };
    
    modal.onclick = (e) => {
        if(e.target === modal) modal.remove();
    };
}

function showCultureModal(cultureId) {
    const culture = culturalItems.find(c => c.id === cultureId);
    if(!culture) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>🎨 ${culture.name}</h2>
            <img src="${culture.image}" alt="${culture.name}" style="width:100%; border-radius:10px; margin:1rem 0;" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
            
            <h3>📖 Tentang ${culture.name}</h3>
            <p>${culture.description}</p>
            
            <h3>📜 Sejarah Singkat</h3>
            <p>${culture.history}</p>
            
            <h3>🎥 Video Edukasi</h3>
            <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; margin:1rem 0; border-radius:10px;">
                <iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" 
                    src="${culture.video}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            </div>
            <p style="font-size:0.85rem; color:#888; margin-top:0.5rem;">* Video edukasi tentang ${culture.name}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if(e.target === modal) modal.remove();
    };
}

function showTravelCalculator() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>🧮 Travel Calculator</h2>
            <p>Hitung estimasi biaya perjalanan Anda di Sulawesi Utara</p>
            <hr style="margin:1rem 0;">
            <div style="margin:1rem 0;">
                <label><strong>📅 Jumlah Hari:</strong></label>
                <input type="number" id="days" value="3" min="1" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
            </div>
            <div style="margin:1rem 0;">
                <label><strong>👥 Jumlah Orang:</strong></label>
                <input type="number" id="people" value="2" min="1" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
            </div>
            <div style="margin:1rem 0;">
                <label><strong>🏨 Jenis Penginapan:</strong></label>
                <select id="accommodation" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
                    <option value="300000">Budget (Rp 300.000/malam)</option>
                    <option value="600000">Menengah (Rp 600.000/malam)</option>
                    <option value="1000000">Mewah (Rp 1.000.000/malam)</option>
                </select>
            </div>
            <div style="margin:1rem 0;">
                <label><strong>🚗 Transportasi/hari:</strong></label>
                <input type="number" id="transport" value="200000" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
            </div>
            <div style="margin:1rem 0;">
                <label><strong>🍽️ Makan/hari/orang:</strong></label>
                <input type="number" id="food" value="150000" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
            </div>
            <button class="btn-primary" id="calculateBtn" style="width:100%; margin-top:1rem;">Hitung Total Biaya</button>
            <div id="calculationResult" style="margin-top:1.5rem; padding:1rem; background:#e2e8f0; border-radius:10px;">
                <h3>💰 Estimasi Biaya:</h3>
                <p id="totalCost" style="font-size:1.2rem; font-weight:bold; color:#1a5d4a;">-</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    
    const calculateBtn = modal.querySelector('#calculateBtn');
    calculateBtn.onclick = () => {
        const days = parseInt(modal.querySelector('#days').value);
        const people = parseInt(modal.querySelector('#people').value);
        const accomPrice = parseInt(modal.querySelector('#accommodation').value);
        const transport = parseInt(modal.querySelector('#transport').value);
        const food = parseInt(modal.querySelector('#food').value);
        
        const totalAccom = accomPrice * days;
        const totalTransport = transport * days;
        const totalFood = food * days * people;
        const total = totalAccom + totalTransport + totalFood;
        
        const resultElement = modal.querySelector('#totalCost');
        resultElement.innerHTML = `Rp ${total.toLocaleString('id-ID')} <span style="font-size:0.9rem; font-weight:normal;">(termasuk penginapan, transportasi, dan makan)</span>`;
        
        // Add breakdown
        const breakdown = `
            <div style="margin-top:1rem; font-size:0.9rem;">
                <hr style="margin:0.5rem 0;">
                <p>📋 Rincian:</p>
                <p>🏨 Penginapan: Rp ${totalAccom.toLocaleString('id-ID')}</p>
                <p>🚗 Transportasi: Rp ${totalTransport.toLocaleString('id-ID')}</p>
                <p>🍽️ Makan: Rp ${totalFood.toLocaleString('id-ID')}</p>
            </div>
        `;
        resultElement.innerHTML += breakdown;
    };
    
    modal.onclick = (e) => {
        if(e.target === modal) modal.remove();
    };
}

function attachHomeEvents() {
    document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = btn.getAttribute('data-nav');
            if(page) loadPage(page);
        });
    });
    
    document.querySelectorAll('.quick-card[data-nav]').forEach(card => {
        card.addEventListener('click', () => {
            const page = card.getAttribute('data-nav');
            if(page) loadPage(page);
        });
    });
    
    const travelCalcBtn = document.getElementById('travelCalcBtn');
    if(travelCalcBtn) {
        travelCalcBtn.addEventListener('click', showTravelCalculator);
    }
    
    // Inisialisasi slideshow
    startSlideshow();
    attachSlideshowEvents();
}
    
    

function attachSightsEvents() {
    document.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const destId = parseInt(btn.getAttribute('data-dest-id'));
            showDestinationModal(destId);
        });
    });
}

function attachCultureEvents() {
    document.querySelectorAll('.culture-card').forEach(card => {
        card.addEventListener('click', () => {
            const cultureId = parseInt(card.getAttribute('data-culture-id'));
            showCultureModal(cultureId);
        });
    });
}

function attachSouvenirEvents() {
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const waNumber = btn.getAttribute('data-wa');
            const productName = btn.getAttribute('data-produk');
            const message = `Halo, saya tertarik dengan produk ${productName} dari NyiurGo. Apakah masih tersedia?`;
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        });
    });
}

// Navigation Handler
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if(page) loadPage(page);
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }
}

// Initialize App
function init() {
    initNavigation();
    loadPage('home');
}
// ===== SLIDESHOW DATA & FUNCTIONS =====
const slides = [
    {
        image: "https://asset.tribunnews.com/v-nLazlUDr43roymCM-aQibKVfA=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/manado/foto/bank/originals/foto-keindahan-taman-sindulang-manado-sulawesi-utara-rabu-26420238.jpg",
        title: "Taman Sindulang",
        description: "Keindahan taman kota di Manado"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJU5KLpPFCVCHc_cffQaA5xhE0zLwBf3z-FQ&s",
        title: "Pesona Sulawesi Utara",
        description: "Destinasi wisata menakjubkan menanti Anda"
    },
    {
        image: "https://images.unsplash.com/photo-1589189373335-0f4f8b9d8f2c?w=1200",
        title: "Jelajahi Bunaken",
        description: "Surga bawah laut kelas dunia"
    }
];

let currentSlide = 0;
let slideInterval;

function renderSlideshow() {
    return `
        <div class="hero-slideshow" id="heroSlideshow">
            ${slides.map((slide, index) => `
                <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.image}');">
                    <div class="slide-content">
                        <h2>${slide.title}</h2>
                        <p>${slide.description}</p>
                        <button class="slide-btn" data-nav="sights">Mulai Jelajahi</button>
                    </div>
                </div>
            `).join('')}
            <div class="slide-dots">
                ${slides.map((_, index) => `
                    <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
                `).join('')}
            </div>
        </div>
    `;
}

function startSlideshow() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        goToSlide(nextSlide);
    }, 5000);
}

function goToSlide(index) {
    const slidesElements = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slidesElements.length === 0) return;
    
    slidesElements[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slidesElements[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function attachSlideshowEvents() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(dot.getAttribute('data-slide'));
            goToSlide(index);
            startSlideshow(); // Reset timer
        });
    });
    
    // Tombol "Mulai Jelajahi" di slideshow
    const slideBtns = document.querySelectorAll('.slide-btn');
    slideBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = btn.getAttribute('data-nav');
            if(page) loadPage(page);
        });
    });
}
// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);