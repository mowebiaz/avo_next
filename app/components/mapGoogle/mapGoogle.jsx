'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import './mapGoogle.scss'

export function MapGoogle() {
  const mapRef = useRef(null)

  useEffect(() => {
    const addPassiveEventListener = (eventName) => {
      document.addEventListener(eventName, () => {}, { passive: true })
    }
  
    addPassiveEventListener('touchmove')
    addPassiveEventListener('wheel')
    
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        'marker'
      )

      const position = { lat: 46.188039, lng: 6.77731 }

      const mapOptions = {
        center: position,
        zoom: 16,
        mapId: 'MY_MAPID',
      }

      const map = new Map(mapRef.current, mapOptions)

      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Pas du Lac',
      })

      const infoWindow = new google.maps.InfoWindow({
        content: `
            <strong>Pas du Lac</strong><br/>
            <a href="https://www.google.com/maps?q=46.188039,6.777310" target="_blank" style="color:blue; text-decoration:underline;">
              Ouvrir dans Google Maps
            </a>
        `,
      })

      marker.addListener('click', () => {
        infoWindow.open({ anchor: marker, map })
      })
    }
    initMap()
  }, [])
  return (
    <div
      className="map-google"
      ref={mapRef}
    ></div>
  )
}
