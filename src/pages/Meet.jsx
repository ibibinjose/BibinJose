import { useState } from 'react'
import portrait from '../assets/portrait.jpg'
import { ArrowRight, BookOpen, Briefcase, Clock, Handshake, Home, Mail, UserPlus } from 'lucide-react'

const LinkedInIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
)

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
)

const XIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
)

function buildMailtoLink({ name, email, message }) {
  const subject = `Digital card message from ${name.trim()}`
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  return `mailto:hello@bibinjose.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Meet() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (formStatus === 'error') setFormStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error')
      return
    }

    window.location.href = buildMailtoLink(formData)
    setFormStatus('ready')
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
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Bibin_Jose.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.setTimeout(() => URL.revokeObjectURL(url), 0)
  }

  const bioLinks = [
    { label: 'Home Page', desc: 'Personal hub and narrative', hash: '#/', icon: <Home size={18} /> },
    { label: 'Featured Ventures', desc: 'FounderWise, CCC, Foundation & products', hash: '#/ventures', icon: <Briefcase size={18} /> },
    { label: 'The Ideas Lab', desc: 'Essays, notes and concept archive', hash: '#/ideas', icon: <BookOpen size={18} /> },
    { label: 'What I’m Doing Now', desc: 'Current focus board and Australia coordinates', hash: '#/now', icon: <Clock size={18} /> },
    { label: 'Work With Me', desc: 'Incubation, consulting & salons details', hash: '#/work-with-me', icon: <Handshake size={18} /> },
  ]

  const socials = [
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/ibibinjose/', label: 'LinkedIn' },
    { icon: <XIcon />, href: 'https://x.com/bibinjose', label: 'X' },
    { icon: <GithubIcon />, href: 'https://github.com/ibibinjose', label: 'GitHub' },
    { icon: <Mail size={20} />, href: 'mailto:hello@bibinjose.com', label: 'Email' },
  ]

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://bibinjose.com/#/meet')}`

  return (
    <div className="meet-page">
      <div className="meet-container scroll-reveal">
        <div className="meet-profile">
          <div className="meet-avatar-container"><img src={portrait} alt="Bibin Jose" className="meet-avatar" /></div>
          <p className="meet-eyebrow">DIGITAL BUSINESS CARD</p>
          <h1 className="meet-name">Bibin Jose</h1>
          <p className="meet-role">Founder • Builder • Culture & Community Entrepreneur</p>
          <div className="meet-location-badge">Sydney, NSW, Australia</div>
          <p className="meet-bio">I build companies, communities and cultural platforms at the intersection of technology, culture and people.</p>
          <div className="meet-socials-grid meet-top-socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} className="meet-social-btn glass-panel" aria-label={social.label} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{social.icon}</a>
            ))}
          </div>
        </div>

        <button type="button" onClick={handleSaveContact} className="meet-save-btn glass-panel"><UserPlus size={20} className="text-accent" /><span>Save contact to phone</span></button>

        <div className="meet-links-section">
          <h2 className="meet-section-title">Navigation hub</h2>
          <div className="meet-links-list">
            {bioLinks.map((link) => (
              <a key={link.hash} href={link.hash} className="meet-link-item glass-panel">
                <div className="meet-link-icon-wrapper">{link.icon}</div>
                <div className="meet-link-text"><span className="meet-link-label">{link.label}</span><span className="meet-link-desc">{link.desc}</span></div>
                <ArrowRight size={16} className="meet-link-arrow" />
              </a>
            ))}
          </div>
        </div>

        <div className="meet-qr-card glass-panel">
          <div className="meet-qr-details"><h3>Scan & share</h3><p>Open this digital card instantly on another mobile device.</p></div>
          <div className="meet-qr-wrapper"><img src={qrUrl} alt="QR code linking to Bibin Jose’s digital card" className="meet-qr-code" /></div>
        </div>

        <div className="meet-contact-section glass-panel">
          <h2 className="meet-section-title">Leave a message</h2>
          <form onSubmit={handleSubmit} className="meet-contact-form">
            <div className="form-group"><label className="sr-only" htmlFor="meet-name">Your name</label><input type="text" id="meet-name" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required /></div>
            <div className="form-group"><label className="sr-only" htmlFor="meet-email">Your email</label><input type="email" id="meet-email" name="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} required /></div>
            <div className="form-group"><label className="sr-only" htmlFor="meet-message">Your message</label><textarea id="meet-message" name="message" placeholder="Your message…" value={formData.message} onChange={handleInputChange} rows="3" required /></div>
            {formStatus === 'ready' && <p className="form-success-msg" role="status">An email draft is ready—please send it from your email app.</p>}
            {formStatus === 'error' && <p className="form-error-msg" role="alert">Please complete every field.</p>}
            <button type="submit" className="btn btn-primary meet-submit-btn"><span>Open email draft</span><ArrowRight size={16} /></button>
          </form>
        </div>

        <div className="meet-socials-section">
          <div className="meet-socials-grid">
            {socials.map((social) => (
              <a key={`footer-${social.label}`} href={social.href} className="meet-social-btn glass-panel" aria-label={social.label} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{social.icon}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
