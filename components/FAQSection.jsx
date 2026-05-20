import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'What types of books do you format?',
    a: 'Non-fiction primarily — devotionals, business books, memoirs, workbooks, self-help, and Christian literature. If your book has a clear structure and is heading to KDP or a similar platform, it likely fits.',
  },
  {
    q: 'What formats do you deliver?',
    a: 'Print-ready PDF (for KDP, IngramSpark), Kindle EPUB (for Amazon KDP), and EPUB3 (for other digital platforms). All files are tested before delivery.',
  },
  {
    q: 'Do you offer editing or proofreading?',
    a: 'No. Tinta Press is a formatting and publishing preparation service, not an editing service. Your manuscript should be complete and proofread before submission.',
  },
  {
    q: 'How long does the process take?',
    a: 'Typically 7 to 14 business days from submission to final delivery, depending on manuscript length and complexity. Timelines are confirmed during the Publishing Direction Call.',
  },
  {
    q: 'What happens if KDP rejects my file after delivery?',
    a: 'The 30-day aftercare window covers exactly this scenario. If KDP raises an issue with a delivered file, Paul will review and correct it as part of the engagement.',
  },
  {
    q: 'Do I keep the rights to my book?',
    a: 'Yes. You own every file. All rights remain with you. Tinta Press delivers work for hire — the files are yours from the moment they are delivered.',
  },
  {
    q: 'Where are you based? Do you work internationally?',
    a: 'Paul is based in Germany and works with authors across the US, Canada, UK, and Germany. All communication is in English and takes place by email and video call.',
  },
  {
    q: 'How do I get started?',
    a: 'Submit the Publishing Review form below. Paul reviews each enquiry personally and will reply with the recommended next step for your book.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-semibold mb-4">
            Questions
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Frequently asked
          </h2>
        </div>

        <div className="max-w-2xl space-y-2">
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-gray-900 pr-4 text-[15px]">{q}</span>
                <ChevronDown
                  size={17}
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
