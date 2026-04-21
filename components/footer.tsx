'use client'

import Link from 'next/link'
import { Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, OPENING_HOURS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[hsl(25,30%,12%)] text-white/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-[hsl(30,65%,55%)]" />
              <span className="font-display text-xl font-bold text-white">De Gouden Boon</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Al sinds 2012 het gezelligste café van de grachtengordel. Ambachtelijke koffie, verse gerechten en een warme sfeer.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Navigatie</h4>
            <ul className="space-y-2">
              {NAV_LINKS?.map?.((link: any) => (
                <li key={link?.href ?? ''}>
                  <Link
                    href={link?.href ?? '/'}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link?.label ?? ''}
                  </Link>
                </li>
              )) ?? []}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(30,65%,55%)]" />
                <span>{CONTACT_INFO?.address}, {CONTACT_INFO?.postcode} {CONTACT_INFO?.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[hsl(30,65%,55%)]" />
                <span>{CONTACT_INFO?.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[hsl(30,65%,55%)]" />
                <span>{CONTACT_INFO?.email}</span>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[hsl(30,65%,55%)]" />
              Openingstijden
            </h4>
            <ul className="space-y-1.5 text-sm">
              {OPENING_HOURS?.map?.((item: any) => (
                <li key={item?.day ?? ''} className="flex justify-between">
                  <span className="text-white/60">{item?.day ?? ''}</span>
                  <span className="text-white/80">{item?.hours ?? ''}</span>
                </li>
              )) ?? []}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
          <p>&copy; 2026 Café De Gouden Boon. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
