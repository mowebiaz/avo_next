import Link from 'next/link'
import './LocationContent.scss'

export function LocationContent() {
  return (
    <div className="location-content">
      <h1>Studio à louer à Avoriaz - Disponibilités et Tarifs</h1>
      <section>
        <h2>Disponibilités et tarifs</h2>
        {/*         TODO
         */}{' '}
      </section>
      <section className="conditions">
        <h2>Réservation et conditions</h2>
        <ol>
          <li>
            Premier <Link href="/contact">contact</Link>: merci d&apos;indiquer
            la semaine souhaitée, votre e-mail, ainsi que le nombre
            d&apos;adulte(s) et d&apos;enfant(s)(moins de 18 ans).
          </li>
          <li>Envoi du contrat de location par mail.</li>
          <li>
            Le contrat de location est à retourner signé, accompagné des arrhes
            (50% du montant de la location) et du chèque de caution.
          </li>
          <li>
            La semaine est réservée à réception du courrier. Les arrhes sont
            encaissées dans les jours qui suivent.
          </li>
          <li>
            Le solde de la location est à payer 15 jours avant le début de la
            location.
          </li>
          <li>
            Le chèque de caution est renvoyé dans un délai d'une semaine après
            la fin de la location.
          </li>
        </ol>
        <h3>Informations</h3>
        <p>
          Les arrivées se font à partir de 17h et les départs avant 10h.
          <br></br>
          Il vous appartient de faire le ménage lors de votre départ.
          L&apos;appartement doit être rendu dans l&apos;état où il a été
          trouvé.<br></br>
          Les couettes et oreillers sont fournis, mais pas le linge: il vous
          faut apporter les draps, taies d&apos;oreiller et linge de toilette.
          Le studio est non-fumeur et les animaux ne sont pas admis.
        </p>
      </section>
    </div>
  )
}
