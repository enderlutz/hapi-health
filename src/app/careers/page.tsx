'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Mail, ArrowRight, X } from 'lucide-react'

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
  // null = closed; '' = general application; otherwise the job title
  const [applyFor, setApplyFor] = useState<string | null>(null)

  return (
    <>
      {/* Photo header */}
      <section className="relative min-h-[58vh] flex items-end">
        <div className="absolute inset-0">
          <Image src="https://images.pexels.com/photos/7345476/pexels-photo-7345476.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="A home health clinician at work" fill className="object-cover object-center" unoptimized />
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

      {/* Culture */}
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

      {/* Benefits */}
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

      {/* Openings */}
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
                  <button
                    onClick={() => setApplyFor(job.title)}
                    className="text-navy font-semibold text-sm inline-flex items-center gap-1.5 hover:text-brand-red transition-colors whitespace-nowrap"
                  >
                    Apply <ArrowRight size={14} />
                  </button>
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
            <p className="text-white/75">We are always growing. Send us a general application and we will reach out when something fits.</p>
          </div>
          <button onClick={() => setApplyFor('')} className="inline-flex items-center gap-2.5 bg-brand-red text-white px-8 py-4 rounded-md font-semibold hover:bg-brand-red-dark transition-colors shrink-0">
            <Mail size={18} /> Submit a general application
          </button>
        </div>
      </section>

      {applyFor !== null && (
        <ApplicationModal position={applyFor} positions={openings.map((o) => o.title)} onClose={() => setApplyFor(null)} />
      )}
    </>
  )
}

function ApplicationModal({
  position,
  positions,
  onClose,
}: {
  position: string
  positions: string[]
  onClose: () => void
}) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    position: position || '',
    license: '', experience: '', availability: '', resume: '', message: '',
  })

  // Close on Escape and lock body scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls = 'w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy bg-white'

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start md:items-center justify-center p-4 md:p-6 overflow-y-auto bg-navy-dark/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl my-4 md:my-0 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-7 py-6 border-b border-gray-200">
          <div>
            <p className="kicker mb-2">Apply to HAPI</p>
            <h2 className="text-2xl text-navy font-display leading-tight">
              {position ? position : 'General application'}
            </h2>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-navy transition-colors p-1 shrink-0">
            <X size={22} />
          </button>
        </div>

        {submitted ? (
          <div className="px-7 py-12 text-center">
            <h3 className="text-2xl text-navy font-display mb-3">Application received.</h3>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you for applying{position ? ` for ${position}` : ''}. Our team reviews every application and will reach out within a few business days if it is a fit.
            </p>
            <button onClick={onClose} className="mt-8 bg-navy text-white px-7 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full name *</label>
                <input name="name" required value={form.name} onChange={handleChange} className={inputCls} placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone *</label>
                <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputCls} placeholder="(832) 000-0000" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputCls} placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Position *</label>
                <select name="position" required value={form.position} onChange={handleChange} className={inputCls}>
                  <option value="">Select a position</option>
                  {positions.map((p) => <option key={p}>{p}</option>)}
                  <option>Other / General</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">License / credentials</label>
                <input name="license" value={form.license} onChange={handleChange} className={inputCls} placeholder="e.g. TX RN #1234567" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Years of experience</label>
                <select name="experience" value={form.experience} onChange={handleChange} className={inputCls}>
                  <option value="">Select</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5–10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Availability</label>
                <select name="availability" value={form.availability} onChange={handleChange} className={inputCls}>
                  <option value="">Select</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>PRN / Per visit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Resume link</label>
                <input name="resume" value={form.resume} onChange={handleChange} className={inputCls} placeholder="Link to resume or LinkedIn" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Why HAPI? (optional)</label>
              <textarea name="message" rows={3} value={form.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Tell us a little about yourself and what you are looking for." />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              By applying, you agree to our Privacy Policy. To email a resume file directly, write to{' '}
              <a href="mailto:careers@hapihealthtx.com" className="text-navy font-semibold">careers@hapihealthtx.com</a>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button type="submit" className="flex-1 bg-brand-red text-white py-3.5 rounded-md font-semibold hover:bg-brand-red-dark transition-colors">
                Submit application
              </button>
              <button type="button" onClick={onClose} className="px-6 py-3.5 rounded-md font-semibold text-gray-600 border border-gray-300 hover:border-navy hover:text-navy transition-colors">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
