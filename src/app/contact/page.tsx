'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    type: 'patient', name: '', phone: '', email: '',
    patientName: '', insurance: '', services: [] as string[], message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function toggleService(svc: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(svc)
        ? f.services.filter((s) => s !== svc)
        : [...f.services, svc],
    }))
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const serviceOptions = [
    'Skilled Nursing', 'Physical Therapy', 'Occupational Therapy',
    'Speech Therapy', 'Home Health Aide', 'Wound Care',
    'Infusion Therapy', 'Not Sure',
  ]

  const inputCls = 'w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy bg-white'

  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <span className="kicker mb-5" style={{ color: '#fff' }}>Get in touch</span>
          <h1 className="text-4xl lg:text-6xl leading-[1.05] mb-5 max-w-2xl">Let&apos;s talk about care.</h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-xl">
            Ready to start, or just have questions? Our coordinators answer around the clock. Call us, or send the form and we will follow up within two hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info — plain, no icon tiles */}
          <div className="space-y-10">
            <div className="space-y-7">
              <div>
                <p className="kicker mb-3">By phone</p>
                <a href="tel:+18325551234" className="font-display text-3xl text-navy hover:text-brand-red transition-colors">(832) 555-1234</a>
                <p className="text-gray-500 text-sm mt-1">On-call nursing, 24 hours a day</p>
              </div>
              <div>
                <p className="kicker mb-3">By email</p>
                <a href="mailto:info@hapihealthtx.com" className="text-navy font-semibold hover:text-brand-red transition-colors block">info@hapihealthtx.com</a>
                <a href="mailto:referrals@hapihealthtx.com" className="text-navy font-semibold hover:text-brand-red transition-colors block mt-1">referrals@hapihealthtx.com</a>
                <p className="text-gray-500 text-sm mt-1">General &amp; physician referrals</p>
              </div>
              <div>
                <p className="kicker mb-3">By fax</p>
                <p className="text-navy font-semibold">(832) 555-5678</p>
                <p className="text-gray-500 text-sm mt-1">Secure fax for referrals</p>
              </div>
              <div>
                <p className="kicker mb-3">Office</p>
                <p className="text-navy font-semibold leading-relaxed">9000 Westheimer Rd, Suite 200<br />Houston, TX 77063</p>
                <p className="text-gray-500 text-sm mt-2">Mon–Fri 8am–6pm&nbsp;·&nbsp;Sat 9am–2pm</p>
              </div>
            </div>

            <div className="border-l-2 border-brand-red pl-5">
              <h3 className="font-semibold text-navy mb-1">In an emergency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For anything life-threatening, call <strong>911</strong>. For urgent clinical questions between visits, call our nursing line at{' '}
                <a href="tel:+18325551234" className="text-navy font-semibold">(832) 555-1234</a>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-gray-200 p-12">
                <p className="kicker mb-4">Message received</p>
                <h2 className="text-3xl text-navy mb-3">Thank you for reaching out.</h2>
                <p className="text-gray-600 max-w-md leading-relaxed">
                  A member of our care team will contact you within two hours during business hours. For anything urgent, call us directly at{' '}
                  <a href="tel:+18325551234" className="text-navy font-semibold">(832) 555-1234</a>.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 p-8 md:p-10">
                <h2 className="text-2xl text-navy mb-2">Request care or ask a question</h2>
                <p className="text-gray-500 text-sm mb-8">We respond within two hours during business hours.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">I am a…</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'patient', label: 'Patient / Family' },
                        { value: 'physician', label: 'Physician' },
                        { value: 'other', label: 'Other' },
                      ].map((opt) => (
                        <label key={opt.value} className={`flex items-center justify-center text-center border rounded-md px-3 py-3 cursor-pointer text-sm font-medium transition-colors ${
                          form.type === opt.value ? 'border-navy bg-navy text-white' : 'border-gray-300 text-gray-600 hover:border-navy'
                        }`}>
                          <input type="radio" name="type" value={opt.value} className="sr-only" onChange={handleChange} checked={form.type === opt.value} />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your name *</label>
                      <input name="name" type="text" required value={form.name} onChange={handleChange} className={inputCls} placeholder="Full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone number *</label>
                      <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputCls} placeholder="(832) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className={inputCls} placeholder="you@example.com" />
                  </div>

                  {form.type !== 'other' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          {form.type === 'physician' ? 'Patient name' : 'Patient name (if not you)'}
                        </label>
                        <input name="patientName" type="text" value={form.patientName} onChange={handleChange} className={inputCls} placeholder="Patient full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Insurance</label>
                        <select name="insurance" value={form.insurance} onChange={handleChange} className={inputCls}>
                          <option value="">Select insurance</option>
                          <option>Medicare</option><option>Medicaid</option><option>Blue Cross Blue Shield</option>
                          <option>United Healthcare</option><option>Aetna</option><option>Humana</option>
                          <option>Cigna</option><option>Private Pay</option><option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Services needed <span className="font-normal text-gray-400">(select all that apply)</span>
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {serviceOptions.map((svc) => {
                            const active = form.services.includes(svc)
                            return (
                              <button
                                key={svc}
                                type="button"
                                onClick={() => toggleService(svc)}
                                aria-pressed={active}
                                className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                                  active ? 'border-navy bg-navy text-white' : 'border-gray-300 text-gray-600 hover:border-navy'
                                }`}
                              >
                                {svc}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Anything else?</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Tell us about the situation, diagnosis, or anything that would help us prepare." />
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    By submitting, you agree to our Privacy Policy. We never share your information. Please do not include protected health information here; call or fax instead.
                  </p>

                  <button type="submit" className="w-full bg-brand-red text-white py-4 rounded-md font-semibold text-lg hover:bg-brand-red-dark transition-colors">
                    Submit request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
