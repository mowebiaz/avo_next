'use client'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import './mapGoogle.scss'

export function MapGoogle() {
  return (
    <div className="map-google">
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
        mode="place"
        q="159 Cor des Hauts Forts, 74110 Avoriaz, France"
        zoom='16'
        width={'100%'}
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </div>
  )
}
