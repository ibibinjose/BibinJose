import { useState, useEffect } from 'react'
import { Search, Calendar, Clock, X, BookOpen, FileText, FlaskConical } from 'lucide-react'

export default function Ideas() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('All')
  const [selectedIdea, setSelectedIdea] = useState(null)

  const tabs = ['All', 'Articles', 'Notes', 'Experiments']

  const ideasList = [
    {
      id: 'cultural-venture-ecosystem',
      title: "Why We Need a Cultural Venture Ecosystem",
      subtitle: "Why isolated community projects fail and how shared infrastructure unlocks sustainability.",
      type: "Articles",
      date: "Aug 2026",
      readTime: "6 min read",
      icon: <BookOpen size={16} />,
      content: `In the startup world, we are taught to build highly scalable, generic software: CRM systems, payment gateways, and project management tools. But when it comes to cultural communities and diaspora networks, the approach is usually fragmented. Builders buy separate domains, design separate logos, and launch isolated websites that quickly become ghost towns.
      
      The solution is to stop building single brands and start building a venture ecosystem. 
      
      A cultural venture ecosystem coordinates four core layers:
      1. Build (FounderWise.co): Incubating founders, aligning co-founders, and scaling commercial ideas.
      2. Connect (Culture Capital Circle): Assembling the strategic network of investors, artists, and leaders.
      3. Impact (Culture Passion Foundation): Delivering community grants, preservation programs, and partnerships.
      4. Products (Consumer Hub): Launching consumer touchpoints like Onam.app (experiences), Kerala.wtf (media), and AyurPass.com (wellness).
      
      By utilizing a shared backbone—one CRM, one unified identity database, and one shared payment/booking engine—we prevent brand dilution and transform a pile of logos into a sustainable ecosystem.`
    },
    {
      id: 'founderwise-build-smarter',
      title: "FounderWise: Helping Founders Build Smarter",
      subtitle: "Creating educational modules, mentoring guides, and trust filters for early-stage builders.",
      type: "Articles",
      date: "Jul 2026",
      readTime: "5 min read",
      icon: <BookOpen size={16} />,
      content: `The founder journey is notoriously lonely, but for diaspora and migrant founders, the barrier is even higher. They lack the native relationship networks, local mentor hubs, and institutional connections that carry early startups.
      
      FounderWise.co was designed to address this startup layer. It isn't just another directory; it is a utility system.
      
      First, we coordinate co-founder matching through a trust filter. By checking community references and past project logs, we help builders find partners who share both technical competency and work ethic.
      
      Second, we structure startup programs around practical execution: API integrations, serverless databases, Stripe flows, and user acquisition. We don't focus on theoretical slide decks; we focus on shipping prototypes.
      
      By building the startup layer directly into the cultural ecosystem, we ensure that new businesses have immediate access to capital, talent, and early adopters.`
    },
    {
      id: 'culture-capital-redefined',
      title: "Culture Capital Circle: Redefining Social Capital",
      subtitle: "Inside private dinner salons bridging financial, cultural, and relationship indexes.",
      type: "Articles",
      date: "Jun 2026",
      readTime: "7 min read",
      icon: <BookOpen size={16} />,
      content: `Most business networking events are transactional. People swap business cards, pitching their services immediately. This flat format kills genuine connection.
      
      Culture Capital Circle takes the opposite approach. We curate a quiet room: one private dinner, drinks, and one important conversation. We bring together founders, investors, artists, and civic leaders.
      
      The concept of "capital" here is multi-dimensional:
      1. Financial Capital: Direct access to funding, angel pools, and investment avenues.
      2. Cultural Capital: Traditional wisdom, regional identity, and community stories that shape values.
      3. Social Capital: Deep trust networks, long-term relationships, and referral authority.
      
      By structuring these interactions around high-value salons, we create a high-trust room where founders can discuss challenges safely, and investors can find authentic projects that align with their community values.`
    },
    {
      id: 'ayurpass-wellness-heritage',
      title: "AyurPass: Digitalizing Wellness Heritage",
      subtitle: "Hypothesis: Linking verified practitioners directly to global seekers bypasses expensive wellness aggregators.",
      type: "Experiments",
      date: "May 2026",
      readTime: "4 min read",
      icon: <FlaskConical size={16} />,
      content: `Problem: Ayurveda is a globally demanded wellness heritage, but the digital space is flooded with unverified practitioners, generic retreats, and low-quality wellness packaging. Seeking authentic Ayurvedic treatments from Kerala requires sorting through fragmented reviews.
      
      Hypothesis: A trusted gateway, AyurPass.com, can verify local practitioners, list retreats with verified certificates, and streamline bookings directly, bypasses high-commission intermediaries.
      
      Mechanics:
      - Practitioner Verification: Profiles cross-referenced with regional health councils.
      - Retreat Bookings: Custom package listings with calendar integrations and Stripe payments.
      - Dynamic Wellness Assessment: A short interactive wizard guiding users to the correct treatment package based on their body type (doshas) and wellness goals.
      
      This digital bridge expands Kerala's wellness heritage into a globally accessible, high-trust marketplace.`
    },
    {
      id: 'onam-app-lessons',
      title: "What Building Onam.App Taught Me",
      subtitle: "Technical lessons in real-time syncing and seasonal traffic spikes.",
      type: "Notes",
      date: "Sep 2025",
      readTime: "5 min read",
      icon: <FileText size={16} />,
      content: `Seasonal applications present a unique engineering challenge. For 11 months of the year, Onam.App sits at near-zero traffic. But during the 10 days of the Onam festival, traffic surges by 10,000%.
      
      Here are the main technical lessons from shipping Onam.App:
      
      1. Serverless is Mandatory: 
      We cannot afford to run large VM nodes year-round, nor do we want to manually scale servers during festival peaks. A serverless backend (Cloud Functions, Firestore, and static CDN hosting) allowed the app to handle thousands of concurrent connections instantly, costing pennies during the off-season.
      
      2. Real-Time Syncing on a Budget:
      The multiplayer floral carpet (Pookalam) builder required real-time canvas sync. Implementing WebSockets on scale is expensive. We optimized this by using a client-side local canvas model, syncing only delta coordinates to Firestore every 300ms, and letting client render engines interpolate coordinates locally.
      
      3. Keep the Bundle Small:
      Many diaspora members access the app on mobile connections or mid-range devices while visiting family. We stripped out external heavy libraries, opting for vanilla canvas APIs and minimal JS scripts.`
    },
    {
      id: 'keralawtf-storytelling',
      title: "Kerala.wtf: The Power of Storytelling",
      subtitle: "How viral cultural content, memes, and community stories translate into organic user acquisition.",
      type: "Notes",
      date: "Jan 2026",
      readTime: "3 min read",
      icon: <FileText size={16} />,
      content: `A startup without attention is invisible. Paid advertising is increasingly expensive, and conversions are low. Our media layer, Kerala.wtf, acts as our primary organic acquisition funnel.
      
      By writing about regional travel, sharing food guides, discussing cultural history, and publishing memes, we capture the attention of the diaspora. 
      
      Lessons from running a cultural media node:
      1. Authenticity Drives Shareability: Generic tourism articles don't get shared. Highly specific regional humor, local dialects, and 'inside jokes' build immediate trust.
      2. Content-to-Product Loop: Once a user lands on Kerala.wtf to discover a food spot or festival history, we cross-promote relevant products (like Onam.app or AyurPass.com).
      3. Minimalist Layout: Media sites are usually ruined by heavy ads. Keeping the site clean, fast, and reader-first creates high newsletter conversion rates.`
    }
  ]

  // Handle keyboard events (Esc key to close modal)
  useEffect(() => {
    if (!selectedIdea) return undefined

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIdea(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIdea])

  // Filter ideas
  const filteredIdeas = ideasList.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          idea.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'All' || idea.type === activeTab
    return matchesSearch && matchesTab
  })

  const getIcon = (type) => {
    switch (type) {
      case 'Articles':
        return <BookOpen size={18} className="idea-card-icon articles" />
      case 'Notes':
        return <FileText size={18} className="idea-card-icon notes" />
      case 'Experiments':
        return <FlaskConical size={18} className="idea-card-icon experiments" />
      default:
        return <FileText size={18} />
    }
  }

  return (
    <div className="ideas-page page-layout">
      {/* Page Header */}
      <section className="ideas-header scroll-reveal">
        <span className="section-subtitle">INTELLECTUAL PROPERTY</span>
        <h1 className="page-title">The Ideas Lab</h1>
        <p className="page-description">
          A public collection of articles, notes, and experiments tracking my thinking on culture, technology, and community infrastructure. Click on any card to read the full concept note.
        </p>

        {/* Search & Tabs Controls */}
        <div className="search-filter-container">
          <div className="search-box glass-panel">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search concepts, essays, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="ideas-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas Grid */}
      <section className="ideas-grid">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map((idea) => (
            <button
              type="button"
              key={idea.id}
              className="card idea-card scroll-reveal"
              onClick={() => setSelectedIdea(idea)}
              aria-label={`Read ${idea.title}`}
            >
              <div className="idea-card-header">
                <span className={`idea-type-tag ${idea.type.toLowerCase()}`}>
                  {idea.icon} {idea.type}
                </span>
                <span className="idea-date">{idea.date}</span>
              </div>
              <h3 className="idea-title">{idea.title}</h3>
              <p className="idea-subtitle">{idea.subtitle}</p>
              <div className="idea-card-footer">
                <span className="read-time"><Clock size={12} /> {idea.readTime}</span>
                <span className="read-link">Read Concept &rarr;</span>
              </div>
            </button>
          ))
        ) : (
          <div className="no-results glass-panel scroll-reveal">
            <p>No ideas or experiments match your search query.</p>
            <button onClick={() => { setSearchQuery(''); setActiveTab('All'); }} className="btn btn-secondary btn-sm">
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Modal Dialog for Article Readout */}
      {selectedIdea && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedIdea(null)}
        >
          <div
            className="modal-content glass-panel scroll-reveal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="idea-modal-title"
          >
            <div className="modal-header">
              <span className={`idea-type-tag ${selectedIdea.type.toLowerCase()}`}>
                {getIcon(selectedIdea.type)} {selectedIdea.type}
              </span>
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedIdea(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            <h2 className="modal-title" id="idea-modal-title">{selectedIdea.title}</h2>
            <h3 className="modal-subtitle">{selectedIdea.subtitle}</h3>
            
            <div className="modal-meta">
              <span className="meta-item"><Calendar size={14} /> {selectedIdea.date}</span>
              <span className="meta-item"><Clock size={14} /> {selectedIdea.readTime}</span>
            </div>
            
            <hr className="modal-divider" />
            
            <div className="modal-body">
              {selectedIdea.content.split('\n\n').map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
            
            <div className="modal-footer">
              <button onClick={() => setSelectedIdea(null)} className="btn btn-secondary">
                Close Concept
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
