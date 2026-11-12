// ==============================================================================
// LATIHAN 2: DYNAMIC RENDERING (SSR)
// ==============================================================================

// TODO 1: Tambahkan konfigurasi force-dynamic di baris bawah ini.
// Tulis: export const dynamic = "force-dynamic";
// agar Next.js selalu merender ulang halaman ini di server pada setiap request.
export const dynamic = "force-dynamic";

export default function DynamicPage() {
  // Variabel waktu server real-time
  const waktuServer = new Date().toLocaleTimeString("id-ID");

  return (
    <div className="card">
      <span className="badge badge-emerald">Dynamic Rendering (SSR)</span>
      <h1 style={{ margin: "0 0 10px 0" }}>Halaman Dinamis</h1>

      {/* TODO 2: Tampilkan variabel waktuServer di dalam tag <b> di bawah ini */}
      <p>
        Waktu server saat ini:{" "}
        <b style={{ color: "#34d399", fontSize: "18px" }}>
          {waktuServer} WIB
        </b>
      </p>

      <div className="note">
        <strong>Petunjuk Pengerjaan:</strong>
        <br />
        1. Ketik <code>export const dynamic = &quot;force-dynamic&quot;;</code> tepat di bawah komentar TODO 1.
        <br />
        2. Tampilkan waktu server dengan mengganti titik-titik menjadi <code>{`{waktuServer}`}</code> di dalam tag <code>&lt;b&gt;</code>.
        <br />
        3. Simpan file, lalu tekan <b>Refresh (F5)</b> di browsermu. Perhatikan waktu selalu berganti!
      </div>
    </div>
  );
}
