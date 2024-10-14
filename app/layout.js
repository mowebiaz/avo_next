import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Merienda, Raleway } from 'next/font/google'
import './styles/globals.scss'

const merienda = Merienda({ subsets: ['latin'], variable: '--font-merienda' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata = {
  title: {
    template: 'AvoriazLoc | %s',
    default: 'AvoriazLoc', // a default is required when creating a template
  },
  description: 'Location de studio à Avoriaz - Studio confortable au pied des pistes',
  openGraph: {
    type: 'website',
    siteName: 'AvoriazLoc',
/*     url: 'https://www.morganeweb.dev/',
 */  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${merienda.variable} ${raleway.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
