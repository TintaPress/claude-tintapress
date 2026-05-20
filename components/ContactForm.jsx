import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const BOOK_TYPES = [
  'Devotional / Christian non-fiction',
  'Business / leadership',
  'Memoir / personal story',
  'Workbook / guided journal',
  'Self-help',
  'Other non-fiction',
]
const STATUSES = [
  'Complete and proofread',
  'Complete but needs proofreading',
  'Still being written',
  'Other',
]
const FORMATS = [
  'Print interior (PDF)',
  'Kindle EPUB',
  'EPUB3 (other platforms)',
  'All formats',
]
const PLATFORMS = [
  'Amazon KDP',
  'IngramSpark',
  'Both KDP and IngramSpark',
  'Other / not sure',
]
const TIMELINES = [
  'As soon as possible',
  'Within 4 weeks',
  'Within 2–3 months',
  'No specific timeline yet',
]

const input =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9a84c] transition-colors bg-white'
const label = 'block text-sm font-medium text-gray-700 mb-1.5'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', country: '', bookType: '', status: '',
    wordCount: '', formats: '', platform: '', concern: '', timeline: '', message: '',
  })

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  if (submitted) {
    return (
      <section id="contact" className="bg-[#f9f8f6] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={28} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Review submitted</h3>
            <p className="text-gray-500 leading-relaxed">
              Paul reviews each enquiry personally and will reply with the recommended
              next step for your book.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-[#f9f8f6] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-semibold mb-4">
            Get started
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Request a Publishing Review
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg text-[15px]">
            Paul reviews each enquiry personally and replies with the recommended next
            step for your book.
          </p>
        </div>

        <form
          onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
          className="max-w-2xl"
        >
          <div className="space-y-6">

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={label}>Full name *</label>
                <input
                  type="text" required className={input}
                  placeholder="Your name"
                  value={form.name} onChange={set('name')}
                />
              </div>
              <div>
                <label className={label}>Email address *</label>
                <input
                  type="email" required className={input}
                  placeholder="you@example.com"
                  value={form.email} onChange={set('email')}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={label}>Country *</label>
                <input
                  type="text" required className={input}
                  placeholder="e.g. United States"
                  value={form.country} onChange={set('country')}
                />
              </div>
              <div>
                <label className={label}>Book type / genre *</label>
                <select required className={input + ' appearance-none cursor-pointer'} value={form.bookType} onChange={set('bookType')}>
                  <option value="">Select one</option>
                  {BOOK_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={label}>Manuscript status *</label>
                <select required className={input + ' appearance-none cursor-pointer'} value={form.status} onChange={set('status')}>
                  <option value="">Select one</option>
                  {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={label}>Word count or page count</label>
                <input
                  type="text" className={input}
                  placeholder="e.g. 55,000 words or 220 pages"
                  value={form.wordCount} onChange={set('wordCount')}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={label}>Required formats *</label>
                <select required className={input + ' appearance-none cursor-pointer'} value={form.formats} onChange={set('formats')}>
                  <option value="">Select one</option>
                  {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className={label}>Publishing platform</label>
                <select className={input + ' appearance-none cursor-pointer'} value={form.platform} onChange={set('platform')}>
                  <option value="">Select one</option>
                  {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className={label}>Biggest concern right now *</label>
              <textarea
                required rows={3}
                className={input + ' resize-none'}
                placeholder="What is your main concern or question about your book's production?"
                value={form.concern} onChange={set('concern')}
              />
            </div>

            <div>
              <label className={label}>Desired timeline</label>
              <select className={input + ' appearance-none cursor-pointer'} value={form.timeline} onChange={set('timeline')}>
                <option value="">Select one</option>
                {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <label className={label}>
                Message or file link{' '}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                rows={3}
                className={input + ' resize-none'}
                placeholder="Any additional context, or a link to a sample chapter or manuscript"
                value={form.message} onChange={set('message')}
              />
            </div>

          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#b8943e] transition-colors text-sm"
            >
              Submit Publishing Review
              <ArrowRight size={15} />
            </button>
            <p className="mt-4 text-xs text-gray-400">
              Paul reviews each enquiry personally and replies with the recommended next step for your book.
            </p>
          </div>
        </form>

      </div>
    </section>
  )
}
