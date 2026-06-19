'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/services',   label: 'Services'         },
  { href: '/patients',   label: 'For Patients'     },
  { href: '/physicians', label: 'For Physicians'   },
  { href: '/about',      label: 'About Us'         },
  { href: '/careers',    label: 'Careers'          },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top bar */}
      <div className="bg-[#1b3a6b] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-blue-200">Serving Houston &amp; Harris County — Medicare &amp; Medicaid Certified</span>
          <a href="tel:+18325551234" className="flex items-center gap-1.5 font-semibold hover:text-blue-200 transition-colors">
            <Phone size={12} /> (832) 555-1234 &nbsp;|&nbsp; Available 24/7
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="shrink-0">
              <Image src="/logo.png" alt="HAPI Health TX" width={160} height={56} className="h-14 w-auto object-contain" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-gray-700 hover:text-[#1b3a6b] text-sm font-semibold transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="hidden lg:block bg-[#cc1230] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#a50f27] transition-colors"
            >
              Request Care
            </Link>

            <button className="lg:hidden p-2 text-gray-600" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t px-4 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block text-gray-700 font-semibold text-lg py-1" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <Link href="/contact" className="block bg-[#cc1230] text-white text-center py-3 rounded-full font-bold" onClick={() => setOpen(false)}>
              Request Care
            </Link>
            <a href="tel:+18325551234" className="flex items-center justify-center gap-2 border-2 border-[#1b3a6b] text-[#1b3a6b] py-3 rounded-full font-bold">
              <Phone size={16} /> (832) 555-1234
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
