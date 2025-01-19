'use client'

import Image from 'next/image'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import './Carousel.scss'

export function Carousel({ images, index, setIndex }) {
  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="carousel">
      <Image
        src={images[index].src}
        alt={images[index].alt}
/*          width={images[index].width}
        height={images[index].height}  */

      />
      <div className="buttons">
        <button
          className="prev"
          onClick={prev}
        >
          <MdNavigateBefore />
        </button>
        <button
          className="next"
          onClick={next}
        >
          <MdNavigateNext />
        </button>
      </div>
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={index === i ? 'active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
