import { ButtonsContainer } from "@/app/components/acces/ButtonsContainer/ButtonsContainer"
import { AccesContent } from "@/app/components/acces/AccesContent/AccesContent"

export const metadata = {
  title: "Accès",
  description: "Comment accéder au studio à Avoriaz et à la station. Trouvez les informations pour venir en voiture, train, ou en bus."
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