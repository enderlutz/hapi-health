import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

const CDN = 'https://images.unsplash.com'

const photos = {
  hero:      `${CDN}/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85`,
  nurseHome: `${CDN}/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80`,
  ptHome:    `${CDN}/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80`,
  aide:      `${CDN}/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80`,
  wound:     `${CDN}/photo-1584820927498-4e5f9c8b83b0?auto=format&fit=crop&w=900&q=80`,
  whyUs:     `${CDN}/photo-1530026405845-9e2477e68c38?auto=format&fit=crop&w=1000&q=80`,
  break:     `${CDN}/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=80`,
}

const services = [
  { n: '01', title: 'Skilled Nursing',   slug: 'skilled-nursing',  photo: photos.nurseHome, desc: 'RNs and LVNs for wound care, medications, IV therapy, and chronic-disease management.' },
  { n: '02', title: 'Physical Therapy',  slug: 'physical-therapy', photo: photos.ptHome,    desc: 'Rebuild strength, balance, and mobility with a plan built around your own home.' },
  { n: '03', title: 'Home Health Aide',  slug: 'home-health-aide', photo: photos.aide,      desc: 'Certified aides for bathing, dressing, and the daily routines that keep life steady.' },
  { n: '04', title: 'Wound Care',        slug: 'wound-care',       photo: photos.wound,     desc: 'Certified wound nurses for surgical sites, pressure injuries, and diabetic ulcers.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={photos.hero} alt="A nurse visiting a patient at home in Houston" fill className="object-cover object-center" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/25" />
        </div>

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-24">
          <div className="max-w-2xl">
            <p className="text-white/70 font-medium tracking-wide mb-6">We care like family.</p>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.2rem] text-white leading-[1.04] mb-7">
              Care that comes
              <br />
              home to you.
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-9 max-w-lg">
              Skilled nurses, therapists, and aides across Houston and Harris County, sent to your door within a day of your referral. Licensed, background-checked, and on call around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-brand-red-dark transition-colors text-center">
                Request Care
              </Link>
              <a href="tel:+18325551234" className="flex items-center justify-center gap-2.5 border border-white/40 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-white/10 transition-colors">
                <Phone size={19} /> (832) 555-1234
              </a>
            </div>
            <p className="text-white/55 text-sm mt-8 tracking-wide">
              Medicare &amp; Medicaid certified&nbsp;&nbsp;·&nbsp;&nbsp;Joint Commission accredited&nbsp;&nbsp;·&nbsp;&nbsp;Licensed by Texas HHSC
            </p>
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY BAND ─────────────────────────────────── */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {[
            { big: 'Since 2010', small: 'Caring for Houston families' },
            { big: '500 +',       small: 'Patients served at home' },
            { big: 'On call 24/7', small: 'A nurse, any hour you need one' },
          ].map((item) => (
            <div key={item.small} className="px-2 sm:px-8 py-5 sm:py-2 first:pl-0 last:pr-0">
              <p className="font-display text-3xl text-white mb-1">{item.big}</p>
              <p className="text-white/65 text-sm">{item.small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="kicker mb-5">What we do</span>
            <h2 className="text-4xl lg:text-5xl text-navy leading-tight">
              The care a hospital gives, in the place you actually live.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {services.map((s) => (
              <Link key={s.slug} href={`/services#${s.slug}`} className="group">
                <div className="relative h-64 overflow-hidden mb-5">
                  <Image src={s.photo} alt={s.title} fill className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700" unoptimized />
                  <span className="absolute top-4 left-4 font-display text-white text-lg drop-shadow">{s.n}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-brand-red transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <Link href="/services" className="text-navy font-semibold hover:text-brand-red transition-colors">
              See all services →
            </Link>
            <Link href="/physicians" className="text-gray-500 hover:text-navy transition-colors text-sm">
              Are you a physician? Send a referral.
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US — asymmetric split ────────────────────────── */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-24">
          <div className="lg:col-span-7">
            <span className="kicker mb-5">Why families choose us</span>
            <h2 className="text-4xl lg:text-5xl text-navy leading-tight mb-7">
              We are not a call center. We are your neighbors.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-9 max-w-xl">
              Every patient is assigned one nurse who learns your history, follows your physician&apos;s orders, and answers the phone when something does not feel right. No phone trees. No strangers at the door every visit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                ['A clinician within 24 hours', 'We start care the day after your referral, often sooner.'],
                ['Bilingual care team', 'Every visit available in English and Spanish.'],
                ['One dedicated nurse', 'The same familiar face, visit after visit.'],
                ['Straight to your doctor', 'We report back so your physician is never in the dark.'],
              ].map(([title, body]) => (
                <div key={title} className="border-l-2 border-brand-red pl-4">
                  <p className="font-semibold text-navy mb-1">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-block mt-10 text-navy font-semibold hover:text-brand-red transition-colors">
              Read our story →
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[460px] lg:h-[560px]">
              <Image src={photos.whyUs} alt="A HAPI Health nurse with a patient at home" fill className="object-cover object-center" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE BREAK ──────────────────────────────────────── */}
      <section className="relative">
        <div className="relative h-[380px] lg:h-[460px]">
          <Image src={photos.break} alt="Caregiver and patient" fill className="object-cover object-center" unoptimized />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <p className="font-display italic text-3xl lg:text-[2.6rem] text-white leading-snug">
                &ldquo;They treated my mother the way I would have, if I had known how. That is the whole thing, really.&rdquo;
              </p>
              <p className="text-white/70 mt-6 tracking-wide">Rosa M., daughter of a patient in Spring Branch</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="kicker mb-5">Getting started</span>
            <h2 className="text-4xl lg:text-5xl text-navy leading-tight">
              Three steps from your first call to your first visit.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { n: '1', h: 'You reach out', b: 'Call us or send the form. A real person, often a nurse, answers and listens. We respond within two hours, any day of the week.' },
              { n: '2', h: 'We handle insurance', b: 'Our intake team verifies your Medicare, Medicaid, or private coverage and walks you through exactly what is covered. You pay nothing to find out.' },
              { n: '3', h: 'Care begins at home', b: 'A clinician arrives within a day, with a plan of care signed by your physician, and stays in step with your doctor from then on.' },
            ].map((s, i) => (
              <div key={s.n} className={`py-2 md:px-10 ${i !== 0 ? 'border-t md:border-t-0 md:border-l border-gray-200 pt-10 md:pt-2' : 'md:pl-0'} ${i === 2 ? 'md:pr-0' : ''}`}>
                <p className="font-display text-brand-red text-5xl mb-5">{s.n}</p>
                <h3 className="text-xl font-semibold text-navy mb-3">{s.h}</h3>
                <p className="text-gray-600 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — asymmetric, no avatars/stars ──────── */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="kicker mb-5">In their words</span>
              <h2 className="text-4xl lg:text-5xl text-navy leading-tight">
                The families we serve say it better than we can.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-10">
              {[
                { q: 'After my hip replacement I was terrified of recovering alone. The therapist came three times a week and had me walking the block by week six. I never felt rushed and I never felt like a number.', who: 'James R.', role: 'Patient, Memorial area' },
                { q: 'HAPI is my first call for home health referrals. They follow the plan of care to the letter, flag changes early, and my patients consistently tell me how kind the nurses are.', who: 'Dr. Sandra Lee', role: 'Internal medicine, Houston' },
              ].map((t) => (
                <figure key={t.who} className="border-t border-gray-300 pt-8">
                  <blockquote className="font-display text-xl lg:text-2xl text-navy leading-snug mb-5">
                    &ldquo;{t.q}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm text-gray-600">
                    <span className="font-semibold text-navy">{t.who}</span> &nbsp;·&nbsp; {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-5xl leading-tight mb-4">
              Let&apos;s get care started.
            </h2>
            <p className="text-white/75 text-lg max-w-lg">
              Our coordinators are available around the clock. Call now, or send the form and we will follow up within two hours.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
            <Link href="/contact" className="bg-brand-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-brand-red-dark transition-colors text-center">
              Request Care
            </Link>
            <a href="tel:+18325551234" className="flex items-center justify-center gap-2.5 border border-white/40 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-white/10 transition-colors">
              <Phone size={19} /> Call us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
