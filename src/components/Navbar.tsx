'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/patients', label: 'For Patients' },
  { href: '/physicians', label: 'For Physicians' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      {/* Top bar */}
      <div className="bg-[#0c2d4e] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-blue-200">Serving Houston &amp; Harris County — Medicare &amp; Medicaid Certified</span>
          <a href="tel:+18325551234" className="flex items-center gap-1.5 font-semibold hover:text-blue-200 transition-colors">
            <Phone size={12} />
            (832) 555-1234 &nbsp;|&nbsp; Available 24/7
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0c2d4e] flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <p className="text-[#0c2d4e] font-extrabold text-lg leading-tight tracking-tight">HAPI Health TX</p>
              <p className="text-gray-400 text-xs font-medium">Home Health Services</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-[#0c2d4e] text-sm font-semibold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:block bg-[#1a7a72] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#166b63] transition-colors"
          >
            Request Care
          </Link>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white px-4 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-gray-700 font-semibold text-lg py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <Link
              href="/contact"
              className="block bg-[#1a7a72] text-white text-center py-3 rounded-full font-bold"
              onClick={() => setOpen(false)}
            >
              Request Care
            </Link>
            <a
              href="tel:+18325551234"
              className="flex items-center justify-center gap-2 border-2 border-[#0c2d4e] text-[#0c2d4e] py-3 rounded-full font-bold"
            >
              <Phone size={16} /> (832) 555-1234
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
