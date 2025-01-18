import Link from 'next/link'
import './ButtonLink.scss'

export function ButtonLink({
  href,
  className,
  children,
  ...props
}) {
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

