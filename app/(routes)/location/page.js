import { LocationContent } from '../../components/location/LocationContent/LocationContent'

export const metadata = {
  title: "Location",
  description: "Les tarifs et disponibilités de notre studio à louer à Avoriaz. Idéalement situé au pied des pistes, ce studio est parfait pour vos vacances à la montagne."
}

export default function Location() {
  return (
    <main className="location">
      <LocationContent />
    </main>
  )
}