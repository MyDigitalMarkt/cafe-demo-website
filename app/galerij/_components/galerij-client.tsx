'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/animated-section'
import { IMAGES } from '@/lib/constants'

const GALLERY_ITEMS = [
  { src: IMAGES?.hero, alt: 'Warm verlicht café interieur met sfeervolle verlichting', category: 'Interieur' },
  { src: IMAGES?.galleryInterior1, alt: 'Gezellige zithoek met comfortabele stoelen en planten', category: 'Interieur' },
  { src: IMAGES?.galleryBar, alt: 'Stijlvolle bar met espressomachine en wijncollectie', category: 'Interieur' },
  { src: IMAGES?.ontbijt, alt: 'Uitgebreid ontbijt met verse ingrediënten', category: 'Gerechten' },
  { src: IMAGES?.lunch, alt: 'Gourmet lunch sandwich met bijgerecht', category: 'Gerechten' },
  { src: IMAGES?.diner, alt: 'Elegant geserveerd diner gerecht', category: 'Gerechten' },
  { src: IMAGES?.galleryPlating, alt: 'Prachtig opgemaakt bord door onze chef-kok', category: 'Gerechten' },
  { src: IMAGES?.dessert, alt: 'Huisgemaakt dessert met seizoensfruit', category: 'Gerechten' },
  { src: IMAGES?.coffee, alt: 'Latte art in een ambachtelijke cappuccino', category: 'Dranken' },
  { src: IMAGES?.galleryBarista, alt: 'Onze barista aan het werk achter de espressomachine', category: 'Team' },
  { src: IMAGES?.galleryTerrace, alt: 'Zonnig terras aan de gracht', category: 'Terras' },
  { src: IMAGES?.exterior, alt: 'De sfeervolle gevel van het café', category: 'Exterieur' },
]

const CATEGORIES = ['Alles', 'Interieur', 'Gerechten', 'Dranken', 'Team', 'Terras', 'Exterieur']

export default function GalerijClient() {
  const [filter, setFilter] = useState('Alles')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = filter === 'Alles'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS?.filter?.((item: any) => item?.category === filter) ?? []

  const openLightbox = (idx: number) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-16 bg-gradient-to-b from-accent/60 to-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ontdek</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mt-2 mb-4">Galerij</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Een kijkje in onze wereld. Van ons interieur tot onze gerechten — dit is Café De Gouden Boon.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 py-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center">
            {CATEGORIES?.map?.((cat: string) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {cat}
              </button>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered?.map?.((item: any, idx: number) => (
                <motion.div
                  key={`${item?.src ?? ''}-${item?.category ?? ''}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] transition-all duration-300">
                    <Image
                      src={item?.src ?? ''}
                      alt={item?.alt ?? 'Galerij foto'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                      <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                          {item?.category ?? ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )) ?? []}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
              aria-label="Sluiten"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e: any) => e?.stopPropagation?.()}
            >
              <Image
                src={filtered?.[lightbox]?.src ?? ''}
                alt={filtered?.[lightbox]?.alt ?? 'Galerij foto'}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
