'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Leaf, Users, Award, ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/animated-section'
import { IMAGES } from '@/lib/constants'

const VALUES = [
  {
    icon: Heart,
    title: 'Passie voor Kwaliteit',
    description: 'Elk gerecht en elke kop koffie wordt met liefde en aandacht bereid. We geloven dat kwaliteit begint bij de ingrediënten.',
  },
  {
    icon: Leaf,
    title: 'Duurzaam & Lokaal',
    description: 'We werken zoveel mogelijk met lokale, seizoensgebonden producten. Onze leveranciers zijn zorgvuldig geselecteerd.',
  },
  {
    icon: Users,
    title: 'Gemeenschap',
    description: 'We zijn meer dan een café — we zijn een ontmoetingsplek voor de buurt. Iedereen is welkom aan onze tafel.',
  },
  {
    icon: Award,
    title: 'Vakmanschap',
    description: 'Van onze barista\'s tot onze chef-kok: ons team bestaat uit gepassioneerde vakmensen die hun vak verstaan.',
  },
]

const TIMELINE = [
  { year: '2012', title: 'De droom begint', desc: 'Thomas en Sophie openen een klein koffiehuis aan de Herengracht.' },
  { year: '2015', title: 'Uitbreiding keuken', desc: 'We breiden uit met een volwaardige keuken en starten met lunch en diner.' },
  { year: '2018', title: 'Terras geopend', desc: 'Ons iconische grachtenterras wordt geopend — het mooiste plekje van de buurt.' },
  { year: '2021', title: 'Duurzaamheidskeurmerk', desc: 'We ontvangen het Green Key keurmerk voor onze duurzame bedrijfsvoering.' },
  { year: '2024', title: 'Beste Café Award', desc: 'Verkozen tot een van de top 10 cafés van Amsterdam door Time Out.' },
]

export default function OverOnsClient() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0">
          <Image
            src={IMAGES?.about ?? ''}
            alt="Gasten genieten van de sfeer bij Café De Gouden Boon"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Over Ons
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Het verhaal achter Café De Gouden Boon
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl bg-muted">
                <Image
                  src={IMAGES?.teamChef ?? ''}
                  alt="Chef-kok Thomas van Café De Gouden Boon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ons Verhaal</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6">
                Van koffiehuis tot geliefde buurtcafé
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Het begon in 2012, toen Thomas van der Berg en Sophie de Vries een oud pand aan de 
                  Herengracht transformeerden tot een knus koffiehuis. Met niks meer dan een tweedehands 
                  espressomachine en een droom begonnen ze aan hun avontuur.
                </p>
                <p>
                  Thomas, opgeleid aan de Hotelschool Den Haag en met ervaring in Michelin-sterrenrestaurants, 
                  bracht zijn culinaire expertise mee. Sophie, met haar achtergrond in interieurdesign, 
                  creëerde de warme, uitnodigende sfeer die het café kenmerkt.
                </p>
                <p>
                  Wat begon als een klein koffiehuis groeide in ruim tien jaar uit tot een volwaardig 
                  eetcafé met een trouwe schare vaste gasten. De Gouden Boon is niet alleen een plek 
                  om te eten en drinken — het is een plek waar verhalen worden gedeeld, vriendschappen 
                  ontstaan en herinneringen worden gemaakt.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="font-display text-3xl font-bold text-primary">13+</div>
                  <div className="text-sm text-muted-foreground">Jaar ervaring</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="font-display text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Teamleden</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="font-display text-3xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-muted-foreground">Sterren</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze Waarden</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              Waar we voor staan
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES?.map?.((item: any, idx: number) => {
              const Icon = item?.icon ?? Heart
              return (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-card p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
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

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Mijlpalen</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              Onze reis
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            {TIMELINE?.map?.((item: any, idx: number) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {item?.year ?? ''}
                    </div>
                    {idx < (TIMELINE?.length ?? 0) - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pt-2 pb-2">
                    <h3 className="font-display font-semibold text-lg">{item?.title ?? ''}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item?.desc ?? ''}</p>
                  </div>
                </div>
              </AnimatedSection>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-4">
              Kom langs en maak kennis
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">
              We verwelkomen u graag in ons café. Reserveer een tafel of loop gewoon binnen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Neem contact op <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
