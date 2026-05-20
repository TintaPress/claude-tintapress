const PROOFS = [
  {
    title: 'Print interior layout',
    caption:
      'Chapter headers, body text, running headers, and page numbering — all consistent with the book\'s tone.',
  },
  {
    title: 'Kindle EPUB preview',
    caption:
      'Validated on multiple devices. No broken spacing, no missing hyperlinks, no layout collapse.',
  },
  {
    title: 'KDP dashboard readiness',
    caption:
      'Files formatted to KDP specifications before upload — not after rejection.',
  },
  {
    title: 'Before and after comparison',
    caption:
      'Original manuscript vs. delivered layout. The difference is visible from the first page.',
  },
]

function ImagePlaceholder() {
  return (
    <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-10 h-10 rounded-xl bg-gray-200 mx-auto mb-3 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <rect width="18" height="18" rx="3" fill="#e5e7eb" />
            <path d="M3 13l3.5-4 2.5 3 2.5-3.5L15 13H3z" fill="#d1d5db" />
            <circle cx="12" cy="6" r="1.5" fill="#d1d5db" />
          </svg>
        </div>
        <p className="text-[11px] text-gray-400">Screenshot added soon</p>
      </div>
    </div>
  )
}

export default function ProofSection() {
  return (
    <section id="proof" className="bg-[#f9f8f6] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-semibold mb-4">
            The work
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight max-w-xl">
            Proof that the work goes beyond layout
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg text-[15px]">
            Screenshots and examples from completed projects — added as they are cleared for display.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROOFS.map(({ title, caption }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100"
            >
              <ImagePlaceholder />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
