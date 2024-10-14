import { StudioContent } from '../../components/studio/StudioContent/StudioContent'

export const metadata = {
  title: "Studio",
  description: "Découvrez notre studio chaleureux à Avoriaz, idéalement situé au pied des pistes. Parfait pour un séjour en montagne, en famille ou entre amis."
}

export default function Studio() {
  return (
    <main className="studio">
      <StudioContent />
    </main>
  )
}