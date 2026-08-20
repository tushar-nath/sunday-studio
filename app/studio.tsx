'use client';

import { useState } from 'react';

function Flower() {
  return (
    <svg viewBox="0 0 260 260" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2">
        {Array.from({ length: 12 }, (_, index) => (
          <ellipse
            key={index}
            cx="130"
            cy="88"
            rx="24"
            ry="59"
            transform={`rotate(${index * 30} 130 130)`}
          />
        ))}
        <circle cx="130" cy="130" r="14" fill="currentColor" />
      </g>
    </svg>
  );
}

const notes = [
  {
    category: '01 / Observations',
    title: 'Leave a little room.',
    detail: 'On making space for the unexpected.',
    drawing: 'arches',
  },
  {
    category: '02 / In progress',
    title: 'Small things, well made.',
    detail: 'A collection of details worth keeping.',
    drawing: 'grid',
  },
  {
    category: '03 / Field notes',
    title: 'Take the scenic route.',
    detail: 'Good ideas rarely arrive in a straight line.',
    drawing: 'orbit',
  },
];

export function Studio() {
  const [subscribed, setSubscribed] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  return (
    <main className="studio">
      <header className="studio-nav">
        <a className="wordmark" href="#home" aria-label="Sunday studio home">
          <span className="tiny-sun">✳</span> sunday
        </a>
        <nav aria-label="Main navigation">
          <a href="#notes">The notebook</a>
          <a href="#letter">
            {"Say hi"}<span>↗</span>
          </a>
        </nav>
      </header>
      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="blue-dot" /> An independent little studio
          </p>
          <h1 style={{ width: '358px', height: '115px' }}>
            {"A little room"}<br />
            {"for good ideas!"}</h1>
          <p className="description">
            A notebook for curious minds. Collecting thoughts,
            <br className="desktop-break" /> making things, and finding joy in
            the details.
          </p>
          <a className="primary-link" href="#notes">
            Explore the notebook <span>↗</span>
          </a>
        </div>
        <div className="flower">
          <Flower />
          <span>A work in bloom, always.</span>
        </div>
      </section>
      <section id="notes" className="notes">
        <div className="section-label">
          <span>A few things on my mind</span>
          <span>Selected notes / 2026</span>
        </div>
        <div className="note-grid">
          {notes.map((note) => (
            <button
              key={note.title}
              className="note"
              onClick={() =>
                setActive(active === note.title ? null : note.title)
              }
              aria-expanded={active === note.title}
            >
              <div className={`drawing ${note.drawing}`} aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <p className="eyebrow">{note.category}</p>
              <h2>
                {note.title}
                <span>↗</span>
              </h2>
              <p className="note-detail">
                {active === note.title
                  ? 'A small reminder to notice what is already here. Make something with it.'
                  : note.detail}
              </p>
            </button>
          ))}
        </div>
      </section>
      <footer id="letter">
        <span>Made slowly, with intention.</span>
        <button onClick={() => setSubscribed(!subscribed)}>
          {subscribed ? 'You’re on the list ✓' : 'Letters from the studio ↗'}
        </button>
        <span className="footer-star">✳</span>
      </footer>
    </main>
  );
}
