import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight, Phone, Star } from 'lucide-react'

/* ─── Photo constants ─────────────────────────────────────────── */
const CDN = 'https://images.unsplash.com'

const photos = {
  hero:      `${CDN}/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85`,
  nurseHome: `${CDN}/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80`,
  ptHome:    `${CDN}/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80`,
  aide:      `${CDN}/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80`,
  wound:     `${CDN}/photo-1584820927498-4e5f9c8b83b0?auto=format&fit=crop&w=900&q=80`,
  midBreak:  `${CDN}/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=1800&q=80`,
  whyUs:     `${CDN}/photo-1530026405845-9e2477e68c38?auto=format&fit=crop&w=900&q=80`,
  t1:        `${CDN}/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=200&q=80`,
  t2:        `${CDN}/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80`,
  t3:        `${CDN}/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80`,
}

const services = [
  { title: 'Skilled Nursing',      slug: 'skilled-nursing',   photo: photos.nurseHome, desc: 'RNs and LVNs managing wound care, medications, IV therapy, and chronic disease monitoring at home.' },
  { title: 'Physical Therapy',     slug: 'physical-therapy',  photo: photos.ptHome,    desc: 'Regain strength, balance, and independence with a personalized PT plan in your own space.' },
  { title: 'Home Health Aide',     slug: 'home-health-aide',  photo: photos.aide,      desc: 'Certified aides providing personal care, hygiene assistance, and daily living support.' },
  { title: 'Wound Care',           slug: 'wound-care',        photo: photos.wound,     desc: 'Specialized treatment for surgical wounds, pressure injuries, and diabetic ulcers.' },
]

const testimonials = [
  {
    photo: photos.t1,
    name: 'Rosa M.',
    role: 'Daughter of patient',
    stars: 5,
    quote: 'The nurse who came to my mother\'s house was kind, patient, and incredibly knowledgeable. She explained everything clearly and made my mother feel safe. We couldn\'t have asked for better.',
  },
  {
    photo: photos.t2,
    name: 'James R.',
    role: 'Patient — post hip replacement',
    stars: 5,
    quote: 'I was walking on my own within six weeks. The physical therapist came three times a week and actually pushed me while making it feel manageable. Total game changer.',
  },
  {
    photo: photos.t3,
    name: 'Dr. Sandra L.',
    role: 'Referring physician',
    stars: 5,
    quote: 'HAPI Health TX is my go-to referral for home health in Houston. They communicate clearly, follow orders precisely, and my patients consistently report excellent experiences.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={photos.hero}
            alt="Nurse visiting patient at home"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          {/* Gradient overlay — darker on left where text sits */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2d4e]/90 via-[#0c2d4e]/70 to-[#0c2d4e]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-2xl">
            <p className="text-teal-300 font-semibold text-sm uppercase tracking-widest mb-5">
              Houston&apos;s Home Health Team
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6">
              Healing<br />begins<br />
              <span className="text-teal-300">at home.</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-lg">
              Skilled nurses, therapists, and aides — licensed, background-checked, and sent to your door within 24 hours of your referral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-[#1a7a72] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#166b63] transition-colors text-center"
              >
                Request Care
              </Link>
              <a
                href="tel:+18325551234"
                className="flex items-center justify-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone size={20} /> (832) 555-1234
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {['Medicare Certified', 'Medicaid Enrolled', 'TX HHSC Licensed', '24/7 On-Call RN'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2">
                  <CheckCircle size={13} className="text-teal-300 shrink-0" />
                  <span className="text-white text-xs font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ───────────────────────────────────────── */}
      <section className="bg-[#0c2d4e] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '98%',  l: 'Patient Satisfaction' },
              { n: '500+', l: 'Families Served'      },
              { n: '24hr', l: 'Start of Care'        },
              { n: '24/7', l: 'Nurse On-Call'        },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-3xl lg:text-4xl font-extrabold text-teal-300">{s.n}</p>
                <p className="text-blue-300 text-sm mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[#1a7a72] font-bold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0c2d4e] leading-tight">
              Clinical care, <br className="hidden sm:block" />
              delivered to your door.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={`/services#${s.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={s.photo}
                    alt={s.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0c2d4e] mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-[#1a7a72] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/services"
              className="bg-[#0c2d4e] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#0a2540] transition-colors inline-flex items-center gap-2"
            >
              View All Services <ArrowRight size={16} />
            </Link>
            <Link href="/physicians" className="text-[#0c2d4e] font-semibold text-sm hover:underline">
              Physician referral portal →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH PHOTO BREAK ────────────────────────────── */}
      <section className="relative h-80 lg:h-[440px] overflow-hidden">
        <Image
          src={photos.midBreak}
          alt="Home health nurse with patient"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0c2d4e]/65 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <p className="text-3xl lg:text-4xl font-extrabold leading-tight">
              &ldquo;Care that feels like family, delivered with the skill of a hospital.&rdquo;
            </p>
            <p className="mt-4 text-blue-200 font-medium">— HAPI Health TX Clinical Team</p>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={photos.whyUs}
                  alt="Nurse providing care at patient home"
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#1a7a72] text-white rounded-2xl px-6 py-5 shadow-xl">
                <p className="text-3xl font-extrabold">15+</p>
                <p className="text-teal-200 text-sm font-medium">Years serving<br />Houston families</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-[#1a7a72] font-bold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0c2d4e] leading-tight mb-6">
                You deserve care you can trust.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We are not a call center. Every patient gets a dedicated nurse who knows your case, follows your physician&apos;s orders, and picks up the phone when you need them.
              </p>
              <ul className="space-y-4">
                {[
                  'Clinicians arrive within 24 hours of your referral',
                  'Bilingual staff — English and Spanish',
                  'All clinicians licensed, insured, and background-checked',
                  'Coordinated directly with your primary care physician',
                  'Medicare, Medicaid, and most private insurance accepted',
                  'Joint Commission accredited — the gold standard in health care',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-[#1a7a72] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 bg-[#0c2d4e] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#0a2540] transition-colors"
              >
                Our story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#1a7a72] font-bold text-sm uppercase tracking-widest mb-3">Getting Started</p>
            <h2 className="text-4xl font-extrabold text-[#0c2d4e]">Care in three simple steps.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '1', h: 'Call or Request Online', b: 'Reach out by phone or submit our online form. We respond within two hours, any day of the week.' },
              { n: '2', h: 'We Verify Your Insurance', b: 'Our intake team confirms your Medicare, Medicaid, or private insurance coverage — at no cost to you.' },
              { n: '3', h: 'A Clinician Comes to You', b: 'Your nurse or therapist arrives at your door within 24 hours, with a personalized plan of care signed by your physician.' },
            ].map((step) => (
              <div key={step.n} className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="text-7xl font-extrabold text-gray-100 leading-none mb-4 select-none">{step.n}</div>
                <h3 className="text-xl font-bold text-[#0c2d4e] mb-3">{step.h}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[#1a7a72] font-bold text-sm uppercase tracking-widest mb-3">Patient Stories</p>
            <h2 className="text-4xl font-extrabold text-[#0c2d4e]">Heard from the people we serve.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#faf9f6] rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-800 leading-relaxed mb-8 text-base">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow">
                    <Image src={t.photo} alt={t.name} fill className="object-cover" unoptimized />
                  </div>
                  <div>
                    <p className="font-bold text-[#0c2d4e]">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0c2d4e]" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #1a7a72 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Ready to get care started?
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Our coordinators are available around the clock. Call us now or request care online and we will follow up within two hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#1a7a72] text-white px-9 py-4 rounded-full font-bold text-lg hover:bg-[#166b63] transition-colors"
            >
              Request Care Online
            </Link>
            <a
              href="tel:+18325551234"
              className="flex items-center justify-center gap-2 border-2 border-white/40 text-white px-9 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <Phone size={20} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
