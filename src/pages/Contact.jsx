import { useState } from 'react'
import { AlertCircle, CheckCircle, Mail, MapPin, Send } from 'lucide-react'

const LinkedinIcon = ({ size = 22, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
)

const GithubIcon = ({ size = 22, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
)

function buildMailtoLink({ name, email, subject, message }) {
  const emailSubject = subject.trim() || `Website message from ${name.trim()}`
  const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  return `mailto:hello@bibinjose.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
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

  const socialLinks = [
    { icon: <Mail size={22} />, title: 'Email', value: 'hello@bibinjose.com', href: 'mailto:hello@bibinjose.com' },
    { icon: <LinkedinIcon size={22} />, title: 'LinkedIn', value: 'linkedin.com/in/ibibinjose', href: 'https://www.linkedin.com/in/ibibinjose/' },
    { icon: <GithubIcon size={22} />, title: 'GitHub', value: 'github.com/ibibinjose', href: 'https://github.com/ibibinjose' },
  ]

  return (
    <div className="contact-page page-layout">
      <section className="contact-header scroll-reveal">
        <span className="section-subtitle">GET IN TOUCH</span>
        <h1 className="page-title">Have an idea worth building?</h1>
        <p className="page-description">Whether you want to build a venture, launch a community project, or talk about cultural infrastructure—let&apos;s start the conversation.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-info scroll-reveal">
          <div className="card location-card">
            <div className="loc-header">
              <MapPin size={24} className="text-accent" />
              <h3>Base Coordinates</h3>
            </div>
            <p className="loc-desc">Active globally, operating primarily from:</p>
            <p className="loc-city">Sydney, NSW, Australia</p>
          </div>

          <div className="socials-vertical">
            {socialLinks.map((link) => (
              <a key={link.title} href={link.href} className="card social-contact-card" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <div className="social-contact-icon">{link.icon}</div>
                <div className="social-contact-details">
                  <span className="social-contact-title">{link.title}</span>
                  <span className="social-contact-val">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-container scroll-reveal">
          <div className="card form-card">
            <span className="form-kicker">DIRECT LINE</span>
            <h2 className="form-card-title">Start a conversation</h2>

            {formStatus === 'ready' ? (
              <div className="form-feedback success" role="status">
                <CheckCircle size={40} className="feedback-icon" />
                <h3>Your email draft is ready.</h3>
                <p>Your email app should now have an addressed draft with your message. Please review it and press send to deliver it.</p>
                <button type="button" onClick={() => setFormStatus('idle')} className="btn btn-secondary btn-sm">Write another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {formStatus === 'error' && (
                  <div className="form-feedback error" role="alert">
                    <AlertCircle size={18} className="feedback-icon" />
                    <span>Please complete your name, email address, and message.</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Your name <span className="required">*</span></label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Sarah Jenkins" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address <span className="required">*</span></label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. sarah@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject / project area</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="e.g. Venture incubation / collaboration" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your message <span className="required">*</span></label>
                  <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleInputChange} placeholder="Describe your idea, project scope, or opportunity..." required />
                </div>
                <button type="submit" className="btn btn-primary form-submit-btn">
                  <span>Open email draft</span>
                  <Send size={16} />
                </button>
                <p className="form-helper">This opens your configured email app with your message pre-filled.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
