import { StationContent } from "@/app/components/station/StationContent/StationContent"

export const metadata = {
  title: "Station",
  description: "Découvrez Avoriaz, station de ski prisée des Alpes. Profitez des pistes, des animations, et des activités pour toute la famille dans un cadre enneigé."
}

export default function Station() {
  return (
    <main className="station">
      <h1>Avoriaz</h1>
      <StationContent />
    </main>
  )
}