# Jobsheet Praktikum: Rendering Strategy pada Next.js

---

## A. Identitas Praktikum

* **Mata Pelajaran:** SAAS (Next.js)
* **Judul Praktik:** Belajar Strategi Rendering pada Next.js
* **Topik:** Memahami Static, Dynamic (SSR), ISR, dan Client Component
* **Kelompok Penyusun:** Kelompok 7
* **Alokasi Waktu:** ±70 Menit
* **Identitas Siswa:**
  * **Nama Siswa:** ............................................................
  * **Kelas / NIS:** ............................................................
  * **Tanggal:** ............................................................

---

## B. Tujuan Praktik

Setelah menyelesaikan modul praktikum ini, siswa diharapkan mampu:
1. Memahami perbedaan mendasar antara halaman **Statis (SSG)**, **Dinamis (SSR)**, **ISR**, dan **Client Component**.
2. Menambahkan konfigurasi rendering Next.js (`dynamic = "force-dynamic"` dan `revalidate = 10`).
3. Menampilkan variabel waktu dan teks data ke dalam JSX.
4. Melengkapi fungsi interaksi state (`useState`) pada tombol Client Component.
5. Mengamati perbedaan perubahan waktu render saat halaman di-refresh di peramban.

---

## C. Persiapan (Prasyarat)

Sebelum memulai praktik, pastikan perangkat telah terpasang:
1. **Node.js** (versi 18.18+ atau versi 20+).
2. **Visual Studio Code (VS Code)**.
3. **Web Browser** (Google Chrome, Microsoft Edge, atau Mozilla Firefox).
4. Koneksi internet (untuk mengunduh dependensi project).

---

## D. Langkah Praktik

Ikuti instruksi langkah-langkah berikut secara berurutan:

### Langkah 1: Clone Repository
Buka terminal (Git Bash, Command Prompt, atau Terminal VS Code), lalu jalankan perintah:
```bash
git clone https://github.com/NafishKMS/Demo-RenderingNEXT.git
cd Demo-RenderingNEXT
```

### Langkah 2: Masuk ke Folder Latihan
Masuk ke subfolder project latihan:
```bash
cd practice
```

### Langkah 3: Install Dependensi
Pasang seluruh pustaka dependensi yang dibutuhkan:
```bash
npm install
```

### Langkah 4: Jalankan Server Pengembangan
Jalankan server Next.js lokal:
```bash
npm run dev
```
Buka peramban di alamat: **[http://localhost:3000](http://localhost:3000)**.

### Langkah 5: Buka Halaman Latihan & Lengkapi Kode
Buka file-file latihan di folder `practice/` menggunakan VS Code, lalu selesaikan bagian `TODO` yang tersedia sesuai instruksi pada bagian **F. Tugas Praktik Siswa**.

---

## E. Contoh Kode Acuan

Pelajari contoh kode ringkas berikut sebagai pedoman pengerjaan:

### 1. Static Rendering (SSG)
Halaman dibuat satu kali saat build. HTML disimpan dan disajikan langsung tanpa proses komputasi ulang di server.
```jsx
// app/static/page.jsx
export default function StaticPage() {
  const waktuDibuat = new Date().toLocaleTimeString("id-ID");
  return <p>Waktu dibuat: {waktuDibuat}</p>;
}
```

### 2. Dynamic Rendering (SSR)
Menambahkan `export const dynamic = "force-dynamic";` agar Next.js merender ulang halaman di server pada setiap request pengguna.
```jsx
// app/dynamic/page.jsx
export const dynamic = "force-dynamic";

export default function DynamicPage() {
  const waktuServer = new Date().toLocaleTimeString("id-ID");
  return <p>Waktu server: {waktuServer}</p>;
}
```

### 3. Incremental Static Regeneration (ISR)
Menambahkan `export const revalidate = 10;` agar halaman di-cache selama 10 detik, lalu diperbarui di latar belakang saat request berikutnya tiba.
```jsx
// app/products/page.jsx
export const revalidate = 10;

export default function ProductsPage() {
  const waktuCache = new Date().toLocaleTimeString("id-ID");
  return <p>Waktu cache: {waktuCache}</p>;
}
```
*(Catatan: ISR adalah Server Component, jangan menuliskan `"use client"` di halaman ini).*

### 4. Client Component (CSR & Interaktif)
Menuliskan direktif `"use client";` di baris paling atas agar komponen dapat mengelola interaksi tombol dan state (`useState`) langsung di browser.
```jsx
// components/Counter.jsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [angka, setAngka] = useState(0);
  return (
    <div>
      <p>Nilai: {angka}</p>
      <button onClick={() => setAngka(angka + 1)}>Tambah (+1)</button>
    </div>
  );
}
```

---

## F. Tugas Praktik Siswa

Buka folder `practice/` di VS Code dan selesaikan seluruh bagian `TODO` berikut:

### Tugas 1: Melengkapi Halaman Statis (`app/static/page.jsx`)
1. Buka file `practice/app/static/page.jsx`.
2. Cari bagian **`TODO 1`**, ganti teks placeholder menjadi identitasmu:
   ```jsx
   <p style={{ color: "#38bdf8", fontSize: "18px" }}>
     Halo, nama saya [Nama Kamu] dari kelas [Kelas Kamu]!
   </p>
   ```
3. Cari bagian **`TODO 2`**, tampilkan variabel `waktuDibuat` di dalam tag `<b>`:
   ```jsx
   <p>
     Waktu halaman dibuat: <b>{waktuDibuat} WIB</b>
   </p>
   ```
4. Simpan file (`Ctrl + S`), lalu buka `http://localhost:3000/static` di browser untuk memastikan tulisan dan waktu muncul.

---

### Tugas 2: Melengkapi Halaman Dinamis / SSR (`app/dynamic/page.jsx`)
1. Buka file `practice/app/dynamic/page.jsx`.
2. Cari bagian **`TODO 1`** di baris paling atas, tambahkan konfigurasi dynamic:
   ```javascript
   export const dynamic = "force-dynamic";
   ```
3. Cari bagian **`TODO 2`**, tampilkan variabel `waktuServer` di dalam tag `<b>`:
   ```jsx
   <b style={{ color: "#34d399", fontSize: "18px" }}>
     {waktuServer} WIB
   </b>
   ```
4. Simpan file (`Ctrl + S`), buka `http://localhost:3000/dynamic` di browser.
5. Tekan tombol **Refresh (F5)** 3–5 kali. Amati bahwa detik waktu selalu berubah setiap kali halaman di-refresh.

---

### Tugas 3: Melengkapi Halaman ISR (`app/products/page.jsx`)
1. Buka file `practice/app/products/page.jsx`.
2. Cari bagian **`TODO 1`** di bagian atas file, tambahkan konfigurasi revalidasi 10 detik:
   ```javascript
   export const revalidate = 10;
   ```
3. Cari bagian **`TODO 2`**, tampilkan variabel `waktuCache` di dalam tag `<b>`:
   ```jsx
   <b style={{ color: "#fbbf24", fontSize: "18px" }}>
     {waktuCache} WIB
   </b>
   ```
4. Simpan file (`Ctrl + S`), buka `http://localhost:3000/products` di browser.
5. Lakukan uji coba waktu:
   * Tekan Refresh cepat 2 kali (<10 detik): Waktu cache **tidak berubah**.
   * Diamkan selama 10–15 detik, lalu tekan Refresh: Waktu cache akan diperbarui.

---

### Tugas 4: Melengkapi Tombol di Client Component (`components/Counter.jsx`)
1. Buka file `practice/components/Counter.jsx`.
2. Cari bagian **`TODO 1`** pada fungsi `handleKurang`, tuliskan perintah untuk mengurangi nilai `angka`:
   ```javascript
   const handleKurang = () => {
     setAngka(angka - 1);
   };
   ```
3. Cari bagian **`TODO 2`** pada fungsi `handleReset`, tuliskan perintah untuk mereset nilai `angka` kembali ke 0:
   ```javascript
   const handleReset = () => {
     setAngka(0);
   };
   ```
4. Simpan file (`Ctrl + S`), buka `http://localhost:3000/interactive` di browser.
5. Uji coba klik ketiga tombol (**Tambah**, **Kurang**, dan **Reset**). Pastikan angka berubah secara instan di layar tanpa reload halaman.

---

### Tugas 5: Menjawab Pertanyaan Pemahaman
Jawab 5 pertanyaan singkat di bagian **H. Pertanyaan Pemahaman** berdasarkan hasil praktik yang telah kamu lakukan.

---

## G. Tips & Bantuan (Troubleshooting)

| Masalah | Solusi Cepat |
|:---|:---|
| **Halaman di browser tidak berubah setelah diedit** | Pastikan file di VS Code sudah disimpan (`Ctrl + S`). |
| **Error `useState only works in Client Component`** | Pastikan baris nomor 1 file diawali dengan `"use client";`. |
| **Halaman tidak menampilkan waktu (muncul titik-titik)** | Periksa kembali apakah kamu sudah menulis `{waktuDibuat}`, `{waktuServer}`, atau `{waktuCache}` menggunakan kurung kurawal. |
| **Perintah `npm run dev` gagal dijalankan** | Pastikan terminal berada di dalam direktori `practice` (`cd practice`). |

---

## H. Pertanyaan Pemahaman

Jawablah dengan singkat dan jelas berdasarkan hasil pengamatanmu:

1. **Apa perbedaan utama antara halaman Dynamic (SSR) dan halaman Statis (SSG) saat kamu menekan tombol refresh (F5)?**
   * *Jawaban:*
     Pada halaman Dynamic (SSR), setiap kali tombol refresh (F5) ditekan, Next.js akan merender ulang halaman di server secara real-time sehingga detik waktu dan data selalu diperbarui. Sedangkan pada halaman Statis (SSG), halaman hanya dibuat satu kali saat proses build dan disajikan langsung sebagai file HTML statis, sehingga detik waktu dan kontennya tidak berubah meskipun di-refresh berulang kali.

2. **Apa fungsi dari baris kode `export const revalidate = 10;` pada halaman ISR?**
   * *Jawaban:*
     Berfungsi untuk menentukan durasi cache halaman selama 10 detik (Incremental Static Regeneration). Selama rentang 10 detik, request akan menyajikan halaman statis dari cache. Setelah 10 detik terlewati dan ada request baru, Next.js akan meregenerasi halaman di latar belakang (background) untuk memperbarui data cache.

3. **Mengapa angka pada tombol Counter di halaman `/interactive` bisa langsung berubah tanpa membuat seluruh halaman web reload?**
   * *Jawaban:*
     Karena komponen `Counter` adalah Client Component yang dieksekusi langsung di browser menggunakan hook `useState`. Saat tombol diklik, state lokal berubah dan React hanya me-render ulang bagian elemen counter tersebut di Virtual DOM tanpa memuat ulang (reload) seluruh halaman web.

4. **Kapan sebuah website membutuhkan halaman Dinamis (Dynamic / SSR) dibandingkan halaman Statis? Berikan 1 contoh kasusnya!**
   * *Jawaban:*
     Website membutuhkan Dynamic Rendering (SSR) ketika data/konten harus selalu real-time setiap saat atau kontennya dipersonalisasi berdasarkan data pengguna (seperti cookies, session login, atau parameter pencarian). Contoh kasusnya: Halaman Dashboard Profil Pengguna, Halaman Keranjang Belanja (Shopping Cart), atau Halaman Saldo Bank.

5. **Mengapa kita wajib menuliskan direktif `"use client";` di baris paling atas jika sebuah komponen menggunakan hook `useState`?**
   * *Jawaban:*
     Karena secara default di App Router Next.js, seluruh komponen dianggap sebagai Server Component yang berjalan di server tanpa akses ke browser APIs atau React Hooks interaktif. Direktif `"use client";` berfungsi sebagai penanda boundary bahwa komponen tersebut harus dibundel dan dijalankan di sisi browser (client-side) sehingga `useState` dapat bekerja.

---

## I. Kesimpulan & Refleksi Siswa

Lengkapi 3 kalimat refleksi di bawah ini:

1. *Setelah melakukan praktik ini, saya memahami bahwa Next.js menyediakan berbagai strategi rendering yang fleksibel (SSG, SSR, ISR, dan Client Component / CSR) yang dapat disesuaikan dengan kebutuhan performa aplikasi, frekuensi update data, dan interaktivitas pengguna.*

2. *Strategi rendering yang paling cocok untuk halaman yang datanya sering berubah adalah Dynamic Rendering (SSR) karena server akan selalu merender ulang dan mengambil data paling mutakhir pada setiap request dari pengguna.*

3. *Hal yang paling saya pahami dari praktik ini adalah cara kerja perbedaan waktu render antara SSG, SSR, dan ISR saat di-refresh, konfigurasi `dynamic = "force-dynamic"` dan `revalidate`, serta fungsi `"use client"` dalam pembuatan komponen interaktif.*

---
*Jobsheet disusun oleh Kelompok 7 — Praktikum Next.js Rendering Strategy*
