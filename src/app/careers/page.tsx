import Link from 'next/link'
import Image from 'next/image'
import { Mail, ArrowRight } from 'lucide-react'

const openings = [
  { title: 'Registered Nurse (RN), Home Health', type: 'Full-time / Part-time', desc: 'Skilled nursing visits, wound care, medication management, and patient teaching in the home. TX RN license and at least one year of clinical experience.' },
  { title: 'Licensed Vocational Nurse (LVN)', type: 'Full-time / Part-time', desc: 'Skilled visits under RN supervision. Ideal for LVNs with a year of acute-care or home-health experience. TX LVN license required.' },
  { title: 'Physical Therapist (PT)', type: 'Full-time / PRN', desc: 'Evaluate and treat in the home to restore mobility and function. TX PT license required; home-health experience preferred.' },
  { title: 'Occupational Therapist (OT)', type: 'Full-time / PRN', desc: 'Help patients regain independence in daily living. TX OT license required; ADL and home-safety experience preferred.' },
  { title: 'Speech-Language Pathologist (SLP)', type: 'PRN / Per visit', desc: 'Treat swallowing, speech, and communication disorders at home. TX SLP license and ASHA CCC required.' },
  { title: 'Certified Home Health Aide (CHHA)', type: 'Full-time / Part-time', desc: 'Personal care and support under RN supervision. Current TX CHHA certification and reliable transportation.' },
  { title: 'Medical Social Worker (LMSW)', type: 'Part-time / PRN', desc: 'Psychosocial assessments and resource navigation. TX LMSW license; home-health or case-management experience preferred.' },
  { title: 'Clinical Intake Coordinator', type: 'Full-time', desc: 'Manage referrals, verify insurance, and coordinate starts of care. Strong Medicare home-health eligibility knowledge; RN preferred.' },
]

export default function CareersPage() {
  return (
    <>
      {/* Photo header */}
      <section className="relative min-h-[58vh] flex items-end">
        <div className="absolute inset-0">
          <Image src={`https://images.pexels.com/photos/7345476/pexels-photo-7345476.jpeg?auto=compress&cs=tinysrgb&w=1800`} alt="A home health clinician at work" fill className="object-cover object-center" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-navy/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-44 w-full">
          <span className="kicker mb-5" style={{ color: '#fff' }}>Careers</span>
          <h1 className="text-4xl lg:text-6xl text-white leading-[1.05] max-w-2xl">
            Do the work that actually feels like the work.
          </h1>
          <p className="text-white/80 text-lg mt-5 max-w-xl">
            No hospital floor, no twelve-hour chaos. Real relationships, your own schedule, and a team that has your back at every visit.
          </p>
        </div>
      </section>

      {/* Culture — editorial split, no icon tiles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl lg:text-4xl text-navy leading-tight mb-6">A place where your work matters</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Our clinicians are the whole company. We back them with competitive pay, schedules that fit a real life, and clinical managers who answer the phone at 9pm when you need a second opinion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Home health is a different kind of nursing. You see the same patients long enough to make a difference, in their kitchens and living rooms, in the neighborhoods you already know.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 self-center">
            {[
              ['It means something', 'Every visit changes a real person\'s day. You will see it on their face.'],
              ['Your own hours', 'Build a schedule around your life, not the other way around.'],
              ['Room to grow', 'CEUs, mentorship, and a path into clinical leadership.'],
              ['Never on an island', 'A clinical manager on call, day or night, for backup and guidance.'],
            ].map(([t, b]) => (
              <div key={t} className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-navy text-lg mb-1.5">{t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — inline prose row, not a checkmark grid */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl text-navy mb-6 font-display">What we offer</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-3 text-gray-700">
            {[
              'Competitive pay & bonuses', 'Flexible scheduling', 'Medical, dental & vision', '401(k) with match',
              'Paid time off & holidays', 'Mileage reimbursement', 'Continuing-education support', 'A team that backs you up',
            ].map((b, i) => (
              <span key={b} className="text-[15px]">
                {b}{i < 7 && <span className="text-brand-red mx-2">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Openings — clean list, no chips */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="kicker mb-5">Now hiring</span>
            <h2 className="text-3xl lg:text-4xl text-navy">Open positions</h2>
          </div>
          <div className="border-t border-gray-200">
            {openings.map((job) => (
              <div key={job.title} className="group border-b border-gray-200 py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-navy group-hover:text-brand-red transition-colors">{job.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{job.desc}</p>
                </div>
                <div className="md:w-1/3 flex items-center justify-between md:justify-end gap-6">
                  <span className="text-sm text-gray-500">{job.type}</span>
                  <Link href="/contact" className="text-navy font-semibold text-sm inline-flex items-center gap-1.5 group-hover:text-brand-red transition-colors whitespace-nowrap">
                    Apply <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-4xl leading-tight mb-3">Don&apos;t see your role?</h2>
            <p className="text-white/75">We are always growing. Send your resume and we will reach out when something fits.</p>
          </div>
          <a href="mailto:careers@hapihealthtx.com" className="inline-flex items-center gap-2.5 bg-brand-red text-white px-8 py-4 rounded-md font-semibold hover:bg-brand-red-dark transition-colors shrink-0">
            <Mail size={18} /> careers@hapihealthtx.com
          </a>
        </div>
      </section>
    </>
  )
}
