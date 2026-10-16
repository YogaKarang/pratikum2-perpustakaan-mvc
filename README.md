# Perpustakaan Digital

Aplikasi web sederhana untuk katalog perpustakaan, dibangun dengan Express.js dan EJS menggunakan pola Model-View-Controller (MVC). Dibuat untuk Tugas 2 Praktikum Pemrograman Web (Praktikum 2).

- Nama: I Wayan Yoga Karang Saputra
- NIM: 42530013

## Fitur

| Halaman | Rute | Keterangan |
|---|---|---|
| Beranda | `GET /` | Menyambut pengguna dengan data dinamis dari controller |
| Tentang Kami | `GET /tentang` | Halaman statis |
| Katalog Buku | `GET /katalog` | Daftar buku dari array of object, dirender dengan `forEach` |
| Tambah Buku | `GET /katalog/tambah` | Form dengan input teks, angka, dan dropdown |
| Kirim Data | `POST /katalog/tambah` | Mencetak `req.body` ke terminal, lalu redirect ke `/katalog` (pola PRG) |

## Struktur Proyek

```
perpustakaan-mvc/
├── app.js                       # Inisialisasi app dan middleware
├── routes/
│   └── page.routes.js           # Konfigurasi endpoint
├── controllers/
│   └── page.controller.js       # Logika dan data katalog
├── views/
│   ├── pages/                   # home, about, katalog, tambah
│   └── partials/                # header, footer
└── public/css/style.css         # Reset CSS dan Box Model
```

## Cara Menjalankan

```bash
npm install
npm run dev     # dengan nodemon
```

Buka `http://localhost:3000`.

## Bahasa dan Package

Node.js, Express, EJS, nodemon

## Konsep yang Dipraktikkan

- Pemisahan tanggung jawab dengan pola MVC (routes, controllers, views)
- Template EJS: `include`, `<%= %>`, dan loop `forEach`
- Middleware `express.static` dan `express.urlencoded` untuk membaca `req.body`
- Post-Redirect-Get (PRG) agar form tidak terkirim ulang saat halaman di-refresh
- Handler 404 sebagai fallback route
- Reset CSS dengan `box-sizing: border-box` dan fitur aksesibilitas dasar (skip link, label form, fokus yang terlihat)
