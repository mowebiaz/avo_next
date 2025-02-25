'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Carousel } from '@/app/components/Carousel/Carousel'
import { TbZoom } from 'react-icons/tb'
import { IoMdCloseCircle } from 'react-icons/io'
import './Gallery.scss'

export function Gallery({ images }) {
  const [index, setIndex] = useState(0)

  const dialogRef = useRef(null)

  const openDialog = (selectedIndex) => {
    setIndex(selectedIndex)
    dialogRef?.current?.showModal()
  }

  const closeDialog = () => {
    setIndex(0)
    dialogRef?.current?.close()
  }

  // Close the dialog when the user clicks outside of it
  if (dialogRef.current) {
    dialogRef.current.addEventListener('click', (event) => {
      if (event.target === dialogRef.current) {
        closeDialog()
      }
    })
  }

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((image, idx) => (
          <div
            className="gallery-item"
            key={idx}
            onClick={() => openDialog(idx)}
          >
            <Image
              className="gallery-image"
              src={image.src}
              alt={image.alt}
              height={150}
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
          images={images}
          index={index}
          setIndex={setIndex}
        />
        <button
          className="btn-close"
          onClick={closeDialog}
        >
          <IoMdCloseCircle />
        </button>
      </dialog>
    </div>
  )
}
