import { ButtonsContainer } from "@/app/acces/ButtonsContainer/ButtonsContainer"
import { AccesContent } from "@/app/acces/AccesContent/AccesContent"

export const metadata = {
  title: "Accès",
  description: "Comment accéder au studio à Avoriaz et à la station. Trouvez les informations pour venir en voiture, train, ou bus.",
  alternates: {
    canonical: 'https://avoriazloc.fr/acces',
  }
}

export default function Acces() {
  return (
    <main className="acces">
      <h1>Accès à la Station d&apos;Avoriaz et au Studio</h1>
      <ButtonsContainer />
      <AccesContent />
    </main>
  )
}