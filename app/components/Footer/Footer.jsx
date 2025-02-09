'use client'

import { useAuth } from '../../context/AuthContext'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { FaRegUserCircle } from 'react-icons/fa'
import { LinkAria } from '../LinkAria/LinkAria'
import { Link } from 'react-aria-components'
import './Footer.scss'

export function Footer() {
  const { user } = useAuth()

  return (
    <footer>
      <div className='footer-text'>
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
      <p>
        <Link href="/mentions-legales" className='legal-link'>Mentions légales</Link>{' '}-{' '}
        <Link href="/politique-de-confidentialite" className='legal-link'>Politique de confidentialité</Link>
      </p>
      </div>
      {user ? (
        <Link
          className="link-admin"
          href="/admin"
          aria-label="Admin page"
        >
          Dashboard
        </Link>
      ) : (
        <ButtonLink
          className="button-login"
          href="/login"
          aria-label="Login as administrator"
        >
          <FaRegUserCircle />
        </ButtonLink>
      )}
    </footer>
  )
}
