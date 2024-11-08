import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
import './Carousel.scss'

export function Carousel({ slides }) {
  return (
    <Swiper
      className="mySwiper"
      /*    slidesPerView={1}
  spaceBetween={10}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}  */
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[EffectFade, Navigation, Pagination]}
      /*       slidesPerView={1}
       */
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-image-container">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={750}
              height={500}
              className="carousel-image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
