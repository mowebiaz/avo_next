import Link from 'next/link'
import './ButtonLink.scss'

export default function ButtonLink({ href, children, ...props }) {
  return (
    <Link
      href={href}
      className='button-link'
      {...props}
    >
      {children}
    </Link>
  )
}
