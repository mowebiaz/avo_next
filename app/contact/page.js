import { ContactForm } from './ContactForm/ContactForm'

export const metadata = {
  title: 'Contact',
  description:
    'Contactez-nous pour toute question à propos de notre studio à Avoriaz',
  alternates: {
    canonical: 'https://avoriazloc.fr/contact',
  },
}

export default function Contact() {
  return (
    <main className="contact">
      <h1>Contact</h1>
      <ContactForm />
    </main>
  )
}
