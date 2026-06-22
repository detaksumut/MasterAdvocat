import React, { useState } from 'react';
import { Folder, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  documents: string[];
}

const CATEGORIES: Category[] = [
  {
    id: 'pidana-perdata',
    title: 'Template Pidana & Perdata',
    description: 'Dokumen untuk Perkara Pidana (Kepolisian/Kejaksaan/Pengadilan) & Perdata Umum.',
    documents: [
      'Surat Kuasa (Khusus Perdata & Pidana)',
      'Somasi / Teguran Hukum (Wanprestasi & PMH)',
      'Surat Gugatan (Wanprestasi / Cidera Janji)',
      'Surat Gugatan Perbuatan Melawan Hukum (PMH)',
      'Jawaban Tergugat & Eksepsi',
      'Replik Penggugat',
      'Duplik Tergugat',
      'Daftar Bukti (Penggugat & Tergugat)',
      'Kesimpulan (Konklusi) Para Pihak',
      'Memori Banding',
      'Kontra Memori Banding',
      'Memori Kasasi & PK (Peninjauan Kembali)'
    ]
  },
  {
    id: 'agama',
    title: 'Template Peradilan Agama',
    description: 'Hukum acara peradilan agama termasuk perkawinan, kewarisan, hibah, wakaf, dan syariah.',
    documents: [
      'Gugatan Cerai Gugat (Istri mengajukan)',
      'Gugatan Cerai Talak (Suami mengajukan)',
      'Gugatan Harta Bersama (Gono-Gini)',
      'Gugatan Hak Asuh Anak (Hadhanah)',
      'Permohonan Isbat Nikah (Pengesahan)',
      'Permohonan Penetapan Ahli Waris (PAW)',
      'Jawaban, Replik, & Duplik Pengadilan Agama',
      'Daftar Bukti & Kesimpulan Peradilan Agama',
      'Memori Banding & Kasasi Peradilan Agama'
    ]
  },
  {
    id: 'pajak',
    title: 'Template Peradilan Pajak',
    description: 'Dokumen banding, gugatan dan peninjauan kembali khusus sengketa perpajakan.',
    documents: [
      'Surat Banding Pajak (Keberatan Surat Ketetapan Pajak)',
      'Surat Gugatan Pajak (Terhadap tindakan penagihan)',
      'Surat Bantahan Pajak (Tanggapan atas Uraian Banding)',
      'Surat Tanggapan Terhadap Gugatan Pajak',
      'Permohonan Peninjauan Kembali (PK) Pajak ke Mahkamah Agung'
    ]
  },
  {
    id: 'tun',
    title: 'Template Peradilan Tata Usaha Negara',
    description: 'Gugatan sengketa terhadap Keputusan Pejabat Tata Usaha Negara (KTUN).',
    documents: [
      'Surat Gugatan Sengketa Kepegawaian / Pemecatan',
      'Surat Gugatan Pembatalan Sertifikat Tanah Sengketa',
      'Surat Gugatan KTUN Umum',
      'Jawaban Tergugat Pejabat TUN',
      'Replik, Duplik, & Kesimpulan PTUN',
      'Memori Banding & Kasasi Perkara PTUN'
    ]
  }
];

interface TemplateShowcaseProps {
  onSelectDocument: (docName: string) => void;
}

export const TemplateShowcase: React.FC<TemplateShowcaseProps> = ({ onSelectDocument }) => {
  const [activeCategory, setActiveCategory] = useState<string>('pidana-perdata');

  const selectedCategory = CATEGORIES.find(cat => cat.id === activeCategory) || CATEGORIES[0];

  return (
    <section id="templates-showcase" className="showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-fade-in">
          <h2 className="section-title">Dokumen Acara Peradilan</h2>
          <p className="section-subtitle">
            Pilih kategori peradilan di bawah untuk melihat daftar dokumen hukum profesional yang siap Anda gunakan.
          </p>
        </div>

        {/* Category Folders Grid */}
        <div className="folders-grid">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`folder-card ${isActive ? 'active' : ''}`}
              >
                <div className="folder-icon-wrapper">
                  <Folder className="folder-icon" size={32} />
                </div>
                <div className="folder-info">
                  <h3>{cat.title}</h3>
                  <p className="folder-meta">{cat.documents.length} Dokumen Ready</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Document Details */}
        <div className="documents-container glass-panel">
          <div className="doc-panel-header">
            <div>
              <h3>{selectedCategory.title}</h3>
              <p>{selectedCategory.description}</p>
            </div>
            <span className="badge-count">{selectedCategory.documents.length} File</span>
          </div>

          <div className="doc-list-grid">
            {selectedCategory.documents.map((doc, idx) => (
              <div key={idx} className="doc-item">
                <div className="doc-bullet">
                  <CheckCircle2 size={16} className="bullet-icon" />
                </div>
                <span className="doc-name">{doc}</span>
                <button 
                  onClick={() => onSelectDocument(doc)} 
                  className="btn-text-action"
                  title="Coba kustomisasi sekarang"
                >
                  Edit Demo <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .showcase-section {
          padding: 80px 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #fff 0%, var(--text-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.05rem;
          color: var(--text-secondary);
        }

        /* Folders Grid */
        .folders-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .folder-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 24px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          text-align: left;
          transition: var(--transition-bounce);
        }

        .folder-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-4px);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .folder-card.active {
          background: rgba(163, 29, 36, 0.1);
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(163, 29, 36, 0.2);
        }

        .folder-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: var(--border-radius-sm);
          background: rgba(212, 175, 55, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          flex-shrink: 0;
          transition: var(--transition-smooth);
        }

        .folder-card.active .folder-icon-wrapper {
          background: var(--primary);
          color: #fff;
        }

        .folder-info h3 {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .folder-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Documents Container Panel */
        .documents-container {
          padding: 40px;
          border-radius: var(--border-radius-lg);
        }

        .doc-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 24px;
          margin-bottom: 32px;
          gap: 20px;
        }

        .doc-panel-header h3 {
          font-size: 1.5rem;
          margin-bottom: 6px;
          color: var(--secondary);
        }

        .doc-panel-header p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .badge-count {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Document Grid List */
        .doc-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 40px;
          row-gap: 18px;
        }

        .doc-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--border-radius-sm);
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid transparent;
          transition: var(--transition-smooth);
        }

        .doc-item:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.05);
        }

        .doc-bullet {
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .doc-name {
          font-size: 0.95rem;
          color: var(--text-primary);
          flex-grow: 1;
        }

        .btn-text-action {
          background: transparent;
          border: none;
          color: var(--secondary);
          font-size: 0.825rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          opacity: 0;
          transform: translateX(-5px);
          transition: var(--transition-smooth);
        }

        .doc-item:hover .btn-text-action {
          opacity: 1;
          transform: translateX(0);
        }

        .btn-text-action:hover {
          color: var(--secondary-hover);
        }

        @media (max-width: 1024px) {
          .folders-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .folders-grid {
            grid-template-columns: 1fr;
          }
          .doc-list-grid {
            grid-template-columns: 1fr;
          }
          .documents-container {
            padding: 24px;
          }
          .doc-panel-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
