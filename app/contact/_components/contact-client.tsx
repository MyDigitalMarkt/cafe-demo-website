'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/animated-section'
import { CONTACT_INFO, OPENING_HOURS } from '@/lib/constants'

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Reservering',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    setStatus('loading')
    setErrorMsg('')

    try {
      // Portfolio demo - simulate success
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: 'Reservering', message: '' })
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err?.message ?? 'Er ging iets mis bij het verzenden.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e?.target?.name ?? ''
    const value = e?.target?.value ?? ''
    setFormData((prev: any) => ({ ...(prev ?? {}), [name]: value }))
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-16 bg-gradient-to-b from-accent/60 to-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Bereik Ons</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mt-2 mb-4">Contact</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Heeft u een vraag, wilt u reserveren of gewoon hallo zeggen? We horen graag van u.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16">
            {/* Form */}
            <AnimatedSection direction="left">
              <div className="bg-card p-6 sm:p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-border/50">
                <h2 className="font-display text-2xl font-bold mb-6">Stuur ons een bericht</h2>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-2">Bericht verzonden!</h3>
                    <p className="text-muted-foreground mb-6">
                      Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
                    >
                      Nieuw bericht sturen
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1.5">Naam *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData?.name ?? ''}
                          onChange={handleChange}
                          placeholder="Uw volledige naam"
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1.5">E-mail *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData?.email ?? ''}
                          onChange={handleChange}
                          placeholder="uw@email.nl"
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Telefoon</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData?.phone ?? ''}
                          onChange={handleChange}
                          placeholder="+31 6 1234 5678"
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Onderwerp *</label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData?.subject ?? 'Reservering'}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        >
                          <option value="Reservering">Reservering</option>
                          <option value="Vraag">Algemene vraag</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Evenement">Evenement / Groepsreservering</option>
                          <option value="Anders">Anders</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5">Bericht *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData?.message ?? ''}
                        onChange={handleChange}
                        placeholder="Vertel ons waar we u mee kunnen helpen..."
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg || 'Er ging iets mis bij het verzenden.'}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Verzenden...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Verstuur bericht
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-card p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adres</h3>
                      <p className="text-sm text-muted-foreground">
                        {CONTACT_INFO?.address}<br />
                        {CONTACT_INFO?.postcode} {CONTACT_INFO?.city}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-card p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefoon</h3>
                      <a href={`tel:${CONTACT_INFO?.phone ?? ''}`} className="text-sm text-primary hover:underline">
                        {CONTACT_INFO?.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-card p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-mail</h3>
                      <a href={`mailto:${CONTACT_INFO?.email ?? ''}`} className="text-sm text-primary hover:underline">
                        {CONTACT_INFO?.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-card p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-border/50">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold pt-2">Openingstijden</h3>
                  </div>
                  <ul className="space-y-2">
                    {OPENING_HOURS?.map?.((item: any) => (
                      <li key={item?.day ?? ''} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item?.day ?? ''}</span>
                        <span className="font-medium">{item?.hours ?? ''}</span>
                      </li>
                    )) ?? []}
                  </ul>
                </div>

                {/* Map placeholder */}
                <div className="bg-card rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-border/50">
                  <iframe
                    title="Locatie Café De Gouden Boon op de kaart"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=4.885%2C52.368%2C4.895%2C52.373&layer=mapnik&marker=52.3702%2C4.8897"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="w-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
