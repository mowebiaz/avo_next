'use client'

import { useState, useRef } from 'react'
import { BurgerIcon } from '../../BurgerIcon/BurgerIcon'
import { routeList } from '../routeList'
import './NavMobile.scss'
import { useClickAway } from 'react-use'

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useClickAway(ref, () => {
    setIsOpen(false)
  })

  return (
    <div
      className="mobile"
      ref={ref}
    >
      <button
        className="burger-button"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-controls="navigation"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="sr-only">Menu</span>
        <BurgerIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <nav
          className="nav-mobile"
          id="navigation"
          aria-label="Menu"
        >
          <ul>
            {routeList.map((route) => {
              return (
                <li key={route.name}>
                  <a href={route.path}>{route.icon}{route.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </div>
  )
}
