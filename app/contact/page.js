import { ContactFormmodif } from "./ContactForm/ContactFormmodif"

export const metadata = {
  title: "Contact",
  description: "Contactez-nous pour toute question à propos de notre studio à Avoriaz",
}


export default function Contact() {
  return (
    <main className="contact">
      <h1>Contact</h1>
      <ContactFormmodif />
    </main>
  )
}