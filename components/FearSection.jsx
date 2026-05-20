import { FileWarning, BookOpen, Eye, HelpCircle, Headphones } from 'lucide-react'

const FEARS = [
  {
    icon: FileWarning,
    title: 'What if Amazon rejects my file?',
    text: 'Margin errors, rejected files, confusing rules, and launch delays can drain the excitement from publishing.',
  },
  {
    icon: BookOpen,
    title: 'What if my book looks amateur?',
    text: 'Poor formatting can make serious work feel unfinished before a reader even reaches chapter one.',
  },
  {
    icon: Eye,
    title: 'What if the EPUB breaks on Kindle?',
    text: 'Broken spacing, layout issues, missing links, and preview surprises can damage trust quickly.',
  },
  {
    icon: HelpCircle,
    title: 'What if I still feel lost after delivery?',
    text: 'Many authors receive files but no guidance, no clarity, and no support after the invoice is paid.',
  },
  {
    icon: Headphones,
    title: 'What if they disappear after delivery?',
    text: 'The most critical stage often comes after delivery — upload, proofing, and final marketplace checks.',
  },
]

export default function FearSection() {
  return (
    <section className="bg-[#f9f8f6] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-semibold mb-4">
            The real concerns
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight max-w-xl">
            What's keeping your book from launching?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEARS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 border border-gray-100"
            >
              <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <Icon size={17} className="text-gray-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2.5 leading-snug text-[15px]">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
