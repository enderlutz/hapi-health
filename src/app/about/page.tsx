import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

const CDN = 'https://images.unsplash.com'

const leadership = [
  { name: 'Patricia Mendez, RN, MSN', title: 'Chief Executive Officer', bio: 'Twenty years of clinical and administrative leadership in home health. Patricia founded HAPI to bring hospital-quality care to the Houston families she grew up around.', photo: `${CDN}/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80` },
  { name: 'David Okafor, PT, DPT', title: 'Director of Clinical Services', bio: 'A doctoral-level physical therapist with fifteen years in home rehabilitation. David owns clinical quality, outcomes, and the training every therapist goes through.', photo: `${CDN}/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80` },
  { name: 'Sandra Tran, LMSW', title: 'Director of Patient Services', bio: 'Sandra runs intake, care coordination, and social work, making sure no patient falls through the cracks between the hospital and home.', photo: `${CDN}/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80` },
  { name: 'James Holloway, RN, CWCN', title: 'Wound Care Coordinator', bio: 'A certified wound-care nurse who leads our wound program and trains the nursing staff on the protocols that keep patients healing and out of the hospital.', photo: `${CDN}/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80` },
]

export default function AboutPage() {
  return (
    <>
      {/* Photo hero */}
      <section className="relative min-h-[62vh] flex items-end">
        <div className="absolute inset-0">
          <Image src={`${CDN}/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1800&q=80`} alt="A caregiver and patient at home" fill className="object-cover object-center" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-navy/15" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-44 w-full">
          <span className="kicker mb-5" style={{ color: '#fff' }}>Our story</span>
          <h1 className="text-4xl lg:text-6xl text-white leading-[1.05] max-w-3xl">
            We started HAPI because home is where people get better.
          </h1>
        </div>
      </section>

      {/* Mission — split, no floating badge */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl text-navy leading-tight mb-7">A Houston company, caring for Houston families.</h2>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>The idea behind HAPI is simple. People heal faster, and live better, when they recover at home, surrounded by the people and routines they know. So we brought the clinical care to them.</p>
              <p>Our nurses, therapists, and aides serve patients across Harris County and the greater Houston area. We work hand in hand with physicians and hospitals so the care never breaks the moment someone leaves the building.</p>
              <p>We are licensed by the State of Texas, certified by Medicare and Medicaid, and bilingual in English and Spanish. We care for everyone, the way we would want our own families cared for.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative h-[420px] lg:h-[520px]">
              <Image src={`${CDN}/photo-1530026405845-9e2477e68c38?auto=format&fit=crop&w=900&q=80`} alt="A nurse with a patient" fill className="object-cover object-center" unoptimized />
            </div>
            <dl className="grid grid-cols-2 gap-px bg-gray-200 mt-px">
              <div className="bg-white pt-6 pr-6">
                <dt className="font-display text-3xl text-navy">2010</dt>
                <dd className="text-gray-500 text-sm mt-1">Serving Houston since</dd>
              </div>
              <div className="bg-white pt-6 pl-6">
                <dt className="font-display text-3xl text-navy">500+</dt>
                <dd className="text-gray-500 text-sm mt-1">Families cared for</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Values — editorial numbered list, no cards/icons */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="kicker mb-5">What we stand for</span>
            <h2 className="text-3xl lg:text-4xl text-navy">Four things we will not compromise on.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              ['Compassion first', 'Every patient is someone\'s mother, father, or child. We care for each person the way we would want our own family cared for, full stop.'],
              ['Real clinical rigor', 'Warmth is not a substitute for skill. We follow evidence-based protocols and measure our outcomes, because kindness without competence is not care.'],
              ['One team, your doctor included', 'Nurses, therapists, and social workers who actually talk to each other, and to your physician, so nothing gets lost between visits.'],
              ['We answer for our work', 'Honest about outcomes, quick to respond, and accountable to every family that lets us into their home.'],
            ].map(([t, b], i) => (
              <div key={t} className="flex gap-6">
                <span className="font-display text-brand-red text-4xl leading-none shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{t}</h3>
                  <p className="text-gray-600 leading-relaxed">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications — plain text rows on navy, no icons/cards */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="kicker mb-4" style={{ color: '#fff' }}>Credentials</span>
            <h2 className="text-3xl lg:text-4xl leading-tight">We meet every standard, and then some.</h2>
          </div>
          <div className="lg:col-span-8 space-y-px">
            {[
              ['Medicare Certified', 'Certified by CMS to provide skilled home health under Medicare Part A. No deductible, no copay for eligible patients.'],
              ['Medicaid Enrolled', 'A Texas Medicaid provider serving patients through STAR and STAR+PLUS managed-care programs.'],
              ['Texas HHSC Licensed', 'Licensed by the Texas Health & Human Services Commission as a Type A home health agency.'],
              ['Joint Commission Accredited', 'Accredited against the gold-standard benchmark for quality and safety in health care.'],
            ].map(([t, b]) => (
              <div key={t} className="grid sm:grid-cols-12 gap-2 sm:gap-6 py-6 border-t border-white/15">
                <h3 className="sm:col-span-4 text-lg font-semibold">{t}</h3>
                <p className="sm:col-span-8 text-white/70 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="kicker mb-5">The people in charge</span>
            <h2 className="text-3xl lg:text-4xl text-navy">Clinical leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {leadership.map((l) => (
              <div key={l.name} className="flex gap-6">
                <div className="relative w-24 h-28 shrink-0 overflow-hidden grayscale">
                  <Image src={l.photo} alt={l.name} fill className="object-cover object-top" unoptimized />
                </div>
                <div className="border-t-2 border-brand-red pt-3">
                  <h3 className="text-lg font-semibold text-navy">{l.name}</h3>
                  <p className="text-brand-red text-sm font-medium mb-2">{l.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-3xl lg:text-4xl text-navy leading-tight max-w-lg">Want to meet the team?</h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="bg-brand-red text-white px-8 py-4 rounded-md font-semibold hover:bg-brand-red-dark transition-colors text-center">Contact Us</Link>
            <a href="tel:+18325551234" className="flex items-center justify-center gap-2.5 border border-navy text-navy px-8 py-4 rounded-md font-medium hover:bg-navy/5 transition-colors">
              <Phone size={18} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
