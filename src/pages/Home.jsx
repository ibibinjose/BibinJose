import portrait from '../assets/portrait.jpg'
import { ArrowRight, Sparkles, Target, Compass } from 'lucide-react'

export default function Home() {
  const positioningQuestions = [
    {
      icon: <Compass className="q-icon" size={24} />,
      q: "Who is Bibin Jose?",
      a: "A builder, founder, and cultural entrepreneur bridging the gap between diaspora communities and digital ecosystems, drawing on a cross-cultural journey from Kerala to Australia."
    },
    {
      icon: <Sparkles className="q-icon" size={24} />,
      q: "What is he building?",
      a: "A unified cultural venture ecosystem consisting of structural core layers (FounderWise.co, Culture Capital Circle, Culture Passion Foundation) and consumer products like Onam.app, Kerala.wtf, and AyurPass.com."
    },
    {
      icon: <Target className="q-icon" size={24} />,
      q: "Why partner or invest?",
      a: "Because I build shared infrastructure that coordinates trust, stories, and capital. I turn deep community insights and modern technologies into a real cultural venture ecosystem."
    }
  ]

  const pillars = [
    { title: "Build (FounderWise.co)", desc: "Empowering startups and creators to build smarter and grow wiser through mentoring, co-founder matches, and venture incubation." },
    { title: "Connect (Culture Capital)", desc: "Curating private dinner salons and strategic circles where culture, capital, and high-impact ideas connect." },
    { title: "Impact (Culture Passion)", desc: "Pioneering cultural preservation, youth programs, community grants, and institutional partnerships under a unified foundation." },
    { title: "Products (Consumer Hub)", desc: "Developing consumer touchpoints like CulturePass (belong), Kerala.wtf (discover), Onam.app (play), and AyurPass.com (wellbeing)." }
  ]

  return (
    <div className="home-page page-layout">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content scroll-reveal">
          <div className="founder-tag">
            <Sparkles size={14} className="tag-sparkle" />
            <span>FOUNDER • BUILDER • CULTURE & COMMUNITY ENTREPRENEUR</span>
          </div>
          <h1 className="hero-title">
            I build <span className="gradient-text">companies, communities,</span> and cultural platforms.
          </h1>
          <p className="hero-description">
            Operating at the intersection of technology, culture, and people to build the infrastructure, stories, relationships, and capital that help communities thrive.
          </p>
          <div className="hero-ctas">
            <a href="#/ventures" className="btn btn-primary">
              Explore My Work <ArrowRight size={16} />
            </a>
            <a href="#/work-with-me" className="btn btn-secondary">
              Work With Me
            </a>
            <a href="#/meet" className="btn btn-tertiary">
              Digital Business Card
            </a>
          </div>
        </div>

        <div className="hero-visual scroll-reveal">
          <div className="portrait-container">
            <div className="portrait-glow"></div>
            <img src={portrait} alt="Bibin Jose - Founder & Builder" className="founder-portrait" />
          </div>
        </div>
      </section>

      {/* 10-Second Elevator Pitch (The Core Questions) */}
      <section className="pitch-section scroll-reveal">
        <div className="section-header text-center">
          <span className="section-subtitle">THE POSITIONING</span>
          <h2 className="section-title">Bibin Jose in 10 Seconds</h2>
          <p className="section-desc">Answering the three most important questions about what drives my work.</p>
        </div>

        <div className="pitch-grid">
          {positioningQuestions.map((item, idx) => (
            <div key={idx} className="card pitch-card">
              <div className="pitch-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="pitch-q">{item.q}</h3>
              <p className="pitch-a">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Build (Pillars Overview) */}
      <section className="pillars-section scroll-reveal">
        <div className="section-header text-center">
          <span className="section-subtitle">THE VISION</span>
          <h2 className="section-title">What I Build</h2>
          <p className="section-desc">All of my projects are aligned under a single, cohesive narrative.</p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="card pillar-card">
              <div className="pillar-num">0{idx + 1}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pillars-cta">
          <a href="#/ventures" className="link-arrow">
            View my ventures and experiments <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-section scroll-reveal">
        <div className="glass-panel quote-container">
          <p className="quote-text">
            "I am not trying to be a 'serial entrepreneur.' I am trying to solve problems and build things that matter to communities."
          </p>
          <span className="quote-author">— Bibin Jose</span>
        </div>
      </section>
    </div>
  )
}
