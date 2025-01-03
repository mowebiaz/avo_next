import { LinkAria } from '@/app/components/LinkAria/LinkAria'
import './ButtonsContainer.scss'

export function ButtonsContainer() {
  return (
    <div className="buttons-container">
      <LinkAria
        href="#studio"
        className="button-link"
      >
        Accès studio
      </LinkAria>
      <LinkAria
        href="#station"
        className="button-link"
      >
        Acces station
      </LinkAria>
    </div>
  )
}
