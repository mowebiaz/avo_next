import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { merienda, raleway } from './styles/fonts'
import { AuthProvider } from './context/AuthContext'
import { CookieBanner } from './components/CookieBanner/CookieBanner'
import './styles/globals.scss'


export const metadata = {
  title: {
    template: 'AvoriazLoc | %s',
    default: 'AvoriazLoc', // a default is required when creating a template
  },
  description: 'Location de studio à Avoriaz - Studio confortable au pied des pistes',
  openGraph: {
    type: 'website',
    siteName: 'AvoriazLoc',
     url: 'https://avoriazloc.fr',
   },
   alternates: {
    canonical: 'https://avoriazloc.fr',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${merienda.variable} ${raleway.variable}`}>
      <AuthProvider>
        <Header />
        {children}
        <Footer />
      </AuthProvider>
      <CookieBanner />
      </body>
    </html>
  )
}
