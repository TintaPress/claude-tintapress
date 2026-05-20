import { CheckCircle2, X } from 'lucide-react'

const FOR_YOU = [
  'You are self-publishing on KDP, IngramSpark, or a similar platform',
  'You need both a print interior and a Kindle EPUB',
  'You want your book to look like it was published professionally',
  'You value personal communication and a single point of contact',
  'You want support beyond file delivery',
  'You are writing a devotional, business book, memoir, workbook, or non-fiction',
]

const NOT_FOR_YOU = [
  'You need a ghostwriter or manuscript editor',
  'You want a publisher to acquire your book',
  'You need fiction typesetting with complex custom illustration work',
  'You are looking for the cheapest price, not the right outcome',
]

export default function WhoForSection() {
  return (
    <section className="bg-[#f9f8f6] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-semibold mb-4">
            Fit
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Who this is for
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-[10px] uppercase tracking-widest font-semibold text-green-600 mb-6">
              This is for you if
            </p>
            <ul className="space-y-4">
              {FOR_YOU.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-6">
              This is not for you if
            </p>
            <ul className="space-y-4">
              {NOT_FOR_YOU.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                  <X size={15} className="text-gray-300 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
