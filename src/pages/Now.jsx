import { Calendar, Compass, Users, Sparkles, MapPin, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Now() {
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      // Format Melbourne/Sydney Australia time
      const options = {
        timeZone: 'Australia/Sydney',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }
      const formatter = new Intl.DateTimeFormat([], options)
      setLocalTime(formatter.format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const currentFocus = [
    {
      title: "Currently Building",
      icon: <Sparkles size={18} className="now-icon building" />,
      items: [
        { name: "FounderWise.co", detail: "Coding co-founder matching directories and startup mentorship modules." },
        { name: "Culture Passion Foundation", detail: "Structuring legal frameworks and designing the cultural archiver database." },
        { name: "Onam.app", detail: "Refining multiplayer canvas sync performance for the next celebration cycle." }
      ]
    },
    {
      title: "Currently Exploring",
      icon: <Compass size={18} className="now-icon exploring" />,
      items: [
        { name: "Culture Capital Circle", detail: "Coordinating invite-only dinner salons with Melbourne and Sydney networks." },
        { name: "AyurPass.com", detail: "Researching practitioner licensing APIs and Ayurveda retreat booking schemas." },
        { name: "Kerala.wtf", detail: "Writing viral cultural history profiles and structuring weekly newsletter digests." }
      ]
    },
    {
      title: "Looking to Meet",
      icon: <Users size={18} className="now-icon meet" />,
      items: [
        { name: "Builders & Developers", detail: "Technologists interested in serverless performance, React layouts, or media sites." },
        { name: "Investors & Leaders", detail: "Angels, artists, and leaders interested in bridging cultural capital with real finance." },
        { name: "Ayurveda Experts", detail: "Certified practitioners and wellness retreat operators aiming for global reach." }
      ]
    }
  ]

  return (
    <div className="now-page page-layout">
      {/* Page Header */}
      <section className="now-header scroll-reveal">
        <span className="section-subtitle">CURRENT FOCUS</span>
        <h1 className="page-title">What I'm doing now</h1>
        <p className="page-description">
          A snapshot of my active priorities, learning nodes, and collaboration filters. Updated regularly from Australia.
        </p>

        {/* Location & Time Indicator */}
        <div className="now-metadata-box glass-panel">
          <div className="meta-subitem">
            <MapPin size={16} className="text-accent" />
            <span>Sydney, NSW, Australia</span>
          </div>
          <div className="meta-subitem-divider"></div>
          <div className="meta-subitem">
            <Clock size={16} className="text-accent" />
            <span>Local Time: <span className="time-value">{localTime || 'Calculating...'}</span></span>
          </div>
          <div className="meta-subitem-divider"></div>
          <div className="meta-subitem">
            <Calendar size={16} className="text-accent" />
            <span>Last Updated: August 2026</span>
          </div>
        </div>
      </section>

      {/* Focus Area Grid */}
      <section className="now-grid">
        {currentFocus.map((focus, idx) => (
          <div key={idx} className="card now-card scroll-reveal">
            <div className="now-card-header">
              {focus.icon}
              <h3 className="now-card-title">{focus.title}</h3>
            </div>
            <ul className="now-items-list">
              {focus.items.map((item, itemIdx) => (
                <li key={itemIdx} className="now-item">
                  <span className="now-item-name">{item.name}</span>
                  <p className="now-item-detail">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer Invite */}
      <section className="now-footer-invite glass-panel scroll-reveal">
        <h3>Match any of these filters?</h3>
        <p>If you're building in the community space, looking for a venture studio to launch a project, or just want to chat about diaspora technology, let's grab coffee or jump on a call.</p>
        <a href="#/contact" className="btn btn-primary">Reach Out</a>
      </section>
    </div>
  )
}
