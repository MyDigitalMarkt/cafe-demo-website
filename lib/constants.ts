export const IMAGES = {
  hero: 'https://cdn.abacus.ai/images/2db0632a-3bc3-439b-bc90-40c5abb7ef61.png',
  exterior: 'https://cdn.abacus.ai/images/8de0f86c-8d2d-4123-92b6-a2d351def497.png',
  ontbijt: 'https://cdn.abacus.ai/images/6a4b0e20-7b06-402a-9c6c-a9eeceffac2e.png',
  lunch: 'https://cdn.abacus.ai/images/7f097b84-90a1-434d-92fd-fc9197455cfb.png',
  diner: 'https://cdn.abacus.ai/images/e43561ae-2773-44a4-b8a4-ab8a5c7f5d2c.png',
  coffee: 'https://cdn.abacus.ai/images/68525fa2-6058-476c-8e55-3ceceb634ea2.png',
  dessert: 'https://cdn.abacus.ai/images/93a95d33-8262-4c63-818a-492bdf4a39cd.png',
  galleryInterior1: 'https://cdn.abacus.ai/images/0d01e8d7-2164-44d8-b372-297cf65e938c.png',
  galleryBar: 'https://cdn.abacus.ai/images/5a72f3c3-c22d-4a61-9134-3d30454e6163.png',
  galleryPlating: 'https://cdn.abacus.ai/images/a4468eb0-7fda-4c2a-888d-da8c5e8aee7b.png',
  galleryBarista: 'https://cdn.abacus.ai/images/402caf16-28ca-40ed-b441-a096119c63af.png',
  galleryTerrace: 'https://cdn.abacus.ai/images/dd8db283-cd54-4392-925f-ce982dd5ab32.png',
  teamChef: 'https://cdn.abacus.ai/images/af422e2f-f547-489e-bcf6-d8d8e042e717.png',
  about: 'https://cdn.abacus.ai/images/86ee79ce-9f81-4f4c-ad3d-6e65ce410ce5.png',
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Galerij', href: '/galerij' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Contact', href: '/contact' },
] as const

export const CONTACT_INFO = {
  address: 'Herengracht 182',
  city: 'Amsterdam',
  postcode: '1016 BR',
  phone: '+31 20 123 4567',
  email: 'info@degoudenboon.nl',
  lat: 52.3702,
  lng: 4.8897,
} as const

export const OPENING_HOURS = [
  { day: 'Maandag', hours: '08:00 - 22:00' },
  { day: 'Dinsdag', hours: '08:00 - 22:00' },
  { day: 'Woensdag', hours: '08:00 - 22:00' },
  { day: 'Donderdag', hours: '08:00 - 23:00' },
  { day: 'Vrijdag', hours: '08:00 - 00:00' },
  { day: 'Zaterdag', hours: '09:00 - 00:00' },
  { day: 'Zondag', hours: '09:00 - 21:00' },
] as const
