import { Mail, Globe } from 'lucide-react'

const NAV_LINKS = [
  ['Services', '#package'],
  ['Process', '#process'],
  ['Reviews', '#proof'],
  ['FAQ', '#faq'],
  ['Request a Review', '#contact'],
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Tinta Press</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Professional book formatting, Kindle EPUB, KDP readiness, and publishing
              aftercare for independent authors.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-5">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:paul@tintapress.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={13} />
                paul@tintapress.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <Globe size={13} className="mt-0.5 flex-shrink-0" />
                Serving authors across the US, Canada, UK, and Germany
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-5">
              Navigation
            </p>
            <div className="space-y-2.5">
              {NAV_LINKS.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Tinta Press. All rights reserved.</p>
          <p className="text-xs text-gray-600">Paul / PTech</p>
        </div>

      </div>
    </footer>
  )
}
