import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/menu', '/galerij', '/over-ons', '/contact']
  return pages.map((page) => ({
    url: `https://example.com${page}`,
    lastModified: new Date(),
  }))
}
