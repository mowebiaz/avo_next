'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './ActiveLink.scss'

export function ActiveLink({ href, activeClassName, children, ...props }) {
  const pathname = usePathname()
  const className = pathname === href ? activeClassName : ''
  return (
    <Link
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}