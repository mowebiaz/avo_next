import { HomePictureContainer } from './components/home/HomePictureContainer/HomePictureContainer'
import { HomeContent } from './components/home/HomeContent/HomeContent'

export default function Home() {
  return (
    <main className="home">
      <HomePictureContainer />
      <HomeContent />
    </main>
  )
}
