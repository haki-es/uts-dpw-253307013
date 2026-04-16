# 🏫 Portal PPDB – SMKN 1 GEGER

## Identitas Mahasiswa

<img src="asset/img/foto.png" width="300">

| Field  | Keterangan         |
|--------|--------------------|
| NIM    | 253307013          |
| Nama   | Haki Eko Saputra   |
| Kelas  | 2A                 |

---

## Deskripsi Project

Project ini merupakan **Portal Pendaftaran Siswa/Mahasiswa Baru Modern** yang dibuat sebagai pemenuhan tugas **UTS Desain & Pemrograman Web (TI24206)** — Politeknik Negeri Madiun, Semester 2.

Portal ini dibangun menggunakan teknologi **HTML5, CSS3, dan Vanilla JavaScript** murni tanpa framework eksternal, dengan arsitektur multi-halaman (multi-page) yang modular dan bersih.

---

## Fitur Utama

- **Multi-Page**: 3 halaman terpisah (`index.html`, `alur.html`, `form.html`) dengan navigasi yang konsisten
- **Desain Modern Premium**: Header dengan linear-gradient dua warna, tipografi elegan (Playfair Display + Plus Jakarta Sans)
- **Tabel Jadwal PPDB**: Zebra striping untuk keterbacaan yang baik
- **Alur Pendaftaran Visual**: Gambar ilustrasi + daftar prosedur bernomor custom
- **Formulir Interaktif**: Input dengan efek glow/box-shadow saat difokuskan
- **Toast Notification**: Notifikasi pop-up floating yang muncul 3 detik lalu fade out
- **Validasi JavaScript**:
  - Cek field kosong (nama, NIK, jalur)
  - Validasi NIK tepat 16 digit angka
  - Reset form otomatis setelah sukses
- **Hover Effect**: Animasi translateY pada tombol dan nav link

---

## Struktur Folder

```
uts-dpw-253307013/
├── asset/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   └── alur_pendaftaran.jpeg
│   └── javascript/
│       └── script.js
├── index.html       ← Beranda (Jadwal PPDB)
├── alur.html        ← Alur Pendaftaran
├── form.html        ← Formulir Pendaftaran
└── README.md
```

---

## Cara Menjalankan

1. Clone atau download repository ini
2. Buka `index.html` di browser modern (Chrome, Firefox, Edge)
3. Navigasi antar halaman menggunakan menu navbar
