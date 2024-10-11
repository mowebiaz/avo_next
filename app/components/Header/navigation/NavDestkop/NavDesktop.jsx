import { routeList } from "../routeList"
import './NavDesktop.scss'

export function NavDesktop() {
  return (
    <nav className="nav-desktop">
      <ul>
        {routeList.map((route) => {
          return (
            <li key={route.path}>
              <a href={route.path}>{route.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}