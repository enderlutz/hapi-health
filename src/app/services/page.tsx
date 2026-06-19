import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'

const CDN = 'https://images.unsplash.com'

const services = [
  {
    id: 'skilled-nursing',
    title: 'Skilled Nursing',
    photo: `${CDN}/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80`,
    headline: 'Hospital-quality nursing. At home.',
    desc: 'Our licensed RNs and LVNs deliver the full scope of skilled nursing care in the comfort of your home — from complex wound management to IV therapy and chronic disease monitoring.',
    includes: [
      'Medication administration & management',
      'IV therapy & infusion care',
      'Post-surgical wound assessment',
      'Vital signs monitoring',
      'Diabetes & CHF management',
      'Catheter care',
      'Pain management',
      'Fall risk assessment',
    ],
  },
  {
    id: 'physical-therapy',
    title: 'Physical Therapy',
    photo: `${CDN}/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80`,
    headline: 'Move better. Live better.',
    desc: 'Our licensed physical therapists come to your home and design individualized treatment plans to restore strength, balance, and mobility — whether you are recovering from surgery, a stroke, or injury.',
    includes: [
      'Gait training & fall prevention',
      'Post-surgical rehabilitation',
      'Strength & range of motion',
      'Balance & coordination',
      'Pain management techniques',
      'Home safety evaluation',
      'Assistive device training',
      'Orthopedic & neuro rehab',
    ],
  },
  {
    id: 'occupational-therapy',
    title: 'Occupational Therapy',
    photo: `${CDN}/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80`,
    headline: 'Back to the life you love.',
    desc: 'Our occupational therapists help patients regain independence in the activities of daily life — bathing, dressing, cooking, and more — through adaptive techniques and home assessments.',
    includes: [
      'ADL training',
      'Fine motor rehabilitation',
      'Adaptive equipment training',
      'Home modification recommendations',
      'Cognitive rehabilitation',
      'Energy conservation',
      'Upper extremity strengthening',
      'Transfer & positioning',
    ],
  },
  {
    id: 'speech-therapy',
    title: 'Speech Therapy',
    photo: `${CDN}/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80`,
    headline: 'Find your voice again.',
    desc: 'Our speech-language pathologists evaluate and treat disorders of speech, language, voice, and swallowing — with a focus on patients recovering from stroke, head/neck surgery, or neurological conditions.',
    includes: [
      'Dysphagia treatment',
      'Aphasia & language rehab',
      'Voice disorder treatment',
      'Cognitive-communication therapy',
      'AAC device support',
      'Stuttering treatment',
      'Post-stroke communication',
      'Memory & cognitive strategies',
    ],
  },
  {
    id: 'home-health-aide',
    title: 'Home Health Aide',
    photo: `${CDN}/photo-1530026405845-9e2477e68c38?auto=format&fit=crop&w=900&q=80`,
    headline: 'Compassionate hands-on care.',
    desc: 'Our certified home health aides provide personal care and daily assistance under RN supervision. Every aide is background-checked, trained, and matched to your needs.',
    includes: [
      'Bathing & personal hygiene',
      'Dressing assistance',
      'Mobility support',
      'Meal preparation',
      'Light housekeeping',
      'Medication reminders',
      'Vital sign recording',
      'Companion care',
    ],
  },
  {
    id: 'social-work',
    title: 'Medical Social Work',
    photo: `${CDN}/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=900&q=80`,
    headline: 'You are not in this alone.',
    desc: 'Our licensed medical social workers help patients and families navigate the emotional and practical challenges of illness, connecting you to resources and advocates who can help.',
    includes: [
      'Community resource navigation',
      'Financial assistance guidance',
      'Discharge planning support',
      'Caregiver counseling',
      'Crisis intervention',
      'Long-term care planning',
      'Mental health assessment',
      'Advance directive education',
    ],
  },
  {
    id: 'wound-care',
    title: 'Wound Care',
    photo: `${CDN}/photo-1584820927498-4e5f9c8b83b0?auto=format&fit=crop&w=900&q=80`,
    headline: 'Expert wound management at home.',
    desc: 'Our wound-care certified nurses provide advanced assessment and management of acute and chronic wounds — following evidence-based protocols to promote healing and prevent complications.',
    includes: [
      'Surgical wound care',
      'Pressure injury treatment',
      'Diabetic wound management',
      'Venous & arterial ulcer care',
      'Debridement & dressing changes',
      'Negative pressure wound therapy',
      'Wound measurement & documentation',
      'Family wound care education',
    ],
  },
  {
    id: 'infusion-therapy',
    title: 'Infusion Therapy',
    photo: `${CDN}/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80`,
    headline: 'IV care without leaving home.',
    desc: 'Our skilled nurses administer a wide range of intravenous medications in your home — a safe, effective alternative to hospital infusion clinic visits.',
    includes: [
      'IV antibiotic therapy',
      'IV hydration',
      'Chemotherapy support',
      'Pain management infusions',
      'PICC line care & maintenance',
      'Port-a-cath access & care',
      'TPN administration',
      'Blood draws & lab coordination',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0c2d4e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-teal-300 font-bold text-sm uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Everything you need.<br />All at home.
            </h1>
            <p className="text-blue-200 text-xl leading-relaxed">
              A full spectrum of skilled clinical services, coordinated with your physician and delivered by licensed, background-checked professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <nav className="bg-white border-b sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4 text-sm font-semibold">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-gray-500 hover:text-[#0c2d4e] whitespace-nowrap transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Services */}
      <section className="py-12 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Photo */}
              <div className="lg:w-2/5 relative min-h-[300px]">
                <Image
                  src={s.photo}
                  alt={s.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#0c2d4e]/40" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">{s.title}</p>
                  <p className="text-white text-2xl font-extrabold leading-tight">{s.headline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/5 p-8 lg:p-12">
                <p className="text-gray-600 leading-relaxed mb-8">{s.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {s.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-[#1a7a72] mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#0c2d4e] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#0a2540] transition-colors"
                >
                  Request This Service <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#0c2d4e] mb-3">We Accept Most Insurance Plans</h2>
          <p className="text-gray-500 mb-10">We verify your benefits at no cost before care begins.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Medicare', 'Medicaid', 'Blue Cross', 'United', 'Aetna', 'Humana', 'Cigna', 'Private Pay'].map((ins) => (
              <div key={ins} className="bg-[#faf9f6] border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-700">
                {ins}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#0c2d4e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Questions about a specific service?</h2>
          <p className="text-blue-200 mb-8">Our clinical team will walk you through every option.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#1a7a72] text-white px-8 py-4 rounded-full font-bold hover:bg-[#166b63] transition-colors">
              Request Care
            </Link>
            <a href="tel:+18325551234" className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
