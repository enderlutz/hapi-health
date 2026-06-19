'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Printer, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    type: 'patient',
    name: '',
    phone: '',
    email: '',
    patientName: '',
    insurance: '',
    services: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In production, POST to API route
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">Contact Us</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Ready to get started or have questions? Our care coordinators are available 24/7. Reach out by phone, fax, or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+18325551234" className="text-blue-600 hover:underline">(832) 555-1234</a>
                      <p className="text-gray-400 text-xs mt-0.5">Available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <Printer size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Fax</p>
                      <p className="text-gray-700">(832) 555-5678</p>
                      <p className="text-gray-400 text-xs mt-0.5">Secure fax for referrals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@hapihealthtx.com" className="text-blue-600 hover:underline text-sm">info@hapihealthtx.com</a>
                      <p className="text-gray-400 text-xs mt-0.5">General inquiries</p>
                      <a href="mailto:referrals@hapihealthtx.com" className="text-blue-600 hover:underline text-sm block mt-1">referrals@hapihealthtx.com</a>
                      <p className="text-gray-400 text-xs mt-0.5">Physician referrals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Service Area</p>
                      <p className="text-gray-700 text-sm">Houston, TX &amp; surrounding areas</p>
                      <p className="text-gray-400 text-xs mt-0.5">Harris County and beyond</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <Clock size={22} className="text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-blue-700 font-semibold">24/7 on-call nursing available</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">For Emergencies</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For life-threatening emergencies, call <strong>911</strong>. For urgent clinical questions between visits, call our 24/7 nursing line at{' '}
                  <a href="tel:+18325551234" className="text-blue-600 font-semibold">(832) 555-1234</a>.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Message Received!</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out. A member of our care team will contact you within 2 hours during business hours. For urgent needs, please call us directly at <a href="tel:+18325551234" className="text-blue-600 font-semibold">(832) 555-1234</a>.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Care or Ask a Question</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill out the form and we will respond within 2 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">I am a...</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'patient', label: 'Patient / Family' },
                          { value: 'physician', label: 'Physician / Referral' },
                          { value: 'other', label: 'Other' },
                        ].map((opt) => (
                          <label
                            key={opt.value}
                            className={`flex items-center justify-center gap-2 border-2 rounded-xl px-4 py-3 cursor-pointer text-sm font-medium transition-colors ${
                              form.type === opt.value
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-gray-200 text-gray-600 hover:border-blue-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="type"
                              value={opt.value}
                              className="sr-only"
                              onChange={handleChange}
                              checked={form.type === opt.value}
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                        <input
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="(832) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>

                    {form.type !== 'other' && (
                      <>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            {form.type === 'physician' ? 'Patient Name' : 'Name of Patient (if different from above)'}
                          </label>
                          <input
                            name="patientName"
                            type="text"
                            value={form.patientName}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Patient full name"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Insurance Type</label>
                            <select
                              name="insurance"
                              value={form.insurance}
                              onChange={handleChange}
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                            >
                              <option value="">Select insurance</option>
                              <option>Medicare</option>
                              <option>Medicaid</option>
                              <option>Blue Cross Blue Shield</option>
                              <option>United Healthcare</option>
                              <option>Aetna</option>
                              <option>Humana</option>
                              <option>Cigna</option>
                              <option>Private Pay</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Services Needed</label>
                            <select
                              name="services"
                              value={form.services}
                              onChange={handleChange}
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                            >
                              <option value="">Select service</option>
                              <option>Skilled Nursing</option>
                              <option>Physical Therapy</option>
                              <option>Occupational Therapy</option>
                              <option>Speech Therapy</option>
                              <option>Home Health Aide</option>
                              <option>Wound Care</option>
                              <option>Infusion Therapy</option>
                              <option>Multiple Services</option>
                              <option>Not Sure</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Additional Details</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                        placeholder="Tell us about the patient's situation, diagnosis, or any other details that would help us prepare..."
                      />
                    </div>

                    <p className="text-xs text-gray-400">
                      By submitting this form, you agree to our Privacy Policy. We do not share your information. For PHI, please call or fax directly.
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
