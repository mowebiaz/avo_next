import { ButtonLink } from '../../components/ButtonLink/ButtonLink'
import './ButtonsContainer.scss'

export function ButtonsContainer() {
  return (
    <div className="buttons-container">
      <ButtonLink href="#studio">Accès studio</ButtonLink>
      <ButtonLink href="#station">Acces station</ButtonLink>
    </div>
  )
}