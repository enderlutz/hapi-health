import Link from 'next/link'
import {
  Heart,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Users,
  Activity,
  Home,
  Stethoscope,
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Skilled Nursing',
    desc: 'Licensed RNs and LVNs providing wound care, medication management, IV therapy, and chronic disease monitoring in your home.',
    href: '/services#skilled-nursing',
  },
  {
    icon: Activity,
    title: 'Physical Therapy',
    desc: 'Restore strength, mobility, and independence with a personalized PT plan delivered where you live.',
    href: '/services#physical-therapy',
  },
  {
    icon: Heart,
    title: 'Occupational Therapy',
    desc: 'Regain the ability to perform daily activities safely with adaptive techniques and home environment assessments.',
    href: '/services#occupational-therapy',
  },
  {
    icon: Home,
    title: 'Home Health Aide',
    desc: 'Certified aides assist with personal care, hygiene, and daily living activities under RN supervision.',
    href: '/services#home-health-aide',
  },
  {
    icon: Users,
    title: 'Medical Social Work',
    desc: 'Connecting patients and families to community resources, counseling, and care planning support.',
    href: '/services#social-work',
  },
  {
    icon: Shield,
    title: 'Wound Care',
    desc: 'Specialized assessment and treatment for complex wounds, surgical sites, and pressure injuries.',
    href: '/services#wound-care',
  },
]

const stats = [
  { value: '98%', label: 'Patient Satisfaction' },
  { value: '24/7', label: 'On-Call Nursing' },
  { value: '500+', label: 'Patients Served' },
  { value: '15+', label: 'Years of Care' },
]

const whyUs = [
  'Medicare & Medicaid certified',
  'Joint Commission accredited',
  'Background-checked, licensed clinicians',
  'Care starts within 24-48 hours of referral',
  'Bilingual staff - English & Spanish',
  'Coordinated care with your physician',
]

const testimonials = [
  {
    name: 'Maria G.',
    role: 'Patient Family Member',
    quote:
      'The nurses at HAPI Health TX were incredible. They treated my mother like family and communicated every step with us. We could not have asked for better care.',
    stars: 5,
  },
  {
    name: 'James R.',
    role: 'Patient',
    quote:
      'After my hip replacement, I was nervous about recovery at home. The physical therapy team had me walking confidently within weeks. Truly exceptional service.',
    stars: 5,
  },
  {
    name: 'Dr. Sandra L.',
    role: 'Referring Physician',
    quote:
      'HAPI Health TX is my first choice for home health referrals. They communicate proactively, follow the plan of care closely, and keep my patients out of the hospital.',
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/40 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm mb-6">
              <CheckCircle size={14} className="text-blue-300" />
              <span className="text-blue-100">Medicare & Medicaid Certified Agency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Healing Starts{' '}
              <span className="text-blue-300">at Home</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              HAPI Health TX delivers compassionate, clinically excellent home health services to patients across the greater Houston area. Skilled nursing, therapy, wound care, and more, in the comfort of your own home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors text-center"
              >
                Request Care Today
              </Link>
              <Link
                href="/physicians"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors text-center"
              >
                Refer a Patient
              </Link>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <Phone size={18} className="text-blue-300" />
              <span className="text-blue-200 text-sm">
                Call us anytime:{' '}
                <a href="tel:+18325551234" className="text-white font-semibold hover:underline">
                  (832) 555-1234
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl lg:text-4xl font-bold text-blue-200">{s.value}</p>
                <p className="text-blue-300 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Home Health Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our multidisciplinary team delivers coordinated, evidence-based care designed to help you recover, rehabilitate, and thrive at home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <s.icon size={22} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Why HAPI Health TX</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Care You Can Trust. Results You Can See.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We believe every patient deserves hospital-quality clinical care in the dignity of their own home. Our team of skilled nurses, therapists, and aides work together to deliver outcomes your physician will see in the chart and you will feel every day.
              </p>
              <ul className="space-y-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
              >
                Learn About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-blue-50 rounded-3xl p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Award, label: 'Joint Commission Accredited' },
                    { icon: Shield, label: 'Medicare Certified' },
                    { icon: Clock, label: '24/7 On-Call Support' },
                    { icon: Heart, label: 'Patient-First Philosophy' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <item.icon size={22} className="text-blue-600" />
                      </div>
                      <p className="text-gray-800 font-medium text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Getting Started Is Easy</h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              From your first call to your first visit, we handle everything quickly and with care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contact Us', desc: 'Call us or submit an online referral. We respond within hours.' },
              { step: '02', title: 'Insurance Verified', desc: 'We check your Medicare, Medicaid, or private insurance coverage at no cost.' },
              { step: '03', title: 'Care Plan Created', desc: 'Our clinical team works with your physician to create a personalized plan.' },
              { step: '04', title: 'Care Begins', desc: 'A skilled clinician arrives at your home within 24-48 hours.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-200">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Patient Stories</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Care Journey?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Our care coordinators are available 24/7 to answer questions and get your care started quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Request Care
            </Link>
            <a
              href="tel:+18325551234"
              className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} /> (832) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
