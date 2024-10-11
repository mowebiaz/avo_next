import { BurgerIcon } from "./BurgerIcon/BurgerIcon";
import { NavDesktop } from "./navigation/NavDestkop/NavDesktop";
import { NavMobile } from "./navigation/NavMobile/NavMobile";

export function Header() {
  return (
    <>
    <NavDesktop />
    <NavMobile />
    </>
  )
}