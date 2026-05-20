import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Services',  href: '#package' },
  { label: 'Process',   href: '#process' },
  { label: 'Reviews',   href: '#proof'   },
  { label: 'FAQ',       href: '#faq'     },
]

function TPSeal({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="46" stroke="#c9a84c" strokeWidth="2"/>
      <circle cx="50" cy="50" r="40" stroke="#c9a84c" strokeWidth="1"/>
      <polygon points="50,2 52.5,6.5 50,11 47.5,6.5" fill="#c9a84c"/>
      <polygon points="50,89 52.5,93.5 50,98 47.5,93.5" fill="#c9a84c"/>
      <text
        x="50" y="67"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="34"
        fontWeight="700"
        fill="#1a1a2e"
        letterSpacing="-2"
      >TP</text>
    </svg>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo lockup */}
        <a href="#" className="flex items-center gap-3 group">
          <TPSeal size={38} />
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-[0.28em] text-navy uppercase">
              Tinta Press
            </span>
            <span className="text-[9px] tracking-[0.18em] text-gold uppercase mt-0.5">
              From manuscript to marketplace
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-slate hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-navy text-cream text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy-mid transition-colors border border-navy"
        >
          Request a Review
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-cream border-t border-gold/20 px-6 py-4">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="block py-3 text-slate border-b border-cream-dk text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 bg-navy text-cream text-sm font-semibold px-5 py-3 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Request a Review
          </a>
        </div>
      )}
    </nav>
  )
}
