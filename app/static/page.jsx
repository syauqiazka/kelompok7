// ==============================================================================
// LATIHAN 1: STATIC RENDERING (SSG)
// ==============================================================================
// Halaman ini dibuat 1 kali saat proses build. Waktunya tidak berubah saat di-refresh.

export default function StaticPage() {
  // Variabel waktu statis
  const waktuDibuat = new Date().toLocaleTimeString("id-ID");

  return (
    <div className="card">
      <span className="badge badge-blue">Static Rendering</span>
      <h1 style={{ margin: "0 0 10px 0" }}>Halaman Statis</h1>

      {/* TODO 1: Ganti teks di dalam tag <p> di bawah ini dengan nama dan kelasmu! */}
      <p style={{ color: "#38bdf8", fontSize: "18px" }}>
        Halo, nama saya Siswa Praktikum dari kelas XII RPL!
      </p>

      {/* TODO 2: Tampilkan variabel waktuDibuat di dalam tag <b> di bawah ini */}
      <p>
        Waktu halaman dibuat: <b>{waktuDibuat} WIB</b>
      </p>

      <div className="note">
        <strong>Petunjuk Pengerjaan:</strong>
        <br />
        1. Ganti teks nama &amp; kelas di atas pada file <code>app/static/page.jsx</code>.
        <br />
        2. Tampilkan waktu pembuatan dengan menuliskan <code>{`{waktuDibuat}`}</code> di dalam tag <code>&lt;b&gt;</code>.
        <br />
        3. Simpan file (<code>Ctrl + S</code>) dan lihat perubahannya di browser.
      </div>
    </div>
  );
}
