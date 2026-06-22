import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Award } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPromoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPromoClick }) => {
  return (
    <header className="hero-section">
      {/* Background Orbs */}
      <div className="glow-orb red-orb"></div>
      <div className="glow-orb gold-orb"></div>

      <div className="container hero-container animate-fade-in">
        {/* Brand Header */}
        <div className="brand-badge">
          <Scale className="brand-icon" size={18} />
          <span>Lawyer Visioner</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          <span className="title-sub">MEMPERKENALKAN</span>
          <span className="title-main gradient-text-gold">ADVOKAT MASTER</span>
        </h1>

        {/* Hero Tagline */}
        <p className="hero-description">
          Dokumen Acara Peradilan <strong>Siap Pakai</strong> & <strong>SOP Profesional</strong> untuk mempercepat kerja, memenangkan perkara, dan meningkatkan prestise kantor hukum Anda.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <button onClick={onPromoClick} className="btn-primary">
            Ambil Promo Spesial <ArrowRight size={18} />
          </button>
          <button onClick={onExploreClick} className="btn-secondary">
            Lihat Template
          </button>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges-grid">
          <div className="trust-badge">
            <ShieldCheck className="badge-icon" size={20} />
            <div>
              <h3>100% Legal & Teruji</h3>
              <p>Disusun oleh advokat senior & praktisi hukum berpengalaman</p>
            </div>
          </div>
          <div className="trust-badge">
            <Award className="badge-icon" size={20} />
            <div>
              <h3>Format Standar Peradilan</h3>
              <p>Sesuai dengan hukum acara perdata, pidana, agama, tata usaha & pajak</p>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Specific styles for Hero Section */}
      <style>{`
        .hero-section {
          position: relative;
          padding: 100px 0 60px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          min-height: 80vh;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        /* Glowing Decorative Orbs */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          z-index: 1;
        }

        .red-orb {
          width: 400px;
          height: 400px;
          background: var(--primary);
          top: -100px;
          left: -100px;
          animation: pulse 10s ease-in-out infinite alternate;
        }

        .gold-orb {
          width: 350px;
          height: 350px;
          background: var(--secondary);
          bottom: 0px;
          right: -50px;
          animation: pulse 12s ease-in-out infinite alternate-reverse;
        }

        @keyframes pulse {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.2) translate(50px, 30px); }
        }

        /* Brand Badge */
        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          padding: 8px 16px;
          border-radius: 9999px;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          color: var(--secondary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .brand-icon {
          color: var(--secondary);
        }

        /* Hero Title */
        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 8px;
          line-height: 1.1;
        }

        .title-sub {
          font-size: 1.125rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          color: var(--text-muted);
        }

        .title-main {
          font-size: 4.5rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          font-family: var(--font-heading);
          text-shadow: 0 0 40px rgba(212, 175, 55, 0.15);
        }

        .hero-description {
          max-width: 680px;
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .hero-description strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Actions */
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Trust Badges */
        .trust-badges-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 60px;
          max-width: 800px;
          width: 100%;
          text-align: left;
        }

        .trust-badge {
          display: flex;
          gap: 16px;
          background: rgba(17, 19, 28, 0.4);
          border: 1px solid var(--border-color);
          padding: 20px;
          border-radius: var(--border-radius-md);
          backdrop-filter: blur(8px);
        }

        .badge-icon {
          color: var(--secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .trust-badge h3 {
          font-size: 1.05rem;
          margin-bottom: 4px;
          color: var(--text-primary);
        }

        .trust-badge p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .title-main {
            font-size: 3rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
          .trust-badges-grid {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }
          .hero-section {
            padding: 80px 0 40px 0;
          }
        }
      `}</style>
    </header>
  );
};
