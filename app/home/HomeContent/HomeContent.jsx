import { ButtonLink } from '../../components/ButtonLink/ButtonLink'
import './HomeContent.scss'

export function HomeContent() {
  return (
    <div className="home-content">
      <h1>Location de notre studio à Avoriaz</h1>
      <div className="buttons-div">
        <ButtonLink className="button-link-router" href="/studio">Voir le studio</ButtonLink>
        <ButtonLink className="button-link-router" href="/location">Nos Tarifs</ButtonLink>
      </div>
    </div>
  )
}
