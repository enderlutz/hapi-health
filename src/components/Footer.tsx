import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#071e33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#1a7a72] flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <p className="font-extrabold text-lg leading-tight">HAPI Health TX</p>
                <p className="text-blue-400 text-xs">Home Health Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Compassionate, clinically excellent home health care for Houston families. Licensed, Medicare-certified, and available around the clock.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Skilled Nursing', '/services#skilled-nursing'],
                ['Physical Therapy', '/services#physical-therapy'],
                ['Occupational Therapy', '/services#occupational-therapy'],
                ['Speech Therapy', '/services#speech-therapy'],
                ['Home Health Aide', '/services#home-health-aide'],
                ['Wound Care', '/services#wound-care'],
                ['Infusion Therapy', '/services#infusion-therapy'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['About Us', '/about'],
                ['For Patients', '/patients'],
                ['For Physicians', '/physicians'],
                ['Careers', '/careers'],
                ['Contact', '/contact'],
                ['Insurance & Coverage', '/patients#insurance'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#1a7a72] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+18325551234" className="text-white font-semibold hover:text-teal-300 transition-colors">(832) 555-1234</a>
                  <p className="text-gray-500 text-xs mt-0.5">24/7 on-call nursing</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#1a7a72] mt-0.5 shrink-0" />
                <a href="mailto:info@hapihealthtx.com" className="text-gray-400 hover:text-white transition-colors">info@hapihealthtx.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#1a7a72] mt-0.5 shrink-0" />
                <span className="text-gray-400">Houston, TX &amp; Harris County</span>
              </li>
            </ul>
            <div className="mt-6 bg-[#0c2d4e] rounded-xl p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                Licensed by the Texas Health &amp; Human Services Commission &bull; Medicare &amp; Medicaid Certified
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} HAPI Health TX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">HIPAA Notice</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Non-Discrimination</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
