import './index.css'
import { useState, useEffect } from 'react'
import { SeoHead } from './SeoHead.jsx'
import Reveal from './Reveal.jsx'

function trackTicketClick(location) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'get_tickets_click', { event_location: location })
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 900)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 900)
    window.addEventListener('resize', handler, { passive: true })
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

function SummitNav() {
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useIsMobile()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (isMobile) return (
    <>
      <div style={{ height: 56 }} />
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 20px', height: 56,
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,244,226,0.06)' : 'none',
        transition: 'background 0.2s, border 0.2s',
      }}>
        <a href="https://www.worldwithin.org">
          <img src="/assets/logo-wordmark-white.svg" alt="World Within" style={{ height: 14, opacity: 0.85 }} />
        </a>
        <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackTicketClick('mobile_nav')} style={{
          fontFamily: 'var(--font-b)', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--bg)', background: 'var(--cream)',
          padding: '8px 14px', textDecoration: 'none',
        }}>Get Tickets</a>
      </div>
    </>
  )

  return (
    <>
      <div style={{ height: 62 }} />
      <div className={`nav-preview${scrolled ? ' nav-preview--scrolled' : ''}`}>
        <div className="nav__left" />
        <a href="https://www.worldwithin.org" className="nav__logo" aria-label="World Within">
          <img src="/assets/logo-wordmark-white.svg" alt="World Within" />
        </a>
        <div className="nav__right">
          <a href="https://worldwithin.app.neoncrm.com/forms/world-within-donations" target="_blank" rel="noopener noreferrer" className="nav__donate">Donate</a>
        </div>
      </div>
    </>
  )
}

const TICKET_URL = 'https://worldwithin.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F43457%2Fstorefront%2F209989'

const THEMES = [
  {
    label: 'Narrative as a Catalyst',
    body: 'How the World Within Studios team (working with the producers of The Last Dance) uses story to move capital toward businesses owned by the people in them. Culture changes before policy does.',
  },
  {
    label: 'Where the Money Goes',
    body: 'A mutual bank returning capital to farmers. 6.9 megawatts of community solar. 250,000 acres of farmer-owned land. The new economy is already here. We\'ll look at who built it and how.',
  },
  {
    label: 'Connecting the Work',
    body: 'The farmer in Hawaiʻi, the banker in Cincinnati, the small business owner in Montana. They\'re doing the same work without knowing it. What happens when they do?',
  },
  {
    label: 'The Room Itself',
    body: 'The people here are the network. Three days in Montana to deepen the relationships that make this work harder to ignore and harder to dismantle.',
  },
]

const SCHEDULE = [
  { date: 'June 16', sub: 'Afternoon / Evening', desc: 'Arrival and welcome dinner' },
  { date: 'June 17', sub: 'Full Day',            desc: 'Full day of programming' },
  { date: 'June 18', sub: 'Full Day',            desc: 'Full day of programming' },
  { date: 'June 19', sub: 'Morning',             desc: 'Closing breakfast and departure' },
]

export default function Summit() {
  const isMobile = useIsMobile()
  return (
    <div className="ww-page" style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative' }}>

      <SeoHead
        title="World Within Summit 2026: Building the Economy That Should Exist"
        description="Join the 2nd Annual World Within Summit in Helena, Montana, June 16–19, 2026. A gathering of funders exploring community ownership, storytelling, and movement building."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'World Within Summit 2026',
          startDate: '2026-06-16T17:00:00-06:00',
          endDate: '2026-06-19T11:00:00-06:00',
          location: {
            '@type': 'Place',
            name: 'Nava Gardens',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '2245 Head Lane',
              addressLocality: 'Helena',
              addressRegion: 'MT',
              postalCode: '59602',
              addressCountry: 'US',
            },
          },
          organizer: { '@type': 'Organization', name: 'World Within', url: 'https://www.worldwithin.org' },
          description: 'A gathering of funders exploring how to reclaim wealth and power back to communities.',
          offers: { '@type': 'Offer', price: '950', priceCurrency: 'USD', url: TICKET_URL },
        }}
      />

      <div className="wf-strip wf-strip--left" />
      <div className="wf-strip wf-strip--right" />

      <SummitNav />

      {/* 01 — HERO */}
      <Reveal>
      <div className="wf-grid-2 wf-section--md" style={{
        paddingBottom: 64,
        borderBottom: '1px solid rgba(255,244,226,0.06)',
        gap: 64, alignItems: 'start',
      }}>

        {/* Left */}
        <div>
          <div style={{
            fontFamily: 'var(--font-b)', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--green)', marginBottom: 20,
          }}>Annual Summit</div>

          <h1 style={{
            fontFamily: 'var(--font-d)', fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 700, letterSpacing: '-0.03em', textTransform: 'uppercase',
            color: 'var(--cream)', lineHeight: 0.95, marginBottom: 28,
          }}>World Within<br />Summit 2026</h1>

          <div style={{
            fontFamily: 'var(--font-d)', fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontStyle: 'italic', color: 'rgba(255,244,226,0.55)',
            lineHeight: 1.4, marginBottom: 40,
          }}>"Building the Economy That Should Exist"</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Dates',    value: 'June 16–19, 2026' },
              { label: 'Location', value: 'Nava Gardens, Helena, Montana' },
              { label: 'Ticket',   value: '$950' },
              { label: 'Seats',    value: 'Limited to 25 attendees' },
              { label: 'RSVP by',  value: 'May 26, 2026' },
            ].map(d => (
              <div key={d.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                borderTop: '1px solid rgba(255,244,226,0.06)', paddingTop: 12,
              }}>
                <span style={{
                  fontFamily: 'var(--font-m)', fontSize: 9, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(255,244,226,0.25)',
                }}>{d.label}</span>
                <span style={{
                  fontFamily: 'var(--font-b)', fontSize: 13,
                  color: 'rgba(255,244,226,0.6)',
                }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — ticket card */}
        <div style={{
          background: 'rgba(255,244,226,0.04)',
          border: '1px solid rgba(255,244,226,0.08)',
          padding: 40,
        }}>
          <div style={{
            fontFamily: 'var(--font-m)', fontSize: 'clamp(28px, 4vw, 48px)',
            letterSpacing: '0.04em', color: 'var(--cream)',
            lineHeight: 1, marginBottom: 4,
          }}>JUN 16–19</div>
          <div style={{
            fontFamily: 'var(--font-m)', fontSize: 15, letterSpacing: '0.06em',
            color: 'rgba(255,244,226,0.55)', marginBottom: 32,
          }}>2026</div>

          <div style={{ marginBottom: 8 }}>
            <div style={{
              fontFamily: 'var(--font-b)', fontSize: 15,
              color: 'rgba(255,244,226,0.75)', marginBottom: 4,
            }}>Nava Gardens</div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2245+Head+Lane,+Helena,+MT,+59602"
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-m)', fontSize: 10, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--green)', textDecoration: 'none',
              }}
            >View map →</a>
          </div>

          <div style={{
            fontFamily: 'var(--font-b)', fontSize: 14,
            color: 'rgba(255,244,226,0.65)', marginBottom: 32,
          }}>Helena, Montana</div>

          <div style={{ borderTop: '1px solid rgba(255,244,226,0.08)', marginBottom: 24 }} />

          <div style={{
            fontFamily: 'var(--font-b)', fontSize: 13, lineHeight: 1.6,
            color: 'rgba(255,244,226,0.65)', marginBottom: 28,
          }}>
            Arrival dinner on the 16th. Two full days of programming. Closing breakfast the 19th.
          </div>

          <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackTicketClick('hero_card')}>
            <button className="btn btn--primary" style={{ width: '100%' }}>
              Get Tickets · $950 →
            </button>
          </a>

          <div style={{
            fontFamily: 'var(--font-m)', fontSize: 10, letterSpacing: '0.06em',
            color: 'rgba(255,244,226,0.5)', textAlign: 'center',
            marginTop: 14,
          }}>Limited to 25 attendees · Register by May 26</div>
        </div>

      </div>
      </Reveal>

      {/* 02 — ABOUT THE SUMMIT */}
      <Reveal>
      <div className="wf-grid-2" style={{ borderBottom: '1px solid rgba(255,244,226,0.06)' }}>

        <div className="wf-section--md" style={{ borderRight: '1px solid rgba(255,244,226,0.06)' }}>
          <h2 style={{
            fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,244,226,0.3)', marginBottom: 32,
          }}>About the summit</h2>

          <p style={{
            fontFamily: 'var(--font-b)', fontSize: 16, lineHeight: 1.75,
            color: 'rgba(255,244,226,0.6)', marginBottom: 24,
          }}>
            Wealth leaves communities. Businesses get bought up. Workers lose ownership of what they build.
            It has been happening for decades. And it is accelerating.
          </p>

          <p style={{
            fontFamily: 'var(--font-b)', fontSize: 16, lineHeight: 1.75,
            color: 'rgba(255,244,226,0.6)', marginBottom: 24,
          }}>
            This June, we are gathering the people doing something about it. The 2nd Annual World Within
            Summit returns to Helena, Montana, built around one question:
          </p>

          <div style={{
            borderLeft: '3px solid var(--green)',
            paddingLeft: 24, marginBottom: 40,
          }}>
            <p style={{
              fontFamily: 'var(--font-d)', fontSize: 'clamp(18px, 2.5vw, 26px)',
              fontWeight: 400, letterSpacing: '-0.01em',
              color: 'var(--cream)', lineHeight: 1.4, margin: 0,
              fontStyle: 'italic',
            }}>
              "How do we build an economy owned by communities, not the few?"
            </p>
          </div>

          <p style={{
            fontFamily: 'var(--font-b)', fontSize: 16, lineHeight: 1.75,
            color: 'rgba(255,244,226,0.6)',
          }}>
            Over three days, we will look at the businesses, the capital, and the stories that prove
            a different economy is not only possible. It is already being built.
          </p>
        </div>

        <div className="wf-section--md" style={{ background: 'rgba(255,244,226,0.02)' }}>
          <div style={{
            fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,244,226,0.3)', marginBottom: 24,
          }}>Who attends</div>

          <p style={{
            fontFamily: 'var(--font-b)', fontSize: 14, lineHeight: 1.75,
            color: 'rgba(255,244,226,0.7)', marginBottom: 40,
          }}>
            This is not a conference. It is a working session for the people moving capital toward
            ownership, not away from it. Funders, founders, and the people building businesses
            owned by the people in them. 25 seats. Three days. Real work.
          </p>

          <a href="mailto:info@worldwithin.org" style={{
            fontFamily: 'var(--font-b)', fontSize: 13,
            color: 'var(--green)', textDecoration: 'none',
          }}>Questions? Contact us at info@worldwithin.org →</a>
        </div>

      </div>
      </Reveal>

      {/* 03 — LAST YEAR'S SUMMIT VIDEO */}
      <Reveal>
      <div style={{ borderBottom: '1px solid rgba(255,244,226,0.06)' }}>
        <div className="wf-section--md">
          <div style={{
            fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,244,226,0.3)', marginBottom: 24,
          }}>Summit 2025</div>

          <video
            src="/assets/summit-2025-sizzle.mp4"
            controls
            playsInline
            style={{
              width: '100%',
              display: 'block',
              background: '#000',
            }}
          />
        </div>
      </div>
      </Reveal>

      {/* 04 — FILM HIGHLIGHT */}
      <Reveal>
      <div style={{ borderBottom: '1px solid rgba(255,244,226,0.06)' }}>
        <div className="wf-section--md">
          <div style={{
            fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,244,226,0.3)', marginBottom: 32,
          }}>Summit highlight</div>

          <div className="wf-grid-2" style={{ gap: 'clamp(24px, 5vw, 64px)', alignItems: 'start' }}>

            <img
              src="/assets/afc-wimbledon.png"
              alt="AFC Wimbledon crest — Power to the People"
              style={{
                width: '100%', display: 'block',
                aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'center',
              }}
            />

            <div>
              <div style={{
                fontFamily: 'var(--font-b)', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--green)', marginBottom: 12,
              }}>Documentary screening</div>

              <h2 style={{
                fontFamily: 'var(--font-d)', fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 700, letterSpacing: '-0.03em', textTransform: 'uppercase',
                color: 'var(--cream)', lineHeight: 1, marginBottom: 24,
              }}>Power to the People</h2>

              <p style={{
                fontFamily: 'var(--font-b)', fontSize: 15, lineHeight: 1.75,
                color: 'rgba(255,244,226,0.6)', marginBottom: 20,
              }}>
                Rich financiers bought the original Wimbledon FC and moved it 60 miles away. So the fans
                built their own club from scratch and took it back to professional football. <em>Power to
                the People</em> is the story of how that happened.
              </p>

              <p style={{
                fontFamily: 'var(--font-b)', fontSize: 15, lineHeight: 1.75,
                color: 'rgba(255,244,226,0.6)', marginBottom: 20,
              }}>
                Our economy, like our sports teams, should not be a game owned, controlled, and played by
                billionaires, Saudi princes, or private equity. The Wimbledon story is not an anomaly.
                It is a blueprint.
              </p>

              <p style={{
                fontFamily: 'var(--font-b)', fontSize: 14, lineHeight: 1.75,
                color: 'rgba(255,244,226,0.6)',
              }}>
                Produced with the award-winning team behind <em>The Last Dance.</em>
              </p>
            </div>

          </div>
        </div>
      </div>
      </Reveal>

      {/* 05 — KEY THEMES */}
      <Reveal>
      <div style={{ borderBottom: '1px solid rgba(255,244,226,0.06)' }}>
        <div className="wf-section--md">
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            marginBottom: 48,
          }}>
            <h2 style={{
              fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(255,244,226,0.3)',
            }}>Story, Capital, and Place</h2>
          </div>

          <p style={{
            fontFamily: 'var(--font-b)', fontSize: 15, lineHeight: 1.75,
            color: 'rgba(255,244,226,0.7)', marginBottom: 48,
            maxWidth: 640,
          }}>
            Wealth does not reverse direction through argument. It reverses when capital moves the other
            way. When enough people see it working, a different economy starts to feel inevitable.
          </p>

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            borderTop: '1px solid rgba(255,244,226,0.06)', paddingTop: 28, marginBottom: 8,
          }}>
            <div style={{
              fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(255,244,226,0.3)',
            }}>This year's themes</div>
            <div style={{
              fontFamily: 'var(--font-m)', fontSize: 10, letterSpacing: '0.06em',
              color: 'rgba(255,244,226,0.2)',
            }}>4 themes · 3 days</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {THEMES.map((t, i) => (
              <div key={t.label} style={{
                display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 12 : 40,
                borderTop: '1px solid rgba(255,244,226,0.06)', paddingTop: 28, paddingBottom: 28,
                alignItems: 'start',
              }}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: 'var(--font-m)', fontSize: 10, letterSpacing: '0.06em',
                    color: 'rgba(255,244,226,0.2)',
                  }}>0{i + 1}</span>
                  <span style={{
                    fontFamily: 'var(--font-d)', fontSize: 'clamp(16px, 2vw, 22px)',
                    fontWeight: 700, letterSpacing: '-0.01em',
                    color: 'var(--cream)', lineHeight: 1.2,
                  }}>{t.label}</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-b)', fontSize: 14, lineHeight: 1.75,
                  color: 'rgba(255,244,226,0.7)', margin: 0,
                }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Reveal>

      {/* 06 — SCHEDULE */}
      <Reveal>
      <div style={{ borderBottom: '1px solid rgba(255,244,226,0.06)' }}>
        <div className="wf-section--md">
          <h2 style={{
            fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,244,226,0.3)', marginBottom: 40,
          }}>Schedule</h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {SCHEDULE.map(s => (
              <div key={s.date} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr',
                borderTop: '1px solid rgba(255,244,226,0.06)',
                paddingTop: 20, paddingBottom: 20, gap: 24, alignItems: 'center',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-m)', fontSize: 13, letterSpacing: '0.04em',
                    color: 'var(--cream)',
                  }}>{s.date}</div>
                  <div style={{
                    fontFamily: 'var(--font-m)', fontSize: 10, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'rgba(255,244,226,0.25)', marginTop: 4,
                  }}>{s.sub}</div>
                </div>
                <div style={{
                  fontFamily: 'var(--font-b)', fontSize: 14,
                  color: 'rgba(255,244,226,0.55)',
                }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Reveal>

      {/* 07 — OLD SALT */}
      <Reveal>
      <div style={{
        background: 'rgba(255,244,226,0.02)',
        borderBottom: '1px solid rgba(255,244,226,0.06)',
      }}>
        <div className="wf-section--md">
          <div style={{
            fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,244,226,0.3)', marginBottom: 24,
          }}>After the summit</div>

          <h2 style={{
            fontFamily: 'var(--font-d)', fontSize: 'clamp(24px, 3vw, 40px)',
            fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase',
            color: 'var(--cream)', lineHeight: 1, marginBottom: 20,
          }}>Old Salt Co-op Festival</h2>

          <p style={{
            fontFamily: 'var(--font-b)', fontSize: 15, lineHeight: 1.75,
            color: 'rgba(255,244,226,0.55)', marginBottom: 28, maxWidth: 600,
          }}>
            Old Salt Co-op is a business owned by the people who raise and sell the meat, not outside
            investors. After the summit, many of us will stay on for their annual festival. Worth
            seeing firsthand what we are talking about.
          </p>

          <div style={{ display: 'flex', gap: 40, marginBottom: 28, flexWrap: 'wrap' }}>
            {[
              { label: 'Dates',    value: 'June 19–21, 2026' },
              { label: 'Location', value: 'Mannix Ranch, Helmville, Montana' },
            ].map(d => (
              <div key={d.label}>
                <div style={{
                  fontFamily: 'var(--font-m)', fontSize: 9, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(255,244,226,0.25)', marginBottom: 6,
                }}>{d.label}</div>
                <div style={{
                  fontFamily: 'var(--font-b)', fontSize: 14,
                  color: 'rgba(255,244,226,0.6)',
                }}>{d.value}</div>
              </div>
            ))}
          </div>

          <a
            href="https://www.oldsaltco-op.com/pages/festival"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-b)', fontSize: 13,
              color: 'var(--green)', textDecoration: 'none',
            }}
          >Learn about the Old Salt Festival →</a>
        </div>
      </div>
      </Reveal>

      {/* 08 — CTA BANNER */}
      <Reveal>
      <div style={{ borderBottom: '1px solid rgba(255,244,226,0.06)' }}>
        <div className="wf-section--md" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: 40, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-d)', fontSize: 'clamp(24px, 3.5vw, 48px)',
              fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase',
              color: 'var(--cream)', lineHeight: 1, marginBottom: 12,
            }}>25 people. Three days.<br />One question.</div>
            <div style={{
              fontFamily: 'var(--font-b)', fontSize: 14,
              color: 'rgba(255,244,226,0.65)',
            }}>Limited seating · Register by May 26, 2026</div>
          </div>
          <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackTicketClick('cta_banner')}>
            <button className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>
              Get Tickets · $950 →
            </button>
          </a>
        </div>
      </div>
      </Reveal>

      <footer style={{ borderTop: '1px solid rgba(255,244,226,0.06)', padding: isMobile ? '32px 20px' : '40px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <a href="https://www.worldwithin.org" target="_blank" rel="noopener noreferrer">
          <img src="/assets/logo-wordmark-white.svg" alt="World Within" style={{ height: 20, opacity: 0.6 }} />
        </a>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/worldwithinimpact/', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
            { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/worldwithinimpact', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
            { label: 'YouTube',   href: 'https://www.youtube.com/@worldwithinstudios', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000"/></svg> },
            { label: 'Spotify',   href: 'https://open.spotify.com/show/1HMv0Jl0sl6rbzlyPPNjbi', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8 14.5c2.5-1 5.5-1 8 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M7 11.5c3-1.2 6.5-1.2 10 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M6.5 8.5c3.5-1.3 7.5-1.3 11 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg> },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{ color: 'rgba(255,244,226,0.35)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,244,226,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,244,226,0.35)'}
            >{icon}</a>
          ))}
        </div>
      </footer>

    </div>
  )
}
