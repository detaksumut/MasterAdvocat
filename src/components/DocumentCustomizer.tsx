import React, { useState, useEffect } from 'react';
import { Download, RotateCcw, Check, Sparkles, Building, User, Calendar, DollarSign, Printer, Upload } from 'lucide-react';

interface DocumentCustomizerProps {
  selectedDocName?: string;
  onOpenPromo: () => void;
}

export const DocumentCustomizer: React.FC<DocumentCustomizerProps> = ({ selectedDocName, onOpenPromo }) => {
  // Document template configurations
  const [templateType, setTemplateType] = useState<string>('surat-kuasa');
  
  // Form States
  const [letterheadStyle, setLetterheadStyle] = useState<string>('image-banner');
  const [advocateName, setAdvocateName] = useState<string>('Ahmad Fauzi, S.H., M.H.');
  const [lawFirm, setLawFirm] = useState<string>('Fauzi & Partners Law Office');
  const [advocateAddress, setAdvocateAddress] = useState<string>('Sudirman Central Business District (SCBD) Lot 28, Jakarta Selatan');
  const [clientName, setClientName] = useState<string>('Budi Santoso');
  const [clientAddress, setClientAddress] = useState<string>('Jl. Kemang Raya No. 12, Jakarta Selatan');
  const [opponentName, setOpponentName] = useState<string>('PT. Maju Mundur Sejahtera');
  const [opponentAddress, setOpponentAddress] = useState<string>('Kawasan Industri Jababeka Blok C-15, Bekasi');
  const [datePlace, setDatePlace] = useState<string>('Jakarta, 22 Juni 2026');
  const [caseValue, setCaseValue] = useState<string>('750.000.000');
  const [demandAction, setDemandAction] = useState<string>('melunasi sisa pembayaran proyek pembangunan ruko');

  // DRM Licensing States
  const [isPremium, setIsPremium] = useState<boolean>(() => {
    return localStorage.getItem('advmaster_premium') === 'true';
  });
  const [licenseKeyInput, setLicenseKeyInput] = useState<string>('');
  const [showLockModal, setShowLockModal] = useState<boolean>(false);
  const [licenseError, setLicenseError] = useState<string | null>(null);

  const handleActivateLicense = (e: React.FormEvent) => {
    e.preventDefault();
    if (licenseKeyInput.trim().toUpperCase() === 'ADVMST-2026-VIP') {
      setIsPremium(true);
      localStorage.setItem('advmaster_premium', 'true');
      setLicenseError(null);
      setShowLockModal(false);
      alert('Aktivasi Berhasil! Lisensi premium Anda telah diaktifkan.');
    } else {
      setLicenseError('Kunci lisensi salah atau kedaluwarsa. Silakan periksa kembali.');
    }
  };

  const handleDeactivateLicense = () => {
    setIsPremium(false);
    localStorage.removeItem('advmaster_premium');
  };

  // Custom Upload States (SaaS Features)
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const [customHeader, setCustomHeader] = useState<string | null>(null);
  const [customFooter, setCustomFooter] = useState<string | null>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHeaderUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomHeader(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFooterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomFooter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger template type update if selected from outside
  useEffect(() => {
    if (selectedDocName) {
      const lowerName = selectedDocName.toLowerCase();
      if (lowerName.includes('kuasa')) {
        setTemplateType('surat-kuasa');
      } else if (lowerName.includes('somasi')) {
        setTemplateType('somasi');
      } else if (lowerName.includes('gugatan')) {
        setTemplateType('gugatan');
      } else if (lowerName.includes('jawaban')) {
        setTemplateType('jawaban');
      }
      
      // Scroll to customizer
      const element = document.getElementById('document-customizer');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedDocName]);

  // Export states
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportComplete, setExportComplete] = useState<boolean>(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
      setTimeout(() => setExportComplete(false), 4000);
    }, 2500);
  };

  const handleReset = () => {
    setLetterheadStyle('image-banner');
    setCustomLogo(null);
    setCustomHeader(null);
    setCustomFooter(null);
    setAdvocateName('Ahmad Fauzi, S.H., M.H.');
    setLawFirm('Fauzi & Partners Law Office');
    setAdvocateAddress('Sudirman Central Business District (SCBD) Lot 28, Jakarta Selatan');
    setClientName('Budi Santoso');
    setClientAddress('Jl. Kemang Raya No. 12, Jakarta Selatan');
    setOpponentName('PT. Maju Mundur Sejahtera');
    setOpponentAddress('Kawasan Industri Jababeka Blok C-15, Bekasi');
    setCaseValue('750.000.000');
    setDemandAction('melunasi sisa pembayaran proyek pembangunan ruko');
    setDatePlace('Jakarta, 22 Juni 2026');
  };

  return (
    <section id="document-customizer" className="customizer-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-promo"><Sparkles size={14} /> LIVE DEMO GENERATOR</span>
          <h2 className="section-title">Coba Customizer Dokumen Sekarang</h2>
          <p className="section-subtitle">
            Rasakan kemudahan mengedit dokumen hukum secara langsung. Ubah form di kiri, dan lihat draf dokumen profesional ter-update di kanan secara instan!
          </p>
        </div>

        <div className="editor-grid">
          
          {/* Left panel: Form Controls */}
          <div className="form-panel glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 className="panel-title" style={{ marginBottom: 0 }}>Formulir Identitas & Kasus</h3>
              {isPremium ? (
                <span className="badge-premium" onClick={handleDeactivateLicense} title="Klik untuk keluar dari mode premium" style={{ cursor: 'pointer', background: '#2e7d32', color: '#fff', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                  PREMIUM
                </span>
              ) : (
                <span className="badge-premium" onClick={() => setShowLockModal(true)} title="Klik untuk mengaktifkan lisensi" style={{ cursor: 'pointer', background: '#64748b', color: '#fff', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                  DEMO
                </span>
              )}
            </div>
            
            <div className="form-group">
              <label>Jenis Dokumen Hukum</label>
              <select 
                value={templateType} 
                onChange={(e) => setTemplateType(e.target.value)}
                className="input-select"
              >
                <option value="surat-kuasa">Surat Kuasa Khusus</option>
                <option value="somasi">Surat Teguran (Somasi)</option>
                <option value="gugatan">Gugatan Wanprestasi</option>
                <option value="jawaban">Jawaban Tergugat</option>
              </select>
            </div>

            <hr className="divider" />

            {/* Advocate Details */}
            <h4 className="group-title"><Building size={16} /> Identitas Advokat</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Nama Advokat Penerima Kuasa</label>
                <input 
                  type="text" 
                  value={advocateName} 
                  onChange={(e) => setAdvocateName(e.target.value)} 
                  className="input-text"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Nama Kantor Hukum (Law Firm)</label>
                <input 
                  type="text" 
                  value={lawFirm} 
                  onChange={(e) => setLawFirm(e.target.value)} 
                  className="input-text"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Alamat Kantor Hukum</label>
              <textarea 
                value={advocateAddress} 
                onChange={(e) => setAdvocateAddress(e.target.value)} 
                className="input-textarea"
                rows={2}
              />
            </div>

            <div className="form-group">
              <label>Gaya Kop Surat (Letterhead)</label>
              <select 
                value={letterheadStyle} 
                onChange={(e) => setLetterheadStyle(e.target.value)}
                className="input-select"
              >
                <option value="with-logo">Kombinasi Logo & Teks</option>
                <option value="image-banner">Gambar Banner Kop Surat</option>
                <option value="text-only">Hanya Teks Standar</option>
              </select>
            </div>

            {/* File Uploaders for custom headers & footers (SaaS features) */}
            {letterheadStyle === 'with-logo' && (
              <>
                <div className="form-group upload-group animate-fade-in" style={{ animationDuration: '0.3s' }}>
                  <label className="file-upload-label">
                    <Upload size={14} /> Upload Logo kop surat kantor pengacara anda (.png/.jpg)
                  </label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleLogoUpload} 
                    className="input-file"
                  />
                  {customLogo && (
                    <button onClick={() => setCustomLogo(null)} className="btn-remove-file">
                      Hapus Logo Kustom
                    </button>
                  )}
                </div>

                <div className="form-group upload-group animate-fade-in" style={{ animationDuration: '0.3s', marginTop: '12px' }}>
                  <label className="file-upload-label">
                    <Upload size={14} /> Upload Footer kop surat kantor pengacara anda (.png/.jpg)
                  </label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFooterUpload} 
                    className="input-file"
                  />
                  {customFooter && (
                    <button onClick={() => setCustomFooter(null)} className="btn-remove-file">
                      Hapus Footer Kustom
                    </button>
                  )}
                </div>
              </>
            )}

            {letterheadStyle === 'image-banner' && (
              <>
                <div className="form-group upload-group animate-fade-in" style={{ animationDuration: '0.3s' }}>
                  <label className="file-upload-label">
                    <Upload size={14} /> Upload Header kop surat kantor pengacara anda (.png/.jpg)
                  </label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleHeaderUpload} 
                    className="input-file"
                  />
                  {customHeader && (
                    <button onClick={() => setCustomHeader(null)} className="btn-remove-file">
                      Hapus Header Kustom
                    </button>
                  )}
                </div>

                <div className="form-group upload-group animate-fade-in" style={{ animationDuration: '0.3s', marginTop: '12px' }}>
                  <label className="file-upload-label">
                    <Upload size={14} /> Upload Footer kop surat kantor pengacara anda (.png/.jpg)
                  </label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFooterUpload} 
                    className="input-file"
                  />
                  {customFooter && (
                    <button onClick={() => setCustomFooter(null)} className="btn-remove-file">
                      Hapus Footer Kustom
                    </button>
                  )}
                </div>
              </>
            )}

            {/* Client/Opponent Details */}
            <h4 className="group-title"><User size={16} /> Para Pihak & Detail Perkara</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Nama Klien (Pemberi Kuasa)</label>
                <input 
                  type="text" 
                  value={clientName} 
                  onChange={(e) => setClientName(e.target.value)} 
                  className="input-text"
                />
              </div>
              <div className="form-group">
                <label>Nama Pihak Lawan</label>
                <input 
                  type="text" 
                  value={opponentName} 
                  onChange={(e) => setOpponentName(e.target.value)} 
                  className="input-text"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Alamat Klien</label>
                <input 
                  type="text" 
                  value={clientAddress} 
                  onChange={(e) => setClientAddress(e.target.value)} 
                  className="input-text"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Alamat Lawan</label>
                <input 
                  type="text" 
                  value={opponentAddress} 
                  onChange={(e) => setOpponentAddress(e.target.value)} 
                  className="input-text"
                />
              </div>
            </div>

            {templateType === 'somasi' || templateType === 'gugatan' ? (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nilai Kerugian / Nominal Sengketa (Rp)</label>
                    <div className="input-with-icon">
                      <DollarSign className="input-icon" size={16} />
                      <input 
                        type="text" 
                        value={caseValue} 
                        onChange={(e) => setCaseValue(e.target.value)} 
                        className="input-text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Tuntutan Utama / Tindakan yang Harus Dilakukan</label>
                  <input 
                    type="text" 
                    value={demandAction} 
                    onChange={(e) => setDemandAction(e.target.value)} 
                    className="input-text"
                    placeholder="misal: melunasi sisa kewajiban..."
                  />
                </div>
              </>
            ) : null}

            <div className="form-row">
              <div className="form-group">
                <label><Calendar size={14} /> Kota & Tanggal Pembuatan Dokumen</label>
                <input 
                  type="text" 
                  value={datePlace} 
                  onChange={(e) => setDatePlace(e.target.value)} 
                  className="input-text"
                />
              </div>
            </div>

            {/* Action Bar */}
            <div className="form-actions">
              <button onClick={handleReset} className="btn-reset" title="Kembalikan nilai awal">
                <RotateCcw size={16} /> Reset Form
              </button>
            </div>

          </div>

          {/* Right panel: Preview Paper */}
          <div className="preview-panel">
            <div className="preview-toolbar">
              <div className="preview-status">
                <div className="pulse-indicator"></div>
                <span>Live Preview Draf</span>
              </div>
              <div className="preview-actions">
                <button 
                  onClick={() => {
                    if (!isPremium) {
                      setShowLockModal(true);
                    } else {
                      window.print();
                    }
                  }} 
                  className="btn-print-direct"
                  title="Cetak surat langsung ke kertas fisik"
                >
                  Cetak Surat <Printer size={16} />
                </button>
                <button 
                  onClick={() => {
                    if (!isPremium) {
                      setShowLockModal(true);
                    } else {
                      handleExport();
                    }
                  }} 
                  className="btn-download"
                  disabled={isExporting}
                >
                  {isExporting ? 'Mengekspor...' : 'Unduh Dokumen'} <Download size={16} />
                </button>
              </div>
            </div>

            <div className="paper-container">
              {/* Paper Content Wrapper */}
              <div className="legal-paper" style={{ position: 'relative' }}>
                {!isPremium && (
                  <div className="watermark-overlay">
                    DRAF DEMO ADVOKAT MASTER
                  </div>
                )}
                
                {/* Law Firm Header Letterhead */}
                {letterheadStyle === 'image-banner' ? (
                  <div className="letterhead-image-banner">
                    <img src={customHeader || "/Header.png"} className="firm-header-img" alt="Kop Surat Banner" />
                  </div>
                ) : letterheadStyle === 'with-logo' ? (
                  <div className="letterhead">
                    <div className="letterhead-with-logo">
                      <img src={customLogo || "/logo.png"} className="firm-logo-img" alt="Logo Law Firm" />
                      <div className="firm-details">
                        <h2 className="firm-name">{lawFirm.toUpperCase()}</h2>
                        <p className="firm-address">{advocateAddress}</p>
                      </div>
                    </div>
                    <div className="double-line"></div>
                  </div>
                ) : (
                  <div className="letterhead">
                    <h2 className="firm-name">{lawFirm.toUpperCase()}</h2>
                    <p className="firm-address">{advocateAddress}</p>
                    <div className="double-line"></div>
                  </div>
                )}

                {/* Document Body rendering based on chosen template */}
                {templateType === 'surat-kuasa' && (
                  <div className="document-body">
                    <h3 className="doc-title">SURAT KUASA KHUSUS</h3>
                    <p className="doc-desc">Yang bertanda tangan di bawah ini:</p>
                    
                    <div className="identitas-blok">
                      <table>
                        <tbody>
                          <tr><td>Nama</td><td>:</td><td><strong>{clientName}</strong></td></tr>
                          <tr><td>Alamat</td><td>:</td><td>{clientAddress}</td></tr>
                          <tr><td>Pekerjaan</td><td>:</td><td>Swasta</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <p>Selanjutnya disebut sebagai ---------------------------------------------- <strong>PEMBERI KUASA</strong>;</p>
                    
                    <p className="indent">Dalam hal ini memilih domisili hukum di kantor kuasanya tersebut di bawah ini, dengan ini memberikan kuasa kepada:</p>
                    
                    <div className="identitas-blok">
                      <table>
                        <tbody>
                          <tr><td>Nama</td><td>:</td><td><strong>{advocateName}</strong></td></tr>
                          <tr><td>Profesi</td><td>:</td><td>Advokat / Konsultan Hukum pada <strong>{lawFirm}</strong></td></tr>
                          <tr><td>Alamat</td><td>:</td><td>{advocateAddress}</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <p>Selanjutnya disebut sebagai -------------------------------------------- <strong>PENERIMA KUASA</strong>;</p>
                    
                    <h4 className="sub-header">-------------------------------- KHUSUS --------------------------------</h4>
                    <p className="indent text-justify">
                      Untuk dan atas nama Pemberi Kuasa mewakili, mendampingi, dan membela hak-hak hukum Pemberi Kuasa guna mengajukan gugatan, menghadiri persidangan, melakukan pembelaan hukum, serta menghadapi sengketa hukum terhadap <strong>{opponentName}</strong> yang beralamat di {opponentAddress}.
                    </p>

                    <p className="indent text-justify">
                      Untuk itu, Penerima Kuasa dikuasakan untuk menghadap dan menghadiri sidang di Pengadilan Negeri, membuat dan menandatangani surat-surat gugatan, replik, kesimpulan, mengajukan bukti-bukti surat maupun saksi-saksi, serta melakukan segala tindakan hukum yang sah yang dianggap baik dan perlu oleh Penerima Kuasa demi kepentingan Pemberi Kuasa.
                    </p>

                    <div className="signature-section">
                      <p className="date-line">{datePlace}</p>
                      <div className="signature-grid">
                        <div className="signature-box">
                          <p>Penerima Kuasa,</p>
                          <div className="signature-space"></div>
                          <p><u>{advocateName}</u></p>
                        </div>
                        <div className="signature-box">
                          <p>Pemberi Kuasa,</p>
                          <div className="signature-space">
                            <span className="materai-badge">Materai 10.000</span>
                          </div>
                          <p><u>{clientName}</u></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {templateType === 'somasi' && (
                  <div className="document-body">
                    <div className="meta-info">
                      <table>
                        <tbody>
                          <tr><td>Nomor</td><td>:</td><td>102/SOMS/{lawFirm.substring(0,3).toUpperCase()}/VI/2026</td></tr>
                          <tr><td>Hal</td><td>:</td><td><strong>TEGURAN HUKUM (SOMASI) PERTAMA</strong></td></tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="date-right">{datePlace}</p>

                    <div className="recipient-block">
                      <p>Kepada Yth.</p>
                      <p><strong>Pimpinan / Direksi {opponentName}</strong></p>
                      <p>Di {opponentAddress}</p>
                    </div>

                    <p>Dengan hormat,</p>
                    <p className="text-justify indent">
                      Untuk dan atas nama klien kami, <strong>{clientName}</strong>, berdasarkan Surat Kuasa Khusus tertanggal {datePlace}, dengan ini menyampaikan Teguran Hukum (Somasi) kepada Saudara/Perusahaan Saudara atas permasalahan hukum sebagai berikut:
                    </p>

                    <ol className="doc-list">
                      <li className="text-justify">
                        Bahwa Klien kami dan Perusahaan Saudara terikat perjanjian kerja sama proyek pembangunan ruko, di mana Saudara berkewajiban melakukan pembayaran secara berkala sesuai kemajuan proyek.
                      </li>
                      <li className="text-justify">
                        Bahwa sampai dengan jatuh tempo yang telah ditentukan, Saudara ternyata terbukti belum melaksanakan kewajiban pembayaran sisa proyek sebesar <strong>Rp{caseValue},- (Bisa dikonfigurasi pada form)</strong>.
                      </li>
                      <li className="text-justify">
                        Bahwa tindakan Saudara tersebut merupakan bentuk perbuatan Cidera Janji (Wanprestasi) yang menimbulkan kerugian finansial yang nyata bagi Klien kami.
                      </li>
                    </ol>

                    <p className="text-justify indent">
                      Oleh karena itu, melalui Somasi ini, kami memberikan kesempatan terakhir kepada Saudara untuk segera <strong>{demandAction}</strong> dalam waktu paling lambat 7 (tujuh) hari kalender sejak diterimanya surat teguran ini.
                    </p>

                    <p className="text-justify indent">
                      Apabila dalam tenggat waktu tersebut Saudara mengabaikan teguran ini, maka kami akan mengambil langkah hukum tegas secara Pidana maupun Perdata.
                    </p>

                    <div className="signature-section-single">
                      <p>Hormat kami,</p>
                      <p>Kuasa Hukum <strong>{clientName}</strong>,</p>
                      <p><strong>{lawFirm}</strong></p>
                      <div className="signature-space"></div>
                      <p><u>{advocateName}</u></p>
                    </div>
                  </div>
                )}

                {templateType === 'gugatan' && (
                  <div className="document-body">
                    <p className="date-right">{datePlace}</p>
                    <div className="recipient-block">
                      <p>Kepada Yth.</p>
                      <p><strong>Ketua Pengadilan Negeri Jakarta Selatan</strong></p>
                      <p>Di Jakarta Selatan</p>
                    </div>

                    <p className="hal-block">Hal: <strong>GUGATAN WANPRESTASI (CIDERA JANJI)</strong></p>

                    <p>Dengan hormat,</p>
                    <p className="indent text-justify">
                      Yang bertanda tangan di bawah ini, <strong>{advocateName}</strong>, Advokat pada Kantor Hukum <strong>{lawFirm}</strong> bertindak untuk dan atas nama <strong>{clientName}</strong> berdasarkan Surat Kuasa Khusus, selanjutnya disebut sebagai ------------------------------------------------ <strong>PENGGUGAT</strong>;
                    </p>

                    <p className="indent">Dengan ini mengajukan gugatan terhadap:</p>
                    <p className="indent text-justify">
                      <strong>{opponentName}</strong>, berkedudukan hukum di {opponentAddress}, selanjutnya disebut sebagai --------------------------------------------------------------------- <strong>TERGUGAT</strong>;
                    </p>

                    <h4 className="sub-header-center">DUDUK PERKARA (FUNDAMENTUM PETENDI)</h4>
                    
                    <ol className="doc-list">
                      <li className="text-justify">
                        Bahwa antara Penggugat dan Tergugat terikat kerja sama investasi/konstruksi senilai <strong>Rp{caseValue},-</strong>.
                      </li>
                      <li className="text-justify">
                        Bahwa Tergugat tidak memenuhi prestasinya untuk <strong>{demandAction}</strong> yang telah disepakati bersama.
                      </li>
                    </ol>

                    <h4 className="sub-header-center">TUNTUTAN HUKUM (PETITUM)</h4>
                    <p>Berdasarkan hal-hal tersebut, Penggugat memohon agar Pengadilan memberikan putusan:</p>
                    <ol className="doc-list">
                      <li>Mengabulkan Gugatan Penggugat untuk seluruhnya.</li>
                      <li>Menyatakan Tergugat telah melakukan Perbuatan Wanprestasi.</li>
                      <li>Menghukum Tergugat untuk membayar ganti rugi sebesar Rp{caseValue},-.</li>
                    </ol>

                    <div className="signature-section-single">
                      <p>Hormat Kami,</p>
                      <p>Kuasa Hukum Penggugat,</p>
                      <div className="signature-space"></div>
                      <p><u>{advocateName}</u></p>
                    </div>
                  </div>
                )}

                {templateType === 'jawaban' && (
                  <div className="document-body">
                    <p className="date-right">{datePlace}</p>
                    <div className="recipient-block">
                      <p>Kepada Yth.</p>
                      <p><strong>Majelis Hakim Pemeriksa Perkara Reg No. 192/Pdt.G/2026/PN.Jkt.Sel</strong></p>
                      <p>Pengadilan Negeri Jakarta Selatan</p>
                    </div>

                    <p className="hal-block">Hal: <strong>JAWABAN TERGUGAT & EKSEPSI</strong></p>

                    <p>Dengan hormat,</p>
                    <p className="indent text-justify">
                      Untuk dan atas nama Tergugat, <strong>{opponentName}</strong>, berdasarkan Surat Kuasa Khusus dari kantor hukum <strong>{lawFirm}</strong>, dengan ini menyampaikan Jawaban Tergugat atas Gugatan yang diajukan oleh Penggugat, <strong>{clientName}</strong>:
                    </p>

                    <h4 className="sub-header-center">DALAM EKSEPSI (KEBERATAN)</h4>
                    <ol className="doc-list">
                      <li className="text-justify">
                        Bahwa Pengadilan Negeri Jakarta Selatan secara kompetensi relatif tidak berwenang memeriksa perkara ini, dikarenakan dalam pasal klausul sengketa disepakati penyelesaian melalui Arbitrase (BANI).
                      </li>
                    </ol>

                    <h4 className="sub-header-center">DALAM POKOK PERKARA (RECONVENTIE)</h4>
                    <ol className="doc-list">
                      <li className="text-justify">
                        Bahwa Tergugat menolak dengan tegas seluruh dalil-dalil Penggugat, kecuali yang diakui kebenarannya secara tegas oleh Tergugat.
                      </li>
                    </ol>

                    <div className="signature-section-single">
                      <p>Hormat Kami,</p>
                      <p>Kuasa Hukum Tergugat,</p>
                      <div className="signature-space"></div>
                      <p><u>{advocateName}</u></p>
                    </div>
                  </div>
                )}

                {/* Law Firm Footer Kop Surat */}
                {customFooter && (
                  <div className="paper-footer-image">
                    <img src={customFooter} className="firm-footer-img" alt="Kop Surat Footer" />
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

        {/* Floating/Popup Notification for mock PDF export */}
        {isExporting && (
          <div className="modal-overlay">
            <div className="modal-content glass-panel">
              <div className="spinner-loader"></div>
              <h3>Membuat Dokumen Hukum PDF...</h3>
              <p>Menerapkan format hukum acara standar nasional Indonesia.</p>
            </div>
          </div>
        )}

        {exportComplete && (
          <div className="modal-overlay" onClick={() => setExportComplete(false)}>
            <div className="modal-content success-modal glass-panel">
              <div className="success-icon-wrapper">
                <Check size={28} />
              </div>
              <h3>Dokumen Demo Berhasil Dibuat!</h3>
              <p>
                Ini adalah visualisasi dokumen draf siap pakai. Paket lengkap berisi <strong>ratusan file asli (.docx/.doc)</strong> yang bisa diedit di Microsoft Word.
              </p>
              <button onClick={onOpenPromo} className="btn-primary" style={{ marginTop: '12px' }}>
                Dapatkan Paket Lengkap (.docx)
              </button>
            </div>
          </div>
        )}

        {/* Lock Modal (Licensing Feature) */}
        {showLockModal && (
          <div className="modal-overlay">
            <div className="modal-content success-modal glass-panel" style={{ borderColor: 'var(--primary)', boxShadow: '0 0 30px var(--primary-glow)' }}>
              <div className="success-icon-wrapper" style={{ borderColor: 'var(--primary)', color: 'var(--primary)', background: 'rgba(163, 29, 36, 0.1)' }}>
                <Printer size={28} />
              </div>
              <h3>Fitur Cetak & Ekspor Terkunci</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                Anda sedang menggunakan versi Demo Gratis Advokat Master. Aktifkan lisensi premium untuk membuka hak cetak tanpa batas dan menghilangkan tanda air (*watermark*).
              </p>
              
              <form onSubmit={handleActivateLicense} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                <input 
                  type="text" 
                  placeholder="Masukkan Kunci Lisensi Anda" 
                  value={licenseKeyInput} 
                  onChange={(e) => setLicenseKeyInput(e.target.value)}
                  className="input-text"
                  style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}
                />
                {licenseError && <p style={{ color: '#ff4d4f', fontSize: '0.8rem', fontWeight: 'bold' }}>{licenseError}</p>}
                
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                  Aktifkan Lisensi Premium
                </button>
              </form>
              
              <div style={{ display: 'flex', gap: '10px', width: '100%', marginTop: '8px' }}>
                <button 
                  onClick={() => { setShowLockModal(false); onOpenPromo(); }} 
                  className="btn-secondary" 
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '10px 0' }}
                >
                  Beli Lisensi (Rp 499.000)
                </button>
                <button 
                  onClick={() => { setShowLockModal(false); setLicenseError(null); }} 
                  className="btn-reset" 
                  style={{ padding: '0 10px', color: 'var(--text-muted)', background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .customizer-section {
          padding: 80px 0;
          background: rgba(10, 11, 16, 0.5);
          position: relative;
        }

        .badge-promo {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--secondary);
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 12px;
          letter-spacing: 0.05em;
        }

        /* Editor Grid Layout */
        .editor-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 32px;
          margin-top: 40px;
          align-items: start;
        }

        .panel-title {
          font-size: 1.25rem;
          margin-bottom: 20px;
          color: var(--text-primary);
          border-left: 3px solid var(--primary);
          padding-left: 12px;
        }

        .group-title {
          font-size: 0.9rem;
          color: var(--secondary);
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 20px 0 12px 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Form Controls */
        .form-panel {
          padding: 30px 24px;
          border-radius: var(--border-radius-lg);
          max-height: 850px;
          overflow-y: auto;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-group label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .form-row .form-group {
          margin-bottom: 12px;
        }

        .input-text, .input-select, .input-textarea {
          background: rgba(10, 11, 16, 0.6);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          color: var(--text-primary);
          padding: 10px 14px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .input-text:focus, .input-select:focus, .input-textarea:focus {
          outline: none;
          border-color: var(--secondary);
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.15);
        }

        .input-textarea {
          resize: vertical;
        }

        .input-with-icon {
          position: relative;
        }

        .input-with-icon .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .input-with-icon .input-text {
          padding-left: 36px;
          width: 100%;
        }

        .divider {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 16px 0;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 24px;
        }

        .btn-reset {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition-smooth);
        }

        .btn-reset:hover {
          color: var(--primary-hover);
        }

        /* Right panel: Preview Paper Section */
        .preview-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .preview-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(17, 19, 28, 0.6);
          border: 1px solid var(--border-color);
          padding: 12px 24px;
          border-radius: var(--border-radius-md);
          backdrop-filter: blur(8px);
        }

        .preview-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .pulse-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4caf50;
          box-shadow: 0 0 8px #4caf50;
          animation: statusPulse 1.5s infinite alternate;
        }

        @keyframes statusPulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          100% { transform: scale(1.1); opacity: 1; }
        }

        .btn-download {
          background: var(--secondary);
          color: var(--bg-main);
          border: none;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition-smooth);
        }

        .btn-download:hover {
          background: var(--secondary-hover);
          transform: translateY(-1px);
        }

        .btn-download:disabled {
          background: var(--text-muted);
          cursor: not-allowed;
        }

        /* Legal Paper Visual Simulation */
        .paper-container {
          background: #1e2030;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 40px;
          box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);
          max-height: 750px;
          overflow-y: auto;
        }

        .legal-paper {
          background: #fafaf9; /* A bit creamy white like legal papers */
          color: #1c1917 !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          padding: 40px 40px 110px 40px; /* added 110px bottom padding to prevent overlay with footer */
          font-family: 'Times New Roman', Times, serif !important;
          font-size: 11pt;
          line-height: 1.6;
          border-radius: 4px;
          min-height: 850px;
        }

        /* Force legal paper colors and fonts to be print-authentic (black ink on white paper) */
        .legal-paper h1,
        .legal-paper h2,
        .legal-paper h3,
        .legal-paper h4,
        .legal-paper h5,
        .legal-paper h6,
        .legal-paper p,
        .legal-paper span,
        .legal-paper td,
        .legal-paper li,
        .legal-paper div,
        .legal-paper label {
          color: #1c1917 !important;
          font-family: 'Times New Roman', Times, serif !important;
        }

        /* Letterhead */
        .letterhead {
          text-align: center;
          margin-bottom: 12px;
        }

        .letterhead-with-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 12px;
          text-align: left;
        }

        .firm-logo-img {
          height: 70px;
          width: auto;
          object-fit: contain;
        }

        .firm-details {
          display: flex;
          flex-direction: column;
        }

        .letterhead-image-banner {
          width: 100%;
          margin-bottom: 8px;
          display: flex;
          justify-content: center;
        }

        .firm-header-img {
          width: 100%;
          height: auto;
          max-height: 110px;
          object-fit: contain;
        }

        .firm-name {
          font-family: 'Times New Roman', Times, serif;
          font-weight: 800;
          font-size: 1.6rem;
          letter-spacing: 0.05em;
          color: #111;
          margin-bottom: 2px;
        }

        .firm-address {
          font-size: 0.85rem;
          color: #444;
          font-style: italic;
        }

        .double-line {
          height: 3px;
          border-top: 2px solid #111;
          border-bottom: 1px solid #111;
          margin-top: 8px;
        }

        /* Legal Doc Formatting */
        .document-body {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .doc-title {
          text-align: center;
          font-weight: 800;
          font-size: 1.2rem;
          text-decoration: underline;
          margin-bottom: 16px;
        }

        .identitas-blok {
          padding-left: 24px;
          margin: 10px 0;
        }

        .identitas-blok table {
          border-collapse: collapse;
          width: 100%;
        }

        .identitas-blok td {
          vertical-align: top;
          padding: 3px;
        }

        .identitas-blok td:first-child {
          width: 120px;
        }

        .identitas-blok td:nth-child(2) {
          width: 15px;
        }

        .indent {
          text-indent: 40px;
        }

        .text-justify {
          text-align: justify;
        }

        .sub-header {
          text-align: center;
          font-weight: bold;
          margin: 12px 0;
        }

        .sub-header-center {
          text-align: center;
          font-weight: bold;
          text-decoration: underline;
          margin: 16px 0 8px 0;
        }

        .meta-info {
          font-size: 10pt;
          margin-bottom: 16px;
        }
        
        .meta-info td {
          padding: 2px;
        }

        .date-right {
          align-self: flex-end;
          margin-bottom: 12px;
        }

        .recipient-block {
          margin-bottom: 16px;
        }

        .hal-block {
          margin-bottom: 16px;
        }

        .doc-list {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .signature-section {
          margin-top: 48px;
        }

        .date-line {
          text-align: right;
          margin-bottom: 16px;
        }

        .signature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: center;
        }

        .signature-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .signature-space {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .materai-badge {
          border: 1.5px dashed #444;
          font-size: 8pt;
          padding: 4px 8px;
          color: #555;
          transform: rotate(-10deg);
          border-radius: 2px;
          user-select: none;
        }

        .signature-section-single {
          margin-top: 40px;
          align-self: flex-end;
          width: 250px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Modal/Popup Loader styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeInOverlay 0.3s;
        }

        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          max-width: 480px;
          width: 90%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          background: var(--bg-surface);
        }

        .success-modal {
          border-color: var(--secondary);
          box-shadow: 0 0 30px var(--secondary-glow);
        }

        .success-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(76, 175, 80, 0.1);
          border: 2px solid #4caf50;
          color: #4caf50;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinner-loader {
          width: 48px;
          height: 48px;
          border: 3.5px solid rgba(212, 175, 55, 0.1);
          border-top-color: var(--secondary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .editor-grid {
            grid-template-columns: 1fr;
          }
          .form-panel {
            max-height: none;
          }
        }

        .upload-group {
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--border-color);
          padding: 14px;
          border-radius: var(--border-radius-sm);
        }

        .file-upload-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--secondary) !important;
          font-weight: 600 !important;
          margin-bottom: 8px;
        }

        .input-file {
          width: 100%;
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        .btn-remove-file {
          background: transparent;
          border: none;
          color: var(--primary);
          font-size: 0.775rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
          align-self: flex-start;
        }

        .btn-remove-file:hover {
          color: var(--primary-hover);
        }

        .preview-actions {
          display: flex;
          gap: 12px;
        }

        .btn-print-direct {
          background: #2e7d32;
          color: #fff;
          border: none;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition-smooth);
        }

        .btn-print-direct:hover {
          background: #1b5e20;
          transform: translateY(-1px);
        }

        .paper-footer-image {
          position: absolute;
          bottom: 20px;
          left: 40px;
          right: 40px;
          display: flex;
          justify-content: center;
          border-top: 1px solid #e2e8f0;
          padding-top: 8px;
        }

        .firm-footer-img {
          width: 100%;
          height: auto;
          max-height: 60px;
          object-fit: contain;
        }

        .watermark-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-30deg);
          font-size: 2.5rem;
          font-weight: 800;
          color: rgba(163, 29, 36, 0.08) !important;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 5;
          border: 4px dashed rgba(163, 29, 36, 0.08);
          padding: 10px 20px;
          border-radius: 8px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .legal-paper {
            padding: 30px 20px;
            font-size: 10pt;
          }
          .paper-container {
            padding: 10px;
          }
        }

        /* Direct Print Layout Configuration */
        @media print {
          /* Hide all UI marketing blocks */
          nav, footer, .hero-section, .showcase-section, .bonus-section, .promo-section,
          .form-panel, .preview-toolbar, .badge-promo, .section-header {
            display: none !important;
          }

          /* Keep watermark on printed page for demo users */
          .watermark-overlay {
            color: rgba(0, 0, 0, 0.04) !important;
            border-color: rgba(0, 0, 0, 0.04) !important;
          }

          /* Expand preview paper to take full print page dimensions */
          #root, .main-layout, .customizer-section, .container, .editor-grid, .preview-panel {
            display: block !important;
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            background: none !important;
            border: none !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
          }

          .paper-container {
            padding: 0 !important;
            margin: 0 !important;
            background: none !important;
            box-shadow: none !important;
            max-height: none !important;
            overflow: visible !important;
          }

          .legal-paper {
            box-shadow: none !important;
            padding: 0 0 110px 0 !important;
            margin: 0 !important;
            background: #fff !important;
            color: #111 !important;
            min-height: auto !important;
            border: none !important;
            position: relative;
          }

          .paper-footer-image {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            border-top: 1px solid #111;
            padding-top: 6px;
          }

          body {
            background-color: #fff !important;
            color: #000 !important;
          }

          @page {
            size: A4;
            margin: 2cm;
          }
        }
      `}</style>
    </section>
  );
};
