import { useState } from 'react';
import { Hero } from './components/Hero';
import { TemplateShowcase } from './components/TemplateShowcase';
import { DocumentCustomizer } from './components/DocumentCustomizer';
import { BonusSection } from './components/BonusSection';
import { PromoCTA } from './components/PromoCTA';
import { Scale, Globe, Mail, Phone, Shield } from 'lucide-react';

function App() {
  const [selectedDoc, setSelectedDoc] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDoc = (docName: string) => {
    setSelectedDoc(docName);
  };

  return (
    <>
      {/* Navigation Header */}
      <nav className="nav-bar glass-panel">
        <div className="container nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('root')}>
            <Scale size={24} className="nav-logo-icon" />
            <span>Lawyer Visioner</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('templates-showcase')}>Kategori</button>
            <button onClick={() => scrollToSection('document-customizer')}>Live Demo</button>
            <button onClick={() => scrollToSection('bonus-section')}>Bonus & SOP</button>
          </div>
          <button onClick={() => scrollToSection('promo-cta')} className="btn-primary btn-nav">
            Ambil Promo
          </button>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="main-layout">
        
        {/* Hero Banner */}
        <Hero 
          onExploreClick={() => scrollToSection('templates-showcase')} 
          onPromoClick={() => scrollToSection('promo-cta')} 
        />

        {/* Template Catalog Showcase */}
        <TemplateShowcase onSelectDocument={handleSelectDoc} />

        {/* Live Document Previewer & Customizer */}
        <DocumentCustomizer 
          selectedDocName={selectedDoc} 
          onOpenPromo={() => scrollToSection('promo-cta')} 
        />

        {/* Bonus & SOP List */}
        <BonusSection onPromoClick={() => scrollToSection('promo-cta')} />

        {/* Checkout Form & CTA */}
        <PromoCTA />

      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container footer-grid">
          
          {/* Brand & Description */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Scale size={28} className="footer-logo-icon" />
              <span>Lawyer Visioner</span>
            </div>
            <p className="footer-desc">
              Penyedia aset digital hukum terdepan di Indonesia. Kami berdedikasi membantu advokat, konsultan hukum, dan paralegal bekerja lebih cerdas dan efisien melalui standarisasi dokumen bermutu tinggi.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-group">
            <h3>Navigasi</h3>
            <ul>
              <li><button onClick={() => scrollToSection('root')}>Beranda</button></li>
              <li><button onClick={() => scrollToSection('templates-showcase')}>Kategori Template</button></li>
              <li><button onClick={() => scrollToSection('document-customizer')}>Generator Demo</button></li>
              <li><button onClick={() => scrollToSection('bonus-section')}>Bonus & SOP Hukum</button></li>
            </ul>
          </div>

          {/* Contact & Support info */}
          <div className="footer-contact">
            <h3>Kontak & Bantuan</h3>
            <ul>
              <li><Mail size={16} /> support@lawyervisioner.com</li>
              <li><Phone size={16} /> +62 811-665-212</li>
              <li><Globe size={16} /> www.lawyervisioner.com</li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="footer-bottom">
          <div className="container footer-bottom-container">
            <p className="disclaimer">
              <Shield size={12} className="shield-icon" /> 
              <strong>Disclaimer:</strong> Seluruh draf dokumen hukum di dalam paket Advokat Master bersifat referensi dan panduan umum. Penggunaan dokumen harus disesuaikan kembali dengan hukum acara, ketentuan regulasi terbaru, dan keadaan faktual sengketa klien Anda. Lawyer Visioner tidak bertanggung jawab atas hasil perkara di persidangan.
            </p>
            <hr className="footer-hr" />
            <div className="copyright-row">
              <p>&copy; {new Date().getFullYear()} Lawyer Visioner. All Rights Reserved.</p>
              <p>Made for professional advocates</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Inline styles for navbar, footers, and app wrapper */}
      <style>{`
        /* Header Nav Bar Styling */
        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-radius: 0;
          border-top: none;
          border-left: none;
          border-right: none;
          background: rgba(10, 11, 16, 0.75);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          cursor: pointer;
        }

        .nav-logo-icon {
          color: var(--secondary);
        }

        .nav-links {
          display: flex;
          gap: 28px;
        }

        .nav-links button {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .nav-links button:hover {
          color: var(--secondary);
        }

        .btn-nav {
          padding: 8px 20px;
          font-size: 0.9rem;
        }

        .main-layout {
          margin-top: 72px; /* to push content below fixed header */
        }

        /* Footer Layout Styling */
        .footer {
          background: #07080b;
          border-top: 1px solid var(--border-color);
          padding-top: 60px;
          margin-top: 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .footer-logo-icon {
          color: var(--secondary);
        }

        .footer-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-links-group h3, .footer-contact h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 16px;
          position: relative;
          padding-bottom: 8px;
        }

        .footer-links-group h3::after, .footer-contact h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background: var(--secondary);
        }

        .footer-links-group ul, .footer-contact ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-group button {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .footer-links-group button:hover {
          color: var(--secondary);
          transform: translateX(4px);
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .footer-contact li svg {
          color: var(--secondary);
          flex-shrink: 0;
        }

        /* Footer Bottom (Disclaimers & Copyright) */
        .footer-bottom {
          background: #040507;
          padding: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
        }

        .footer-bottom-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .disclaimer {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.5;
          text-align: justify;
        }

        .disclaimer strong {
          color: var(--text-secondary);
        }

        .disclaimer .shield-icon {
          display: inline-block;
          margin-right: 4px;
          color: var(--primary);
          vertical-align: middle;
        }

        .footer-hr {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .copyright-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Hide standard links on mobile */
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .copyright-row {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default App;
