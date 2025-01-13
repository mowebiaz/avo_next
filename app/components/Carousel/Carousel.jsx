'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
import { IoMdCloseCircle } from 'react-icons/io'
import './Carousel.scss'

export function Carousel({ slides, initialSlide, onClose }) {
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(initialSlide, 0)
    }
  }, [swiper, initialSlide])

  return (
    <div className="carousel">
      <Swiper
        className="mySwiper"
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        onSwiper={setSwiper}
      >
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
        >
          <IoMdCloseCircle />
        </button>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-image-container">
              <Image
                src={slide.src}
                alt={slide.alt}
                /*width={750}*/
                /*layout="intrinsic"*/
                /*height={500}*/
                className="carousel-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
