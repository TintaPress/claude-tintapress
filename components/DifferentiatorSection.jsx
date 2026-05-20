const PUBLISHER = [
  'You give up control and royalties',
  'Years from submission to shelf',
  'Your book must fit their catalogue',
  'No direct relationship with your reader',
]

const TINTA = [
  'You own every file and every right',
  'Production on your timeline',
  'Formatting matched to your book\'s purpose',
  'Personal support through launch and beyond',
]

export default function DifferentiatorSection() {
  return (
    <section className="bg-[#f9f8f6] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-semibold mb-6">
              How this is different
            </p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
              Not a publishing house.<br />Not a disappearing freelancer.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Before formatting begins, the manuscript is reviewed for structure, tone, and
              publishing intent — because a devotional, a business book, a memoir, and a
              workbook should not all feel the same on the page.
            </p>
            <p className="text-gray-500 leading-relaxed">
              This is not a file conversion service. It is a publishing preparation service,
              led by a single professional who stays accountable from submission through
              marketplace listing.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-5">
                Traditional publisher
              </p>
              <ul className="space-y-3">
                {PUBLISHER.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="text-gray-300 flex-shrink-0 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#c9a84c]/20">
              <p className="text-[10px] uppercase tracking-widest font-semibold text-[#c9a84c] mb-5">
                Tinta Press
              </p>
              <ul className="space-y-3">
                {TINTA.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
