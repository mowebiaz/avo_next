import Image from 'next/image'
import HomeBackground from '../../../public/images/home_background.webp'
import './HomePictureContainer.scss'


export function HomePictureContainer() {
  return(
    <div className="homePictureContainer">
      <Image
        className="homePicture"
        src={HomeBackground}
        alt="Avoriaz"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
      />
      </div>
  )
}