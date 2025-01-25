import { BurgerIcon } from './BurgerIcon/BurgerIcon'
import { NavDesktop } from './navigation/NavDestkop/NavDesktop'
import { NavMobile } from './navigation/NavMobile/NavMobile'
import { LogoContainer } from './LogoContainer/LogoContainer'
import './Header.scss'

export function Header() {
  return (
    <header>
      {/* <LogoContainer /> */}
      <NavDesktop />
      <NavMobile />
    </header>
  )
}
