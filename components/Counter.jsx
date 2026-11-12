"use client";

import { useState } from "react";

// ==============================================================================
// LATIHAN 4: CLIENT COMPONENT (CSR & INTERAKTIF)
// ==============================================================================

export default function Counter() {
  // State untuk menyimpan angka counter
  const [angka, setAngka] = useState(0);

  // Fungsi Tambah (+1) sudah disediakan sebagai contoh acuan
  const handleTambah = () => {
    setAngka(angka + 1);
  };

  // TODO 1: Lengkapi fungsi handleKurang agar nilai angka berkurang 1
  const handleKurang = () => {
    // Tulis kodenya di bawah ini:
    setAngka(angka - 1);
  };

  // TODO 2: Lengkapi fungsi handleReset agar nilai angka kembali menjadi 0
  const handleReset = () => {
    // Tulis kodenya di bawah ini:
    setAngka(0);
  };

  return (
    <div className="counter-box" style={{ marginTop: "15px" }}>
      <p style={{ fontSize: "16px" }}>
        Nilai saat ini:{" "}
        <b style={{ color: "#c084fc", fontSize: "28px", marginLeft: "10px" }}>
          {angka}
        </b>
      </p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={handleTambah}>Tambah (+1)</button>
        <button onClick={handleKurang}>Kurang (-1)</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
