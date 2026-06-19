import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'

const CDN = 'https://images.unsplash.com'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={`${CDN}/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=1800&q=80`}
            alt="Home health team"
            fill
            className="object-cover object-center"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a6b]/90 via-[#1b3a6b]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-48">
          <p className="text-red-300 font-bold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-2xl">
            Born from a belief that home is the best place to heal.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#cc1230] font-bold text-sm uppercase tracking-widest mb-4">Who We Are</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1b3a6b] leading-tight mb-7">
                HAPI Health TX is Houston&apos;s home health team.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                We were founded on a simple but powerful idea: when patients recover at home, surrounded by the people they love and the comforts they know, outcomes improve and quality of life soars.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our team of licensed nurses, therapists, and aides serves patients across Harris County and the greater Houston area, partnering with physicians and hospitals to ensure continuity of care after discharge.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a Texas-licensed, Medicare-certified home health agency, we are proud to serve patients of all backgrounds. We are bilingual in English and Spanish and committed to culturally sensitive care for every family we serve.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={`${CDN}/photo-1530026405845-9e2477e68c38?auto=format&fit=crop&w=900&q=80`}
                  alt="Nurse with patient at home"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { v: '15+', l: 'Years in Houston' },
                    { v: '500+', l: 'Families Served' },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="text-2xl font-extrabold text-[#1b3a6b]">{s.v}</p>
                      <p className="text-gray-400 text-xs">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#cc1230] font-bold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-4xl font-extrabold text-[#1b3a6b]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Compassion First', body: 'Every patient is someone\'s mother, father, or child. We care for each person with the same attention and warmth we would want for our own family.' },
              { title: 'Clinical Excellence', body: 'We hold ourselves to the highest standards — following evidence-based protocols and continuously measuring outcomes to ensure we are delivering best-in-class care.' },
              { title: 'Team Collaboration', body: 'Our interdisciplinary team of nurses, therapists, and social workers works together and directly with your physician to ensure truly coordinated care.' },
              { title: 'Radical Accountability', body: 'We are transparent about outcomes, responsive to concerns, and committed to earning the trust of every patient and family we serve — visit after visit.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-extrabold text-[#1b3a6b] mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#1b3a6b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Certifications &amp; Accreditations</h2>
            <p className="text-blue-300">We meet or exceed every state, federal, and accreditation standard.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Medicare Certified', body: 'Certified by CMS to provide skilled home health services covered under Medicare Part A — no deductible, no copay for eligible patients.' },
              { title: 'Medicaid Enrolled', body: 'Texas Medicaid provider, serving low-income patients and those with disabilities under STAR and STAR+PLUS managed care programs.' },
              { title: 'TX HHSC Licensed', body: 'Licensed by the Texas Health & Human Services Commission as a Type A home health agency to provide skilled services statewide.' },
            ].map((c) => (
              <div key={c.title} className="bg-[#162f5a] rounded-2xl p-8 border border-blue-900">
                <CheckCircle size={24} className="text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#cc1230] font-bold text-sm uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-4xl font-extrabold text-[#1b3a6b]">Clinical Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { initials: 'PM', name: 'Patricia Mendez, RN, MSN', title: 'Chief Executive Officer', bio: 'Patricia brings over 20 years of clinical and administrative leadership in home health. She founded HAPI Health TX with a mission to bring hospital-quality care to Houston families.', photo: `${CDN}/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80` },
              { initials: 'DO', name: 'David Okafor, PT, DPT', title: 'Director of Clinical Services', bio: 'A doctoral-level physical therapist with 15 years in home health rehabilitation, David oversees clinical quality, outcomes, and therapist training.', photo: `${CDN}/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80` },
              { initials: 'ST', name: 'Sandra Tran, LMSW', title: 'Director of Patient Services', bio: 'Sandra leads intake, care coordination, and social work services, ensuring every patient transitions smoothly from hospital to home.', photo: `${CDN}/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=200&q=80` },
              { initials: 'JH', name: 'James Holloway, RN, CWCN', title: 'Wound Care Coordinator', bio: 'A certified wound care nurse with specialized training in complex wound management, James leads our wound care program and trains our nursing staff.', photo: `${CDN}/photo-1593100126453-19b562a800c1?auto=format&fit=crop&w=200&q=80` },
            ].map((l) => (
              <div key={l.name} className="flex gap-6 bg-[#f8f7f4] rounded-2xl p-8 border border-gray-100">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow">
                  <Image src={l.photo} alt={l.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#1b3a6b]">{l.name}</h3>
                  <p className="text-[#cc1230] font-semibold text-sm mb-2">{l.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#f8f7f4] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#1b3a6b] mb-3">Ready to work with our team?</h2>
          <p className="text-gray-500 mb-8">We would love to answer your questions and get care started for you or your loved one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#1b3a6b] text-white px-8 py-4 rounded-full font-bold hover:bg-[#142d55] transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
            <a href="tel:+18325551234" className="border-2 border-[#1b3a6b] text-[#1b3a6b] px-8 py-4 rounded-full font-semibold hover:bg-[#1b3a6b]/5 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
