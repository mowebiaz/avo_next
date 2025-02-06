import { FilterByCategories } from './FilterByCategories/FilterByCategories'

export const metadata = {
  title: 'Liens',
  description: 'Liens utiles à Avoriaz - Ski, Activités et Trajets',
  alternates: {
    canonical: 'https://avoriazloc.fr/liens',
  },
}

export default function Liens() {
  return (
    <main className="links">
      <h1>Liens utiles pour votre séjour à Avoriaz</h1>
      <FilterByCategories />
    </main>
  )
}
