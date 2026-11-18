"use client";

import { useEffect, useRef } from "react";
import { initDao } from "../lib/dao";

export default function Home() {
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    initDao();
  }, []);
  return (
    <>
    <main id="hub">
      <header className="hub-head">
        <div className="hub-han">道<span className="accent">·</span>器</div>
        <div className="hub-title">DAO Instruments</div>
        <p className="hub-sub">Lima instrumen yang lahir dari keheningan. Sentuh, putar, berjalanlah,
          biarkan kekacauan bernyanyi — suara muncul hanya ketika kamu bergerak.</p>
        <div className="hub-rule"></div>
      </header>

      <section className="cards" aria-label="Pilih instrumen">
        <button className="card" style={{"--ac": "#d95d39"} as React.CSSProperties} data-open="pandora">
          <span className="card-han">樸</span>
          <span className="card-name">PANDORA</span>
          <span className="card-tag">“A Rubik's cube that remixes your loops.”</span>
          <span className="card-desc">Kubus 3×3 yang tiap sisinya menyimpan satu lapisan suara. Putar lapisannya dan susunan beat berubah; acak kubusnya dan ide yang tak terpikirkan muncul sendiri.</span>
          <span className="card-go">Mainkan <span className="arrow">→</span></span>
        </button>

        <button className="card" style={{"--ac": "#84b06c"} as React.CSSProperties} data-open="wake">
          <span className="card-han">森</span>
          <span className="card-name">WAKE</span>
          <span className="card-tag">“A forest where everything you touch becomes a sound.”</span>
          <span className="card-desc">Berjalanlah di hutan gelap menuju satu-satunya cahaya. Pohon, batu, dan tanah yang kamu sentuh berbunyi — dan setiap sentuhan terekam menjadi loop yang terus berputar.</span>
          <span className="card-go">Mainkan <span className="arrow">→</span></span>
        </button>

        <button className="card" style={{"--ac": "#5fae9e"} as React.CSSProperties} data-open="chaos">
          <span className="card-han" style={{fontSize: "44px", padding: "7px 0"} as React.CSSProperties}>混沌</span>
          <span className="card-name">CHAOS</span>
          <span className="card-tag">“Create sound with chaos theory.”</span>
          <span className="card-desc">Sebuah titik bergerak mengikuti strange attractor — jalurnya tak pernah berulang persis sama. Mainkan notnya; matematika membuat setiap not sedikit berbeda dari sebelumnya.</span>
          <span className="card-go">Mainkan <span className="arrow">→</span></span>
        </button>

        <button className="card" style={{"--ac": "#d9a441"} as React.CSSProperties} data-open="gather">
          <span className="card-han">聚</span>
          <span className="card-name">GATHER</span>
          <span className="card-tag">“Turn image into a point cloud that scatters and gathers to sound.”</span>
          <span className="card-desc">聚 — to gather. Unggah gambar apa pun; ia pecah menjadi ribuan titik cahaya yang menyebar dan berkumpul kembali, dan warna gambarnya sendiri yang menentukan bunyinya.</span>
          <span className="card-go">Mainkan <span className="arrow">→</span></span>
        </button>

        <button className="card" style={{"--ac": "#e6c84f"} as React.CSSProperties} data-open="circuit">
          <span className="card-han">電</span>
          <span className="card-name">CIRCUIT</span>
          <span className="card-tag">“Being and non-being give birth to each other.”</span>
          <span className="card-desc">Rangkaian listrik sungguhan yang dihitung langsung — arus, tegangan, hambatan — lalu dimainkan sebagai instrumen. Ada dan tiada saling melahirkan: rangkaian terbuka berarti hening.</span>
          <span className="card-go">Mainkan <span className="arrow">→</span></span>
        </button>
      </section>

      <p className="hub-foot">Suara dimulai setelah sentuhan pertama (kebijakan browser). Gunakan headphone untuk pengalaman terbaik.<br/>Implementasi orisinal yang terinspirasi konsep be-of-dao — dibangun dengan Web Audio API, Three.js, dan Canvas 2D.</p>
    </main>
    <section className="view" id="view-pandora" style={{"--ac": "#d95d39"} as React.CSSProperties}>
      <div className="view-bar">
        <button className="back-btn" data-back>← Hub</button>
        <div className="view-title"><span className="han">樸</span><span className="name">PANDORA</span></div>
      </div>
      <p className="view-tag">Enam sisi kubus, enam lapisan suara, enam belas langkah. Putar lapisan kubus — urutan langkah ikut berputar. Klik sel di grid untuk menulis ritmemu sendiri.</p>
      <div className="stage stage-3d" id="pandora-stage"></div>
      <p className="hint">Seret untuk memutar kubus · klik sebuah sisi untuk mendengar lapisannya (atas=kick, depan=snare, kanan=hat, bawah=bass, belakang=pad, kiri=arp).</p>
      <div className="panel">
        <h3>Transport</h3>
        <div className="controls">
          <button className="btn primary" id="pand-play">▶ Mainkan loop</button>
          <button className="btn" id="pand-layer-u">⟳ Putar lapisan atas</button>
          <button className="btn" id="pand-layer-m">⟳ Putar lapisan tengah</button>
          <button className="btn" id="pand-layer-d">⟳ Putar lapisan bawah</button>
          <button className="btn" id="pand-shuffle">⚄ Acak kubus</button>
          <button className="btn" id="pand-reset">↺ Pola awal</button>
          <div className="ctl"><label>Tempo <output id="pand-bpm-o">112 BPM</output></label>
            <input type="range" id="pand-bpm" min="70" max="160" value="112" /></div>
        </div>
      </div>
      <div className="panel">
        <h3>Sequencer — 16 langkah</h3>
        <div className="seq-grid" id="pand-grid"></div>
      </div>
    </section>
    <section className="view" id="view-wake" style={{"--ac": "#84b06c"} as React.CSSProperties}>
      <div className="view-bar">
        <button className="back-btn" data-back>← Hub</button>
        <div className="view-title"><span className="han">森</span><span className="name">WAKE</span></div>
      </div>
      <p className="view-tag">Hutan ini gelap dan hanya ada satu cahaya. Berjalanlah; apapun yang kamu sentuh menjadi suara, dan suara itu tinggal di dalam loop. Semakin dekat kamu ke cahaya, semakin rendah bunyinya.</p>
      <div className="stage stage-3d" id="wake-stage"></div>
      <p className="hint">W A S D / tombol panah untuk berjalan · klik tanah untuk berjalan ke sana · dekati pohon &amp; batu untuk menyentuhnya · cahaya (beam) memberi kick bila kamu cukup dekat.</p>
      <div className="two-col">
        <div className="panel">
          <h3>Loop — 16 langkah</h3>
          <div className="step-dots" id="wake-dots"></div>
          <div className="controls" style={{marginTop: "14px"} as React.CSSProperties}>
            <button className="btn primary" id="wake-play">▶ Jalankan loop</button>
            <button className="btn" id="wake-clear">Bersihkan loop</button>
            <div className="ctl"><label>Tempo <output id="wake-bpm-o">96 BPM</output></label>
              <input type="range" id="wake-bpm" min="60" max="140" value="96" /></div>
          </div>
          <p className="readout" id="wake-status" style={{margin: "12px 0 0"} as React.CSSProperties}>Sentuh sesuatu untuk mulai merekam…</p>
        </div>
        <div className="panel">
          <h3>Berjalan (untuk layar sentuh)</h3>
          <div className="dpad">
            <span className="sp"></span><button data-dir="up" aria-label="Maju">↑</button><span className="sp"></span>
            <button data-dir="left" aria-label="Kiri">←</button><span className="sp"></span><button data-dir="right" aria-label="Kanan">→</button>
            <span className="sp"></span><button data-dir="down" aria-label="Mundur">↓</button><span className="sp"></span>
          </div>
        </div>
      </div>
    </section>
    <section className="view" id="view-chaos" style={{"--ac": "#5fae9e"} as React.CSSProperties}>
      <div className="view-bar">
        <button className="back-btn" data-back>← Hub</button>
        <div className="view-title"><span className="han" style={{fontSize: "30px"} as React.CSSProperties}>混沌</span><span className="name">CHAOS</span></div>
      </div>
      <p className="view-tag">Satu titik, satu persamaan, jalur yang tak pernah mengulang dirinya. Posisi titik itu menggeser nada, membuka filter, dan menggoyang vibrato not yang kamu mainkan — langsung, selagi kamu menahannya.</p>
      <div className="stage"><canvas id="chaos-canvas" height="440"></canvas></div>
      <p className="hint">Tahan tuts di bawah (atau tombol keyboard A W S E D F T G Y H U J K) untuk memainkan not. Lepaskan untuk berhenti — seperti synth sungguhan.</p>
      <div className="panel">
        <h3>Tuts</h3>
        <div className="keys" id="chaos-keys"></div>
      </div>
      <div className="panel">
        <h3>Attractor</h3>
        <div className="controls">
          <div className="ctl"><label>Jenis attractor</label>
            <select id="chaos-type">
              <option value="lorenz">Lorenz</option>
              <option value="rossler">Rössler</option>
              <option value="aizawa">Aizawa</option>
            </select></div>
          <div className="ctl"><label>Waveform</label>
            <select id="chaos-wave">
              <option value="sawtooth">Sawtooth</option>
              <option value="triangle">Triangle</option>
              <option value="square">Square</option>
              <option value="sine">Sine</option>
            </select></div>
          <div className="ctl"><label>Kecepatan <output id="chaos-speed-o">1.0×</output></label>
            <input type="range" id="chaos-speed" min="20" max="300" value="100" /></div>
          <div className="ctl"><label>Kekuatan chaos <output id="chaos-amt-o">70%</output></label>
            <input type="range" id="chaos-amt" min="0" max="100" value="70" /></div>
          <button className="btn" id="chaos-kick">↯ Acak posisi titik</button>
        </div>
        <p className="readout" id="chaos-readout" style={{margin: "12px 0 0"} as React.CSSProperties}>x 0.00 · y 0.00 · z 0.00</p>
      </div>
    </section>
    <section className="view" id="view-gather" style={{"--ac": "#d9a441"} as React.CSSProperties}>
      <div className="view-bar">
        <button className="back-btn" data-back>← Hub</button>
        <div className="view-title"><span className="han">聚</span><span className="name">GATHER</span></div>
      </div>
      <p className="view-tag">Berikan sebuah gambar. Ia menjadi awan titik — kecerahan gambar menjadi kedalaman, warnanya menjadi nada. Sebarkan, lalu kumpulkan kembali; setiap perkumpulan adalah sebuah akor.</p>
      <div className="stage stage-3d" id="gather-stage"></div>
      <p className="hint">Seret untuk memutar awan titik · gambar contoh (matahari di atas bukit) sudah dimuat — unggah gambarmu sendiri untuk menggantinya.</p>
      <div className="panel">
        <h3>Kontrol</h3>
        <div className="controls">
          <label className="file-label">⤒ Unggah gambar<input type="file" id="gather-file" accept="image/*" /></label>
          <button className="btn primary" id="gather-pulse">◉ Kumpulkan &amp; bunyikan</button>
          <button className="btn" id="gather-auto">▶ Putar otomatis (sebar–kumpul)</button>
          <button className="btn" id="gather-sample">Gambar contoh</button>
          <div className="ctl"><label>Sebar ↔ Kumpul <output id="gather-morph-o">100%</output></label>
            <input type="range" id="gather-morph" min="0" max="100" value="100" /></div>
        </div>
        <p className="readout" id="gather-status" style={{margin: "12px 0 0"} as React.CSSProperties}>Menunggu gambar…</p>
      </div>
    </section>
    <section className="view" id="view-circuit" style={{"--ac": "#e6c84f"} as React.CSSProperties}>
      <div className="view-bar">
        <button className="back-btn" data-back>← Hub</button>
        <div className="view-title"><span className="han">電</span><span className="name">CIRCUIT</span></div>
      </div>
      <p className="view-tag">Empat slot, satu loop tertutup. Klik slot untuk mengganti komponennya, seret ke atas/bawah untuk mengubah nilainya. Arusnya nyata dan dihitung dari hukum Ohm — dan arus itulah yang membentuk suaranya.</p>
      <div className="stage circuit-wrap">
        <svg className="circuit-svg" id="circuit-svg" viewBox="0 0 760 300" role="img" aria-label="Diagram rangkaian listrik interaktif"></svg>
      </div>
      <p className="hint">Klik slot = ganti komponen (Baterai → Resistor → Kapasitor → LED → Induktor → Kosong) · seret vertikal pada slot = ubah nilai · slot kosong = rangkaian terbuka = hening.</p>
      <div className="two-col">
        <div className="panel">
          <h3>Tuts — mainkan melalui rangkaian</h3>
          <div className="keys" id="circuit-keys"></div>
        </div>
        <div className="panel">
          <h3>Pembacaan rangkaian</h3>
          <p className="readout" id="circuit-readout">—</p>
        </div>
      </div>
    </section>

    <div className="toast" id="toast" role="status"></div>
    </>
  );
}
