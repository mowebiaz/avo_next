'use client'

import { useState, useRef } from 'react'
import { BurgerIcon } from '../../BurgerIcon/BurgerIcon'
import './NavMobile.scss'

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  /*   useClickAway(ref, () => {
    setIsOpen(false)
  }) */

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
    </div>
  )
}
