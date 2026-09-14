import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Heart,
  Menu,
  MoveRight,
  X,
} from 'lucide-react'
import mayaImage from './assets/maya-workshop.jpg'
import gardenImage from './assets/community-garden.jpg'
import './App.css'

const navItems = [
  ['Why Siren', '#why-siren'],
  ['What Is Siren', '#what-is-siren'],
  ['How It Works', '#how-it-works'],
  ['Example Story', '#example-story'],
  ['Our Vision', '#vision'],
  ['FAQ', '#faq'],
]

const faqs = [
  ['What is Siren?', 'Siren is a storytelling-first platform connecting donors directly to verified narratives and continuing human impact. Rather than impersonal transaction pools, each initiative is documented with care so you see the real journey your generosity supports.'],
  ['When is Siren launching?', 'We are currently accepting early patrons and partners for our upcoming private beta launching later this year in New York. Early access will roll out in curated tranches.'],
  ['Who is Siren for?', 'For thoughtful givers who want transparency and connection, and for inspiring individuals and grassroots initiatives with real stories to share.'],
  ['How will giving work?', 'Direct, verified contributions to specific needs with ongoing documentary updates and receipts sent directly to your patron journal.'],
  ['How will Siren show impact?', 'Through photographic field notes, milestone letters, verified ledger receipts, and personal dispatches from recipients as their projects and education advance.'],
  ['Can organizations work with Siren?', 'Yes. We are currently vetting non-profit partners and community collectives in the US for launch partnerships. Reach out directly via partnerships@siren.is.'],
]

function Wordmark({ light = false }) {
  return (
    <a className={`wordmark${light ? ' wordmark-light' : ''}`} href="#top" aria-label="Siren home">
      Siren<span className="wordmark-dot" aria-hidden="true" />
    </a>
  )
}

function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.trim()) {
      setJoined(true)
      setEmail('')
    }
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <a className="button button-soft button-small" href="#waitlist">Stay Updated</a>
            <button className="menu-toggle" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
        <div className={`mobile-nav${mobileOpen ? ' is-open' : ''}`}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMobile}>{label}</a>)}
        </div>
      </header>

      <main>
        <section className="hero section-pad">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow-pill">
                <span>A new way to give</span><i /> <span className="eyebrow-accent">Launching soon</span>
              </div>
              <h1>Every donation<br /><em>tells a meaningful story.</em></h1>
              <p className="hero-lede">Siren is building a more personal way to give — connecting people with meaningful stories and helping them see the impact behind their generosity.</p>
              <div className="button-row">
                <a className="button button-dark" href="#waitlist">Join the Waitlist <ArrowRight size={15} /></a>
                <a className="button button-muted" href="#why-siren">Discover Siren <ArrowDown size={15} /></a>
              </div>
              <div className="trust-row">
                <span><Check size={14} /> Direct philanthropic transparency</span>
                <span><Heart size={14} /> Archival field journalism</span>
              </div>
            </div>

            <div className="story-card-wrap">
              <article className="story-card">
                <div className="story-card-top"><span>Illustrative story · No. 01</span><span className="location"><i /> Brooklyn, NY</span></div>
                <div className="story-image-frame">
                  <img src={mayaImage} alt="Maya in her Brooklyn loft workshop" />
                  <span className="image-tag">Maya, 24 · Architecture apprentice</span>
                </div>
                <div className="story-card-body">
                  <h2>Maya, 24 · Brooklyn, NY</h2>
                  <p className="story-role">Architecture apprentice &amp; community maker</p>
                  <div className="metric-box"><strong><Heart size={14} /> $50 supported studio drafting tools &amp; material grant</strong><span>Disbursement logged · Direct photo &amp; handwritten updates</span></div>
                  <span className="story-footnote">Preview prototype · Siren New York</span>
                </div>
              </article>
              <div className="floating-note"><span className="floating-icon"><Heart size={15} /></span><span><strong>Giving made personal</strong><small>Real impact you can actually follow</small></span></div>
            </div>
          </div>
          <div className="scroll-cue"><span>Scroll to discover</span><span className="scroll-line" /></div>
        </section>

        <section className="section-pad section-white" id="why-siren">
          <div className="container narrow-left">
            <SectionLabel>Why Siren</SectionLabel>
            <h2 className="display-heading">Giving is easy.<br /><em>Knowing the impact is harder.</em></h2>
            <p className="section-intro">Most donation experiences end when the payment is complete. Siren is being built around a different idea — that generosity should feel human, transparent, and connected to the story it helps create.</p>
            <div className="journey-box">
              {['GIVE', 'IMPACT', 'STORY'].map((item, index) => <div className="journey-step" key={item}>
                {index > 0 && <ArrowRight className="journey-arrow" size={21} />}
                <span className="step-kicker">Stage 0{index + 1}</span><strong>{item}</strong>
                <p>{['A deliberate contribution directed to a specific individual or initiative.', 'Direct verification of materials, supplies, tuition, or tools deployed.', 'Field photo updates, handwritten dispatches, and ongoing milestones.'][index]}</p>
              </div>)}
            </div>
          </div>
        </section>

        <section className="section-pad section-tint" id="what-is-siren">
          <div className="container">
            <div className="section-heading-block"><SectionLabel>Foundations</SectionLabel><h2 className="display-heading">So, what exactly is Siren?</h2><p className="section-intro">Siren is a storytelling-first platform for giving. It brings donors closer to the people, causes, and moments their contributions support — turning a simple donation into a meaningful connection.</p></div>
            <div className="pillars">
              {[['01 / FOCUS', 'PEOPLE', 'Real individuals and community leaders with distinct journeys, ambitions, and dignified agency.'], ['02 / NARRATIVE', 'STORIES', 'Living, documentary-style dispatches that keep you connected beyond an initial receipt.'], ['03 / OUTCOME', 'IMPACT', 'Direct verification of where support lands, documented with complete clarity and care.']].map(([meta, title, text], index) => <div className={`pillar${index === 1 ? ' accent' : ''}`} key={title}><span>{meta}</span><strong>{title}</strong><p>{text}</p></div>)}
            </div>
            <div className="intent-row"><span><i /> Give with intention.</span><span><i /> Understand the impact.</span><span><i /> Follow the story.</span></div>
          </div>
        </section>

        <section className="section-pad section-soft" id="how-it-works">
          <div className="container"><div className="section-heading-block compact"><SectionLabel>The three-step journey</SectionLabel><h2 className="display-heading">How giving comes alive.</h2></div>
            <div className="steps-grid">{[['01', 'DISCOVER', 'Find a cause or story that resonates with you. Browse transparent, curated accounts of individuals and grassroots projects.', 'Curated narratives'], ['02', 'GIVE', 'Make a contribution that supports the journey. Fund specific tools, supplies, tuition, or direct equipment grants.', 'Intentional micro-grants'], ['03', 'FOLLOW THE STORY', 'See how your generosity becomes part of something bigger. Receive regular field updates, photos, and personal dispatches.', 'Ongoing field notes']].map(([num, title, text, foot]) => <article className="step-card" key={num}><div><span className="step-number">{num}</span><h3>{title}</h3><p>{text}</p></div><span className="step-foot">{foot}</span></article>)}</div>
          </div>
        </section>

        <section className="section-pad section-tint principles">
          <div className="container"><div className="section-heading-block compact"><SectionLabel>Our principles</SectionLabel><h2 className="display-heading">Because giving should feel personal.</h2></div>
            <div className="principles-grid">{[['01 · STORY-FIRST', 'Every contribution has a human story behind it.', 'We never reduce human aspiration into faceless aggregated pools. Every opportunity is documented with dignity, context, and voice.'], ['02 · TRANSPARENT', 'Understand where your generosity goes and what it helps create.', 'Track exactly what resources were purchased or supported. Complete itemized clarity with verified field ledger entries.'], ['03 · MEANINGFUL', 'Stay connected to the impact beyond the transaction.', "Giving isn't a quick transactional check-out; it's the start of an ongoing relationship with someone's progress and resilience."]].map(([meta, title, text]) => <article key={meta}><span>{meta}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="section-pad section-white" id="example-story"><div className="container"><div className="feature-header"><div><SectionLabel>Product prototype walkthrough</SectionLabel><h2 className="display-heading">How a story unfolds on Siren</h2></div><span className="illustrative-badge"><i /> Illustrative example</span></div><div className="feature-grid"><div className="feature-copy"><span className="micro-label">New York · Design &amp; craft</span><h3>Meet Maya.</h3><p className="quote">“A little support gave her the opportunity to keep learning.”</p><p>When Maya was accepted into an intensive sustainable architecture residency in Brooklyn, material and transit expenses threatened to derail her semester. Through Siren’s model, micro-patrons came together to fund her exact toolkits and fabrication materials.</p><div className="impact-sequence"><span>The impact sequence</span><div><b>$50 contribution</b><MoveRight size={14} /><b>Learning resources supported</b><MoveRight size={14} /><b className="sequence-accent">Field Journal Dispatch #03</b></div></div><a className="text-link" href="#waitlist">Imagine the story <ArrowRight size={14} /></a></div><div className="editorial-frame"><img src={mayaImage} alt="Maya sitting in her Brooklyn loft workshop beside drafting tools" /><div><p><strong>Documentary Plate No. 04</strong><span>Maya working on community pavilion blueprints · Brooklyn Navy Yard</span></p><small>Sample log</small></div></div></div></div></section>

        <section className="vision section-pad" id="vision"><div className="container"><div className="vision-panel"><img src={gardenImage} alt="Brooklyn community rooftop garden volunteers" /><div className="vision-overlay" /><div className="vision-content"><SectionLabel>Our vision</SectionLabel><h2>We're building a world where giving doesn't end at <em>‘Donate’.</em></h2><div className="vision-lines"><span>Where generosity has context.</span><span>Where impact has a face.</span><span className="accent-line">Where every contribution becomes part of a story worth remembering.</span></div><a className="button button-light" href="#waitlist">Be Part of the Journey <ArrowRight size={15} /></a></div></div></div></section>

        <section className="section-pad section-soft" id="waitlist"><div className="container waitlist-container"><div className="waitlist-box"><SectionLabel>Be part of our inaugural cohort</SectionLabel><h2 className="display-heading">Be there when the first story begins.</h2><p>Siren is coming soon. Join the journey and be among the first to experience a more meaningful way to give.</p><form className="waitlist-form" onSubmit={handleSubmit}><input aria-label="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" required type="email" /><button className="button button-dark" type="submit">{joined ? <>Joined <Check size={15} /></> : <>Keep Me Posted <ArrowRight size={15} /></>}</button></form>{joined && <div className="success-message">You're on the list. We'll be in touch before our public New York debut.</div>}<div className="social-line"><span>Follow Siren on</span><a href="#top">Substack</a><i>·</i><a href="#top">Instagram</a></div><small>No spam. No solicitations. Invitations released in small waves.</small></div></div></section>

        <section className="section-pad section-tint" id="faq"><div className="container faq-container"><div className="faq-heading"><SectionLabel>Transparency &amp; clarification</SectionLabel><h2 className="display-heading">Questions about what we're creating.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item${openFaq === index ? ' is-open' : ''}`} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown size={17} /></button>{openFaq === index && <div className="faq-answer">{answer}</div>}</div>)}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-grid"><div className="footer-brand"><Wordmark /><p className="footer-quote">Making generosity more meaningful.</p><p>A storytelling-first philanthropic collective bringing intentional patrons and authentic narratives together.</p><small>Conceived &amp; designed in New York.</small></div><div><span className="footer-label">Navigation</span><a href="#why-siren">Why Siren</a><a href="#how-it-works">How It Works</a><a href="#vision">Our Vision</a><a href="#faq">FAQ</a><a href="#waitlist">Contact</a></div><div><span className="footer-label">Presence</span><a href="#top">Instagram <ArrowUpRight size={13} /></a><a href="#top">LinkedIn <ArrowUpRight size={13} /></a><a href="#top">Substack <ArrowUpRight size={13} /></a><span className="beta-chip">Private beta phase</span></div></div><div className="footer-bottom"><span>© 2026 Siren. All rights reserved.</span><div><a href="#top">Privacy Policy</a><a href="#top">Terms of Vision</a><a href="#top">Ethical Guidelines</a></div></div></div></footer>
    </div>
  )
}

export default App
