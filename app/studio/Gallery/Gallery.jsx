'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Carousel } from '@/app/components/Carousel/Carousel'
import { TbZoom } from 'react-icons/tb'
import './Gallery.scss'

export function Gallery({ slides }) {
  const [activeSlide, setActiveSlide] = useState(null)
  const dialogRef = useRef(null)

  const openModal = (index) => {
    setActiveSlide(index)
    dialogRef.current?.showModal()
  }

  const closeModal = () => {
    setActiveSlide(null)
    dialogRef.current?.close()
  }

  // Close the dialog when the user clicks outside of it
  if (dialogRef.current) {
    dialogRef.current.addEventListener('click', (event) => {
      if (event.target === dialogRef.current) {
        closeModal()
      }
    })
  }

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {slides.map((slide, index) => (
          <div key={index} className='gallery-item'>
            <Image
              src={slide.src}
              alt={slide.alt}
              /*width={200}*/
              height={150}
              className="gallery-image"
              onClick={() => openModal(index)}
            />
            <TbZoom />
          </div>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="gallery-dialog"
      >
        <Carousel
          slides={slides}
          initialSlide={activeSlide}
          onClose={closeModal}
        />
      </dialog>
    </div>
  )
}
