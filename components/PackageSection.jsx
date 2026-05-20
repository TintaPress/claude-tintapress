import { CheckCircle2, Headphones, ArrowRight } from 'lucide-react'

const PACKAGE_ITEMS = [
  'Professional interior formatting',
  'Kindle EPUB conversion',
  'KDP upload preparation',
  'Formatting error fixing and review',
  'Marketplace presentation review',
  'Publishing Direction Call before production',
  'Optional Final File Review Call after delivery',
  '30-Day Publishing Aftercare Window',
]

export default function PackageSection() {
  return (
    <section id="package" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-semibold mb-4">
            What's included
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            The Book-Ready Package
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          <div className="bg-[#f9f8f6] rounded-2xl p-8">
            <ul className="space-y-4">
              {PACKAGE_ITEMS.map(item => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2 size={17} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#c9a84c] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#b8943e] transition-colors text-sm"
              >
                Request a Publishing Review
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-[#fef9ee] border border-[#c9a84c]/20 rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <Headphones size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">30-Day Publishing Aftercare</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The 30-day aftercare window begins at delivery. During this period, Paul
                    is available for upload support, KDP troubleshooting, proof copy review,
                    and last-mile questions that arise between submission and live listing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-7">
              <h3 className="font-bold text-gray-900 mb-3">This is not a file service.</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                The goal is not to deliver files. The goal is to get your book listed
                correctly, looking right, and reading properly on every device and platform
                it needs to reach.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
