export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login/', '/admin/']
    },
    sitemap: 'https://avoriazloc.fr/sitemap.xml',
  }
}