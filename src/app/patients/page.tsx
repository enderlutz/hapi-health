import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

const CDN = 'https://images.unsplash.com'

const faqs = [
  { q: 'Who qualifies for home health services?', a: 'To qualify for Medicare-covered home health, you must be under a physician\'s care, require skilled nursing or therapy services, be "homebound" (meaning leaving home requires considerable effort), and receive services from a Medicare-certified agency. Our team verifies your eligibility at no cost.' },
  { q: 'Do I need a referral from my doctor?', a: 'Yes, home health services require a physician\'s order. Your hospital discharge planner, primary care physician, or specialist can refer you. We can also contact your doctor on your behalf if you call us first.' },
  { q: 'How quickly will care start?', a: 'We aim to start care within 24 to 48 hours of receiving a referral and verifying insurance. In urgent situations, we can often start the same day.' },
  { q: 'Does Medicare cover home health?', a: 'Yes. Medicare Part A covers home health services when you meet eligibility criteria: skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, and medical social work. There is no deductible and no copay under traditional Medicare.' },
  { q: 'What if I have Medicaid or private insurance?', a: 'We are enrolled as a Texas Medicaid provider and accept most major private insurance plans. Our team verifies your specific benefits before care begins so there are no surprises.' },
  { q: 'What does "homebound" mean?', a: 'Homebound means leaving home requires a considerable and taxing effort due to illness, injury, or functional limitation. You can still attend medical appointments, church, or adult day care and qualify.' },
  { q: 'Will I always see the same clinician?', a: 'We assign a primary clinician to each patient and strive for continuity. Occasionally a different team member may cover visits, but every staff member will be fully briefed on your care plan in advance.' },
  { q: 'What if I have a concern between visits?', a: 'Our RN is available on call 24 hours a day, 7 days a week. Call us any time with questions. For life-threatening emergencies, always call 911.' },
]

export default function PatientsPage() {
  return (
    <>
      {/* Photo header */}
      <section className="relative min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={`https://images.pexels.com/photos/29372693/pexels-photo-29372693.jpeg?auto=compress&cs=tinysrgb&w=1800`}
            alt="Nurse with patient at home"
            fill className="object-cover object-center" unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 pt-40">
          <p className="kicker mb-3" style={{ color: '#fff' }}>Patient Resources</p>
          <h1 className="text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-2xl">
            For Patients &amp; Families
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-xl">
            Everything you need to understand home health care, navigate your options, and get the support your family deserves.
          </p>
        </div>
      </section>

      {/* How it works — plain numbered layout, no icon boxes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="kicker mb-3">Your Care Journey</p>
            <h2 className="text-4xl font-semibold text-navy">What to Expect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { n: '01', h: 'First Contact', b: 'Call us or have your hospital discharge planner send a referral. We respond within hours and begin the intake process that same day.' },
              { n: '02', h: 'Insurance Verified', b: 'We contact your insurance, whether Medicare, Medicaid, or private, and confirm your coverage. We handle every form. You pay nothing for this step.' },
              { n: '03', h: 'Plan of Care Created', b: 'Your physician approves a personalized plan. You will know exactly which services you are receiving, how often, and what the goals are before the first visit.' },
              { n: '04', h: 'Care Begins at Home', b: 'A licensed clinician arrives within 24 to 48 hours. They report directly to your physician and adjust the plan as your condition changes.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-6 items-start">
                <span className="font-display text-5xl text-brand-red leading-none select-none shrink-0">{s.n}</span>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{s.h}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Rights — photo + plain list, no icon bullets */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="kicker mb-3">Know Your Rights</p>
              <h2 className="text-4xl font-semibold text-navy mb-6">Your Rights as a Patient</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                As a patient of HAPI Health TX, you have important rights under federal and Texas law. We are committed to upholding every one of them in every interaction.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Be treated with dignity and respect',
                  'Receive care without discrimination of any kind',
                  'Participate in planning your own care',
                  'Be informed about your diagnosis and treatment options',
                  'Privacy and confidentiality of your health information (HIPAA)',
                  'Know the names and roles of every person on your care team',
                  'Refuse any treatment or service at any time',
                  'Voice grievances without fear of retaliation',
                  'Receive a written notice of your patient rights',
                  'Have family involved in your care decisions',
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="text-brand-red font-bold mt-0.5 shrink-0">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src={`${CDN}/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80`}
                  alt="Nurse speaking with patient"
                  fill className="object-cover" unoptimized
                />
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-navy mb-2">24/7 Clinical Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A registered nurse is on call around the clock. If you have a concern between scheduled visits, call us any time of day or night.
                </p>
                <a href="tel:+18325551234" className="text-brand-red font-bold text-lg hover:underline">(832) 555-1234</a>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-navy mb-2">HIPAA Privacy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your health information is protected by HIPAA. We never share your information without your written consent, except as required by law or for direct care coordination with your physician.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance — clean white cards, no colored backgrounds */}
      <section id="insurance" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="kicker mb-3">Coverage</p>
            <h2 className="text-4xl font-semibold text-navy">Insurance We Accept</h2>
            <p className="text-gray-500 mt-3 max-w-xl">We verify your benefits at no cost before care begins, with no surprises, no hidden fees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Medicare',
                body: 'Medicare Part A covers 100% of approved home health services when eligibility criteria are met. No deductible, no copay.',
                items: ['Skilled nursing', 'Physical, occupational & speech therapy', 'Home health aide services', 'Medical social work'],
              },
              {
                title: 'Medicaid',
                body: 'Texas Medicaid (STAR, STAR+PLUS) covers home health for eligible low-income individuals and those with disabilities.',
                items: ['Traditional Medicaid', 'STAR managed care plans', 'STAR+PLUS waiver programs', 'CHIP (children)'],
              },
              {
                title: 'Private Insurance',
                body: 'We accept most major commercial insurance. We clarify your specific benefits before the first visit so you know exactly what to expect.',
                items: ['Blue Cross Blue Shield', 'United Healthcare', 'Aetna, Humana, Cigna', 'Private pay accepted'],
              },
            ].map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-2xl p-8">
                <div className="w-8 h-1 bg-brand-red rounded mb-5" />
                <h3 className="text-2xl font-semibold text-navy mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.body}</p>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-brand-red font-bold shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-paper">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="kicker mb-3">Common Questions</p>
            <h2 className="text-4xl font-semibold text-navy">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-7 py-5 font-semibold text-gray-900 hover:text-navy transition-colors list-none">
                  <span>{faq.q}</span>
                  <ArrowRight size={16} className="shrink-0 text-gray-400 group-open:rotate-90 transition-transform ml-4" />
                </summary>
                <div className="px-7 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — photo background, not plain color block */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${CDN}/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=1800&q=80`}
            alt="Care team" fill className="object-cover" unoptimized
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
          <h2 className="text-4xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-white/80 mb-8">Our coordinators are here around the clock.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-brand-red text-white px-8 py-4 rounded-md font-bold hover:bg-brand-red-dark transition-colors">
              Contact Us
            </Link>
            <a href="tel:+18325551234" className="border-2 border-white/50 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
