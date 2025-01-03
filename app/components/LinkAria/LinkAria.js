'use client'

import { Link } from 'react-aria-components'
import './LinkAria.scss'

export function LinkAria({ href, children, ...props }) {
  return (
    <Link
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
