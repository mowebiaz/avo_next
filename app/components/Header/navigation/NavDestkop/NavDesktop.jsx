import { routeList } from '../routeList'
import { ActiveLink } from './ActiveLink/ActiveLink'
import { LogoContainer } from '../../LogoContainer/LogoContainer'
import './NavDesktop.scss'

export function NavDesktop() {
  return (
    <div className='desktop'>
      <LogoContainer />

    
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
          )
        })}
      </ul>
    </nav>
    </div>
  )
}
