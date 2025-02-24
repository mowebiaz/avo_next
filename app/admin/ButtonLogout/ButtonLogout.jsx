import { logout } from '../../lib/firebase/auth/logout'
import { MdLogout } from "react-icons/md";
import './ButtonLogout.scss'

export function ButtonLogout() {

  return (
    <button className="button-logout" onClick={logout}>Logout <MdLogout/></button>
  )
}