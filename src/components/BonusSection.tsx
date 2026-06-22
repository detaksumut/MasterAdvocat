import React from 'react';
import { BookOpen, FileSpreadsheet, Scale, UserCheck, Handshake, Landmark, ArrowRight, Gift } from 'lucide-react';

interface BonusSectionProps {
  onPromoClick: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onPromoClick }) => {
  return (
    <section id="bonus-section" className="bonus-section">
      {/* Glow Effect */}
      <div className="bonus-glow-orb"></div>

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="bonus-tag">
            <Gift size={14} className="gift-icon" />
            <span>BONUS BUNDLE EKSKLUSIF</span>
          </div>
          <h2 className="section-title">Tambahan Bonus Premium Untuk Anda</h2>
          <p className="section-subtitle">
            Dapatkan juga template pelengkap, ratusan e-book hukum referensi utama, dan Standar Operasional Prosedur (SOP) penting untuk mengelola kantor hukum Anda.
          </p>
        </div>

        {/* Row 1: The Blue Items (Templates & Ebooks) */}
        <div className="bonus-row-blue">
          {/* Card 1: Legal Opinion */}
          <div className="bonus-card blue-theme">
            <div className="bonus-icon-wrapper">
              <Scale size={24} />
            </div>
            <div className="bonus-body">
              <span className="badge-bonus">TEMPLATE</span>
              <h3>Legal Opinion</h3>
              <p>Format penyusunan opini hukum formal untuk menjawab kebutuhan kajian hukum klien Anda secara profesional dan sistematis.</p>
            </div>
          </div>

          {/* Card 2: Notulen Rapat */}
          <div className="bonus-card blue-theme">
            <div className="bonus-icon-wrapper">
              <FileSpreadsheet size={24} />
            </div>
            <div className="bonus-body">
              <span className="badge-bonus">TEMPLATE</span>
              <h3>Notulen Rapat</h3>
              <p>Template pencatatan hasil diskusi hukum, rapat dengan klien, dan review perkara agar terdokumentasi rapi dan berkekuatan pembuktian internal.</p>
            </div>
          </div>

          {/* Card 3: 96 Ebook Hukum */}
          <div className="bonus-card blue-theme">
            <div className="bonus-icon-wrapper">
              <BookOpen size={24} />
            </div>
            <div className="bonus-body">
              <span className="badge-bonus">96 E-BOOKS</span>
              <h3>96 Ebook Hukum</h3>
              <p>Rangkaian buku elektronik referensi hukum perdata, pidana, tata usaha negara, agraria, kontrak dagang, dan kompilasi regulasi terkini.</p>
            </div>
          </div>
        </div>

        {/* Section Label: SOPs */}
        <h3 className="sop-section-title">Standar Operasional Prosedur (SOP) Advokat</h3>

        {/* Row 2: The Red/Crimson Items (SOPs) */}
        <div className="bonus-row-red">
          {/* Card 1: SOP Penerimaan Klien */}
          <div className="bonus-card red-theme">
            <div className="bonus-icon-wrapper">
              <UserCheck size={24} />
            </div>
            <div className="bonus-body">
              <span className="badge-bonus">SOP ADVOKAT</span>
              <h3>Penerimaan Klien</h3>
              <p>Panduan langkah demi langkah saat pertama kali menerima klien: interview awal, asesmen hukum, penentuan rate fee, hingga penandatanganan perjanjian kuasa.</p>
            </div>
          </div>

          {/* Card 2: SOP Negosiasi dengan Pihak Lawan */}
          <div className="bonus-card red-theme">
            <div className="bonus-icon-wrapper">
              <Handshake size={24} />
            </div>
            <div className="bonus-body">
              <span className="badge-bonus">SOP ADVOKAT</span>
              <h3>Negosiasi dengan Pihak Lawan</h3>
              <p>Metode negosiasi mediasi/somasi di luar pengadilan secara aman untuk memenangkan hak klien tanpa perlu menempuh jalur peradilan yang panjang.</p>
            </div>
          </div>

          {/* Card 3: SOP Pengumpulan Bukti */}
          <div className="bonus-card red-theme">
            <div className="bonus-icon-wrapper">
              <Landmark size={24} />
            </div>
            <div className="bonus-body">
              <span className="badge-bonus">SOP ADVOKAT</span>
              <h3>Pengumpulan Bukti</h3>
              <p>Tata cara mengamankan, memverifikasi, menyusun, dan mendaftarkan alat bukti tertulis, kesaksian, ahli, agar sah di persidangan sesuai hukum acara.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="bonus-cta-box glass-panel">
          <div className="cta-content">
            <h3>Dapatkan Semua Dokumen, E-book, & SOP dalam Satu Paket</h3>
            <p>Hemat waktu kerja berminggu-minggu dengan menggunakan draf template siap pakai yang legal dan tervalidasi.</p>
          </div>
          <button onClick={onPromoClick} className="btn-primary">
            Dapatkan Paket & Bonus Sekarang <ArrowRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .bonus-section {
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .bonus-glow-orb {
          position: absolute;
          width: 500px;
          height: 500px;
          background: rgba(163, 29, 36, 0.08);
          border-radius: 50%;
          filter: blur(120px);
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
          pointer-events: none;
        }

        .bonus-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--secondary);
          background: rgba(212, 175, 55, 0.08);
          border: 1.5px solid rgba(212, 175, 55, 0.2);
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }

        .gift-icon {
          color: var(--secondary);
        }

        /* Bonus Rows Grid */
        .bonus-row-blue, .bonus-row-red {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 24px;
          position: relative;
          z-index: 10;
        }

        .sop-section-title {
          font-size: 1.6rem;
          text-align: center;
          margin-top: 60px;
          margin-bottom: 12px;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }

        /* Card Themes styling */
        .bonus-card {
          border-radius: var(--border-radius-md);
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: var(--transition-bounce);
          border: 1px solid var(--border-color);
        }

        .bonus-card:hover {
          transform: translateY(-8px);
        }

        /* Blue / Navy theme (Top Row) */
        .blue-theme {
          background: linear-gradient(135deg, rgba(16, 26, 48, 0.6) 0%, rgba(10, 15, 30, 0.8) 100%);
          border-color: rgba(65, 105, 225, 0.15);
        }

        .blue-theme:hover {
          border-color: var(--secondary);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.15);
        }

        .blue-theme .bonus-icon-wrapper {
          background: rgba(212, 175, 55, 0.1);
          color: var(--secondary);
        }

        /* Red / Crimson theme (Bottom Row) */
        .red-theme {
          background: linear-gradient(135deg, rgba(50, 14, 18, 0.6) 0%, rgba(20, 8, 10, 0.8) 100%);
          border-color: rgba(163, 29, 36, 0.15);
        }

        .red-theme:hover {
          border-color: var(--primary);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(163, 29, 36, 0.2);
        }

        .red-theme .bonus-icon-wrapper {
          background: rgba(163, 29, 36, 0.15);
          color: var(--primary);
        }

        .bonus-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bonus-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .badge-bonus {
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .bonus-body h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .bonus-body p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Promo Box Call-To-Action */
        .bonus-cta-box {
          margin-top: 60px;
          padding: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          position: relative;
          z-index: 10;
        }

        .bonus-cta-box h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .bonus-cta-box p {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .bonus-row-blue, .bonus-row-red {
            grid-template-columns: 1fr 1fr;
          }
          .bonus-cta-box {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .bonus-row-blue, .bonus-row-red {
            grid-template-columns: 1fr;
          }
          .bonus-cta-box {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
};
