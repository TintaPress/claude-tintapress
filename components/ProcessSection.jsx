const STEPS = [
  {
    number: '01',
    title: 'Submit your manuscript',
    text: 'Send your Word document or PDF with a brief overview of your book type, publishing platform, and required formats.',
  },
  {
    number: '02',
    title: 'Publishing Direction Call',
    text: 'Before production begins, the book\'s structure, tone, publishing intent, and formatting questions are discussed.',
  },
  {
    number: '03',
    title: 'Manuscript review',
    text: 'The manuscript is reviewed for structure, inconsistencies, and formatting requirements before layout work begins.',
  },
  {
    number: '04',
    title: 'Interior layout and EPUB',
    text: 'Professional formatting is applied, EPUB is converted, and all files are prepared to KDP and EPUB specification.',
  },
  {
    number: '05',
    title: 'File delivery and review call',
    text: 'Files are delivered with a walkthrough. An optional final review call is available to confirm everything before upload.',
  },
  {
    number: '06',
    title: '30-day aftercare window',
    text: 'Upload support, KDP troubleshooting, proof copy review, and last-mile help until your book is live.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-semibold mb-4">
            How it works
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            From manuscript to marketplace
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {STEPS.map(({ number, title, text }) => (
            <div key={number}>
              <span className="text-sm font-bold text-[#c9a84c] block mb-3">{number}</span>
              <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
