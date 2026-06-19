import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone, Shield, Clock, Heart, FileText, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Who qualifies for home health services?',
    a: 'To qualify for Medicare-covered home health, you must be under a physician\'s care, require skilled nursing or therapy services, be "homebound" (meaning leaving home requires considerable effort), and receive services from a Medicare-certified agency like HAPI Health TX. Our team will help determine your eligibility at no cost.',
  },
  {
    q: 'Do I need a referral from my doctor?',
    a: 'Yes, home health services require a physician\'s order (referral). Your discharging hospital, primary care physician, or specialist can refer you to us. We can also contact your physician on your behalf if you call us directly.',
  },
  {
    q: 'How quickly will care start after a referral?',
    a: 'We aim to begin care within 24 to 48 hours of receiving a referral and verifying insurance. In urgent situations, we can often start care the same day.',
  },
  {
    q: 'Does Medicare cover home health?',
    a: 'Yes. Medicare Part A covers home health services if you meet eligibility criteria. Covered services include skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, and medical social work. There is no deductible or copay for home health under traditional Medicare.',
  },
  {
    q: 'What if I have Medicaid or private insurance?',
    a: 'We are enrolled as a Texas Medicaid provider and accept most major private insurance plans. Our team will verify your specific benefits before care begins so there are no surprises.',
  },
  {
    q: 'What does "homebound" mean?',
    a: 'Homebound means that leaving home requires a considerable and taxing effort. This does not mean you can never leave home, but rather that leaving is difficult due to illness, injury, or functional limitation. You can attend church, medical appointments, or adult day care and still qualify.',
  },
  {
    q: 'Will I always see the same nurse or therapist?',
    a: 'We strive for continuity of care and will assign a primary clinician to your case. Occasionally a different team member may cover visits, but all staff will be fully briefed on your care plan.',
  },
  {
    q: 'What happens if I have a medical emergency between visits?',
    a: 'Our RN is available on call 24 hours a day, 7 days a week to answer urgent questions and provide guidance. For life-threatening emergencies, always call 911.',
  },
]

export default function PatientsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">Patient Resources</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">For Patients & Families</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Everything you need to understand home health care, navigate your options, and get the support your family deserves.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Your Care Journey</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What to Expect from HAPI Health TX</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                step: 'Step 1',
                title: 'First Contact',
                desc: 'Call us or have your hospital discharge planner or physician send a referral. We respond within hours and begin the intake process.',
              },
              {
                icon: Shield,
                step: 'Step 2',
                title: 'Insurance Verification',
                desc: 'We contact your insurance to confirm your benefits and coverage. We handle all paperwork and communicate your benefits to you clearly.',
              },
              {
                icon: FileText,
                step: 'Step 3',
                title: 'Plan of Care',
                desc: 'Your physician approves a personalized plan of care. You will know exactly which services to expect, how often, and what the goals are.',
              },
              {
                icon: Heart,
                step: 'Step 4',
                title: 'Care at Home',
                desc: 'Our clinicians come to your home on a regular schedule. We monitor your progress, adjust the plan as needed, and keep your doctor informed.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <p className="text-blue-600 font-semibold text-xs uppercase tracking-wider mb-1">{item.step}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Rights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Know Your Rights</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Your Rights as a Patient</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                As a patient of HAPI Health TX, you have important rights under federal and Texas law. We are committed to protecting and upholding those rights in every interaction.
              </p>
              <ul className="space-y-3">
                {[
                  'Be treated with dignity and respect',
                  'Receive care without discrimination based on race, color, religion, sex, age, or disability',
                  'Participate in planning your own care',
                  'Be informed about your diagnosis and treatment options',
                  'Privacy and confidentiality of your health information (HIPAA)',
                  'Know the names and roles of your care team',
                  'Refuse any treatment or service',
                  'Voice grievances without fear of retaliation',
                  'Receive a written notice of patient rights',
                  'Have family or a representative involved in care decisions',
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-blue-600 mt-0.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <Clock size={28} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Clinical Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A registered nurse is on call around the clock. If you have a clinical concern between scheduled visits, call us any time.
                </p>
                <a href="tel:+18325551234" className="text-blue-700 font-semibold mt-3 inline-block hover:underline">
                  (832) 555-1234
                </a>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
                <Shield size={28} className="text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">HIPAA Privacy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your health information is protected by HIPAA. We never share your information without your written consent, except as required by law or for care coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Coverage</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Insurance We Accept</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              We work with most insurance plans and verify your benefits at no cost before care begins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-700 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Medicare</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Medicare Part A covers 100% of approved home health services if you meet eligibility criteria. No deductible, no copay.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={14} />Skilled nursing</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />Physical, occupational & speech therapy</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />Home health aide services</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />Medical social work</li>
              </ul>
            </div>
            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Medicaid</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Texas Medicaid (STAR, STAR+PLUS) covers home health services for eligible low-income individuals and those with disabilities.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={14} />Traditional Medicaid</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />STAR managed care plans</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />STAR+PLUS waiver programs</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />CHIP (children)</li>
              </ul>
            </div>
            <div className="bg-gray-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Private Insurance</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We accept most major commercial insurance plans. Benefits vary by plan, and we will clarify your coverage before the first visit.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={14} />Blue Cross Blue Shield</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />United Healthcare</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />Aetna, Humana, Cigna</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} />Private pay accepted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle size={36} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:text-blue-700 transition-colors list-none">
                  <span>{faq.q}</span>
                  <ArrowRight size={18} className="shrink-0 text-blue-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-blue-200 mb-8">Our care coordinators are here to help any time of day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Contact Us
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
