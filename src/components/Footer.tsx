import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Image src="/logo.png" alt="HAPI Health TX" width={150} height={52} className="h-12 w-auto object-contain brightness-0 invert mb-5" />
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Home health care for Houston families, delivered with the skill of a hospital and the heart of a neighbor.
            </p>
            <p className="text-white/40 text-xs mt-5 leading-relaxed">
              Licensed by the Texas Health &amp; Human Services Commission<br />
              License #017xxxx&nbsp;·&nbsp;Medicare &amp; Medicaid Certified
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">Care</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Skilled Nursing', '/services#skilled-nursing'],
                ['Physical Therapy', '/services#physical-therapy'],
                ['Occupational Therapy', '/services#occupational-therapy'],
                ['Home Health Aide', '/services#home-health-aide'],
                ['Wound Care', '/services#wound-care'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-white/70 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['About Us', '/about'],
                ['For Patients', '/patients'],
                ['For Physicians', '/physicians'],
                ['Careers', '/careers'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-white/70 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">Reach us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-red mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+18325551234" className="text-white font-semibold hover:text-white/80 transition-colors">(832) 555-1234</a>
                  <p className="text-white/45 text-xs mt-0.5">On-call nursing, 24 hours a day</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-red mt-0.5 shrink-0" />
                <a href="mailto:info@hapihealthtx.com" className="text-white/70 hover:text-white transition-colors">info@hapihealthtx.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-red mt-0.5 shrink-0" />
                <span className="text-white/70">9000 Westheimer Rd, Suite 200<br />Houston, TX 77063</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} HAPI Health TX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Notice of Privacy Practices</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Non-Discrimination</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
