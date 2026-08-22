import { Briefcase, Handshake, Users, Presentation, ShieldAlert, ArrowRight } from 'lucide-react'

export default function WorkWithMe() {
  const collaborationPaths = [
    {
      icon: <Briefcase className="collab-icon text-accent" size={28} />,
      title: "Venture Building",
      desc: "For startup founders and organizations looking to launch commercial products. Through FounderWise.co, I help prototype MVPs, construct database systems, and align co-founder teams.",
      deliverables: ["React/Vite MVP prototyping", "System & database architecture maps", "Co-founder alignment frameworks"]
    },
    {
      icon: <Handshake className="collab-icon text-accent" size={28} />,
      title: "Strategic Connections",
      desc: "For investors, cultural leaders, and business minds. I organize and host private dinners and salons under the Culture Capital Circle to drive strategic relationships and ideas.",
      deliverables: ["Curated dinner salon hosting", "Social & cultural capital indexes", "Cross-disciplinary connection maps"]
    },
    {
      icon: <Users className="collab-icon text-accent" size={28} />,
      title: "Cultural & Social Impact",
      desc: "For artists, community groups, and local councils. I consult on community grants, youth programs, and digital archives via the Culture Passion Foundation.",
      deliverables: ["Institutional & council relations", "Grant strategies & proposal reviews", "Digital heritage CMS structures"]
    },
    {
      icon: <Presentation className="collab-icon text-accent" size={28} />,
      title: "Product Collaborations",
      desc: "For developers, designers, and domain experts interested in co-building active products in our consumer ecosystem (Onam.app, AyurPass.com, Kerala.wtf).",
      deliverables: ["Content & media partnerships", "Practitioner network expansion", "Seasonal experience engineering"]
    }
  ]

  return (
    <div className="work-page page-layout">
      {/* Page Header */}
      <section className="work-header scroll-reveal">
        <span className="section-subtitle">ENGAGEMENT MODELS</span>
        <h1 className="page-title">Work With Me</h1>
        <p className="page-description">
          I am interested in collaborating on digital products, networks, and ideas that create genuine social or economic value for communities.
        </p>
      </section>

      {/* Collaboration Grid */}
      <section className="collab-grid">
        {collaborationPaths.map((path, idx) => (
          <div key={idx} className="card collab-card scroll-reveal">
            <div className="collab-card-header">
              {path.icon}
              <h3 className="collab-title">{path.title}</h3>
            </div>
            <p className="collab-desc">{path.desc}</p>
            <div className="collab-deliverables">
              <h4 className="deliverables-heading">How we collaborate:</h4>
              <ul className="deliverables-list-items">
                {path.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="deliverable-item">
                    <span className="deliverable-bullet">&bull;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Focus & Credibility Section */}
      <section className="credibility-section scroll-reveal">
        <div className="glass-panel credibility-container">
          <div className="credibility-header">
            <ShieldAlert className="text-warning" size={28} />
            <h2>Defining the boundaries</h2>
          </div>
          <p className="credibility-intro">
            To build trust, it's vital to define what I don't do. I don't claim to be an expert in everything. My skills are focused strictly on product building, technical operations, and community infrastructure.
          </p>
          <div className="credibility-grid">
            <div className="credibility-col">
              <h3>What I am focus-locked on:</h3>
              <ul className="focus-bullets yes">
                <li><strong>System Architecture:</strong> Designing clean, serverless databases and frontend user flows.</li>
                <li><strong>Incubation:</strong> Supporting early ventures from concept note to MVP launch.</li>
                <li><strong>Diaspora Systems:</strong> Building software specifically designed for cultural network scaling.</li>
              </ul>
            </div>
            <div className="credibility-col">
              <h3>What I do not offer:</h3>
              <ul className="focus-bullets no">
                <li><strong>Freelance Coding:</strong> I do not take on ad-hoc, quick contract programming jobs.</li>
                <li><strong>Social Media Marketing:</strong> I build products, I do not manage media posts or ad channels.</li>
                <li><strong>Generic Consulting:</strong> I align only with projects where we build tangible assets together.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-cta scroll-reveal text-center">
        <h2>Have a project in mind?</h2>
        <p>Let's map out how we can work together to turn your idea into functional digital infrastructure.</p>
        <a href="#/contact" className="btn btn-primary">
          Initiate Collaboration <ArrowRight size={16} />
        </a>
      </section>
    </div>
  )
}
