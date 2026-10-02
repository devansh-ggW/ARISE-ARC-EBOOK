import { useState, type PointerEvent } from 'react';
import { ArrowDown, Eye, ShieldCheck } from 'lucide-react';
import { Button, Eyebrow } from '../components/Primitives';

export function BookSection() {
  const [pointer, setPointer] = useState({ x: .5, y: .5, active: false });
  const [peekOpen, setPeekOpen] = useState(false);
  const [entering, setEntering] = useState(false);

  const move = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width)),
      y: Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height)),
      active: true,
    });
  };

  const reset = () => setPointer({ x: .5, y: .5, active: false });
  const rotateY = pointer.active ? -10 + (pointer.x - .5) * 18 : -10;
  const rotateX = pointer.active ? 3 - (pointer.y - .5) * 13 : 2;

  const enterSystem = () => {
    setEntering(true);
    window.setTimeout(() => {
      document.getElementById('system-start')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setEntering(false);
    }, 420);
  };

  return <section className={`book-gate${entering ? ' is-entering' : ''}`} id="book" aria-labelledby="book-gate-title">
    <div className="book-gate__ambient" aria-hidden="true" />

    <div className="container book-gate__layout">
      <div className="book-gate__book-col">
        <div className="book-gate__label">
          <span>THE ARISE ARC</span>
          <span>THE SYSTEM GUIDE / 2026</span>
        </div>

        <button
          type="button"
          className="book-gate__cover"
          aria-label="Interact with THE ARISE ARC System Guide cover. Click to open the limited preview."
          style={{ transform: `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)` }}
          onPointerMove={move}
          onPointerLeave={reset}
          onFocus={() => setPointer({ x: .5, y: .5, active: true })}
          onBlur={reset}
          onClick={() => setPeekOpen((open) => !open)}
        >
          <span className="book-gate__cover-shadow" aria-hidden="true" />
          <img src="/arise-arc-cover.jpg" alt="THE ARISE ARC — The 60 Day Comeback System book cover" width="1024" height="1536" fetchPriority="high" />
          <span className="book-gate__shine" aria-hidden="true" style={{ background: `linear-gradient(${108 + (pointer.x - .5) * 24}deg, transparent 28%, rgba(255,255,255,.23) 45%, transparent 60%)` }} />
        </button>

        <button type="button" className={`book-gate__peek-trigger${peekOpen ? ' is-open' : ''}`} aria-expanded={peekOpen} onClick={() => setPeekOpen((open) => !open)}>
          <Eye size={13} /> {peekOpen ? 'CLOSE LIMITED PREVIEW' : 'INTERACT WITH THE COVER'} <span>+</span>
        </button>

        {peekOpen && <div className="book-gate__peek" role="status">
          <div>
            <span>LIMITED PREVIEW</span>
            <strong>Just enough to understand the system.</strong>
          </div>
          <p>The public website shows the product surface and a few system principles. The full book remains the product—not the webpage.</p>
          <div className="book-gate__peek-grid">
            <span>FLOOR RULE</span>
            <span>DAILY QUESTS</span>
            <span>COMEBACK PROTOCOL</span>
          </div>
        </div>}
      </div>

      <div className="book-gate__content">
        <Eyebrow number="00">THE 60 DAY COMEBACK SYSTEM</Eyebrow>
        <h1 id="book-gate-title">THE<br /><em>ARISE</em><br />ARC.</h1>
        <p className="book-gate__tagline">A structured system for rebuilding discipline, physical consistency, focus and momentum — one deliberate action at a time.</p>
        <div className="book-gate__rule">
          <span>STRENGTH</span><i /><span>DISCIPLINE</span><i /><span>FOCUS</span><i /><span>CONSISTENCY</span>
        </div>

        <div className="book-gate__actions">
          <Button type="button" onClick={enterSystem}>Enter the system</Button>
          <button type="button" className="book-gate__scroll" onClick={() => document.getElementById('system-start')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore the system <ArrowDown size={14} />
          </button>
        </div>

        <p className="book-gate__micro">THIS IS THE COVER / THE SYSTEM BEGINS AFTER THE ENTER ACTION</p>
        <div className="book-gate__assurance"><ShieldCheck size={14} /><span>CONTROLLED PREVIEW / THE COMPLETE BOOK IS NOT PUBLISHED ON THIS PAGE</span></div>
      </div>
    </div>

    <div className="container book-gate__bottom">
      <span>01 / COVER</span>
      <div />
      <span>SCROLL TO ENTER</span>
    </div>
  </section>;
}
