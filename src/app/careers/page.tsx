import Link from 'next/link'
import { Heart, Award, Clock, Users, CheckCircle, ArrowRight, Mail } from 'lucide-react'

const openings = [
  {
    title: 'Registered Nurse (RN) - Home Health',
    type: 'Full-time / Part-time',
    location: 'Houston & surrounding areas',
    desc: 'Conduct skilled nursing visits, wound care, medication management, and patient education in patients\' homes. Must be TX-licensed RN with at least 1 year of clinical experience.',
  },
  {
    title: 'Licensed Vocational Nurse (LVN) - Home Health',
    type: 'Full-time / Part-time',
    location: 'Houston & surrounding areas',
    desc: 'Perform skilled nursing visits under RN supervision. Ideal for LVNs with 1+ year of acute care or home health experience. TX LVN license required.',
  },
  {
    title: 'Physical Therapist (PT)',
    type: 'Full-time / PRN',
    location: 'Houston & surrounding areas',
    desc: 'Evaluate and treat patients in the home setting to restore mobility and function. TX PT license required. Home health experience preferred.',
  },
  {
    title: 'Occupational Therapist (OT)',
    type: 'Full-time / PRN',
    location: 'Houston & surrounding areas',
    desc: 'Help patients regain independence in daily living activities. TX OT license required. Experience with ADL training and home safety assessment preferred.',
  },
  {
    title: 'Speech-Language Pathologist (SLP)',
    type: 'PRN / Per visit',
    location: 'Houston & surrounding areas',
    desc: 'Evaluate and treat swallowing, speech, and communication disorders in the home setting. TX SLP license and ASHA Certificate of Clinical Competence required.',
  },
  {
    title: 'Certified Home Health Aide (CHHA)',
    type: 'Full-time / Part-time',
    location: 'Houston & surrounding areas',
    desc: 'Provide personal care and support to patients under RN supervision. Must hold current TX CHHA certification and have reliable transportation.',
  },
  {
    title: 'Medical Social Worker (MSW / LMSW)',
    type: 'Part-time / PRN',
    location: 'Houston & surrounding areas',
    desc: 'Conduct psychosocial assessments and connect patients to community resources. TX LMSW license required. Home health or case management experience preferred.',
  },
  {
    title: 'Clinical Intake Coordinator',
    type: 'Full-time',
    location: 'Houston, TX (Office)',
    desc: 'Manage incoming referrals, verify insurance, and coordinate care initiation. Strong knowledge of Medicare home health eligibility required. RN preferred.',
  },
]

const benefits = [
  'Competitive pay and performance bonuses',
  'Flexible scheduling - control your own hours',
  'Medical, dental, and vision insurance',
  '401(k) with employer match',
  'Paid time off and holidays',
  'Mileage reimbursement',
  'Continuing education support',
  'Supportive, mission-driven culture',
]

export default function CareersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">Join Our Team</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">Careers at HAPI Health TX</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Make a meaningful difference every day. We are looking for compassionate, skilled clinicians to join our growing home health family in the Houston area.
            </p>
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Our Culture</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                A Place Where Your Work Matters
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                At HAPI Health TX, our clinicians are the heart of everything we do. We invest in our team with competitive pay, flexible schedules, and a culture of genuine support and recognition.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Working in home health is different. You build real relationships with patients and families. You see the direct impact of your care. And you do it on your own terms, in your own community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Heart, title: 'Mission-Driven', desc: 'Every visit makes a real difference in a patient\'s life.' },
                { icon: Clock, title: 'Flexible Hours', desc: 'Build a schedule that works for your life, not just the agency.' },
                { icon: Award, title: 'Growth Opportunities', desc: 'CEUs, mentorship, and leadership pathways within the agency.' },
                { icon: Users, title: 'Team Support', desc: 'Clinical managers available 24/7 for guidance and backup.' },
              ].map((c) => (
                <div key={c.title} className="bg-blue-50 rounded-2xl p-6">
                  <c.icon size={22} className="text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-gray-500 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Now Hiring</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Open Positions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              We are actively recruiting across clinical disciplines. Do not see your role listed? Send your resume anyway.
            </p>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{job.type}</span>
                      <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">{job.location}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">{job.desc}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-800 transition-colors whitespace-nowrap inline-flex items-center gap-2 shrink-0"
                  >
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Do Not See the Right Fit?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            We are always growing. Send your resume and we will reach out when a position matches your skills.
          </p>
          <a
            href="mailto:careers@hapihealthtx.com"
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            <Mail size={18} /> careers@hapihealthtx.com
          </a>
        </div>
      </section>
    </>
  )
}
