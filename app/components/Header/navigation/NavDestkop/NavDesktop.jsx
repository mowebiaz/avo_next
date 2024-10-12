import Link from 'next/link'
import { routeList } from '../routeList'
import { ActiveLink } from './ActiveLink/ActiveLink'
import './NavDesktop.scss'

export function NavDesktop() {
  return (
    <nav
      className="nav-desktop"
      aria-label="Menu"
    >
      <ul>
        {routeList.map((route) => {
          return (
            <li key={route.name}>
              <ActiveLink key={route.name} href={route.path} activeClassName="active">
                {route.name}
              </ActiveLink>
            </li>
/*             <li key={route.name}>
              <a href={route.path}>{route.name}</a>
            </li> */
          )
        })}
      </ul>
    </nav>
  )
}
