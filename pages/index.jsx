import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileWarning,
  BookOpenCheck,
  Headphones,
  UploadCloud,
  Eye,
  MessageCircle,
  X,
  Mail,
  Globe2,
  UserCheck,
  FileText,
  Layers,
  HelpCircle,
} from "lucide-react";

const gold = "#c9a84c";

const painPoints = [
  {
    icon: FileWarning,
    title: "What if Amazon rejects my file?",
    text: "Margin errors, rejected files, confusing rules, and launch delays can drain the excitement from publishing.",
  },
  {
    icon: BookOpenCheck,
    title: "What if my book looks amateur?",
    text: "Poor formatting can make serious work feel unfinished before a reader even reaches chapter one.",
  },
  {
    icon: Eye,
    title: "What if the EPUB breaks on Kindle?",
    text: "Broken spacing, layout issues, missing links, and preview surprises can damage trust quickly.",
  },
  {
    icon: HelpCircle,
    title: "What if I still feel lost?",
    text: "Many authors receive files but no guidance, no clarity, and no support after delivery.",
  },
  {
    icon: Headphones,
    title: "What if they disappear after delivery?",
    text: "The most critical stage often comes after the invoice is paid — upload, proofing, and final checks.",
  },
];

const packageItems = [
  "Professional interior formatting",
  "Kindle EPUB conversion",
  "KDP upload preparation",
  "Formatting error fixing",
  "Marketplace presentation review",
  "Publishing Direction Call before production",
  "Optional Final File Review Call after delivery",
  "30-Day Publishing Aftercare Window",
];

const aftercareCovers = [
  "KDP upload guidance and troubleshooting",
  "Upload error support",
  "EPUB preview checks",
  "Minor formatting corrections",
  "Paperback proof-related adjustments",
  "Guidance on using delivered files",
];

const aftercareLimits = [
  "Rewriting, editing, or content changes",
  "Major redesign or new layout",
  "Marketing or promotion",
  "Cover design changes",
  "New content or additional services",
  "Unlimited revisions",
];

const proofItems = [
  "Formatted Interior",
  "KDP Upload / Publishing",
  "EPUB Preview",
  "Published on Amazon KDP",
  "Paperback Proof",
  "Book Layout Sample",
];

const process = [
  ["Enquiry & Review", "You share your manuscript details. We review your needs."],
  ["Publishing Direction Call", "We discuss your book, goals, and publishing requirements."],
  ["Project Start", "Formatting, conversion, and preparation begin."],
  ["Progress Updates", "You receive updates and previews during the process."],
  ["Delivery", "You receive all files and a clear upload guide."],
  ["Publishing Support", "We support upload, preview, and file questions."],
  ["Aftercare", "You receive 30 days of support after delivery."],
];

const audience = [
  ["First-time authors", "who want to publish with confidence"],
  ["Self-publishers", "who want their next book to look better"],
  ["Coaches & consultants", "publishing authority books"],
  ["Memoir & faith authors", "who want careful presentation"],
  ["Journal creators", "preparing for Amazon KDP"],
  ["Authors with books already live", "but ready for a higher standard"],
];

const notFor = [
  "You want the cheapest possible upload",
  "Your manuscript is still being heavily rewritten",
  "You need ghostwriting or full manuscript editing",
  "You want guaranteed bestseller promises",
  "You expect unlimited changes after approval",
];

const faqs = [
  ["Are you a publishing company?", "No. Tinta Press does not take rights, royalties, or creative control. We prepare professional publishing files and support authors through the readiness stage."],
  ["Do I keep ownership of my book?", "Yes. You keep full ownership, rights, royalties, and platform control."],
  ["What happens after delivery?", "Premium projects include a 30-day Publishing Aftercare Window for formatting-related issues, upload questions, EPUB concerns, and minor corrections connected to the delivered files."],
  ["Can you help if Amazon KDP rejects my file?", "Yes, if the issue is related to formatting, margins, bleed, EPUB structure, file setup, or the delivered publishing files."],
  ["Do you guarantee book sales?", "No. We do not make fake bestseller promises. We help your book look credible, function properly, and enter the marketplace with fewer avoidable mistakes."],
  ["Can we have a call before starting?", "Yes. Premium projects include a Publishing Direction Call so the manuscript, platform, book type, and delivery expectations are clear before production begins."],
  ["Do you edit or rewrite manuscripts?", "No. Tinta Press focuses on formatting, EPUB conversion, KDP readiness, and publishing preparation. Editing should happen before production starts."],
  ["What if my book is already published but looks bad?", "We can review the existing files and recommend whether the book needs reformatting, EPUB correction, or publishing file cleanup."],
  ["How much does it cost?", "Premium packages start from $400. Final quotes depend on manuscript length, format, complexity, and publishing requirements."],
  ["How long does it take?", "Timing depends on manuscript length and deliverables. Most projects are scheduled after a review of the manuscript and publishing requirements."],
];

function TPSeal({ small = false }) {
  return (
    <div
      className={`relative grid ${small ? "h-10 w-10" : "h-14 w-14"} place-items-center rounded-full border border-[#c9a84c] text-[#c9a84c]`}
    >
      <div className="absolute inset-1 rounded-full border border-[#c9a84c]/55" />
      <span className={`${small ? "text-lg" : "text-2xl"} font-serif tracking-[-0.12em]`}>TP</span>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b99035]">
      <span className="h-px w-10 bg-[#c9a84c]" />
      {children}
    </div>
  );
}

function PlaceholderProof({ label, index }) {
  return (
    <div className="group rounded-2xl border border-[#d8c8a4] bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="grid h-32 place-items-center rounded-xl border border-dashed border-[#b8aa8b] bg-[#f7f2ea] text-center text-[11px] uppercase tracking-[0.18em] text-[#7a735f]">
        Placeholder Image<br />{index + 1}
      </div>
      <p className="mt-3 text-center text-xs font-medium text-[#1a1a2e]">{label}</p>
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, variant = "default", className = "", ...props }) {
  const baseClass = "inline-flex items-center justify-center gap-2 transition-colors";
  let variantClass = "";

  if (variant === "outline") {
    variantClass = "border-[#101224] bg-transparent text-[#101224] hover:bg-[#101224] hover:text-white";
  } else {
    variantClass = "bg-[#c9a84c] text-[#101224] hover:bg-[#d7b65b]";
  }

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function TintaPressHomepage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    country: "",
    bookType: "",
    status: "",
    wordCount: "",
    formats: "",
    platform: "",
    previousUpload: "",
    timeline: "",
    concern: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We will review your details and contact you soon.");
    setFormData({
      name: "",
      email: "",
      country: "",
      bookType: "",
      status: "",
      wordCount: "",
      formats: "",
      platform: "",
      previousUpload: "",
      timeline: "",
      concern: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] font-sans text-[#101224]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101224]/95 text-[#f5f0e8] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <TPSeal small />
            <div className="leading-none">
              <div className="font-serif text-xl tracking-[0.22em] text-white">TINTA PRESS</div>
              <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#c9a84c]">Publishing Partner</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 lg:flex">
            <a href="#services" className="hover:text-[#c9a84c] transition-colors">Services</a>
            <a href="#package" className="hover:text-[#c9a84c] transition-colors">Package</a>
            <a href="#process" className="hover:text-[#c9a84c] transition-colors">Process</a>
            <a href="#proof" className="hover:text-[#c9a84c] transition-colors">Proof</a>
            <a href="#faq" className="hover:text-[#c9a84c] transition-colors">FAQ</a>
          </nav>

          <a href="#contact" className="hidden rounded-none bg-[#c9a84c] px-6 py-5 text-xs font-bold uppercase tracking-[0.12em] text-[#101224] hover:bg-[#d7b65b] md:inline-flex transition-colors">
            Request Review
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-[#dfd5c3] bg-[#f8f4ed]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#101224] md:text-6xl lg:text-7xl">
                Your book should not enter the market looking unfinished.
              </h1>
              <div className="mt-7 h-px w-16 bg-[#c9a84c]" />
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#333443]">
                For authors who need professional formatting, Kindle EPUB, KDP readiness, and real support after delivery without handing their book to a traditional publisher or chasing a formatter who disappears.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="rounded-none bg-[#c9a84c] px-7 py-6 text-xs font-bold uppercase tracking-[0.13em] text-[#101224] hover:bg-[#d7b65b] inline-flex justify-center transition-colors">
                  Request Publishing Review
                </a>
                <a href="#package" className="rounded-none border border-[#101224] bg-transparent px-7 py-6 text-xs font-bold uppercase tracking-[0.13em] text-[#101224] hover:bg-[#101224] hover:text-white inline-flex justify-center transition-colors">
                  See What We Prepare
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-5 sm:grid-cols-3">
                <div className="flex items-start gap-3 text-sm text-[#333443]"><ShieldCheck className="mt-1 h-5 w-5 text-[#101224]" /><span>You keep full rights and control</span></div>
                <div className="flex items-start gap-3 text-sm text-[#333443]"><FileText className="mt-1 h-5 w-5 text-[#101224]" /><span>KDP-ready files and EPUBs tested</span></div>
                <div className="flex items-start gap-3 text-sm text-[#333443]"><Headphones className="mt-1 h-5 w-5 text-[#101224]" /><span>30-day publishing aftercare included</span></div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#101224] p-6 text-white shadow-2xl lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <SectionLabel>Publishing Readiness Review</SectionLabel>
                  <h2 className="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                    We check the details others miss before your book goes live.
                  </h2>
                  <div className="mt-7 space-y-3">
                    {[
                      ["Interior Formatting", "Checked"],
                      ["Kindle EPUB", "Checked"],
                      ["KDP Upload Readiness", "Checked"],
                      ["File & Error Review", "Checked"],
                      ["Marketplace Presentation", "Prepared"],
                      ["Aftercare Support", "Included"],
                    ].map(([label, status]) => (
                      <div key={label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                        <div className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-4 w-4 text-[#c9a84c]" />{label}</div>
                        <span className="rounded-full border border-[#c9a84c]/40 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#f1d991]">{status}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                    <TPSeal small />
                    <p className="text-sm leading-6 text-white/75">Led by Paul / PTech. Direct access. Real support.</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    "Formatted Interior",
                    "KDP Upload Preview",
                    "EPUB Preview",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/7 p-3">
                      <div className="grid h-28 place-items-center rounded-xl bg-[#f5f0e8] text-center text-[10px] uppercase tracking-[0.16em] text-[#6b6659]">
                        Placeholder<br />Screenshot
                      </div>
                      <p className="mt-2 text-xs font-semibold text-white/85">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#dfd5c3] bg-white/60 px-5 py-8 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-2xl font-semibold tracking-[-0.035em] text-[#101224]">
              Most authors are not afraid of publishing. <span className="text-[#b99035]">They are afraid of publishing badly.</span>
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
              {painPoints.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-l border-[#d6c7a9] pl-5">
                  <Icon className="mb-4 h-8 w-8 text-[#101224]" />
                  <h3 className="text-sm font-bold leading-snug text-[#101224]">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#4a4b55]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-[#dfd5c3] px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden rounded-3xl bg-[#101224] p-8 text-white shadow-lg">
              <div className="mb-8 flex items-center gap-4"><TPSeal /><div><p className="font-serif text-2xl tracking-[0.16em]">TINTA PRESS</p><p className="text-xs uppercase tracking-[0.18em] text-[#c9a84c]">Publishing Partner</p></div></div>
              <div className="grid h-52 place-items-center rounded-2xl border border-white/10 bg-white/5 text-center text-sm uppercase tracking-[0.2em] text-white/40">
                Premium Brand / Book Mockup Placeholder
              </div>
            </div>
            <div>
              <SectionLabel>Positioning</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101224] lg:text-5xl">
                Not a publishing house. Not a disappearing freelancer.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3d3a4a]">
                Tinta Press is a careful publishing partner for authors who want their manuscript professionally formatted, converted, checked, and supported through the publishing stage.
              </p>
              <div className="mt-9 grid gap-6 md:grid-cols-3">
                <Card className="rounded-2xl border-[#d8c8a4] bg-white/60 shadow-none">
                  <CardContent className="p-6">
                    <UserCheck className="h-7 w-7" />
                    <h3 className="mt-5 font-bold">You keep control</h3>
                    <p className="mt-2 text-sm leading-6 text-[#4a4b55]">No rights taken. No royalties. No publishing contract.</p>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-[#d8c8a4] bg-white/60 shadow-none">
                  <CardContent className="p-6">
                    <FileText className="h-7 w-7" />
                    <h3 className="mt-5 font-bold">You get publishing-ready files</h3>
                    <p className="mt-2 text-sm leading-6 text-[#4a4b55]">Formatting, EPUB, KDP preparation, and file guidance.</p>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-[#d8c8a4] bg-white/60 shadow-none">
                  <CardContent className="p-6">
                    <Headphones className="h-7 w-7" />
                    <h3 className="mt-5 font-bold">You are not left alone</h3>
                    <p className="mt-2 text-sm leading-6 text-[#4a4b55]">Real support with 30-day aftercare after delivery.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="package" className="border-b border-[#dfd5c3] bg-[#f8f4ed] px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>The Book-Ready Package</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101224]">
                One focused package for the part authors cannot afford to get wrong.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#3d3a4a]">
                A complete publishing preparation service for authors who want their book to look professional, function properly, and enter the marketplace with confidence.
              </p>
              <div className="mt-8 rounded-2xl border border-[#d8c8a4] bg-white p-6">
                <p className="font-bold text-[#101224]">Premium packages start from $400.</p>
                <p className="mt-2 text-sm leading-6 text-[#4a4b55]">Final quotes depend on manuscript length, format, complexity, and publishing requirements.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {packageItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#d8c8a4] bg-white/70 p-4 text-sm font-medium text-[#101224]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b99035]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#dfd5c3] px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-[#101224] p-8 text-white">
              <SectionLabel>Aftercare Advantage</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em]">
                We do not hand you files and disappear.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/75">
                Publishing is where many authors feel most alone — upload warnings, preview issues, proof copies, last-minute corrections, and uncertainty after the book goes live.
              </p>
              <p className="mt-5 rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/10 p-5 text-sm leading-7 text-[#f6e6b8]">
                Every premium project includes a 30-Day Publishing Aftercare Window for formatting-related issues, upload questions, EPUB preview concerns, and minor corrections connected to the delivered files.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-[#d8c8a4] bg-white p-7">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#b99035]">Aftercare Covers</h3>
                <div className="space-y-3">
                  {aftercareCovers.map((item) => <div key={item} className="flex gap-3 text-sm text-[#333443]"><CheckCircle2 className="h-5 w-5 text-[#b99035]" />{item}</div>)}
                </div>
              </div>
              <div className="rounded-3xl border border-[#d8c8a4] bg-white p-7">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#b99035]">Aftercare Does Not Cover</h3>
                <div className="space-y-3">
                  {aftercareLimits.map((item) => <div key={item} className="flex gap-3 text-sm text-[#333443]"><X className="h-5 w-5 text-[#6b2737]" />{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="border-b border-[#dfd5c3] bg-[#101224] px-5 py-16 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <SectionLabel>Proof</SectionLabel>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em]">Proof that the work goes beyond layout.</h2>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  Real projects. Real uploads. Real publishing results. Replace these placeholders with formatted interiors, KDP upload screens, EPUB previews, and book layout samples.
                </p>
                <a href="#contact" className="mt-7 rounded-none border-[#c9a84c] bg-transparent text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#101224] inline-flex px-6 py-3 border font-bold uppercase text-xs tracking-[0.12em] transition-colors">View More Proof</a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {proofItems.map((item, index) => <PlaceholderProof key={item} label={item} index={index} />)}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="border-b border-[#dfd5c3] px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr]">
              <div>
                <SectionLabel>Process</SectionLabel>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em]">A clear process from manuscript to marketplace.</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-7">
                {process.map(([title, text], index) => (
                  <div key={title} className="relative rounded-2xl border border-[#d8c8a4] bg-white/60 p-4 text-center">
                    <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-full border border-[#c9a84c] bg-[#f8f4ed] font-bold text-[#101224]">{index + 1}</div>
                    <h3 className="text-sm font-bold leading-snug">{title}</h3>
                    <p className="mt-2 text-[11px] leading-5 text-[#4a4b55]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#dfd5c3] bg-white/60 px-5 py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionLabel>Who This Is For</SectionLabel>
              <div className="grid gap-4 md:grid-cols-3">
                {audience.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-[#d8c8a4] bg-[#f8f4ed] p-5 text-center">
                    <Layers className="mx-auto mb-4 h-7 w-7 text-[#101224]" />
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#4a4b55]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#d8c8a4] bg-[#f8f4ed] p-7">
              <h2 className="text-xl font-semibold tracking-[-0.03em]">This is not for you if…</h2>
              <div className="mt-5 space-y-3">
                {notFor.map((item) => <div key={item} className="flex gap-3 text-sm text-[#333443]"><X className="h-5 w-5 shrink-0 text-[#6b2737]" />{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-[#dfd5c3] px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.5fr_1.5fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em]">Questions authors usually ask before trusting someone with their book.</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-[#d8c8a4] bg-white/70 p-5 cursor-pointer">
                  <summary className="cursor-pointer list-none text-sm font-bold text-[#101224]">{q}</summary>
                  <p className="mt-4 text-sm leading-6 text-[#4a4b55]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#101224] px-5 py-16 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em]">
                Before your book reaches readers, let's make sure it is ready to be seen.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Send your manuscript details and publishing goals. We will review what you need and recommend the right path before you commit.
              </p>
              <a href="mailto:paul@tintapress.com" className="mt-8 inline-flex items-center gap-3 text-[#c9a84c] hover:opacity-80 transition-opacity"><Mail className="h-5 w-5" /> paul@tintapress.com</a>
              <p className="mt-6 text-sm text-white/50">Serving authors in the US, Canada, UK, and Germany.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none placeholder:text-[#4a4b55]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none placeholder:text-[#4a4b55]"
                required
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none"
              >
                <option value="">Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="DE">Germany</option>
                <option value="Other">Other</option>
              </select>
              <select
                name="bookType"
                value={formData.bookType}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none"
              >
                <option value="">Book Type / Genre</option>
                <option value="fiction">Fiction</option>
                <option value="nonfiction">Non-fiction</option>
                <option value="memoir">Memoir</option>
                <option value="poetry">Poetry</option>
                <option value="children">Children's Book</option>
                <option value="journal">Journal / Workbook</option>
                <option value="other">Other</option>
              </select>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none"
              >
                <option value="">Manuscript Status</option>
                <option value="writing">Still writing</option>
                <option value="draft">Finished draft</option>
                <option value="edited">Edited & ready</option>
                <option value="published">Already published</option>
              </select>
              <input
                type="text"
                name="wordCount"
                placeholder="Word Count / Page Count"
                value={formData.wordCount}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none placeholder:text-[#4a4b55]"
              />
              <select
                name="formats"
                value={formData.formats}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none"
              >
                <option value="">Required Formats</option>
                <option value="paperback">Paperback</option>
                <option value="hardcover">Hardcover</option>
                <option value="ebook">E-book / Kindle</option>
                <option value="all">All formats</option>
              </select>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none"
              >
                <option value="">Publishing Platform</option>
                <option value="kdp">Amazon KDP</option>
                <option value="ingramspark">IngramSpark</option>
                <option value="multiple">Multiple platforms</option>
                <option value="unsure">Not sure yet</option>
              </select>
              <select
                name="previousUpload"
                value={formData.previousUpload}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none"
              >
                <option value="">Have You Tried Uploading?</option>
                <option value="rejected">Yes, it was rejected</option>
                <option value="live">Yes, it's live</option>
                <option value="no">No, first time</option>
              </select>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none"
              >
                <option value="">Desired Publishing Timeline</option>
                <option value="urgent">ASAP (2 weeks)</option>
                <option value="month">Within a month</option>
                <option value="flexible">Flexible</option>
              </select>
              <textarea
                name="concern"
                placeholder="Your Biggest Concern Right Now"
                value={formData.concern}
                onChange={handleChange}
                className="min-h-28 rounded-none border border-white/15 bg-[#f5f0e8] px-4 py-3 text-sm text-[#101224] outline-none placeholder:text-[#4a4b55] md:col-span-2"
              />
              <button
                type="submit"
                className="rounded-none bg-[#c9a84c] py-6 text-xs font-bold uppercase tracking-[0.14em] text-[#101224] hover:bg-[#d7b65b] md:col-span-2 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#090b14] px-5 py-8 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="flex items-center gap-4"><TPSeal small /><div><p className="font-serif tracking-[0.22em]">TINTA PRESS</p><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#c9a84c]">Publishing Partner</p></div></div>
          <p className="text-sm leading-6 text-white/55">A careful publishing partner for authors who take their book seriously.</p>
          <p className="text-sm leading-6 text-white/55">Email<br /><span className="text-[#c9a84c]">paul@tintapress.com</span></p>
          <p className="text-sm leading-6 text-white/55">© 2026 Tinta Press.<br />All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
