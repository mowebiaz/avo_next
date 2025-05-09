'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { getCookie, setCookie } from 'cookies-next'
import { Button, Link } from 'react-aria-components'
import './CookieBanner.scss'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function CookieBanner() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = getCookie('cookiesAccepted')
    if (consent === 'true') {
      setCookiesAccepted(true)
    } else if (consent === undefined) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    setCookie('cookiesAccepted', 'true', { maxAge: 365 * 24 * 60 * 60 })
    setCookiesAccepted(true)
    setShowBanner(false)
  }

  const declineCookies = () => {
    setCookie('cookiesAccepted', 'false', { maxAge: 365 * 24 * 60 * 60 })
    setCookiesAccepted(false)
    setShowBanner(false)
  }

  return (
    <>
      {cookiesAccepted && (
        <>
          <Script

            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="google-analytics"
            /*strategy="afterInteractive"*/
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,});
          `,
            }}
          />
        </>
      )}

      {showBanner && (
        <div className="cookie-banner">
          <p>
            Ce site utilise des cookies pour vous fournir une meilleure
            expérience de navigation. En continuant à utiliser ce site, vous
            acceptez l&apos;utilisation de cookies. Voir notre <Link href="/politique-de-confidentialite" className="link">politique de confidentialité</Link>.
          </p>
          <div className="buttons">
            <Button onPress={acceptCookies}>Accepter</Button>
            <Button onPress={declineCookies}>Refuser</Button>
          </div>
        </div>
      )}
    </>
  )
}
