import { useState } from 'react';
import { ArrowRight, Play, ShieldCheck, Sparkles } from 'lucide-react';
import ArcScene from '../three/ArcScene';
import BookSection from '../sections/BookSection';
import ClosingSections from '../sections/ClosingSections';
import FAQSection from '../sections/ClosingSections';
import FooterLead from '../sections/ClosingSections';
import IdentitySections from '../sections/IdentitySections';
import { AttributeSection } from '../sections/IdentitySections';
import { JourneyPreview } from '../sections/JourneyPreview';
import PracticeSections from '../sections/PracticeSections';
import ProgressionSections from '../sections/ProgressionSections';

export default function HomePage() {
  const [heroMode, setHeroMode] = useState(false);
  return <>
    <section className="hero">
      <div className="hero__grid" />
      <div className="container hero__layout">
        <div className="hero__content">
          <span className="hero__kicker">THE 60 DAY COMEBACK SYSTEM / 2026</span>
          <h1>THE<br /><em>ARISE</em><br />ARC<span className="hero__period">.</span></h1>
          <p className="hero__lead">A structured 60-day system for rebuilding discipline, physical consistency, focus and momentum — one deliberate action at a time.</p>
          <div className="hero__proof"><span>STRENGTH</span><i /> <span>DISCIPLINE</span><i /> <span>FOCUS</span><i /> <span>CONSISTENCY</span></div>
          <div className="hero__actions">
            <a className="button button--dark" href="/system"><span>ENTER THE SYSTEM</span><ArrowRight size={16}/></a>
            <a className="button button--ghost" href="#journey"><span>EXPLORE THE 60 DAYS</span><Play size={13}/></a>
          </div>
          <p className="hero__microcopy">THIS IS A SYSTEM. <strong>NOT JUST A BOOK.</strong></p>
        </div>
        <div className="hero__scene-wrap"><ArcScene /></div>
      </div>
      <div className="hero__bottom container"><span>01 / 60</span><div className="hero__line" /><span>YOUR RETURN STARTS HERE</span></div>
    </section>
    <section className="statement-section" id="about"><div className="container statement-grid"><span className="section-index">01</span><div><p className="display-quote">You are not reading about change.<br /><em>You are entering the system.</em></p><p className="body-large">ARISE ARC is a premium digital self-improvement system built around a simple idea: your next useful action matters more than your most motivated version.</p></div></div></section>
    <IdentitySections /><AttributeSection /><JourneyPreview /><ProgressionSections /><PracticeSections /><BookSection /><ClosingSections /><FAQSection /><FooterLead />
    <div className={`hero-overlay-message${heroMode ? ' is-visible' : ''}`} aria-live="polite"><button aria-label="Close" onClick={() => setHeroMode(false)}>×</button><Sparkles size={17} /><span>THE SYSTEM IS READY. BEGIN WITH THE NEXT SMALL ACTION.</span></div>
    <button className="sr-trigger" type="button" onClick={() => setHeroMode(true)} aria-label="Show system message"><ShieldCheck size={14}/></button>
  </>;
}
