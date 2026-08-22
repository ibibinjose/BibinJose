import { useState } from 'react'
import { ExternalLink, Filter, Lightbulb, Compass, Zap, Flame, Layers } from 'lucide-react'

export default function Ventures() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filterCategories = ['All', 'Build', 'Connect', 'Impact', 'Products']

  const venturesData = [
    {
      name: "FounderWise.co",
      tagline: "Build smarter. Grow wiser.",
      status: "building",
      category: "Build",
      icon: <Zap size={22} className="v-icon" />,
      description: "The startup and incubation layer. Helping entrepreneurs structure software products, connect with co-founders, access mentoring, and launch sustainable companies.",
      techStack: ["React", "FastAPI", "PostgreSQL", "Next.js"],
      highlights: ["Interactive co-founder match directory", "Structured startup program modules", "Founder pitch sessions & roundtables"],
      linkText: "Join Community",
      linkUrl: "https://founderwise.co"
    },
    {
      name: "Culture Capital Circle",
      tagline: "Where culture, capital, and ideas connect.",
      status: "live",
      category: "Connect",
      icon: <Layers size={22} className="v-icon" />,
      description: "A curated group uniting founders, investors, artists, and community leaders. Formatted around private dinner salons to coordinate social, cultural, and financial capital.",
      techStack: ["React", "Tailwind CSS", "CRM integrations"],
      highlights: ["Strategic dinner conversations", "Highly curated invite-only directory", "Cross-disciplinary advisory rooms"],
      linkText: "Request Invite",
      linkUrl: "#/contact"
    },
    {
      name: "Culture Passion Foundation",
      tagline: "Protect culture. Empower passion. Create connection.",
      status: "building",
      category: "Impact",
      icon: <Compass size={22} className="v-icon" />,
      description: "The mission-driven layer. Dedicated to cultural preservation, artist grants, youth engagement programs, and council or institutional partnerships.",
      techStack: ["React", "Sanity CMS", "A11y Compliant Layout"],
      highlights: ["Cultural archiver database", "Artist grant application portals", "Grassroots sponsorship programs"],
      linkText: "View Foundation Story",
      linkUrl: "#/about"
    },
    {
      name: "Onam.app",
      tagline: "Digital cultural experiences that make heritage interactive.",
      status: "live",
      category: "Products",
      icon: <Flame size={22} className="v-icon" />,
      description: "The play layer. Translating traditional celebrations into real-time canvas games, multiplayer floral carpet builders, and diaspora celebration logs.",
      techStack: ["React", "Firebase RTDB", "Canvas API", "WebSockets"],
      highlights: ["5k+ sessions during festival spike", "Real-time pookalam creator", "Global family celebration sync"],
      linkText: "Play Now",
      linkUrl: "https://onam.app"
    },
    {
      name: "Kerala.wtf",
      tagline: "Kerala, What The Fun! Tell stories and create attention.",
      status: "live",
      category: "Products",
      icon: <Flame size={22} className="v-icon" />,
      description: "The media and discovery layer. Creating attention, relevance, and laughter around Kerala's places, events, food, and viral memes for a global audience.",
      techStack: ["Astro", "Tailwind CSS", "Vercel Analytics"],
      highlights: ["10k+ monthly pageviews", "Viral cultural storytelling posts", "Weekly digest newsletters"],
      linkText: "Discover Fun",
      linkUrl: "https://kerala.wtf"
    },
    {
      name: "CulturePass",
      tagline: "The community platform for local discovery and participation.",
      status: "exploring",
      category: "Products",
      icon: <Lightbulb size={22} className="v-icon" />,
      description: "The belong layer. A platform helping organizations catalog events, manage memberships, and let residents discover local cultural activities.",
      techStack: ["React Native", "GraphQL", "Node.js"],
      highlights: ["Unified member profile directories", "Custom event ticketing engine", "Local merchant rewards programs"],
      linkText: "Read Concept",
      linkUrl: "#/ideas"
    },
    {
      name: "AyurPass.com",
      tagline: "Your trusted gateway to Ayurveda and authentic wellness retreats.",
      status: "exploring",
      category: "Products",
      icon: <Lightbulb size={22} className="v-icon" />,
      description: "The wellbeing layer. Showcasing verified practitioners, wellness retreats, and educational content to make traditional Ayurvedic heritage globally accessible.",
      techStack: ["Next.js", "Algolia Search", "Stripe API"],
      highlights: ["Verified practitioner profiles catalog", "Retreat packages booking flow", "Ayurvedic wellness assessment wizard"],
      linkText: "Join Waitlist",
      linkUrl: "#/contact"
    }
  ]

  const filteredVentures = activeFilter === 'All' 
    ? venturesData 
    : venturesData.filter(v => v.category === activeFilter)

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'live':
        return (
          <span className="badge live">
            <span className="pulse-dot"></span> Live
          </span>
        )
      case 'building':
        return <span className="badge building">Building</span>
      case 'exploring':
        return <span className="badge exploring">Exploring</span>
      case 'archived':
        return <span className="badge archived">Archived</span>
      default:
        return null
    }
  }

  return (
    <div className="ventures-page page-layout">
      {/* Page Header */}
      <section className="ventures-header scroll-reveal">
        <span className="section-subtitle">THE CORE PORTFOLIO</span>
        <h1 className="page-title">What I Build</h1>
        <p className="page-description">
          A single, connected narrative. Each venture is an experiment or a platform targeting a specific block of the cultural infrastructure: from community celebrations (Onam.App) to talent opportunities (JobPass.App), incubated via RamanArc Studios.
        </p>

        {/* Filter Toolbar */}
        <div className="filter-toolbar">
          <div className="filter-title">
            <Filter size={16} />
            <span>Filter Narrative:</span>
          </div>
          <div className="filter-buttons">
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Cards Grid */}
      <section className="ventures-grid">
        {filteredVentures.map((venture, idx) => (
          <div key={idx} className="card venture-card scroll-reveal">
            <div className="venture-card-header">
              <div className="venture-title-group">
                <div className="venture-icon-wrapper">
                  {venture.icon}
                </div>
                <div>
                  <h3 className="venture-name">{venture.name}</h3>
                  <span className="venture-cat-tag">{venture.category}</span>
                </div>
              </div>
              <div className="venture-status">
                {renderStatusBadge(venture.status)}
              </div>
            </div>

            <p className="venture-tagline">{venture.tagline}</p>
            <p className="venture-description">{venture.description}</p>

            <div className="venture-highlights-section">
              <h4 className="highlights-heading">Key Highlights</h4>
              <ul className="venture-highlights">
                {venture.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="venture-footer">
              <div className="tech-stack-group">
                {venture.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <a 
                href={venture.linkUrl} 
                className="btn btn-secondary btn-sm venture-link"
                target={venture.linkUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                {venture.linkText} <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Disclaimer Section */}
      <section className="ventures-note glass-panel scroll-reveal">
        <h3>Building Out in the Open</h3>
        <p>
          I believe in building ideas directly with the community rather than working in secret. If you are a developer, designer, or community organizer interested in any of these frameworks, I invite you to collaborate.
        </p>
        <a href="#/work-with-me" className="btn btn-primary">Let's Build Together</a>
      </section>
    </div>
  )
}
