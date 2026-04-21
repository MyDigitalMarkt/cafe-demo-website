'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Sunrise, Sun, Moon, Wine, Cake } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/animated-section'
import { IMAGES } from '@/lib/constants'

interface MenuItem {
  name: string
  description: string
  price: string
  tag?: string
}

interface MenuCategory {
  id: string
  label: string
  icon: any
  image: string
  items: MenuItem[]
}

const MENU_DATA: MenuCategory[] = [
  {
    id: 'ontbijt',
    label: 'Ontbijt',
    icon: Sunrise,
    image: IMAGES?.ontbijt ?? '',
    items: [
      { name: 'Eggs Benedict', description: 'Gepocheerde eieren, hollandaise saus, ambachtelijk zuurdesembrood', price: '\u20ac12,50', tag: 'Favoriet' },
      { name: 'Avocado Toast', description: 'Geplette avocado, cherry tomaten, feta, za\'atar, pompoenpitten', price: '\u20ac11,00' },
      { name: 'Gouden Boon Ontbijt', description: 'Roerei, spek, worst, toast, gebakken tomaat, jus d\'orange', price: '\u20ac15,50', tag: 'Populair' },
      { name: 'Pannenkoeken', description: 'Drie fluffy pannenkoeken met vers fruit, maple syrup en slagroom', price: '\u20ac10,50' },
      { name: 'Granola Bowl', description: 'Huisgemaakte granola, Griekse yoghurt, seizoensfruit, honing', price: '\u20ac9,50' },
      { name: 'Croissant & Jam', description: 'Versgebakken roomboter croissant met huisgemaakte confituur', price: '\u20ac5,50' },
    ],
  },
  {
    id: 'lunch',
    label: 'Lunch',
    icon: Sun,
    image: IMAGES?.lunch ?? '',
    items: [
      { name: 'Club Sandwich', description: 'Gegrilde kip, bacon, avocado, truffelmayonaise, friet', price: '\u20ac14,50', tag: 'Favoriet' },
      { name: 'Caesar Salade', description: 'Romaine sla, parmezaan, cro\u00fbtons, ansjovis, kip', price: '\u20ac13,50' },
      { name: 'Uitsmijter', description: 'Drie gebakken eieren, ham of kaas, brood naar keuze', price: '\u20ac11,00', tag: 'Hollands' },
      { name: 'Tosti Deluxe', description: 'Brie, walnoten, honing, rucola op zuurdesem', price: '\u20ac10,50' },
      { name: 'Soep van de Dag', description: 'Dagelijks vers bereid met artisanaal brood en boter', price: '\u20ac8,50' },
      { name: 'Poké Bowl', description: 'Zalm, avocado, edamame, mango, sojadressing, sushirijst', price: '\u20ac16,00' },
    ],
  },
  {
    id: 'diner',
    label: 'Diner',
    icon: Moon,
    image: IMAGES?.diner ?? '',
    items: [
      { name: 'Ossobuco', description: 'Langzaam gegaard kalfsvlees, risotto milanese, gremolata', price: '\u20ac24,50', tag: 'Chef\'s keuze' },
      { name: 'Zeebaars', description: 'Gebakken zeebaars, venkel, bloedsinaasappel, olijven', price: '\u20ac22,50' },
      { name: 'Biefstuk', description: 'Irish Black Angus, truffeljus, seizoensgroenten, aardappelgratin', price: '\u20ac26,50', tag: 'Populair' },
      { name: 'Risotto Funghi', description: 'Gemengde paddenstoelen, parmezaan, truffelolie', price: '\u20ac18,50' },
      { name: 'Eend Confit', description: 'Langzaam gegaarde eendenbout, rode kool, appel, jus', price: '\u20ac23,00' },
      { name: 'Pasta Vongole', description: 'Spaghetti, venusschelpen, knoflook, witte wijn, peterselie', price: '\u20ac19,50' },
    ],
  },
  {
    id: 'dranken',
    label: 'Dranken',
    icon: Wine,
    image: IMAGES?.coffee ?? '',
    items: [
      { name: 'Espresso', description: 'Dubbele shot, huisblend van De Koffiemaker', price: '\u20ac3,00' },
      { name: 'Cappuccino', description: 'Espresso met opgeschuimde melk, cacaopoeder', price: '\u20ac4,00', tag: 'Favoriet' },
      { name: 'Flat White', description: 'Dubbele espresso, fluwelen melkschuim', price: '\u20ac4,50' },
      { name: 'Verse Jus d\'Orange', description: 'Ter plekke geperst uit Spaanse sinaasappelen', price: '\u20ac5,00' },
      { name: 'Huiswijn (Wit/Rood)', description: 'Zorgvuldig geselecteerde wijn per glas', price: '\u20ac6,50' },
      { name: 'Ambachtelijk Bier', description: 'Wisselend aanbod van lokale brouwerijen', price: '\u20ac5,50' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: Cake,
    image: IMAGES?.dessert ?? '',
    items: [
      { name: 'Cr\u00e8me Br\u00fbl\u00e9e', description: 'Klassieke cr\u00e8me br\u00fbl\u00e9e met Tahiti-vanille', price: '\u20ac8,50', tag: 'Favoriet' },
      { name: 'Appeltaart', description: 'Hollandse appeltaart met slagroom, warm geserveerd', price: '\u20ac7,00', tag: 'Hollands' },
      { name: 'Chocolade Fondant', description: 'Warm chocoladetaartje met vloeibaar hart, vanille-ijs', price: '\u20ac9,50' },
      { name: 'Tiramisu', description: 'Huisgemaakt met mascarpone, espresso, amaretto', price: '\u20ac8,00' },
      { name: 'Kaasplankje', description: 'Selectie van 4 Nederlandse kazen, mosterd, noten', price: '\u20ac12,50' },
      { name: 'Sorbet', description: 'Drie bolletjes seizoensfruit sorbet', price: '\u20ac7,50' },
    ],
  },
]

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState('ontbijt')
  const currentCategory = MENU_DATA?.find?.((c: any) => c?.id === activeCategory) ?? MENU_DATA?.[0]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-16 bg-gradient-to-b from-accent/60 to-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ontdek</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mt-2 mb-4">
              Ons Menu
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Van een uitgebreid ontbijt tot een verfijnd diner — er is voor ieder moment iets bijzonders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 py-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center">
            {MENU_DATA?.map?.((cat: any) => {
              const Icon = cat?.icon ?? Coffee
              const isActive = cat?.id === activeCategory
              return (
                <button
                  key={cat?.id ?? ''}
                  onClick={() => setActiveCategory(cat?.id ?? 'ontbijt')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat?.label ?? ''}
                </button>
              )
            }) ?? []}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory?.id ?? 'default'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-[1fr_350px] gap-10">
                {/* Items */}
                <div className="space-y-4">
                  {currentCategory?.items?.map?.((item: any, idx: number) => (
                    <motion.div
                      key={item?.name ?? idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-card p-5 rounded-xl border border-border/50 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                              {item?.name ?? ''}
                            </h3>
                            {item?.tag && (
                              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                {item?.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{item?.description ?? ''}</p>
                        </div>
                        <span className="text-primary font-bold text-lg shrink-0">{item?.price ?? ''}</span>
                      </div>
                    </motion.div>
                  )) ?? []}
                </div>

                {/* Category Image */}
                <div className="hidden lg:block">
                  <div className="sticky top-44">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-muted">
                      <Image
                        src={currentCategory?.image ?? ''}
                        alt={`${currentCategory?.label ?? 'Menu'} categorie foto`}
                        fill
                        className="object-cover"
                        sizes="350px"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <h3 className="font-display text-2xl font-bold text-white">{currentCategory?.label ?? ''}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dietary note */}
          <div className="mt-12 p-6 bg-accent/50 rounded-xl text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Allergieën of dieetwensen?</strong> Informeer onze bediening. 
              Veel gerechten kunnen aangepast worden voor vegetarisch, veganistisch of glutenvrij.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
