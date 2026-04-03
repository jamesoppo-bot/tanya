import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero container">
        <div className="asymmetric-grid">
          <div>
            <span className="on-surface-variant" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
              Sonic Noir Agency
            </span>
            <h1 className="display-lg">AI-Powered<br />Sound Production</h1>
            <p style={{ maxWidth: '500px', marginBottom: '2.5rem', color: 'var(--on-surface-variant)' }}>
              Precision audio engineering for the next generation of solopreneurs. 
              Tanya uses advanced AI to craft your cinematic sonic identity.
            </p>
            <a href="#samples" className="btn-primary">Explore Soundscapes</a>
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src="/assets/tanya_hello.png" 
              alt="Tanya - AI Sound Producer" 
              className="glass-card"
              style={{ width: '100%', maxWidth: '400px', borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            />
            {/* Animated Waveform Overlay Placeholder */}
            <div className="waveform-animation" style={{ position: 'absolute', bottom: '-20px', left: '-20px', right: '-20px', height: '100px' }}>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="container">
        <h2 className="section-title">The Power of AI Sound</h2>
        <div className="asymmetric-grid">
          <div className="glass-card">
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>01. Analytical Mapping</h3>
            <p>Psychologically analyzing user intent to map precise auditory cues for every interaction.</p>
          </div>
          <div className="glass-card" style={{ marginTop: '2rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>02. Lyria 3 Generation</h3>
            <p>High-fidelity, 30-second custom tracks generated with perfect emotional control.</p>
          </div>
        </div>
      </section>

      {/* Audio Sample Player Mockup */}
      <section id="samples" className="container" style={{ background: 'var(--surface-low)', padding: '6rem 2rem', borderRadius: '2rem' }}>
        <h2 className="section-title">Precision Audio Branding</h2>
        <div className="player glass-card">
          <div className="play-btn">▶</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.2rem' }}>Sonic Branding Theme - 'Tanya'</h3>
            <div style={{ height: '4px', background: 'var(--primary-container)', marginTop: '1rem', borderRadius: '2px', position: 'relative' }}>
              <div style={{ width: '45%', position: 'absolute', top: 0, left: 0, bottom: 0, background: 'var(--primary)' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>
              <span>0:14</span>
              <span>0:30</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid var(--outline)', textAlign: 'center', opacity: 0.6 }}>
        <p>&copy; 2026 Tanya AI Sound Production. All rights reserved.</p>
      </footer>

      {/* CSS for simple animation in App.jsx scope */}
      <style>{`
        .wave {
          background: var(--primary);
          height: 100%;
          width: 5px;
          display: inline-block;
          margin-right: 3px;
          animation: wave 1s infinite ease-in-out;
          opacity: 0.5;
        }
        .wave:nth-child(2) { animation-delay: 0.2s; }
        .wave:nth-child(3) { animation-delay: 0.4s; }
        @keyframes wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.5); }
        }
      `}</style>
    </div>
  );
}

export default App;
