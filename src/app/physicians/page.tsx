import Link from 'next/link'
import { ClipboardList, Phone, CheckCircle, ArrowRight, Printer, Mail, Clock } from 'lucide-react'

export default function PhysiciansPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">Physician Resources</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">For Physicians & Referral Sources</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Fast, reliable home health services your patients can trust. We communicate proactively, follow the plan of care, and keep you informed.
            </p>
          </div>
        </div>
      </section>

      {/* Why refer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Why Refer to HAPI Health TX</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                A Home Health Partner You Can Rely On
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                When you refer a patient to HAPI Health TX, you are not just handing off care, you are extending your practice into the home. We operate as a seamless extension of your clinical team.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Rapid start of care', desc: 'We initiate services within 24-48 hours of receiving a referral.' },
                  { title: 'Clear communication', desc: 'You receive visit notes, OASIS summaries, and urgent change-in-condition alerts.' },
                  { title: 'Adherence to your plan', desc: 'We follow your orders and escalate to you when the patient\'s condition changes.' },
                  { title: 'Reduced readmissions', desc: 'Our monitoring and education programs help keep patients out of the hospital.' },
                  { title: 'Streamlined documentation', desc: 'We handle all CMS documentation and can integrate with major EHR systems.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <CheckCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">{item.title} </span>
                      <span className="text-gray-500 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-700 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Send a Referral Now</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Call, fax, or email your referral. Our intake team responds within 2 hours during business hours.
                </p>
                <div className="space-y-4">
                  <a href="tel:+18325551234" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                    <Phone size={18} className="text-blue-300" />
                    <div>
                      <p className="font-bold">(832) 555-1234</p>
                      <p className="text-blue-200 text-xs">Clinical intake line</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <Printer size={18} className="text-blue-300" />
                    <div>
                      <p className="font-bold">(832) 555-5678</p>
                      <p className="text-blue-200 text-xs">Secure fax</p>
                    </div>
                  </div>
                  <a href="mailto:referrals@hapihealthtx.com" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                    <Mail size={18} className="text-blue-300" />
                    <div>
                      <p className="font-bold">referrals@hapihealthtx.com</p>
                      <p className="text-blue-200 text-xs">HIPAA-secure email</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <Clock size={24} className="text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Response Guarantee</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We acknowledge every referral within 2 hours. Intake nurses are available Monday through Friday, 8am to 6pm. After-hours referrals are processed the next business morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we need for referral */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Referral Checklist</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Information Needed for Referral</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              A complete referral helps us start care faster. Below is a checklist of what we typically need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Patient Information',
                items: ['Full legal name and date of birth', 'Address and phone number', 'Emergency contact', 'Primary language', 'Insurance information and ID numbers'],
              },
              {
                title: 'Clinical Information',
                items: ['Primary and secondary diagnoses (ICD-10)', 'Physician orders for home health', 'Current medications', 'Recent labs or relevant test results', 'Functional limitations / homebound status documentation'],
              },
              {
                title: 'Discharge / Plan Info',
                items: ['Anticipated or actual discharge date', 'Hospital discharge summary (if applicable)', 'Goals of care and anticipated duration', 'Specific services ordered (RN, PT, OT, SLP, SW, HHA)', 'Wound care orders if applicable'],
              },
            ].map((col) => (
              <div key={col.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <ClipboardList size={28} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle size={14} className="text-blue-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Missing some information? Call us anyway. We can often begin the intake process with partial information and gather the rest.
          </p>
        </div>
      </section>

      {/* Services we offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Services Available for Your Patients</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Skilled Nursing (RN/LVN)',
              'Physical Therapy',
              'Occupational Therapy',
              'Speech-Language Pathology',
              'Home Health Aide',
              'Medical Social Work',
              'IV / Infusion Therapy',
              'Wound Care (CWCN)',
              'Diabetes Education',
              'Cardiac Monitoring',
              'Fall Prevention',
              'Medication Management',
              'Post-Surgical Care',
              'Pain Management',
              'CHF / COPD Management',
              'Orthopedic Rehab',
            ].map((svc) => (
              <div key={svc} className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                <CheckCircle size={14} className="text-blue-600 shrink-0" />
                <span className="text-gray-700 text-sm">{svc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Refer Your First Patient?</h2>
          <p className="text-blue-200 mb-8">We make it easy. Call, fax, or fill out our online referral form.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Submit Referral Online <ArrowRight size={16} />
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
