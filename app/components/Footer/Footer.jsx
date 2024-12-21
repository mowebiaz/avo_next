'use client'

import Link from 'next/link'
import { useAuth } from '../../context/AuthContext'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { FaRegUserCircle } from "react-icons/fa";
import './Footer.scss'

export function Footer() {
  const { user } = useAuth()

  return <footer>{!user && <ButtonLink className="button-login" href="/login"><FaRegUserCircle /></ButtonLink>}</footer>
}
