const disasterData = [
    {
      id: 1,
      tanggalBencana: "2024-06-15",
      provinsi: "Jawa Barat",
      kotaKabupaten: "Bandung",
      alamatLokasi: "Jl. Setiabudi No.12",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi ini disebabkan oleh aktivitas tektonik, di mana lempeng-lempeng bumi bergerak dan menyebabkan getaran yang merusak di permukaan tanah.",
      korbanJiwa: 5
    },
    {
      id: 2,
      tanggalBencana: "2023-12-20",
      provinsi: "Sumatera Utara",
      kotaKabupaten: "Medan",
      alamatLokasi: "Jl. Gatot Subroto No.45",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir ini disebabkan oleh hujan lebat yang berlangsung selama beberapa hari, menyebabkan sungai-sungai meluap dan merendam area permukiman.",
      korbanJiwa: 12
    },
    {
      id: 3,
      tanggalBencana: "2022-11-10",
      provinsi: "Sulawesi Tengah",
      kotaKabupaten: "Palu",
      alamatLokasi: "Jl. Ahmad Yani No.3",
      bencanaAlam: "Tsunami",
      penjelasanPenyebab: "Tsunami ini dipicu oleh gempa bumi kuat yang terjadi di lepas pantai, menyebabkan gelombang besar yang menghantam pantai dan mengakibatkan kerusakan luas.",
      korbanJiwa: 150
    },
    {
      id: 4,
      tanggalBencana: "2023-03-08",
      provinsi: "Kalimantan Selatan",
      kotaKabupaten: "Banjarmasin",
      alamatLokasi: "Jl. A. Yani No.10",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir ini terjadi akibat luapan sungai yang tidak mampu menampung volume air yang meningkat drastis setelah hujan deras terus-menerus.",
      korbanJiwa: 8
    },
    {
      id: 5,
      tanggalBencana: "2024-01-25",
      provinsi: "Bali",
      kotaKabupaten: "Denpasar",
      alamatLokasi: "Jl. Diponegoro No.99",
      bencanaAlam: "Letusan Gunung Berapi",
      penjelasanPenyebab: "Letusan gunung berapi ini disebabkan oleh peningkatan aktivitas vulkanik di dalam gunung, yang memaksa material magma meletus keluar ke permukaan.",
      korbanJiwa: 20
    },
    {
      id: 6,
      tanggalBencana: "2023-08-14",
      provinsi: "Jawa Timur",
      kotaKabupaten: "Surabaya",
      alamatLokasi: "Jl. Raya Darmo No.23",
      bencanaAlam: "Angin Puting Beliung",
      penjelasanPenyebab: "Angin puting beliung ini disebabkan oleh kondisi cuaca ekstrem yang membentuk pusaran angin dengan kecepatan tinggi, merusak bangunan dan lingkungan sekitarnya.",
      korbanJiwa: 3
    },
    {
      id: 7,
      tanggalBencana: "2022-05-30",
      provinsi: "Aceh",
      kotaKabupaten: "Banda Aceh",
      alamatLokasi: "Jl. Teuku Umar No.8",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi ini disebabkan oleh pergerakan lempeng tektonik yang menimbulkan getaran kuat di permukaan bumi, menyebabkan kerusakan dan korban jiwa.",
      korbanJiwa: 25
    },
    {
      id: 8,
      tanggalBencana: "2024-04-10",
      provinsi: "Papua",
      kotaKabupaten: "Jayapura",
      alamatLokasi: "Jl. Raya Abepura No.15",
      bencanaAlam: "Tanah Longsor",
      penjelasanPenyebab: "Tanah longsor ini terjadi akibat curah hujan yang tinggi dan terus-menerus, mengakibatkan tanah di lereng bukit menjadi jenuh air dan akhirnya longsor.",
      korbanJiwa: 7
    },
    {
      id: 9,
      tanggalBencana: "2023-07-22",
      provinsi: "Maluku",
      kotaKabupaten: "Ambon",
      alamatLokasi: "Jl. Sultan Hasanuddin No.20",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi ini disebabkan oleh pergerakan lempeng tektonik di bawah permukaan bumi, yang memicu getaran hebat dan merusak infrastruktur di daerah tersebut.",
      korbanJiwa: 10
    },
    {
      id: 10,
      tanggalBencana: "2022-09-15",
      provinsi: "Nusa Tenggara Barat",
      kotaKabupaten: "Mataram",
      alamatLokasi: "Jl. Pejanggik No.56",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir ini terjadi akibat hujan lebat yang mengguyur wilayah tersebut selama beberapa hari, menyebabkan genangan air yang meluas dan merusak rumah warga.",
      korbanJiwa: 6
    },
    {
      id: 11,
      tanggalBencana: "2024-05-17",
      provinsi: "Jawa Tengah",
      kotaKabupaten: "Semarang",
      alamatLokasi: "Jl. Pandanaran No.8",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir terjadi akibat hujan lebat yang menyebabkan air sungai meluap dan membanjiri area pemukiman.",
      korbanJiwa: 9
    },
    {
      id: 12,
      tanggalBencana: "2024-02-10",
      provinsi: "Lampung",
      kotaKabupaten: "Bandar Lampung",
      alamatLokasi: "Jl. Raden Intan No.14",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi terjadi karena aktivitas tektonik yang mengakibatkan pergeseran lempeng bumi.",
      korbanJiwa: 15
    },
    {
      id: 13,
      tanggalBencana: "2023-11-28",
      provinsi: "Jambi",
      kotaKabupaten: "Jambi",
      alamatLokasi: "Jl. Sultan Thaha No.3",
      bencanaAlam: "Kebakaran Hutan",
      penjelasanPenyebab: "Kebakaran hutan disebabkan oleh cuaca panas yang berkepanjangan dan lahan kering.",
      korbanJiwa: 2
    },
    {
      id: 14,
      tanggalBencana: "2023-07-19",
      provinsi: "Kalimantan Timur",
      kotaKabupaten: "Samarinda",
      alamatLokasi: "Jl. Pahlawan No.5",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir terjadi akibat luapan sungai setelah hujan deras yang berkepanjangan.",
      korbanJiwa: 4
    },
    {
      id: 15,
      tanggalBencana: "2024-03-05",
      provinsi: "Sumatera Selatan",
      kotaKabupaten: "Palembang",
      alamatLokasi: "Jl. Jenderal Sudirman No.10",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi terjadi karena adanya pergerakan lempeng bumi yang menyebabkan getaran hebat.",
      korbanJiwa: 11
    },
    {
      id: 16,
      tanggalBencana: "2023-10-12",
      provinsi: "Sulawesi Selatan",
      kotaKabupaten: "Makassar",
      alamatLokasi: "Jl. Urip Sumoharjo No.7",
      bencanaAlam: "Angin Topan",
      penjelasanPenyebab: "Angin topan disebabkan oleh perubahan suhu di laut yang meningkatkan kecepatan angin secara tiba-tiba.",
      korbanJiwa: 5
    },
    {
      id: 17,
      tanggalBencana: "2023-06-18",
      provinsi: "Banten",
      kotaKabupaten: "Serang",
      alamatLokasi: "Jl. Veteran No.12",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir terjadi karena luapan sungai akibat hujan deras yang melanda wilayah tersebut.",
      korbanJiwa: 7
    },
    {
      id: 18,
      tanggalBencana: "2024-01-10",
      provinsi: "Kalimantan Barat",
      kotaKabupaten: "Pontianak",
      alamatLokasi: "Jl. Ahmad Yani No.9",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi disebabkan oleh adanya pergerakan lempeng bumi yang menimbulkan getaran hebat.",
      korbanJiwa: 8
    },
    {
      id: 19,
      tanggalBencana: "2023-09-22",
      provinsi: "Maluku Utara",
      kotaKabupaten: "Ternate",
      alamatLokasi: "Jl. Merdeka No.15",
      bencanaAlam: "Tsunami",
      penjelasanPenyebab: "Tsunami disebabkan oleh gempa bumi yang terjadi di dasar laut dan menghasilkan gelombang besar yang menghantam pantai.",
      korbanJiwa: 13
    },
    {
      id: 20,
      tanggalBencana: "2022-12-05",
      provinsi: "Papua Barat",
      kotaKabupaten: "Sorong",
      alamatLokasi: "Jl. Yos Sudarso No.23",
      bencanaAlam: "Letusan Gunung Berapi",
      penjelasanPenyebab: "Letusan gunung berapi disebabkan oleh meningkatnya tekanan magma di dalam gunung yang akhirnya meletus.",
      korbanJiwa: 17
    },
    {
      id: 21,
      tanggalBencana: "2024-08-15",
      provinsi: "Jawa Barat",
      kotaKabupaten: "Bogor",
      alamatLokasi: "Jl. Raya Puncak No.5",
      bencanaAlam: "Tanah Longsor",
      penjelasanPenyebab: "Tanah longsor terjadi karena curah hujan yang tinggi sehingga menyebabkan lereng gunung labil dan akhirnya longsor.",
      korbanJiwa: 6
    },
    {
      id: 22,
      tanggalBencana: "2023-04-20",
      provinsi: "Aceh",
      kotaKabupaten: "Lhokseumawe",
      alamatLokasi: "Jl. Sudirman No.11",
      bencanaAlam: "Kebakaran Hutan",
      penjelasanPenyebab: "Kebakaran hutan terjadi karena cuaca kering dan panas yang meningkatkan risiko api menjalar ke hutan.",
      korbanJiwa: 3
    },
    {
      id: 23,
      tanggalBencana: "2024-02-12",
      provinsi: "Sulawesi Utara",
      kotaKabupaten: "Manado",
      alamatLokasi: "Jl. Sam Ratulangi No.9",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi disebabkan oleh aktivitas tektonik di bawah laut yang menyebabkan getaran di permukaan bumi.",
      korbanJiwa: 9
    },
    {
      id: 24,
      tanggalBencana: "2023-08-30",
      provinsi: "Bali",
      kotaKabupaten: "Badung",
      alamatLokasi: "Jl. Sunset Road No.55",
      bencanaAlam: "Tanah Longsor",
      penjelasanPenyebab: "Tanah longsor disebabkan oleh hujan deras yang membuat tanah di lereng gunung menjadi tidak stabil.",
      korbanJiwa: 4
    },
    {
      id: 25,
      tanggalBencana: "2022-10-10",
      provinsi: "Kalimantan Selatan",
      kotaKabupaten: "Banjarbaru",
      alamatLokasi: "Jl. A. Yani No.8",
      bencanaAlam: "Kekeringan",
      penjelasanPenyebab: "Kekeringan terjadi karena kurangnya hujan dalam waktu yang lama sehingga menyebabkan kekeringan di daerah tersebut.",
      korbanJiwa: 5
    },
    {
      id: 26,
      tanggalBencana: "2024-05-18",
      provinsi: "Nusa Tenggara Timur",
      kotaKabupaten: "Kupang",
      alamatLokasi: "Jl. El Tari No.12",
      bencanaAlam: "Kebakaran Hutan",
      penjelasanPenyebab: "Kebakaran hutan disebabkan oleh aktivitas manusia yang tidak hati-hati dalam membakar lahan pertanian.",
      korbanJiwa: 6
    },
    {
      id: 27,
      tanggalBencana: "2023-12-25",
      provinsi: "Sulawesi Tenggara",
      kotaKabupaten: "Kendari",
      alamatLokasi: "Jl. Wolter Monginsidi No.15",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir terjadi karena hujan deras yang mengakibatkan air sungai meluap dan merendam pemukiman warga.",
      korbanJiwa: 8
    },
    {
      id: 28,
      tanggalBencana: "2023-11-05",
      provinsi: "Jawa Barat",
      kotaKabupaten: "Depok",
      alamatLokasi: "Jl. Margonda Raya No.22",
      bencanaAlam: "Tsunami",
      penjelasanPenyebab: "Tsunami terjadi karena gempa bumi yang mengakibatkan pergerakan lempeng di dasar laut.",
      korbanJiwa: 11
    },
    {
      id: 29,
      tanggalBencana: "2024-09-18",
      provinsi: "Sumatera Barat",
      kotaKabupaten: "Padang",
      alamatLokasi: "Jl. Sudirman No.17",
      bencanaAlam: "Gelombang Panas",
      penjelasanPenyebab: "Gelombang panas terjadi karena cuaca ekstrem dengan suhu yang tinggi dalam waktu yang lama.",
      korbanJiwa: 7
    },
    {
      id: 30,
      tanggalBencana: "2023-07-10",
      provinsi: "Maluku Utara",
      kotaKabupaten: "Ternate",
      alamatLokasi: "Jl. Merdeka No.8",
      bencanaAlam: "Letusan Gunung Berapi",
      penjelasanPenyebab: "Letusan gunung berapi disebabkan oleh tekanan magma yang meningkat di dalam gunung.",
      korbanJiwa: 13
    },
    {
      id: 31,
      tanggalBencana: "2022-12-20",
      provinsi: "Papua Barat",
      kotaKabupaten: "Sorong",
      alamatLokasi: "Jl. Yos Sudarso No.23",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir terjadi karena curah hujan yang tinggi sehingga sungai meluap dan membanjiri pemukiman warga.",
      korbanJiwa: 10
    },
    {
      id: 32,
      tanggalBencana: "2023-09-05",
      provinsi: "Kalimantan Timur",
      kotaKabupaten: "Balikpapan",
      alamatLokasi: "Jl. Jenderal Sudirman No.10",
      bencanaAlam: "Tanah Longsor",
      penjelasanPenyebab: "Tanah longsor terjadi karena hujan deras yang membuat lereng bukit menjadi labil.",
      korbanJiwa: 6
    },
    {
      id: 33,
      tanggalBencana: "2024-06-15",
      provinsi: "Sulawesi Selatan",
      kotaKabupaten: "Makassar",
      alamatLokasi: "Jl. Urip Sumoharjo No.7",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi terjadi karena pergerakan lempeng tektonik yang menyebabkan getaran di permukaan bumi.",
      korbanJiwa: 9
    },
    {
      id: 34,
      tanggalBencana: "2023-04-18",
      provinsi: "Nusa Tenggara Barat",
      kotaKabupaten: "Mataram",
      alamatLokasi: "Jl. Pejanggik No.56",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir terjadi karena hujan deras yang membuat sungai meluap dan membanjiri pemukiman.",
      korbanJiwa: 8
    },
    {
      id: 35,
      tanggalBencana: "2024-01-10",
      provinsi: "Banten",
      kotaKabupaten: "Serang",
      alamatLokasi: "Jl. Veteran No.12",
      bencanaAlam: "Kebakaran Hutan",
      penjelasanPenyebab: "Kebakaran hutan disebabkan oleh cuaca panas yang meningkatkan risiko api menjalar ke area hutan.",
      korbanJiwa: 4
    },
    {
      id: 36,
      tanggalBencana: "2023-08-12",
      provinsi: "Aceh",
      kotaKabupaten: "Banda Aceh",
      alamatLokasi: "Jl. Teuku Umar No.8",
      bencanaAlam: "Letusan Gunung Berapi",
      penjelasanPenyebab: "Letusan gunung berapi terjadi karena aktivitas vulkanik yang meningkat di dalam gunung.",
      korbanJiwa: 12
    },
    {
      id: 37,
      tanggalBencana: "2023-11-20",
      provinsi: "Sulawesi Tengah",
      kotaKabupaten: "Palu",
      alamatLokasi: "Jl. Ahmad Yani No.3",
      bencanaAlam: "Tsunami",
      penjelasanPenyebab: "Tsunami terjadi karena gempa bumi yang memicu gelombang besar di laut.",
      korbanJiwa: 15
    },
    {
      id: 38,
      tanggalBencana: "2024-09-02",
      provinsi: "Kalimantan Selatan",
      kotaKabupaten: "Banjarmasin",
      alamatLokasi: "Jl. A. Yani No.10",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir terjadi karena luapan sungai setelah hujan deras yang berkepanjangan.",
      korbanJiwa: 11
    },
    {
      id: 39,
      tanggalBencana: "2023-06-05",
      provinsi: "Papua",
      kotaKabupaten: "Jayapura",
      alamatLokasi: "Jl. Raya Abepura No.15",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi terjadi karena pergerakan lempeng tektonik yang menyebabkan getaran di permukaan bumi.",
      korbanJiwa: 7
    },
    {
      id: 40,
      tanggalBencana: "2024-03-18",
      provinsi: "Maluku",
      kotaKabupaten: "Ambon",
      alamatLokasi: "Jl. Sultan Hasanuddin No.20",
      bencanaAlam: "Angin Topan",
      penjelasanPenyebab: "Angin topan terjadi karena perubahan suhu di laut yang meningkatkan kecepatan angin secara tiba-tiba.",
      korbanJiwa: 5
    },
    {
      id: 41,
      tanggalBencana: "2023-12-10",
      provinsi: "Jawa Timur",
      kotaKabupaten: "Surabaya",
      alamatLokasi: "Jl. Raya Darmo No.23",
      bencanaAlam: "Letusan Gunung Berapi",
      penjelasanPenyebab: "Letusan gunung berapi terjadi karena tekanan magma yang meningkat di dalam gunung.",
      korbanJiwa: 18
    },
    {
      id: 42,
      tanggalBencana: "2023-09-25",
      provinsi: "Aceh",
      kotaKabupaten: "Lhokseumawe",
      alamatLokasi: "Jl. Sudirman No.11",
      bencanaAlam: "Kebakaran Hutan",
      penjelasanPenyebab: "Kebakaran hutan terjadi karena aktivitas manusia yang tidak hati-hati dalam membakar lahan pertanian.",
      korbanJiwa: 3
    },
    {
      id: 43,
      tanggalBencana: "2024-04-05",
      provinsi: "Sulawesi Utara",
      kotaKabupaten: "Manado",
      alamatLokasi: "Jl. Sam Ratulangi No.9",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi terjadi karena adanya pergerakan lempeng tektonik yang menyebabkan getaran di bawah permukaan laut.",
      korbanJiwa: 10
    },
    {
      id: 44,
      tanggalBencana: "2023-07-20",
      provinsi: "Bali",
      kotaKabupaten: "Badung",
      alamatLokasi: "Jl. Sunset Road No.55",
      bencanaAlam: "Tanah Longsor",
      penjelasanPenyebab: "Tanah longsor terjadi karena hujan deras yang membuat tanah di lereng gunung menjadi labil.",
      korbanJiwa: 5
    },
    {
      id: 45,
      tanggalBencana: "2022-11-10",
      provinsi: "Kalimantan Barat",
      kotaKabupaten: "Pontianak",
      alamatLokasi: "Jl. Ahmad Yani No.9",
      bencanaAlam: "Tsunami",
      penjelasanPenyebab: "Tsunami terjadi karena gempa bumi yang memicu gelombang besar di laut.",
      korbanJiwa: 12
    },
    {
      id: 46,
      tanggalBencana: "2023-08-22",
      provinsi: "Maluku Utara",
      kotaKabupaten: "Ternate",
      alamatLokasi: "Jl. Merdeka No.15",
      bencanaAlam: "Kebakaran Hutan",
      penjelasanPenyebab: "Kebakaran hutan terjadi karena cuaca panas dan kering yang meningkatkan risiko api menjalar ke hutan.",
      korbanJiwa: 4
    },
    {
      id: 47,
      tanggalBencana: "2024-01-15",
      provinsi: "Papua Barat",
      kotaKabupaten: "Sorong",
      alamatLokasi: "Jl. Yos Sudarso No.23",
      bencanaAlam: "Letusan Gunung Berapi",
      penjelasanPenyebab: "Letusan gunung berapi terjadi karena aktivitas vulkanik yang meningkat di dalam gunung.",
      korbanJiwa: 16
    },
    {
      id: 48,
      tanggalBencana: "2023-06-08",
      provinsi: "Banten",
      kotaKabupaten: "Serang",
      alamatLokasi: "Jl. Veteran No.12",
      bencanaAlam: "Gempa Bumi",
      penjelasanPenyebab: "Gempa bumi terjadi karena adanya pergerakan lempeng tektonik di dasar laut.",
      korbanJiwa: 7
    },
    {
      id: 49,
      tanggalBencana: "2024-02-28",
      provinsi: "Aceh",
      kotaKabupaten: "Lhokseumawe",
      alamatLokasi: "Jl. Sudirman No.11",
      bencanaAlam: "Banjir",
      penjelasanPenyebab: "Banjir terjadi karena luapan sungai akibat hujan deras yang melanda wilayah tersebut.",
      korbanJiwa: 9
    },
    {
      id: 50,
      tanggalBencana: "2023-08-25",
      provinsi: "Sulawesi Utara",
      kotaKabupaten: "Manado",
      alamatLokasi: "Jl. Sam Ratulangi No.9",
      bencanaAlam: "Angin Topan",
      penjelasanPenyebab: "Angin topan terjadi karena perubahan suhu di laut yang meningkatkan kecepatan angin secara tiba-tiba.",
      korbanJiwa: 6
    }
  ];
  
  export default disasterData;
  