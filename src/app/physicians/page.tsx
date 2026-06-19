import Link from 'next/link'
import Image from 'next/image'
import { Phone, Printer, Mail } from 'lucide-react'

const CDN = 'https://images.unsplash.com'

export default function PhysiciansPage() {
  return (
    <>
      {/* Header — solid navy, left aligned, no gradient */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <span className="kicker mb-5" style={{ color: '#fff' }}>For physicians &amp; referral sources</span>
            <h1 className="text-4xl lg:text-6xl leading-[1.05] mb-5">
              Refer with confidence.
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              When you send a patient to HAPI, you are extending your own care into the home. We follow your orders, document thoroughly, and call you the moment something changes.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-white/55 text-sm mb-1">Clinical intake line</p>
            <a href="tel:+18325551234" className="font-display text-3xl text-white hover:text-white/80 transition-colors">(832) 555-1234</a>
          </div>
        </div>
      </section>

      {/* Why refer — text left, referral box right */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl text-navy mb-8">A partner that closes the loop</h2>
            <div className="space-y-7">
              {[
                ['Care starts within 24 to 48 hours', 'We accept the referral, verify benefits, and have a clinician at the bedside fast, often the next day.'],
                ['You stay informed', 'Visit notes, OASIS summaries, and change-in-condition alerts come back to you, not into a void.'],
                ['We follow your plan', 'Your orders are the plan of care. When the patient changes, we escalate to you before it becomes a readmission.'],
                ['Fewer readmissions', 'Disease-specific monitoring and patient education keep your patients out of the emergency department.'],
                ['We handle the paperwork', 'All CMS documentation, signed orders, and face-to-face coordination are managed on our end.'],
              ].map(([title, body]) => (
                <div key={title} className="border-l-2 border-brand-red pl-5">
                  <h3 className="font-semibold text-navy text-lg mb-1">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-navy text-white p-9 sticky top-32">
              <h3 className="text-2xl mb-2 font-display">Send a referral</h3>
              <p className="text-white/70 text-sm mb-7 leading-relaxed">
                Call, fax, or email. Our intake nurses acknowledge every referral within two hours during business hours.
              </p>
              <div className="space-y-5">
                <a href="tel:+18325551234" className="flex items-start gap-4 group">
                  <Phone size={18} className="text-brand-red mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold group-hover:text-white/80 transition-colors">(832) 555-1234</p>
                    <p className="text-white/55 text-xs">Clinical intake line</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <Printer size={18} className="text-brand-red mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">(832) 555-5678</p>
                    <p className="text-white/55 text-xs">Secure fax</p>
                  </div>
                </div>
                <a href="mailto:referrals@hapihealthtx.com" className="flex items-start gap-4 group">
                  <Mail size={18} className="text-brand-red mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold group-hover:text-white/80 transition-colors break-all">referrals@hapihealthtx.com</p>
                    <p className="text-white/55 text-xs">HIPAA-secure email</p>
                  </div>
                </a>
              </div>
              <Link href="/contact" className="block text-center bg-brand-red text-white mt-8 py-3.5 rounded-md font-semibold hover:bg-brand-red-dark transition-colors">
                Submit referral online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Referral checklist — paper, three plain columns, dash lists */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="kicker mb-5">What to include</span>
            <h2 className="text-3xl lg:text-4xl text-navy">A complete referral starts care sooner</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Do not have everything? Call us anyway. We can open intake with partial information and gather the rest ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              { title: 'Patient', items: ['Full legal name and date of birth', 'Address and phone number', 'Emergency contact', 'Primary language', 'Insurance and ID numbers'] },
              { title: 'Clinical', items: ['Primary and secondary diagnoses (ICD-10)', 'Signed orders for home health', 'Current medication list', 'Recent labs or relevant results', 'Homebound status documentation'] },
              { title: 'Discharge & plan', items: ['Anticipated discharge date', 'Hospital discharge summary', 'Goals of care and duration', 'Disciplines ordered (RN, PT, OT, SLP, MSW, HHA)', 'Wound care orders, if any'] },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-2xl text-navy mb-5 pb-3 border-b border-gray-300">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                      <span className="text-brand-red font-semibold shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available — simple text columns, no chips/icons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="text-3xl lg:text-4xl text-navy leading-tight">Disciplines available for your patients</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 self-center">
            {[
              'Skilled nursing (RN / LVN)', 'Physical therapy', 'Occupational therapy', 'Speech-language pathology',
              'Home health aide', 'Medical social work', 'IV / infusion therapy', 'Wound care (CWCN)',
              'Diabetes education', 'Cardiac monitoring', 'Fall prevention', 'Medication management',
              'Post-surgical care', 'Pain management', 'CHF / COPD management', 'Orthopedic rehab',
            ].map((svc) => (
              <p key={svc} className="text-gray-700 text-sm py-2 border-b border-gray-100">{svc}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-3xl lg:text-4xl leading-tight max-w-lg">Ready to refer your first patient?</h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="bg-brand-red text-white px-8 py-4 rounded-md font-semibold hover:bg-brand-red-dark transition-colors text-center">
              Submit a referral
            </Link>
            <a href="tel:+18325551234" className="flex items-center justify-center gap-2.5 border border-white/40 text-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition-colors">
              <Phone size={18} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
