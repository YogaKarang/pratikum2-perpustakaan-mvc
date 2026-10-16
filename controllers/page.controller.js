const daftarBuku = [
    { id: 1, judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', tahun: 2005, kategori: 'Fiksi' },
    { id: 2, judul: 'Bumi Manusia', penulis: 'Pramoedya Ananta Toer', tahun: 1980, kategori: 'Sejarah' },
    { id: 3, judul: 'Algoritma dan Pemrograman', penulis: 'Rinaldi Munir', tahun: 2016, kategori: 'Teknologi' },
    { id: 4, judul: 'Filosofi Teras', penulis: 'Henry Manampiring', tahun: 2018, kategori: 'Non-Fiksi' }
];

exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        pageTitle: 'Beranda',
        userName: 'Pengunjung',
        totalBuku: daftarBuku.length
    });
};

exports.getTentang = (req, res) => {
    res.render('pages/about', { pageTitle: 'Tentang Kami' });
};

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', { pageTitle: 'Katalog Buku', daftarBuku });
};

exports.getFormTambah = (req, res) => {
    res.render('pages/tambah', {
        pageTitle: 'Tambah Buku',
        kategoriList: ['Fiksi', 'Non-Fiksi', 'Sejarah', 'Teknologi', 'Sains']
    });
};

exports.postTambahBuku = (req, res) => {
    console.log('\n[BACK-END] Menerima Payload POST:');
    console.log(req.body);

    res.redirect('/katalog');
};