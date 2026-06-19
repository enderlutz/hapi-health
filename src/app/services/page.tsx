import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

const services = [
  {
    id: 'skilled-nursing', title: 'Skilled Nursing',
    photo: `https://images.pexels.com/photos/7345459/pexels-photo-7345459.jpeg?auto=compress&cs=tinysrgb&w=900`,
    headline: 'Hospital-grade nursing, at the kitchen table.',
    desc: 'Our RNs and LVNs deliver the full scope of skilled nursing at home, from complex wound management to IV therapy and chronic-disease care.',
    includes: ['Medication management', 'IV therapy & infusion', 'Post-surgical wound assessment', 'Vital-sign monitoring', 'Diabetes & CHF management', 'Catheter care', 'Pain management', 'Fall-risk assessment'],
  },
  {
    id: 'physical-therapy', title: 'Physical Therapy',
    photo: `https://images.pexels.com/photos/7551627/pexels-photo-7551627.jpeg?auto=compress&cs=tinysrgb&w=900`,
    headline: 'Get moving again, on your own floor.',
    desc: 'Licensed physical therapists build a plan around your home and your goals, whether you are recovering from surgery, a stroke, or a fall.',
    includes: ['Gait training & fall prevention', 'Post-surgical rehab', 'Strength & range of motion', 'Balance & coordination', 'Pain-management techniques', 'Home-safety evaluation', 'Assistive-device training', 'Orthopedic & neuro rehab'],
  },
  {
    id: 'occupational-therapy', title: 'Occupational Therapy',
    photo: `https://images.pexels.com/photos/29372729/pexels-photo-29372729.jpeg?auto=compress&cs=tinysrgb&w=900`,
    headline: 'Back to the routines that make a day yours.',
    desc: 'Occupational therapists help you regain independence in daily life, from dressing and cooking to navigating your own home safely.',
    includes: ['Activities of daily living', 'Fine-motor rehab', 'Adaptive-equipment training', 'Home-modification advice', 'Cognitive rehab', 'Energy conservation', 'Upper-extremity strengthening', 'Transfer & positioning'],
  },
  {
    id: 'speech-therapy', title: 'Speech Therapy',
    photo: `https://images.pexels.com/photos/18429374/pexels-photo-18429374.jpeg?auto=compress&cs=tinysrgb&w=900`,
    headline: 'Find the words, and the swallow, again.',
    desc: 'Speech-language pathologists treat speech, language, voice, and swallowing disorders, with a focus on recovery from stroke and neurological conditions.',
    includes: ['Dysphagia (swallowing) therapy', 'Aphasia & language rehab', 'Voice-disorder treatment', 'Cognitive-communication therapy', 'Communication devices', 'Post-stroke recovery', 'Memory strategies', 'Caregiver coaching'],
  },
  {
    id: 'home-health-aide', title: 'Home Health Aide',
    photo: `https://images.pexels.com/photos/18459193/pexels-photo-18459193.jpeg?auto=compress&cs=tinysrgb&w=900`,
    headline: 'A steady, familiar hand each day.',
    desc: 'Certified aides provide personal care and daily support under RN supervision. Every aide is background-checked, trained, and matched to your needs.',
    includes: ['Bathing & hygiene', 'Dressing assistance', 'Mobility support', 'Meal preparation', 'Light housekeeping', 'Medication reminders', 'Vital-sign recording', 'Companionship'],
  },
  {
    id: 'social-work', title: 'Medical Social Work',
    photo: `https://images.pexels.com/photos/7345460/pexels-photo-7345460.jpeg?auto=compress&cs=tinysrgb&w=900`,
    headline: 'Someone in your corner for the hard parts.',
    desc: 'Licensed social workers help patients and families navigate the practical and emotional side of illness, connecting you with the resources you need.',
    includes: ['Community-resource navigation', 'Financial-assistance guidance', 'Discharge-planning support', 'Caregiver counseling', 'Crisis intervention', 'Long-term-care planning', 'Mental-health assessment', 'Advance-directive education'],
  },
  {
    id: 'wound-care', title: 'Wound Care',
    photo: `https://images.pexels.com/photos/5721552/pexels-photo-5721552.jpeg?auto=compress&cs=tinysrgb&w=900`,
    headline: 'Difficult wounds, managed by specialists.',
    desc: 'Wound-care certified nurses assess and manage acute and chronic wounds using evidence-based protocols to promote healing and prevent complications.',
    includes: ['Surgical wound care', 'Pressure-injury treatment', 'Diabetic-wound management', 'Venous & arterial ulcers', 'Debridement & dressings', 'Negative-pressure therapy', 'Wound documentation', 'Family wound education'],
  },
  {
    id: 'infusion-therapy', title: 'Infusion Therapy',
    photo: `https://images.pexels.com/photos/3845115/pexels-photo-3845115.jpeg?auto=compress&cs=tinysrgb&w=900`,
    headline: 'IV medication without the clinic trip.',
    desc: 'Skilled nurses administer a wide range of intravenous medications at home, a safe and convenient alternative to the infusion clinic.',
    includes: ['IV antibiotics', 'IV hydration', 'Chemotherapy support', 'Pain-management infusions', 'PICC-line care', 'Port-a-cath access', 'TPN administration', 'Blood draws & lab coordination'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="kicker mb-5" style={{ color: '#fff' }}>What we do</span>
            <h1 className="text-4xl lg:text-6xl leading-[1.05] mb-5">Everything you need, all at home.</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              A full range of skilled clinical care, coordinated with your physician and delivered by licensed, background-checked professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-[113px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-7 overflow-x-auto py-4 text-sm font-medium">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-gray-500 hover:text-navy whitespace-nowrap transition-colors">{s.title}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Service blocks — alternating photo side */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-40 ${i % 2 === 1 ? 'bg-paper' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative h-[340px] lg:h-[420px]">
                <Image src={s.photo} alt={s.title} fill className="object-cover object-center" unoptimized />
              </div>
            </div>
            <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <p className="kicker mb-4">{s.title}</p>
              <h2 className="text-3xl lg:text-4xl text-navy leading-tight mb-5">{s.headline}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-xl">{s.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0 max-w-xl mb-8">
                {s.includes.map((item) => (
                  <p key={item} className="flex gap-3 text-gray-700 text-sm border-b border-gray-200/70 py-2.5">
                    <span className="text-brand-red font-semibold shrink-0">—</span>{item}
                  </p>
                ))}
              </div>
              <Link href="/contact" className="text-navy font-semibold hover:text-brand-red transition-colors">Request this service →</Link>
            </div>
          </div>
        </section>
      ))}

      {/* Insurance — plain, left aligned, navy */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="kicker mb-4" style={{ color: '#fff' }}>Coverage</span>
            <h2 className="text-3xl lg:text-4xl leading-tight">We take most insurance, and we check it for free.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-x-1 gap-y-3 text-white/85">
              {['Medicare', 'Medicaid', 'Blue Cross Blue Shield', 'United Healthcare', 'Aetna', 'Humana', 'Cigna', 'Private Pay'].map((ins, idx, arr) => (
                <span key={ins} className="text-lg">
                  {ins}{idx < arr.length - 1 && <span className="text-brand-red mx-2.5">·</span>}
                </span>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-6 max-w-md">
              We verify your specific benefits before the first visit, so you know exactly what is covered with no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-3xl lg:text-4xl text-navy leading-tight max-w-lg">Not sure which service you need?</h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="bg-brand-red text-white px-8 py-4 rounded-md font-semibold hover:bg-brand-red-dark transition-colors text-center">Request Care</Link>
            <a href="tel:+18325551234" className="flex items-center justify-center gap-2.5 border border-navy text-navy px-8 py-4 rounded-md font-medium hover:bg-navy/5 transition-colors">
              <Phone size={18} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
