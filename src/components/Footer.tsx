import Link from 'next/link'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">HAPI Health TX</p>
                <p className="text-blue-300 text-xs">Home Health Services</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Compassionate, clinically excellent home health care for patients across the greater Houston area.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-blue-300 hover:text-white transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link href="/services#skilled-nursing" className="hover:text-white transition-colors">Skilled Nursing</Link></li>
              <li><Link href="/services#physical-therapy" className="hover:text-white transition-colors">Physical Therapy</Link></li>
              <li><Link href="/services#occupational-therapy" className="hover:text-white transition-colors">Occupational Therapy</Link></li>
              <li><Link href="/services#speech-therapy" className="hover:text-white transition-colors">Speech Therapy</Link></li>
              <li><Link href="/services#home-health-aide" className="hover:text-white transition-colors">Home Health Aide</Link></li>
              <li><Link href="/services#social-work" className="hover:text-white transition-colors">Medical Social Work</Link></li>
              <li><Link href="/services#wound-care" className="hover:text-white transition-colors">Wound Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/patients" className="hover:text-white transition-colors">For Patients & Families</Link></li>
              <li><Link href="/physicians" className="hover:text-white transition-colors">For Physicians</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/patients#insurance" className="hover:text-white transition-colors">Insurance & Coverage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-blue-400" />
                <div>
                  <p className="text-white font-medium">(832) 555-1234</p>
                  <p className="text-xs">Available 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-blue-400" />
                <a href="mailto:info@hapihealthtx.com" className="hover:text-white transition-colors">
                  info@hapihealthtx.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-blue-400" />
                <span>Houston, TX & surrounding areas</span>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-blue-900 rounded-lg">
              <p className="text-xs text-blue-200">Licensed by the Texas Health &amp; Human Services Commission</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-400 text-xs">
          <p>&copy; {new Date().getFullYear()} HAPI Health TX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">HIPAA Notice</Link>
            <Link href="#" className="hover:text-white transition-colors">Non-Discrimination</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
