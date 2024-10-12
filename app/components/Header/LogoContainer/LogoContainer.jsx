'use client'

import Link from "next/link";
import { GiSnowflake1 } from "react-icons/gi";
import { usePathname } from "next/navigation";
import './LogoContainer.scss'

export function LogoContainer() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className='logo-container'>
      {!isHome &&
      <Link href='/' title='Accueil'>
      <GiSnowflake1 />
      </Link>}
    </div>
  )
}