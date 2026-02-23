import './index.css';

function App() {
  const marqueeItems = [
    "COMMUNICATION", "GRAPHISME", "PHOTOS / VIDÉOS", "WEB", "STRATÉGIE",
    "COMMUNICATION", "GRAPHISME", "PHOTOS / VIDÉOS", "WEB", "STRATÉGIE"
  ];

  return (
    <div className="layout">
      {/* NAVBAR */}
      <header className="navbar-wrapper">
        <nav className="pill-nav">
          <div className="nav-group">
            <a href="#" className="nav-link">NOS SERVICES</a>
            <a href="#" className="nav-link">NOS EXPERTISES</a>
            <a href="#" className="nav-link">NOS PROJETS</a>
          </div>

          <div className="nav-logo">
            {/* Mañana Logo simplified SVG */}
            <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 90 V 50 C 20 25, 40 20, 50 35 C 60 20, 80 25, 80 50 V 90" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="nav-group right">
            <a href="#" className="nav-link">ACTUALITÉS</a>
            <a href="#" className="nav-link accent">L'AGENCE</a>
            <a href="#" className="btn-pill btn-orange contact-btn">CONTACTEZ-NOUS !</a>
          </div>
        </nav>
      </header>

      {/* BENTO GRID MAIN CONTENT */}
      <main className="bento-container">
        {/* LEFT COLUMN: Large Photo with Marquee */}
        <div className="bento-left">
          <div className="card-tall">
            <div className="card-tall-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000')" }}></div>
            <div className="card-tall-marquee">
              <div className="marquee-content-small">
                #LAPOSEESTVOLONTAIREONJURE
                <span className="m-icon">
                  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 90 V 50 C 20 25, 40 20, 50 35 C 60 20, 80 25, 80 50 V 90" stroke="#030A24" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                #CRÉATIFMAISFLEMMELUNDI
                <span className="m-icon">
                  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 90 V 50 C 20 25, 40 20, 50 35 C 60 20, 80 25, 80 50 V 90" stroke="#030A24" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                #ONVEUTDUSOLEY
                <span className="m-icon">
                  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 90 V 50 C 20 25, 40 20, 50 35 C 60 20, 80 25, 80 50 V 90" stroke="#030A24" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                #LAPOSEESTVOLONTAIREONJURE
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Red Hero Card + Two Bottom Cards */}
        <div className="bento-right">

          {/* Top Row - Red Card */}
          <div className="card-red">
            <h1 className="hero-heading">UNE RENCONTRE.<br />UN PROJET.<br />UNE AGENCE.</h1>
            <p className="hero-subtext">
              Pas de plan parfait, pas de business model calé sur Excel.<br />
              <strong>Juste l'envie de faire les choses différemment, ensemble.</strong>
            </p>
            <a href="#" className="btn-pill btn-white">
              MAIS COMMENT ?
              <span className="arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10M17 7L7 17"></path>
                </svg>
              </span>
            </a>
          </div>

          {/* Bottom Row - Wide White Card & Square Yellow/Black Portrait */}
          <div className="bento-bottom-row">
            <div className="card-white">
              <h2 className="card-white-heading">DES PROFILS DIFFÉRENTS, DES GOÛTS MUSICAUX DISCUTABLES, MAIS UNE MÊME PASSION.</h2>
              <a href="#" className="btn-pill btn-black">
                ALLEZ, ON VOUS MONTRE NOS TÊTES.
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10M17 7L7 17"></path>
                  </svg>
                </span>
              </a>
            </div>

            <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=500')" }}>
              {/* Optional yellow gradient overlay to match screenshot */}
              <div className="image-overlay-gradient"></div>
            </div>

          </div>
        </div>
      </main>

      {/* BIG COLORED MARQUEE BANNER */}
      <section className="marquee-wrapper">
        <div className="marquee-content">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="pill">{item}</div>
          ))}
        </div>
      </section>

      {/* NEW FOOTER MATCHING SCREENSHOT */}
      <footer className="footer-container">
        <div className="footer-bg">
          <svg viewBox="0 0 1200 400" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            {/* The big abstract wave */}
            <path d="M-200 100 C 200 500, 500 -200, 800 200 C 1000 500, 1100 100, 1400 400" stroke="rgba(255,255,255,0.03)" strokeWidth="100" fill="none" />
            <path d="M100 400 C 300 100, 700 400, 900 100 C 1000 -100, 1300 300, 1500 0" stroke="rgba(255,255,255,0.02)" strokeWidth="150" fill="none" />
          </svg>
        </div>

        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-top-left">
              <h2 className="footer-catchphrase">VOUS ÊTES ARRIVÉS EN BAS,<br />MAIS NOTRE CRÉATIVITÉ NE<br />CONNAÎT PAS DE LIMITES.</h2>
            </div>
            <div className="footer-top-right">
              <div className="footer-logo">
                <svg width="350" height="90" viewBox="0 0 350 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Mañana simplified "M" curve */}
                  <path d="M20 75 V 40 C 20 15, 45 15, 55 35 C 65 15, 90 15, 90 45 V 75" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="105" y="75" fill="white" fontFamily="'Bebas Neue', sans-serif" fontSize="70" letterSpacing="1">AÑANA</text>
                  <text x="315" y="30" fill="white" fontFamily="'Bebas Neue', sans-serif" fontSize="16" letterSpacing="1" textAnchor="end">AGENCE DE</text>
                  <text x="315" y="47" fill="white" fontFamily="'Bebas Neue', sans-serif" fontSize="16" letterSpacing="1" textAnchor="end">COMMUNICATION</text>
                </svg>
              </div>
              <div className="footer-contact">
                <p>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  20 Impasse Camille Langlade, 31100 Toulouse
                </p>
                <p>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  contact@agence-mnn.com
                </p>
              </div>
            </div>
          </div>

          <div className="footer-middle">
            <div className="footer-nav">
              <h3 className="footer-title">RETROUVEZ VOUS SUR LE SITE</h3>
              <div className="footer-nav-columns">
                <div className="footer-nav-col">
                  <h4 className="footer-subtitle">SERVICES</h4>
                  <a href="#">Communication</a>
                  <a href="#">Graphisme</a>
                  <a href="#">Photos / Vidéos</a>
                  <a href="#">Web</a>
                  <a href="#">Stratégie</a>
                </div>
                <div className="footer-nav-col">
                  <h4 className="footer-subtitle">EXPERTISES</h4>
                  <a href="#">Événementiel</a>
                  <a href="#">Restauration</a>
                  <a href="#">Avocat</a>
                  <a href="#">Santé</a>
                  <a href="#">Tourisme / Loisirs</a>
                </div>
                <div className="footer-nav-col footer-nav-col-bold">
                  <a href="#">NOS PROJETS</a>
                  <a href="#">ACTUALITÉS</a>
                  <a href="#">L'AGENCE</a>
                  <a href="#">CONTACTEZ-NOUS</a>
                </div>
              </div>
            </div>

            <div className="footer-social">
              <h3 className="footer-title">SUIVEZ-NOUS SUR LES RÉSEAUX SOCIAUX !</h3>
              <div className="social-icons">
                <a href="#" className="social-btn" style={{ backgroundColor: '#40A0FF' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>
                <a href="#" className="social-btn" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="social-btn" style={{ backgroundColor: '#FFE861' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#030A24" stroke="#030A24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V0h2a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6v12a2 2 0 1 1-4-2z" /></svg>
                </a>
                <a href="#" className="social-btn" style={{ backgroundColor: '#FF5E50' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFF"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FF5E50" /></svg>
                </a>
                <a href="#" className="social-btn" style={{ backgroundColor: '#FFFBF5' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#030A24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-legal">
            <a href="#">MENTIONS LÉGALES</a>
            <a href="#">POLITIQUE DE CONFIDENTIALITÉ</a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          ON FAIT DU BEAU, DU BON, DU MAÑANA. CQFD.
        </div>
      </footer>

    </div>
  );
}

export default App;
