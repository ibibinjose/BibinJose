import { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react'

// Custom SVGs for brand icons not present in newer Lucide versions
const LinkedinIcon = ({ size = 22, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

const GithubIcon = ({ size = 22, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
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
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const socialLinks = [
    { icon: <Mail size={22} />, title: "Email", value: "hello@bibinjose.com", href: "mailto:hello@bibinjose.com" },
    { icon: <LinkedinIcon size={22} />, title: "LinkedIn", value: "linkedin.com/in/ibibinjose", href: "https://www.linkedin.com/in/ibibinjose/" },
    { icon: <GithubIcon size={22} />, title: "GitHub", value: "github.com/ibibinjose", href: "https://github.com/ibibinjose" }
  ]

  return (
    <div className="contact-page page-layout">
      {/* Page Header */}
      <section className="contact-header scroll-reveal">
        <span className="section-subtitle">GET IN TOUCH</span>
        <h1 className="page-title">Have an idea worth building?</h1>
        <p className="page-description">
          Whether you want to build a venture, launch a community project, or talk about cultural infrastructure—let's start the conversation.
        </p>
      </section>

      {/* Main Grid */}
      <section className="contact-grid">
        {/* Contact Info Sidebar */}
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
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="card social-contact-card"
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <div className="social-contact-icon">
                  {link.icon}
                </div>
                <div className="social-contact-details">
                  <span className="social-contact-title">{link.title}</span>
                  <span className="social-contact-val">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container scroll-reveal">
          <div className="card form-card">
            <h2 className="form-card-title">Send a Direct Message</h2>
            
            {formStatus === 'success' ? (
              <div className="form-feedback success scroll-reveal">
                <CheckCircle size={40} className="feedback-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Bibin. I will review your concept and get back to you within 48 hours.</p>
                <button onClick={() => setFormStatus('idle')} className="btn btn-secondary btn-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {formStatus === 'error' && (
                  <div className="form-feedback error scroll-reveal">
                    <AlertCircle size={18} className="feedback-icon" />
                    <span>Please fill in all required fields (Name, Email, Message).</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Your Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sarah@example.com"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject / Project Area</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Ventures Incubation / Onam.App Collaboration"
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your idea, project scope, or opportunity details..."
                    required
                    disabled={formStatus === 'sending'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary form-submit-btn"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
