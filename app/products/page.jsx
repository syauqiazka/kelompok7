// ==============================================================================
// LATIHAN 3: INCREMENTAL STATIC REGENERATION (ISR)
// ==============================================================================

// TODO 1: Atur waktu revalidate menjadi 10 detik.
// Tulis: export const revalidate = 10; tepat di bawah ini.
export const revalidate = 10;

export default function ProductsPage() {
  // Variabel waktu pembuatan cache
  const waktuCache = new Date().toLocaleTimeString("id-ID");

  const produk = [
    { id: 1, nama: "Sepatu Sekolah", harga: "Rp 150.000" },
    { id: 2, nama: "Tas Ransel", harga: "Rp 120.000" },
    { id: 3, nama: "Buku Tulis", harga: "Rp 5.000" },
  ];

  return (
    <div className="card">
      <span className="badge badge-amber">ISR (Incremental Static Regeneration)</span>
      <h1 style={{ margin: "0 0 10px 0" }}>Katalog Produk</h1>

      {/* TODO 2: Tampilkan variabel waktuCache di dalam tag <b> di bawah ini */}
      <p>
        Waktu render cache:{" "}
        <b style={{ color: "#fbbf24", fontSize: "18px" }}>
          {waktuCache} WIB
        </b>
      </p>

      <div className="note">
        <strong>Petunjuk Pengerjaan:</strong>
        <br />
        1. Ketik <code>export const revalidate = 10;</code> di bagian atas file.
        <br />
        2. Tampilkan waktu cache dengan menuliskan <code>{`{waktuCache}`}</code> di dalam tag <code>&lt;b&gt;</code>.
        <br />
        3. <b>Penting:</b> Jangan menambahkan tulisan <code>&quot;use client&quot;</code> di halaman ISR!
      </div>

      <h3 style={{ marginTop: "20px" }}>Daftar Barang:</h3>
      <ul>
        {produk.map((p) => (
          <li key={p.id} style={{ margin: "6px 0" }}>
            {p.nama} — <b>{p.harga}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
