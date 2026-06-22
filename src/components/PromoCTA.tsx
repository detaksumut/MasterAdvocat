import React, { useState, useEffect } from 'react';
import { Send, Clock, Percent, ShieldCheck } from 'lucide-react';

export const PromoCTA: React.FC = () => {
  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Form handling
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;
    setLoading(true);
    
    const waNumber = '62811665212'; // Silakan ganti dengan nomor WhatsApp Admin Anda
    const textMessage = `Halo Admin Lawyer Visioner, saya ingin mengklaim Promo Advokat Master.\n\n*Data Pendaftar:*\n- *Nama:* ${name}\n- *Nomor WhatsApp:* ${whatsapp}\n- *Email:* ${email}`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Redirect to WhatsApp instantly in a new window/tab
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <section id="promo-cta" className="promo-section">
      <div className="container">
        <div className="promo-grid">
          
          {/* Left Side: Pricing, Value Props & Countdown */}
          <div className="promo-info">
            <span className="badge-alert"><Percent size={14} /> PROMO TERBATAS HARI INI</span>
            <h2>Gabung dengan Ratusan Advokat Visioner Lainnya</h2>
            <p className="promo-desc">
              Jangan buang waktu berharga Anda menyusun draf dari nol. Investasi sekali untuk aset karir hukum selamanya.
            </p>

            {/* Countdown timer */}
            <div className="countdown-box">
              <div className="countdown-title">
                <Clock size={16} className="clock-icon" />
                <span>Sisa Waktu Promo Spesial:</span>
              </div>
              <div className="timer-grid">
                <div className="time-segment">
                  <span className="time-val">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="time-lbl">Jam</span>
                </div>
                <span className="time-colon">:</span>
                <div className="time-segment">
                  <span className="time-val">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="time-lbl">Menit</span>
                </div>
                <span className="time-colon">:</span>
                <div className="time-segment text-accent">
                  <span className="time-val">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="time-lbl">Detik</span>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="pricing-box">
              <div className="price-tag-original">Harga Normal: Rp 2.500.000</div>
              <div className="price-tag-deal">
                <span className="deal-lbl">Hanya Hari Ini:</span>
                <span className="deal-val">Rp 499.000</span>
              </div>
              <p className="payment-guarantee">
                <ShieldCheck size={14} className="shield-icon" /> Sekali bayar, akses selamanya & GRATIS update reguler.
              </p>
            </div>
          </div>

          {/* Right Side: Form Checkout */}
          <div className="promo-form-panel glass-panel">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="checkout-form">
                <h3>Ambil Promo Sekarang</h3>
                <p>Isi formulir singkat di bawah ini. Tim admin kami akan segera menghubungi Anda di WhatsApp untuk panduan pengiriman file.</p>

                <div className="form-group">
                  <label>Nama Lengkap & Gelar</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-text"
                    placeholder="misal: Ahmad Fauzi, S.H."
                  />
                </div>

                <div className="form-group">
                  <label>Nomor WhatsApp Aktif</label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="input-text"
                    placeholder="misal: 081234567890"
                  />
                </div>

                <div className="form-group">
                  <label>Alamat Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-text"
                    placeholder="misal: ahmad.fauzi@example.com"
                  />
                </div>

                <button type="submit" className="btn-primary btn-block" disabled={loading}>
                  {loading ? 'Memproses Draf...' : 'Konfirmasi Ambil Promo'} <Send size={16} />
                </button>

                <p className="form-footer-privacy">
                  Kami menjaga privasi data Anda 100%. Data di atas hanya untuk pengiriman tautan download Google Drive.
                </p>
              </form>
            ) : (
              <div className="checkout-success">
                <div className="success-lottie-mock">
                  <ShieldCheck size={64} className="success-lottie-icon" />
                </div>
                <h3>Pendaftaran Berhasil!</h3>
                <p>Terima kasih <strong>{name}</strong>. Kami mengarahkan Anda ke WhatsApp Admin secara otomatis.</p>
                <div className="success-info-box">
                  <p><strong>Bila pengalihan otomatis gagal:</strong></p>
                  <p>Silakan klik tombol hijau di bawah ini untuk langsung terhubung dengan Admin via WhatsApp guna mengklaim akses paket Anda.</p>
                </div>
                <a
                  href={`https://wa.me/62811665212?text=Halo%20Admin%20Lawyer%20Visioner,%20saya%20ingin%20mengklaim%20Promo%20Advokat%20Master.%0A%0A*Data%20Pendaftar:*%0A-%20*Nama:*%20${encodeURIComponent(name)}%0A-%20*Nomor%20WhatsApp:*%20${encodeURIComponent(whatsapp)}%0A-%20*Email:*%20${encodeURIComponent(email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-direct"
                >
                  Hubungi Admin via WhatsApp
                </a>
              </div>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .promo-section {
          padding: 100px 0;
          background: linear-gradient(180deg, rgba(10, 11, 16, 0) 0%, rgba(163, 29, 36, 0.08) 100%);
          position: relative;
        }

        .badge-alert {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--primary);
          background: rgba(163, 29, 36, 0.1);
          border: 1px solid rgba(163, 29, 36, 0.2);
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
        }

        .promo-grid {
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 60px;
          align-items: center;
        }

        .promo-info h2 {
          font-size: 2.8rem;
          line-height: 1.15;
          margin-bottom: 16px;
          font-family: var(--font-heading);
          background: linear-gradient(135deg, #fff 40%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .promo-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
          line-height: 1.6;
        }

        /* Countdown Timer */
        .countdown-box {
          margin-bottom: 32px;
        }

        .countdown-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 12px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .clock-icon {
          color: var(--primary);
        }

        .timer-grid {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .time-segment {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          width: 80px;
          height: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .time-val {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .time-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .time-colon {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-muted);
        }

        .text-accent .time-val {
          color: var(--secondary);
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
        }

        /* Pricing Area */
        .pricing-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 24px;
          max-width: 450px;
        }

        .price-tag-original {
          font-size: 1.05rem;
          color: var(--text-muted);
          text-decoration: line-through;
          margin-bottom: 4px;
        }

        .price-tag-deal {
          display: flex;
          align-items: flex-baseline;
          gap: 8px;
          margin-bottom: 12px;
        }

        .deal-lbl {
          font-size: 1rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .deal-val {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          font-family: var(--font-heading);
          text-shadow: 0 0 15px var(--primary-glow);
        }

        .payment-guarantee {
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .shield-icon {
          color: #4caf50;
        }

        /* Form Panel */
        .promo-form-panel {
          padding: 40px 32px;
          border-radius: var(--border-radius-lg);
          border-color: rgba(163, 29, 36, 0.2);
        }

        .checkout-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .checkout-form h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .checkout-form p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .btn-block {
          width: 100%;
          justify-content: center;
          padding: 14px 0;
          font-size: 1.05rem;
        }

        .form-footer-privacy {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.4;
        }

        /* Success screen details */
        .checkout-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          padding: 20px 0;
        }

        .success-lottie-icon {
          color: #4caf50;
          animation: scaleUpSuccess 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes scaleUpSuccess {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .success-info-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          padding: 16px;
          border-radius: var(--border-radius-sm);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          text-align: left;
        }

        .btn-whatsapp-direct {
          background: #25d366;
          color: #fff;
          border: none;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          padding: 14px 28px;
          border-radius: 9999px;
          cursor: pointer;
          transition: var(--transition-bounce);
          text-decoration: none;
          width: 100%;
          text-align: center;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }

        .btn-whatsapp-direct:hover {
          transform: translateY(-2px);
          background: #20ba5a;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
        }

        @media (max-width: 1024px) {
          .promo-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .promo-info h2 {
            font-size: 2.2rem;
          }
          .timer-grid {
            justify-content: flex-start;
          }
          .promo-form-panel {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
};
