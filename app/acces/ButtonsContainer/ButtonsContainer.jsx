import { LinkAria } from '@/app/components/LinkAria/LinkAria'
import './ButtonsContainer.scss'

export function ButtonsContainer() {
  return (
    <div className="buttons-container">
      <LinkAria
        href="#studio"
        className="button-link-aria"
      >
        Accès studio
      </LinkAria>
      <LinkAria
        href="#station"
        className="button-link-aria"
      >
        Acces station
      </LinkAria>
    </div>
  )
}
