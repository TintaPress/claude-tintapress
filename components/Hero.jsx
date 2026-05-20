import { ArrowRight, Shield, BookOpen, Headphones } from 'lucide-react'

const TRUST_MARKERS = [
  { icon: Shield,      text: 'You keep full rights and control'     },
  { icon: BookOpen,    text: 'KDP-ready files and EPUB tested'       },
  { icon: Headphones,  text: '30-day publishing aftercare included'  },
]

const CHECKLIST = [
  { status: 'checked',  label: 'Interior layout & typography'  },
  { status: 'checked',  label: 'Chapter heading consistency'   },
  { status: 'checked',  label: 'Margin and bleed settings'     },
  { status: 'checked',  label: 'Front matter structure'        },
  { status: 'prepared', label: 'EPUB conversion'               },
  { status: 'prepared', label: 'Kindle preview validation'     },
  { status: 'included', label: 'KDP upload checklist'          },
  { status: 'included', label: '30-day aftercare setup'        },
]

const PROOF_PREVIEWS = [
  { label: 'Formatted Interior' },
  { label: 'KDP Upload Preview' },
  { label: 'EPUB Preview'       },
]

function StatusBadge({ status }) {
  if (status === 'checked') {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-gold text-navy px-2 py-0.5 rounded-full uppercase tracking-wide">
        ✓ Checked
      </span>
    )
  }
  if (status === 'prepared') {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-semibold border border-gold text-gold px-2 py-0.5 rounded-full uppercase tracking-wide">
        ⟳ Prepared
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold border border-cream/25 text-cream/50 px-2 py-0.5 rounded-full uppercase tracking-wide">
      Included
    </span>
  )
}

function ProofPlaceholder({ label }) {
  return (
    <div className="flex-1 bg-navy-dim border border-white/10 rounded-xl overflow-hidden">
      <div className="aspect-[4/3] flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#c9a84c" strokeWidth="1" strokeOpacity="0.4"/>
          <path d="M3 17l5-5 3 3 4-5 6 7H3z" fill="#c9a84c" fillOpacity="0.12"/>
          <circle cx="16" cy="9" r="2" fill="#c9a84c" fillOpacity="0.2"/>
        </svg>
      </div>
      <div className="px-2.5 pb-2.5">
        <p className="text-[10px] text-cream/50 tracking-wide">{label}</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-[72px] flex items-center bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline */}
          <div>
            <p className="animate-fade-up text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-6">
              Book Formatting · EPUB · KDP Readiness
            </p>
            <h1 className="animate-fade-up delay-100 text-5xl md:text-[3.4rem] font-bold text-navy leading-[1.07] tracking-tight mb-6">
              Your book should not enter the market looking unfinished.
            </h1>
            <p className="animate-fade-up delay-200 text-lg text-slate leading-relaxed mb-10 max-w-lg">
              For authors who need professional formatting, Kindle EPUB, KDP readiness,
              and real support after delivery — without handing their book to a traditional
              publisher or chasing a formatter who disappears.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="bg-navy text-cream font-semibold px-8 py-4 rounded-full hover:bg-navy-mid transition-colors inline-flex items-center gap-2 text-sm"
              >
                Request a Publishing Review
                <ArrowRight size={15} />
              </a>
              <a
                href="#package"
                className="border border-navy text-navy font-semibold px-8 py-4 rounded-full hover:bg-navy hover:text-cream transition-colors text-sm"
              >
                See What We Prepare
              </a>
            </div>

            <div className="animate-fade-up delay-400 flex flex-col gap-3">
              {TRUST_MARKERS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={14} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-slate">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Navy dashboard panel */}
          <div className="animate-slide-right delay-200 lg:flex lg:justify-end">
            <div className="bg-navy rounded-2xl p-7 w-full max-w-md shadow-2xl">

              {/* Panel header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold mb-1">
                    Assessment
                  </p>
                  <h3 className="text-base font-bold text-cream">
                    Publishing Readiness Review
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">◇</span>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2 mb-5">
                {CHECKLIST.map(({ status, label }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
                  >
                    <span className={`text-[13px] ${status === 'included' ? 'text-cream/40' : 'text-cream/80'}`}>
                      {label}
                    </span>
                    <StatusBadge status={status} />
                  </div>
                ))}
              </div>

              {/* Proof preview row */}
              <div className="flex gap-2 mb-5">
                {PROOF_PREVIEWS.map(p => (
                  <ProofPlaceholder key={p.label} label={p.label} />
                ))}
              </div>

              {/* Trust line */}
              <div className="border-t border-white/10 pt-4 mb-5">
                <p className="text-[12px] text-cream/55 leading-snug">
                  Led by Paul / PTech — direct access, real support.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="w-full bg-gold text-navy text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gold-dk transition-colors"
              >
                Request Your Free Review
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
