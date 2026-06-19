import Link from 'next/link'
import { Heart, Award, Users, Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    desc: 'Every patient is someone\'s mother, father, or child. We care for each person with the same attention and warmth we would want for our own family.',
  },
  {
    icon: Shield,
    title: 'Clinical Excellence',
    desc: 'We hold ourselves to the highest clinical standards, following evidence-based protocols and continuously improving through outcomes measurement.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Our interdisciplinary team of nurses, therapists, and social workers works together and with your physician to ensure seamless, coordinated care.',
  },
  {
    icon: Award,
    title: 'Accountability',
    desc: 'We are transparent about outcomes, responsive to concerns, and committed to earning the trust of every patient and family we serve.',
  },
]

const leadership = [
  {
    name: 'Patricia Mendez, RN, MSN',
    title: 'Chief Executive Officer',
    bio: 'Patricia brings over 20 years of clinical and administrative leadership in home health. She founded HAPI Health TX with a mission to bring hospital-quality care to Houston families.',
  },
  {
    name: 'David Okafor, PT, DPT',
    title: 'Director of Clinical Services',
    bio: 'A doctoral-level physical therapist with 15 years in home health rehabilitation, David oversees clinical quality, outcomes, and therapist training across the agency.',
  },
  {
    name: 'Sandra Tran, LMSW',
    title: 'Director of Patient Services',
    bio: 'Sandra leads intake, care coordination, and social work services, ensuring every patient has a smooth transition from hospital to home.',
  },
  {
    name: 'James Holloway, RN, CWCN',
    title: 'Wound Care Coordinator',
    bio: 'A certified wound care nurse with specialized training in complex wound management, James leads our wound care program and trains our nursing staff.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">About HAPI Health TX</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Born from a deep belief that every patient deserves dignity, clinical excellence, and warmth, regardless of where they receive their care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Bringing Healing Home to Houston
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                HAPI Health TX was founded on a simple but powerful idea: the best place to heal is home. When patients recover in a familiar, comfortable environment, surrounded by the people they love, outcomes improve and quality of life soars.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We serve patients across Harris County and the greater Houston area, partnering with physicians, hospitals, and skilled nursing facilities to ensure continuity of care after discharge. Our team of licensed clinicians provides the full spectrum of skilled home health services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a Texas-licensed, Medicare-certified home health agency, we are proud to serve patients of all backgrounds and insurance types. We are bilingual in English and Spanish and committed to culturally sensitive care for every family we serve.
              </p>
            </div>
            <div className="bg-blue-50 rounded-3xl p-10">
              <div className="space-y-6">
                {[
                  { label: 'Founded', value: 'Houston, TX' },
                  { label: 'License', value: 'Texas HHSC Licensed' },
                  { label: 'Certification', value: 'Medicare & Medicaid Certified' },
                  { label: 'Accreditation', value: 'Joint Commission Accredited' },
                  { label: 'Service Area', value: 'Harris County & surrounding areas' },
                  { label: 'Languages', value: 'English & Spanish' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-blue-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-blue-700 font-semibold text-sm">{item.label}</span>
                    <span className="text-gray-700 text-sm text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Our Team</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Clinical Leadership</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Our leadership team brings decades of clinical and operational experience in home health, skilled nursing, and rehabilitation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((l) => (
              <div key={l.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{l.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{l.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{l.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Certifications & Accreditations</h2>
            <p className="text-blue-200">We meet or exceed every state, federal, and accreditation standard for home health agencies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Medicare Certified', body: 'Certified by the Centers for Medicare & Medicaid Services (CMS) to provide skilled home health services covered by Medicare Part A.' },
              { title: 'Medicaid Enrolled', body: 'Texas Medicaid provider, ensuring access to care for low-income patients and those with disabilities.' },
              { title: 'Texas HHSC Licensed', body: 'Licensed by the Texas Health & Human Services Commission as a Type A home health agency.' },
            ].map((c) => (
              <div key={c.title} className="bg-blue-800 rounded-2xl p-8 border border-blue-700">
                <CheckCircle size={24} className="text-blue-300 mb-4" />
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience HAPI Health TX?</h2>
          <p className="text-gray-500 mb-8">We would love to answer your questions and help you or your loved one get started.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
            <a href="tel:+18325551234" className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
