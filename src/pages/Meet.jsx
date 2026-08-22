import { useState } from 'react'
import portrait from '../assets/portrait.jpg'
import { Mail, ArrowRight, UserPlus, Home, Briefcase, BookOpen, Clock, Handshake } from 'lucide-react'

// Custom SVGs for brand icons not present in newer Lucide versions
const LinkedInIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
)

const XIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
)

export default function Meet() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle') // idle, sending, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      return
    }

    setFormStatus('sending')
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Bibin Jose
TITLE:Founder & Builder
ORG:RamanArc / FounderWise / Culture Capital Circle
EMAIL;TYPE=PREF,INTERNET:hello@bibinjose.com
URL:https://bibinjose.com
URL;TYPE=LinkedIn:https://www.linkedin.com/in/ibibinjose/
URL;TYPE=GitHub:https://github.com/ibibinjose
URL;TYPE=X:https://x.com/bibinjose
ADR;TYPE=WORK,PREF:;;Sydney;NSW;;Australia
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Bibin_Jose.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const bioLinks = [
    { label: 'Home Page', desc: 'Personal hub and narrative', hash: '#/', icon: <Home size={18} /> },
    { label: 'Featured Ventures', desc: 'FounderWise, CCC, Foundation & products', hash: '#/ventures', icon: <Briefcase size={18} /> },
    { label: 'The Ideas Lab', desc: 'Essays, notes and concept archive', hash: '#/ideas', icon: <BookOpen size={18} /> },
    { label: 'What I\'m Doing Now', desc: 'Current focus board and Australia coordinates', hash: '#/now', icon: <Clock size={18} /> },
    { label: 'Work With Me', desc: 'Incubation, consulting & salons details', hash: '#/work-with-me', icon: <Handshake size={18} /> }
  ]

  const socials = [
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/ibibinjose/', label: 'LinkedIn' },
    { icon: <XIcon />, href: 'https://x.com/bibinjose', label: 'X' },
    { icon: <GithubIcon />, href: 'https://github.com/ibibinjose', label: 'GitHub' },
    { icon: <Mail size={20} />, href: 'mailto:hello@bibinjose.com', label: 'Email' }
  ]

  // Use a secure public API to generate a beautiful QR code pointing to this meet page
  const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent("https://bibinjose.com/#/meet")

  return (
    <div className="meet-page">
      <div className="meet-container scroll-reveal">
        {/* Profile Info (Floating directly on background) */}
        <div className="meet-profile">
          <div className="meet-avatar-container">
            <img src={portrait} alt="Bibin Jose" className="meet-avatar" />
          </div>
          <h1 className="meet-name">Bibin Jose</h1>
          <p className="meet-role">Founder • Builder • Culture & Community Entrepreneur</p>
          <div className="meet-location-badge">Sydney, NSW, Australia</div>
          <p className="meet-bio">
            I build companies, communities and cultural platforms at the intersection of technology, culture and people.
          </p>

          {/* Top Socials */}
          <div className="meet-socials-grid meet-top-socials">
            {socials.map((soc, idx) => (
              <a 
                key={idx} 
                href={soc.href} 
                className="meet-social-btn glass-panel" 
                aria-label={soc.label}
                target={soc.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Save Contact CTA (Frosted Glass Capsule Button) */}
        <button onClick={handleSaveContact} className="meet-save-btn glass-panel">
          <UserPlus size={20} className="text-accent" />
          <span>Save Contact to Phone</span>
        </button>

        {/* Navigation Quick Links Stack */}
        <div className="meet-links-section">
          <h2 className="meet-section-title">Navigation Hub</h2>
          <div className="meet-links-list">
            {bioLinks.map((link, idx) => (
              <a key={idx} href={link.hash} className="meet-link-item glass-panel">
                <div className="meet-link-icon-wrapper">
                  {link.icon}
                </div>
                <div className="meet-link-text">
                  <span className="meet-link-label">{link.label}</span>
                  <span className="meet-link-desc">{link.desc}</span>
                </div>
                <ArrowRight size={16} className="meet-link-arrow" />
              </a>
            ))}
          </div>
        </div>

        {/* QR Code Scan Card */}
        <div className="meet-qr-card glass-panel">
          <div className="meet-qr-details">
            <h3>Scan & Share</h3>
            <p>Open this digital card instantly on another mobile device.</p>
          </div>
          <div className="meet-qr-wrapper">
            <img src={qrUrl} alt="Bibin Jose QR Code" className="meet-qr-code" />
          </div>
        </div>

        {/* Minimalist Message Form Section */}
        <div className="meet-contact-section glass-panel">
          <h2 className="meet-section-title">Leave a Message</h2>
          <form onSubmit={handleSubmit} className="meet-contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleInputChange} 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message..." 
                value={formData.message} 
                onChange={handleInputChange} 
                className="form-input form-textarea" 
                rows="3" 
                required 
              />
            </div>
            
            {formStatus === 'success' && (
              <p className="form-success-msg" style={{ fontSize: '0.85rem', color: '#10b981', marginBottom: '12px', textAlign: 'center' }}>
                Message sent successfully!
              </p>
            )}
            {formStatus === 'error' && (
              <p className="form-error-msg" style={{ fontSize: '0.85rem', color: '#ef4444', marginBottom: '12px', textAlign: 'center' }}>
                Please fill out all fields.
              </p>
            )}

            <button 
              type="submit" 
              className="btn btn-primary meet-submit-btn" 
              disabled={formStatus === 'sending'}
              style={{ width: '100%', padding: '12px', borderRadius: '12px' }}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Footer Socials */}
        <div className="meet-socials-section">
          <div className="meet-socials-grid">
            {socials.map((soc, idx) => (
              <a 
                key={idx} 
                href={soc.href} 
                className="meet-social-btn glass-panel" 
                aria-label={soc.label}
                target={soc.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
