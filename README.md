# Jerico EduPlay 🎮

**Jerico EduPlay** adalah sebuah game edukasi interaktif berbasis web yang dirancang untuk mengajarkan konsep matematika dasar kepada anak-anak usia 4-6 tahun. Aplikasi ini dikembangkan sebagai proyek portofolio *full-stack* yang mendemonstrasikan implementasi metodologi pedagogi modern **(CPA & Story-Based Learning)** dalam sebuah produk teknologi yang fungsional dan menyenangkan.

-----

## Daftar Isi 📖

1.  [Gambaran Umum](https://www.google.com/search?q=%23gambaran-umum-)
2.  [Teknologi yang Digunakan](https://www.google.com/search?q=%23teknologi-yang-digunakan-)
3.  [Kebutuhan & Instalasi](https://www.google.com/search?q=%23kebutuhan--instalasi-%EF%B8%8F)
4.  [Cara Penggunaan](https://www.google.com/search?q=%23cara-penggunaan-)
5.  [Struktur Kode & Penjelasan](https://www.google.com/search?q=%23struktur-kode--penjelasan-%EF%B8%8F)
6.  [Pemecahan Masalah Umum](https://www.google.com/search?q=%23pemecahan-masalah-umum-)
7.  [Rencana Pengembangan](https://www.google.com/search?q=%23rencana-pengembangan-)
8.  [Kontribusi](https://www.google.com/search?q=%23kontribusi-)
9.  [Lisensi](https://www.google.com/search?q=%23lisensi-)

-----

## Gambaran Umum 🎯

Proyek ini bertujuan untuk menciptakan sebuah jembatan antara pendidikan anak usia dini dan teknologi. Dengan alur cerita yang menarik dan gameplay yang didasarkan pada metode **CPA (Concrete, Pictorial, Abstract)**, aplikasi ini membantu anak-anak memahami matematika dari konsep konkret (memindahkan objek) hingga konsep abstrak (menyelesaikan persamaan).

**Fitur Utama:**

  * **Story-Based Learning:** Pengenalan cerita sebelum bermain untuk meningkatkan keterlibatan.
  * **Alur Gameplay CPA:** Tiga tahap pembelajaran dalam satu level (Konkret, Piktorial, Abstrak).
  * **Soal Dinamis:** *Back-end* menghasilkan soal matematika yang acak di setiap sesi untuk *replayability* tanpa batas.
  * **Desain Ramah Anak:** Antarmuka yang ceria, intuitif, dan responsif.

-----

## Teknologi yang Digunakan 💻

  * **Front-End:** [React.js](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
  * **Back-End:** [Laravel](https://laravel.com/), [PostgreSQL](https://www.postgresql.org/)/[MySQL](https://www.mysql.com/)
  * **Deployment:** [Vercel](https://vercel.com/) (Frontend), [Heroku](https://www.heroku.com/)/[DigitalOcean](https://www.digitalocean.com/) (Backend)

-----

## Kebutuhan & Instalasi 🛠️

Sebelum memulai, pastikan Anda sudah menginstal perangkat lunak berikut:

  * [Node.js](https://nodejs.org/en/) (v18 atau lebih baru)
  * [Composer](https://getcomposer.org/) (v2 atau lebih baru)
  * [PHP](https://www.php.net/downloads.php) (v8.1 atau lebih baru)
  * Database (PostgreSQL atau MySQL)

### **Instalasi Back-End (Laravel)**

1.  **Clone repository:**

    ```bash
    git clone https://github.com/jerico-c/eduplay.git
    cd eduplay
    ```

2.  **Instal dependensi PHP:**

    ```bash
    composer install
    ```

3.  **Salin file konfigurasi lingkungan:**

    ```bash
    cp .env.example .env
    ```

4.  **Buat kunci aplikasi unik:**

    ```bash
    php artisan key:generate
    ```

5.  **Konfigurasi database Anda di file `.env`:**

    ```ini
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=jerico_eduplay
    DB_USERNAME=root
    DB_PASSWORD=
    ```

6.  **Jalankan migrasi database:**

    ```bash
    php artisan migrate
    ```

7.  **Jalankan server back-end:**

    ```bash
    php artisan serve
    ```

    Server akan berjalan di `http://127.0.0.1:8000`.

### **Instalasi Front-End (React)**

1.  **Buka terminal baru dan masuk ke folder frontend:**

    ```bash
    cd ../frontend
    ```

2.  **Instal dependensi JavaScript:**

    ```bash
    npm install
    ```

3.  **Jalankan server pengembangan front-end:**

    ```bash
    npm run dev
    ```

    Aplikasi akan berjalan di `http://localhost:5173`.

-----

## Cara Penggunaan 🚀

Setelah server *back-end* dan *front-end* berjalan, buka `http://localhost:5173` di browser Anda.

1.  **Halaman Utama:** Anda akan disambut oleh halaman utama yang memperkenalkan Jero.

2.  **Pengenalan Cerita:** Klik "Mulai Bermain" untuk mengikuti alur cerita singkat yang menjadi latar belakang petualangan.

3.  **Bermain Game:** Setelah cerita selesai, permainan akan dimulai. Ikuti instruksi di layar untuk menyelesaikan tantangan CPA.

-----

## Struktur Kode & Penjelasan 🏗️

Proyek ini dipisahkan menjadi dua folder utama: `/backend` dan `/frontend`.

```
jerico-eduplay/
├── backend/
│   ├── app/Http/Controllers/Api/GameController.php  # 🧠 Otak dari logika game
│   ├── database/migrations/                       # Skema tabel database
│   └── routes/api.php                             # Definisi endpoint API
│
└── frontend/
    ├── public/                                    # Aset statis (gambar, ikon)
    └── src/
        ├── components/                            # Komponen UI yang dapat digunakan kembali
        │   ├── StoryIntroduction.tsx              # Komponen untuk alur cerita
        │   └── Game.tsx                           # Komponen utama untuk gameplay
        └── App.tsx                                # Komponen utama aplikasi
```

-----

## Pemecahan Masalah Umum 🤔

  * **Error 500 saat mengakses API Laravel:**

      * **Penyebab:** Biasanya karena file `.env` belum dikonfigurasi.
      * **Solusi:** Pastikan Anda sudah menjalankan `cp .env.example .env` dan `php artisan key:generate`.

  * **Error Koneksi Database:**

      * **Penyebab:** Konfigurasi database di `.env` salah.
      * **Solusi:** Periksa kembali `DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, dan `DB_PASSWORD` Anda.

  * **Error CORS di konsol browser:**

      * **Penyebab:** Front-end (misal: `localhost:5173`) diblokir saat mencoba mengakses back-end (`localhost:8000`).
      * **Solusi:** Konfigurasi CORS di Laravel (`config/cors.php`) sudah seharusnya mengizinkan ini, namun pastikan tidak ada kesalahan ketik.

  * **Dependensi `npm` bermasalah:**

      * **Solusi:** Hapus folder `node_modules` dan file `package-lock.json`, lalu jalankan kembali `npm install`.

-----

## Rencana Pengembangan 🗺️

Berikut adalah beberapa fitur yang direncanakan untuk pengembangan selanjutnya:

  - [ ]  Dashboard untuk Orang Tua memantau progres anak.
  - [ ] Modul Budaya lain dari berbagai daerah di Indonesia.
  - [ ] Sistem Papan Skor (Leaderboard).
  - [ ] Level Editor/CMS sederhana untuk menambah soal tanpa *coding*.
  - [ ] Peningkatan animasi dan efek suara untuk pengalaman yang lebih imersif.
