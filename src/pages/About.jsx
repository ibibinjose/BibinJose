import { useState } from 'react'
import { ChevronDown, ChevronUp, MapPin, Landmark, Cpu, Users, Layers, Award } from 'lucide-react'

export default function About() {
  const [expandedNode, setExpandedNode] = useState(null)

  const timelineNodes = [
    {
      id: 'kerala',
      icon: <Landmark size={20} />,
      title: "Kerala",
      subtitle: "Roots in culture and community",
      desc: "Growing up in Kerala laid the foundation. It taught me the power of deep-seated cultural traditions, tight-knit local communities, and the shared celebrations that keep people connected.",
      details: "My perspective on community is rooted here. In Kerala, community isn't something you join online; it's the natural fabric of daily life. This understanding of organic connection is what I aim to replicate digitally."
    },
    {
      id: 'australia',
      icon: <MapPin size={20} />,
      title: "Australia",
      subtitle: "Navigating the diaspora experience",
      desc: "Moving to Australia changed my outlook. I experienced firsthand what it means to be part of a diaspora—the longing for home, the drive to build a new life, and the challenge of keeping heritage alive across borders.",
      details: "This transition highlighted a critical gap: diaspora communities are highly active but lack dedicated, modern digital infrastructure. They rely on fragmented platforms that weren't built for their specific cultural needs."
    },
    {
      id: 'ops-tech',
      icon: <Cpu size={20} />,
      title: "Operations & Technology",
      subtitle: "Learning how organisations scale",
      desc: "Spent years working across operations, technology, and project management. This was my training ground for understanding how systems, databases, and teams function together.",
      details: "I learned that a great idea is only 10% of the battle. The other 90% is execution, operational structure, scaling databases, and designing intuitive user flows. I became a builder by connecting technology to operations."
    },
    {
      id: 'community',
      icon: <Users size={20} />,
      title: "Community Growth",
      subtitle: "Recognising the need for connection",
      desc: "Began organizing events, working with community associations, and realizing that offline cultural communities were searching for ways to stay digitally linked year-round.",
      details: "WhatsApp groups and Facebook pages are noisy and flat. They don't capture the richness of cultural festivals or help community members support each other's ventures. I saw the need for dedicated cultural software."
    },
    {
      id: 'builder',
      icon: <Layers size={20} />,
      title: "Builder Era",
      subtitle: "Launching platforms, experiments, and ventures",
      desc: "Started building and launching products directly. From Onam.App (celebrating identity) to JobPass.App (creating opportunities), RamanArc Studios was born as the vehicle to build culture-driven digital products.",
      details: "Building ventures taught me to value failure as much as success. Every concept in the Ideas Lab represents a lesson in engagement, marketing, database optimization, or product-market fit."
    },
    {
      id: 'next-chapter',
      icon: <Award size={20} />,
      title: "The Next Chapter",
      subtitle: "Building cultural infrastructure for the future",
      desc: "Focusing entirely on creating sustainable, high-impact cultural infrastructure. Connecting diaspora communities globally and building products that make a difference.",
      details: "The goal is to create products that outlast us. I'm actively looking for like-minded builders, developers, and organizations to scale these initiatives into global community tools."
    }
  ]

  const toggleNode = (id) => {
    if (expandedNode === id) {
      setExpandedNode(null)
    } else {
      setExpandedNode(id)
    }
  }

  return (
    <div className="about-page page-layout">
      {/* Biography Section */}
      <section className="story-section scroll-reveal">
        <span className="section-subtitle">MY STORY</span>
        <h1 className="page-title">From Kerala to Australia.<br />From ideas to building.</h1>
        
        <div className="story-grid">
          <div className="story-main">
            <p className="lead-paragraph">
              I am not trying to be a "serial entrepreneur" who launches companies for the sake of it. I build because I see problems in community infrastructure that technology is uniquely positioned to solve.
            </p>
            <p className="story-body">
              Growing up in Kerala, culture was the background rhythm of life. When I moved to Australia, that rhythm had to be actively maintained. I watched how diaspora communities struggle to stay connected, how they organize events using fragmented tools, and how talent struggles to find opportunities in new ecosystems.
            </p>
            <p className="story-body">
              My background sits at the intersection of operations, community systems, and web technologies. By combining these, I design and build platforms that feel natural to use, respect cultural context, and provide real utility to communities.
            </p>
          </div>
          
          <div className="story-sidebar glass-panel">
            <h3 className="sidebar-title">Core Beliefs</h3>
            <ul className="beliefs-list">
              <li>
                <strong>Culture is Infrastructure</strong>
                <p>Cultural identity isn't just a hobby; it is an economic and social network that deserves state-of-the-art software.</p>
              </li>
              <li>
                <strong>Focus on Utility</strong>
                <p>A community app shouldn't just be a forum. It must help members solve actual needs—jobs, housing, event discovery, or joint ventures.</p>
              </li>
              <li>
                <strong>Honest Building</strong>
                <p>I value building, testing, and shipping. I believe in documenting lessons publicly and iterating quickly.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section scroll-reveal">
        <div className="section-header text-center">
          <span className="section-subtitle">THE JOURNEY</span>
          <h2 className="section-title">Personal Timeline</h2>
          <p className="section-desc">Click on any phase to expand detailed background stories and operational insights.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineNodes.map((node, index) => {
            const isExpanded = expandedNode === node.id
            return (
              <div 
                key={node.id} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${isExpanded ? 'expanded' : ''}`}
              >
                <div className="timeline-badge" onClick={() => toggleNode(node.id)}>
                  {node.icon}
                </div>
                
                <div className="timeline-card glass-panel" onClick={() => toggleNode(node.id)}>
                  <div className="timeline-card-header">
                    <div>
                      <h3 className="node-title">{node.title}</h3>
                      <h4 className="node-subtitle">{node.subtitle}</h4>
                    </div>
                    <button className="expand-indicator">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                  
                  <p className="node-desc">{node.desc}</p>
                  
                  {isExpanded && (
                    <div className="node-details scroll-reveal">
                      <hr className="node-divider" />
                      <p>{node.details}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
