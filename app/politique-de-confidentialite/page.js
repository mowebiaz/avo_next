import { ConfidentialityContent } from './ConfidentialityContent/ConfidentialityContent'

export const metadata = {
  title: 'Politique de confidentialité',
  alternates: {
    canonical: 'https://avoriazloc.fr/politique-de-confidentialite',
  },
}

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="confidentiality">
      <h1>Politique de Confidentialité</h1>
      <ConfidentialityContent />
    </main>
  )
}
