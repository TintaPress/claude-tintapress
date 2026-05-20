import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FearSection from '../components/FearSection'
import PositioningSection from '../components/PositioningSection'
import DifferentiatorSection from '../components/DifferentiatorSection'
import PackageSection from '../components/PackageSection'
import ProofSection from '../components/ProofSection'
import ProcessSection from '../components/ProcessSection'
import WhoForSection from '../components/WhoForSection'
import FAQSection from '../components/FAQSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tinta Press — Professional Book Formatting & Publishing Preparation</title>
        <meta
          name="description"
          content="Professional book formatting, Kindle EPUB, KDP readiness, and 30-day publishing aftercare for independent authors. Serving the US, Canada, UK, and Germany."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />
      <Hero />
      <FearSection />
      <PositioningSection />
      <DifferentiatorSection />
      <PackageSection />
      <ProofSection />
      <ProcessSection />
      <WhoForSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </>
  )
}
