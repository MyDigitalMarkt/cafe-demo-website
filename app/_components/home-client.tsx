'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Coffee, UtensilsCrossed, Sun, MapPin, Star, ArrowRight, Clock } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/animated-section'
import { IMAGES, OPENING_HOURS } from '@/lib/constants'

const HIGHLIGHTS = [
  {
    icon: Coffee,
    title: 'Ambachtelijke Koffie',
    description: 'Versgebrand door lokale branderij De Koffiemaker. Elke kop met zorg bereid door onze ervaren barista\'s.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Verse Seizoensgerechten',
    description: 'Dagelijks wisselend menu met ingrediënten van lokale boeren en leveranciers uit de regio.',
  },
  {
    icon: Sun,
    title: 'Sfeervolle Locatie',
    description: 'Gelegen aan de Herengracht met een prachtig terras en authentiek Amsterdams interieur.',
  },
  {
    icon: Star,
    title: 'Hoog Beoordeeld',
    description: 'Met een gemiddelde score van 4.8 sterren zijn we een van de best beoordeelde cafés in de buurt.',
  },
]

const MENU_PREVIEW = [
  { name: 'Eggs Benedict', price: '€12,50', desc: 'Gepocheerde eieren, hollandaise, ambachtelijk brood', image: IMAGES?.ontbijt },
  { name: 'Club Sandwich', price: '€14,50', desc: 'Gegrilde kip, bacon, avocado, truffle mayo', image: IMAGES?.lunch },
  { name: 'Ossobuco', price: '€24,50', desc: 'Langzaam gegaard kalfsvlees, risotto milanese', image: IMAGES?.diner },
]

export default function HomeClient() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES?.hero ?? ''}
            alt="Warm verlicht interieur van Café De Gouden Boon met gezellige zitplaatsen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Coffee className="w-4 h-4 text-amber-300" />
              <span className="text-white/90 text-sm font-medium">Sinds 2012 in Amsterdam</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Café De Gouden Boon
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Welkom in ons warme hoekje aan de Herengracht. Geniet van ambachtelijke koffie, 
              verse seizoensgerechten en de gezelligste sfeer van Amsterdam.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-5 h-5" />
                Bekijk ons Menu
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/25 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                Reserveren
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={IMAGES?.exterior ?? ''}
                  alt="De sfeervolle gevel van Café De Gouden Boon aan de Herengracht"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ons Verhaal</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6">
                Een plek waar iedereen zich thuis voelt
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Café De Gouden Boon is geboren uit een passie voor goede koffie en eerlijk eten. 
                Wat in 2012 begon als een klein koffiehuis aan de Herengracht, is uitgegroeid tot 
                een van de meest geliefde eetcafés van Amsterdam.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Onze chef-kok Thomas werkt uitsluitend met seizoensproducten van lokale boeren. 
                Elke dag staat er een nieuw dagmenu op het bord — altijd verrassend, altijd vers.
              </p>
              <Link
                href="/over-ons"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Lees meer over ons <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Waarom Wij</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              Wat ons bijzonder maakt
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS?.map?.((item: any, idx: number) => {
              const Icon = item?.icon ?? Coffee
              return (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-card p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item?.title ?? ''}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item?.description ?? ''}</p>
                  </div>
                </AnimatedSection>
              )
            }) ?? []}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Proeven</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-4">
              Uit onze keuken
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Een voorproefje van wat u kunt verwachten. Bekijk het volledige menu voor al onze gerechten.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {MENU_PREVIEW?.map?.((item: any, idx: number) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <Link href="/menu" className="group block">
                  <div className="bg-card rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <Image
                        src={item?.image ?? ''}
                        alt={item?.name ?? 'Gerecht'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-semibold text-lg">{item?.name ?? ''}</h3>
                        <span className="text-primary font-bold">{item?.price ?? ''}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item?.desc ?? ''}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            )) ?? []}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Bekijk het volledige menu <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES?.galleryInterior1 ?? ''}
            alt="Gezellig interieur van het café"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Reserveer uw tafel
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
              Wilt u zeker zijn van een plekje? Reserveer gemakkelijk online of bel ons direct.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Online Reserveren
              </Link>
              <a
                href="tel:+31201234567"
                className="w-full sm:w-auto px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/25 transition-all duration-300 border border-white/20 text-center"
              >
                Bel: +31 20 123 4567
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
