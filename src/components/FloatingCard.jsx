import React, { useState } from 'react';
import './FloatingCard.css';

export default function FloatingCard() {
  // 'open' | 'minimized' | 'closed'
  const [state, setState] = useState('open');

  const handleClose = () => setState('closed');
  const handleMinimize = () => setState('minimized');
  const handleRestore = () => setState('open');

  // Small restore tab when closed or minimized
  if (state !== 'open') {
    return (
      <button className="floating-restore-tab" onClick={handleRestore} title="Restore card">
        <span className="restore-icon">👋</span>
        <span className="restore-label">Open to chat!</span>
      </button>
    );
  }

  return (
    <div className={`floating-card ${state === 'minimized' ? 'is-minimized' : ''}`}>

      {/* ── Title bar with window controls ── */}
      <div className="floating-titlebar">
        <div className="window-controls">
          {/* ✕ Close — data-mood="sad" makes the eyes go sad on hover */}
          <button
            className="win-btn win-close"
            data-mood="sad"
            onClick={handleClose}
            title="Close"
            aria-label="Close card"
          >
            ✕
          </button>

          {/* ─ Minimize — data-mood="sad" as well */}
          <button
            className="win-btn win-minimize"
            data-mood="sad"
            onClick={handleMinimize}
            title="Minimize"
            aria-label="Minimize card"
          >
            ─
          </button>
        </div>

        <span className="titlebar-label">varun@portfolio ~ available for work</span>

        {/* Blinking green "online" dot */}
        <span className="online-dot" title="Available" />
      </div>

      {/* ── Card body ── */}
      <div className="floating-body">
        <p className="card-line">
          <span className="card-key">Status</span>
          <span className="card-val card-green">● Open to opportunities</span>
        </p>
        <p className="card-line">
          <span className="card-key">Role</span>
          <span className="card-val">Frontend / Full-Stack Dev</span>
        </p>
        <p className="card-line">
          <span className="card-key">Location</span>
          <span className="card-val">Agra, India 🇮🇳</span>
        </p>
        <a
          href="/contact"
          className="card-cta"
          data-mood="happy"
        >
          Let's Connect →
        </a>
      </div>
    </div>
  );
}
