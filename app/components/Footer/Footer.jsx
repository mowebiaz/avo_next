'use client'

import Link from 'next/link'
import { useAuth } from '../../context/AuthContext'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { FaRegUserCircle } from 'react-icons/fa'
import './Footer.scss'
import { LinkAria } from '../LinkAria/LinkAria'

export function Footer() {
  const { user } = useAuth()

  return (
    <footer>
      <p>
        Codé avec ❤️ par{' '}
        <LinkAria
          href="https://morganeweb.com/"
          target="_blank"
          referrerPolicy="no-opener no-referrer"
          className="link"
        >
          MorganeWeb
        </LinkAria>
        - © {new Date().getFullYear()} Tous droits reservés
      </p>
      {user ? (
        <Link
          className="link-admin"
          href="/admin"
        >
          page Admin
        </Link>
      ) : (
        <ButtonLink
          className="button-login"
          href="/login"
        >
          <FaRegUserCircle />
        </ButtonLink>
      )}
    </footer>
  )
}
