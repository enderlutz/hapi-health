'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/patients', label: 'For Patients' },
  { href: '/physicians', label: 'For Physicians' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <p className="text-blue-800 font-bold text-lg leading-tight">HAPI Health TX</p>
              <p className="text-gray-500 text-xs">Home Health Services</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18325551234"
              className="flex items-center gap-2 text-blue-700 font-semibold text-sm"
            >
              <Phone size={16} />
              (832) 555-1234
            </a>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              Request Care
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-gray-700 font-medium py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-blue-700 text-white text-center py-3 rounded-lg font-semibold mt-2"
            onClick={() => setOpen(false)}
          >
            Request Care
          </Link>
        </div>
      )}
    </header>
  )
}
