'use client'

import { GoogleMapsEmbed } from '@next/third-parties/google'
import { useState } from 'react'
import { GoogleMapsIcon } from '@/public/icons/GoogleMapsIcon'
import './mapGoogle.scss'

export function MapGoogle() {
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="map-google">
      {!showMap ? (
        <button onClick={() => setShowMap(true)}>
          <span className='map-google-btn'>
            <GoogleMapsIcon /> Afficher la carte
          </span>
        </button>
      ) : (
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
          mode="place"
          q="159 Cor des Hauts Forts, 74110 Avoriaz, France"
          zoom="16"
          width="100%"
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      )}
    </div>
  )
}
