import Link from 'next/link'
import { Stethoscope, Activity, Heart, Brain, Home, Users, Shield, Droplets, CheckCircle, ArrowRight, Phone } from 'lucide-react'

const services = [
  {
    id: 'skilled-nursing',
    icon: Stethoscope,
    title: 'Skilled Nursing',
    subtitle: 'Expert clinical care delivered at home by registered nurses',
    desc: 'Our registered nurses (RNs) and licensed vocational nurses (LVNs) provide hospital-level care in the comfort of your home. We specialize in post-surgical care, chronic disease management, and complex medication regimens.',
    includes: [
      'Medication administration and management',
      'IV therapy and infusion care',
      'Post-surgical wound assessment',
      'Vital signs monitoring',
      'Chronic disease education (diabetes, COPD, CHF)',
      'Catheter care and management',
      'Pain management',
      'Fall risk assessment',
    ],
  },
  {
    id: 'physical-therapy',
    icon: Activity,
    title: 'Physical Therapy',
    subtitle: 'Restore strength, balance, and mobility',
    desc: 'Our licensed physical therapists design individualized treatment plans to help patients regain function, reduce pain, and return to their daily activities. We treat patients recovering from surgery, injury, or illness.',
    includes: [
      'Gait training and fall prevention',
      'Post-surgical rehabilitation',
      'Strength and range of motion exercises',
      'Balance and coordination training',
      'Pain management techniques',
      'Home safety evaluation',
      'Assistive device training (walker, cane)',
      'Orthopedic and neurological rehab',
    ],
  },
  {
    id: 'occupational-therapy',
    icon: Heart,
    title: 'Occupational Therapy',
    subtitle: 'Regain independence in daily life',
    desc: 'Our occupational therapists help patients regain the ability to perform everyday activities independently. We assess the home environment, recommend adaptive equipment, and teach compensatory strategies.',
    includes: [
      'Activities of daily living (ADL) training',
      'Fine motor skill rehabilitation',
      'Adaptive equipment training',
      'Home modification recommendations',
      'Cognitive rehabilitation',
      'Energy conservation strategies',
      'Upper extremity strengthening',
      'Transfer and positioning techniques',
    ],
  },
  {
    id: 'speech-therapy',
    icon: Brain,
    title: 'Speech Therapy',
    subtitle: 'Restore communication and swallowing function',
    desc: 'Our speech-language pathologists evaluate and treat disorders of speech, language, voice, and swallowing. We work with patients recovering from stroke, head and neck surgery, or neurological conditions.',
    includes: [
      'Dysphagia (swallowing disorder) treatment',
      'Aphasia and language rehabilitation',
      'Voice disorder treatment',
      'Cognitive-communication therapy',
      'Augmentative communication devices',
      'Stuttering treatment',
      'Post-stroke communication rehab',
      'Memory and cognitive strategies',
    ],
  },
  {
    id: 'home-health-aide',
    icon: Home,
    title: 'Home Health Aide',
    subtitle: 'Compassionate personal care assistance',
    desc: 'Our certified home health aides (CHHAs) provide personal care and assistance with daily living activities under the supervision of a registered nurse. Aides are background-checked, trained, and compassionate.',
    includes: [
      'Bathing, grooming, and hygiene',
      'Dressing and undressing assistance',
      'Ambulation and mobility support',
      'Meal preparation',
      'Light housekeeping',
      'Medication reminders',
      'Vital sign recording',
      'Companion and emotional support',
    ],
  },
  {
    id: 'social-work',
    icon: Users,
    title: 'Medical Social Work',
    subtitle: 'Connecting patients and families to the resources they need',
    desc: 'Our licensed medical social workers (LMSWs) provide counseling, resource navigation, and care coordination. We help patients and families cope with the emotional and practical challenges of illness and recovery.',
    includes: [
      'Community resource identification',
      'Financial assistance navigation',
      'Discharge planning support',
      'Caregiver counseling and education',
      'Crisis intervention',
      'Long-term care planning',
      'Mental health assessment',
      'Advance directive education',
    ],
  },
  {
    id: 'wound-care',
    icon: Shield,
    title: 'Wound Care',
    subtitle: 'Specialized treatment for complex wounds',
    desc: 'Our wound care certified nurses provide advanced assessment and management of acute and chronic wounds. We follow evidence-based protocols to promote healing and prevent infection or complications.',
    includes: [
      'Surgical wound care',
      'Pressure injury (bed sore) treatment',
      'Diabetic wound management',
      'Venous and arterial ulcer care',
      'Debridement and dressing changes',
      'Negative pressure wound therapy',
      'Wound measurement and documentation',
      'Family wound care education',
    ],
  },
  {
    id: 'infusion-therapy',
    icon: Droplets,
    title: 'Infusion Therapy',
    subtitle: 'IV medications safely administered at home',
    desc: 'Our skilled nurses administer a wide range of intravenous medications at home, providing a safe and convenient alternative to hospital or infusion clinic visits.',
    includes: [
      'IV antibiotic therapy',
      'IV hydration',
      'Chemotherapy support',
      'Pain management infusions',
      'PICC line care and maintenance',
      'Port-a-cath access and care',
      'Total parenteral nutrition (TPN)',
      'Blood draws and lab coordination',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">Home Health Services</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              A full continuum of skilled clinical services delivered by licensed professionals, right in your home. We coordinate seamlessly with your physician to support safe recovery and long-term health.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4 text-sm font-medium scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-gray-500 hover:text-blue-700 whitespace-nowrap transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:w-2/5 p-10 flex flex-col justify-center ${i % 2 === 0 ? 'bg-blue-700' : 'bg-blue-900'} text-white`}>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                  <s.icon size={28} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-2">{s.title}</h2>
                <p className="text-blue-200 font-medium mb-4">{s.subtitle}</p>
                <p className="text-blue-100 leading-relaxed text-sm">{s.desc}</p>
                <Link
                  href="/contact"
                  className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors inline-flex items-center gap-2 w-fit"
                >
                  Request This Service <ArrowRight size={14} />
                </Link>
              </div>
              <div className="lg:w-3/5 bg-white p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We Accept Most Insurance Plans</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Our team verifies your insurance at no cost before care begins, so you know exactly what to expect. We accept Medicare, Medicaid, and most major private insurance plans.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
            {['Medicare', 'Medicaid', 'Blue Cross Blue Shield', 'United Healthcare', 'Aetna', 'Humana', 'Cigna', 'Private Pay'].map((ins) => (
              <div key={ins} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm font-medium text-gray-700">
                {ins}
              </div>
            ))}
          </div>
          <Link
            href="/patients#insurance"
            className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
          >
            Learn more about coverage <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Services?</h2>
          <p className="text-blue-200 mb-8">Our clinical coordinators are available around the clock.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Request Care
            </Link>
            <a href="tel:+18325551234" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
